import { site } from "@/config/site";
import { CalendarClock } from "lucide-react";

export default function UrgencyBanner() {
  const d = site.festiveDeadline;
  if (!d.show) return null;
  return (
    <div className="bg-leaf-700 text-cream-50">
      <p className="container-x flex items-center justify-center gap-2 py-2 text-center text-sm">
        <CalendarClock className="h-4 w-4 shrink-0 text-genda-300" aria-hidden="true" />
        <span>
          <strong className="font-semibold text-genda-300">{d.label}:</strong> order by {d.orderBy} for on-time delivery.{" "}
          <a href="#quote" className="font-semibold underline underline-offset-2">Book your slot</a>
        </span>
      </p>
    </div>
  );
}
