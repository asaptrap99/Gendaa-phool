// All site copy lives here. Edit words, not components.
// Anything marked [EDIT] or [PLACEHOLDER] needs real content before launch.
// Every image URL marked // REPLACE is an Unsplash stand-in. Swap for your own photos.

import { site } from "@/config/site";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const ticker = [
  "Pan-India delivery",
  `Bulk orders from ${site.moq} boxes`,
  "GST invoice on every order",
  "Mockup in 48 hours",
  "Diwali 2026 slots filling fast",
  "Custom branding on every box",
];

export const hero = {
  eyebrow: "Corporate and wedding gifting",
  title: "Gifts that make your people feel chosen.",
  sub: "Corporate and wedding gifting, designed, packed and delivered for you.",
  primary: { label: "Corporate Gifts", href: "/corporate" },
  secondary: { label: "Wedding Gifts", href: "/weddings" },
  chips: ["Pan-India delivery", "Custom branding", "GST invoice"],
  note: "made with love, packed by hand",
};

export type PathCard = {
  key: "corporate" | "wedding";
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  cta: string;
  href: string;
  image: string;
  alt: string;
};

export const pathCards: PathCard[] = [
  {
    key: "corporate",
    kicker: "For founders, HR and admin teams",
    title: "Corporate Gifting",
    body: "Gifts your team actually opens, keeps and posts about. Branded, on budget and on time.",
    bullets: [
      "Diwali and festive hampers for 25 to 5,000 people",
      "Employee joining kits and work anniversary boxes",
      "Client thank-you gifts with your logo done right",
      "Event and offsite kits delivered to every address",
    ],
    cta: "Plan Corporate Gifts",
    href: "/corporate",
    image: u("photo-1513885535751-8b9238bd345a"), // REPLACE
    alt: "Stack of wrapped gift boxes with ribbons on a warm table",
  },
  {
    key: "wedding",
    kicker: "For couples, families and planners",
    title: "Wedding Gifting",
    body: "From the roka to the vidaai, we handle the boxes. You handle the dance floor.",
    bullets: [
      "Guest welcome hampers for hotel rooms",
      "Bridesmaid and groomsmen boxes",
      "Return gifts guests actually take home",
      "Trousseau packing and shagun trays",
    ],
    cta: "Plan Wedding Gifts",
    href: "/weddings",
    image: u("photo-1519741497674-611481863552"), // REPLACE
    alt: "Wedding table decorated with flowers and small gift boxes",
  },
];

// [PLACEHOLDER] Swap for real client names or logo images.
export const clientLogos = [
  "Client Logo 1",
  "Client Logo 2",
  "Client Logo 3",
  "Client Logo 4",
  "Client Logo 5",
  "Client Logo 6",
  "Client Logo 7",
  "Client Logo 8",
];

export const process = {
  title: "Four steps. Zero chaos.",
  sub: "You tell us the brief once. We take it from there.",
  steps: [
    { icon: "ClipboardList", title: "Tell us the basics", body: "Share your budget per box, how many you need and the delivery date." },
    { icon: "Palette", title: "See concepts in 48 hours", body: "We send curated box ideas and a branded mockup within 48 hours." },
    { icon: "PackageCheck", title: "Approve and relax", body: "You say yes. We source, brand, quality check and pack every box." },
    { icon: "Truck", title: "We deliver", body: "To one office, one venue or every single doorstep across India." },
  ],
};

export type Concept = {
  slug: string;
  title: string;
  blurb: string;
  from: string; // [EDIT] starting price per box
  image: string;
  alt: string;
  tag: "corporate" | "wedding" | "festive";
};

