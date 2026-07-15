import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath, t } from "@/lib/i18n";
import { footerNavItems, ui } from "@/content/site";
import { localiseDigits } from "@/lib/utils";

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-wide px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold tracking-[0.18em] text-ivory">
              KRISHNA&nbsp;KANTA
            </p>
            <p className="tracking-label mt-3 text-[0.62rem] uppercase text-stone">
              {t(ui.brandTagline, locale)}
            </p>
          </div>

          <nav
            aria-label={t(ui.mainNavigation, locale)}
            className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
          >
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="editorial-link w-fit text-sm text-ivory/70 hover:text-ivory"
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm leading-relaxed text-stone">{t(ui.footerClosing, locale)}</p>
          <p className="mt-2 text-xs text-stone/70">
            © {localiseDigits(year, locale)} Krishna Kanta
          </p>
        </div>
      </div>
    </footer>
  );
}
