import { MarigoldFlower } from "./Illustrations";

type Props = { items: string[]; className?: string; duration?: string; label: string };

// Infinite CSS marquee. The list is doubled so the loop is seamless.
export default function Ticker({ items, className = "", duration = "35s", label }: Props) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} role="region" aria-label={label}>
      <ul className="sr-only">
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div
        className="flex w-max animate-marquee gap-10 whitespace-nowrap py-2 hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: duration }}
        aria-hidden="true"
      >
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold">
            <MarigoldFlower className="h-4 w-4" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
