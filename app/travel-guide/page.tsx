import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { Newsletter } from "@/components/newsletter";
import { guides } from "@/lib/data/guides";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Batanes Travel Guide — Itineraries, Tips & Local Stories",
  description:
    "In-depth travel guides for Batanes — best time to visit, what to eat, what to pack, 4-day itineraries, and Ivatan culture explained.",
  alternates: { canonical: "/travel-guide" },
};

export default function TravelGuidePage() {
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Visit Batanes — Travel Guide",
    url: `${SITE.url}/travel-guide`,
    blogPost: guides.map((g) => ({
      "@type": "BlogPosting",
      headline: g.title,
      datePublished: g.date,
      url: `${SITE.url}/travel-guide/${g.slug}`,
      author: { "@type": "Organization", name: g.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <Section
        eyebrow="Travel guide"
        title="Read before you fly to Basco."
        description="Detailed, locally-fact-checked guides covering the practical questions: when to visit, what to pack, how to pace your days, and how to eat well."
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "Travel Guide" }]}
          />
        </div>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal as="li" key={g.slug} delay={i * 0.06}>
              <article className="lift h-full overflow-hidden rounded-3xl border border-border/60 bg-card">
                <Link href={`/travel-guide/${g.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-xs">
                      {g.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted px-3 py-1 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-3 font-display text-2xl leading-tight">
                      {g.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {g.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ClockIcon size={14} />
                        {g.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-foreground">
                        Read guide
                        <ArrowRightIcon size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
