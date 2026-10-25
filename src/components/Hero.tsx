import Link from "next/link";
import { ArrowRight, BadgeCheck, Heart } from "lucide-react";
import { hero } from "@/content/content";
import Petals from "./Petals";
import GiftBox from "./GiftBox";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pb-16 pt-10 sm:pb-24 sm:pt-16" aria-labelledby="hero-title">
      <Petals />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-display font-semibold text-leaf-700"
          >
            Gifts that make your people feel <span className="relative whitespace-nowrap text-ink-900">chosen.<svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 h-3 w-full" aria-hidden="true"><path d="M2 9C50 2 150 2 198 8" stroke="#F59E0B" strokeWidth="5" fill="none" strokeLinecap="round" /></svg></span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-900/85 sm:text-xl">
            {hero.sub} Tell us the count and the date. Get a quote in 24 hours.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primary.href} className="btn-primary">
              {hero.primary.label} <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href={hero.secondary.href} className="btn-ghost">
              {hero.secondary.label} <Heart className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Why teams trust us">
            {hero.chips.map((c) => (
              <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-sage-200 px-3 py-1.5 text-sm font-medium text-leaf-700">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <GiftBox />
      </div>
    </section>
  );
}
