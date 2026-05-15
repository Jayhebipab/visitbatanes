import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { Newsletter } from "@/components/newsletter";
import { Reveal } from "@/components/reveal";
import { faqs, faqsByCategory } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Batanes Travel, Booking, Safety, Culture & Itinerary",
  description:
    "Detailed answers to the most common Batanes travel questions: best time to visit, how to get there, safety, transportation, culture, food, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const grouped = faqsByCategory();
  const ordered = [
    "Planning",
    "Booking",
    "Safety",
    "Transportation",
    "Local Culture",
    "Itinerary",
  ].filter((c) => grouped[c]);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-PH",
    about: { "@type": "Place", name: "Batanes, Philippines" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[itemprop='name']", "[itemprop='text']"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
        author: { "@type": "Organization", name: "Visit Batanes" },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Section
        eyebrow="Travelers also ask"
        title="Batanes FAQ — answers from the islands."
        description="Detailed answers to the most common Batanes planning questions. Looking for something specific? Use Ctrl+F to search the page."
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
          />
        </div>

        <nav aria-label="FAQ categories" className="mb-10 flex flex-wrap gap-2">
          {ordered.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-muted/60"
            >
              {c}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {ordered.map((c) => (
            <Reveal
              key={c}
              as="section"
              className="scroll-mt-28"
            >
              <div id={c.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="heading-display text-2xl md:text-3xl">{c}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {grouped[c].length} question{grouped[c].length > 1 ? "s" : ""}
                </p>
                <div className="mt-5">
                  <FAQAccordion items={grouped[c]} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
