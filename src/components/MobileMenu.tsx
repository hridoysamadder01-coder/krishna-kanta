"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localePath, t } from "@/lib/i18n";
import { navItems, ui } from "@/content/site";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Full-screen editorial mobile menu on warm paper: large typography,
 * scroll lock, escape-to-close, focus management, active page indicator.
 */
export function MobileMenu({
  locale,
  triggerTone = "light",
}: {
  locale: Locale;
  triggerTone?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const isActive = (href: string) => pathname.startsWith(localePath(locale, href).slice(0, -1));

  const items = [...navItems, { href: "/contact", label: { en: "Contact", bn: "যোগাযোগ" } }];

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={t(ui.openMenu, locale)}
        className={cn(
          "flex h-11 w-11 items-center justify-center",
          triggerTone === "dark" ? "text-ivory" : "text-ink",
        )}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(ui.mainNavigation, locale)}
            className="fixed inset-0 z-50 flex flex-col bg-paper text-ink"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-base font-semibold tracking-[0.18em] text-ink">
                KRISHNA&nbsp;KANTA
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label={t(ui.closeMenu, locale)}
                className="flex h-11 w-11 items-center justify-center text-ink"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 pb-10">
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? {} : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={localePath(locale, item.href)}
                    onClick={close}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "font-display block py-3 text-[clamp(1.8rem,7vw,2.6rem)] font-medium leading-tight",
                      isActive(item.href) ? "text-gold-muted" : "text-ink hover:text-gold-muted",
                    )}
                  >
                    <span className="tracking-label mr-4 align-middle text-[0.6rem] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t(item.label, locale)}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-10 border-t border-ink/10 pt-6">
                <LanguageSwitcher locale={locale} onNavigate={close} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
