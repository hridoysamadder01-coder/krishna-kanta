import type { Metadata } from "next";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pageMeta, siteConfig, ui } from "@/content/site";
import { mediaGuidelines, pressBios } from "@/content/press";
import { publicVentures } from "@/content/ventures";
import { PageIntro } from "@/components/PageIntro";
import { EditorialHeading, SectionLabel } from "@/components/Editorial";
import { PressRecordsList } from "@/components/PressRecords";
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
    title: t(pageMeta.press.title, locale),
    description: t(pageMeta.press.description, locale),
    alternates: {
      canonical: `/${locale}/press/`,
      languages: { en: "/en/press/", bn: "/bn/press/" },
    },
  };
}

export default async function PressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const bn = locale === "bn";

  const bioBlocks = [
    { key: "short", label: bn ? "৮০ শব্দে" : "In 80 words", text: pressBios.short },
    { key: "medium", label: bn ? "১৫০ শব্দে" : "In 150 words", text: pressBios.medium },
    { key: "long", label: bn ? "৩০০ শব্দে" : "In 300 words", text: pressBios.long },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/press/`,
          title: t(pageMeta.press.title, locale),
          description: t(pageMeta.press.description, locale),
          includeOrganizations: true,
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: bn ? "গণমাধ্যম" : "Press", path: `/${locale}/press/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={bn ? "গণমাধ্যম সহায়িকা" : "Press Resources"}
        title={bn ? "দাপ্তরিক প্রেস ও মিডিয়া" : "Official Press and Media"}
        lede={t(pageMeta.press.description, locale)}
      />

      {/* Biographies */}
      <section className="bg-charcoal py-24 sm:py-28" aria-labelledby="bios-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel>{bn ? "জীবনী" : "Biography"}</SectionLabel>
            <EditorialHeading id="bios-heading" className="mt-6 text-ivory">
              {bn ? "তিন দৈর্ঘ্যের প্রতিষ্ঠাতা-জীবনী" : "The Founder Biography in Three Lengths"}
            </EditorialHeading>
          </Reveal>
          <div className="mt-12 space-y-10">
            {bioBlocks.map((block) => (
              <Reveal key={block.key} className="border border-white/10 bg-ink p-8 sm:p-10">
                <p className="tracking-label text-[0.62rem] uppercase text-gold">{block.label}</p>
                <p className="mt-5 max-w-4xl text-[0.98rem] leading-[1.9] text-ivory/80">
                  {t(block.text, locale)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Name & title formatting + venture summary */}
      <section className="bg-ink py-24" aria-labelledby="format-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>{bn ? "নাম ও পদবি" : "Name and Titles"}</SectionLabel>
              <EditorialHeading id="format-heading" as="h2" className="mt-6 text-ivory">
                {bn ? "দাপ্তরিক বিন্যাস" : "Official Formatting"}
              </EditorialHeading>
              <dl className="mt-10 space-y-6 text-[0.95rem]">
                <div>
                  <dt className="tracking-label text-[0.62rem] uppercase text-stone">
                    {bn ? "নাম" : "Name"}
                  </dt>
                  <dd className="font-display mt-2 text-2xl text-ivory">Krishna Kanta</dd>
                </div>
                <div>
                  <dt className="tracking-label text-[0.62rem] uppercase text-stone">
                    {bn ? "পদবি" : "Titles"}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ivory/80">
                    {bn
                      ? "প্রতিষ্ঠাতা · চেয়ারম্যান · উদ্যোক্তা · ব্যবসায়িক নেতা"
                      : "Founder · Chairman · Entrepreneur · Business Leader"}
                  </dd>
                </div>
                <div>
                  <dt className="tracking-label text-[0.62rem] uppercase text-stone">
                    {bn ? "প্রযুক্তি-উদ্যোগে নেতৃত্বের বিন্যাস" : "Technology-venture leadership line"}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ivory/80">
                    Krishna Kanta — {bn ? "প্রতিষ্ঠাতা ও চেয়ারম্যান" : "Founder & Chairman"}
                    <br />
                    <span lang="bn">হৃদয় সমাদ্দার</span> (Hridoy Samadder) —{" "}
                    {bn ? "সিইও ও চিফ আর্কিটেকচার ইঞ্জিনিয়ার" : "CEO & Chief Architecture Engineer"}
                  </dd>
                </div>
                <div>
                  <dt className="tracking-label text-[0.62rem] uppercase text-stone">
                    {bn ? "উদ্যোগসমূহ" : "Ventures"}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ivory/80">
                    {publicVentures.map((v) => v.name).join(" · ")}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.12}>
              <SectionLabel>{bn ? "ব্যবহার নির্দেশিকা" : "Usage Guidelines"}</SectionLabel>
              <EditorialHeading as="h2" className="mt-6 text-ivory">
                {bn ? "গণমাধ্যম নির্দেশিকা" : "Media Guidelines"}
              </EditorialHeading>
              <ul className="mt-10 space-y-4" role="list">
                {(mediaGuidelines[locale] || mediaGuidelines.en).map((rule) => (
                  <li key={rule.slice(0, 32)} className="flex gap-4 text-[0.92rem] leading-[1.8] text-ivory/75">
                    <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-gold/60" />
                    {rule}
                  </li>
                ))}
              </ul>

              <div className="mt-12 border border-white/10 bg-charcoal p-8">
                <p className="tracking-label text-[0.62rem] uppercase text-gold">
                  {bn ? "গণমাধ্যম যোগাযোগ" : "Press Contact"}
                </p>
                {siteConfig.pressEmail ? (
                  <a
                    href={`mailto:${siteConfig.pressEmail}`}
                    className="editorial-link mt-4 inline-block text-lg text-ivory"
                  >
                    {siteConfig.pressEmail}
                  </a>
                ) : (
                  <p className="mt-4 text-sm italic leading-relaxed text-stone">
                    {t(ui.pressContactPending, locale)}
                  </p>
                )}
              </div>

              <div className="mt-8 border border-white/10 bg-charcoal p-8">
                <p className="tracking-label text-[0.62rem] uppercase text-gold">
                  {bn ? "প্রতিকৃতি ডাউনলোড" : "Portrait Downloads"}
                </p>
                <p className="mt-4 text-sm italic leading-relaxed text-stone">
                  {bn
                    ? "যাচাইকৃত প্রতিকৃতি প্রকাশের পর এই অংশে উচ্চ-রেজোলিউশন ডাউনলোড যুক্ত হবে।"
                    : "High-resolution downloads will appear here once verified portraits are published."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Public records */}
      <section className="bg-charcoal py-24" aria-labelledby="records-heading">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <Reveal>
            <SectionLabel>{bn ? "নথি" : "Records"}</SectionLabel>
            <EditorialHeading id="records-heading" className="mt-6 text-ivory">
              {bn ? "প্রকাশ্য নথি" : "Public Record"}
            </EditorialHeading>
          </Reveal>
          <div className="mt-12">
            <PressRecordsList locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
