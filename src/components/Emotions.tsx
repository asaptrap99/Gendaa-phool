"use client";

import { emotions } from "@/content/content";
import { prefillQuote } from "@/lib/prefill";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Emotions() {
  return (
    <section className="section bg-cream-50" aria-labelledby="emotions-title">
      <div className="container-x">
        <SectionHeading id="emotions-title" eyebrow="Shop by feeling" title="What do you want them to feel?" sub="Pick a feeling. We will fill the form for you and build the box around it." />
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {emotions.map((e, i) => (
            <Reveal as="li" key={e.key} delay={i * 0.06} className={i === emotions.length - 1 ? "col-span-2 md:col-span-1" : ""}>
              <a
                href="#quote"
                onClick={(ev) => { ev.preventDefault(); prefillQuote({ theme: e.key }); }}
                className="card card-lift flex h-full flex-col items-center gap-3 p-6 text-center hover:bg-genda-300/40"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-sage-200 text-leaf-700">
                  <Icon name={e.icon} className="h-7 w-7" />
                </span>
                <span className="font-serif text-xl font-semibold text-leaf-700">{e.key}</span>
                <span className="text-sm text-ink-900/80">{e.line}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
