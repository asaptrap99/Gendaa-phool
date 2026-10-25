"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { planner } from "@/content/content";
import { prefillQuote } from "@/lib/prefill";
import { validateQuote } from "@/lib/validate";
import { MarigoldFlower } from "./Illustrations";
import PetalBurst from "./PetalBurst";

type Answers = { occasion?: string; budget?: string; quantity?: string };

const occasionMap: Record<string, string> = {
  Diwali: "Diwali",
  "Joining kit": "Employee joining kit",
  "Client thank-you": "Client thank-you",
  "Wedding guests": "Wedding guest hampers",
  Bridesmaids: "Bridesmaid boxes",
  "Return gifts": "Wedding return gifts",
};

// Our version of the spin-the-wheel: a 3 tap quiz, then a soft two field form.
export default function GiftPlanner() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Answers>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; form?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const total = planner.steps.length;

  const pick = (key: keyof Answers, v: string) => {
    setAns((a) => ({ ...a, [key]: v }));
    setStep((s) => s + 1);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateQuote({ name, phone }, "soft");
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, ...ans, source: "planner" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setErrors({ form: "That did not go through. Please try again." });
      setStatus("idle");
    }
  };

  const current = planner.steps[step];

  return (
    <section id="planner" className="section relative overflow-hidden bg-genda-300/50" aria-labelledby="planner-title">
      <MarigoldFlower className="absolute -left-10 top-10 h-40 w-40 opacity-30" />
      <MarigoldFlower className="absolute -right-8 bottom-6 h-32 w-32 opacity-30" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow bg-cream-50"><Sparkles className="h-4 w-4" aria-hidden="true" /> Gift Planner</p>
          <h2 id="planner-title" className="mt-4 text-h2 font-semibold">{planner.title}</h2>
          <p className="mt-4 text-lg text-ink-900/80">{planner.sub}</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl rounded-card-lg bg-cream-50 p-6 shadow-warm-lg sm:p-10">
          <div className="mb-6 flex items-center gap-2" aria-hidden="true">
            {Array.from({ length: total + 1 }).map((_, i) => (
              <span key={i} className={`h-2 flex-1 rounded-full transition ${i <= step ? "bg-marigold" : "bg-sand-100"}`} />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">Step {Math.min(step + 1, total + 1)} of {total + 1}</p>

          <AnimatePresence mode="wait">
            {status === "done" ? (
              <m.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative text-center" role="status">
                <PetalBurst />
                <CheckCircle2 className="mx-auto h-12 w-12 text-leaf-700" aria-hidden="true" />
                <h3 className="mt-3 text-h3 font-semibold">Done. Ideas are on their way.</h3>
                <p className="mt-2 text-ink-900/80">We will WhatsApp you 3 box ideas for {ans.occasion?.toLowerCase()} within 24 hours.</p>
                <a
                  href="#quote"
                  onClick={(e) => { e.preventDefault(); prefillQuote({ occasion: occasionMap[ans.occasion ?? ""], budget: ans.budget }); }}
                  className="btn-ghost mt-6"
                >
                  Add more details for an exact quote
                </a>
              </m.div>
            ) : current ? (
              <m.fieldset key={current.key} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                <legend className="font-serif text-2xl font-semibold text-leaf-700">{current.q}</legend>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => pick(current.key as keyof Answers, o)}
                      aria-pressed={ans[current.key as keyof Answers] === o}
                      className="min-h-[52px] rounded-2xl bg-white px-4 py-3 text-left font-medium ring-1 ring-sand-100 transition hover:-translate-y-0.5 hover:bg-genda-300/50 hover:shadow-soft aria-pressed:bg-genda-300 aria-pressed:ring-marigold-500"
                    >
                      {o}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-leaf-700 hover:underline">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                )}
              </m.fieldset>
            ) : (
              <m.form key="soft" onSubmit={submit} noValidate initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                <h3 className="font-serif text-2xl font-semibold text-leaf-700">Lovely. Where should we send ideas?</h3>
                <p className="mt-2 text-ink-900/80">
                  {ans.occasion}, {ans.budget} per box, {ans.quantity} boxes.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pl-name" className="text-sm font-semibold">Your name</label>
                    <input id="pl-name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="field" aria-invalid={!!errors.name || undefined} aria-describedby={errors.name ? "pl-name-err" : undefined} />
                    {errors.name && <p id="pl-name-err" className="mt-1 flex items-center gap-1.5 text-sm font-medium text-ink-900 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-rani-500 before:content-['']" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="pl-phone" className="text-sm font-semibold">WhatsApp number</label>
                    <input id="pl-phone" name="phone" type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="98765 43210" className="field" aria-invalid={!!errors.phone || undefined} aria-describedby={errors.phone ? "pl-phone-err" : undefined} />
                    {errors.phone && <p id="pl-phone-err" className="mt-1 flex items-center gap-1.5 text-sm font-medium text-ink-900 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-rani-500 before:content-['']" role="alert">{errors.phone}</p>}
                  </div>
                </div>
                {errors.form && <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-ink-900 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-rani-500 before:content-['']" role="alert">{errors.form}</p>}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-70">
                    {status === "sending" && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
                    Send me 3 ideas
                  </button>
                  <button type="button" onClick={() => setStep((s) => s - 1)} className="text-sm font-semibold text-leaf-700 hover:underline">Back</button>
                </div>
              </m.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
