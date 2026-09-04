"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/\\";

type Props = {
  text: string;
  className?: string;
  /** ms between scramble frames */
  speed?: number;
  /** frames each character stays scrambled before locking */
  hold?: number;
  /** delay before starting, ms */
  startDelay?: number;
};

/**
 * Decrypt-on-mount text effect. Each character locks in left-to-right.
 * Renders the final text immediately for reduced-motion users and for SSR,
 * so the real string is always in the DOM for screen readers and crawlers.
 */
export default function Scramble({ text, className, speed = 28, hold = 2, startDelay = 0 }: Props) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    const start = () => {
      frame.current = 0;
      intervalId = setInterval(() => {
        const f = frame.current;
        const out = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const lockAt = i * hold;
            if (f >= lockAt + hold) return ch;
            if (f >= lockAt) return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");

        setDisplay(out);
        frame.current += 1;

        if (f > text.length * hold + hold) {
          clearInterval(intervalId);
          setDisplay(text);
        }
      }, speed);
    };

    timeoutId = setTimeout(start, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, speed, hold, startDelay, reduce]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
