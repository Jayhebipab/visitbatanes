import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TourCard } from "@/components/tour-card";
import { Reveal } from "@/components/reveal";
import { CtaBooking } from "@/components/cta-booking";
import { CheckIcon, MinusIcon } from "@/components/icons";
import { tours } from "@/lib/data/tours";
import { testimonials } from "@/lib/data/testimonials";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Batanes Tours & Packages — North Batan, South Batan, Sabtang, Itbayat",
  description:
    "Compare Batanes tour packages and itineraries. From half-day North Batan loops to full 5-day honeymoon experiences across Sabtang and Itbayat. All-inclusive pricing.",
  alternates: { canonical: "/tours" },
};

const aggregateRating = (() => {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return {
    "@type": "AggregateRating",
    ratingValue: (total / testimonials.length).toFixed(1),
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
  };
})();

export default function ToursPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Batanes Tour Packages",
    url: `${SITE.url}/tours`,
    numberOfItems: tours.length,
    itemListElement: tours.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        "@id": `${SITE.url}/tours#${t.slug}`,
        name: t.title,
        description: `${t.duration} · ${t.level} · Highlights: ${t.highlights.join(", ")}`,
        image: t.image.startsWith("http") ? t.image : `${SITE.url}${t.image}`,
        touristType: t.category,
        itinerary: t.itinerary.map((step) => ({
          "@type": "ItemList",
          name: step.day,
          description: `${step.title}: ${step.details}`,
        })),
        offers: {
          "@type": "Offer",
          price: t.price,
          priceCurrency: "PHP",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE.url}/tours#${t.slug}`,
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 2,
            unitText: "guests",
          },
        },
        provider: { "@id": `${SITE.url}/#organization` },
        aggregateRating,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      <Section
        eyebrow="Tours & packages"
        title="Curated journeys across the three islands."
        description="Every itinerary is led by licensed Ivatan guides and capped at small group sizes. Pricing is all-inclusive — no hidden fees, no surprise add-ons."
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "Tours & Packages" }]}
          />
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.04}>
              <TourCard t={t} priority={i < 2} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        id="itineraries"
        eyebrow="Detailed itineraries"
        title="What each tour looks like"
        description="A day-by-day plan for every package — pace, stops, meals and what's included."
      >
        <div className="space-y-12">
          {tours.map((t) => (
            <article
              key={t.slug}
              id={`itinerary-${t.slug}`}
              className="rounded-3xl border border-border/60 bg-card p-6 md:p-10 scroll-mt-28"
            >
              <header className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.category} · {t.duration} · {t.level}
                  </p>
                  <h3 className="heading-display mt-2 text-2xl md:text-3xl">
                    {t.title}
                  </h3>
                </div>
                <p className="font-display text-2xl">
                  From ₱{t.price.toLocaleString()}{" "}
                  <span className="text-xs font-sans text-muted-foreground">
                    / person
                  </span>
                </p>
              </header>

              <div className="mt-6 grid gap-6 lg:grid-cols-12">
                <ol className="lg:col-span-7 space-y-4">
                  {t.itinerary.map((step) => (
                    <li
                      key={step.day + step.title}
                      className="relative rounded-2xl border border-border/60 bg-background p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-accent">
                        {step.day}
                      </p>
                      <p className="mt-1 font-medium text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.details}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      What&apos;s included
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {t.includes.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-1.5 text-muted-foreground"
                        >
                          <CheckIcon
                            size={14}
                            className="mt-0.5 text-accent shrink-0"
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Not included
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {t.excludes.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-1.5 text-muted-foreground"
                        >
                          <MinusIcon
                            size={14}
                            className="mt-0.5 text-muted-foreground shrink-0"
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Group size: {t.groupSize}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBooking />
      </Section>
    </>
  );
}
