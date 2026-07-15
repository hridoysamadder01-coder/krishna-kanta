import type { Venture } from "@/lib/types";

/**
 * Venture records. Founding years, locations, and legal details are
 * intentionally absent until verified documentation is supplied.
 * Add new ventures by appending a record — the UI renders from data.
 */
export const ventures: Venture[] = [
  {
    id: "computer-zone",
    slug: "computer-zone",
    name: "Computer Zone",
    category: { en: "Established Business", bn: "প্রতিষ্ঠিত ব্যবসা" },
    categoryKey: "established-business",
    founderRole: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
    leadership: [
      {
        personName: { en: "Krishna Kanta", bn: "Krishna Kanta" },
        roleTitle: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
        verificationStatus: "editorial",
      },
    ],
    description: {
      en: "A central chapter in Krishna Kanta’s commercial journey and public business identity. The full verified company history, milestones, and records will be added through the editorial archive.",
      bn: "Krishna Kanta-র বাণিজ্যিক যাত্রা ও প্রকাশ্য ব্যবসায়িক পরিচয়ের এক কেন্দ্রীয় অধ্যায়। প্রতিষ্ঠানটির পূর্ণাঙ্গ যাচাইকৃত ইতিহাস, মাইলফলক ও নথি সম্পাদকীয় আর্কাইভের মাধ্যমে যুক্ত করা হবে।",
    },
    status: "established",
    verificationStatus: "editorial",
    image: {
      src: "/images/placeholder-venture-czone.svg",
      alt: {
        en: "Editorial placeholder reserved for a verified Computer Zone photograph",
        bn: "Computer Zone-এর যাচাইকৃত আলোকচিত্রের জন্য সংরক্ষিত স্থানচিত্র",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "archival-business",
    },
    relatedTimelineIds: ["tl-computer-zone"],
    isPublic: true,
    featured: true,
  },
  {
    id: "oushodhos",
    slug: "oushodhos",
    name: "Pharmacy OS / OushodhOS",
    category: { en: "Technology Venture", bn: "প্রযুক্তি উদ্যোগ" },
    categoryKey: "technology",
    founderRole: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
    leadership: [
      {
        personName: { en: "Krishna Kanta", bn: "Krishna Kanta" },
        roleTitle: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
        verificationStatus: "editorial",
      },
      {
        personName: { en: "Hridoy Samadder", bn: "হৃদয় সমাদ্দার" },
        roleTitle: {
          en: "CEO & Chief Architecture Engineer",
          bn: "সিইও ও চিফ আর্কিটেকচার ইঞ্জিনিয়ার",
        },
        verificationStatus: "editorial",
      },
    ],
    description: {
      en: "A technology-led operating system initiative focused on transforming pharmacy operations through modern software, intelligent workflows, and practical business infrastructure.",
      bn: "আধুনিক সফটওয়্যার, বুদ্ধিদীপ্ত কর্মপ্রবাহ ও বাস্তবমুখী ব্যবসায়িক অবকাঠামোর মাধ্যমে ফার্মেসি পরিচালনাকে বদলে দিতে নিবেদিত একটি প্রযুক্তিনির্ভর অপারেটিং সিস্টেম উদ্যোগ।",
    },
    status: "active",
    verificationStatus: "editorial",
    image: {
      src: "/images/placeholder-venture-oushodhos.svg",
      alt: {
        en: "Editorial placeholder reserved for a verified OushodhOS venture image",
        bn: "OushodhOS উদ্যোগের যাচাইকৃত চিত্রের জন্য সংরক্ষিত স্থানচিত্র",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "venture",
    },
    relatedTimelineIds: ["tl-technology"],
    isPublic: true,
    featured: true,
  },
  {
    id: "oyshe-ai",
    slug: "oyshe-ai",
    name: "OYSHE AI",
    category: { en: "Artificial Intelligence Venture", bn: "কৃত্রিম বুদ্ধিমত্তা উদ্যোগ" },
    categoryKey: "ai",
    founderRole: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
    leadership: [
      {
        personName: { en: "Krishna Kanta", bn: "Krishna Kanta" },
        roleTitle: { en: "Founder & Chairman", bn: "প্রতিষ্ঠাতা ও চেয়ারম্যান" },
        verificationStatus: "editorial",
      },
      {
        personName: { en: "Hridoy Samadder", bn: "হৃদয় সমাদ্দার" },
        roleTitle: {
          en: "CEO & Chief Architecture Engineer",
          bn: "সিইও ও চিফ আর্কিটেকচার ইঞ্জিনিয়ার",
        },
        verificationStatus: "editorial",
      },
    ],
    description: {
      en: "An emerging artificial intelligence initiative exploring practical systems that connect machine intelligence with real-world commercial operations.",
      bn: "যন্ত্রবুদ্ধিকে বাস্তব বাণিজ্যিক কার্যক্রমের সঙ্গে যুক্ত করে এমন ব্যবহারিক ব্যবস্থা নিয়ে কাজ করা একটি উদীয়মান কৃত্রিম বুদ্ধিমত্তা উদ্যোগ।",
    },
    status: "emerging",
    verificationStatus: "editorial",
    image: {
      src: "/images/placeholder-venture-oyshe.svg",
      alt: {
        en: "Editorial placeholder reserved for a verified OYSHE AI venture image",
        bn: "OYSHE AI উদ্যোগের যাচাইকৃত চিত্রের জন্য সংরক্ষিত স্থানচিত্র",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "venture",
    },
    relatedTimelineIds: ["tl-technology"],
    isPublic: true,
    featured: true,
  },
];

/** Publicly renderable ventures — never expose private records. */
export const publicVentures = ventures.filter(
  (v) => v.isPublic && v.verificationStatus !== "private",
);
