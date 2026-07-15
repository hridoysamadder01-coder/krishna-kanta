import type { Locale } from "@/lib/i18n";
import { localePath, t } from "@/lib/i18n";
import { leadershipStory } from "@/content/story";
import { ui } from "@/content/site";
import { EditorialHeading, SectionLabel } from "./Editorial";
import { Reveal, RevealRule } from "./Reveal";
import { CTAGroup } from "./CTAGroup";

/**
 * Legacy-through-people section. Krishna Kanta remains the subject;
 * Hridoy Samadder is presented as evidence of leadership impact.
 */
export function LeadershipStorySection({
  locale,
  withCta = true,
}: {
  locale: Locale;
  withCta?: boolean;
}) {
  return (
    <section className="bg-coal-soft py-24 sm:py-32" aria-labelledby="legacy-heading">
      <div className="mx-auto max-w-wide px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionLabel>{locale === "bn" ? "মানুষের মধ্যে উত্তরাধিকার" : "Legacy in People"}</SectionLabel>
            <EditorialHeading id="legacy-heading" className="mt-6 text-ivory">
              {t(leadershipStory.title, locale)}
            </EditorialHeading>
            <div className="mt-8 max-w-measure space-y-6 text-[1rem] leading-[1.85] text-ivory/75">
              {leadershipStory.narrative.map((para) => (
                <p key={para.en.slice(0, 32)}>{t(para, locale)}</p>
              ))}
            </div>
            {withCta && (
              <CTAGroup
                className="mt-10"
                primary={{
                  href: localePath(locale, "/story"),
                  label: t(ui.readLeadershipStory, locale),
                }}
              />
            )}
          </Reveal>

          <Reveal delay={0.15} className="flex items-center lg:col-span-5">
            <div className="w-full border border-white/10 bg-ink/60 p-10 sm:p-12">
              <p className="tracking-label text-[0.6rem] uppercase text-stone">
                {locale === "bn" ? "নেতৃত্বের সাক্ষ্য" : "Evidence of Leadership"}
              </p>
              <p lang="bn" className="font-display mt-6 text-3xl font-medium leading-snug text-ivory">
                {leadershipStory.displayName}
              </p>
              <p className="mt-1 text-sm text-ivory/60">{leadershipStory.displayNameLatin}</p>
              <RevealRule className="mt-6 w-16" />
              <p className="mt-6 text-sm leading-relaxed text-gold">
                {t(leadershipStory.displayRoles, locale)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
