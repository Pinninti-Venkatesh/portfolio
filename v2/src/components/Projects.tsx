"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 / Selected work"
          title="Things I've built and kept running"
          lead="A few systems where the interesting part wasn't writing the code. It was making it survive production."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  {p.metric && (
                    <span className="mb-5 inline-flex w-fit rounded-full border border-accent-soft bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                      {p.metric}
                    </span>
                  )}

                  <h3 className="text-xl font-medium text-ink">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-center gap-1 transition-colors hover:text-accent"
                      >
                        {p.title}
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>

                  <p className="mt-3 text-ink-mid">{p.blurb}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{p.detail}</p>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-ink-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
