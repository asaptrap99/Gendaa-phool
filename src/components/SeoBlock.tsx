import { seo } from "@/content/content";

export default function SeoBlock({ only }: { only?: "corporate" | "wedding" }) {
  const blocks = only ? [seo[only]] : [seo.corporate, seo.wedding];
  return (
    <section className="section bg-sand-100" aria-label="Gifting guides">
      <div className={`container-x grid gap-12 ${blocks.length > 1 ? "lg:grid-cols-2" : "max-w-3xl"}`}>
        {blocks.map((b) => (
          <article key={b.h2}>
            <h2 className="text-h2 font-semibold">{b.h2}</h2>
            {b.sections.map((s) => (
              <div key={s.h3} className="mt-6">
                <h3 className="text-xl font-semibold">{s.h3}</h3>
                {s.p.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-ink-900/85">{p}</p>
                ))}
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
