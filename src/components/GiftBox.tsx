"use client";

import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Building2, Heart } from "lucide-react";
import { hero } from "@/content/content";
import { Leaf, MarigoldFlower } from "./Illustrations";

// The hero gift box. The lid lifts on hover, tap or first scroll and reveals both services.
export default function GiftBox() {
  const [hover, setHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  const open = hover || scrolled;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px] cursor-pointer select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover((v) => !v)}
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full bg-genda-300/40 blur-2xl" />
      <MarigoldFlower className="absolute left-[2%] top-[8%] h-16 w-16 sm:h-20 sm:w-20" />
      <MarigoldFlower className="absolute bottom-[6%] right-[0%] h-12 w-12" />
      <Leaf className="absolute right-[10%] top-[14%] h-6 w-12 rotate-[-20deg]" />

      {/* Cards that rise out of the box */}
      <m.div
        className="absolute left-[6%] top-[30%] z-10 w-[42%] sm:left-[14%] sm:w-[38%] rounded-2xl bg-white p-3 shadow-warm-lg ring-1 ring-sand-100"
        animate={open ? { y: "-62%", rotate: -8, opacity: 1 } : { y: "10%", rotate: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 16 }}
      >
        <Building2 className="h-6 w-6 text-leaf-700" />
        <p className="mt-2 font-serif text-base font-semibold leading-tight text-leaf-700 sm:text-lg">Corporate</p>
        <p className="text-xs text-ink-900/80">Teams and clients</p>
      </m.div>
      <m.div
        className="absolute right-[6%] top-[30%] z-10 w-[42%] sm:right-[14%] sm:w-[38%] rounded-2xl bg-white p-3 shadow-warm-lg ring-1 ring-sand-100"
        animate={open ? { y: "-58%", rotate: 8, opacity: 1 } : { y: "10%", rotate: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.06 }}
      >
        <Heart className="h-6 w-6 text-rani-500" />
        <p className="mt-2 font-serif text-base font-semibold leading-tight text-leaf-700 sm:text-lg">Wedding</p>
        <p className="text-xs text-ink-900/80">Guests and family</p>
      </m.div>

      {/* Box body */}
      <div className="absolute bottom-[12%] left-[14%] right-[14%] top-[46%] z-20 rounded-b-[22px] rounded-t-md bg-marigold shadow-warm-lg">
        <div className="absolute inset-y-0 left-1/2 w-[12%] -translate-x-1/2 bg-leaf-700" />
        <p className="absolute bottom-[8%] left-2 right-2 rounded-full bg-genda-300/90 py-0.5 text-center font-script text-lg leading-tight text-ink-900 sm:text-2xl">{hero.note}</p>
      </div>
      {/* Lid */}
      <m.div
        className="absolute left-[10%] right-[10%] top-[38%] z-30 h-[12%] origin-left rounded-xl bg-saffron-600 shadow-warm"
        animate={open ? { y: "-210%", rotate: -14, x: "-4%" } : { y: 0, rotate: 0, x: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[12%] -translate-x-1/2 bg-leaf-700" />
        <svg viewBox="0 0 120 50" className="absolute -top-[85%] left-1/2 w-[34%] -translate-x-1/2">
          <path d="M60 48C40 10 10 14 22 36 30 46 60 48 60 48ZM60 48C80 10 110 14 98 36 90 46 60 48 60 48Z" fill="#2F5D3A" />
          <circle cx="60" cy="46" r="7" fill="#14301F" />
        </svg>
      </m.div>
    </div>
  );
}
