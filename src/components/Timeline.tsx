import type { TimelineEntry as TimelineEntryType } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { localiseDigits, formatDate, editorialIndex } from "@/lib/utils";
import { VerificationBadge } from "./Badges";
import { Reveal } from "./Reveal";

/**
 * Vertical editorial timeline. The date column renders a verified year or
 * date when present, otherwise the editorial phase label — never a fake year.
 */
export function Timeline({
  entries,
  locale,
  tone = "dark",
}: {
  entries: TimelineEntryType[];
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const text = tone === "dark" ? "text-ivory" : "text-ink";
  const muted = tone === "dark" ? "text-ivory/70" : "text-ink/70";
  const line = tone === "dark" ? "border-white/15" : "border-ink/15";

  return (
    <ol className="relative" role="list">
      {entries.map((entry, i) => {
        const dateLabel = entry.date
          ? formatDate(entry.date, locale)
          : entry.year
            ? localiseDigits(entry.year, locale)
            : entry.phase
              ? t(entry.phase, locale)
              : null;

        return (
          <Reveal as="li" key={entry.id} delay={i * 0.05} className="relative">
            <div className={`grid gap-4 border-l ${line} pb-14 pl-8 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:pl-12`}>
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border border-gold bg-ink"
              />
              <div>
                {dateLabel && (
                  <p className="tracking-label text-[0.65rem] uppercase text-gold">{dateLabel}</p>
                )}
                <p className={`font-display mt-2 text-sm ${muted}`} aria-hidden="true">
                  {editorialIndex(i + 1, locale)}
                </p>
              </div>
              <div>
                <h3 className={`font-display text-xl font-medium sm:text-2xl ${text}`}>
                  {t(entry.title, locale)}
                </h3>
                <p className={`mt-3 max-w-measure text-[0.96rem] leading-[1.8] ${muted}`}>
                  {t(entry.summary, locale)}
                </p>
                <VerificationBadge status={entry.verificationStatus} locale={locale} className="mt-4" />
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