export const concepts: Concept[] = [
  { slug: "diwali-boxes", title: "Diwali Boxes", blurb: "Diyas, dry fruits and a card that says more than Happy Diwali.", from: "[EDIT]", tag: "festive", image: u("photo-1605810230434-7631ac76ec81", 800), alt: "Lit brass diyas with marigold flowers for Diwali" }, // REPLACE
  { slug: "joining-kits", title: "Joining Kits", blurb: "Day one, sorted. Notebook, bottle, tee and a warm welcome.", from: "[EDIT]", tag: "corporate", image: u("photo-1607344645866-009c320b63e0", 800), alt: "Branded employee welcome kit laid out on a desk" }, // REPLACE
  { slug: "client-thank-you", title: "Client Thank-You", blurb: "A thank you note that arrives in a box worth keeping.", from: "[EDIT]", tag: "corporate", image: u("photo-1549465220-1a8b9238cd48", 800), alt: "Elegant gift box tied with a satin ribbon" }, // REPLACE
  { slug: "mithai-hampers", title: "Festive Mithai Hampers", blurb: "Mithai se bhi meetha. Fresh sweets in packaging that travels well.", from: "[EDIT]", tag: "festive", image: u("photo-1601050690597-df0568f70950", 800), alt: "Assorted Indian sweets arranged in a gift tray" }, // REPLACE
  { slug: "bridesmaid-boxes", title: "Bridesmaid Boxes", blurb: "For the friends who held your lehenga and your nerves.", from: "[EDIT]", tag: "wedding", image: u("photo-1522673607200-164d1b6ce486", 800), alt: "Pink bridesmaid gift box with jewellery and a handwritten card" }, // REPLACE
  { slug: "guest-welcome-kits", title: "Guest Welcome Kits", blurb: "Snacks, itinerary and a little hello waiting in every room.", from: "[EDIT]", tag: "wedding", image: u("photo-1511285560929-80b456fea0bc", 800), alt: "Wedding guest welcome hamper placed on a hotel bed" }, // REPLACE
  { slug: "return-gifts", title: "Return Gifts", blurb: "Small, useful and pretty enough that nobody leaves it behind.", from: "[EDIT]", tag: "wedding", image: u("photo-1512909006721-3d6018887383", 800), alt: "Rows of small wrapped return gifts ready for guests" }, // REPLACE
  { slug: "eco-friendly-boxes", title: "Eco-Friendly Boxes", blurb: "Plantable cards, jute, khadi and zero plastic fillers.", from: "[EDIT]", tag: "corporate", image: u("photo-1542601906990-b4d3fb778b09", 800), alt: "Eco friendly gift box with a small plant and kraft paper" }, // REPLACE
];

export const emotions = [
  { key: "Thank You", icon: "HeartHandshake", line: "For the team that showed up all year." },
  { key: "Celebrate", icon: "PartyPopper", line: "Launches, weddings, wins and big news." },
  { key: "Welcome", icon: "DoorOpen", line: "New hires, new clients, new family." },
  { key: "Congratulate", icon: "Trophy", line: "Promotions, milestones, work anniversaries." },
  { key: "Apologise", icon: "Flower2", line: "Because sometimes sorry needs a box." },
];

export const whyUs = [
  { icon: "Stamp", title: "Custom branding", body: "Your logo on boxes, ribbons, cards and products. Printed, embossed or engraved." },
  { icon: "Boxes", title: `Low MOQ of ${site.moq}`, body: `Start from ${site.moq} boxes. Scale to thousands without changing vendors.` },
  { icon: "MapPinned", title: "Pan-India delivery", body: "Metros, tier 2 towns and remote offices. One dispatch or many addresses." },
  { icon: "ShieldCheck", title: "Quality check at every step", body: "Every box is checked before sealing and photographed before it ships." },
  { icon: "UserRound", title: "Dedicated gift manager", body: "One person who knows your brief, your deadline and your boss's name." },
  { icon: "ReceiptIndianRupee", title: "Transparent pricing", body: "A clear per box quote with GST shown upfront. No surprise add-ons." },
];

// [PLACEHOLDER] Replace with real numbers.
export const stats = [
  { value: 50000, suffix: "+", label: "Boxes delivered", edit: true },
  { value: 200, suffix: "+", label: "Brands and families served", edit: true },
  { value: 120, suffix: "+", label: "Cities reached", edit: true },
  { value: 68, suffix: "%", label: "Repeat client rate", edit: true },
];

export type Project = {
  title: string;
  client: string; // [PLACEHOLDER]
  kind: "Corporate" | "Wedding";
  image: string;
  alt: string;
  tall?: boolean;
  brief: string;
  contents: string[];
  result: string;
};

