import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name}: corporate and wedding gifting in India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// [EDIT] Swap for a designed 1200x630 image at src/app/opengraph-image.png if you prefer.
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#FFF8EC", color: "#2F5D3A" }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#2A1A0C" }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 24, maxWidth: 900 }}>Gifts that make your people feel chosen.</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#2A1A0C" }}>Corporate and wedding gifting. Pan-India delivery.</div>
        <div style={{ display: "flex", position: "absolute", right: 0, top: 0, width: 320, height: 630, background: "linear-gradient(135deg, #F59E0B 0%, #E8710A 100%)" }} />
      </div>
    ),
    size,
  );
}
