"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The vertical rail fills as you scroll through the timeline.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="work" className="scroll-mt-24 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / Experience"
          title="Six years on systems that can't go down"
        />

        <div ref={ref} className="relative pl-8 md:pl-12">
          {/* rail */}
          <div aria-hidden="true" className="absolute left-0 top-2 h-full w-px bg-line">
            <motion.div
              style={{ scaleY: reduce ? 1 : height }}
              className="h-full w-full origin-top bg-gradient-to-b from-accent to-ember"
            />
          </div>

          <ol className="space-y-16">
            {experiences.map((exp, i) => (
              <li key={`${exp.company}-${exp.role}`} className="relative">
                {/* node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-2 grid h-3 w-3 place-items-center rounded-full md:-left-12 ${
                    exp.current ? "bg-accent" : "bg-line"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-60" />
                  )}
                </span>

                <Reveal delay={i * 0.05}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-xl font-medium text-ink">
                      {exp.role}
                      <span className="text-ink-dim"> · </span>
                      <a
                        href={exp.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-0.5 text-accent transition-colors hover:text-ink"
                      >
                        {exp.company}
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </h3>
                    <span className="font-mono text-xs text-ink-dim">{exp.timeframe}</span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-ink-mid leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-ink-dim"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line bg-panel/60 px-2 py-0.5 font-mono text-[11px] text-ink-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
