import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/corporate", "/weddings", "/how-it-works", "/our-work", "/about", "/contact", "/faq"];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/corporate" || p === "/weddings" ? 0.9 : 0.7,
  }));
}
