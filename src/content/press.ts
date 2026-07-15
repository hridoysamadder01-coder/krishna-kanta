import type { PressRecord } from "@/lib/types";

/**
 * Public record / press archive.
 *
 * ONLY records with verificationStatus "verified" are ever rendered.
 * The pending record below documents the intake format and proves the
 * public filter works — it must remain invisible until verified.
 */
export const pressRecords: PressRecord[] = [
  {
    id: "pr-sample-pending",
    title: {
      en: "Intake template — replace with the first verified record",
      bn: "নমুনা ছক — প্রথম যাচাইকৃত নথি দিয়ে প্রতিস্থাপন করুন",
    },
    summary: {
      en: "This is an internal intake template demonstrating the record format. It is not a real press item and is filtered out of every public view.",
      bn: "এটি নথির কাঠামো দেখানোর অভ্যন্তরীণ নমুনা। এটি প্রকৃত সংবাদ নয় এবং প্রতিটি প্রকাশ্য তালিকা থেকে বাদ থাকে।",
    },
    recordType: "news",
    verificationStatus: "pending",
    archived: false,
  },
];

/** The only list the UI may render. */
export const verifiedPressRecords = pressRecords.filter(
  (r) => r.verificationStatus === "verified",
);

export const pressFilters = [
  { key: "all", label: { en: "All", bn: "সব" } },
  { key: "interview", label: { en: "Interviews", bn: "সাক্ষাৎকার" } },
  { key: "news", label: { en: "News", bn: "সংবাদ" } },
  { key: "announcement", label: { en: "Announcements", bn: "ঘোষণা" } },
  { key: "milestone", label: { en: "Milestones", bn: "মাইলফলক" } },
  { key: "public-appearance", label: { en: "Public Appearances", bn: "প্রকাশ্য উপস্থিতি" } },
] as const;

/** Press-page founder biographies in three lengths. */
export const pressBios = {
  short: {
    en: "Krishna Kanta is a Bangladeshi entrepreneur, founder and chairman whose journey has been shaped by commercial instinct, trusted relationships, long-term thinking, and an early belief in technology-led enterprise. His ventures span established commerce and emerging technology, including Computer Zone, OushodhOS, and OYSHE AI.",
    bn: "Krishna Kanta একজন বাংলাদেশি উদ্যোক্তা, প্রতিষ্ঠাতা ও চেয়ারম্যান, যাঁর যাত্রা গড়ে উঠেছে ব্যবসায়িক বোধ, আস্থার সম্পর্ক, দীর্ঘমেয়াদি চিন্তা এবং প্রযুক্তিনির্ভর উদ্যোগে আগাম বিশ্বাসের ওপর। তাঁর উদ্যোগ প্রতিষ্ঠিত বাণিজ্য থেকে উদীয়মান প্রযুক্তি পর্যন্ত বিস্তৃত — Computer Zone, OushodhOS এবং OYSHE AI তার মধ্যে অন্যতম।",
  },
  medium: {
    en: "Krishna Kanta is a Bangladeshi entrepreneur and business leader known for a founder’s instinct that preceded public recognition: reading markets through timing and observation, protecting trust as operational capital, and recognising capable people before their value became obvious. He is the founder and chairman of Computer Zone, a central chapter in his commercial identity, and leads technology-led ventures including OushodhOS — a pharmacy operating system initiative — and OYSHE AI, an emerging artificial intelligence venture. His present direction is institutional: building ventures, relationships, and people able to continue beyond any single founder.",
    bn: "Krishna Kanta একজন বাংলাদেশি উদ্যোক্তা ও ব্যবসায়িক নেতা, যিনি পরিচিত প্রকাশ্য স্বীকৃতির আগেই গড়ে ওঠা প্রতিষ্ঠাতাসুলভ বোধের জন্য: সময় ও পর্যবেক্ষণ দিয়ে বাজার পড়া, বিশ্বাসকে পরিচালন-পুঁজি হিসেবে রক্ষা করা, এবং কারও মূল্য স্পষ্ট হওয়ার আগেই যোগ্য মানুষ চিনে নেওয়া। তিনি Computer Zone-এর প্রতিষ্ঠাতা ও চেয়ারম্যান — যা তাঁর বাণিজ্যিক পরিচয়ের কেন্দ্রীয় অধ্যায় — এবং নেতৃত্ব দিচ্ছেন প্রযুক্তিনির্ভর উদ্যোগে, যার মধ্যে রয়েছে ফার্মেসি অপারেটিং সিস্টেম উদ্যোগ OushodhOS ও উদীয়মান কৃত্রিম বুদ্ধিমত্তা উদ্যোগ OYSHE AI। তাঁর বর্তমান অভিমুখ প্রাতিষ্ঠানিক: এমন উদ্যোগ, সম্পর্ক ও মানুষ গড়া, যা কোনো একক প্রতিষ্ঠাতার পরেও এগিয়ে যেতে পারে।",
  },
  long: {
    en: "Krishna Kanta is a Bangladeshi entrepreneur, business leader, founder, and chairman. His public identity rests on a simple observation made repeatedly by those who have worked with him: he did not become intelligent after becoming successful — his ability to understand business, timing, people, trust, and opportunity is what created the success. Long before technology began reshaping traditional businesses, he had developed the instinct that defines enduring founders: understanding people, recognising value, protecting trust, and acting before an opportunity became obvious to everyone else. Computer Zone stands as a central chapter in his commercial journey and public business identity, with its verified history being assembled in the editorial archive. His early belief that established business experience and emerging technology must converge led him into technology-led ventures: OushodhOS, a pharmacy operating system initiative transforming pharmacy operations through modern software and intelligent workflows, and OYSHE AI, an emerging artificial intelligence venture connecting machine intelligence with real-world commercial operations. His leadership philosophy treats trust as an operational asset, reputation as compounding capital, and people as the truest form of legacy — a conviction embodied by leaders such as Hridoy Samadder (হৃদয় সমাদ্দার), who entered his organisation as a young employee and emerged as an entrepreneur, AI systems architect, and technology leader.",
    bn: "Krishna Kanta একজন বাংলাদেশি উদ্যোক্তা, ব্যবসায়িক নেতা, প্রতিষ্ঠাতা ও চেয়ারম্যান। তাঁর প্রকাশ্য পরিচয় দাঁড়িয়ে আছে একটি সরল পর্যবেক্ষণের ওপর, যা তাঁর সঙ্গে কাজ করা মানুষেরা বারবার বলেছেন: সফল হওয়ার পরে তিনি বুদ্ধিমান হননি — ব্যবসা, সময়, মানুষ, বিশ্বাস ও সুযোগ বোঝার সামর্থ্যই তাঁর সাফল্য তৈরি করেছে। প্রযুক্তি প্রচলিত ব্যবসাকে বদলে দেওয়ার অনেক আগেই তিনি অর্জন করেছিলেন টেকসই প্রতিষ্ঠাতাদের সেই সহজাত বোধ: মানুষকে বোঝা, মূল্য চিনে নেওয়া, বিশ্বাস রক্ষা করা, এবং সুযোগ সবার চোখে পড়ার আগে পদক্ষেপ নেওয়া। Computer Zone তাঁর বাণিজ্যিক যাত্রা ও প্রকাশ্য ব্যবসায়িক পরিচয়ের কেন্দ্রীয় অধ্যায়; এর যাচাইকৃত ইতিহাস সম্পাদকীয় আর্কাইভে সংকলিত হচ্ছে। প্রথাগত ব্যবসার অভিজ্ঞতা ও উদীয়মান প্রযুক্তি একদিন মিলবেই — এই আগাম বিশ্বাস তাঁকে নিয়ে গেছে প্রযুক্তিনির্ভর উদ্যোগে: আধুনিক সফটওয়্যার ও বুদ্ধিদীপ্ত কর্মপ্রবাহে ফার্মেসি পরিচালনাকে বদলে দেওয়া উদ্যোগ OushodhOS, এবং যন্ত্রবুদ্ধিকে বাস্তব বাণিজ্যিক কার্যক্রমে যুক্ত করা উদীয়মান কৃত্রিম বুদ্ধিমত্তা উদ্যোগ OYSHE AI। তাঁর নেতৃত্ব-দর্শনে বিশ্বাস একটি পরিচালন-সম্পদ, সুনাম চক্রবৃদ্ধি পুঁজি, আর মানুষই উত্তরাধিকারের প্রকৃত রূপ — যে প্রত্যয়ের প্রতিমূর্তি হৃদয় সমাদ্দারের মতো নেতারা, যিনি তরুণ কর্মী হিসেবে তাঁর প্রতিষ্ঠানে যুক্ত হয়ে উদ্যোক্তা, এআই সিস্টেম স্থপতি ও প্রযুক্তি-নেতা হয়ে উঠেছেন।",
  },
} as const;

