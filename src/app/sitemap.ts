import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experiences", "/design-studio", "/investment", "/privacy-policy", "/terms", "/preview-experience", "/little-luxe", "/begin-your-journey", "/services", "/portfolio", "/concepts", "/contact"];
  const now = new Date();
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  return [...routes, ...serviceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
