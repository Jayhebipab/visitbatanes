import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { featuredDestinations } from "@/lib/data/destinations";
import { DestinationCard } from "@/components/destination-card";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return { title: "Guide not found" };

  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/travel-guide/${g.slug}` },
    openGraph: {
      type: "article",
      title: g.title,
      description: g.excerpt,
      url: `${SITE.url}/travel-guide/${g.slug}`,
      images: [{ url: g.image, alt: g.imageAlt }],
      publishedTime: g.date,
      authors: [g.author],
    },
    twitter: {
      card: "summary_large_image",
      title: g.title,
      description: g.excerpt,
      images: [g.image],
    },
  };
}

export default async function GuideDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    headline: g.title,
    description: g.excerpt,
    datePublished: g.date,
    dateModified: g.date,
    image: g.image,
    keywords: g.tags.join(", "),
    inLanguage: "en-PH",
    about: {
      "@type": "Place",
      name: "Batanes, Philippines",
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: g.author,
      url: `${SITE.url}/about`,
    },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/travel-guide/${g.slug}`,
    },
    isPartOf: { "@id": `${SITE.url}/#website` },
    // Speakable: tells voice assistants (Google Assistant, Alexa) which parts to read aloud
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".guide-tldr"],
    },
  };

  // HowTo schema for itinerary-style guides — AI engines love step-by-step content
  const howToLd = g.body.some((b) => /itinerary|day \d/i.test(b.heading))
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: g.title,
        description: g.excerpt,
        image: g.image,
        totalTime: "P4D",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "PHP",
          value: "15000-25000",
        },
        supply: [
          { "@type": "HowToSupply", name: "Round-trip flight from Manila" },
          { "@type": "HowToSupply", name: "3-4 nights accommodation" },
          { "@type": "HowToSupply", name: "Cash (limited ATMs)" },
        ],
        step: g.body
          .filter((b) => /day \d|^morning|^afternoon|^arrival/i.test(b.heading))
          .map((section, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: section.heading,
            text: section.paragraphs.join(" "),
            url: `${SITE.url}/travel-guide/${g.slug}#${section.heading
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
          })),
      }
    : null;

  const others = guides.filter((x) => x.slug !== g.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {howToLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
      )}

      <article>
        <header className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={g.image}
              alt={g.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"
            />
          </div>
          <div className="container-x relative pt-24 pb-20 md:pt-32 md:pb-28 text-white">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/travel-guide", label: "Travel Guide" },
                { label: g.title },
              ]}
            />
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="heading-display mt-5 max-w-4xl text-4xl md:text-6xl">
              {g.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{g.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/75">
              <span className="flex items-center gap-1.5">
                <ClockIcon size={14} />
                {g.readTime}
              </span>
              <span aria-hidden>·</span>
              <span>
                Updated{" "}
                <time dateTime={g.date}>
                  {new Date(g.date).toLocaleDateString("en-PH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span aria-hidden>·</span>
              <span>By {g.author}</span>
            </div>
          </div>
        </header>

        <div className="container-x pt-12 max-w-3xl">
          {/* Quick Answer / TL;DR — surfaces directly for AI engines + voice assistants */}
          <aside
            className="guide-tldr not-prose mb-8 rounded-2xl border border-accent/30 bg-accent/5 p-6"
            aria-labelledby="quick-answer-heading"
          >
            <p
              id="quick-answer-heading"
              className="text-xs uppercase tracking-[0.22em] text-accent font-medium"
            >
              Quick Answer
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground">
              {g.excerpt}
            </p>
            <dl className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Reading time
                </dt>
                <dd className="mt-1 font-medium">{g.readTime}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Topics
                </dt>
                <dd className="mt-1 font-medium">{g.tags.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Last updated
                </dt>
                <dd className="mt-1 font-medium">
                  <time dateTime={g.date}>
                    {new Date(g.date).toLocaleDateString("en-PH", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                </dd>
              </div>
            </dl>
          </aside>

          {g.body.map((section) => {
            const sectionId = section.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");
            return (
              <section
                key={section.heading}
                id={sectionId}
                className="mt-10 first:mt-0 scroll-mt-28"
              >
                <h2 className="heading-display text-2xl md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <Section
          eyebrow="Plan your visit"
          title="Destinations mentioned in this guide"
          description="The featured stops you'll want to see in person."
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.slice(0, 3).map((d) => (
              <li key={d.slug}>
                <DestinationCard d={d} />
              </li>
            ))}
          </ul>
        </Section>

        {others.length > 0 && (
          <Section
            eyebrow="Continue reading"
            title="More from our travel guide"
          >
            <ul className="grid gap-6 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/travel-guide/${o.slug}`}
                    className="lift block overflow-hidden rounded-3xl border border-border/60 bg-card"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={o.image}
                        alt={o.imageAlt}
                        fill
                        sizes="(min-width:768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl">{o.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {o.excerpt}
                      </p>
                      <p className="mt-3 inline-flex items-center gap-1 text-sm">
                        Read
                        <ArrowRightIcon size={14} />
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </article>
    </>
  );
}
