import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Newsletter } from "@/components/newsletter";
import { ArrowRightIcon } from "@/components/icons";
import { testimonials } from "@/lib/data/testimonials";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Visit Batanes — Founded by Jayson Pablo",
  description:
    "Visit Batanes is founded by Jayson Pablo and curated alongside licensed Ivatan guides. We help thoughtful travelers plan slow, heritage-first trips to the northernmost province of the Philippines.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Community-first",
    body: "Every itinerary directs guests, fees and meals to Ivatan families and DOT-licensed local operators.",
  },
  {
    title: "Heritage-protective",
    body: "We follow conservation guidance from the Batanes Cultural Office. No drone flights over stone villages, no off-trail trampling.",
  },
  {
    title: "Honest, transparent pricing",
    body: "Quoted prices include all entrance fees, environmental fees and boat fares. No upsells or surprise add-ons.",
  },
  {
    title: "Slow travel by design",
    body: "Tours are paced for sunrises and sunsets, not photo dashes. Most days end before dinner with time to wander.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A love letter to Batanes, written by people who live it."
        description="Visit Batanes started as a small Ivatan-led collective in 2014, helping respectful travelers find slow, meaningful experiences across Batan, Sabtang and Itbayat."
      >
        <div className="mb-10">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1518563259479-d003eb6e2924?auto=format&fit=crop&w=1800&q=80"
                alt="Rolling green hills of Batanes meeting the West Philippine Sea"
                fill
                priority
                sizes="(min-width:1024px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              We exist to make Batanes accessible to thoughtful travelers — and
              to protect what makes it rare. Our network of licensed Ivatan
              guides, drivers and homestays follows a shared code: small
              groups, fair pay, no environmental shortcuts.
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-4">
              {([
                { label: "Established", value: 2014, format: "raw" as const },
                { label: "Local partners", value: 38, suffix: "+", format: "integer" as const },
                { label: "Guests/year", value: 4200, suffix: "+", format: "integer" as const },
              ]).map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl border border-border/60 bg-card px-4 py-5"
                >
                  <p className="font-display text-3xl">
                    <Counter
                      to={s.value}
                      suffix={s.suffix ?? ""}
                      format={s.format}
                    />
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="What we believe"
        title="Four values that shape every tour."
        className="bg-muted/40"
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.06}>
              <article className="h-full rounded-3xl border border-border/60 bg-card p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Behind the site"
        title={`Meet ${SITE.founder.name}, ${SITE.founder.role.toLowerCase()}.`}
      >
        <article
          itemScope
          itemType="https://schema.org/Person"
          className="grid gap-10 lg:grid-cols-12 lg:items-center"
        >
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-ocean to-accent">
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="font-display text-[10rem] text-white/90"
                  aria-hidden
                >
                  {SITE.founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.08}>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              {SITE.founder.role}
            </p>
            <h3
              itemProp="name"
              className="heading-display mt-2 text-3xl md:text-4xl"
            >
              {SITE.founder.name}
            </h3>
            <p
              itemProp="description"
              className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {SITE.founder.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The site is independently run, with content reviewed by Ivatan
              partners on the ground. Every tour booking inquiry passes through
              {" "}{SITE.founder.name.split(" ")[0]}&apos;s vetted local
              operators — no agency middlemen, no upcharges.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-border/60 bg-card px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Role
                </dt>
                <dd itemProp="jobTitle" className="mt-1 font-medium">
                  {SITE.founder.role}
                </dd>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Based in
                </dt>
                <dd className="mt-1 font-medium">Philippines</dd>
              </div>
            </dl>

            <link itemProp="url" href={`${SITE.url}/about`} />
            <meta
              itemProp="worksFor"
              content={SITE.name}
            />
          </Reveal>
        </article>
      </Section>

      <Section
        eyebrow="Voices from our guests"
        title="What people say after they visit."
      >
        <TestimonialSlider items={testimonials} />
      </Section>

      <Section
        eyebrow="Travel with us"
        title="Ready to plan your Batanes story?"
        description="Get in touch for a custom itinerary, or browse our published tours to start with."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Browse tours
            <ArrowRightIcon size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium"
          >
            Custom itinerary
          </Link>
        </div>
      </Section>

      <Section>
        <Newsletter />
      </Section>

      <div className="container-x pb-10 text-xs text-muted-foreground">
        Reach us anytime at{" "}
        <a className="underline" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>{" "}
        or {SITE.phone}.
      </div>
    </>
  );
}
