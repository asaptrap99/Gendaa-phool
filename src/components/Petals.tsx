import { Petal } from "./Illustrations";

// 16 soft falling petals. Pure CSS so it costs almost nothing. Hidden for reduced motion.
const PETALS = Array.from({ length: 16 }, (_, i) => {
  const r = (n: number) => ((i * 9301 + n * 49297) % 233280) / 233280;
  return {
    left: `${Math.round(r(1) * 100)}%`,
    size: 10 + Math.round(r(2) * 12),
    duration: `${12 + Math.round(r(3) * 10)}s`,
    delay: `-${Math.round(r(4) * 20)}s`,
    drift: `${Math.round(r(5) * 160 - 80)}px`,
    spin: `${Math.round(r(6) * 540 - 270)}deg`,
    color: ["#F59E0B", "#E8710A", "#FFC857"][i % 3],
    opacity: 0.35 + r(7) * 0.3,
  };
});

export default function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal absolute -top-10 animate-fall will-change-transform"
          style={{
            left: p.left,
            width: p.size,
            color: p.color,
            opacity: p.opacity,
            animationDelay: p.delay,
            ["--fall-duration" as string]: p.duration,
            ["--drift" as string]: p.drift,
            ["--spin" as string]: p.spin,
          }}
        >
          <Petal className="h-auto w-full" />
        </span>
      ))}
    </div>
  );
}
