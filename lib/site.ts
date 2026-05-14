export const SITE = {
  name: "Visit Batanes",
  shortName: "Visit Batanes",
  tagline: "The Northernmost Paradise of the Philippines",
  description:
    "Discover Batanes — rolling hills, Ivatan stone villages, dramatic cliffs, and lighthouses at the edge of the Philippines. Plan your tours, find destinations, and read travel guides crafted for an unforgettable Batanes journey.",
  url: "https://visitbatanes.ph",
  ogImage: "/og-default.svg",
  email: "hello@visitbatanes.ph",
  phone: "+63 (917) 555-1928",
  address: "National Road, Basco, Batanes 3900, Philippines",
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
