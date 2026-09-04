# Portfolio — v2

A ground-up rebuild of the personal site. v1 was the Once UI *Magic Portfolio* template;
v2 is written from scratch with no template underneath and a purpose-built motion layer.

## Stack

| | v1 | v2 |
|---|---|---|
| Framework | Next.js 14 (Pages-era config, `[locale]` routes) | **Next.js 15**, App Router |
| React | 18 | **19** |
| Styling | SCSS + vendored `once-ui` design system (~120 files) | **Tailwind CSS v4** (`@theme` tokens) |
| Motion | template's built-ins | **Framer Motion**, hand-rolled primitives |
| Content | `resources/content.js` (JSX in a .js file) | `src/content/site.ts` (typed) |
| i18n / MDX | next-intl + MDX pipeline | removed — single page, no CMS |

Output is a fully static single page: **~154 kB first load JS**.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/
  app/
    layout.tsx        metadata, OG tags, fonts
    page.tsx          section composition + skip-link
    globals.css       theme tokens, ambient layers, keyframes
  content/site.ts     ALL copy and data — edit here, not in components
  components/
    Nav Hero Stats About Experience Projects Skills Contact Footer
    ui/               motion primitives
```

**All content lives in `src/content/site.ts`.** No copy is hardcoded in components.

## Motion layer

| Primitive | What it does |
|---|---|
| `Reveal` | Scroll-triggered fade/rise via `whileInView` |
| `Scramble` | Decrypt-on-mount text; real string stays in the DOM for a11y |
| `Magnetic` | Springs a control toward the cursor on hover |
| `SpotlightCard` | Cursor-following radial highlight on card surface + border |
| `Counter` | Counts up when scrolled into view |
| `Cursor` | Soft trailing spotlight (fine pointers only) |
| `ScrollProgress` | Reading-progress bar |
| `SkillOrbit` | **The centrepiece** — skills revolving around the bitmoji |

### SkillOrbit

Three concentric rings carry the stack around the avatar. Each ring has a rotating
carrier (`.ring-spin`) and every chip counter-rotates at the same rate, so labels stay
upright instead of tumbling. A `conic-gradient` masked to a 2px annulus gives each ring a
travelling energy arc; rings alternate direction and speed.

Deliberately **pure CSS, not Framer Motion** — it runs on the compositor, so it keeps
turning even when the main thread is busy, and it animates before hydration. Hovering the
stage pauses every ring (`animation-play-state`) so the chips can actually be read.

Geometry lives in `orbitRings` in `src/content/site.ts` — radius, duration, direction and
each chip's starting angle. The whole stage scales via one `--orbit-scale` custom property
per breakpoint.

Plus: nav scroll-spy with a shared-`layoutId` sliding pill, a scroll-linked gradient
rail on the experience timeline, and a CSS marquee.

### Two deliberate decisions

1. **The hero does not use `whileInView`.** Framer Motion registers its
   IntersectionObserver during hydration and can miss an element that is *already*
   intersecting, leaving above-the-fold content stuck at `initial`. The hero is driven
   from an explicit post-mount flag instead — deterministic.

2. **No `filter: blur()` on the ambient glows.** They're radial gradients, which are
   already soft. A large blurred surface animated per-frame is a serious jank source;
   the glows animate opacity only, which stays on the compositor.

## Accessibility

- `prefers-reduced-motion` honoured throughout — every primitive collapses to a fade or
  no-op, and self-running CSS animations are disabled.
- Skip-to-content link, visible focus rings, semantic landmarks, `aria-label`s on icon links.
- Scramble exposes the real text via `aria-label` with the animating span `aria-hidden`.

## Content corrections carried over from v1

- `Gokwik` → **GoKwik** throughout.
- Newgen dates were `2020 January – 2022 March`; corrected to **Jan 2020 – Apr 2022**
  with the trainee → engineer progression shown.
- Skills list expanded — v1 omitted Go, Kafka, Redis, Docker, Kubernetes, TypeScript
  and PostgreSQL, which understated the backend work.
- Footer year is now derived from `Date`, not hardcoded.

## Not done yet

- No `public/` assets: no avatar, favicon, OG image, or `resume.pdf`
  (`person.avatar` / `person.resume` in `site.ts` point at paths that don't exist yet).
- Fonts load from Google Fonts via `<link>`; `next/font` would remove the round-trip.
- Two different emails exist across sources — this uses `pvenkatesh0614@gmail.com`
  (the one live on v1). The résumé uses `pvenkatesh483@gmail.com`. Pick one.

## The skill orbit

The hero centrepiece: skill rings revolving around the character in **real 3D**.

The whole stage is a single `transform-style: preserve-3d` scene. Each ring is a plane
with its own `rotateX` (tilt), `rotateY` (yaw) and vertical offset, so the three bands
sit at different heights and angles around the figure. Because everything shares one 3D
context, the browser depth-sorts the chips against him — they genuinely pass **behind**
the character and re-emerge in front. No `z-index` tricks.

Depth is reinforced by two flat planes: a translucent fog plane just behind the figure
(anything further away is drawn under it and dims), and a floor ellipse at his feet.

**Billboarding.** A chip inherits `Rx(tilt) · Ry(yaw) · Rz(spin) · Rz(angle)` from its
ancestors, which would leave the label tumbling. Two nested elements cancel it:
`.chip-unspin` runs the ring's own keyframe in reverse to kill `Rz(spin)`, and
`.chip-face` applies the static inverse of the rest. Net orientation is identity, so
every label faces the camera squarely wherever it is on its orbit.

**Depth.** Distance is animated, not measured. A chip is farthest from the camera when
`(startAngle + spin) ≡ 0°` — the top of the tilted ellipse — so the moment it reaches the
far side is fixed by its starting angle alone. One shared `ringDepth` keyframe runs at the
ring's own period with a negative `animation-delay` derived from that angle, which keeps
it permanently in phase with the rotation. Far chips lose brightness, gain a little blur
and shrink; near ones go hot and sharp. That aerial perspective, plus the fog plane, is
what makes the orbit read as a volume rather than three flat tracks.

**Motion.** The rotation is pure CSS — it runs on the compositor, starts before
hydration, and does not depend on `requestAnimationFrame`, so a busy main thread cannot
stutter it. The only JavaScript is pointer parallax, which writes `--tx` / `--ty` on
`.orbit-world` and lets a CSS transition smooth them. A slow autonomous sway keeps the
depth legible on touch devices, where there is no pointer.

Hovering the stage pauses every moving part, so the labels can actually be read.
Everything is disabled under `prefers-reduced-motion`.

**Alignment.** All three rings share one centre and one axis — `RING_TILT` and
`RING_YAW` in `src/content/site.ts` are applied to every ring, so they read as a single
nested system rather than three unrelated ellipses. Only radius, speed and direction
differ. If you ever want an armillary-sphere look instead, give each ring its own tilt;
the per-ring fields already exist.

**Tuning.** Geometry is data, in `orbitRings` in `src/content/site.ts`:

| field | meaning |
| --- | --- |
| `radius` | ring radius in px, at design scale |
| `duration` | seconds per revolution |
| `tilt` | `rotateX` — 0 faces the camera, 90 is edge-on |
| `yaw` | `rotateY` — swings the near side left/right |
| `y` | vertical offset, so rings band the figure at different heights |
| `reverse` | flips the direction of travel |
| `items[].angle` | starting position on the ring, in degrees |

**Responsive.** The stage scales through one `--orbit-scale` per breakpoint. Because it
is always 700×560 and wider than its wrapper at every scale below 1, it is absolutely
positioned and `translate(-50%,-50%)`-ed *before* scaling — a grid container start-aligns
an overflowing child, which would otherwise leave `scale()` pivoting about the wrapper's
right edge.

Labels shrink with the stage, so `--chip-boost` gives them size back on small screens.
That alone makes 14 of them collide, so rings shed their labels as space runs out:
innermost below 700px, middle below 500px, leaving the outer ring's six headline skills
with room to breathe on a phone. The ring lines always stay, so the composition never
changes shape, and nothing is lost — every skill is listed in the Skills section.

### Swapping in a different character

`public/images/figure.png` is a **full-body standing render on a transparent
background**, trimmed to its alpha bounding box (currently 569×694, a dab pose exported
from Bitmoji — the source already had alpha, so no keying was needed).

To swap it: drop a replacement at the same path, trimmed so the figure's feet sit on the
bottom edge and there is no transparent padding. Aspect ratio can differ; the CSS sets
`height` and lets width follow. Two knobs control the fit:

- `.orbit-figure { height }` in `globals.css` — how tall he stands relative to the rings.
- `translate3d(-50%, calc(-50% + 25px), 0)` in the same rule (and in `figureFloat`) —
  vertical seating, so the rings cross at the height you want.

`avatar.png` is the older bust from v1, kept as a spare for a headshot or OG image.
