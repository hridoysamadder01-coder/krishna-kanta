"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { localePath, t } from "@/lib/i18n";
import { navItems, siteConfig, ui } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Global header. The homepage opens on the cinematic dark hero, so at the
 * top of the homepage the header renders in ivory; once scrolled (or on any
 * inner page, which opens light) it settles into a warm paper glass surface
 * with ink text.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname.startsWith(localePath(locale, href).slice(0, -1));
  const isHome = /^\/(en|bn)\/?$/.test(pathname);
  // True while the header floats over the dark hero.
  const dark = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href={localePath(locale)}
          className="group flex min-w-0 flex-col justify-center"
          aria-label={siteConfig.personName}
        >
          <span
            className={cn(
              "font-display text-base font-semibold tracking-[0.18em] sm:text-lg",
              dark ? "text-ivory" : "text-ink",
            )}
          >
            KRISHNA&nbsp;KANTA
          </span>
          <span
            className={cn(
              "tracking-label hidden text-[0.55rem] uppercase sm:block",
              dark ? "text-ivory/50" : "text-ink/50",
            )}
          >
            {t(ui.brandTagline, locale)}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label={t(ui.mainNavigation, locale)} className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "editorial-link text-[0.8rem] uppercase tracking-[0.16em]",
                  isActive(item.href)
                    ? dark
                      ? "text-gold"
                      : "text-gold-muted"
                    : dark
                      ? "text-ivory/75 hover:text-ivory"
                      : "text-ink/70 hover:text-ink",
                )}
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher locale={locale} tone={dark ? "dark" : "light"} className="hidden lg:flex" />

          <Link
            href={localePath(locale, "/story")}
            className={cn(
              "hidden items-center border px-5 py-2 text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-300 xl:inline-flex",
              dark
                ? "border-gold/60 text-gold hover:bg-gold hover:text-ink"
                : "border-gold-muted text-gold-muted hover:bg-gold-muted hover:text-paper",
            )}
          >
            {t(ui.exploreJourney, locale)}
          </Link>

          <MobileMenu locale={locale} triggerTone={dark ? "dark" : "light"} />
        </div>
      </div>
    </header>
  );
}
