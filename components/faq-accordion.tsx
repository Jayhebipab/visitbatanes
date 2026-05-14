"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@/components/icons";

type Item = { question: string; answer: string };

export function FAQAccordion({
  items,
  defaultOpen = -1,
}: {
  items: Item[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div key={item.question} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/40"
            >
              <span
                itemProp="name"
                className="font-medium text-foreground"
              >
                {item.question}
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-foreground">
                {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    itemProp="text"
                    className="px-5 pb-5 -mt-1 text-muted-foreground leading-relaxed"
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
