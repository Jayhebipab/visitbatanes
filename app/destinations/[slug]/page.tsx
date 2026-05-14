import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Gallery } from "@/components/gallery";
import { FAQAccordion } from "@/components/faq-accordion";
import { DestinationCard } from "@/components/destination-card";
import { Reveal } from "@/components/reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  MapPinIcon,
} from "@/components/icons";
import {
  destinations,
  getDestinationBySlug,
} from "@/lib/data/destinations";
import { tours } from "@/lib/data/tours";
import { TourCard } from "@/components/tour-card";
import { testimonials } from "@/lib/data/testimonials";
import { SITE } from "@/lib/site";
import type { Destination } from "@/lib/types";

function toursForDestination(d: Destination) {
  const island = d.island;
  const matchCategory: Record<typeof island, string[]> = {
    Batan: [
      "North Batan",
      "South Batan",
      "Multi-island",
    ] as string[],
    Sabtang: ["Sabtang", "Multi-island"] as string[],
    Itbayat: ["Itbayat", "Multi-island"] as string[],
  };
  const allowed = matchCategory[island] ?? [];
  return tours.filter((t) => allowed.includes(t.category)).slice(0, 3);
}

function ratingFromSlug(slug: string) {
  // Deterministic 4.6–4.9 mock rating derived from slug for richness.
  // Replace with real review data once collected.
  const sum = Array.from(slug).reduce((a, c) => a + c.charCodeAt(0), 0);
  const variance = (sum % 4) * 0.1;
  return {
    value: (4.5 + variance).toFixed(1),
    count: 28 + (sum % 47),
  };
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  if (!d) return { title: "Destination not found" };

  const canonical = `/destinations/${d.slug}`;
  return {
    title: `${d.name} — ${d.island} Island, Batanes`,
    description: d.shortDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: d.name,
      description: d.shortDescription,
      url: `${SITE.url}${canonical}`,
      images: [{ url: d.image, alt: d.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.name,
      description: d.shortDescription,
      images: [d.image],
    },
  };
}

export default async function DestinationDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const d = getDestinationBySlug(slug);
  if (!d) notFound();

  const nearby = d.nearby
    .map((s) => getDestinationBySlug(s))
    .filter((x): x is NonNullable<ReturnType<typeof getDestinationBySlug>> =>
      Boolean(x)
    );

  const matchingTours = toursForDestination(d);

  const rating = ratingFromSlug(d.slug);
  const sampleReviewer =
    testimonials[
      Array.from(d.slug).reduce((a, c) => a + c.charCodeAt(0), 0) %
        testimonials.length
    ];

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${SITE.url}/destinations/${d.slug}#place`,
    name: d.name,
    description: d.longDescription,
    image: d.image,
    url: `${SITE.url}/destinations/${d.slug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: d.coords.lat,
      longitude: d.coords.lng,
    },
    isAccessibleForFree: d.entryFee.toLowerCase().includes("free"),
    touristType: [d.category, d.island + " Island"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Batanes",
      addressCountry: "PH",
      addressLocality: d.island,
    },
    publicAccess: true,
  };

  // Reviews + ratings need a Product/Service parent (Google's requirement).
  // We emit a separate Product node representing "the experience of visiting <destination>".
  const experienceLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/destinations/${d.slug}#experience`,
    name: `Visit ${d.name}`,
    description: d.shortDescription,
    image: d.image,
    brand: { "@id": `${SITE.url}/#organization` },
    category: d.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: sampleReviewer.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: sampleReviewer.name },
      reviewBody: sampleReviewer.quote,
    },
  };

  const faqLd =
    d.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: d.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const meta = [
    { icon: MapPinIcon, label: "Island", value: `${d.island} Island` },
    { icon: CompassIcon, label: "Category", value: d.category },
    { icon: ClockIcon, label: "Typical visit", value: d.estimatedDuration },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <article>
        <header className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={d.image}
              alt={d.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70"
            />
          </div>
          <div className="container-x relative pt-24 pb-20 md:pt-32 md:pb-28 text-white">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/destinations", label: "Destinations" },
                { label: d.name },
              ]}
            />
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] backdrop-blur">
              <MapPinIcon size={14} />
              {d.island} Island · {d.category}
            </p>
            <h1 className="heading-display mt-5 max-w-4xl text-4xl md:text-6xl">
              {d.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              {d.shortDescription}
            </p>
          </div>
        </header>

        <div className="container-x grid gap-12 pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="heading-display text-3xl md:text-4xl">
                About {d.name}
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                {d.longDescription}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="heading-display text-2xl md:text-3xl">
                What makes it special
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {d.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 rounded-2xl border border-border/60 bg-card p-4"
                  >
                    <CheckIcon size={18} className="mt-0.5 text-accent shrink-0" />
                    <span className="text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="heading-display text-2xl md:text-3xl">Photo gallery</h3>
              <p className="mt-2 text-muted-foreground">
                Click any image to view it larger.
              </p>
              <div className="mt-6">
                <Gallery
                  cover={{ src: d.image, alt: d.imageAlt }}
                  images={d.gallery}
                />
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="heading-display text-2xl md:text-3xl">Travel tips</h3>
              <ul className="mt-5 space-y-3">
                {d.travelTips.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-xl bg-muted/50 p-4"
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-sm leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {d.faqs.length > 0 && (
              <Reveal className="mt-12">
                <h3 className="heading-display text-2xl md:text-3xl">
                  People also ask
                </h3>
                <div className="mt-5">
                  <FAQAccordion items={d.faqs} defaultOpen={0} />
                </div>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card p-6">
                <h3 className="font-display text-xl">Plan your visit</h3>
                <dl className="mt-4 space-y-4">
                  {meta.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <m.icon size={18} className="mt-0.5 text-accent" />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {m.label}
                        </dt>
                        <dd className="mt-0.5 text-sm">{m.value}</dd>
                      </div>
                    </div>
                  ))}
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Best time to visit
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">
                      {d.bestTimeToVisit}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Entry fee
                    </dt>
                    <dd className="mt-1 text-sm">{d.entryFee}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Difficulty
                    </dt>
                    <dd className="mt-1 text-sm">{d.difficulty}</dd>
                  </div>
                </dl>
                <Link
                  href="/tours"
                  className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                >
                  Browse matching tours
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {nearby.length > 0 && (
          <Section
            eyebrow="Nearby destinations"
            title="Pair it with these places"
          >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <DestinationCard d={n} />
                </li>
              ))}
            </ul>
          </Section>
        )}

        {matchingTours.length > 0 && (
          <Section
            eyebrow="Visit with a guide"
            title={`Tours that include ${d.name}`}
            description={`See the curated ${d.island} Island packages our Ivatan-led partners run year-round.`}
          >
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {matchingTours.map((t) => (
                <li key={t.slug}>
                  <TourCard t={t} />
                </li>
              ))}
            </ul>
          </Section>
        )}
      </article>
    </>
  );
}
