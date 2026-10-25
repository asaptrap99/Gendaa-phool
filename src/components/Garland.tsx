"use client";

import { m } from "framer-motion";

// A marigold garland that draws itself in, then the flowers pop on.
export default function Garland({ className = "", big = false }: { className?: string; big?: boolean }) {
  const count = big ? 15 : 11;
  const w = 1200;
  const h = big ? 120 : 80;
  const sag = big ? 80 : 50;
  const pt = (t: number) => {
    const x = t * w;
    const y = 10 + sag * 4 * t * (1 - t);
    return { x, y };
  };
  const flowers = Array.from({ length: count }, (_, i) => pt((i + 0.5) / count));
  return (
    <div className={`pointer-events-none w-full ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <m.path
          d={`M0 10 Q ${w / 2} ${10 + sag * 2} ${w} 10`}
          fill="none"
          stroke="#2F5D3A"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {flowers.map((f, i) => (
          <m.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 260, damping: 16 }}
            style={{ transformOrigin: `${f.x}px ${f.y}px`, transformBox: "view-box" }}
          >
            <circle cx={f.x} cy={f.y} r={big ? 16 : 12} fill={i % 2 ? "#F59E0B" : "#E8710A"} />
            <circle cx={f.x} cy={f.y} r={big ? 9 : 7} fill="#FFC857" />
            {i % 3 === 0 && <ellipse cx={f.x + 14} cy={f.y + 12} rx="9" ry="4" fill="#2F5D3A" transform={`rotate(30 ${f.x + 14} ${f.y + 12})`} />}
          </m.g>
        ))}
      </svg>
    </div>
  );
}
