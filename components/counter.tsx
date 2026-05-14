"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Format = "integer" | "decimal-1" | "raw";

type CounterProps = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  format?: Format;
};

function applyFormat(n: number, format: Format) {
  switch (format) {
    case "decimal-1":
      return (n / 10).toFixed(1);
    case "raw":
      return String(n);
    case "integer":
    default:
      return n.toLocaleString();
  }
}

export function Counter({
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  format = "integer",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {applyFormat(value, format)}
      {suffix}
    </span>
  );
}
