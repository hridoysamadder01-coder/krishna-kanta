import type { Metadata } from "next";
import { isLocale, localePath, t, type Locale } from "@/lib/i18n";
import { home, pageMeta, ui } from "@/content/site";
import { publicVentures } from "@/content/ventures";
import { PageIntro } from "@/components/PageIntro";
import { VentureCard } from "@/components/VentureCard";
import { Reveal } from "@/components/Reveal";
import { CTAGroup } from "@/components/CTAGroup";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  return {
    title: t(pageMeta.ventures.title, locale),
    description: t(pageMeta.ventures.description, locale),
    alternates: {
      canonical: `/${locale}/ventures/`,
      languages: { en: "/en/ventures/", bn: "/bn/ventures/" },
    },
  };
}

export default async function VenturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";

  const disclaimer = {
    en: "Venture descriptions on this page are editorial summaries pending official company documentation. Verified founding records, milestones, and legal details are published only after confirmation.",
    bn: "এই পাতার উদ্যোগ-বিবরণগুলো দাপ্তরিক প্রাতিষ্ঠানিক নথির অপেক্ষায় থাকা সম্পাদকীয় সারসংক্ষেপ। যাচাইকৃত প্রতিষ্ঠার নথি, মাইলফলক ও আইনি বিবরণ নিশ্চিত হওয়ার পরই প্রকাশ করা হয়।",
  };

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/ventures/`,
          title: t(pageMeta.ventures.title, locale),
          description: t(pageMeta.ventures.description, locale),
          includeOrganizations: true,
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: locale === "bn" ? "উদ্যোগ" : "Ventures", path: `/${locale}/ventures/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={locale === "bn" ? "প্রতিষ্ঠান" : "Institutions"}
        title={t(home.venturesTitle, locale)}
        lede={t(home.venturesIntro, locale)}
      />

      <section className="bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" role="list">
            {publicVentures.map((venture, i) => (
              <VentureCard key={venture.id} venture={venture} locale={locale} index={i} />
            ))}
          </ul>

          <Reveal className="mt-16">
            <p className="max-w-3xl border-l border-gold/40 pl-6 text-sm italic leading-[1.8] text-stone">
              {disclaimer[locale] || disclaimer.en}
            </p>
          </Reveal>

          <CTAGroup
            className="mt-14"
            primary={{ href: localePath(locale, "/story"), label: t(ui.readFounderStory, locale) }}
            secondary={{ href: localePath(locale, "/archive"), label: t(ui.enterArchive, locale) }}
          />
        </div>
      </section>
    </>
  );
}
