import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";

export const metadata = pageMeta("Our Work", "Corporate gift hampers, joining kits, wedding guest hampers and return gifts we have designed and delivered across India.", "/our-work");

export default function OurWorkPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Real briefs. Real boxes. Real happy people." sub="A few projects we are proud of. Tap any one to see what went inside." />
      <Gallery />
      <Stats />
      <Testimonials />
      <QuoteForm title="Want yours on this page next?" />
    </>
  );
}
