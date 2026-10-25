import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = { ...pageMeta("Cancellations and Refunds", "Our cancellation and refund policy for custom gifting orders.", "/refunds"), robots: { index: false } };

export default function Refunds() {
  return (
    <LegalPage title="Cancellations and Refunds">
      <p>[PLACEHOLDER] Custom branded orders cannot be cancelled once production starts.</p>
      <p>If a box arrives damaged, share a photo within 48 hours and we will replace it.</p>
    </LegalPage>
  );
}
