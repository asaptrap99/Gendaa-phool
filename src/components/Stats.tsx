"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/content";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setVal(to);
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-forest-900 py-14 sm:py-20" aria-label="Our numbers">
      <dl className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-medium text-sage-200 sm:text-base">{s.label}</dt>
            <dd className="font-serif text-4xl font-semibold text-marigold-500 sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
      {/* [EDIT] numbers live in content.ts > stats */}
    </section>
  );
}
