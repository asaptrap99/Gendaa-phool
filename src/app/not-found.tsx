import Link from "next/link";
import { MarigoldFlower } from "@/components/Illustrations";
import QuoteForm from "@/components/QuoteForm";

export default function NotFound() {
  return (
    <>
    <section className="section bg-cream-50 text-center">
      <div className="container-x">
        <MarigoldFlower className="mx-auto h-24 w-24" />
        <h1 className="mt-6 text-h2 font-semibold">This page got lost in the wrapping paper.</h1>
        <p className="mt-4 text-lg">Let us take you somewhere useful.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
    <QuoteForm />
    </>
  );
}
