import type { Principle } from "@/lib/types";

/**
 * Founder intelligence panels (homepage) and the philosophy page sections.
 * All entries are documented principles or editorial synthesis — never
 * styled or presented as direct quotations.
 */

export const intelligencePanels: Principle[] = [
  {
    id: "int-market",
    title: { en: "Market Instinct", bn: "বাজারবোধ" },
    text: {
      en: "He reads commercial reality through timing, behaviour, demand, and practical observation.",
      bn: "সময়, আচরণ, চাহিদা ও বাস্তব পর্যবেক্ষণের মধ্য দিয়ে তিনি বাণিজ্যিক বাস্তবতা পড়ে নেন।",
    },
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "int-people",
    title: { en: "People Intelligence", bn: "মানুষ চেনার দৃষ্টি" },
    text: {
      en: "He recognises capability in people before titles, reputation, or public success make that capability obvious.",
      bn: "পদবি, পরিচিতি বা প্রকাশ্য সাফল্য কারও সামর্থ্যকে স্পষ্ট করে তোলার আগেই তিনি তা চিনে নেন।",
    },
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "int-longterm",
    title: { en: "Long-Term Thinking", bn: "দীর্ঘমেয়াদি চিন্তা" },
    text: {
      en: "He values reputation, relationships, and durable institutions more than temporary attention.",
      bn: "সাময়িক আলোচনার চেয়ে সুনাম, সম্পর্ক ও টেকসই প্রতিষ্ঠানকেই তিনি বেশি মূল্য দেন।",
    },
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "int-technology",
    title: { en: "Technology Foresight", bn: "প্রযুক্তির দূরদৃষ্টি" },
    text: {
      en: "He understands that established business experience and emerging technology are not opposing worlds. Together, they create the next generation of enterprise.",
      bn: "তিনি জানেন, প্রথাগত ব্যবসার অভিজ্ঞতা আর উদীয়মান প্রযুক্তি পরস্পরের প্রতিপক্ষ নয়। দুইয়ে মিলেই গড়ে ওঠে পরবর্তী প্রজন্মের উদ্যোগ।",
    },
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
];

export const leadershipThemes: Principle[] = [
  {
    id: "pr-trust-asset",
    title: { en: "Trust is an operational asset", bn: "বিশ্বাস একটি পরিচালন-সম্পদ" },
    text: {
      en: "Trust is an operational asset.",
      bn: "বিশ্বাস একটি পরিচালন-সম্পদ।",
    },
    voice: "documented-principle",
    verificationStatus: "editorial",
  },
  {
    id: "pr-reputation",
    title: { en: "Reputation compounds over time", bn: "সুনাম সময়ের সঙ্গে চক্রবৃদ্ধি হারে বাড়ে" },
    text: {
      en: "Reputation compounds over time.",
      bn: "সুনাম সময়ের সঙ্গে চক্রবৃদ্ধি হারে বাড়ে।",
    },
    voice: "documented-principle",
    verificationStatus: "editorial",
  },
  {
    id: "pr-people-room",
    title: { en: "Capable people deserve room to grow", bn: "যোগ্য মানুষের প্রাপ্য বেড়ে ওঠার পরিসর" },
    text: {
      en: "Capable people deserve room to grow.",
      bn: "যোগ্য মানুষের প্রাপ্য বেড়ে ওঠার পরিসর।",
    },
    voice: "documented-principle",
    verificationStatus: "editorial",
  },
  {
    id: "pr-tech-practical",
    title: { en: "Technology must solve practical problems", bn: "প্রযুক্তিকে বাস্তব সমস্যার সমাধান করতে হবে" },
    text: {
      en: "Technology must solve practical problems.",
      bn: "প্রযুক্তিকে বাস্তব সমস্যার সমাধান করতে হবে।",
    },
    voice: "documented-principle",
    verificationStatus: "editorial",
  },
  {
    id: "pr-future-leaders",
    title: { en: "Leadership should create future leaders", bn: "নেতৃত্বের কাজ ভবিষ্যতের নেতা তৈরি করা" },
    text: {
      en: "Leadership should create future leaders.",
      bn: "নেতৃত্বের কাজ ভবিষ্যতের নেতা তৈরি করা।",
    },
    voice: "documented-principle",
    verificationStatus: "editorial",
  },
];

export type PhilosophySection = {
  id: string;
  title: { en: string; bn: string };
  principle: { en: string; bn: string };
  interpretation: { en: string; bn: string };
  relatedTimelineId?: string;
};

export const philosophySections: PhilosophySection[] = [
  {
    id: "ph-timing",
    title: { en: "Timing", bn: "সময়জ্ঞান" },
    principle: {
      en: "An opportunity is most valuable in the quiet moment before everyone agrees it exists.",
      bn: "সবার চোখে ধরা পড়ার আগের নীরব মুহূর্তেই একটি সুযোগ সবচেয়ে মূল্যবান।",
    },
    interpretation: {
      en: "His decisions have tended to precede consensus, not follow it — entering markets and technologies while they were still being dismissed as uncertain.",
      bn: "তাঁর সিদ্ধান্ত সাধারণত সর্বসম্মতির পেছনে নয়, আগে হেঁটেছে — যখন কোনো বাজার বা প্রযুক্তিকে এখনো অনিশ্চিত বলে পাশ কাটানো হচ্ছে, তখনই তিনি সেখানে প্রবেশ করেছেন।",
    },
    relatedTimelineId: "tl-early-instinct",
  },
  {
    id: "ph-trust",
    title: { en: "Trust", bn: "বিশ্বাস" },
    principle: {
      en: "Trust is slow to build, quick to lose, and impossible to fake for long.",
      bn: "বিশ্বাস গড়তে সময় লাগে, হারাতে লাগে মুহূর্ত, আর দীর্ঘদিন অভিনয় করে টিকিয়ে রাখা অসম্ভব।",
    },
    interpretation: {
      en: "Long-term relationships — with customers, suppliers, and people — have been the recurring infrastructure beneath every venture associated with his name.",
      bn: "ক্রেতা, সরবরাহকারী ও মানুষের সঙ্গে দীর্ঘমেয়াদি সম্পর্কই তাঁর নামের সঙ্গে যুক্ত প্রতিটি উদ্যোগের নিচে বারবার ফিরে আসা অবকাঠামো।",
    },
    relatedTimelineId: "tl-building-trust",
  },
  {
    id: "ph-people",
    title: { en: "People", bn: "মানুষ" },
    principle: {
      en: "Ability appears before status. The leader’s task is to see it early and give it room.",
      bn: "সামর্থ্য আসে পদমর্যাদার আগে। নেতার কাজ তা আগে দেখা এবং তাকে পরিসর দেওয়া।",
    },
    interpretation: {
      en: "The clearest evidence of this principle is the people who entered his organisations young and grew into builders and leaders themselves.",
      bn: "এই নীতির সবচেয়ে স্পষ্ট প্রমাণ সেই মানুষেরা, যাঁরা অল্প বয়সে তাঁর প্রতিষ্ঠানে যুক্ত হয়ে নিজেরাই নির্মাতা ও নেতা হয়ে উঠেছেন।",
    },
    relatedTimelineId: "tl-people",
  },
  {
    id: "ph-discipline",
    title: { en: "Discipline", bn: "শৃঙ্খলা" },
    principle: {
      en: "A business survives on discipline in the years when attention is elsewhere.",
      bn: "যে বছরগুলোতে কারও নজর থাকে না, সেই বছরগুলোতে ব্যবসা টিকে থাকে শৃঙ্খলার জোরে।",
    },
    interpretation: {
      en: "Operational discipline — in commitments, in quality, in money — is treated not as bureaucracy but as the daily form of respect for the customer.",
      bn: "প্রতিশ্রুতি, মান ও অর্থে পরিচালনগত শৃঙ্খলা তাঁর কাছে আমলাতন্ত্র নয় — ক্রেতার প্রতি প্রতিদিনের সম্মান প্রদর্শনের রূপ।",
    },
    relatedTimelineId: "tl-computer-zone",
  },
  {
    id: "ph-technology",
    title: { en: "Technology", bn: "প্রযুক্তি" },
    principle: {
      en: "Technology is not a fashion. It is the next form of the same old promise: serve people better.",
      bn: "প্রযুক্তি কোনো হুজুগ নয়। এটি সেই পুরোনো প্রতিশ্রুতিরই পরবর্তী রূপ: মানুষকে আরও ভালোভাবে সেবা দেওয়া।",
    },
    interpretation: {
      en: "His technology ventures apply machine intelligence and modern software to practical commercial problems — not to spectacle.",
      bn: "তাঁর প্রযুক্তি-উদ্যোগগুলো যন্ত্রবুদ্ধি ও আধুনিক সফটওয়্যারকে কাজে লাগায় বাস্তব বাণিজ্যিক সমস্যায় — চমকে নয়।",
    },
    relatedTimelineId: "tl-technology",
  },
  {
    id: "ph-continuity",
    title: { en: "Continuity", bn: "ধারাবাহিকতা" },
    principle: {
      en: "The real measure of a founder is what continues working after he steps out of the room.",
      bn: "একজন প্রতিষ্ঠাতার আসল মাপকাঠি হলো — তিনি ঘর থেকে বেরিয়ে যাওয়ার পরও কী কাজ করে চলে।",
    },
    interpretation: {
      en: "Institutions, relationships, and people prepared to lead — continuity is the deliberate design goal behind his present direction.",
      bn: "প্রতিষ্ঠান, সম্পর্ক এবং নেতৃত্বের জন্য প্রস্তুত মানুষ — ধারাবাহিকতাই তাঁর বর্তমান অভিমুখের সুচিন্তিত নকশা।",
    },
    relatedTimelineId: "tl-next-generation",
  },
];
