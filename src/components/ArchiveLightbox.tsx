"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryRecord } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { ui } from "@/content/site";
import { localiseDigits } from "@/lib/utils";
import { PortraitFigure } from "./PortraitFigure";

/**
 * Accessible full-screen lightbox: focus trap, Escape to close,
 * arrow-key navigation, readable captions, scroll lock.
 */
export function ArchiveLightbox({
  records,
  index,
  locale,
  onClose,
  onNavigate,
}: {
  records: GalleryRecord[];
  index: number;
  locale: Locale;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const record = records[index];
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const previous = useCallback(
    () => onNavigate((index - 1 + records.length) % records.length),
    [index, records.length, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % records.length),
    [index, records.length, onNavigate],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    containerRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        // Simple focus trap across the dialog's focusable controls.
        const focusables = containerRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, previous, next]);

  return (
    <motion.div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={t(record.caption, locale)}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex flex-col bg-ink/97 backdrop-blur-sm"
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          aria-label={t(ui.closeLabel, locale)}
          className="flex h-11 w-11 items-center justify-center text-ivory hover:text-gold"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 px-2 sm:gap-4 sm:px-6">
        <button
          type="button"
          onClick={previous}
          aria-label={t(ui.previousLabel, locale)}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-ivory/70 hover:text-gold"
        >
          <ChevronLeft className="h-7 w-7" aria-hidden="true" />
        </button>

        <div className="flex min-h-0 max-w-4xl flex-1 items-center justify-center">
          <PortraitFigure
            image={record.image}
            locale={locale}
            sizes="90vw"
            className="max-h-[70svh]"
            imgClassName="max-h-[70svh] w-auto object-contain"
          />
        </div>

        <button
          type="button"
          onClick={next}
          aria-label={t(ui.nextLabel, locale)}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-ivory/70 hover:text-gold"
        >
          <ChevronRight className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 pb-8 pt-4 text-center">
        <p className="text-sm leading-relaxed text-ivory/80">{t(record.caption, locale)}</p>
        <p className="tracking-label mt-2 text-[0.6rem] uppercase text-stone">
          {[
            record.year ? localiseDigits(record.year, locale) : null,
            record.location ? t(record.location, locale) : null,
            record.photographer,
          ]
            .filter(Boolean)
            .join(" · ") || `${localiseDigits(index + 1, locale)} / ${localiseDigits(records.length, locale)}`}
        </p>
      </div>
    </motion.div>
  );
}
