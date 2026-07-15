"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { localePath, t } from "@/lib/i18n";
import { founder } from "@/content/founder";
import { home, ui } from "@/content/site";
import { PortraitFigure } from "./PortraitFigure";
import { CTAGroup } from "./CTAGroup";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic full-height hero on a warm ivory ground: monumental serif name
 * in ink, editorial portrait settling in on the right, fine gold rule,
 * staggered copy. All motion is disabled under prefers-reduced-motion.
 */
export function HeroPortrait({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section className="film-grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ivory-deep text-ink">
      {/* Portrait composition */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full max-w-full sm:w-[55%]"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, scale: 1.04 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.8, ease },
            })}
      >
        <PortraitFigure
          image={founder.portrait}
          locale={locale}
          priority
          sizes="(max-width: 640px) 100vw, 55vw"
          className="h-full w-full opacity-30 sm:opacity-60"
          imgClassName="h-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ivory-deep via-ivory-deep/60 to-ivory-deep/20 sm:via-ivory-deep/30 sm:to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ivory-deep to-transparent"
        />
      </motion.div>

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-wide px-5 pb-16 pt-36 sm:px-8 sm:pb-24">
        <motion.p
          {...fade(0.2)}
          className="tracking-label text-[0.68rem] uppercase text-gold-muted sm:text-xs"
        >
          {t(home.heroEyebrow, locale)}
        </motion.p>

        <motion.h1
          {...fade(0.35)}
          className="font-display mt-5 text-[clamp(2.6rem,10vw,7.5rem)] font-semibold leading-[0.98] tracking-[0.04em] text-ink"
        >
          KRISHNA
          <br />
          KANTA
        </motion.h1>

        <motion.div
          aria-hidden="true"
          className="mt-8 h-px max-w-md origin-left bg-gradient-to-r from-gold-muted to-gold-muted/10"
          {...(reduce
            ? {}
            : {
                initial: { scaleX: 0 },
                animate: { scaleX: 1 },
                transition: { duration: 1.6, delay: 0.7, ease },
              })}
        />

        <motion.p
          {...fade(0.75)}
          className="font-display mt-8 max-w-2xl text-[clamp(1.25rem,3vw,1.9rem)] font-medium leading-snug text-ink"
        >
          {t(home.heroStatement, locale)}
        </motion.p>

        <motion.p {...fade(0.9)} className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
          {t(home.heroSupport, locale)}
        </motion.p>

        <motion.div {...fade(1.05)}>
          <CTAGroup
            className="mt-9"
            tone="light"
            primary={{ href: localePath(locale, "/story"), label: t(ui.exploreJourney, locale) }}
            secondary={{ href: localePath(locale, "/ventures"), label: t(ui.viewVentures, locale) }}
          />
        </motion.div>

        <motion.p {...fade(1.2)} className="mt-10 text-xs italic text-ink/50">
          {t(ui.heroCue, locale)}
        </motion.p>
      </div>
    </section>
  );
}
