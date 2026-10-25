import { corporatePage } from "@/content/content";
import { faqLd, pageMeta, serviceLd } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import UseCases from "@/components/UseCases";
import LogoMarquee from "@/components/LogoMarquee";
import Process from "@/components/Process";
import ConceptCarousel from "@/components/ConceptCarousel";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import SeoBlock from "@/components/SeoBlock";
import JsonLd from "@/components/JsonLd";

const desc = "Corporate gifting in India for teams of 25 to 5,000. Diwali corporate gifts, corporate gift hampers, employee joining kits and client gifting. Branded, with GST invoice.";
export const metadata = pageMeta("Corporate Gifting in India", desc, "/corporate");

export default function CorporatePage() {
  return (
    <>
      <PageHero eyebrow="Corporate gifting" title={corporatePage.title} sub={corporatePage.sub}>
        <a href="#quote" className="btn-primary">Get a quote in 24 hours</a>
        <a href="#concepts" className="btn-ghost">See corporate concepts</a>
      </PageHero>
      <LogoMarquee />
      <UseCases title="Every reason to gift your people." sub="One partner for festivals, onboarding, clients and milestones." items={corporatePage.useCases} trust={corporatePage.trust} />
      <ConceptCarousel filter={["corporate", "festive"]} />
      <Process />
      <WhyUs />
      <Stats />
      <QuoteForm title="Plan your corporate gifts." defaultOccasion="Diwali" />
      <Faq />
      <SeoBlock only="corporate" />
      <JsonLd data={serviceLd("Corporate Gifting", desc, "/corporate")} />
      <JsonLd data={faqLd} />
    </>
  );
}
