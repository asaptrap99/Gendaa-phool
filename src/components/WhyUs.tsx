import { whyUs } from "@/content/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section className="section bg-sage-200/50" aria-labelledby="why-title">
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow="Why us" title="The boring stuff, handled beautifully." sub="Gifting is emotional. Logistics should not be." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 0.08}>
              <div className="card card-lift h-full bg-cream-50 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-marigold text-ink-900">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-ink-900/80">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
