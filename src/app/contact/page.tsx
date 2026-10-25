import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import { WhatsAppIcon } from "@/components/Illustrations";

export const metadata = pageMeta("Contact Us", "Get a quote for corporate gifting or wedding gifting in 24 hours. Call, email or WhatsApp us.", "/contact");

export default function ContactPage() {
  const items = [
    { I: Phone, label: "Call", value: site.phoneDisplay, href: site.phoneHref },
    { I: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { I: MapPin, label: "Studio", value: site.address },
    { I: Clock, label: "Hours", value: site.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Say hello. We reply within 24 hours." sub="The fastest way is WhatsApp. The most detailed way is the form below.">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-leaf"><WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp</a>
        <a href="#quote" className="btn-primary">Fill the quote form</a>
      </PageHero>
      <section className="bg-cream-50 pb-16" aria-label="Contact details">
        <ul className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ I, label, value, href }) => (
            <li key={label} className="card p-5">
              <I className="h-6 w-6 text-leaf-700" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-ink-900/75">{label}</p>
              {href ? <a href={href} className="mt-1 block font-semibold text-leaf-700 hover:underline">{value}</a> : <p className="mt-1 font-semibold text-leaf-700">{value}</p>}
            </li>
          ))}
        </ul>
      </section>
      <QuoteForm />
      <Faq />
    </>
  );
}
