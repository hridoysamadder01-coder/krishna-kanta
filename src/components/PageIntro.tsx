import type { Locale } from "@/lib/i18n";
import { SectionLabel } from "./Editorial";
import { Reveal, RevealRule } from "./Reveal";

/** Editorial page opener used on every inner page. */
export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="film-grain relative bg-ivory-deep pb-16 pt-36 text-ink sm:pb-20 sm:pt-44">
      <div className="relative z-10 mx-auto max-w-wide px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.2rem,6.5vw,4.5rem)] font-medium leading-[1.08] text-ink">
            {title}
          </h1>
          {lede && <p className="mt-7 max-w-2xl text-[1.02rem] leading-[1.85] text-ink/70">{lede}</p>}
          <RevealRule className="mt-10 max-w-sm" />
        </Reveal>
      </div>
    </div>
  );
}
