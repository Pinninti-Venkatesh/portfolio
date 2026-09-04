"use client";

import { about, awards } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./SectionHeading";
import { Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01 / About" title="Where I'm useful" />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-ink-mid">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={0.15 + i * 0.1}>
                <div className="rounded-2xl border border-line bg-panel/50 p-5">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-soft bg-accent/10 text-accent">
                    <Trophy size={16} />
                  </div>
                  <h3 className="font-medium text-ink">{a.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-accent">{a.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
