import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const CAMBODIA_ESSENTIALS: PackingItem[] = [
  { id: 'kh-temple', name: 'Temple Clothing (Angkor Wat coverage)', category: 'destination', description: 'Angkor Wat and all Angkor temples require covered shoulders and knees. Temple police turn visitors away at the gate. Lightweight linen pants and a loose long-sleeved shirt work in the heat.', essential: true, amazonSearchFallback: 'lightweight+linen+pants+temple+travel', affiliatePrice: '$25–40' },
  { id: 'kh-repellent', name: 'DEET Insect Repellent', category: 'destination', description: 'Dengue is endemic in Cambodia, peaks during rainy season. Mosquitoes are present at Angkor and in Siem Reap at dusk. DEET-based repellent is non-negotiable.', essential: true, amazonSearchFallback: 'deet+insect+repellent+tropical', affiliatePrice: '$8–15' },
  { id: 'kh-cash', name: 'USD Cash ($100–200)', category: 'destination', description: 'Cambodia runs almost entirely on US dollars. Most ATMs dispense USD. Tuk-tuks, guesthouses, and restaurants are cash-only. Small bills ($1, $5) are essential — change is given in Riel.', essential: true, quantityMultiplier: 0 },
  { id: 'kh-waterpurify', name: 'Water Purification Tablets / Filter', category: 'destination', description: 'Tap water is not safe to drink anywhere in Cambodia. Bottled water is cheap but generates plastic waste. A SteriPen or purification tablets let you refill safely.', essential: true, amazonSearchFallback: 'water+purification+tablets+steripen+travel', affiliatePrice: '$15–50' },
];

export const CAMBODIA_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-kh-repellent', name: 'DEET Insect Repellent', reason: 'Dengue is endemic in Cambodia. Angkor\'s moats and jungle surroundings are prime mosquito territory at dusk. DEET works — natural alternatives don\'t in tropical heat and humidity.', amazonSearchFallback: 'deet+insect+repellent+30+percent+tropical', affiliatePrice: '~$9' },
  { id: 'gr-kh-temple', name: 'Lightweight Linen Temple Clothing', reason: 'Angkor Wat guards turn people away daily. Linen breathes in 35°C heat and covers shoulders and knees. One linen set handles every Angkor temple visit without compromise.', amazonSearchFallback: 'lightweight+linen+pants+temple+travel+breathable', affiliatePrice: '~$35' },
  { id: 'gr-kh-waterpurify', name: 'Water Purification (SteriPen or tablets)', reason: 'Cambodian tap water is unsafe everywhere. Plastic bottling is Cambodia\'s most visible environmental problem. Purify and refill from any tap instead.', amazonSearchFallback: 'steripen+water+purification+travel+ultralight', affiliatePrice: '~$45' },
  { id: 'gr-kh-bag', name: 'Packable Lightweight Daypack', reason: 'Angkor Wat at sunrise, cycling between temples, tuk-tuk tours — a lightweight 15L daypack carries water, sunscreen, and temple clothes without bulk in the heat.', amazonSearchFallback: 'packable+daypack+lightweight+15l', affiliatePrice: '~$25' },
  { id: 'gr-kh-sunscreen', name: 'Reef-Safe Sunscreen', reason: 'Angkor is hot and exposed. Temple-hopping on a bicycle or tuk-tuk for 6 hours in Cambodian sun will burn you fast. Reef-safe is gentler on skin and the environment around Tonle Sap.', amazonSearchFallback: 'reef+safe+sunscreen+spf+50+mineral', affiliatePrice: '~$14' },
];

export const CAMBODIA_CONFIG: PackingConfig = {
  sitePrefix: 'dcb',
  destination: 'Cambodia',
  climate: ['tropical'],
  currency: 'USD',
  plugType: 'Type A/C/G',
  plugVoltage: '230V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: CAMBODIA_ESSENTIALS,
  gearRecommendations: CAMBODIA_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = CAMBODIA_CONFIG;

export const CAMBODIA_PACKING_FAQS = [
  { question: 'What should I pack for Cambodia?', answer: 'Temple-appropriate clothing (covered shoulders and knees) is required at Angkor Wat — guards turn visitors away at the gate. Also essential: DEET insect repellent (dengue is endemic), USD cash in small bills (Cambodia runs almost entirely on dollars), and water purification (tap water is unsafe everywhere). Our checklist covers 60+ items for Cambodia\'s tropical climate.' },
  { question: 'What should I wear at Angkor Wat?', answer: 'Covered shoulders and knees are required at Angkor Wat and all Angkor-area temples. Temple police enforce this strictly and turn visitors away at the entrance. Lightweight linen works well — it breathes in Cambodia\'s 35°C heat while covering what needs to be covered. A loose long-sleeved shirt and linen trousers handle every temple visit.' },
  { question: 'What power adapter do I need for Cambodia?', answer: 'Cambodia uses Type A, C, and G sockets at 230V/50Hz — a mix of American flat-pin (A), European round-pin (C), and British 3-pin (G). A universal adapter covers all situations. American plugs (Type A) often fit directly, but check before relying on it.' },
  { question: 'Can I buy toiletries in Cambodia?', answer: 'Basic toiletries are available in Phnom Penh and Siem Reap. Bring DEET repellent (brands vary in quality), water purification, and prescription medications from home. Everything else is available at pharmacies in tourist areas.' },
  { question: 'How many outfits should I pack for Cambodia?', answer: 'Pack for 5 days. Local wash-and-fold services in Siem Reap and Phnom Penh cost $1–3 per kilogram — some of the cheapest laundry in Southeast Asia. Same-day or next-day service is standard in guesthouses. Pack light.' },
  { question: 'What should I NOT bring to Cambodia?', answer: 'Expensive camera equipment without a bag (Phnom Penh motorbike bag-snatching is real). Tight or revealing clothing to temples (you will be turned away). Single-use plastic water bottles as your main solution (plastic waste is a serious issue in Cambodia — purify and refill). Drone equipment without a permit — Angkor and many areas prohibit drones.' },
];
