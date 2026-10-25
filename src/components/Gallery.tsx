"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { projects, type Project } from "@/content/content";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import SectionHeading from "./SectionHeading";

export default function Gallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = limit ? projects.slice(0, limit) : projects;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
    if (!active && d.open) d.close();
  }, [active]);

  return (
    <section id="our-work" className="section bg-cream-50" aria-labelledby="work-title">
      <div className="container-x">
        <SectionHeading id="work-title" eyebrow="Our work" title="Boxes that left the building." sub="Tap a project to see the brief, what went inside and how it landed." />
        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button type="button" onClick={() => setActive(p)} className="card card-lift group block w-full overflow-hidden text-left" aria-haspopup="dialog">
                <div className={`relative overflow-hidden ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <SafeImage src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" accent={p.kind === "Wedding" ? "#D6336C" : "#F59E0B"} />
                </div>
                <div className="p-5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${p.kind === "Wedding" ? "bg-rani-500 text-white" : "bg-leaf-700 text-cream-50"}`}>{p.kind}</span>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-900/75">{p.client}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && setActive(null)}
        className="w-[min(92vw,720px)] max-h-[90vh] rounded-card-lg bg-cream-50 p-0 text-ink-900 shadow-warm-lg backdrop:bg-forest-900/70"
        aria-labelledby="project-title"
      >
        {active && (
          <div>
            <div className="relative aspect-[16/9]">
              <SafeImage src={active.image} alt={active.alt} fill sizes="720px" className="object-cover" accent={active.kind === "Wedding" ? "#D6336C" : "#F59E0B"} />
              <button type="button" onClick={() => setActive(null)} className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-cream-50 text-leaf-700 shadow-soft" aria-label="Close project">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-leaf-700">{active.kind} . {active.client}</p>
              <h3 id="project-title" className="mt-2 text-h3 font-semibold">{active.title}</h3>
              <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-900/70">The brief</dt>
                  <dd className="mt-1">{active.brief}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-900/70">In the box</dt>
                  <dd className="mt-1">
                    <ul className="list-inside list-disc marker:text-marigold-500">
                      {active.contents.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-900/70">The result</dt>
                  <dd className="mt-1">{active.result}</dd>
                </div>
              </dl>
              <a href="#quote" onClick={() => setActive(null)} className="btn-primary mt-8">Want something like this?</a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
