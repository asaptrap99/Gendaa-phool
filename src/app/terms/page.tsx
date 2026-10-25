import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = { ...pageMeta("Terms of Service", "The terms for working with us on bulk gifting orders.", "/terms"), robots: { index: false } };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <p>[PLACEHOLDER] Orders are confirmed on approval of the final mockup and receipt of the advance payment.</p>
      <p>Delivery dates depend on timely approvals and address lists. We will always tell you early if a date is at risk.</p>
    </LegalPage>
  );
}
