import type { Metadata } from "next";
import { isLocale, localePath, t, type Locale } from "@/lib/i18n";
import { home, pageMeta, ui } from "@/content/site";
import { publicTimeline } from "@/content/timeline";
import { publicVentures } from "@/content/ventures";
import { leadershipThemes } from "@/content/philosophy";
import { publicGallery } from "@/content/gallery";
import { HeroPortrait } from "@/components/HeroPortrait";
import { FounderStatement } from "@/components/FounderStatement";
import { FounderIntelligenceGrid } from "@/components/FounderIntelligenceGrid";
import { Timeline } from "@/components/Timeline";
import { VentureCard } from "@/components/VentureCard";
import { LeadershipStorySection } from "@/components/LeadershipStory";
import { ArchiveGrid } from "@/components/ArchiveGrid";
import { PressRecordsList } from "@/components/PressRecords";
import { EditorialHeading, SectionLabel } from "@/components/Editorial";
import { PrincipleBlock } from "@/components/QuoteBlock";
import { Reveal, RevealRule } from "@/components/Reveal";
import { CTAGroup } from "@/components/CTAGroup";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(pageMeta.home.title, locale),
    description: t(pageMeta.home.description, locale),
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: "/en/", bn: "/bn/" },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/`,
          title: t(pageMeta.home.title, locale),
          description: t(pageMeta.home.description, locale),
          pageType: "ProfilePage",
          includeOrganizations: true,
        })}
      />

      {/* 1 — Cinematic hero */}
      <HeroPortrait locale={locale} />

      {/* 2 — Editorial introduction */}
      <FounderStatement locale={locale} />

      {/* 3 — Founder intelligence */}
      <FounderIntelligenceGrid locale={locale} />

      {/* 4 — Business journey preview */}
      <section className="bg-paper py-24 text-ink sm:py-32" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel tone="light">{locale === "bn" ? "যাত্রাপথ" : "The Journey"}</SectionLabel>
            <EditorialHeading id="journey-heading" className="mt-6 max-w-3xl text-ink">
              {t(home.journeyTitle, locale)}
            </EditorialHeading>
          </Reveal>
          <div className="mt-16">
            <Timeline entries={publicTimeline} locale={locale} tone="light" />
          </div>
          <CTAGroup
            className="mt-4"
            tone="light"
            primary={{ href: localePath(locale, "/story"), label: t(ui.readFullStory, locale) }}
          />
        </div>
      </section>

      {/* 5 — Ventures */}
      <section className="bg-ivory py-24 text-ink sm:py-32" aria-labelledby="ventures-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel tone="light">{locale === "bn" ? "প্রতিষ্ঠান" : "Institutions"}</SectionLabel>
            <EditorialHeading id="ventures-heading" className="mt-6 max-w-3xl text-ink">
              {t(home.venturesTitle, locale)}
            </EditorialHeading>
            <p className="mt-7 max-w-2xl text-[1rem] leading-[1.85] text-ink/70">
              {t(home.venturesIntro, locale)}
            </p>
          </Reveal>
          <ul className="mt-16 grid gap-8 md:grid-cols-2" role="list">
            {publicVentures
              .filter((v) => v.featured)
              .map((venture, i) => (
                <VentureCard key={venture.id} venture={venture} locale={locale} index={i} tone="light" />
              ))}
          </ul>
          <CTAGroup
            className="mt-14"
            tone="light"
            primary={{ href: localePath(locale, "/ventures"), label: t(ui.exploreAllVentures, locale) }}
          />
        </div>
      </section>

      {/* 6 — Leadership philosophy (ivory editorial section) */}
      <section className="bg-paper py-24 text-ink sm:py-32" aria-labelledby="philosophy-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <SectionLabel tone="light">{locale === "bn" ? "দর্শন" : "Philosophy"}</SectionLabel>
              <EditorialHeading id="philosophy-heading" className="mt-6 text-ink">
                {t(home.philosophyTitle, locale)}
              </EditorialHeading>
              <p className="mt-8 max-w-measure text-[1.05rem] leading-[1.9] text-ink/75">
                {t(home.philosophyBody, locale)}
              </p>
              <CTAGroup
                className="mt-10"
                tone="light"
                primary={{
                  href: localePath(locale, "/philosophy"),
                  label: t(ui.discoverPhilosophy, locale),
                }}
              />
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5">
              <PrincipleBlock principles={leadershipThemes} locale={locale} tone="light" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Legacy through people */}
      <LeadershipStorySection locale={locale} />

      {/* 8 — Editorial portrait archive */}
      <section className="bg-paper py-24 text-ink sm:py-32" aria-labelledby="archive-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel tone="light">{locale === "bn" ? "সংগ্রহ" : "The Collection"}</SectionLabel>
            <EditorialHeading id="archive-heading" className="mt-6 text-ink">
              {t(home.archiveTitle, locale)}
            </EditorialHeading>
            <p className="mt-6 max-w-2xl text-sm italic leading-relaxed text-ink/55">
              {t(ui.placeholderFrameNote, locale)}
            </p>
          </Reveal>
          <div className="mt-14">
            <ArchiveGrid records={publicGallery.slice(0, 5)} locale={locale} tone="light" />
          </div>
          <CTAGroup
            className="mt-14"
            tone="light"
            primary={{ href: localePath(locale, "/archive"), label: t(ui.enterArchive, locale) }}
          />
        </div>
      </section>

      {/* 9 — Public record and press */}
      <section className="bg-ivory py-24 text-ink sm:py-32" aria-labelledby="press-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel tone="light">{locale === "bn" ? "গণমাধ্যম" : "In the Media"}</SectionLabel>
            <EditorialHeading id="press-heading" className="mt-6 text-ink">
              {t(home.pressTitle, locale)}
            </EditorialHeading>
            <p className="mt-7 max-w-2xl text-[1rem] leading-[1.85] text-ink/70">
              {t(home.pressIntro, locale)}
            </p>
          </Reveal>
          <div className="mt-12">
            <PressRecordsList locale={locale} tone="light" />
          </div>
        </div>
      </section>

      {/* 10 — Final statement */}
      <section className="film-grain relative bg-ink py-32 sm:py-44" aria-label={t(home.finalStatement, locale)}>
        <div className="mx-auto max-w-wide px-5 text-center sm:px-8">
          <Reveal>
            <p className="font-display mx-auto max-w-4xl text-[clamp(1.8rem,5vw,3.6rem)] font-medium leading-[1.25] text-ivory">
              {t(home.finalStatement, locale)}
            </p>
            <RevealRule className="mx-auto mt-12 max-w-[10rem]" />
            <p className="font-display mt-12 text-2xl font-semibold tracking-[0.22em] text-ivory sm:text-3xl">
              {t(home.finalName, locale)}
            </p>
            <p className="tracking-label mt-3 text-[0.68rem] uppercase text-gold">
              {t(home.finalCountry, locale)}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
