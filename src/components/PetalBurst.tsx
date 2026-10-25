"use client";

import { m } from "framer-motion";
import { Petal } from "./Illustrations";

// A one-time confetti burst of marigold petals for success states.
export default function PetalBurst() {
  const pieces = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const dist = 120 + (i % 5) * 30;
    return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist - 60, r: (i * 47) % 360, c: ["#F59E0B", "#E8710A", "#FFC857", "#D6336C"][i % 4] };
  });
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-0 w-0" aria-hidden="true">
      {pieces.map((p, i) => (
        <m.span
          key={i}
          className="absolute block w-3"
          style={{ color: p.c }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.4 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 140], opacity: [1, 1, 0], rotate: p.r, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Petal className="h-auto w-full" />
        </m.span>
      ))}
    </div>
  );
}
