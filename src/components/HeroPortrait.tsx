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
 * Magazine-cover hero on warm paper: content vertically centred (no dead
 * band above the fold), monumental serif name in ink, and the portrait
 * presented as a framed editorial plate with an offset gold-edged backdrop
 * instead of a faded full-bleed image. Motion respects reduced-motion.
 */
export function HeroPortrait({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="film-grain relative isolate flex min-h-svh items-center overflow-hidden bg-gradient-to-b from-paper via-ivory to-ivory-deep text-ink">
      <div className="relative z-10 mx-auto grid w-full max-w-wide items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:pb-20 lg:pt-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.p
            {...fade(0.15)}
            className="tracking-label text-[0.68rem] uppercase text-gold-muted sm:text-xs"
          >
            {t(home.heroEyebrow, locale)}
          </motion.p>

          <motion.h1
            {...fade(0.3)}
            className="font-display mt-5 text-[clamp(2.6rem,8vw,5.8rem)] font-semibold leading-[1.02] tracking-[0.04em] text-ink"
          >
            KRISHNA
            <br />
            KANTA
          </motion.h1>

          <motion.div
            aria-hidden="true"
            className="mt-7 h-px max-w-sm origin-left bg-gradient-to-r from-gold-muted to-gold-muted/10"
            {...(reduce
              ? {}
              : {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 1.4, delay: 0.6, ease },
                })}
          />

          <motion.p
            {...fade(0.65)}
            className="font-display mt-7 max-w-xl text-[clamp(1.25rem,2.6vw,1.8rem)] font-medium leading-snug text-ink"
          >
            {t(home.heroStatement, locale)}
          </motion.p>

          <motion.p {...fade(0.8)} className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
            {t(home.heroSupport, locale)}
          </motion.p>

          <motion.div {...fade(0.95)}>
            <CTAGroup
              className="mt-8"
              tone="light"
              primary={{ href: localePath(locale, "/story"), label: t(ui.exploreJourney, locale) }}
              secondary={{ href: localePath(locale, "/ventures"), label: t(ui.viewVentures, locale) }}
            />
          </motion.div>

          <motion.p {...fade(1.1)} className="mt-9 text-xs italic text-ink/50">
            {t(ui.heroCue, locale)}
          </motion.p>
        </div>

        {/* Framed portrait plate */}
        <motion.div
          className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 1.02, y: 16 },
                animate: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 1.3, delay: 0.45, ease },
              })}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full border border-gold-muted/50 bg-ivory-deep"
          />
          <div className="relative border border-ink/20 bg-charcoal p-2 shadow-[0_24px_60px_-30px_rgba(17,17,15,0.35)]">
            <PortraitFigure
              image={founder.portrait}
              locale={locale}
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="aspect-[4/5] w-full"
            />
          </div>
          <p className="tracking-label mt-4 text-center text-[0.6rem] uppercase text-ink/45">
            {locale === "bn"
              ? "প্রতিকৃতি · যাচাইকৃত আর্কাইভের অপেক্ষায়"
              : "Portrait · awaiting the verified archive"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
