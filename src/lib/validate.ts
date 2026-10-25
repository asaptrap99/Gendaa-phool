// Shared by the quote form (inline errors) and the API route (server check).
export type QuoteFields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  occasion: string;
  quantity: string;
  budget: string;
  date: string;
  city: string;
  notes: string;
  theme?: string;
  source?: string;
};

export const MAX_LOGO_BYTES = 5 * 1024 * 1024;
export const LOGO_TYPES = ["image/png", "image/jpeg", "image/svg+xml", "application/pdf", "image/webp"];

export function validatePhone(v: string) {
  const digits = v.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits);
}

export function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

export function validateQuote(f: Partial<QuoteFields>, mode: "full" | "soft" = "full") {
  const e: Partial<Record<keyof QuoteFields | "logo", string>> = {};
  if (!f.name || f.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!f.phone || !validatePhone(f.phone)) e.phone = "Please enter a 10 digit Indian mobile number.";
  if (mode === "soft") return e;
  if (!f.email || !validateEmail(f.email)) e.email = "That email looks a little off. Mind checking it?";
  if (!f.occasion) e.occasion = "Pick the closest occasion.";
  const qty = Number(f.quantity);
  if (!f.quantity || !Number.isFinite(qty) || qty < 1) e.quantity = "How many boxes do you need?";
  if (!f.budget) e.budget = "Pick a budget range. It helps us suggest the right box.";
  if (f.date) {
    const d = new Date(f.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(d.getTime()) || d < today) e.date = "Please pick a date in the future.";
  }
  if (!f.city || f.city.trim().length < 2) e.city = "Which city should we deliver to?";
  return e;
}
