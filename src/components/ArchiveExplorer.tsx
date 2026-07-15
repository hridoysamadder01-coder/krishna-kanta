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
                  ? "border-gold-muted bg-gold-muted text-paper"
                  : "border-ink/20 text-ink/70 hover:border-gold-muted hover:text-ink",
              )}
            >
              {f.label[locale] || f.label.en}
            </button>
          ))}
        </div>

        <div className="w-full md:max-w-xs">
          <label htmlFor="archive-search" className="tracking-label mb-2 block text-[0.62rem] uppercase text-ink/55">
            {locale === "bn" ? "আর্কাইভে খুঁজুন" : "Search the archive"}
          </label>
          <input
            id="archive-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === "bn" ? "ক্যাপশন, স্থান, বছর…" : "Caption, place, year…"}
            className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold-muted"
          />
        </div>
      </div>

      <div className="mt-12" aria-live="polite">
        {visible.length > 0 ? (
          <ArchiveGrid records={visible} locale={locale} tone="light" />
        ) : (
          <p className="border border-ink/10 px-8 py-16 text-center text-sm italic text-ink/50">
            {t(ui.archiveEmptyState, locale)}
          </p>
        )}
      </div>
    </div>
  );
}
