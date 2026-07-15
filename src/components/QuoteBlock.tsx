import type { Principle, Quote } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { ui } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * QuoteBlock renders by content voice:
 * - verified-direct-quote → quotation styling with attribution
 * - editorial-narration   → italic editorial line, explicitly labelled
 * Editorial narration is NEVER styled as a spoken quotation.
 */
export function QuoteBlock({
  quote,
  locale,
  tone = "dark",
  className,
}: {
  quote: Quote;
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  const isVerified = quote.voice === "verified-direct-quote" && quote.verificationStatus === "verified";

  if (isVerified) {
    return (
      <blockquote className={cn("border-l-2 border-gold pl-8", className)}>
        <p className={cn("font-display text-2xl font-medium leading-relaxed", dark ? "text-ivory" : "text-ink")}>
          “{t(quote.text, locale)}”
        </p>
        {quote.attribution && (
          <cite className="mt-4 block text-sm not-italic text-stone">— {t(quote.attribution, locale)}</cite>
        )}
      </blockquote>
    );
  }

  return (
    <div className={cn("border-l pl-8", dark ? "border-gold/40" : "border-gold-muted/50", className)}>
      <p className={cn("font-display text-2xl font-medium italic leading-relaxed", dark ? "text-ivory-deep" : "text-ink/85")}>
        {t(quote.text, locale)}
      </p>
      <p className={cn("tracking-label mt-4 text-[0.6rem] uppercase", dark ? "text-stone" : "text-ink/45")}>
        {t(ui.editorialLabel, locale)}
      </p>
    </div>
  );
}

/** PrincipleBlock — documented principles under a "Principles" label. */
export function PrincipleBlock({
  principles,
  locale,
  tone = "dark",
  className,
}: {
  principles: Principle[];
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <p className={cn("tracking-label text-[0.65rem] uppercase", dark ? "text-gold" : "text-gold-muted")}>
        {t(ui.principlesLabel, locale)}
      </p>
      <ul className={cn("mt-6 divide-y", dark ? "divide-white/10" : "divide-ink/10")} role="list">
        {principles.map((principle) => (
          <li key={principle.id} className="py-4">
            <p className={cn("font-display text-lg font-medium", dark ? "text-ivory" : "text-ink")}>
              {t(principle.title, locale)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
