import { Quote } from "lucide-react";
import { testimonials } from "@/content/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="section bg-sand-100" aria-labelledby="love-title">
      <div className="container-x">
        <SectionHeading id="love-title" eyebrow="Kind words" title="Mithai se bhi meetha feedback." />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.role} delay={i * 0.1}>
              <figure className={`card card-lift flex h-full flex-col bg-cream-50 p-7 ${t.kind === "Wedding" ? "border-t-4 border-rani-500" : "border-t-4 border-marigold-500"}`}>
                <Quote className={`h-8 w-8 ${t.kind === "Wedding" ? "text-rani-500" : "text-leaf-700"}`} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-serif text-xl leading-snug text-ink-900">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-sand-100 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-ink-900/75">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
