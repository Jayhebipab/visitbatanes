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
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,184,217,0.25),transparent_60%)]"
        />
      </div>

      <div className="container-x relative pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-44 lg:pb-40 text-white">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/90 backdrop-blur"
        >
          <MapPinIcon size={14} />
          Batanes · Philippines
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="heading-display mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Where the wind shapes
          <br />
          <span className="italic font-light">paradise.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed"
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
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/tours"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            Plan your journey
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15"
          >
            Explore destinations
          </Link>
        </motion.div>

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
        >
          {[
            { label: "Islands", value: "10+" },
            { label: "Heritage sites", value: "24" },
            { label: "Boutique tours", value: "12" },
            { label: "Avg. flight (min)", value: "110" },
          ].map((s) => (
            <div key={s.label} className="border-l border-white/25 pl-4">
              <dt className="text-xs uppercase tracking-[0.18em] text-white/70">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-3xl text-white">
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
