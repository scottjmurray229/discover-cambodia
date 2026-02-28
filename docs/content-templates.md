# Content Templates — Page Structure Specifications

These templates define the REQUIRED structure for every page type. Follow them exactly when creating or editing content pages.

## TEMPLATE A: DESTINATION GUIDE

### Required Frontmatter

```yaml
---
title: "[Destination Name]"
description: "[50-155 char SEO description]"
heroVideo: ""
heroImage: ""
tagline: "[3-6 word poetic tagline]"
region: [northwest | northeast | south-coast | central]
bestMonths: [Month, Month]
budgetPerDay:
  backpacker: [USD]
  midRange: [USD]
  luxury: [USD]
gettingThere: "[One sentence from Phnom Penh]"
highlights: ["Activity 1", "Activity 2", "Activity 3"]
gradientColors: "[Tailwind gradient classes]"
relatedDestinations: [slug1, slug2, slug3]
lastVerified: 2026-02-08
contentStatus: draft
draft: true
fmContentType: destination
videoBreaks:
  - id: "arrival"
    videoSrc: "[cloudinary-clip-id]"
    fallbackGradient: "[css-gradient]"
    title: "[2-4 word heading]"
    text: "[1-2 atmospheric sentences]"
    quote: "[optional]"
    quoteAuthor: "[optional]"
  - id: "beach"
  - id: "ocean"
  - id: "farewell"
relatedDestinations:
  - slug: [slug1]
    videoSrc: "[cloudinary-clip-id]"
    hook: "[1-line description]"
  - slug: [slug2]
  - slug: [slug3]
---
```

### Body Structure (Narrative Journey Pattern)

Follow this EXACT section order:

