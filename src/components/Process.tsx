import { process } from "@/content/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process({ id = "how-it-works" }: { id?: string }) {
  return (
    <section id={id} className="section bg-cream-50" aria-labelledby={`${id}-title`}>
      <div className="container-x">
        <SectionHeading id={`${id}-title`} eyebrow="How it works" title={process.title} sub={process.sub} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute left-7 top-7 h-[calc(100%-3.5rem)] w-0.5 border-l-2 border-dashed border-marigold-500 md:left-[12.5%] md:right-[12.5%] md:h-0.5 md:w-auto md:border-l-0 md:border-t-2" aria-hidden="true" />
          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-marigold text-ink-900 shadow-warm ring-4 ring-cream-50">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-leaf-700">Step {i + 1}</p>
                <h3 className="mt-1 text-h3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink-900/80">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
