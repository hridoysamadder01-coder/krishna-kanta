import type { Metadata } from "next";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/content/site";
import { PageIntro } from "@/components/PageIntro";
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
    title: t(pageMeta.terms.title, locale),
    description: t(pageMeta.terms.description, locale),
    alternates: {
      canonical: `/${locale}/terms/`,
      languages: { en: "/en/terms/", bn: "/bn/terms/" },
    },
    robots: { index: false, follow: true },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const bn = locale === "bn";

  const sections = [
    {
      title: bn ? "সাইটের উদ্দেশ্য" : "Purpose of this site",
      body: bn
        ? "এই ওয়েবসাইট Krishna Kanta-র দাপ্তরিক পরিচিতি ও সংরক্ষণাগার। এখানে প্রকাশিত বিষয়বস্তু তথ্যমূলক; এটি কোনো বাণিজ্যিক প্রস্তাব, বিনিয়োগ পরামর্শ বা আইনি নথি নয়।"
        : "This website is the official identity and archive of Krishna Kanta. Its content is informational; it is not a commercial offer, investment advice, or a legal document.",
    },
    {
      title: bn ? "বিষয়বস্তুর মালিকানা" : "Content ownership",
      body: bn
        ? "সাইটের লেখা, নকশা ও চিত্রসামগ্রীর সর্বস্বত্ব সংরক্ষিত। সংবাদ-প্রয়োজনে ব্যবহারের নিয়ম প্রেস পাতায় বর্ণিত আছে।"
        : "All rights to the site’s text, design, and imagery are reserved. Editorial-use permissions are described on the press page.",
    },
    {
      title: bn ? "তথ্যের যথার্থতা" : "Accuracy of information",
      body: bn
        ? "এই সাইট একটি যাচাই-নীতি অনুসরণ করে: যাচাইকৃত তথ্য ও সম্পাদকীয় বিবরণ আলাদাভাবে চিহ্নিত থাকে। কোনো অসঙ্গতি নজরে এলে যোগাযোগ পাতার মাধ্যমে জানান।"
        : "This site follows a verification policy: verified facts and editorial narration are labelled distinctly. If you notice an inconsistency, please report it through the contact page.",
    },
    {
      title: bn ? "শর্ত পরিবর্তন" : "Changes to these terms",
      body: bn
        ? "প্রয়োজনে এই শর্তাবলি হালনাগাদ হতে পারে; সর্বশেষ সংস্করণটিই কার্যকর।"
        : "These terms may be updated as needed; the latest published version applies.",
    },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/terms/`,
          title: t(pageMeta.terms.title, locale),
          description: t(pageMeta.terms.description, locale),
        })}
      />
      <PageIntro
        locale={locale}
        eyebrow={bn ? "আইনি" : "Legal"}
        title={bn ? "ব্যবহারের শর্তাবলি" : "Terms of Use"}
        lede={
          bn
            ? "এই খসড়াটি সম্পাদনযোগ্য স্থানধারক — প্রকাশের আগে আইন পরামর্শকের পর্যালোচনা প্রয়োজন।"
            : "This draft is an editable placeholder — it requires review by legal counsel before formal adoption."
        }
      />
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-3xl space-y-12 px-5 sm:px-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-medium text-ink">{s.title}</h2>
              <p className="mt-4 text-[0.98rem] leading-[1.9] text-ink/75">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
