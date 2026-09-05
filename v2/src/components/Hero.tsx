"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin, Github, Linkedin, Mail } from "lucide-react";
import { hero, person, social } from "@/content/site";
import Scramble from "./ui/Scramble";
import Magnetic from "./ui/Magnetic";
import SkillOrbit from "./ui/SkillOrbit";

const icons = { github: Github, linkedin: Linkedin, mail: Mail } as const;

/**
 * The hero is above the fold, so it does NOT use whileInView: framer-motion registers
 * its IntersectionObserver during hydration and can miss an element that is already
 * intersecting, leaving it stuck at `initial` until the first scroll. Driving the
 * animation from an explicit post-mount flag is deterministic.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const ease = [0.16, 1, 0.3, 1] as const;

  const rise = (delay: number, y = 16) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : y },
    transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : delay, ease },
  });

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden px-5 py-20 sm:py-24 lg:py-16">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pulse-slow absolute -top-56 left-1/2 -z-10 h-[620px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(127,155,255,0.13), rgba(127,155,255,0.05) 45%, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pulse-slow absolute -right-40 top-24 -z-10 h-[560px] w-[560px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(127,155,255,0.13), transparent 72%)",
          animationDelay: "-9s",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6">
        <div className="order-2 lg:order-1">
        <motion.p
          {...rise(0, 0)}
          className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-accent"
        >
          <Scramble text={hero.eyebrow} startDelay={250} />
        </motion.p>

        <h1 className="max-w-2xl text-[clamp(2.4rem,5.2vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          {hero.headline.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                initial={{ opacity: 0, y: reduce ? 0 : "0.7em" }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : "0.7em" }}
                transition={{
                  duration: reduce ? 0.2 : 0.9,
                  delay: reduce ? 0 : 0.1 + i * 0.11,
                  ease,
                }}
                className="block text-glow"
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...rise(0.5)}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-mid sm:text-lg"
        >
          {hero.subline}
        </motion.p>

        <motion.div {...rise(0.62)} className="mt-8 flex flex-wrap items-center gap-2">
          {hero.roles.map((r) => (
            <span
              key={r}
              className="rounded-full border border-line bg-panel/50 px-3 py-1 font-mono text-xs text-ink-dim"
            >
              {r}
            </span>
          ))}
        </motion.div>

        <motion.div {...rise(0.74)} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#0a1020] transition-shadow hover:shadow-[0_0_40px_-8px_rgba(127,155,255,0.6)]"
            >
              See the work
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink-mid transition-colors hover:border-ink-dim hover:text-ink"
            >
              Get in touch
            </a>
          </Magnetic>

          <div className="ml-1 flex items-center gap-1">
            {social.map((s) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <Magnetic key={s.name} strength={8}>
                  <a
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          {...rise(0.86, 0)}
          className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-dim"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} /> {person.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently at Imagine Learning
          </span>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: reduce ? 1 : 0.92 }}
          transition={{ duration: reduce ? 0.2 : 1.1, delay: reduce ? 0 : 0.35, ease }}
          className="order-1 justify-self-center lg:order-2 lg:justify-self-end"
        >
          <SkillOrbit />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        {...rise(1.1, 0)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-dim transition-colors hover:text-accent md:block"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