// [PLACEHOLDER] Sample case studies. Replace with real projects.
export const projects: Project[] = [
  {
    title: "Diwali hampers for a 600 person tech team",
    client: "[PLACEHOLDER] SaaS company, Bengaluru",
    kind: "Corporate",
    image: u("photo-1576919228236-a097c32a5cd4", 900), // REPLACE
    alt: "Festive hamper with diyas and dry fruits",
    tall: true,
    brief: "Ship Diwali gifts to 600 employees working from 41 cities, with a budget of Rs. [EDIT] per box.",
    contents: ["Brass diya pair", "Premium dry fruit tin", "Scented candle", "Handwritten style card from the founders"],
    result: "Delivered to 41 cities in 6 days. 212 employees posted the box on LinkedIn.",
  },
  {
    title: "Welcome kits for a Udaipur destination wedding",
    client: "[PLACEHOLDER] The Sharma and Iyer wedding",
    kind: "Wedding",
    image: u("photo-1606800052052-a08af7148866", 900), // REPLACE
    alt: "Wedding welcome hamper with mithai and an itinerary card",
    brief: "Welcome hampers for 180 guests across 3 hotels, matching the wedding colour palette.",
    contents: ["Custom itinerary card", "Local mithai box", "Hangover kit", "Monogrammed hand fan"],
    result: "Placed in 180 rooms before check-in. The bride's mother asked for our number.",
  },
  {
    title: "Joining kits for a fintech startup",
    client: "[PLACEHOLDER] Fintech startup, Mumbai",
    kind: "Corporate",
    image: u("photo-1558636508-e0db3814bd1d", 900), // REPLACE
    alt: "Branded notebook, bottle and t-shirt in an onboarding box",
    brief: "A repeatable joining kit that ships within 72 hours of every offer letter.",
    contents: ["Branded tee and hoodie", "Steel bottle", "Notebook and pen", "Founder's welcome letter"],
    result: "Over 300 kits shipped on a rolling monthly schedule. Zero stockouts.",
  },
  {
    title: "Bridesmaid boxes in rani pink",
    client: "[PLACEHOLDER] A Jaipur bride",
    kind: "Wedding",
    image: u("photo-1522673607200-164d1b6ce486", 900), // REPLACE
    alt: "Pink bridesmaid proposal box with jewellery",
    tall: true,
    brief: "Eight bridesmaid proposal boxes that matched the mehendi outfits.",
    contents: ["Kundan earrings", "Satin robe", "Personalised mirror", "Mini perfume"],
    result: "Eight happy tears. One very loud phone call.",
  },
  {
    title: "Client thank-you boxes for a law firm",
    client: "[PLACEHOLDER] Law firm, Delhi",
    kind: "Corporate",
    image: u("photo-1549465220-1a8b9238cd48", 900), // REPLACE
    alt: "Premium dark gift box with gold ribbon",
    brief: "Understated, premium gifts for 90 senior clients. No loud logos.",
    contents: ["Leather desk organiser", "Single origin coffee", "Blind embossed card"],
    result: "Delivered by hand in Delhi NCR in 2 days. 14 clients wrote back.",
  },
  {
    title: "Return gifts for a 400 guest sangeet",
    client: "[PLACEHOLDER] The Mehta family",
    kind: "Wedding",
    image: u("photo-1512909006721-3d6018887383", 900), // REPLACE
    alt: "Small wrapped return gifts lined up in rows",
    brief: "Return gifts under a tight budget that still felt special.",
    contents: ["Mini brass urli", "Rose petal potli", "Thank you tag with couple's names"],
    result: "Packed in 4 days. Not one box left on a table.",
  },
];

// [PLACEHOLDER] Replace with real testimonials and names (with permission).
export const testimonials = [
  { quote: "We sent 600 Diwali boxes to 41 cities and I did not chase a single courier. That has never happened before.", name: "[PLACEHOLDER] Name", role: "Founder, SaaS company", kind: "Corporate" },
  { quote: "Our guests still talk about the welcome hampers. They matched the decor so well that the planner took photos.", name: "[PLACEHOLDER] Name", role: "Bride, Udaipur wedding", kind: "Wedding" },
  { quote: "Joining kits used to be a spreadsheet nightmare. Now I send a name and an address and it is done.", name: "[PLACEHOLDER] Name", role: "HR Head, Fintech startup", kind: "HR" },
];

