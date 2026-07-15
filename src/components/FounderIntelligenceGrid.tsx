import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { home } from "@/content/site";
import { intelligencePanels } from "@/content/philosophy";
import { editorialIndex } from "@/lib/utils";
import { EditorialHeading, SectionLabel } from "./Editorial";
import { Reveal } from "./Reveal";

/**
 * The intellectual heart of the homepage: four indexed editorial panels
 * built from typography and composition — no icon cards, no carousel.
 */
export function FounderIntelligenceGrid({ locale }: { locale: Locale }) {
  return (
    <section className="bg-ink py-24 sm:py-32" aria-labelledby="intelligence-heading">
      <div className="mx-auto max-w-wide px-5 sm:px-8">
        <Reveal>
          <SectionLabel>{locale === "bn" ? "চারটি স্তম্ভ" : "Four Pillars"}</SectionLabel>
          <EditorialHeading id="intelligence-heading" className="mt-6 max-w-3xl text-ivory">
            {t(home.intelligenceTitle, locale)}
          </EditorialHeading>
        </Reveal>

        <ul className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2" role="list">
          {intelligencePanels.map((panel, i) => (
            <Reveal
              as="li"
              key={panel.id}
              delay={i * 0.08}
              className="group bg-ink p-8 transition-colors duration-500 hover:bg-coal-soft sm:p-12"
            >
              <p className="font-display text-sm text-gold" aria-hidden="true">
                {editorialIndex(i + 1, locale)}
              </p>
              <h3 className="font-display mt-6 text-2xl font-medium text-ivory sm:text-[1.7rem]">
                {t(panel.title, locale)}
              </h3>
              <div
                aria-hidden="true"
                className="gold-rule mt-5 w-10 transition-all duration-700 ease-editorial group-hover:w-20"
              />
              <p className="mt-5 max-w-md text-[0.98rem] leading-[1.8] text-ivory/70">
                {t(panel.text, locale)}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