export const mediaGuidelines = {
  en: [
    "Refer to him as “Krishna Kanta” on first mention; “Mr. Kanta” or “the founder” thereafter.",
    "His verified titles are: Founder, Chairman, Entrepreneur, Business Leader.",
    "In technology-venture contexts, the leadership line is: Krishna Kanta — Founder & Chairman; Hridoy Samadder (হৃদয় সমাদ্দার) — CEO & Chief Architecture Engineer.",
    "Do not attribute quotations to Krishna Kanta unless they appear in this site’s verified public record.",
    "Portrait photographs published on this site may be used for editorial coverage with the credit shown alongside each image.",
    "Company names — Computer Zone, OushodhOS, OYSHE AI — should not be translated or restyled.",
  ],
  bn: [
    "প্রথম উল্লেখে “Krishna Kanta” লিখুন; পরে “জনাব কান্ত” বা “প্রতিষ্ঠাতা” ব্যবহার করা যাবে।",
    "তাঁর স্বীকৃত পরিচয়: প্রতিষ্ঠাতা, চেয়ারম্যান, উদ্যোক্তা, ব্যবসায়িক নেতা।",
    "প্রযুক্তি-উদ্যোগ প্রসঙ্গে নেতৃত্বের বিন্যাস: Krishna Kanta — প্রতিষ্ঠাতা ও চেয়ারম্যান; হৃদয় সমাদ্দার — সিইও ও চিফ আর্কিটেকচার ইঞ্জিনিয়ার।",
    "এই সাইটের যাচাইকৃত প্রকাশ্য নথিতে না থাকলে কোনো উক্তি Krishna Kanta-র নামে প্রকাশ করবেন না।",
    "এই সাইটে প্রকাশিত প্রতিকৃতি প্রতিটি ছবির পাশে দেখানো কৃতজ্ঞতা-স্বীকারসহ সংবাদ-প্রয়োজনে ব্যবহার করা যাবে।",
    "প্রতিষ্ঠানের নাম — Computer Zone, OushodhOS, OYSHE AI — অনুবাদ বা রূপান্তর করবেন না।",
  ],
} as const;
