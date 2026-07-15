"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { PressRecord } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { pressFilters, verifiedPressRecords } from "@/content/press";
import { ui } from "@/content/site";
import { formatDate, cn } from "@/lib/utils";

/**
 * Public record list with type filters. Renders ONLY verified records;
 * when none exist yet it shows the refined assembling message.
 */
export function PressRecordsList({ locale, tone = "dark" }: { locale: Locale; tone?: "dark" | "light" }) {
  const [filter, setFilter] = useState<string>("all");
  const dark = tone === "dark";

  const records = verifiedPressRecords.filter((r) => filter === "all" || r.recordType === filter);

  return (
    <div>
      <div role="group" aria-label={locale === "bn" ? "নথির ধরন অনুযায়ী বাছাই" : "Filter records by type"} className="flex flex-wrap gap-2">
        {pressFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={cn(
              "min-h-11 border px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-300",
              filter === f.key
                ? "border-gold bg-gold text-ink"
                : dark
                  ? "border-white/15 text-ivory/70 hover:border-gold/60 hover:text-ivory"
                  : "border-ink/15 text-ink/70 hover:border-gold-muted hover:text-ink",
            )}
          >
            {t(f.label, locale)}
          </button>
        ))}
      </div>

      {verifiedPressRecords.length === 0 ? (
        <p
          className={cn(
            "mt-10 border px-8 py-16 text-center text-sm italic",
            dark ? "border-white/10 text-stone" : "border-ink/10 text-ink/50",
          )}
        >
          {t(ui.pressEmptyState, locale)}
        </p>
      ) : (
        <ul className={cn("mt-10 divide-y", dark ? "divide-white/10" : "divide-ink/10")} role="list">
          {records.map((record) => (
            <PressRecordRow key={record.id} record={record} locale={locale} dark={dark} />
          ))}
        </ul>
      )}
    </div>
  );
}

function PressRecordRow({
  record,
  locale,
  dark,
}: {
  record: PressRecord;
  locale: Locale;
  dark: boolean;
}) {
  const date = formatDate(record.publicationDate ?? record.eventDate, locale);
  const typeLabel = pressFilters.find((f) => f.key === record.recordType)?.label;

  return (
    <li className="py-8">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        {typeLabel && (
          <p className="tracking-label text-[0.6rem] uppercase text-gold">{t(typeLabel, locale)}</p>
        )}
        {date && <p className="text-xs text-stone">{date}</p>}
        {record.publisher && <p className="text-xs text-stone">{record.publisher}</p>}
      </div>
      <h3 className={cn("font-display mt-3 text-xl font-medium", dark ? "text-ivory" : "text-ink")}>
        {record.externalUrl ? (
          <a
            href={record.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link inline-flex items-center gap-2"
          >
            {t(record.title, locale)}
            <ExternalLink className="h-4 w-4 text-gold" aria-hidden="true" />
          </a>
        ) : (
          t(record.title, locale)
        )}
      </h3>
      <p className={cn("mt-3 max-w-measure text-sm leading-[1.8]", dark ? "text-ivory/65" : "text-ink/65")}>
        {t(record.summary, locale)}
      </p>
    </li>
  );
}
