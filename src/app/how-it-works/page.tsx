import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import GiftPlanner from "@/components/GiftPlanner";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import { site } from "@/config/site";

export const metadata = pageMeta("How Bulk Gifting Works", "Tell us your budget, count and date. Get concepts and a mockup in 48 hours. We source, brand, pack and deliver across India.", "/how-it-works");

const timeline = [
  { when: "Day 0", what: "You share the brief by form or WhatsApp." },
  { when: "Within 24 hours", what: "Your gift manager calls you with questions and a price range." },
  { when: "Within 48 hours", what: "Curated concepts and a branded mockup land in your inbox." },
  { when: "Week 1", what: "You approve. We confirm the order with a 50% advance." },
  { when: "Weeks 1 to 3", what: "Sourcing, branding, quality checks and hand packing." },
  { when: "Delivery", what: "One address or many. Tracking for every box." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="You send one brief. We do the rest." sub={`Orders from ${site.moq} boxes. Standard lead time is 2 to 3 weeks, and rush orders are often possible.`}>
        <a href="#quote" className="btn-primary">Start my brief</a>
      </PageHero>
      <Process id="steps" />
      <section className="section bg-sand-100" aria-labelledby="timeline-title">
        <div className="container-x max-w-3xl">
          <h2 id="timeline-title" className="text-center text-h2 font-semibold">A typical timeline</h2>
          <ol className="mt-10 grid gap-4">
            {timeline.map((t) => (
              <li key={t.when} className="card flex flex-col gap-1 bg-cream-50 p-5 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-40 shrink-0 font-serif text-lg font-semibold text-leaf-700">{t.when}</span>
                <span>{t.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <WhyUs />
      <GiftPlanner />
      <QuoteForm />
      <Faq />
    </>
  );
}
