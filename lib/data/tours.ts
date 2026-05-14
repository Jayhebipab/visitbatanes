import type { Tour } from "../types";

export const tours: Tour[] = [
  {
    slug: "north-batan-half-day",
    title: "North Batan Half-Day Discovery",
    duration: "Half day (4 hours)",
    durationDays: 0.5,
    price: 1500,
    priceUnit: "PHP per person",
    level: "Easy",
    groupSize: "2 to 8 guests",
    includes: [
      "Air-conditioned van transfers",
      "Licensed Ivatan tour guide",
      "Entrance and environmental fees",
      "Bottled water",
    ],
    excludes: [
      "Meals",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: "Morning Loop",
        title: "Vayang Hills · Basco Lighthouse · Valugan Boulder Beach",
        details:
          "Begin with Vayang Rolling Hills' panoramic pasture, climb Naidi Hills to the iconic Basco Lighthouse, then end at the volcanic Valugan Boulder Beach.",
      },
      {
        day: "Cultural Stop",
        title: "Tukon Chapel · PAGASA Radar Tukon",
        details:
          "Visit the Mt. Carmel Chapel (Tukon Church) built of Ivatan stones and admire panoramic views from the PAGASA weather station hilltop.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1518563259479-d003eb6e2924?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Aerial view of rolling green hills meeting the blue ocean in Batanes",
    category: "North Batan",
    highlights: ["Vayang Hills", "Basco Lighthouse", "Valugan Beach", "Tukon Chapel"],
    popular: true,
  },
  {
    slug: "south-batan-full-day",
    title: "South Batan Full-Day Heritage Tour",
    duration: "Full day (8 hours)",
    durationDays: 1,
    price: 2500,
    priceUnit: "PHP per person",
    level: "Easy",
    groupSize: "2 to 10 guests",
    includes: [
      "Air-conditioned van transfers",
      "Ivatan-set lunch in Mahatao",
      "Licensed cultural guide",
      "Entrance and environmental fees",
    ],
    excludes: ["Drinks beyond lunch", "Tips and gratuities"],
    itinerary: [
      {
        day: "Morning",
        title: "Marlboro Hills · Alapad Rock · House of Dakay",
        details:
          "Drive the eastern coastal road to Marlboro Hills for sweeping ocean views, stop at the cinematic Alapad Rock Formation, then visit the 200-year-old House of Dakay.",
      },
      {
        day: "Midday",
        title: "Mahatao Church & Honesty Coffee Shop",
        details:
          "Tour the 1789 San Carlos Borromeo Church (a National Cultural Treasure) and experience the famed Honesty Coffee Shop.",
      },
      {
        day: "Afternoon",
        title: "Imnajbu Beach · Diura Fishing Village",
        details:
          "Cool off at Imnajbu Beach and learn about Ivatan fishing rituals at Diura, ending the day with a dip in the Spring of Youth.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Limestone Ivatan stone village along the South Batan coastal road",
    category: "South Batan",
    highlights: ["Marlboro Hills", "Alapad Rock", "Honesty Cafe", "Diura Village"],
    popular: true,
  },
  {
    slug: "sabtang-island-day-tour",
    title: "Sabtang Island Day Tour",
    duration: "Full day (10 hours)",
    durationDays: 1,
    price: 3200,
    priceUnit: "PHP per person",
    level: "Moderate",
    groupSize: "2 to 8 guests",
    includes: [
      "Round-trip faluwa boat tickets",
      "Sabtang van and guide",
      "Lunch at Nakabuang Beach",
      "Environmental and dock fees",
    ],
    excludes: ["Travel insurance", "Tips and gratuities"],
    itinerary: [
      {
        day: "6:00 AM",
        title: "San Vicente Port departure",
        details:
          "Hotel pickup at 5:30 AM, then board the faluwa boat for the 30-minute crossing to Sabtang.",
      },
      {
        day: "8:00 AM",
        title: "Sabtang Lighthouse · Savidug Village · Chavayan",
        details:
          "Explore the UNESCO-listed Ivatan stone villages, witness vakul weaving demos, and tour Santa Rosa de Lima Chapel.",
      },
      {
        day: "12:30 PM",
        title: "Morong Beach · Nakabuang Arch lunch",
        details:
          "Hot Ivatan lunch on a powder-white cove with the famed natural arch as backdrop.",
      },
      {
        day: "3:30 PM",
        title: "Return faluwa to Batan",
        details: "Boat back to Ivana Port with optional photo stops along the way.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Faluwa boat on turquoise waters approaching Sabtang Island in Batanes",
    category: "Sabtang",
    highlights: ["Sabtang Lighthouse", "Chavayan", "Morong Beach", "Nakabuang Arch"],
    popular: true,
  },
  {
    slug: "complete-batanes-experience",
    title: "Complete Batanes Experience (4D3N)",
    duration: "4 days · 3 nights",
    durationDays: 4,
    price: 18500,
    priceUnit: "PHP per person",
    level: "Moderate",
    groupSize: "2 to 6 guests",
    includes: [
      "3 nights boutique inn accommodation in Basco",
      "Airport transfers and all van transfers",
      "Round-trip Sabtang faluwa fares",
      "Daily breakfast plus 2 Ivatan-set lunches",
      "Licensed cultural guide for all days",
      "All environmental and entrance fees",
    ],
    excludes: [
      "Airfare to/from Batanes",
      "Dinners",
      "Travel insurance and tips",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival · Basco orientation · Sunset at the lighthouse",
        details:
          "Morning flight to Basco, settle into your inn, then enjoy a half-day cultural walk plus sunset at Basco Lighthouse.",
      },
      {
        day: "Day 2",
        title: "North Batan loop · Tukon Chapel · Fundacion Pacita",
        details:
          "Full North Batan day including Vayang, Valugan, Naidi Hills, and afternoon coffee at Fundacion Pacita.",
      },
      {
        day: "Day 3",
        title: "Sabtang Island heritage tour",
        details:
          "Full Sabtang Island day exploring Chavayan, Savidug, and Morong Beach with Ivatan-set lunch.",
      },
      {
        day: "Day 4",
        title: "South Batan full-day · Departure",
        details:
          "South Batan loop ending at Honesty Coffee Shop and Diura, then transfer to Basco airport for departure.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Sweeping clifftop view of the Batanes coast with Mt. Iraya in the distance",
    category: "Multi-island",
    highlights: [
      "All three core islands",
      "Heritage village immersion",
      "Sunset lighthouse experience",
      "Fundacion Pacita afternoon",
    ],
    popular: true,
  },
  {
    slug: "itbayat-expedition",
    title: "Itbayat Northern Frontier Expedition (2D1N)",
    duration: "2 days · 1 night",
    durationDays: 2,
    price: 9500,
    priceUnit: "PHP per person",
    level: "Adventure",
    groupSize: "2 to 6 guests",
    includes: [
      "Falowa boat or chartered plane (weather permitting)",
      "Homestay accommodation in Itbayat",
      "All meals during expedition",
      "Licensed local guide",
    ],
    excludes: ["Travel insurance", "Tips and gratuities"],
    itinerary: [
      {
        day: "Day 1",
        title: "Crossing to Itbayat · Torongan Cave",
        details:
          "Morning crossing from Basco to Mayan Port, lunch at homestay, then trek to Torongan Cave — the legendary first landing of the Ivatans.",
      },
      {
        day: "Day 2",
        title: "Mt. Karoboboan · Raele Cliff · Return",
        details:
          "Sunrise hike to Karoboboan plateau, picnic lunch at Raele cliffside, then return boat to Basco in the afternoon.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Rugged Itbayat coastline with green cliffs above the Pacific Ocean",
    category: "Itbayat",
    highlights: [
      "Torongan Cave",
      "Karoboboan plateau",
      "Raele cliffs",
      "Authentic Itbayat homestay",
    ],
  },
  {
    slug: "honeymoon-batanes",
    title: "Romantic Batanes Honeymoon (5D4N)",
    duration: "5 days · 4 nights",
    durationDays: 5,
    price: 32000,
    priceUnit: "PHP per person",
    level: "Easy",
    groupSize: "Private (2 guests)",
    includes: [
      "4 nights at Fundacion Pacita or equivalent boutique stay",
      "Private guide and driver",
      "Couples dinner at Café du Tukon",
      "Private faluwa charter to Sabtang",
      "Daily breakfast and 2 candle-lit dinners",
    ],
    excludes: ["Airfare", "Spa and salon services"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival · Welcome cocktail at the lighthouse",
        details:
          "Arrive Basco, check in to Fundacion Pacita, enjoy a sunset cocktail at Naidi Hills.",
      },
      {
        day: "Day 2",
        title: "North Batan private tour · Couples dinner",
        details:
          "North Batan loop including Vayang and Valugan, dinner at Café du Tukon with garden setup.",
      },
      {
        day: "Day 3",
        title: "Sabtang private charter · Morong Beach picnic",
        details:
          "Private faluwa charter, lunch picnic at Morong with Ivatan musicians.",
      },
      {
        day: "Day 4",
        title: "South Batan loop · Diura sunset",
        details:
          "Full South Batan day ending with sunset at Diura's Spring of Youth.",
      },
      {
        day: "Day 5",
        title: "Leisure breakfast · Departure transfer",
        details: "Slow breakfast at the inn before transfer to Basco Airport.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Couple watching the sunset over the ocean from a Batanes hillside",
    category: "Multi-island",
    highlights: [
      "Private faluwa charter",
      "Café du Tukon dinner",
      "Boutique luxury stay",
      "Couples photography session",
    ],
  },
];

export const popularTours = tours.filter((t) => t.popular);

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
