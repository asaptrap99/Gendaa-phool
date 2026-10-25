import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pathCards } from "@/content/content";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import SectionHeading from "./SectionHeading";

export default function PathCards() {
  return (
    <section className="section bg-sand-100" aria-labelledby="paths-title">
      <div className="container-x">
        <SectionHeading id="paths-title" eyebrow="Two things. Done really well." title="Pick your celebration." sub="We only do bulk gifting. That is why we are good at it." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pathCards.map((c, i) => {
            const wedding = c.key === "wedding";
            return (
              <Reveal key={c.key} delay={i * 0.1}>
                <article className={`card card-lift group flex h-full flex-col overflow-hidden bg-cream-50 ${wedding ? "ring-rani-500/30" : "ring-leaf-700/20"}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <SafeImage src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover transition duration-500 group-hover:scale-105" accent={wedding ? "#D6336C" : "#F59E0B"} />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${wedding ? "bg-rani-500 text-white" : "bg-leaf-700 text-cream-50"}`}>{c.kicker}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-h2 font-semibold">{c.title}</h3>
                    <p className="mt-3 text-lg text-ink-900/85">{c.body}</p>
                    <ul className="mt-6 grid gap-3">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${wedding ? "bg-rani-500 text-white" : "bg-leaf-700 text-cream-50"}`}>
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                      <Link href={c.href} className={wedding ? "btn-rani" : "btn-primary"}>
                        {c.cta} <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </Link>
                      <span className="text-sm text-ink-900/75">Concepts and mockup in 48 hours</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
