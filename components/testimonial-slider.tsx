"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import type { Testimonial } from "@/lib/types";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((v) => (v + 1) % items.length);
    }, 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const t = items[i];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 md:p-12">
      <div aria-hidden className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-ocean/10 blur-3xl" />
      <AnimatePresence mode="wait">
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <div className="flex items-center gap-1 text-accent" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, idx) => (
              <StarIcon key={idx} size={16} />
            ))}
          </div>
          <blockquote className="mt-4 font-display text-2xl md:text-3xl leading-snug text-foreground">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <div
              aria-hidden
              className="grid h-12 w-12 place-items-center rounded-full bg-muted text-lg font-display"
            >
              {t.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <p className="font-medium text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.origin} · {t.tour}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setI((v) => (v + 1) % items.length)}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-muted/60"
          aria-label="Next testimonial"
        >
          Next
          <ArrowRightIcon size={14} />
        </button>
      </div>
    </div>
  );
}
