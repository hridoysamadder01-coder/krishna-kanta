import type { Venture } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { localiseDigits } from "@/lib/utils";
import { PortraitFigure } from "./PortraitFigure";
import { VerificationBadge } from "./Badges";
import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";

/**
 * Premium venture profile card: image, category, leadership roll, status.
 * Renders entirely from a Venture content record.
 */
export function VentureCard({
  venture,
  locale,
  index,
  tone = "dark",
}: {
  venture: Venture;
  locale: Locale;
  index: number;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  return (
    <Reveal
      as="li"
      delay={index * 0.08}
      className={`group flex flex-col border ${dark ? "border-white/10 bg-charcoal" : "border-ink/10 bg-paper"}`}
    >
      {venture.image && (
        <div className="overflow-hidden">
          <PortraitFigure
            image={venture.image}
            locale={locale}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="aspect-[16/10] w-full"
            imgClassName="transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div className="flex items-baseline justify-between gap-4">
          <p className="tracking-label text-[0.62rem] uppercase text-gold">
            {t(venture.category, locale)}
          </p>
          <p className="font-display text-sm text-stone" aria-hidden="true">
            {localiseDigits(String(index + 1).padStart(2, "0"), locale)}
          </p>
        </div>

        <h3 className={`font-display mt-4 text-2xl font-medium ${dark ? "text-ivory" : "text-ink"}`}>
          {venture.name}
        </h3>

        {venture.foundingYear && (
          <p className="mt-1 text-xs text-stone">{localiseDigits(venture.foundingYear, locale)}</p>
        )}

        <p className={`mt-4 flex-1 text-[0.95rem] leading-[1.8] ${dark ? "text-ivory/70" : "text-ink/70"}`}>
          {t(venture.description, locale)}
        </p>

        <dl className="mt-7 space-y-2 border-t border-current/10 pt-5">
          {venture.leadership.map((role) => (
            <div key={`${venture.id}-${role.personName.en}`} className="flex flex-wrap items-baseline gap-x-3">
              <dt className={`text-sm font-medium ${dark ? "text-ivory" : "text-ink"}`}>
                {t(role.personName, locale)}
              </dt>
              <dd className="text-xs text-stone">{t(role.roleTitle, locale)}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center justify-between gap-4">
          <VerificationBadge status={venture.verificationStatus} locale={locale} />
          {venture.websiteUrl && (
            <a
              href={venture.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-gold"
            >
              {locale === "bn" ? "ওয়েবসাইট" : "Website"}
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
