import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { home, ui } from "@/content/site";
import { publicQuotes } from "@/content/quotes";
import { EditorialHeading, SectionLabel } from "./Editorial";
import { Reveal } from "./Reveal";

/**
 * Magazine-style editorial introduction with an oversized pull-line.
 * The pull-line is editorial narration and is labelled as such — it is
 * never presented as a spoken quotation.
 */
export function FounderStatement({ locale }: { locale: Locale }) {
  const pullQuote = publicQuotes.find((q) => q.id === "q-editorial-founder-sees");

  return (
    <section className="bg-charcoal py-24 sm:py-32" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-wide px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionLabel>{t(ui.editorialLabel, locale)}</SectionLabel>
            <EditorialHeading id="intro-heading" className="mt-6 text-ivory">
              {t(home.introHeadline, locale)}
            </EditorialHeading>
            <div className="mt-8 max-w-measure space-y-6 text-[1.02rem] leading-[1.85] text-ivory/75">
              <p>{t(home.introBody1, locale)}</p>
              <p>{t(home.introBody2, locale)}</p>
            </div>
          </Reveal>

          {pullQuote && (
            <Reveal delay={0.15} className="flex items-center lg:col-span-5">
              <div className="border-l border-gold/40 pl-8">
                <p className="font-display text-[clamp(1.5rem,3.2vw,2.3rem)] font-medium italic leading-[1.35] text-ivory-deep">
                  {t(pullQuote.text, locale)}
                </p>
                <p className="tracking-label mt-5 text-[0.6rem] uppercase text-stone">
                  {t(ui.editorialLabel, locale)}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
