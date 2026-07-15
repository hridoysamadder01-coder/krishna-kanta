import type { Locale } from "./i18n";

/**
 * Prefix a public asset path with the deployment base path.
 * next/image does not apply basePath to unoptimized static srcs,
 * so every content-driven image runs through this helper.
 */
export function withBasePath(src: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return src.startsWith("/") ? `${base}${src}` : src;
}

/** Minimal class-name joiner. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const BN_DIGITS: Record<string, string> = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};

/** Localise digits (years, indices) for the Bengali locale. */
export function localiseDigits(value: string | number, locale: Locale): string {
  const str = String(value);
  if (locale !== "bn") return str;
  return str.replace(/[0-9]/g, (d) => BN_DIGITS[d]);
}

/** Format a verified ISO date for display; returns null when absent. */
export function formatDate(iso: string | undefined, locale: Locale): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(locale === "bn" ? "bn-BD" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** Two-digit editorial index: 1 → "01". */
export function editorialIndex(i: number, locale: Locale): string {
  return localiseDigits(String(i).padStart(2, "0"), locale);
}
