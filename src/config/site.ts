// ONE place for business settings. Edit these and the whole site updates.

export const site = {
  // [EDIT] Brand name. Used in header, footer, metadata and JSON-LD.
  name: "Gendaa Phool",
  tagline: "Dil se, boxes mein.",
  // [EDIT] Your live domain, no trailing slash. Used for sitemap, OpenGraph and canonical URLs.
  url: "https://www.gendaaphool.in",
  description:
    "Corporate gifting and wedding gifting in India. We design, curate, pack and deliver custom gift boxes in bulk, pan-India, with a GST invoice on every order.",

  // [EDIT] WhatsApp number in international format, digits only (91 + 10 digit number).
  whatsappNumber: "919999999999",
  whatsappMessage:
    "Hi! I want to plan bulk gifts. Occasion: ___ , Boxes: ___ , Budget per box: Rs. ___ , Date: ___",

  // [EDIT] Contact details.
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  email: "hello@gendaaphool.in",
  address: "[EDIT] Studio address, City, State, PIN",
  gstin: "[EDIT] GSTIN 00XXXXX0000X0XX",
  hours: "Mon to Sat, 10 am to 7 pm",

  // [EDIT] Diwali urgency banner. Set show to false after Diwali.
  festiveDeadline: {
    show: true,
    label: "Diwali 2026",
    orderBy: "1 November 2026",
  },

  // [EDIT] Minimum order quantity shown across the site.
  moq: 25,

  social: {
    instagram: "https://instagram.com/", // [EDIT]
    linkedin: "https://linkedin.com/", // [EDIT]
    facebook: "https://facebook.com/", // [EDIT]
  },
} as const;

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Corporate", href: "/corporate" },
  { label: "Weddings", href: "/weddings" },
  { label: "Festive", href: "/#concepts" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
