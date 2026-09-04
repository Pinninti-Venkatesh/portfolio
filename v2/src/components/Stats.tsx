"use client";

import { stats } from "@/content/site";
import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";

export default function Stats() {
  return (
    <section className="border-y border-line bg-bg-soft/40 px-5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <div className="font-mono text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-none text-accent">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  zeroLabel={s.zeroLabel}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-ink-dim">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
