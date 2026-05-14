"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons";

export function Gallery({
  images,
  cover,
}: {
  images: { src: string; alt: string }[];
  cover?: { src: string; alt: string };
}) {
  const all = cover ? [cover, ...images] : images;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {all.map((img, i) => (
          <li key={img.src + i}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors"
              />
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[88vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
                aria-label="Close"
              >
                <CloseIcon size={20} />
              </button>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={all[open].src}
                  alt={all[open].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/80">
                {all[open].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
