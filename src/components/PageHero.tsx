import { MarigoldFlower } from "./Illustrations";
import Petals from "./Petals";

type Props = { eyebrow: string; title: string; sub: string; accent?: "rani" | "leaf"; children?: React.ReactNode };

export default function PageHero({ eyebrow, title, sub, accent = "leaf", children }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-14 sm:py-20">
      <Petals />
      <MarigoldFlower className="absolute -right-10 -top-10 h-48 w-48 opacity-40" />
      <div className="container-x relative max-w-4xl text-center">
        <p className={accent === "rani" ? "eyebrow bg-rani-500 text-white" : "eyebrow"}>{eyebrow}</p>
        <h1 className="mt-5 text-display font-semibold">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-900/85 sm:text-xl">{sub}</p>
        {children && <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
