import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DestinationsBrowser } from "@/components/destinations-browser";
import { CtaBooking } from "@/components/cta-booking";
import { destinations } from "@/lib/data/destinations";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinations in Batanes — Hills, Beaches, Heritage Villages",
  description:
    "Browse every must-visit destination in Batanes. Filter by island and category — Vayang Hills, Marlboro Hills, Sabtang stone villages, Morong Beach, Basco Lighthouse and more.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "All Batanes Destinations",
    description:
      "A complete index of Batanes destinations across Batan, Sabtang and Itbayat.",
    url: `${SITE.url}/destinations`,
  },
};

export default function DestinationsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Batanes Destinations",
    itemListElement: destinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/destinations/${d.slug}`,
      name: d.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Section
        eyebrow="All destinations"
        title="Every place we love in Batanes."
        description="A growing index of natural wonders, heritage villages, lighthouses and quiet coves across Batan, Sabtang and Itbayat. Filter by category or search by name to plan your itinerary."
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "Destinations" }]}
          />
        </div>
        <DestinationsBrowser destinations={destinations} />
      </Section>
      <Section>
        <CtaBooking />
      </Section>
    </>
  );
}
