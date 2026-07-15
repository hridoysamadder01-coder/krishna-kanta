import type { LocalisedText } from "@/lib/types";

/**
 * Global site configuration and every bilingual UI string.
 * Page/section copy lives here so components stay free of duplicated text.
 */

export const siteConfig = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://hridoysamadder01-coder.github.io/krishna-kanta").replace(/\/$/, ""),
  brandName: "KRISHNA KANTA",
  personName: "Krishna Kanta",
  pressEmail: process.env.NEXT_PUBLIC_PRESS_EMAIL || "",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "",
};

export type NavItem = { href: string; label: LocalisedText };

export const navItems: NavItem[] = [
  { href: "/story", label: { en: "Story", bn: "জীবনকথা" } },
  { href: "/ventures", label: { en: "Ventures", bn: "উদ্যোগ" } },
  { href: "/philosophy", label: { en: "Philosophy", bn: "দর্শন" } },
  { href: "/archive", label: { en: "Archive", bn: "আর্কাইভ" } },
  { href: "/press", label: { en: "Press", bn: "গণমাধ্যম" } },
];

export const footerNavItems: NavItem[] = [
  ...navItems,
  { href: "/contact", label: { en: "Contact", bn: "যোগাযোগ" } },
  { href: "/privacy", label: { en: "Privacy", bn: "গোপনীয়তা" } },
  { href: "/terms", label: { en: "Terms", bn: "শর্তাবলি" } },
];

export const ui = {
  brandTagline: {
    en: "FOUNDER · BUSINESS LEADER · BANGLADESH",
    bn: "প্রতিষ্ঠাতা · ব্যবসায়িক নেতা · বাংলাদেশ",
  },
  skipToContent: { en: "Skip to content", bn: "মূল লেখায় যান" },
  openMenu: { en: "Open menu", bn: "মেনু খুলুন" },
  closeMenu: { en: "Close menu", bn: "মেনু বন্ধ করুন" },
  mainNavigation: { en: "Main navigation", bn: "প্রধান নেভিগেশন" },
  exploreJourney: { en: "Explore His Journey", bn: "তাঁর যাত্রা ঘুরে দেখুন" },
  viewVentures: { en: "View His Ventures", bn: "উদ্যোগগুলো দেখুন" },
  readFullStory: { en: "Read the Full Story", bn: "পুরো গল্পটি পড়ুন" },
  readFounderStory: { en: "Read the Founder Story", bn: "প্রতিষ্ঠাতার গল্প পড়ুন" },
  exploreAllVentures: { en: "Explore All Ventures", bn: "সব উদ্যোগ দেখুন" },
  readLeadershipStory: { en: "Read the Leadership Story", bn: "নেতৃত্বের গল্পটি পড়ুন" },
  enterArchive: { en: "Enter the Archive", bn: "আর্কাইভে প্রবেশ করুন" },
  viewVenture: { en: "View the Venture", bn: "উদ্যোগটি দেখুন" },
  readRecord: { en: "Read the Record", bn: "নথিটি পড়ুন" },
  discoverPhilosophy: { en: "Discover His Philosophy", bn: "তাঁর দর্শন জানুন" },
  continueStory: { en: "Continue the Story", bn: "গল্পটি এগিয়ে নিন" },
  heroCue: {
    en: "A living record of business, leadership, people, and legacy.",
    bn: "ব্যবসা, নেতৃত্ব, মানুষ ও উত্তরাধিকারের এক জীবন্ত দলিল।",
  },
  footerClosing: {
    en: "An official digital record of business, leadership, people, and legacy.",
    bn: "ব্যবসা, নেতৃত্ব, মানুষ ও উত্তরাধিকারের একটি দাপ্তরিক ডিজিটাল দলিল।",
  },
  verifiedLabel: { en: "Verified record", bn: "যাচাইকৃত নথি" },
  editorialLabel: { en: "Editorial narration", bn: "সম্পাদকীয় বিবরণ" },
  principlesLabel: { en: "Principles", bn: "নীতিমালা" },
  sourceLabel: { en: "Source", bn: "সূত্র" },
  archiveEmptyState: {
    en: "The public archive is being assembled from verified records.",
    bn: "যাচাইকৃত নথি থেকে প্রকাশ্য আর্কাইভটি গুছিয়ে তোলা হচ্ছে।",
  },
  placeholderFrameNote: {
    en: "Awaiting a verified photograph from the family archive.",
    bn: "পারিবারিক সংগ্রহ থেকে যাচাইকৃত আলোকচিত্রের অপেক্ষায়।",
  },
  pressEmptyState: {
    en: "The public archive is being assembled from verified records.",
    bn: "যাচাইকৃত নথি থেকে প্রকাশ্য আর্কাইভটি গুছিয়ে তোলা হচ্ছে।",
  },
  pressContactPending: {
    en: "Official media contact information will be published after verification.",
    bn: "যাচাই সম্পন্ন হওয়ার পর দাপ্তরিক গণমাধ্যম-যোগাযোগের তথ্য প্রকাশ করা হবে।",
  },
  notFoundTitle: { en: "This page is not part of the record.", bn: "এই পাতাটি নথিভুক্ত নয়।" },
  notFoundBody: {
    en: "The page you were looking for does not exist in this archive. Return to the beginning of the record.",
    bn: "আপনি যে পাতাটি খুঁজছিলেন তা এই আর্কাইভে নেই। নথির শুরুতে ফিরে যান।",
  },
  backHome: { en: "Return to the Record", bn: "মূল পাতায় ফিরুন" },
  filterAll: { en: "All", bn: "সব" },
  closeLabel: { en: "Close", bn: "বন্ধ করুন" },
  previousLabel: { en: "Previous", bn: "আগেরটি" },
  nextLabel: { en: "Next", bn: "পরেরটি" },
  languageSwitchLabel: { en: "Language", bn: "ভাষা" },
} as const;

