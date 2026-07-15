"use client";

import { useMemo, useState } from "react";
import type { GalleryRecord, GalleryRecordType } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { ui } from "@/content/site";
import { cn } from "@/lib/utils";
import { ArchiveGrid } from "./ArchiveGrid";

const typeFilters: Array<{ key: GalleryRecordType | "all"; label: { en: string; bn: string } }> = [
  { key: "all", label: { en: "All", bn: "সব" } },
  { key: "photograph", label: { en: "Photographs", bn: "আলোকচিত্র" } },
  { key: "document", label: { en: "Documents", bn: "দলিল" } },
  { key: "business-record", label: { en: "Business records", bn: "ব্যবসায়িক নথি" } },
  { key: "public-appearance", label: { en: "Public appearances", bn: "প্রকাশ্য উপস্থিতি" } },
];

/**
 * Searchable public archive: filter by record type (year/venture filters
 * activate automatically once verified records carry those fields).
 */
export function ArchiveExplorer({ records, locale }: { records: GalleryRecord[]; locale: Locale }) {
  const [type, setType] = useState<GalleryRecordType | "all">("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return records.filter((record) => {
      if (type !== "all" && record.recordType !== type) return false;
      if (query.trim()) {
        const haystack = [
          t(record.caption, locale),
          record.event ? t(record.event, locale) : "",
          record.location ? t(record.location, locale) : "",
          record.year ? String(record.year) : "",
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [records, type, query, locale]);

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div role="group" aria-label={locale === "bn" ? "নথির ধরন" : "Record type"} className="flex flex-wrap gap-2">
          {typeFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setType(f.key)}
              aria-pressed={type === f.key}
              className={cn(
                "min-h-11 border px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-300",
                type === f.key
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-ivory/70 hover:border-gold/60 hover:text-ivory",
              )}
            >
              {f.label[locale] || f.label.en}
            </button>
          ))}
        </div>

        <div className="w-full md:max-w-xs">
          <label htmlFor="archive-search" className="tracking-label mb-2 block text-[0.62rem] uppercase text-stone">
            {locale === "bn" ? "আর্কাইভে খুঁজুন" : "Search the archive"}
          </label>
          <input
            id="archive-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === "bn" ? "ক্যাপশন, স্থান, বছর…" : "Caption, place, year…"}
            className="w-full border border-white/15 bg-ink px-4 py-3 text-sm text-ivory placeholder:text-stone/60 focus:border-gold/60"
          />
        </div>
      </div>

      <div className="mt-12" aria-live="polite">
        {visible.length > 0 ? (
          <ArchiveGrid records={visible} locale={locale} />
        ) : (
          <p className="border border-white/10 px-8 py-16 text-center text-sm italic text-stone">
            {t(ui.archiveEmptyState, locale)}
          </p>
        )}
      </div>
    </div>
  );
}
