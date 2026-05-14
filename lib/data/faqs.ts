import type { FAQ } from "../types";

export const faqs: FAQ[] = [
  {
    category: "Planning",
    question: "When is the best time to visit Batanes?",
    answer:
      "The most reliable months are March to early June, when seas are calm, hills are still green, and flights are least likely to be cancelled. December to February is also lovely (cooler air, blue skies) but seas can be choppy. Avoid the typhoon-prone months of July to October unless you have flexible travel plans.",
  },
  {
    category: "Planning",
    question: "How many days should I spend in Batanes?",
    answer:
      "A minimum of 3 days and 2 nights covers the North Batan and South Batan loops. To include Sabtang Island, plan at least 4 days and 3 nights. If you want to visit Itbayat or simply relax, 5 to 6 days is ideal.",
  },
  {
    category: "Booking",
    question: "How do I get to Batanes?",
    answer:
      "Direct flights operate daily from Manila (NAIA Terminal 4) to Basco Airport (BSO) via Philippine Airlines, Cebu Pacific (SkyJet), and AirSWIFT. Flight time is about 1 hour and 50 minutes. Book at least 2 to 3 months ahead, especially during the March to May high season.",
  },
  {
    category: "Booking",
    question: "Do I need to book tours in advance?",
    answer:
      "Yes. Batanes has a small number of licensed tour operators, vans, and faluwa boats. Booking your North Batan, South Batan, and Sabtang tours at least 2 weeks before arrival is strongly recommended — especially in March, April, May, December and Holy Week.",
  },
  {
    category: "Safety",
    question: "Is Batanes safe for solo travelers and families?",
    answer:
      "Batanes consistently ranks as one of the safest provinces in the Philippines. Crime is rare, locals are extremely welcoming, and solo travelers (including women) report excellent experiences. The main risks are weather-related — typhoons and rough seas can disrupt boat trips and flights, so always carry flexible itineraries.",
  },
  {
    category: "Safety",
    question: "What if my flight gets cancelled?",
    answer:
      "Cancellations due to weather are common in Batanes. Airlines typically rebook for the next available flight at no charge. We strongly recommend purchasing trip-cancellation insurance and budgeting one or two buffer days at the end of your trip.",
  },
  {
    category: "Transportation",
    question: "How do I get around Batanes once I arrive?",
    answer:
      "Most visitors hire a tour van with a licensed guide. For independent exploration, you can rent a bicycle (₱200 to ₱400 per day), a scooter (₱600 to ₱1,200 per day), or hire a tricycle. Public jeepneys exist but follow limited schedules.",
  },
  {
    category: "Transportation",
    question: "Are there ATMs in Batanes?",
    answer:
      "Yes, but with limitations. Basco has a few BPI, Landbank, and PNB ATMs that occasionally run out of cash. We recommend bringing enough cash (₱5,000 to ₱10,000) and topping up only when needed. Sabtang and Itbayat have no ATMs.",
  },
  {
    category: "Local Culture",
    question: "What should I know about Ivatan culture and etiquette?",
    answer:
      "Ivatans are known for honesty, generosity and quiet dignity. Greet locals with a smile, ask before photographing people up close, dress modestly when visiting churches, and never enter stone houses without invitation. The 'Honesty Coffee Shop' tradition reflects how trust is woven into everyday Batanes life.",
  },
  {
    category: "Local Culture",
    question: "What are vakul and kanayi?",
    answer:
      "The vakul is a traditional headgear worn by Ivatan women, woven from voyavoy palm fibers — it shields against sun, wind and rain. The kanayi is its male equivalent, often worn over the shoulders. Both can be purchased directly from weavers in Chavayan and Savidug villages on Sabtang.",
  },
  {
    category: "Itinerary",
    question: "Can I visit Batanes on a budget?",
    answer:
      "Yes. Budget travelers can stay in homestays (₱800 to ₱1,500/night), use tricycles and rented bikes, and join shared-van tours. A 3-day Batanes trip can be done for around ₱15,000 to ₱20,000 per person (excluding airfare).",
  },
  {
    category: "Itinerary",
    question: "What are the must-visit destinations in Batanes?",
    answer:
      "Vayang Rolling Hills, Basco Lighthouse, Valugan Boulder Beach (North Batan); Marlboro Hills, Alapad Rock, Honesty Coffee Shop, Mahatao Church (South Batan); Chavayan Village, Morong Beach and Nakabuang Arch (Sabtang). For adventure seekers, add Itbayat's Torongan Cave.",
  },
  {
    category: "Local Culture",
    question: "What food should I try in Batanes?",
    answer:
      "Try the uvud balls (banana-pith meatballs), lunis (Ivatan-style salt-cured pork), turmeric rice, dibang (flying fish), and coconut crab when in season. End your meal with hot Ivatan coffee or turmeric tea. Most South Batan tours include a traditional Ivatan-set lunch.",
  },
  {
    category: "Planning",
    question: "Is there mobile signal and internet in Batanes?",
    answer:
      "Globe and Smart provide 4G in Basco and most of Batan Island, with patchy coverage in Sabtang's villages and Itbayat. Most boutique inns and cafes offer Wi-Fi, but speeds are modest. Download maps and itineraries offline before your trip.",
  },
];

export function faqsByCategory() {
  const grouped: Record<string, FAQ[]> = {};
  for (const f of faqs) {
    grouped[f.category] = grouped[f.category] || [];
    grouped[f.category].push(f);
  }
  return grouped;
}