export const home = {
  heroEyebrow: ui.brandTagline,
  heroStatement: {
    en: "He understood business before business became fashionable.",
    bn: "ব্যবসা জনপ্রিয় হওয়ার আগেই তিনি ব্যবসাকে বুঝেছিলেন।",
  },
  heroSupport: {
    en: "A Bangladeshi entrepreneur and business leader whose journey has been shaped by commercial instinct, enduring trust, an ability to recognise capable people, and an early belief in technology-led enterprise.",
    bn: "একজন বাংলাদেশি উদ্যোক্তা ও ব্যবসায়িক নেতা, যাঁর যাত্রা গড়ে উঠেছে বাজার বোঝার স্বাভাবিক ক্ষমতা, দীর্ঘস্থায়ী বিশ্বাস, মানুষ চিনতে পারার দৃষ্টি এবং প্রযুক্তিনির্ভর ভবিষ্যতের প্রতি আগাম আস্থার ওপর।",
  },
  introHeadline: {
    en: "Success did not teach him how to think. The way he thought created the success.",
    bn: "সাফল্য তাঁকে ভাবতে শেখায়নি। তাঁর ভাবনার ধরনই সাফল্য তৈরি করেছে।",
  },
  introBody1: {
    en: "Long before technology began reshaping traditional businesses, Krishna Kanta had already developed the instinct that defines enduring founders: understanding people, recognising value, protecting trust, and acting before an opportunity became obvious to everyone else.",
    bn: "প্রযুক্তি প্রচলিত ব্যবসাকে বদলে দিতে শুরু করার অনেক আগেই Krishna Kanta সেই সহজাত বোধ অর্জন করেছিলেন, যা টেকসই প্রতিষ্ঠাতাদের আলাদা করে চেনায়: মানুষকে বোঝা, মূল্য চিনে নেওয়া, বিশ্বাস রক্ষা করা, এবং সুযোগ সবার চোখে পড়ার আগেই পদক্ষেপ নেওয়া।",
  },
  introBody2: {
    en: "His story is not built around spectacle. It is built around decisions, relationships, resilience, and the ability to see practical possibilities where others saw only uncertainty.",
    bn: "তাঁর গল্প চমক দিয়ে গড়া নয়। এটি গড়ে উঠেছে সিদ্ধান্ত, সম্পর্ক, অধ্যবসায় এবং সেই দৃষ্টি দিয়ে — যেখানে অন্যরা কেবল অনিশ্চয়তা দেখেছেন, সেখানে তিনি দেখেছেন বাস্তব সম্ভাবনা।",
  },
  intelligenceTitle: {
    en: "The Intelligence Behind the Founder",
    bn: "প্রতিষ্ঠাতার ভেতরের বুদ্ধিমত্তা",
  },
  journeyTitle: { en: "A Journey Built Through Decisions", bn: "সিদ্ধান্তে গড়া এক যাত্রা" },
  venturesTitle: { en: "Ventures and Institutions", bn: "উদ্যোগ ও প্রতিষ্ঠান" },
  venturesIntro: {
    en: "Each venture represents a different chapter, but the underlying principles remain consistent: commercial clarity, trusted relationships, operational discipline, and a willingness to invest in the future.",
    bn: "প্রতিটি উদ্যোগ ভিন্ন এক অধ্যায়, কিন্তু ভিত্তির নীতিগুলো একই: বাণিজ্যিক স্বচ্ছতা, আস্থার সম্পর্ক, পরিচালনার শৃঙ্খলা এবং ভবিষ্যতে বিনিয়োগের সাহস।",
  },
  philosophyTitle: { en: "Leadership Beyond Ownership", bn: "মালিকানার ঊর্ধ্বে নেতৃত্ব" },
  philosophyBody: {
    en: "Business is not merely the movement of products and money. It is the ability to understand timing, earn trust, recognise capable people, and build something that can continue beyond the founder.",
    bn: "ব্যবসা কেবল পণ্য আর অর্থের চলাচল নয়। এটি সময় বোঝার, বিশ্বাস অর্জনের, যোগ্য মানুষ চিনে নেওয়ার এবং প্রতিষ্ঠাতার পরেও টিকে থাকতে পারে এমন কিছু গড়ে তোলার সামর্থ্য।",
  },
  legacyTitle: {
    en: "A Founder’s Legacy Also Lives in People",
    bn: "প্রতিষ্ঠাতার উত্তরাধিকার বেঁচে থাকে মানুষের মধ্যেও",
  },
  archiveTitle: { en: "A Life in Frames", bn: "ফ্রেমে বাঁধা এক জীবন" },
  pressTitle: { en: "Public Record", bn: "প্রকাশ্য নথি" },
  pressIntro: {
    en: "A curated record of verified interviews, announcements, company milestones, public appearances, and media coverage.",
    bn: "যাচাইকৃত সাক্ষাৎকার, ঘোষণা, প্রাতিষ্ঠানিক মাইলফলক, প্রকাশ্য উপস্থিতি ও গণমাধ্যম-সংবাদের একটি নির্বাচিত সংকলন।",
  },
  finalStatement: {
    en: "Some people enter business. Some people are born understanding it.",
    bn: "কেউ কেউ ব্যবসায় প্রবেশ করেন। কেউ কেউ ব্যবসা বোঝার ক্ষমতা নিয়েই জন্মান।",
  },
  finalName: { en: "KRISHNA KANTA", bn: "KRISHNA KANTA" },
  finalCountry: { en: "Bangladesh", bn: "বাংলাদেশ" },
} as const;

