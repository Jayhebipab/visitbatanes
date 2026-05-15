import type { Destination } from "../types";

export const destinations: Destination[] = [
  {
    slug: "vayang-rolling-hills",
    name: "Vayang Rolling Hills",
    island: "Batan",
    category: "Hills & Landscapes",
    shortDescription:
      "Wind-swept emerald meadows that tumble into the West Philippine Sea — Batanes' most photographed panorama.",
    longDescription:
      "Vayang Rolling Hills is a sweeping coastal grassland on the western edge of Batan Island, where centuries of trade winds have shaped pillow-soft hills that roll uninterrupted toward the South China Sea. Locally called 'Racuh a Payaman' (large pasture), the area is still grazed by cows and carabaos managed by Ivatan families. Walking paths wind across the ridge, ending at a wooden cross that frames the Mt. Iraya volcano on clear afternoons. Sunsets here are considered among the most spectacular in the Philippines.",
    highlights: [
      "Cinematic 360° views of the coastline and Mt. Iraya",
      "Free-roaming cows and carabaos on open pasture",
      "Sunset photography at the wooden hilltop cross",
      "Cool sea breeze year-round",
    ],
    bestTimeToVisit: "March to June (dry season), late afternoon for golden hour",
    estimatedDuration: "1 to 2 hours",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.4523, lng: 121.9587 },
     image: "/image/vayangroll.jpg",
    imageAlt:
      "Vayang Rolling Hills with emerald slopes meeting the blue sea in Batanes",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
        alt: "Rolling green hills along the Batanes coast at golden hour",
      },
      {
        src: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?auto=format&fit=crop&w=1600&q=80",
        alt: "Coastal pasture with grazing cows and ocean view",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
        alt: "Wind-shaped hillside facing the Pacific Ocean",
      },
    ],
    travelTips: [
      "Wear comfortable walking shoes — the trail has uneven, grassy sections.",
      "Bring a windbreaker; coastal winds can be strong even in summer.",
      "Visit two hours before sunset for the best light and fewer crowds.",
      "Respect grazing animals — keep a safe distance and never chase them.",
    ],
    nearby: ["valugan-boulder-beach", "basco-lighthouse", "fundacion-pacita"],
    faqs: [
      {
        question: "Is there an entrance fee at Vayang Rolling Hills?",
        answer:
          "No, Vayang Rolling Hills is open to the public free of charge. Some local guides may charge for transportation or photography assistance, but the site itself is free.",
      },
      {
        question: "How do I get to Vayang Rolling Hills from Basco?",
        answer:
          "Vayang is roughly 10 minutes by tricycle or rented bike from Basco town proper. Most North Batan tour packages include a stop here.",
      },
    ],
    featured: true,
  },
  {
    slug: "marlboro-hills",
    name: "Marlboro Hills (Racuh A Payaman)",
    island: "Batan",
    category: "Hills & Landscapes",
    shortDescription:
      "A communal pasture perched on cliffs overlooking the Pacific, nicknamed after the iconic cigarette commercials.",
    longDescription:
      "Officially called Racuh A Payaman, Marlboro Hills sits high above the eastern Batan coastline near Mahatao, offering 360-degree vistas of the Pacific Ocean, Mt. Iraya, and the southernmost tip of Diura Fishing Village. The wide, treeless plateau is a working communal pasture used by Ivatan farmers for centuries. Its sweeping panoramas earned it the nickname 'Marlboro Country' from visiting filmmakers in the early 2000s.",
    highlights: [
      "Panoramic Pacific Ocean cliff views",
      "Wide, breezy plateau ideal for picnics",
      "Wild horses and free-grazing cattle",
      "Backdrop of Mt. Iraya volcano",
    ],
    bestTimeToVisit: "Mornings (clear skies) or late afternoon (golden hour). Avoid storms.",
    estimatedDuration: "1 hour",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.3686, lng: 122.0153 },
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
    imageAlt:
      "Marlboro Hills panorama with cliffs, ocean and grazing cattle in Batanes",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
        alt: "Cliffside plateau overlooking the Pacific Ocean",
      },
      {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=80",
        alt: "Mountain ridge meeting the blue ocean horizon",
      },
    ],
    travelTips: [
      "Sun protection is essential — there is no shade on the plateau.",
      "Cell signal is intermittent; download your map offline.",
      "Combine with a Diura Fishing Village stop on the same day.",
    ],
    nearby: ["alapad-rock-formation", "diura-fishing-village", "mahatao-church"],
    faqs: [
      {
        question: "Is Marlboro Hills the same as Vayang Hills?",
        answer:
          "No, they are different. Vayang is on the western coast near Basco; Marlboro Hills is on the eastern coast near Mahatao. Both are open pastures with stunning views — Vayang faces sunsets, Marlboro faces sunrises.",
      },
    ],
    featured: true,
  },
  {
    slug: "basco-lighthouse",
    name: "Basco Lighthouse (Naidi Hills)",
    island: "Batan",
    category: "Lighthouses & Viewpoints",
    shortDescription:
      "A six-story Spanish-style lighthouse on Naidi Hills, perfect for sunset over the South China Sea.",
    longDescription:
      "Built in 2003, Basco Lighthouse stands proudly on Naidi Hills overlooking Basco Bay. Though modern, it draws inspiration from Spanish colonial-era beacons and has become the unofficial symbol of Batanes. A short uphill walk leads to a viewing deck offering panoramic vistas of Mt. Iraya, the town of Basco, and the surrounding hills. Sunsets here paint the lighthouse and ocean in dramatic gold and crimson tones.",
    highlights: [
      "Postcard-perfect sunset views",
      "Walkable from Basco town proper",
      "Surrounding Naidi Hills ideal for strolling",
      "Heritage telegraph ruins nearby",
    ],
    bestTimeToVisit: "Late afternoon for sunset (approx. 5:30 PM)",
    estimatedDuration: "45 minutes to 1 hour",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.4538, lng: 121.9636 },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Stone lighthouse overlooking the coast in Batanes at sunset",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        alt: "Lighthouse silhouetted by orange sunset sky",
      },
      {
        src: "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?auto=format&fit=crop&w=1600&q=80",
        alt: "Coastal lighthouse with green hills",
      },
    ],
    travelTips: [
      "Arrive 30 minutes before sunset to claim a good viewing spot.",
      "Pair with dinner at a nearby café in Basco proper.",
      "The lighthouse interior is usually closed; the view is from outside.",
    ],
    nearby: ["vayang-rolling-hills", "fundacion-pacita", "basco-cathedral"],
    faqs: [
      {
        question: "Can you go inside Basco Lighthouse?",
        answer:
          "Public access to the interior is currently not available. Visitors enjoy the views from the surrounding Naidi Hills, where pathways wind around the lighthouse base.",
      },
    ],
    featured: true,
  },
  {
    slug: "valugan-boulder-beach",
    name: "Valugan Boulder Beach",
    island: "Batan",
    category: "Beaches & Coves",
    shortDescription:
      "An otherworldly shoreline of polished volcanic boulders, sculpted by Mt. Iraya's ancient eruptions.",
    longDescription:
      "Valugan Boulder Beach is a 1-kilometer stretch of smooth, andesite boulders deposited by an eruption of Mt. Iraya nearly 400 years ago and rounded by centuries of wave action. The shore faces the Pacific Ocean, so swimming is not allowed — but the dramatic landscape, sound of waves churning the rocks, and view of sunrise are unforgettable.",
    highlights: [
      "Sunrise photography paradise",
      "Iconic Batanes 'rock beach' landscape",
      "Stone-stacked cairns made by visitors",
      "Massive Pacific waves and breeze",
    ],
    bestTimeToVisit: "Early morning for sunrise; avoid during typhoons",
    estimatedDuration: "1 hour",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.4486, lng: 122.0119 },
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Smooth volcanic boulders along a Pacific Ocean beach in Batanes",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=80",
        alt: "Rounded stones on a wild ocean beach",
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        alt: "Sunrise over a rocky shoreline",
      },
    ],
    travelTips: [
      "Do not swim — the waves and undercurrents are dangerous.",
      "Wear sturdy shoes; the boulders shift underfoot.",
      "Photograph the sunrise for the best light.",
    ],
    nearby: ["marlboro-hills", "basco-lighthouse"],
    faqs: [
      {
        question: "Can you swim at Valugan Boulder Beach?",
        answer:
          "No. The Pacific currents and the rocky shoreline make swimming unsafe. The beach is for sightseeing and photography only.",
      },
    ],
  },
  {
    slug: "sabtang-island",
    name: "Sabtang Island",
    island: "Sabtang",
    category: "Islands",
    shortDescription:
      "A storybook island of stone villages, white-sand coves and time-worn limestone arches.",
    longDescription:
      "Reached by a 30-minute faluwa boat ride from San Vicente Port, Sabtang Island is the most traditional of Batanes' three inhabited islands. Its stone-and-cogon villages — Chavayan, Savidug and Sumnanga — are UNESCO-recognized heritage gems. Sabtang is also home to Morong Beach with its iconic Nakabuang Arch, and the Sabtang Lighthouse perched above the harbor.",
    highlights: [
      "UNESCO heritage Ivatan stone villages",
      "Morong Beach and Nakabuang Arch",
      "Vakul (traditional Ivatan headgear) weaving demos",
      "Sabtang Lighthouse and clifftop views",
    ],
    bestTimeToVisit: "March to May (calmer seas); avoid July to October",
    estimatedDuration: "Full day (depart 6 AM, return 3 PM)",
    entryFee: "₱200 environmental fee; faluwa boat fare separate",
    difficulty: "Moderate",
    coords: { lat: 20.3147, lng: 121.8642 },
    image: "/image/SABTANG_ISLAND.jpg",
    imageAlt:
      "Limestone arch and white sand beach with turquoise water on Sabtang Island",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=1600&q=80",
        alt: "Traditional Ivatan stone house with cogon thatched roof",
      },
      {
        src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80",
        alt: "Pristine white-sand cove with limestone formations",
      },
      {
        src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
        alt: "Boatman crossing turquoise waters to Sabtang",
      },
    ],
    travelTips: [
      "Faluwa boats depart only when seas are safe — check the night before.",
      "Bring motion-sickness pills; the crossing can be choppy.",
      "Carry cash — there are no ATMs on Sabtang.",
      "Pre-book a guided van tour at San Vicente Port.",
    ],
    nearby: ["chavayan-village", "morong-beach"],
    faqs: [
      {
        question: "How long is the boat ride to Sabtang Island?",
        answer:
          "Roughly 30 to 45 minutes depending on sea conditions. Boats are wooden faluwas with limited capacity; depart by 6:30 AM for the best chance of clear weather.",
      },
      {
        question: "Is Sabtang a safe day trip?",
        answer:
          "Yes, with appropriate weather. Boat trips are cancelled during rough seas, so plan flexible itineraries during the rainy months (July to October).",
      },
    ],
    featured: true,
  },
  {
    slug: "chavayan-village",
    name: "Chavayan Heritage Village",
    island: "Sabtang",
    category: "Heritage & Culture",
    shortDescription:
      "A preserved Ivatan village of stone houses and cogon roofs — one of the Philippines' best-kept cultural treasures.",
    longDescription:
      "Chavayan is the smallest and most traditional of Sabtang's villages, a maze of limestone-and-coral homes that have weathered Pacific typhoons for generations. Many families still wear the vakul (women) and kanayi (men) — woven coverings made from voyavoy palm. The village is on UNESCO's tentative World Heritage list.",
    highlights: [
      "Photogenic stone-house lanes",
      "Live vakul weaving demonstrations",
      "Tasting of local turmeric tea and uvi (yam) snacks",
      "Walking distance Santa Rosa de Lima Chapel",
    ],
    bestTimeToVisit: "Morning hours; during Lakay-Lakay Festival (March)",
    estimatedDuration: "1 to 2 hours",
    entryFee: "Donations welcome to community fund",
    difficulty: "Easy",
    coords: { lat: 20.2806, lng: 121.8867 },
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1920&q=80",
    imageAlt:
      "Stone walls and thatched roofs of a traditional Ivatan village",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
        alt: "Narrow lane between traditional stone houses",
      },
      {
        src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
        alt: "Ivatan elder demonstrating vakul weaving",
      },
    ],
    travelTips: [
      "Respect residents — many of these are private homes, not museums.",
      "Buy a handcrafted vakul to support local weavers.",
      "Walk softly; the lanes are sacred community ground.",
    ],
    nearby: ["sabtang-island", "morong-beach"],
    faqs: [
      {
        question: "Are the Chavayan stone houses still lived in?",
        answer:
          "Yes — most homes are still inhabited by Ivatan families. Please be respectful and ask before taking close-up photos of residents.",
      },
    ],
  },
  {
    slug: "morong-beach",
    name: "Morong Beach & Nakabuang Arch",
    island: "Sabtang",
    category: "Beaches & Coves",
    shortDescription:
      "Powder-white sand framed by Sabtang's iconic limestone arch — every visitor's favorite Batanes photo.",
    longDescription:
      "Morong Beach is a sheltered cove on Sabtang's southern coast where calm aquamarine waters lap against fine white sand. The famed Nakabuang Arch — a natural limestone bridge sculpted by waves — stands at the eastern end of the beach and is one of the most recognizable images of Batanes. Picnic huts (locally called pintos) shelter visitors and serve as venues for fresh-cooked Ivatan meals.",
    highlights: [
      "Swimming in clear, calm waters",
      "Iconic Nakabuang Arch photo spot",
      "Fresh seafood lunch in beachside pintos",
      "Coral-sand snorkeling at high tide",
    ],
    bestTimeToVisit: "Late morning to early afternoon (after the heritage village tour)",
    estimatedDuration: "2 to 3 hours",
    entryFee: "Free; lunch packages from ₱500/person",
    difficulty: "Easy",
    coords: { lat: 20.2867, lng: 121.8625 },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Limestone arch on a white sand beach with turquoise sea",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        alt: "Natural rock arch on a tropical beach",
      },
      {
        src: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=80",
        alt: "Picnic huts overlooking a calm cove",
      },
    ],
    travelTips: [
      "Pre-order lunch through your Sabtang van tour operator.",
      "Bring reef-safe sunscreen; the cove ecosystem is fragile.",
      "Morning light is best for arch photos.",
    ],
    nearby: ["sabtang-island", "chavayan-village"],
    faqs: [
      {
        question: "Is the Nakabuang Arch safe to walk under?",
        answer:
          "Yes, the arch is structurally stable and walking under it is encouraged for photos. Avoid climbing it.",
      },
    ],
  },
  {
    slug: "alapad-rock-formation",
    name: "Alapad Rock Formation",
    island: "Batan",
    category: "Lighthouses & Viewpoints",
    shortDescription:
      "A dramatic cliffside chapel and rock spire that played starring roles in Filipino cinema.",
    longDescription:
      "The Alapad Rock Formation is a striking limestone outcrop on Batan's southeastern coastline near Uyugan, immortalized in the Filipino film 'Hihintayin Kita Sa Langit.' A small viewing deck and a cliff-edge bench let visitors soak in the contrast of jagged rocks and Pacific blue. The site marks the southernmost stretch of the South Batan tour loop.",
    highlights: [
      "Cinematic film location",
      "Dramatic coastal cliffs",
      "Roadside viewing platform",
      "Ideal sunrise stop",
    ],
    bestTimeToVisit: "Morning during South Batan tour loop",
    estimatedDuration: "30 minutes",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.3358, lng: 122.0419 },
    image:
      "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Rugged cliffs meeting the ocean along the Batanes coastline",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1600&q=80",
        alt: "Coastal cliffs and ocean view at sunrise",
      },
    ],
    travelTips: [
      "Stay behind the railings — the cliffs are unstable.",
      "Combine with the Honesty Coffee Shop visit nearby.",
    ],
    nearby: ["marlboro-hills", "honesty-coffee-shop"],
    faqs: [
      {
        question: "Why is Alapad Rock famous?",
        answer:
          "It was a key filming location for the 1991 Filipino classic 'Hihintayin Kita Sa Langit' and has since become a popular photo stop on the South Batan tour.",
      },
    ],
  },
  {
    slug: "honesty-coffee-shop",
    name: "Honesty Coffee Shop",
    island: "Batan",
    category: "Food & Local",
    shortDescription:
      "An unmanned roadside store where travelers pay on the honor system — a window into Ivatan integrity.",
    longDescription:
      "The Honesty Coffee Shop is a tiny, family-owned wooden hut in Ivana where there is no cashier or attendant. Visitors choose snacks, brewed Ivatan coffee, or souvenirs, then drop payment into a wooden box. Featured by international media as a symbol of Ivatan honesty, it has run continuously since 1995. The hut sits across from San Jose de Ivana Church and the old port.",
    highlights: [
      "Pay-what-you-take honesty system",
      "Hot Ivatan coffee and turmeric tea",
      "Locally made coconut snacks and souvenirs",
      "Across from Ivana's heritage church and port",
    ],
    bestTimeToVisit: "Mid-morning during South Batan tour",
    estimatedDuration: "20 to 30 minutes",
    entryFee: "Free; pay for items consumed",
    difficulty: "Easy",
    coords: { lat: 20.3142, lng: 121.9889 },
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Quaint wooden coffee shop with coffee and snacks displayed",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=1600&q=80",
        alt: "Vintage coffee bar with handwritten prices",
      },
    ],
    travelTips: [
      "Bring small bills (₱20s and ₱50s) for accurate payment.",
      "Buy a souvenir notebook to support the family.",
    ],
    nearby: ["alapad-rock-formation", "san-jose-de-ivana-church"],
    faqs: [
      {
        question: "Is the Honesty Coffee Shop really unmanned?",
        answer:
          "Yes, completely. The owners trust visitors to pick items and leave correct payment in the wooden box. It has operated this way since 1995.",
      },
    ],
  },
  {
    slug: "fundacion-pacita",
    name: "Fundacion Pacita",
    island: "Batan",
    category: "Heritage & Culture",
    shortDescription:
      "A cliffside artist's retreat turned boutique inn — Batanes' most iconic luxury landmark.",
    longDescription:
      "Once the home and studio of Ivatan artist and former senator Pacita Abad, Fundacion Pacita is now a boutique nature lodge perched on a Tukon hillside overlooking Basco Bay. Even non-guests can visit the lounge, garden viewpoints, and seasonal exhibitions celebrating Pacita's vibrant work. The lodge played a prominent role in the 2008 Filipino film 'You Are the One.'",
    highlights: [
      "Pacita Abad's original artworks and studio",
      "Cliff-edge views of Basco and the lighthouse",
      "Boutique dining at the Café du Tukon",
      "Sunset cocktails on the garden terrace",
    ],
    bestTimeToVisit: "Late afternoon for dinner reservations",
    estimatedDuration: "1 to 2 hours (longer if dining)",
    entryFee: "Free for the gallery; meals priced separately",
    difficulty: "Easy",
    coords: { lat: 20.4642, lng: 121.9711 },
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Cliffside lodge overlooking the bay in Batanes",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
        alt: "Garden terrace with sea view",
      },
    ],
    travelTips: [
      "Reserve dinner at Café du Tukon at least one day ahead.",
      "Smart-casual attire encouraged in the restaurant.",
    ],
    nearby: ["basco-lighthouse", "vayang-rolling-hills"],
    faqs: [
      {
        question: "Can non-guests visit Fundacion Pacita?",
        answer:
          "Yes. Non-guests are welcome to visit the gallery, gardens, and Café du Tukon. Reservations are recommended for dining.",
      },
    ],
  },
  {
    slug: "mahatao-church",
    name: "Mahatao Church (San Carlos Borromeo)",
    island: "Batan",
    category: "Heritage & Culture",
    shortDescription:
      "A National Cultural Treasure built in 1789 — limestone walls that have stood for two centuries.",
    longDescription:
      "The Church of San Carlos Borromeo in Mahatao is a National Cultural Treasure declared by the Philippine government. Built by Dominican friars in 1789, its 2-meter-thick limestone walls have withstood typhoons, earthquakes and time. Inside, original retablos and Ivatan religious art remain intact. A walk through the adjacent blanco lighthouse and house of dakay (oldest Ivatan stone house) makes for a meaningful heritage stop.",
    highlights: [
      "1789 Spanish colonial architecture",
      "National Cultural Treasure status",
      "Original retablos and altar pieces",
      "Adjacent blanco lighthouse",
    ],
    bestTimeToVisit: "Morning (cooler); Sunday Mass at 6 AM",
    estimatedDuration: "30 minutes",
    entryFee: "Free; donations welcome",
    difficulty: "Easy",
    coords: { lat: 20.3658, lng: 121.9847 },
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Historic stone church with Spanish colonial architecture",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
        alt: "Spanish-era church facade with arched doorway",
      },
    ],
    travelTips: [
      "Dress modestly — shoulders and knees covered.",
      "Photography allowed but no flash during services.",
    ],
    nearby: ["marlboro-hills", "alapad-rock-formation"],
    faqs: [
      {
        question: "When was Mahatao Church built?",
        answer:
          "Construction began in 1789 under Dominican missionaries. It is one of the best-preserved Spanish colonial churches in northern Philippines.",
      },
    ],
  },
  {
    slug: "diura-fishing-village",
    name: "Diura Fishing Village",
    island: "Batan",
    category: "Heritage & Culture",
    shortDescription:
      "Quiet coastal hamlet where Ivatan fishermen still set out for the dorado catch each March.",
    longDescription:
      "Diura is a sleepy fishing village tucked behind the eastern cliffs of Batan Island. From March through May, the village celebrates the Kapayvanuvanua — a fishing season opening ritual that has been performed for generations. Visitors can rest under nipa huts on the pebbled beach, dip in the natural Spring of Youth (Manaring Spring), and sample fresh-grilled dorado.",
    highlights: [
      "Traditional Ivatan fishing rituals",
      "Manaring Spring (Spring of Youth) for a cool dip",
      "Fresh dorado season (March to May)",
      "Quiet pebble beach away from crowds",
    ],
    bestTimeToVisit: "March to May for fishing season",
    estimatedDuration: "1 to 2 hours",
    entryFee: "Free",
    difficulty: "Easy",
    coords: { lat: 20.4275, lng: 122.0211 },
    image:
      "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Wooden fishing boats on a quiet pebbled shore",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1600&q=80",
        alt: "Fishing boats resting on a pebble beach",
      },
    ],
    travelTips: [
      "Bring water shoes — the beach is pebbled, not sandy.",
      "Try the Manaring Spring's chilled freshwater pool.",
    ],
    nearby: ["marlboro-hills", "alapad-rock-formation"],
    faqs: [
      {
        question: "What is the Manaring Spring?",
        answer:
          "Locally called the Spring of Youth, it is a small freshwater spring at the edge of Diura where visitors traditionally splash their faces for good fortune and youth.",
      },
    ],
  },
];

export const featuredDestinations = destinations.filter((d) => d.featured);

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export const destinationCategories = [
  "Hills & Landscapes",
  "Beaches & Coves",
  "Heritage & Culture",
  "Lighthouses & Viewpoints",
  "Islands",
  "Food & Local",
] as const;
