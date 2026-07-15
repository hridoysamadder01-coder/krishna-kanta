import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { htmlLang, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { pageMeta, siteConfig, ui } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: {
      default: t(pageMeta.home.title, locale),
      template: "%s",
    },
    description: t(pageMeta.home.description, locale),
    alternates: {
      canonical: `${siteConfig.siteUrl}/${locale}/`,
      languages: {
        en: `${siteConfig.siteUrl}/en/`,
        bn: `${siteConfig.siteUrl}/bn/`,
      },
    },
    openGraph: {
      type: "profile",
      siteName: "Krishna Kanta",
      title: t(pageMeta.home.title, locale),
      description: t(pageMeta.home.description, locale),
      locale: locale === "bn" ? "bn_BD" : "en_US",
      url: `${siteConfig.siteUrl}/${locale}/`,
    },
    twitter: {
      card: "summary",
      title: t(pageMeta.home.title, locale),
      description: t(pageMeta.home.description, locale),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <div lang={htmlLang[locale]} className="flex min-h-svh flex-col bg-paper text-ink">
      <SetHtmlLang lang={htmlLang[locale]} />
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:text-ink"
      >
        {t(ui.skipToContent, locale)}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
