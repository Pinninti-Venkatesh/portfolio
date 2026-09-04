"use client";

import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Card with a cursor-following radial highlight on its border and surface. */
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-panel/60 transition-colors duration-300 hover:border-[#2f3546] ${className}`}
    >
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(127,155,255,0.10), transparent 60%)`,
          }}
        />
      )}
      {!reduce && active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(127,155,255,0.10), transparent 65%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
