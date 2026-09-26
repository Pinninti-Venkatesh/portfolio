"use client";

import { principles } from "@/content/site";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./SectionHeading";

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / Approach"
          title="Startup speed, big-system discipline"
          lead="How I work when there's no playbook and the system still has to hold."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full">
                <div className="p-7">
                  <p className="mb-4 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-medium text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.detail}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
