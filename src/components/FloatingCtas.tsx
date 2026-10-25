import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Illustrations";

// Floating WhatsApp button on every page, plus a sticky quote bar on mobile.
export default function FloatingCtas() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-leaf-700 text-cream-50 shadow-warm-lg transition hover:-translate-y-1 hover:bg-forest-900 lg:bottom-6 lg:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-100 bg-cream-50/95 p-3 backdrop-blur lg:hidden">
        <div className="flex gap-2">
          <a href="#quote" className="btn-primary flex-1">Get a quote in 24 hours</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-leaf px-4" aria-label="WhatsApp us">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
