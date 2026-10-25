import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = { ...pageMeta("Privacy Policy", "How we use the details you share with us.", "/privacy"), robots: { index: false } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>[PLACEHOLDER] We collect only the details you share in our forms or on WhatsApp, such as your name, phone, email and order details.</p>
      <p>We use them to reply to your request and deliver your order. We do not sell your data.</p>
      <p>To ask us to delete your details, email {site.email}.</p>
    </LegalPage>
  );
}
