import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/config/site";
import { ticker } from "@/content/content";
import Providers from "@/components/Providers";
import Ticker from "@/components/Ticker";
import UrgencyBanner from "@/components/UrgencyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { organizationLd } from "@/lib/seo";

const serif = localFont({ src: "../fonts/fraunces-latin-wght-normal.woff2", variable: "--font-serif", display: "swap", weight: "300 900" });
const sans = localFont({ src: "../fonts/inter-latin-wght-normal.woff2", variable: "--font-sans", display: "swap", weight: "100 900" });
const script = localFont({ src: "../fonts/caveat-latin-600-normal.woff2", variable: "--font-script", display: "swap", weight: "600", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Corporate Gifting and Wedding Gifting in India`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "corporate gifting India", "corporate gift hampers", "bulk gifting", "Diwali corporate gifts", "wedding return gifts",
    "wedding guest hampers", "bridesmaid gift boxes", "custom gift boxes bulk", "employee joining kit", "client gifting",
  ],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, url: "/", title: `${site.name} | Corporate and Wedding Gifting`, description: site.description },
  twitter: { card: "summary_large_image", title: `${site.name} | Corporate and Wedding Gifting`, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#F59E0B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="sr-only z-50 rounded-full bg-marigold-500 px-4 py-2 font-semibold text-ink-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Providers>
          <div className="bg-marigold text-ink-900">
            <Ticker items={ticker} label="Our promises" />
          </div>
          <UrgencyBanner />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingCtas />
          <RevealObserver />
        </Providers>
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
