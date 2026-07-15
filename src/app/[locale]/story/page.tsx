import type { Metadata } from "next";
import { isLocale, localePath, t, type Locale } from "@/lib/i18n";
import { pageMeta, ui } from "@/content/site";
import { founder } from "@/content/founder";
import { storyChapters } from "@/content/story";
import { PageIntro } from "@/components/PageIntro";
import { PortraitFigure } from "@/components/PortraitFigure";
import { LeadershipStorySection } from "@/components/LeadershipStory";
import { Reveal } from "@/components/Reveal";
import { VerificationBadge } from "@/components/Badges";
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
    title: t(pageMeta.story.title, locale),
    description: t(pageMeta.story.description, locale),
    alternates: { canonical: `/${locale}/story/`, languages: { en: "/en/story/", bn: "/bn/story/" } },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/story/`,
          title: t(pageMeta.story.title, locale),
          description: t(pageMeta.story.description, locale),
          pageType: "Article",
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: locale === "bn" ? "জীবনকথা" : "Story", path: `/${locale}/story/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={locale === "bn" ? "জীবনকথা" : "The Founder Story"}
        title={locale === "bn" ? "একজন প্রতিষ্ঠাতার নির্মাণ" : "The Making of a Founder"}
        lede={t(founder.positioning, locale)}
      />

      {/* Opening portrait */}
      <section className="bg-ink pb-24">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <PortraitFigure
              image={founder.officePortrait}
              locale={locale}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="mx-auto aspect-[4/5] max-w-2xl border border-white/10"
              overlay
            />
          </Reveal>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ol role="list" className="space-y-20">
            {storyChapters.map((chapter) => (
              <Reveal as="li" key={chapter.id}>
                <article aria-labelledby={`${chapter.id}-title`}>
                  <p className="font-display text-sm text-gold-muted" aria-hidden="true">
                    {editorialIndex(chapter.index, locale)}
                  </p>
                  <h2
                    id={`${chapter.id}-title`}
                    className="font-display mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight text-ink"
                  >
                    {t(chapter.title, locale)}
                  </h2>
                  <div className="mt-7 space-y-6 text-[1.02rem] leading-[1.9] text-ink/75">
                    {chapter.paragraphs.map((para) => (
                      <p key={para.en.slice(0, 40)}>{t(para, locale)}</p>
                    ))}
                  </div>
                  <VerificationBadge
                    status={chapter.verificationStatus}
                    locale={locale}
                    tone="light"
                    className="mt-6"
                  />
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership and people */}
      <LeadershipStorySection locale={locale} withCta={false} />

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <CTAGroup
            tone="light"
            primary={{ href: localePath(locale, "/ventures"), label: t(ui.viewVentures, locale) }}
            secondary={{ href: localePath(locale, "/philosophy"), label: t(ui.discoverPhilosophy, locale) }}
          />
        </div>
      </section>
    </>
  );
}
