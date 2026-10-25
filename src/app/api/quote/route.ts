import { NextResponse } from "next/server";
import { LOGO_TYPES, MAX_LOGO_BYTES, validateQuote, type QuoteFields } from "@/lib/validate";

// Placeholder lead endpoint. Accepts multipart form data (full form, with optional logo)
// or JSON (gift planner). Wire it to email, a CRM or a Google Sheet before launch.
export async function POST(req: Request) {
  let fields: Partial<QuoteFields> = {};
  let logo: File | null = null;

  try {
    const type = req.headers.get("content-type") ?? "";
    if (type.includes("multipart/form-data")) {
      const form = await req.formData();
      for (const [k, v] of form.entries()) {
        if (k === "logo" && v instanceof File && v.size > 0) logo = v;
        else if (typeof v === "string") (fields as Record<string, string>)[k] = v.slice(0, 2000);
      }
    } else {
      fields = (await req.json()) as Partial<QuoteFields>;
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read the form." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields, people do not.
  if ((fields as Record<string, string>).website) return NextResponse.json({ ok: true });

  const errors = validateQuote(fields, fields.source === "planner" ? "soft" : "full");
  if (logo) {
    if (logo.size > MAX_LOGO_BYTES) errors.logo = "Logo must be under 5 MB.";
    else if (!LOGO_TYPES.includes(logo.type)) errors.logo = "Logo must be PNG, JPG, SVG, WebP or PDF.";
  }
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // TODO: send to your inbox, CRM or sheet here (Resend, HubSpot, Google Sheets, Zapier webhook).
  console.info("[quote] new lead", { ...fields, logo: logo ? { name: logo.name, size: logo.size } : null });

  return NextResponse.json({ ok: true });
}
