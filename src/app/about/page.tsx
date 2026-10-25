import { about } from "@/content/content";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import QuoteForm from "@/components/QuoteForm";
import { MarigoldFlower } from "@/components/Illustrations";

export const metadata = pageMeta("About Us", "A gifting studio for corporate and wedding gifting in India. We design, curate and hand pack every box.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title={about.title} sub="A small studio with a big love for ribbons, mithai and deadlines met." />
      <section className="section bg-sand-100" aria-labelledby="story-title">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="story-title" className="text-h2 font-semibold">Our story</h2>
            {about.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}><p className="mt-4 text-lg leading-relaxed text-ink-900/85">{p}</p></Reveal>
            ))}
            {/* [EDIT] Add founder names, photos and a real origin story. */}
          </div>
          <MarigoldFlower className="mx-auto h-56 w-56 sm:h-72 sm:w-72" />
        </div>
      </section>
      <section className="section bg-cream-50" aria-labelledby="values-title">
        <div className="container-x">
          <h2 id="values-title" className="text-center text-h2 font-semibold">What we care about</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {about.values.map((v) => (
              <li key={v.title} className="card card-lift p-6">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-ink-900/80">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <WhyUs />
      <Stats />
      <QuoteForm />
    </>
  );
}