export const occasions = [
  "Diwali",
  "Employee joining kit",
  "Client thank-you",
  "Work anniversary or milestone",
  "Event or offsite",
  "Wedding guest hampers",
  "Bridesmaid boxes",
  "Wedding return gifts",
  "Trousseau packing",
  "Other festival",
  "Something else",
];

export const budgets = ["Under Rs. 500", "Rs. 500 to 1,000", "Rs. 1,000 to 2,500", "Rs. 2,500 to 5,000", "Rs. 5,000 plus"];
export const quantities = ["25 to 50", "51 to 150", "151 to 500", "501 to 2,000", "2,000 plus"];

export const planner = {
  title: "Not sure where to start? Plan it in 30 seconds.",
  sub: "Three quick taps. We send you ideas that fit. No spam, promise.",
  steps: [
    { key: "occasion", q: "What is the occasion?", options: ["Diwali", "Joining kit", "Client thank-you", "Wedding guests", "Bridesmaids", "Return gifts"] },
    { key: "budget", q: "Budget per box?", options: budgets },
    { key: "quantity", q: "How many boxes?", options: quantities },
  ],
};

export const faqs = [
  { q: "What is your minimum order quantity?", a: `Our MOQ is ${site.moq} boxes for custom gifting. For very premium boxes we can sometimes go lower, so just ask.` },
  { q: "How much lead time do you need?", a: "Two to three weeks is ideal for custom branded boxes. Ready concepts can ship in 5 to 7 days. During Diwali, book at least 4 weeks ahead." },
  { q: "Can you customise boxes with our logo?", a: "Yes. We brand boxes, sleeves, ribbons, cards and many products. You see a digital mockup before anything is printed." },
  { q: "Can you deliver to many different addresses?", a: "Yes. Send us a spreadsheet of names and addresses and we ship to each one across India, with tracking for every box." },
  { q: "What are your payment terms?", a: "We usually take 50% to confirm the order and 50% before dispatch. Repeat corporate clients can ask about credit terms." },
  { q: "Do you provide a GST invoice?", a: "Yes. Every order comes with a proper GST invoice, so your finance team can claim input credit where it applies." },
  { q: "Can we see a sample first?", a: "Yes. For larger orders we send a physical sample. For smaller ones we share photos and a video of the finished box." },
  { q: "Do you take rush orders?", a: "Often, yes. Tell us your date and we will be honest about what is possible. Rush orders may carry a small express fee." },
];

export const seo = {
  corporate: {
    h2: "Why corporate gifting still works",
    sections: [
      {
        h3: "People remember how you made them feel",
        p: [
          "A bonus is spent in a week. A thoughtful gift sits on a desk for a year. That is the simple reason corporate gifting in India keeps growing, even in companies that measure everything. When an employee opens a box with their name on the card, they feel seen. When a client receives a Diwali corporate gift that fits their taste, they remember who sent it.",
          "Good corporate gift hampers are not about price. They are about fit. A remote team needs something that travels well. A senior client needs something quiet and premium. A new joiner needs an employee joining kit that makes day one feel easy.",
        ],
      },
      {
        h3: "Bulk gifting without the bulk headache",
        p: [
          "The hard part of bulk gifting is rarely the gift. It is sourcing, branding, packing, address lists, couriers and invoices. That is the part we take off your plate. You share a budget per box, the count and the date. We send concepts, a mockup and a clear quote within 48 hours.",
          "We handle custom gift boxes in bulk for teams of 25 to 5,000 people. Every box is quality checked, photographed and tracked. Your finance team gets a GST invoice. Your HR team gets their weekend back.",
        ],
      },
      {
        h3: "Client gifting that builds real relationships",
        p: [
          "Client gifting works best when it feels personal and arrives on time. A box that lands two days after Diwali says you forgot. A box that lands a week early, with a handwritten style note, says you planned ahead. We help you pick the right moment, the right contents and the right message, so the gift does its quiet work.",
        ],
      },
    ],
  },
  wedding: {
    h2: "Wedding gifting ideas that guests keep",
    sections: [
      {
        h3: "Start with the guest, not the gift",
        p: [
          "The best wedding return gifts are the ones guests actually carry home. Think about who is coming. Family elders love something traditional like a brass diya or a silver coin. Friends love something useful or a little fun. Out of town guests love wedding guest hampers waiting in their hotel room, with snacks, an itinerary and a warm hello.",
          "We help couples and families plan gifts for every function, from the roka and mehendi to the sangeet and reception. One planner, one budget, many beautiful boxes.",
        ],
      },
      {
        h3: "Bridesmaid gift boxes and the inner circle",
        p: [
          "Your closest friends deserve more than a hurried thank you. Bridesmaid gift boxes can match the outfits, carry a personal note and hold something they will use long after the wedding. Jewellery, robes, mini perfumes and custom mirrors are all favourites. We can do groomsmen boxes too, because the boys also cry.",
        ],
      },
      {
        h3: "Packing, timing and the small details",
        p: [
          "Wedding gifting has hard deadlines. Boxes must reach the venue before the guests do. We pack in your wedding colours, label everything by function and deliver to the venue or hotel with a checklist. Trousseau packing and shagun trays are done by hand with care.",
          "Tell us your guest count, budget per box and wedding date. We send ideas and a mockup within 48 hours. Dil se, boxes mein.",
        ],
      },
    ],
  },
};

