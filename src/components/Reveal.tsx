type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
};

// Fade up 24px over 400ms when scrolled into view. One shared observer (RevealObserver)
// drives every instance, so this costs no hydration.
export default function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  return (
    <Tag data-reveal="" className={className} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
