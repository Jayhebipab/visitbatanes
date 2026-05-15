import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { testimonials } from "@/lib/data/testimonials";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const BING_VERIFICATION = process.env.BING_SITE_VERIFICATION;
const YANDEX_VERIFICATION = process.env.YANDEX_SITE_VERIFICATION;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#07121a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Batanes",
    "Batanes tourism",
    "Batanes travel guide",
    "Visit Batanes",
    "Philippines travel",
    "Basco Batanes",
    "Sabtang Island",
    "Itbayat",
    "Batanes tour packages",
    "Ivatan culture",
    "Marlboro Hills",
    "Vayang Rolling Hills",
    "Batanes lighthouse",
    "northernmost Philippines",
    "Batanes itinerary",
  ],
  authors: [{ name: SITE.founder.name }, { name: SITE.name }],
  creator: SITE.founder.name,
  publisher: SITE.name,
  category: "travel",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  verification: {
    google: GSC_VERIFICATION,
    yandex: YANDEX_VERIFICATION,
    other: BING_VERIFICATION
      ? { "msvalidate.01": BING_VERIFICATION }
      : undefined,
  },
};

const totalReviews = testimonials.length;
const averageRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const founderLd = {
    "@type": "Person",
    "@id": `${SITE.url}/#founder`,
    name: SITE.founder.name,
    jobTitle: SITE.founder.role,
    description: SITE.founder.bio,
    url: `${SITE.url}/about`,
    worksFor: { "@id": `${SITE.url}/#organization` },
    nationality: { "@type": "Country", name: "Philippines" },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo-mark.svg`,
      width: 64,
      height: 64,
    },
    image: `${SITE.url}/opengraph-image`,
    founder: founderLd,
    employee: founderLd,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "₱₱-₱₱₱",
    address: {
      "@type": "PostalAddress",
      streetAddress: "National Road",
      addressLocality: "Basco",
      addressRegion: "Batanes",
      postalCode: "3900",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.4487,
      longitude: 121.9702,
    },
    areaServed: [
      { "@type": "Place", name: "Batan Island, Batanes" },
      { "@type": "Place", name: "Sabtang Island, Batanes" },
      { "@type": "Place", name: "Itbayat Island, Batanes" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.slice(0, 3).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.youtube,
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: ["VisitBatanes", "Visit Batanes PH"],
    url: SITE.url,
    inLanguage: "en-PH",
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/destinations?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Knowledge Graph entity — helps AI engines build authoritative entity profile
  const entityLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SITE.url}/#batanes`,
    name: "Batanes",
    alternateName: ["Batanes Islands", "Batanes Province"],
    description:
      "Batanes is the northernmost province of the Philippines, an archipelago of ten islands between Luzon and Taiwan. Three islands are inhabited: Batan, Sabtang, and Itbayat. Known for rolling hills, Ivatan stone villages, and traditional faluwa boats.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.4487,
      longitude: 121.9702,
    },
    containsPlace: [
      { "@type": "Place", name: "Batan Island" },
      { "@type": "Place", name: "Sabtang Island" },
      { "@type": "Place", name: "Itbayat Island" },
    ],
    sameAs: [
      "https://en.wikipedia.org/wiki/Batanes",
      "https://www.wikidata.org/wiki/Q3271",
    ],
  };

  return (
    <html
      lang="en-PH"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
