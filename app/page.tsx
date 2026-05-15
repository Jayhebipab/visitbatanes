import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { SearchDestinations } from "@/components/search-destinations";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { DestinationCard } from "@/components/destination-card";
import { TourCard } from "@/components/tour-card";
import { ActivitiesGrid } from "@/components/activities-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { TravelGallery } from "@/components/travel-gallery";
import { FAQAccordion } from "@/components/faq-accordion";
import { Newsletter } from "@/components/newsletter";
import { CtaBooking } from "@/components/cta-booking";
import { ArrowRightIcon } from "@/components/icons";

import { featuredDestinations } from "@/lib/data/destinations";
import { popularTours } from "@/lib/data/tours";
import { testimonials } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faqs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Plan your Batanes trip with the most complete guide to destinations, tours, Ivatan culture and the northernmost beaches of the Philippines.",
  alternates: { canonical: "/" },
};

const previewFaqs = faqs.slice(0, 5);

export default function HomePage() {
  // Strong site-name signal targeting Google's site-name display logic.
  // Note: For *.vercel.app subdomains, Google may still fall back to "Vercel"
  // until a custom domain is set up (e.g. visitbatanes.ph).
  const siteNameLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: `${SITE.name} — ${SITE.tagline}`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#batanes` },
    primaryImageOfPage: `${SITE.url}/opengraph-image`,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-PH",
  };

  const homeLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Batanes",
    description:
      "Batanes is the northernmost province of the Philippines, an archipelago of ten islands known for rolling hills, stone villages and Ivatan culture.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.4487,
      longitude: 121.9702,
    },
    touristType: ["Heritage", "Nature", "Photography", "Honeymoon"],
    url: SITE.url,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: previewFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNameLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Hero />
      <SearchDestinations />

      <Section
        id="featured-destinations"
        eyebrow="Featured destinations"
        title="The places that make Batanes, Batanes."
        description="Hand-picked spots across the three inhabited islands — from wind-carved hills to UNESCO heritage villages and the most photographed lighthouse in the Philippines."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinations.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 0.06}>
              <DestinationCard d={d} priority={i === 0} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted/60"
          >
            See all destinations
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </Section>

      <Section
        id="popular-activities"
        eyebrow="Popular activities"
        title="Eight ways to experience Batanes."
        description="From clifftop hikes to traditional vakul weaving, choose how you want to feel the islands. Most activities are easy to combine in a single trip."
      >
        <ActivitiesGrid />
      </Section>

      <Section id="why-us" className="bg-muted/40">
        <WhyChooseUs />
      </Section>

      <Section
        id="testimonials"
        eyebrow="Stories from our guests"
        title="A trip people remember."
        description="Real reviews from travelers who took our tours across the three islands."
      >
        <TestimonialSlider items={testimonials} />
      </Section>

      <Section
        id="featured-tours"
        eyebrow="Tours & packages"
        title="Travel-ready itineraries."
        description="Three half-day, full-day and multi-day options built around Batanes' golden-hour rhythms and weather windows."
      >
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularTours.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.06}>
              <TourCard t={t} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        id="gallery"
        eyebrow="Travel gallery"
        title="A look at the islands."
        description="A small visual essay from our latest trips."
      >
        <TravelGallery />
      </Section>

      <Section
        id="faq-preview"
        eyebrow="Travelers also ask"
        title="Quick answers to your Batanes questions."
        description="Common planning questions answered concisely — for the full list, head to our FAQ page."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FAQAccordion items={previewFaqs} defaultOpen={0} />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="font-display text-xl">Still curious?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our full FAQ covers booking, transport, safety, weather and
                local culture in detail.
              </p>
              <Link
                href="/faq"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
              >
                Read all FAQs
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="cta">
        <CtaBooking />
      </Section>

      <Section id="newsletter">
        <Newsletter />
      </Section>
    </>
  );
}
