"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, social, person } from "@/content/site";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import Scramble from "./ui/Scramble";

const icons = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-5 py-32">
      <div
        aria-hidden="true"
        className="pulse-slow absolute bottom-0 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(127,155,255,0.12), transparent 74%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-accent">
            05 / Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-[clamp(2rem,5.5vw,3.6rem)] font-semibold leading-tight tracking-[-0.02em] text-glow">
            {contact.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-mid">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <Magnetic strength={16}>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-[#0a1020] transition-shadow hover:shadow-[0_0_50px_-8px_rgba(127,155,255,0.65)]"
              >
                <Scramble text={contact.email} speed={22} />
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex items-center justify-center gap-2">
            {social.map((s) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <Magnetic key={s.name} strength={8}>
                  <a
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <p className="mt-8 text-sm text-ink-dim">{person.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
