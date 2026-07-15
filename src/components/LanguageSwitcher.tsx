"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { switchLocalePath, t } from "@/lib/i18n";
import { ui } from "@/content/site";
import { cn } from "@/lib/utils";

/** EN / বাংলা switcher that preserves the current page. */
export function LanguageSwitcher({
  locale,
  className,
  onNavigate,
}: {
  locale: Locale;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || `/${locale}/`;

  const options: Array<{ code: Locale; label: string; lang: string }> = [
    { code: "en", label: "EN", lang: "en" },
    { code: "bn", label: "বাংলা", lang: "bn" },
  ];

  return (
    <nav aria-label={t(ui.languageSwitchLabel, locale)} className={cn("flex items-center", className)}>
      {options.map((option, i) => (
        <span key={option.code} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-2 h-3 w-px bg-ink/20" />}
          {option.code === locale ? (
            <span
              lang={option.lang}
              aria-current="true"
              className="text-xs font-medium uppercase tracking-widest text-gold-muted"
            >
              {option.label}
            </span>
          ) : (
            <Link
              href={switchLocalePath(pathname, option.code)}
              lang={option.lang}
              onClick={onNavigate}
              className="editorial-link text-xs uppercase tracking-widest text-ink/60 hover:text-ink"
            >
              {option.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
