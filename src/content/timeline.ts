import type { TimelineEntry } from "@/lib/types";

/**
 * The business journey timeline.
 *
 * Entries deliberately carry NO years — verified dates have not yet been
 * supplied. Add `year` or `date` only when a documented source exists,
 * then move the record to `verificationStatus: "verified"`.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "tl-early-instinct",
    slug: "early-commercial-instinct",
    title: { en: "Early Commercial Instinct", bn: "শুরুর ব্যবসায়িক বোধ" },
    summary: {
      en: "Before any company carried his name, he was already studying how markets behave — what people need, whom they trust, and when a demand quietly becomes an opportunity.",
      bn: "কোনো প্রতিষ্ঠান তাঁর নাম বহন করার আগেই তিনি বাজারের আচরণ পড়তে শিখছিলেন — মানুষের কী প্রয়োজন, তারা কাকে বিশ্বাস করে, এবং কখন একটি চাহিদা নিঃশব্দে সুযোগে পরিণত হয়।",
    },
    phase: { en: "The Early Years", bn: "শুরুর অধ্যায়" },
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "tl-building-trust",
    slug: "building-trust-in-the-market",
    title: { en: "Building Trust in the Market", bn: "বাজারে আস্থা অর্জন" },
    summary: {
      en: "His early reputation was built the slow way — by keeping his word, honouring commitments, and treating trust as capital that must never be spent carelessly.",
      bn: "তাঁর প্রথম দিকের সুনাম গড়ে উঠেছিল ধীর পথে — কথা রাখার মধ্য দিয়ে, প্রতিশ্রুতি রক্ষার মধ্য দিয়ে, এবং বিশ্বাসকে এমন এক পুঁজি হিসেবে দেখার মধ্য দিয়ে, যা কখনো অসতর্কভাবে খরচ করা যায় না।",
    },
    phase: { en: "Foundations", bn: "ভিত্তি নির্মাণ" },
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "tl-computer-zone",
    slug: "the-growth-of-computer-zone",
    title: { en: "The Growth of Computer Zone", bn: "Computer Zone-এর বিকাশ" },
    summary: {
      en: "Computer Zone became a central chapter in his commercial journey and public business identity. Its verified history and milestones will be added from the editorial archive.",
      bn: "Computer Zone তাঁর বাণিজ্যিক যাত্রা ও প্রকাশ্য ব্যবসায়িক পরিচয়ের এক কেন্দ্রীয় অধ্যায় হয়ে ওঠে। এর যাচাইকৃত ইতিহাস ও মাইলফলক সম্পাদকীয় আর্কাইভ থেকে যুক্ত করা হবে।",
    },
    phase: { en: "The Institution", bn: "প্রতিষ্ঠান গড়া" },
    ventureIds: ["computer-zone"],
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "tl-people",
    slug: "recognising-and-developing-people",
    title: { en: "Recognising and Developing People", bn: "মানুষ চেনা ও গড়ে তোলা" },
    summary: {
      en: "He learned to see capability before it carried a title — giving responsibility, room, and trust to people whose potential had not yet become obvious to others.",
      bn: "পদবি পাওয়ার আগেই তিনি সামর্থ্য দেখতে শিখেছিলেন — এমন মানুষদের দায়িত্ব, পরিসর ও বিশ্বাস দিয়েছেন, যাঁদের সম্ভাবনা তখনো অন্যদের চোখে স্পষ্ট হয়নি।",
    },
    phase: { en: "Leadership", bn: "নেতৃত্ব" },
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "tl-technology",
    slug: "entering-technology-led-ventures",
    title: { en: "Entering Technology-Led Ventures", bn: "প্রযুক্তিনির্ভর উদ্যোগে প্রবেশ" },
    summary: {
      en: "Recognising that established business experience and emerging technology must eventually converge, he moved early into technology-led ventures such as OushodhOS and OYSHE AI.",
      bn: "প্রথাগত ব্যবসার অভিজ্ঞতা আর নতুন প্রযুক্তি একদিন মিলিত হবেই — এই উপলব্ধি থেকে তিনি আগেভাগেই OushodhOS ও OYSHE AI-এর মতো প্রযুক্তিনির্ভর উদ্যোগে পা রাখেন।",
    },
    phase: { en: "The Technology Chapter", bn: "প্রযুক্তির অধ্যায়" },
    ventureIds: ["oushodhos", "oyshe-ai"],
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "tl-next-generation",
    slug: "building-for-the-next-generation",
    title: { en: "Building for the Next Generation", bn: "পরবর্তী প্রজন্মের জন্য নির্মাণ" },
    summary: {
      en: "His present direction is institutional: building ventures, relationships, and people that can continue beyond any single founder — a legacy measured in continuity, not attention.",
      bn: "তাঁর বর্তমান অভিমুখ প্রাতিষ্ঠানিক: এমন উদ্যোগ, সম্পর্ক ও মানুষ গড়ে তোলা, যা কোনো একক প্রতিষ্ঠাতার পরেও এগিয়ে যেতে পারে — এমন উত্তরাধিকার, যার মাপকাঠি আলোচনায় নয়, ধারাবাহিকতায়।",
    },
    phase: { en: "Legacy in Progress", bn: "নির্মীয়মাণ উত্তরাধিকার" },
    verificationStatus: "editorial",
    isPublic: true,
  },
];

export const publicTimeline = timeline.filter(
  (entry) => entry.isPublic && entry.verificationStatus !== "private",
);
