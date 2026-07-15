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
 * Global header: transparent over the hero, settling into a subtle
 * charcoal glass surface once the visitor scrolls.
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "border-b border-white/10 bg-charcoal/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href={localePath(locale)}
          className="group flex min-w-0 flex-col justify-center"
          aria-label={siteConfig.personName}
        >
          <span className="font-display text-base font-semibold tracking-[0.18em] text-ivory sm:text-lg">
            KRISHNA&nbsp;KANTA
          </span>
          <span className="tracking-label hidden text-[0.55rem] uppercase text-stone sm:block">
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
                  isActive(item.href) ? "text-gold" : "text-ivory/75 hover:text-ivory",
                )}
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher locale={locale} className="hidden lg:flex" />

          <Link
            href={localePath(locale, "/story")}
            className="hidden items-center border border-gold/50 px-5 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink xl:inline-flex"
          >
            {t(ui.exploreJourney, locale)}
          </Link>

          <MobileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
