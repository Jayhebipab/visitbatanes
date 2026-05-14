export type DestinationCategory =
  | "Hills & Landscapes"
  | "Beaches & Coves"
  | "Heritage & Culture"
  | "Lighthouses & Viewpoints"
  | "Islands"
  | "Food & Local";

export type Destination = {
  slug: string;
  name: string;
  island: "Batan" | "Sabtang" | "Itbayat";
  category: DestinationCategory;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  estimatedDuration: string;
  entryFee: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  coords: { lat: number; lng: number };
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  travelTips: string[];
  nearby: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
};

export type Tour = {
  slug: string;
  title: string;
  duration: string;
  durationDays: number;
  price: number;
  priceUnit: "PHP per person";
  level: "Easy" | "Moderate" | "Adventure";
  groupSize: string;
  includes: string[];
  excludes: string[];
  itinerary: { day: string; title: string; details: string }[];
  image: string;
  imageAlt: string;
  category: "North Batan" | "South Batan" | "Sabtang" | "Itbayat" | "Multi-island";
  highlights: string[];
  popular?: boolean;
};

export type FAQ = {
  category: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  origin: string;
  rating: number;
  quote: string;
  tour: string;
  avatarSeed: string;
};

export type GuidePost = {
  slug: string;
  title: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export type Activity = {
  slug: string;
  name: string;
  description: string;
  icon: "wave" | "mountain" | "compass" | "camera" | "bike" | "boat" | "food" | "culture";
  duration: string;
};
