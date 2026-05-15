export const SITE = {
  name: "Visit Batanes",
  shortName: "Visit Batanes",
  tagline: "The Northernmost Paradise of the Philippines",
  description:
    "Discover Batanes — rolling hills, Ivatan stone villages, dramatic cliffs, and lighthouses at the edge of the Philippines. Plan your tours, find destinations, and read travel guides crafted for an unforgettable Batanes journey.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://visitbatanes.vercel.app",
  ogImage: "/og-default.svg",
  email: "hello@visitbatanes.ph",
  phone: "+63 (917) 555-1928",
  address: "National Road, Basco, Batanes 3900, Philippines",
  founder: {
    name: "Jayson Pablo",
    role: "Founder & Creator",
    bio:
      "Jayson Pablo founded Visit Batanes to share the magic of the Ivatan islands with thoughtful, slow travelers. Working alongside licensed Ivatan guides and local homestays, he curates trips that respect the heritage and quiet rhythm of Batanes.",
    shortBio:
      "Founder of Visit Batanes, working with Ivatan guides to share Batanes with thoughtful travelers.",
  },
  socials: {
    facebook: "https://www.facebook.com/VisitBatanesPH",
    instagram: "https://www.instagram.com/VisitBatanesPH",
    youtube: "https://www.youtube.com/@VisitBatanesPH",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours & Packages" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
