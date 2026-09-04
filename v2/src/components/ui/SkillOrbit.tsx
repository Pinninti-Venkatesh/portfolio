"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { orbitRings, person } from "@/content/site";

/** Wrap into [0,1). */
const frac = (x: number) => ((x % 1) + 1) % 1;

/**
 * Phase-lock a chip's depth animation to its own orbit.
 *
 * A chip is farthest from the camera when (startAngle + spin) ≡ 0°, so the moment it
 * reaches the far side is fixed by its starting angle. Feeding that back as a negative
 * `animation-delay` makes one shared keyframe track each chip's real distance without
 * measuring anything per frame. Reversed rings run the spin the other way, hence the
 * sign flip.
 */
function depthDelay(angle: number, duration: number, reverse?: boolean) {
  const phase = frac((reverse ? angle : -angle) / 360);
  return `${((phase - 1) * duration).toFixed(2)}s`;
}

/** Maximum pointer-parallax swing, in degrees. */
const YAW_RANGE = 14;
const PITCH_RANGE = 9;

/**
 * Skill rings revolving around the character in real 3D.
 *
 * The whole stage is one `preserve-3d` scene: each ring is a plane tilted by its own
 * rotateX/rotateY and banded at its own height, and the browser depth-sorts everything
 * inside it. That means the chips genuinely travel behind the figure and re-emerge in
 * front — no z-index tricks, and a translucent fog plane behind him dims whatever is on
 * the far side of the orbit.
 *
 * The rotation itself is pure CSS so it runs on the compositor and survives a busy main
 * thread; the only JavaScript here is the pointer parallax, which writes two custom
 * properties and lets a CSS transition do the smoothing.
 */
export default function SkillOrbit() {
  const reduce = useReducedMotion();
  const worldRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduce || e.pointerType === "touch") return;
      const el = worldRef.current;
      if (!el) return;
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tx", `${x * YAW_RANGE}deg`);
      el.style.setProperty("--ty", `${-y * PITCH_RANGE}deg`);
    },
    [reduce],
  );

  const onLeave = useCallback(() => {
    const el = worldRef.current;
    if (!el) return;
    el.style.setProperty("--tx", "0deg");
    el.style.setProperty("--ty", "0deg");
  }, []);

  return (
    <div className="orbit-wrap">
      <div
        className="orbit-scene"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        role="img"
        aria-label={`${person.name}, with his skills orbiting around him: ${orbitRings
          .flatMap((r) => r.items.map((i) => i.label))
          .join(", ")}`}
      >
        <div className="orbit-world" ref={worldRef}>
          <div className="orbit-sway">
            <div className="orbit-fog" aria-hidden="true" />
            <div className="orbit-floor" aria-hidden="true" />
            <div className="orbit-halo" aria-hidden="true" />

            {orbitRings.map((ring, ri) => {
              const ringVars = {
                "--r": ring.radius,
                "--y": ring.y,
                "--tilt": ring.tilt,
                "--yaw": ring.yaw,
                "--dur": `${ring.duration}s`,
                "--dir": ring.reverse ? "reverse" : "normal",
                "--counter": ring.reverse ? "normal" : "reverse",
              } as React.CSSProperties;

              return (
                <div key={ri} className={`ring3d ring-${ri}`} style={ringVars}>
                  <div className="ring-spin">
                    {ring.items.map((item) => (
                      <div
                        key={item.label}
                        className="orbit-slot"
                        style={{ "--a": item.angle } as React.CSSProperties}
                      >
                        <div className="chip-unspin">
                          <div
                            className="chip-face"
                            style={
                              {
                                "--depth-delay": depthDelay(
                                  item.angle,
                                  ring.duration,
                                  ring.reverse,
                                ),
                              } as React.CSSProperties
                            }
                          >
                            <span>{item.label}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <Image
              src={person.figure}
              alt={person.name}
              width={141}
              height={366}
              priority
              className="orbit-figure"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
