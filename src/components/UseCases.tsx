import { BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Props = { title: string; sub: string; items: { title: string; body: string }[]; trust: string[]; wedding?: boolean };

export default function UseCases({ title, sub, items, trust, wedding = false }: Props) {
  return (
    <section className="section bg-sand-100" aria-labelledby="usecases-title">
      <div className="container-x">
        <SectionHeading id="usecases-title" eyebrow="What we do" title={title} sub={sub} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((u, i) => (
            <Reveal as="li" key={u.title} delay={(i % 3) * 0.08}>
              <div className={`card card-lift h-full bg-cream-50 p-6 border-l-4 ${wedding ? "border-rani-500" : "border-marigold-500"}`}>
                <h3 className="text-xl font-semibold">{u.title}</h3>
                <p className="mt-2 text-ink-900/80">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap justify-center gap-3" aria-label="What you can count on">
          {trust.map((t) => (
            <li key={t} className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-leaf-700 ring-1 ring-leaf-700/20">
              <BadgeCheck className={`h-4 w-4 ${wedding ? "text-rani-500" : "text-leaf-700"}`} aria-hidden="true" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
