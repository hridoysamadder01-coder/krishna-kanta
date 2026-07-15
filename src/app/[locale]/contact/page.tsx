import type { Metadata } from "next";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/content/site";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/ContactForm";
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
    title: t(pageMeta.contact.title, locale),
    description: t(pageMeta.contact.description, locale),
    alternates: {
      canonical: `/${locale}/contact/`,
      languages: { en: "/en/contact/", bn: "/bn/contact/" },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const bn = locale === "bn";

  const categories = [
    {
      title: bn ? "ব্যবসায়িক পত্রালাপ" : "Business correspondence",
      body: bn
        ? "বাণিজ্যিক প্রস্তাব, দীর্ঘমেয়াদি সহযোগিতা ও প্রাতিষ্ঠানিক সম্পর্ক।"
        : "Commercial proposals, long-term collaboration, and institutional relationships.",
    },
    {
      title: bn ? "গণমাধ্যম জিজ্ঞাসা" : "Media enquiries",
      body: bn
        ? "সাক্ষাৎকার, প্রোফাইল ও যাচাইকৃত তথ্যের অনুরোধ।"
        : "Interviews, profiles, and requests for verified information.",
    },
    {
      title: bn ? "উদ্যোগ-সংক্রান্ত জিজ্ঞাসা" : "Venture enquiries",
      body: bn
        ? "Computer Zone, OushodhOS ও OYSHE AI সম্পর্কিত যোগাযোগ।"
        : "Communication regarding Computer Zone, OushodhOS, and OYSHE AI.",
    },
    {
      title: bn ? "প্রাতিষ্ঠানিক যোগাযোগ" : "Institutional communication",
      body: bn
        ? "সংগঠন, শিক্ষাপ্রতিষ্ঠান ও নীতিগত ফোরামের আমন্ত্রণ।"
        : "Invitations from organisations, academic institutions, and policy forums.",
    },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          locale,
          path: `/${locale}/contact/`,
          title: t(pageMeta.contact.title, locale),
          description: t(pageMeta.contact.description, locale),
          breadcrumbs: [
            { name: "Krishna Kanta", path: `/${locale}/` },
            { name: bn ? "যোগাযোগ" : "Contact", path: `/${locale}/contact/` },
          ],
        })}
      />

      <PageIntro
        locale={locale}
        eyebrow={bn ? "যোগাযোগ" : "Correspondence"}
        title={bn ? "দপ্তরের সঙ্গে যোগাযোগ" : "Contact the Office"}
        lede={
          bn
            ? "এই দপ্তর নির্বাচিত পত্রালাপের উত্তর দেয়। আপনার বার্তার ধরন অনুযায়ী নিচের শ্রেণিগুলো থেকে বেছে নিন।"
            : "This office responds to selected correspondence. Choose the category that matches the nature of your message."
        }
      />

      <section className="bg-charcoal py-24 sm:py-28">
        <div className="mx-auto max-w-wide px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ul className="space-y-8" role="list">
                {categories.map((cat) => (
                  <li key={cat.title} className="border-l border-gold/40 pl-6">
                    <h2 className="font-display text-xl font-medium text-ivory">{cat.title}</h2>
                    <p className="mt-2 text-sm leading-[1.8] text-ivory/65">{cat.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-7">
              <ContactForm locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