0. **Hero (above fold)** — Full-bleed looping video background (Cloudinary, autoplay muted loop). Destination name + poetic tagline overlay. Poster image fallback. Per-destination gradient overlay.
0b. **Quick Facts Bar** — Immediately after hero. Best time, avg daily cost, nearest airport, destination type, difficulty. Sticky on scroll (desktop). SpeakableSpecification schema. Sky (#E8F4F5) background. **This is the single most important GEO element.**
0c. **Byline + Editorial Intro** — ContributorByline (Scott). Links to /about/scott for E-E-A-T.
1. **Opening Editorial** — 3-5 paragraphs: the STORY of discovering this destination. Byline: Scott.
2. **--- IMMERSIVE VIDEO BREAK --- (arrival)** — 2-4 word heading + 1-2 atmospheric sentences. Uses ImmersiveBreak component.
3. **What Makes [Destination] Different** — 2-3 paragraphs: why choose this, comparative data. Hooks the reader.
4. **Cultural/Experience Section** — 2-3 paragraphs: signature experience, first-person.
5. **--- IMMERSIVE VIDEO BREAK --- (beach)** — Different clip + gradient palette.
6. **Activity/Nature Section** — Accessibility, costs in USD, guide recommendations. Practical info woven into narrative.
7. **Where to Eat** — Regional food identity + specific picks with prices. Cross-link to food pillar.
8. **--- IMMERSIVE VIDEO BREAK --- (ocean)** — Underwater or nature clip.
9. **Where to Stay** — Budget / Mid-Range / Upscale with USD pricing. Use AffiliateCard component placeholders.
10. **Cultural Landmark** — 1-2 paragraphs of atmosphere, sensory detail.
11. **--- IMMERSIVE VIDEO BREAK --- (farewell)** — Reflective departure sentence.
12. **Closing** — 1-2 paragraphs: what surprised you, what brings you back.
13. **Quick-Reference Essentials** — Getting There, Getting Around, Budget, Best Time, Connectivity, Language. Icon + label + value format.
14. **FAQ Section** — 4-6 question-answer pairs from frontmatter. Uses FAQ.astro component. Auto-generates FAQPage JSON-LD schema.
15. **Continue the Journey** — 3 related destinations with video thumbnails. Uses RelatedDestinations component.
16. **Content Pillar Cross-Links** — Cards linking to temples, festivals, cuisine, history & heritage, and practical guides. Uses pillarLinks array in DestinationLayout.
17. **Email Capture** — Destination-specific lead magnet with EmailCapture component. Must include: `leadMagnet`, `description`, `bullets` (4 items), and `guideTag` props.

### Required Practical Guide Content (Scott's Pro Tips)

Every destination page MUST include a `<div class="scott-tips">` block covering ALL of these topics. Each bullet: 1-2 sentences max, first-person singular voice, practical and direct.

| # | Topic | What to Include |
|---|-------|-----------------|
| 1 | **Logistics & Getting There** | Directions from Phnom Penh/Siem Reap, airport codes (e.g., PNH, REP), bus company names (Giant Ibis, Mekong Express) |
| 2 | **Best Time to Visit** | Specific dry/wet season months, typhoon risk window |
| 3 | **Getting Around** | Tuk-tuks, motos, bicycle rental with costs in USD |
| 4 | **Money & ATMs** | ATM availability (bank names), cash warnings, daily budget range |
| 5 | **Safety & Health** | Areas to avoid, tap water safety, nearest hospital by name |
| 6 | **Packing Essentials** | Mosquito repellent, reef-safe sunscreen, sturdy flip-flops, rain jacket |
| 7 | **Local Culture & Etiquette** | Sampeah greeting, temple etiquette, monk interaction rules, tipping norms |

Format: `<li><strong>Label:</strong> text</li>` within the scott-tips `<ul>` block.

### Required Email Capture Spec

Every page must have a destination/topic-specific EmailCapture:

```astro
<EmailCapture
  leadMagnet="Get My Free [Destination] Travel Guide"
  description="Everything you need to plan your [Destination] trip — packed into one PDF."
  bullets={[
    'Day-by-day itinerary with prices in USD',
    'Best hotels and restaurants (budget to splurge)',
    'Getting there, getting around, and money tips',
    'Khmer phrases and cultural etiquette',
  ]}
  guideTag="destination-[slug]"
/>
```

### Immersive Video Break Rules
- 3-4 per page
- Uses ImmersiveBreak component (55vh, video bg + gradient overlay)
- Fallback: CSS gradient if video fails
- Text is short and cinematic
- Pattern: Editorial > Break > Editorial > Break

### Voice & Perspective
- First-person singular ("I discovered...", "my first morning...")
- Scott is the sole author providing both logistics and cultural perspectives
- Real prices, real names, real experiences

## TEMPLATE B: FESTIVAL GUIDE

Sections in order:
1. Origin Story (200-300 words)
2. What to Expect (200-300 words)
3. How to Plan (150-200 words)
4. What to Eat (150-200 words)
5. Tips for Visitors (150-200 words)
6. What the Guidebooks Don't Tell You (100-150 words)
7. Dates (50 words)
8. Scott's Pro Tips

## TEMPLATE C: REGIONAL FOOD GUIDE

Sections in order:
1. Regional Food Identity (2-3 paragraphs)
2. Signature Dishes (card-style entries)
3. Where to Eat (Breakfast / Lunch & Dinner / Street Food)
4. Cooking Classes
5. Market Guide
6. Local Eating Tips

## TEMPLATE D: DISH DEEP-DIVE

Sections in order:
1. Origin Story (2-3 paragraphs)
2. The Regional Debate
3. Where to Eat the Best [Dish] (5-8 spots)
4. How It's Made (technique overview)
5. Ordering Guide (like a local)

## TEMPLATE E: PRACTICAL GUIDE

Sections in order:
1. Why This Matters (1-2 paragraphs)
2. The Essentials
3. Common Mistakes (3-5)
4. Pro Tips (3-5)
5. From Experience (Scott's perspective)
6. Quick Reference (table/summary)

## TEMPLATE F: CAMBODIA HISTORY & HERITAGE GUIDE

Documentary narrative structure for heritage travelers. Longer pages (4,000-6,000 words for flagship content). Eras: empire (Khmer Empire 802-1431), colonial (French Protectorate & Independence 1863-1970), conflict (War & Genocide 1970-1991), recovery (1991-Present).

Sections in order:
1. **Hero** — Historical site or memorial image. Site name + era subtitle. No monetization here — respect and immersion.
2. **Historical Context** — 3-5 paragraphs: what happened, when, why it matters. Sourced from verified historical accounts.
3. **Personal Connection** — Scott's experience visiting Cambodia's historical sites. Emotional anchor. E-E-A-T signal.
4. **Site-by-Site Guide** — Each temple/memorial/site: location, hours, entrance fee, what to see, personal observations. Guided tour affiliate links here.
5. **Practical Visiting Info** — How to get there, how long to allocate, what to wear, sensitivity guidelines. Transport/accommodation affiliates.
6. **FAQ Section** — Historical and practical questions. FAQPage schema for AI Overviews.
7. **Related Heritage Sites** — Cross-links to other /history/ pages.
8. **AI Planner CTA** — "Plan a heritage trip" — pre-loaded with history interest.

## TEMPLATE G: BEACH & ISLAND HUB (Future)

Hub-and-spoke architecture for Cambodia's coastal destinations. To be developed when beach destination content is sufficient.

Potential sections:
1. **Hero** — Beach/island video hero.
2. **Quick Facts Block** — When to go, water conditions, ferry schedules. SpeakableSpecification.
3. **Comparison Table** — Destination | Vibe | Best Time | Budget. Targets featured snippet.
4. **Destination Sections** — Each spoke: 300-500 word summary, hero image, Quick Facts mini-card, "Read Full Guide" link.
5. **Island-Hopping Routes** — Sihanoukville → Koh Rong → Koh Rong Samloem connected itinerary.
6. **AI Planner CTA** — "Plan a beach trip" — pre-loaded with coastal activities.

## Content Authority Signatures

EVERY content template must include at least one of these:
- **Scott's Pro Tips:** 3-5 practical logistics tips from multiple Cambodia trips
- **Local Insight:** 2-3 cultural insights from on-the-ground experience
- **What the Guidebooks Don't Tell You:** Real-talk festival/experience tips
- **From Experience:** Scott's personal perspective for practical guides
