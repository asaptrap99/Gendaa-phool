import { clientLogos } from "@/content/content";

// [PLACEHOLDER] Replace the text tiles with <Image> logos of real clients (with permission).
export default function LogoMarquee() {
  const loop = [...clientLogos, ...clientLogos];
  return (
    <section className="border-y border-sand-100 bg-cream-50 py-10" aria-labelledby="logos-title">
      <h2 id="logos-title" className="text-center font-sans text-sm font-semibold uppercase tracking-[0.18em] text-ink-900/75">
        Trusted by teams and families across India
      </h2>
      <ul className="sr-only">{clientLogos.map((l) => <li key={l}>{l}</li>)}</ul>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-6" style={{ ["--marquee-duration" as string]: "40s" }}>
          {loop.map((l, i) => (
            <div key={i} className="grid h-16 w-44 place-items-center rounded-2xl border-2 border-dashed border-leaf-700/25 bg-white/60 font-serif text-lg text-leaf-700/80">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
