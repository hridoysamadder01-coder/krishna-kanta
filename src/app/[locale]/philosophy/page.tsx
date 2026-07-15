import type { Metadata } from "next";
import { isLocale, localePath, t, type Locale } from "@/lib/i18n";
import { pageMeta, ui } from "@/content/site";
import { philosophySections, leadershipThemes } from "@/content/philosophy";
import { publicTimeline } from "@/content/timeline";
import { publicQuotes } from "@/content/quotes";
import { PageIntro } from "@/components/PageIntro";
import { EditorialHeading, SectionLabel } from "@/components/Editorial";
import { QuoteBlock, PrincipleBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { CTAGroup } from "@/components/CTAGroup";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/structured-data";
import { editorialIndex } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(pageMeta.philosophy.title, locale),
    description: t(pageMeta.philosophy.description, locale),
    alternates: {
      canonical: `/${locale}/philosophy/`,
      languages: { en: "/en/philosophy/", bn: "/bn/philosophy/" },
    },
  };
}

export default async function PhilosophyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const editorialQuote = publicQuotes.find((q) => q.id === "q-editorial-quiet-decisions");

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/philosophy/`,
          title: t(pageMeta.philosophy.title, locale),
          description: t(pageMeta.philosophy.description, locale),
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: locale === "bn" ? "দর্শন" : "Philosophy", path: `/${locale}/philosophy/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={locale === "bn" ? "দর্শন" : "Philosophy"}
        title={locale === "bn" ? "তিনি যেভাবে ভাবেন" : "How He Thinks"}
        lede={
          locale === "bn"
            ? "ছয়টি ধারায় সাজানো তাঁর চিন্তার কাঠামো — প্রতিটি নীতি সম্পাদকীয় সংশ্লেষ, প্রাসঙ্গিক মাইলফলকের সঙ্গে যুক্ত।"
            : "His thinking, organised in six strands — each principle an editorial synthesis, tied to a related milestone in the record."
        }
      />

      <section className="bg-ivory py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <ol role="list" className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
            {philosophySections.map((section, i) => {
              const related = publicTimeline.find((entry) => entry.id === section.relatedTimelineId);
              return (
                <Reveal as="li" key={section.id} delay={(i % 2) * 0.08} className="bg-paper p-8 sm:p-12">
                  <p className="font-display text-sm text-gold-muted" aria-hidden="true">
                    {editorialIndex(i + 1, locale)}
                  </p>
                  <h2 className="font-display mt-5 text-2xl font-medium text-ink sm:text-3xl">
                    {t(section.title, locale)}
                  </h2>
                  <p className="font-display mt-6 text-lg font-medium italic leading-relaxed text-ink/85">
                    {t(section.principle, locale)}
                  </p>
                  <p className="mt-5 text-[0.95rem] leading-[1.85] text-ink/70">
                    {t(section.interpretation, locale)}
                  </p>
                  {related && (
                    <p className="tracking-label mt-7 text-[0.6rem] uppercase text-ink/50">
                      {locale === "bn" ? "সংশ্লিষ্ট অধ্যায়" : "Related chapter"} —{" "}
                      <span className="text-gold-muted">{t(related.title, locale)}</span>
                    </p>
                  )}
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionLabel>{t(ui.principlesLabel, locale)}</SectionLabel>
              <EditorialHeading className="mt-6 text-ink">
                {locale === "bn" ? "লিখে রাখার মতো নীতি" : "Principles Worth Writing Down"}
              </EditorialHeading>
              <PrincipleBlock principles={leadershipThemes} locale={locale} tone="light" className="mt-10" />
            </Reveal>
            {editorialQuote && (
              <Reveal delay={0.15} className="flex items-center lg:col-span-6">
                <QuoteBlock quote={editorialQuote} locale={locale} tone="light" />
              </Reveal>
            )}
          </div>
          <CTAGroup
            className="mt-16"
            tone="light"
            primary={{ href: localePath(locale, "/story"), label: t(ui.continueStory, locale) }}
          />
        </div>
      </section>
    </>
  );
}