export const corporatePage = {
  title: "Corporate gifting that your team actually keeps.",
  sub: "Diwali hampers, joining kits, client gifts and event kits. Branded, packed and delivered across India.",
  useCases: [
    { title: "Diwali and festive gifting", body: "Hampers for every employee and client, delivered before the festival, not after." },
    { title: "Employee joining kits", body: "A ready to ship onboarding box, sent within 72 hours of each new hire." },
    { title: "Client thank-you gifts", body: "Premium, understated boxes that keep your brand in a good mood." },
    { title: "Milestones and anniversaries", body: "Work anniversaries, promotions and team wins, gifted on schedule." },
    { title: "Events and offsites", body: "Conference kits, speaker gifts and offsite welcome boxes." },
    { title: "Leadership and board gifting", body: "Small runs of very special boxes for the people who matter most." },
  ],
  trust: ["GST invoice on every order", `MOQ of ${site.moq} boxes`, "Mockup in 48 hours", "2 to 3 week standard lead time", "Multi address delivery with tracking", "Dedicated gift manager"],
};

export const weddingPage = {
  title: "Wedding gifting, packed with as much love as the shaadi.",
  sub: "Guest hampers, bridesmaid boxes, return gifts and trousseau packing. Designed in your colours.",
  useCases: [
    { title: "Guest welcome hampers", body: "Snacks, itinerary and a hello in every hotel room before check-in." },
    { title: "Bridesmaid and groomsmen boxes", body: "Proposal boxes and thank-you gifts for your inner circle." },
    { title: "Return gifts", body: "Thoughtful favours for every function, labelled and ready to hand out." },
    { title: "Trousseau packing", body: "Saree, jewellery and shagun trays packed by hand, the traditional way." },
    { title: "Mehendi and haldi favours", body: "Little bags and boxes that match the mood and the colour." },
    { title: "Thank-you gifts after the wedding", body: "For the planner, the photographer and the cousins who did everything." },
  ],
  trust: ["Designed to match your wedding palette", "Venue and hotel delivery", "Labelled by function", "Mockup in 48 hours", "Pan-India and destination weddings", "One planner for all events"],
};

export const about = {
  title: "We are the people who love wrapping more than unwrapping.",
  story: [
    "We started with one question. Why do bulk gifts feel so impersonal? Most corporate boxes look the same, arrive late and get forgotten. Most wedding favours are bought in a hurry and left on tables.",
    "So we built a gifting studio that treats 500 boxes with the same care as one. We design every concept, source from Indian makers where we can and pack every box by hand.",
    "Our name comes from the genda phool, the marigold. It shows up at every Indian celebration, from office pujas to wedding mandaps. That is the feeling we want in every box.",
  ],
  values: [
    { title: "Care at scale", body: "Box number 500 gets the same attention as box number 1." },
    { title: "Indian makers first", body: "We work with artisans, small brands and home kitchens wherever it fits." },
    { title: "Honest timelines", body: "If a date is not possible, we say so on day one." },
  ],
};
