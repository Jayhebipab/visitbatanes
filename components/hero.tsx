"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image/SouthBatan.jpg"
          alt="Aerial view of Vayang Rolling Hills sweeping down to the West Philippine Sea at golden hour in Batanes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,184,217,0.14),transparent_55%)]"
        />
      </div>

      <div className="container-x relative pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 text-white">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/85 backdrop-blur"
        >
          <MapPinIcon size={13} />
          Batanes · Philippines
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="heading-display mt-5 max-w-3xl text-[2.25rem] leading-[1.08] sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem]"
        >
          Where the wind shapes
          <br />
          <span className="italic font-light text-white/90">paradise.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-5 max-w-xl text-sm md:text-base text-white/80 leading-relaxed"
        >
          Discover Batanes — the northernmost province of the Philippines.
          Rolling Ivatan pastures, centuries-old stone villages, lighthouses
          above the South China Sea, and the kind of stillness you remember
          for life.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 flex flex-wrap items-center gap-2.5"
        >
          <Link
            href="/tours"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            Plan your journey
            <ArrowRightIcon
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
          >
            Explore destinations
          </Link>
        </motion.div>

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4"
        >
          {[
            { label: "Islands", value: "10+" },
            { label: "Heritage sites", value: "24" },
            { label: "Boutique tours", value: "12" },
            { label: "Avg. flight (min)", value: "110" },
          ].map((s) => (
            <div key={s.label} className="border-l border-white/20 pl-3.5">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-2xl text-white">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
