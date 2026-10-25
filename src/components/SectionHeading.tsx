import Reveal from "./Reveal";

type Props = { eyebrow?: string; title: string; sub?: string; center?: boolean; dark?: boolean; id?: string };

export default function SectionHeading({ eyebrow, title, sub, center = true, dark = false, id }: Props) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={dark ? "eyebrow bg-marigold-500 text-ink-900" : "eyebrow"}>{eyebrow}</p>}
      <h2 id={id} className={`mt-4 text-h2 font-semibold ${dark ? "text-cream-50" : "text-leaf-700"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${dark ? "text-sage-200" : "text-ink-900/80"}`}>{sub}</p>}
    </Reveal>
  );
}
