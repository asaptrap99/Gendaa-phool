"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { concepts, type Concept } from "@/content/content";
import { prefillQuote } from "@/lib/prefill";
import SafeImage from "./SafeImage";
import SectionHeading from "./SectionHeading";

export default function ConceptCarousel({ filter }: { filter?: Concept["tag"][] }) {
  const ref = useRef<HTMLUListElement>(null);
  const items = filter ? concepts.filter((c) => filter.includes(c.tag)) : concepts;
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section id="concepts" className="section overflow-hidden bg-sand-100" aria-labelledby="concepts-title">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="concepts-title" center={false} eyebrow="Gifting concepts" title="Ideas to start from. Never a catalogue." sub="Every box is built around your brief. These are starting points, priced per box." />
          <div className="hidden gap-2 md:flex">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous concepts" className="grid h-12 w-12 place-items-center rounded-full bg-cream-50 text-leaf-700 shadow-soft hover:bg-leaf-700 hover:text-cream-50">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next concepts" className="grid h-12 w-12 place-items-center rounded-full bg-cream-50 text-leaf-700 shadow-soft hover:bg-leaf-700 hover:text-cream-50">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <ul ref={ref} className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 sm:scroll-px-6 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-label="Gifting concepts">
        {items.map((c) => (
          <li key={c.slug} className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[23%]">
            <article className="card card-lift group flex h-full flex-col overflow-hidden bg-cream-50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <SafeImage src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 300px, 80vw" className="object-cover transition duration-500 group-hover:scale-105" accent={c.tag === "wedding" ? "#D6336C" : "#F59E0B"} />
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${c.tag === "wedding" ? "bg-rani-500 text-white" : "bg-cream-50 text-leaf-700"}`}>{c.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-ink-900/80">{c.blurb}</p>
                <p className="mt-4 text-sm text-ink-900/75">
                  Starting from <strong className="text-base text-ink-900">Rs. {c.from}</strong> per box
                </p>
                <a href="#quote" onClick={(e) => { e.preventDefault(); prefillQuote({ theme: c.title }); }} className="mt-4 inline-flex items-center gap-1 font-semibold text-leaf-700 underline decoration-marigold-500 decoration-2 underline-offset-4 hover:text-forest-900">
                  Get this quoted <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
