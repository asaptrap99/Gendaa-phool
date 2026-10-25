"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Loader2, Paperclip, Send } from "lucide-react";
import { budgets, occasions } from "@/content/content";
import { site, whatsappLink } from "@/config/site";
import { PREFILL_EVENT, type Prefill } from "@/lib/prefill";
import { LOGO_TYPES, MAX_LOGO_BYTES, validateQuote, type QuoteFields } from "@/lib/validate";
import PetalBurst from "./PetalBurst";
import Garland from "./Garland";
import { WhatsAppIcon } from "./Illustrations";

type Errors = Partial<Record<keyof QuoteFields | "logo" | "form", string>>;

const empty: QuoteFields = { name: "", company: "", phone: "", email: "", occasion: "", quantity: "", budget: "", date: "", city: "", notes: "", theme: "" };

export default function QuoteForm({ title = "Tell us about your gifts.", defaultOccasion = "" }: { title?: string; defaultOccasion?: string }) {
  const [f, setF] = useState<QuoteFields>({ ...empty, occasion: defaultOccasion });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof QuoteFields, boolean>>>({});
  const [logo, setLogo] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(new Date().toISOString().slice(0, 10)), []);

  // Pre-fill from buttons on the page, or from ?theme= / ?occasion= in the URL.
  useEffect(() => {
    const apply = (p: Prefill) => {
      setF((cur) => ({
        ...cur,
        theme: p.theme ?? cur.theme,
        occasion: p.occasion && occasions.includes(p.occasion) ? p.occasion : cur.occasion,
        budget: p.budget && budgets.includes(p.budget) ? p.budget : cur.budget,
        notes: p.theme && !cur.notes ? `I like the "${p.theme}" idea.` : cur.notes,
      }));
      setStatus("idle");
    };
    const qs = new URLSearchParams(window.location.search);
    if (qs.get("theme") || qs.get("occasion")) apply({ theme: qs.get("theme") ?? undefined, occasion: qs.get("occasion") ?? undefined });
    const onPrefill = (e: Event) => apply((e as CustomEvent<Prefill>).detail);
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set = (k: keyof QuoteFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...f, [k]: e.target.value };
    setF(next);
    if (touched[k]) setErrors((er) => ({ ...er, [k]: validateQuote(next)[k] }));
  };
  const blur = (k: keyof QuoteFields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors((er) => ({ ...er, [k]: validateQuote(f)[k] }));
  };

  const onLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    let err: string | undefined;
    if (file && file.size > MAX_LOGO_BYTES) err = "Logo must be under 5 MB.";
    else if (file && !LOGO_TYPES.includes(file.type)) err = "Logo must be PNG, JPG, SVG, WebP or PDF.";
    setErrors((er) => ({ ...er, logo: err }));
    setLogo(err ? null : file);
    if (err) e.target.value = "";
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Errors = validateQuote(f);
    if (errors.logo) errs.logo = errors.logo;
    setErrors(errs);
    setTouched(Object.fromEntries(Object.keys(empty).map((k) => [k, true])));
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const data = new FormData(formRef.current!);
    data.set("source", "quote-form");
    if (f.theme) data.set("theme", f.theme);
    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors({ ...(json.errors ?? {}), form: "Something did not go through. Please check the fields above or WhatsApp us." });
        setStatus("idle");
        return;
      }
      setStatus("done");
      setF({ ...empty });
      setLogo(null);
    } catch {
      setErrors({ form: "Network hiccup. Please try again or WhatsApp us." });
      setStatus("idle");
    }
  };

  const id = (k: string) => `${uid}-${k}`;
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={id(`${k}-err`)} className="mt-1.5 text-sm font-medium text-genda-300" role="alert">
        {errors[k]}
      </p>
    ) : null;
  const a = (k: keyof QuoteFields) => ({
    id: id(k),
    name: k,
    value: f[k] ?? "",
    onChange: set(k),
    onBlur: blur(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? id(`${k}-err`) : undefined,
    className: `field ${errors[k] ? "ring-2 ring-genda-300" : ""}`,
  });
  const label = (k: string, text: string, optional = false) => (
    <label htmlFor={id(k)} className="text-sm font-semibold text-cream-50">
      {text} {optional ? <span className="font-normal text-sage-200">(optional)</span> : <span className="text-genda-300" aria-hidden="true">*</span>}
    </label>
  );

  return (
    <section id="quote" className="relative overflow-hidden bg-forest-900 pb-16 sm:pb-24" aria-labelledby="quote-title">
      <Garland />
      <div className="container-x relative mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow bg-marigold-500">Get a quote in 24 hours</p>
          <h2 id="quote-title" className="mt-4 text-h2 font-semibold text-cream-50">{title}</h2>
          <p className="mt-4 text-lg text-sage-200">
            Share the basics. Your gift manager will reply within 24 hours with concepts, a clear per box price and a mockup within 48 hours.
          </p>
          <ul className="mt-8 grid gap-3 text-cream-50">
            {["No obligation. Just ideas and a price.", `Orders from ${site.moq} boxes.`, "GST invoice on every order."].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-marigold-500" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-sage-200 text-forest-900 hover:bg-cream-50">
            <WhatsAppIcon className="h-5 w-5" /> Rather chat? WhatsApp us
          </a>
        </div>

        <div className="relative rounded-card-lg bg-leaf-700/40 p-5 ring-1 ring-sage-200/20 sm:p-8">
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <m.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative py-12 text-center" role="status" aria-live="polite">
                <PetalBurst />
                <CheckCircle2 className="mx-auto h-14 w-14 text-marigold-500" aria-hidden="true" />
                <h3 className="mt-4 text-h3 font-semibold text-cream-50">Shubh Aarambh! Your brief is in.</h3>
                <p className="mx-auto mt-3 max-w-md text-sage-200">
                  Your gift manager will call or WhatsApp you within 24 hours. Concepts and a mockup follow within 48 hours.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-8">Send another brief</button>
              </m.div>
            ) : (
              <m.form key="form" ref={formRef} onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2">
                {f.theme && (
                  <p className="rounded-2xl bg-genda-300 px-4 py-2 text-sm font-semibold text-ink-900 sm:col-span-2">
                    Theme picked: {f.theme}
                  </p>
                )}
                <div>{label("name", "Your name")}<input {...a("name")} autoComplete="name" />{err("name")}</div>
                <div>{label("company", "Company or couple names", true)}<input {...a("company")} autoComplete="organization" /></div>
                <div>{label("phone", "Phone")}<input {...a("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" />{err("phone")}</div>
                <div>{label("email", "Email")}<input {...a("email")} type="email" autoComplete="email" placeholder="you@company.com" />{err("email")}</div>
                <div>
                  {label("occasion", "Occasion")}
                  <select {...a("occasion")}>
                    <option value="">Choose one</option>
                    {occasions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  {err("occasion")}
                </div>
                <div>{label("quantity", "Number of boxes")}<input {...a("quantity")} type="number" min={1} inputMode="numeric" placeholder={`${site.moq} or more`} />{err("quantity")}</div>
                <div>
                  {label("budget", "Budget per box")}
                  <select {...a("budget")}>
                    <option value="">Choose a range</option>
                    {budgets.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  {err("budget")}
                </div>
                <div>{label("date", "Delivery date", true)}<input {...a("date")} type="date" min={minDate || undefined} />{err("date")}</div>
                <div className="sm:col-span-2">{label("city", "Delivery city")}<input {...a("city")} autoComplete="address-level2" placeholder="Mumbai, or many cities" />{err("city")}</div>
                <div className="sm:col-span-2">
                  {label("notes", "Anything else?", true)}
                  <textarea {...a("notes")} rows={3} placeholder="Colours, must-haves, dietary needs, multiple addresses..." />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={id("logo")} className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-sage-200/40 px-4 py-3 text-cream-50 hover:border-marigold-500 focus-within:border-marigold-500">
                    <Paperclip className="h-5 w-5 text-marigold-500" aria-hidden="true" />
                    <span className="text-sm">
                      {logo ? <strong>{logo.name}</strong> : <>Upload your logo <span className="text-sage-200">(optional, PNG, JPG, SVG or PDF, up to 5 MB)</span></>}
                    </span>
                    <input id={id("logo")} name="logo" type="file" accept={LOGO_TYPES.join(",")} onChange={onLogo} className="sr-only" aria-describedby={errors.logo ? id("logo-err") : undefined} />
                  </label>
                  {err("logo")}
                </div>
                {/* Honeypot field for bots. Hidden from people and screen readers. */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="sm:col-span-2">
                  {err("form")}
                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
                    {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
                    {status === "sending" ? "Sending your brief" : "Get my quote in 24 hours"}
                  </button>
                  <p className="mt-3 text-sm text-sage-200">We only use your details to reply to this request.</p>
                </div>
              </m.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
