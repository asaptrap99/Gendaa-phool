import { faqLd, pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta("FAQ", "MOQ, lead times, customisation, multi address delivery, payment terms, GST invoice, samples and rush orders for bulk gifting.", "/faq");

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Good questions. Straight answers." sub="Still curious? WhatsApp us and a real person will reply." />
      <Faq />
      <QuoteForm />
      <JsonLd data={faqLd} />
    </>
  );
}
