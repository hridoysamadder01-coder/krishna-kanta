import type { SourceReference, VerificationStatus } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/site";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * VerificationBadge — quiet archival metadata, never a loud UI chip.
 * Only "verified" and "editorial" statuses are ever rendered publicly.
 */
export function VerificationBadge({
  status,
  locale,
  className,
  tone = "dark",
}: {
  status: VerificationStatus;
  locale: Locale;
  className?: string;
  tone?: "dark" | "light";
}) {
  if (status !== "verified" && status !== "editorial") return null;
  const label = status === "verified" ? ui.verifiedLabel : ui.editorialLabel;
  const isVerified = status === "verified";
  const textColor = isVerified
    ? tone === "dark"
      ? "text-gold"
      : "text-gold-muted"
    : tone === "dark"
      ? "text-stone"
      : "text-ink/50";
  const dotColor = isVerified
    ? tone === "dark"
      ? "bg-gold"
      : "bg-gold-muted"
    : tone === "dark"
      ? "bg-stone"
      : "bg-ink/40";
  return (
    <span
      className={cn(
        "tracking-label inline-flex items-center gap-2 text-[0.62rem] uppercase",
        textColor,
        className,
      )}
    >
      <span aria-hidden="true" className={cn("inline-block h-1 w-1 rounded-full", dotColor)} />
      {t(label, locale)}
    </span>
  );
}

/** SourceBadge — quiet source attribution for verified records. */
export function SourceBadge({
  source,
  locale,
  className,
}: {
  source: SourceReference;
  locale: Locale;
  className?: string;
}) {
  const inner = (
    <>
      {t(ui.sourceLabel, locale)}: {source.label}
    </>
  );
  return (
    <span className={cn("text-xs text-stone", className)}>
      {source.url ? (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-link"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </span>
  );
}
