import type { FounderProfile } from "@/lib/types";

/**
 * The founder profile record. Only verified or clearly editorial fields.
 * The Bengali form of the name is intentionally absent until an official
 * spelling is supplied — never translate the name without one.
 */
export const founder: FounderProfile = {
  name: "Krishna Kanta",
  descriptors: [
    { en: "Founder", bn: "প্রতিষ্ঠাতা" },
    { en: "Business Leader", bn: "ব্যবসায়িক নেতা" },
    { en: "Chairman", bn: "চেয়ারম্যান" },
    { en: "Entrepreneur", bn: "উদ্যোক্তা" },
    { en: "Builder of People", bn: "মানুষ গড়ার কারিগর" },
    { en: "Early Believer in Technology", bn: "প্রযুক্তিতে আগাম আস্থাশীল" },
    { en: "Long-Term Institution Builder", bn: "দীর্ঘমেয়াদি প্রতিষ্ঠান নির্মাতা" },
  ],
  country: { en: "Bangladesh", bn: "বাংলাদেশ" },
  summary: {
    en: "Krishna Kanta is a Bangladeshi entrepreneur and business leader whose journey has been shaped by commercial instinct, trusted relationships, long-term thinking, and an early belief in technology-led enterprise.",
    bn: "Krishna Kanta একজন বাংলাদেশি উদ্যোক্তা ও ব্যবসায়িক নেতা, যাঁর যাত্রা গড়ে উঠেছে ব্যবসায়িক বোধ, আস্থার সম্পর্ক, দীর্ঘমেয়াদি চিন্তা এবং প্রযুক্তিনির্ভর উদ্যোগের প্রতি আগাম বিশ্বাসের ওপর।",
  },
  positioning: {
    en: "He did not begin thinking like a founder after success arrived. His success grew from the way he had already learned to observe markets, understand people, recognise practical value, and act with conviction.",
    bn: "সাফল্য আসার পরে তিনি প্রতিষ্ঠাতার মতো ভাবতে শেখেননি। বাজার পর্যবেক্ষণ, মানুষকে বোঝা, বাস্তব মূল্য চিনে নেওয়া এবং দৃঢ়তার সঙ্গে পদক্ষেপ নেওয়া — আগে থেকে শিখে নেওয়া এই অভ্যাস থেকেই তাঁর সাফল্য জন্ম নিয়েছে।",
  },
  legacySummary: {
    en: "His influence extends beyond the ventures associated with his name. It can also be seen in the people whose abilities he recognised and whose growth he supported.",
    bn: "তাঁর প্রভাব কেবল তাঁর নামের সঙ্গে যুক্ত উদ্যোগগুলোর মধ্যে সীমাবদ্ধ নয়। যাঁদের সামর্থ্য তিনি চিনে নিয়েছেন এবং যাঁদের বেড়ে ওঠায় পাশে থেকেছেন, সেই মানুষগুলোর মধ্যেও তা দৃশ্যমান।",
  },
  portrait: {
    src: "/images/placeholder-hero-portrait.svg",
    alt: {
      en: "Editorial placeholder reserved for the verified portrait of Krishna Kanta",
      bn: "Krishna Kanta-র যাচাইকৃত প্রতিকৃতির জন্য সংরক্ষিত সম্পাদকীয় স্থানচিত্র",
    },
    width: 1200,
    height: 1500,
    focalX: 0.5,
    focalY: 0.35,
    treatment: "mono",
    isPlaceholder: true,
    placeholderKind: "hero-portrait",
  },
  officePortrait: {
    src: "/images/placeholder-office-portrait.svg",
    alt: {
      en: "Editorial placeholder reserved for a formal office portrait of Krishna Kanta",
      bn: "Krishna Kanta-র আনুষ্ঠানিক দাপ্তরিক প্রতিকৃতির জন্য সংরক্ষিত স্থানচিত্র",
    },
    width: 1200,
    height: 1500,
    focalX: 0.5,
    focalY: 0.4,
    treatment: "mono",
    isPlaceholder: true,
    placeholderKind: "office-portrait",
  },
  verificationStatus: "editorial",
};
