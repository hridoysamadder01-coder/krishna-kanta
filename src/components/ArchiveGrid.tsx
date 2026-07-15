"use client";

import { useState } from "react";
import type { GalleryRecord } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { ui } from "@/content/site";
import { localiseDigits } from "@/lib/utils";
import { PortraitFigure } from "./PortraitFigure";
import { ArchiveLightbox } from "./ArchiveLightbox";
import { Reveal } from "./Reveal";

/**
 * Museum-like editorial asymmetric grid. Portrait records span taller
 * cells; landscape records span wider ones. Clicking a frame opens the
 * accessible lightbox. No masonry, no download controls.
 */
export function ArchiveGrid({
  records,
  locale,
  tone = "dark",
}: {
  records: GalleryRecord[];
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (records.length === 0) {
    return (
      <p
        className={`border px-8 py-16 text-center text-sm italic ${tone === "dark" ? "border-white/10 text-stone" : "border-ink/10 text-ink/50"}`}
      >
        {t(ui.archiveEmptyState, locale)}
      </p>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {records.map((record, i) => {
          const isPortrait = record.image.height >= record.image.width;
          return (
            <Reveal as="li" key={record.id} delay={(i % 3) * 0.07} className={isPortrait ? "sm:row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block w-full text-left"
                aria-label={`${t(record.caption, locale)} — ${locale === "bn" ? "বড় করে দেখুন" : "view larger"}`}
              >
                <div
                  className={`overflow-hidden border ${tone === "dark" ? "border-white/10" : "border-ink/15"}`}
                >
                  <PortraitFigure
                    image={record.image}
                    locale={locale}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={isPortrait ? "aspect-[4/5]" : "aspect-[16/10]"}
                    imgClassName="transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <p className={`text-xs leading-relaxed ${tone === "dark" ? "text-ivory/60" : "text-ink/60"}`}>
                    {t(record.caption, locale)}
                  </p>
                  {record.year && (
                    <p
                      className={`tracking-label shrink-0 text-[0.6rem] uppercase ${tone === "dark" ? "text-gold" : "text-gold-muted"}`}
                    >
                      {localiseDigits(record.year, locale)}
                    </p>
                  )}
                </div>
              </button>
            </Reveal>
          );
        })}
      </ul>

      {activeIndex !== null && (
        <ArchiveLightbox
          records={records}
          index={activeIndex}
          locale={locale}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
