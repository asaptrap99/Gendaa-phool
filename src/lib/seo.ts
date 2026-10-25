import type { Metadata } from "next";
import { site } from "@/config/site";
import { faqs } from "@/content/content";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, siteName: site.name, locale: "en_IN", type: "website" },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  telephone: site.phoneDisplay,
  sameAs: Object.values(site.social),
  areaServed: "IN",
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${site.url}${path}`,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };
}
