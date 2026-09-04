"use client";

import { skillGroups, skillMarquee } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="04 / Stack" title="What I reach for" />
      </div>

      {/* infinite marquee — duplicated track, translated -50% */}
      <div className="marquee-mask relative my-12 overflow-hidden border-y border-line bg-bg-soft/40 py-5">
        <div className="animate-marquee flex w-max gap-3">
          {[...skillMarquee, ...skillMarquee].map((s, i) => (
            <span
              key={`${s}-${i}`}
              aria-hidden={i >= skillMarquee.length}
              className="whitespace-nowrap rounded-full border border-line bg-panel/60 px-5 py-2 font-mono text-sm text-ink-mid"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.07}>
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {g.title}
                </h3>
                <ul className="space-y-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="group flex items-center gap-2.5 text-ink-mid transition-colors hover:text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-line transition-all duration-300 group-hover:w-3 group-hover:bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
