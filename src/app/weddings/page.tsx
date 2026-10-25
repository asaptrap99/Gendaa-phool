import { weddingPage } from "@/content/content";
import { faqLd, pageMeta, serviceLd } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import ConceptCarousel from "@/components/ConceptCarousel";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import SeoBlock from "@/components/SeoBlock";
import JsonLd from "@/components/JsonLd";

const desc = "Wedding gifting across India. Wedding guest hampers, bridesmaid gift boxes, wedding return gifts and trousseau packing, designed in your wedding colours.";
export const metadata = pageMeta("Wedding Gifting, Return Gifts and Guest Hampers", desc, "/weddings");

export default function WeddingsPage() {
  return (
    <>
      <PageHero eyebrow="Wedding gifting" accent="rani" title={weddingPage.title} sub={weddingPage.sub}>
        <a href="#quote" className="btn-rani">Plan wedding gifts</a>
        <a href="#concepts" className="btn-ghost">See wedding concepts</a>
      </PageHero>
      <UseCases wedding title="From roka to reception." sub="Every function, every guest, every box. One planner." items={weddingPage.useCases} trust={weddingPage.trust} />
      <ConceptCarousel filter={["wedding"]} />
      <Process />
      <Gallery />
      <Testimonials />
      <QuoteForm title="Plan your wedding gifts." defaultOccasion="Wedding guest hampers" />
      <Faq />
      <SeoBlock only="wedding" />
      <JsonLd data={serviceLd("Wedding Gifting", desc, "/weddings")} />
      <JsonLd data={faqLd} />
    </>
  );
}
