import QuoteForm from "./QuoteForm";

// [PLACEHOLDER] Legal pages need real text reviewed by a lawyer before launch.
export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="section bg-cream-50">
        <div className="container-x max-w-3xl">
          <h1 className="text-h2 font-semibold">{title}</h1>
          <div className="mt-6 grid gap-4 text-lg leading-relaxed text-ink-900/85">{children}</div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
