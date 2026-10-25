"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site, whatsappLink } from "@/config/site";
import { MarigoldFlower, WhatsAppIcon } from "./Illustrations";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <MarigoldFlower className="h-9 w-9" />
      <span className={`font-serif text-xl font-semibold tracking-tight ${dark ? "text-cream-50" : "text-leaf-700"}`}>{site.name}</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors ${scrolled ? "border-sand-100 bg-cream-50/95 backdrop-blur" : "border-transparent bg-cream-50"}`}>
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label={`${site.name} home`} className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-[15px] font-medium transition hover:bg-sand-100 ${active ? "text-leaf-700 underline decoration-marigold-500 decoration-2 underline-offset-8" : "text-ink-900"}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full bg-sage-200 text-leaf-700 transition hover:bg-leaf-700 hover:text-cream-50"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a href="#quote" className="btn-primary hidden min-h-[44px] px-5 py-2 text-sm sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-leaf-700 hover:bg-sand-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-sand-100 bg-cream-50 lg:hidden">
          <ul className="container-x grid gap-1 py-4">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block rounded-2xl px-4 py-3 text-lg font-medium text-ink-900 hover:bg-sand-100" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href="#quote" className="btn-primary w-full" onClick={() => setOpen(false)}>Get a quote in 24 hours</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
