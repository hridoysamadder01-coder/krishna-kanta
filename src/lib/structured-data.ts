import { siteConfig } from "@/content/site";
import { founder } from "@/content/founder";
import { publicVentures } from "@/content/ventures";
import type { Locale } from "./i18n";
import { t } from "./i18n";

/**
 * Central structured-data (JSON-LD) generator.
 * Only verified or explicitly editorial-safe fields are emitted.
 * No invented sameAs links, birth dates, awards, or affiliations.
 */

type JsonLd = Record<string, unknown>;

const absolute = (path: string) => `${siteConfig.siteUrl}${path}`;

export function personSchema(locale: Locale): JsonLd {
  return {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: founder.name,
    description: t(founder.summary, locale),
    nationality: { "@type": "Country", name: "Bangladesh" },
    jobTitle: ["Founder", "Chairman", "Entrepreneur", "Business Leader"],
    url: siteConfig.siteUrl,
  };
}

export function organizationSchemas(): JsonLd[] {
  return publicVentures.map((venture) => ({
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#org-${venture.id}`,
    name: venture.name,
    description: venture.description.en,
    founder: { "@id": `${siteConfig.siteUrl}/#person` },
    ...(venture.websiteUrl ? { url: venture.websiteUrl } : {}),
  }));
}

export function webSiteSchema(locale: Locale): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: "Krishna Kanta — Official Website",
    url: siteConfig.siteUrl,
    inLanguage: locale === "bn" ? "bn-BD" : "en",
    about: { "@id": `${siteConfig.siteUrl}/#person` },
  };
}

export function webPageSchema(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  type: "WebPage" | "ProfilePage" | "Article" = "WebPage",
): JsonLd {
  return {
    "@type": type,
    "@id": `${absolute(path)}#webpage`,
    url: absolute(path),
    name: title,
    description,
    inLanguage: locale === "bn" ? "bn-BD" : "en",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: { "@id": `${siteConfig.siteUrl}/#person` },
    ...(type === "ProfilePage" ? { mainEntity: { "@id": `${siteConfig.siteUrl}/#person` } } : {}),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

/** Compose a full JSON-LD graph for one page. */
export function pageGraph(options: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  pageType?: "WebPage" | "ProfilePage" | "Article";
  breadcrumbs?: Array<{ name: string; path: string }>;
  includeOrganizations?: boolean;
}): JsonLd {
  const {
    locale,
    path,
    title,
    description,
    pageType = "WebPage",
    breadcrumbs,
    includeOrganizations = false,
  } = options;

  const graph: JsonLd[] = [
    personSchema(locale),
    webSiteSchema(locale),
    webPageSchema(locale, path, title, description, pageType),
  ];
  if (includeOrganizations) graph.push(...organizationSchemas());
  if (breadcrumbs && breadcrumbs.length > 1) graph.push(breadcrumbSchema(breadcrumbs));

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
