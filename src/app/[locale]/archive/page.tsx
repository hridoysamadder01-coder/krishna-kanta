import type { Metadata } from "next";
import { isLocale, localePath, t, type Locale } from "@/lib/i18n";
import { pageMeta, ui } from "@/content/site";
import { publicGallery } from "@/content/gallery";
import { PageIntro } from "@/components/PageIntro";
import { ArchiveExplorer } from "@/components/ArchiveExplorer";
import { CTAGroup } from "@/components/CTAGroup";
import { Reveal } from "@/components/Reveal";
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
    title: t(pageMeta.archive.title, locale),
    description: t(pageMeta.archive.description, locale),
    alternates: {
      canonical: `/${locale}/archive/`,
      languages: { en: "/en/archive/", bn: "/bn/archive/" },
    },
  };
}

export default async function ArchivePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/archive/`,
          title: t(pageMeta.archive.title, locale),
          description: t(pageMeta.archive.description, locale),
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: locale === "bn" ? "আর্কাইভ" : "Archive", path: `/${locale}/archive/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={locale === "bn" ? "সংরক্ষণাগার" : "The Archive"}
        title={locale === "bn" ? "ফ্রেমে বাঁধা এক জীবন" : "A Life in Frames"}
        lede={
          locale === "bn"
            ? "আলোকচিত্র, দলিল, মাইলফলক ও প্রকাশ্য নথির এক সংগ্রহশালা — প্রতিটি ফ্রেম যাচাইকৃত ইতিহাসের জন্য সংরক্ষিত।"
            : "A museum of photographs, documents, milestones, and public records — each frame reserved for verified history."
        }
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <p className="mb-10 max-w-2xl text-sm italic leading-relaxed text-stone">
              {t(ui.placeholderFrameNote, locale)}
            </p>
          </Reveal>
          <ArchiveExplorer records={publicGallery} locale={locale} />
          <CTAGroup
            className="mt-16"
            primary={{ href: localePath(locale, "/press"), label: t(ui.readRecord, locale) }}
            secondary={{ href: localePath(locale, "/story"), label: t(ui.continueStory, locale) }}
          />
        </div>
      </section>
    </>
  );
}
