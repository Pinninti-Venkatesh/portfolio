"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** shown instead of the number when value is 0 (e.g. "Zero") */
  zeroLabel?: string;
  duration?: number;
  className?: string;
};

/** Counts up to `value` the first time it scrolls into view. */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  zeroLabel,
  duration = 1600,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce || value === 0) {
      setN(value);
      return;
    }

    let start: number | null = null;
    let raf = 0;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  const body = value === 0 && zeroLabel ? zeroLabel : `${prefix}${n}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {body}
    </span>
  );
}
