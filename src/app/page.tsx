import Hero from "@/components/Hero";
import PathCards from "@/components/PathCards";
import LogoMarquee from "@/components/LogoMarquee";
import Process from "@/components/Process";
import ConceptCarousel from "@/components/ConceptCarousel";
import Emotions from "@/components/Emotions";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import GiftPlanner from "@/components/GiftPlanner";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import SeoBlock from "@/components/SeoBlock";
import Garland from "@/components/Garland";
import JsonLd from "@/components/JsonLd";
import { faqLd, serviceLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Hero />
      <PathCards />
      <LogoMarquee />
      <Process />
      <Garland className="bg-cream-50" />
      <ConceptCarousel />
      <Emotions />
      <WhyUs />
      <Stats />
      <Gallery />
      <Testimonials />
      <GiftPlanner />
      <QuoteForm />
      <Faq />
      <SeoBlock />
      <JsonLd data={faqLd} />
      <JsonLd data={serviceLd("Corporate Gifting", "Custom branded corporate gift hampers, Diwali corporate gifts, employee joining kits and client gifting delivered across India.", "/corporate")} />
      <JsonLd data={serviceLd("Wedding Gifting", "Wedding guest hampers, bridesmaid gift boxes, wedding return gifts and trousseau packing across India.", "/weddings")} />
    </>
  );
}
