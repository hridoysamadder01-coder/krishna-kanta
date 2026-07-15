import type { LocalisedText } from "./types";

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Resolve a localised text object for the active locale (English fallback). */
export function t(text: LocalisedText, locale: Locale): string {
  return text[locale] || text.en;
}

/** Build a locale-prefixed path: localePath("bn", "/story") → "/bn/story/". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `/${locale}${clean}/`;
}

/** Swap the locale segment of a pathname while preserving the page. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return `/${parts.join("/")}/`.replace(/\/+$/, "/");
}

export const htmlLang: Record<Locale, string> = {
  en: "en",
  bn: "bn",
};
