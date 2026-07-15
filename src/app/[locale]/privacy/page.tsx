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
    title: t(pageMeta.privacy.title, locale),
    description: t(pageMeta.privacy.description, locale),
    alternates: {
      canonical: `/${locale}/privacy/`,
      languages: { en: "/en/privacy/", bn: "/bn/privacy/" },
    },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const bn = locale === "bn";

  const sections = [
    {
      title: bn ? "যে তথ্য এই সাইট সংগ্রহ করে" : "What this site collects",
      body: bn
        ? "এই ওয়েবসাইট একটি স্থিরভাবে প্রকাশিত (static) তথ্যমূলক সাইট। এটি কোনো কুকি বসায় না, কোনো বিশ্লেষণী ট্র্যাকার চালায় না এবং দর্শকের কোনো ব্যক্তিগত তথ্য নিজে থেকে সংগ্রহ করে না। যোগাযোগ ফর্মে আপনি স্বেচ্ছায় যে তথ্য দেন (নাম, ইমেইল, বার্তা), কেবল সেটুকুই দপ্তরের কাছে পৌঁছায়।"
        : "This website is a statically published, informational site. It sets no cookies, runs no analytics trackers, and collects no personal data on its own. Only the information you voluntarily submit through the contact form (name, e-mail, message) reaches the office.",
    },
    {
      title: bn ? "তথ্যের ব্যবহার" : "How submitted information is used",
      body: bn
        ? "যোগাযোগ ফর্মের তথ্য শুধু আপনার বার্তার উত্তর দেওয়ার কাজে ব্যবহৃত হয়। তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা হস্তান্তর করা হয় না।"
        : "Contact-form information is used solely to respond to your message. It is never sold or transferred to third parties.",
    },
    {
      title: bn ? "বহিঃসংযোগ" : "External links",
      body: bn
        ? "এই সাইট থেকে অন্য ওয়েবসাইটে যাওয়ার সংযোগ থাকতে পারে; সেসব সাইটের গোপনীয়তা-চর্চার দায় তাদের নিজস্ব।"
        : "This site may link to external websites; their privacy practices are their own responsibility.",
    },
    {
      title: bn ? "যোগাযোগ" : "Contact",
      body: bn
        ? "গোপনীয়তা-সংক্রান্ত যেকোনো প্রশ্নের জন্য যোগাযোগ পাতার মাধ্যমে দপ্তরের সঙ্গে যোগাযোগ করুন।"
        : "For any privacy-related question, reach the office through the contact page.",
    },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/privacy/`,
          title: t(pageMeta.privacy.title, locale),
          description: t(pageMeta.privacy.description, locale),
        })}
      />
      <PageIntro
        locale={locale}
        eyebrow={bn ? "আইনি" : "Legal"}
        title={bn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
        lede={
          bn
            ? "এই খসড়াটি সম্পাদনযোগ্য স্থানধারক — প্রকাশের আগে আইন পরামর্শকের পর্যালোচনা প্রয়োজন।"
            : "This draft is an editable placeholder — it requires review by legal counsel before formal adoption."
        }
      />
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 sm:px-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-medium text-ivory">{s.title}</h2>
              <p className="mt-4 text-[0.98rem] leading-[1.9] text-ivory/75">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