export const pageMeta = {
  home: {
    title: {
      en: "Krishna Kanta — Founder · Business Leader · Bangladesh",
      bn: "Krishna Kanta — প্রতিষ্ঠাতা · ব্যবসায়িক নেতা · বাংলাদেশ",
    },
    description: {
      en: "The official website of Krishna Kanta, a Bangladeshi entrepreneur, founder and chairman — a record of business instinct, leadership, people, and legacy.",
      bn: "Krishna Kanta-র দাপ্তরিক ওয়েবসাইট — একজন বাংলাদেশি উদ্যোক্তা, প্রতিষ্ঠাতা ও চেয়ারম্যানের ব্যবসায়িক বোধ, নেতৃত্ব, মানুষ ও উত্তরাধিকারের দলিল।",
    },
  },
  story: {
    title: { en: "The Making of a Founder — Krishna Kanta", bn: "একজন প্রতিষ্ঠাতার নির্মাণ — Krishna Kanta" },
    description: {
      en: "The long-form biography of Krishna Kanta: early instinct, market learning, trust, Computer Zone, leadership, and technology-led ventures.",
      bn: "Krishna Kanta-র পূর্ণাঙ্গ জীবনকথা: শুরুর বোধ, বাজার শেখা, বিশ্বাস, Computer Zone, নেতৃত্ব ও প্রযুক্তিনির্ভর উদ্যোগ।",
    },
  },
  ventures: {
    title: { en: "Ventures and Institutions — Krishna Kanta", bn: "উদ্যোগ ও প্রতিষ্ঠান — Krishna Kanta" },
    description: {
      en: "The ventures and institutions associated with Krishna Kanta — Computer Zone, OushodhOS, OYSHE AI — and the principles behind them.",
      bn: "Krishna Kanta-র সঙ্গে যুক্ত উদ্যোগ ও প্রতিষ্ঠান — Computer Zone, OushodhOS, OYSHE AI — এবং সেগুলোর পেছনের নীতিমালা।",
    },
  },
  philosophy: {
    title: { en: "How He Thinks — Krishna Kanta", bn: "তিনি যেভাবে ভাবেন — Krishna Kanta" },
    description: {
      en: "The leadership philosophy of Krishna Kanta: timing, trust, people, discipline, technology, and continuity.",
      bn: "Krishna Kanta-র নেতৃত্ব-দর্শন: সময়জ্ঞান, বিশ্বাস, মানুষ, শৃঙ্খলা, প্রযুক্তি ও ধারাবাহিকতা।",
    },
  },
  archive: {
    title: { en: "The Archive — Krishna Kanta", bn: "আর্কাইভ — Krishna Kanta" },
    description: {
      en: "A curated archive of photographs, documents, milestones, and public records from the life and work of Krishna Kanta.",
      bn: "Krishna Kanta-র জীবন ও কর্ম থেকে আলোকচিত্র, দলিল, মাইলফলক ও প্রকাশ্য নথির নির্বাচিত আর্কাইভ।",
    },
  },
  press: {
    title: { en: "Press and Media — Krishna Kanta", bn: "গণমাধ্যম — Krishna Kanta" },
    description: {
      en: "Official press resources for Krishna Kanta: biography in three lengths, name and title formatting, media guidelines, and public records.",
      bn: "Krishna Kanta সম্পর্কিত দাপ্তরিক প্রেস-সহায়িকা: তিন দৈর্ঘ্যের জীবনী, নাম ও পদবির বিন্যাস, গণমাধ্যম নির্দেশিকা ও প্রকাশ্য নথি।",
    },
  },
  contact: {
    title: { en: "Contact — Krishna Kanta", bn: "যোগাযোগ — Krishna Kanta" },
    description: {
      en: "Business correspondence, media enquiries, venture enquiries, and institutional communication with the office of Krishna Kanta.",
      bn: "Krishna Kanta-র দপ্তরের সঙ্গে ব্যবসায়িক পত্রালাপ, গণমাধ্যম জিজ্ঞাসা, উদ্যোগ-সংক্রান্ত জিজ্ঞাসা ও প্রাতিষ্ঠানিক যোগাযোগ।",
    },
  },
  privacy: {
    title: { en: "Privacy — Krishna Kanta", bn: "গোপনীয়তা — Krishna Kanta" },
    description: {
      en: "Privacy policy of the official Krishna Kanta website.",
      bn: "Krishna Kanta-র দাপ্তরিক ওয়েবসাইটের গোপনীয়তা নীতি।",
    },
  },
  terms: {
    title: { en: "Terms — Krishna Kanta", bn: "শর্তাবলি — Krishna Kanta" },
    description: {
      en: "Terms of use of the official Krishna Kanta website.",
      bn: "Krishna Kanta-র দাপ্তরিক ওয়েবসাইট ব্যবহারের শর্তাবলি।",
    },
  },
} as const;
