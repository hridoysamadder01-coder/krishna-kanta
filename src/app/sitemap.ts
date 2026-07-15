import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const routes = ["", "/story", "/ventures", "/philosophy", "/archive", "/press", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.siteUrl}/${locale}${route}/`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en${route}/`,
          bn: `${siteConfig.siteUrl}/bn${route}/`,
        },
      },
    })),
  );
}
