import type { GuidePost } from "../types";

export const guides: GuidePost[] = [
  {
    slug: "first-time-batanes-guide",
    title: "First-Time Visitor's Guide to Batanes",
    excerpt:
      "Everything you need to plan a smooth first trip — flights, weather, must-see destinations, where to stay, and Ivatan etiquette.",
    body: [
      {
        heading: "Why Batanes is unlike anywhere else in the Philippines",
        paragraphs: [
          "Sitting between Luzon and Taiwan, Batanes is the country's northernmost province — a cluster of ten islands, three of them inhabited: Batan, Sabtang, and Itbayat. Its climate, geography, language, and architecture feel closer to Taiwan and Okinawa than to the rest of the Philippines.",
          "Where most island provinces wow you with palm-fringed beaches, Batanes draws you in with wind-shaped pastures, limestone villages, and 18th-century churches built to outlast typhoons. The Ivatans, the indigenous people of these islands, are widely regarded as among the most honest and generous communities in the country.",
        ],
      },
      {
        heading: "How to get there",
        paragraphs: [
          "Direct flights from Manila operate daily (1 hour 50 minutes) via Philippine Airlines, Cebu Pacific (operated by SkyJet), and AirSWIFT. Book at least 2 to 3 months in advance, especially during March to May or December holidays.",
          "Flights are weather-sensitive. Cancellations are common during typhoon season (July to October). Trip insurance and a 1 to 2 day buffer at the end of your trip are highly recommended.",
        ],
      },
      {
        heading: "Suggested 4-day itinerary",
        paragraphs: [
          "Day 1: Arrive Basco, light walking tour of town, sunset at Naidi Hills and Basco Lighthouse.",
          "Day 2: North Batan loop — Vayang Rolling Hills, Tukon Chapel, Valugan Boulder Beach, dinner at Fundacion Pacita.",
          "Day 3: Sabtang Island day tour — early faluwa crossing, Chavayan Village, Morong Beach lunch.",
          "Day 4: South Batan full-day — Marlboro Hills, Honesty Coffee Shop, Alapad Rock, Diura Fishing Village. Evening departure.",
        ],
      },
      {
        heading: "Where to stay",
        paragraphs: [
          "Boutique: Fundacion Pacita (clifftop, artistic) and Bernardo's Hotel (mid-luxury in Basco).",
          "Mid-range: Amboy Hometel, Marfel's Lodge, DDD Habitat Inn.",
          "Budget: Many Ivatan-family homestays around Basco offer rooms from ₱800 to ₱1,500 per night.",
        ],
      },
    ],
    author: "Visit Batanes Editorial Team",
    date: "2026-03-12",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sweeping cliffside coastal road in Batanes with ocean view",
    tags: ["Planning", "First-time", "Itinerary"],
  },
  {
    slug: "best-time-to-visit-batanes",
    title: "Best Time to Visit Batanes: Month-by-Month Guide",
    excerpt:
      "A practical breakdown of Batanes weather, festivals, and travel reliability — when to come, what to expect, and what to pack.",
    body: [
      {
        heading: "Quick verdict: March to May is the sweet spot",
        paragraphs: [
          "If you have to pick just one window, choose March to early June. Seas are calm enough for the Sabtang boat trip, hills are still vibrantly green from winter rains, and flight cancellations are rare.",
        ],
      },
      {
        heading: "December to February — cool, breezy, dramatic skies",
        paragraphs: [
          "Temperatures dip to 14–22 °C. Blue skies are common but trade winds can be fierce, and seas can be too rough for the Sabtang crossing on some days. Pack a windbreaker and warm layers.",
        ],
      },
      {
        heading: "July to October — typhoon season",
        paragraphs: [
          "Beautiful when the sun is out, but flights and faluwas are routinely cancelled. Only book during this window if you have at least 2 buffer days and full trip insurance.",
        ],
      },
      {
        heading: "Festivals to plan around",
        paragraphs: [
          "March: Lakay-Lakay Festival in Sabtang celebrates Ivatan elders and heritage.",
          "May: Vakul-Kanayi Festival showcases traditional headgear weaving in Sabtang.",
          "August: Palo-Palo Festival reenacts an Ivatan stick-dance tradition in Basco.",
        ],
      },
    ],
    author: "Visit Batanes Editorial Team",
    date: "2026-04-04",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Cloud-streaked skies over the rolling Batanes hills",
    tags: ["Weather", "Festivals", "Planning"],
  },
  {
    slug: "ivatan-food-guide",
    title: "Ivatan Food Guide: 12 Dishes You Must Try",
    excerpt:
      "From uvud meatballs to dibang flying fish — a delicious tour of Batanes' culinary traditions.",
    body: [
      {
        heading: "Why Ivatan cuisine is special",
        paragraphs: [
          "Isolated for centuries, the Ivatans developed a cuisine that survives on root crops, line-caught fish, and salt-preserved meats — most of it cooked without coconut milk (unlike mainland Filipino food).",
        ],
      },
      {
        heading: "Must-order classics",
        paragraphs: [
          "Uvud balls — banana pith and ground pork meatballs in broth, the Ivatan version of comfort soup.",
          "Lunis — pork slow-cooked and stored in its own fat for months; salty, smoky, dense in flavor.",
          "Dibang (flying fish) — flash-fried whole, often eaten with vinegar dip.",
          "Turmeric rice — Ivatan staple, dyed gold with fresh ground turmeric.",
          "Coconut crab — only in-season and from regulated sources; a true delicacy.",
        ],
      },
      {
        heading: "Where to eat",
        paragraphs: [
          "Café du Tukon at Fundacion Pacita serves elevated Ivatan plates with a view.",
          "Casa Napoli in Basco surprises with great pizzas plus Ivatan starters.",
          "Octagon Bed & Dine offers honest, home-style Ivatan menus.",
        ],
      },
    ],
    author: "Visit Batanes Editorial Team",
    date: "2026-02-22",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Traditional Filipino dishes served on rustic plates",
    tags: ["Food", "Culture", "Local"],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
