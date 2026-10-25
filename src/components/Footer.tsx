import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { nav, site, whatsappLink } from "@/config/site";
import Garland from "./Garland";
import { Logo } from "./Header";
import { WhatsAppIcon } from "./Illustrations";

export default function Footer() {
  return (
    <footer className="bg-forest-900 pb-28 text-sage-200 lg:pb-10">
      <Garland big className="-mb-2 bg-cream-50" />
      <div className="container-x grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs">Corporate and wedding gifting, designed, packed and delivered across India. {site.tagline}</p>
          <ul className="mt-6 flex gap-3" aria-label="Social links">
            {[
              { href: site.social.instagram, label: "Instagram", I: Instagram },
              { href: site.social.linkedin, label: "LinkedIn", I: Linkedin },
              { href: site.social.facebook, label: "Facebook", I: Facebook },
            ].map(({ href, label, I }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full bg-leaf-700 text-cream-50 hover:bg-marigold-500 hover:text-ink-900">
                  <I className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-marigold-500">Explore</h2>
          <ul className="mt-4 grid gap-2">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-cream-50 hover:underline">{n.label}</Link></li>
            ))}
            <li><Link href="/faq" className="hover:text-cream-50 hover:underline">FAQ</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-marigold-500">Gifting</h2>
          <ul className="mt-4 grid gap-2">
            <li><Link href="/corporate" className="hover:text-cream-50 hover:underline">Diwali corporate gifts</Link></li>
            <li><Link href="/corporate" className="hover:text-cream-50 hover:underline">Employee joining kits</Link></li>
            <li><Link href="/corporate" className="hover:text-cream-50 hover:underline">Client gifting</Link></li>
            <li><Link href="/weddings" className="hover:text-cream-50 hover:underline">Wedding guest hampers</Link></li>
            <li><Link href="/weddings" className="hover:text-cream-50 hover:underline">Bridesmaid gift boxes</Link></li>
            <li><Link href="/weddings" className="hover:text-cream-50 hover:underline">Wedding return gifts</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-marigold-500">Talk to us</h2>
          <ul className="mt-4 grid gap-3">
            <li><a href={site.phoneHref} className="flex items-center gap-2 hover:text-cream-50"><Phone className="h-4 w-4" aria-hidden="true" />{site.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cream-50"><WhatsAppIcon className="h-4 w-4" />WhatsApp us</a></li>
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-cream-50"><Mail className="h-4 w-4" aria-hidden="true" />{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />{site.address}</li>
            <li className="text-sm">{site.gstin}</li>
            <li className="text-sm">{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col gap-4 border-t border-leaf-700 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}. Dil se, boxes mein.</p>
        <ul className="flex flex-wrap gap-4">
          <li><Link href="/privacy" className="hover:text-cream-50 hover:underline">Privacy</Link></li>
          <li><Link href="/terms" className="hover:text-cream-50 hover:underline">Terms</Link></li>
          <li><Link href="/refunds" className="hover:text-cream-50 hover:underline">Cancellations and refunds</Link></li>
        </ul>
      </div>
    </footer>
  );
}
