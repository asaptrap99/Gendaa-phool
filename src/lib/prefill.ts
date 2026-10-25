// Tiny bridge so any button on the page can pre-fill the quote form.
export type Prefill = {
  occasion?: string;
  theme?: string;
  budget?: string;
  quantity?: string;
};

export const PREFILL_EVENT = "quote:prefill";

export function prefillQuote(data: Prefill) {
  window.dispatchEvent(new CustomEvent<Prefill>(PREFILL_EVENT, { detail: data }));
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
