"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/content/content";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-cream-50" aria-labelledby="faq-title">
      <div className="container-x max-w-4xl">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we hear every week." />
        <ul className="mt-10 divide-y divide-sand-100 rounded-card bg-white/80 shadow-soft ring-1 ring-sand-100">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3 className="font-sans text-base">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold text-ink-900 sm:px-7"
                  >
                    {f.q}
                    <Plus className={`h-5 w-5 shrink-0 text-leaf-700 transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen} className="px-5 pb-6 text-ink-900/85 sm:px-7">
                  {f.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
