import type { LeadershipStory, StoryChapter } from "@/lib/types";

/**
 * The long-form biography, written as careful editorial bridges.
 * No dates, childhood anecdotes, family history, or struggle narratives
 * are invented. Verified detail replaces these bridges chapter by chapter.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: "ch-introduction",
    index: 1,
    title: { en: "An Introduction", bn: "সূচনা" },
    paragraphs: [
      {
        en: "Every enduring founder has a story that begins before the record does. The companies, the titles, and the public identity arrive later; the way of thinking arrives first. This biography is written in that order — instinct before institution.",
        bn: "প্রতিটি টেকসই প্রতিষ্ঠাতার গল্প শুরু হয় নথিপত্র শুরু হওয়ার আগে। প্রতিষ্ঠান, পদবি আর প্রকাশ্য পরিচয় আসে পরে; ভাবনার ধরনটি আসে আগে। এই জীবনকথা সেই ক্রমেই লেখা — প্রতিষ্ঠানের আগে বোধ।",
      },
      {
        en: "What follows is a careful record, assembled with restraint. Where verified dates and documents exist, they are cited. Where they are still being gathered, the narrative says so plainly rather than inventing detail.",
        bn: "এখানে যা আছে তা সংযমের সঙ্গে গুছিয়ে তোলা এক সতর্ক দলিল। যেখানে যাচাইকৃত তারিখ ও নথি আছে, সেখানে তার উল্লেখ আছে। যেখানে সেগুলো এখনো সংগৃহীত হচ্ছে, সেখানে বিবরণ বানিয়ে না লিখে তা স্পষ্টভাবে বলা হয়েছে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-early-instinct",
    index: 2,
    title: { en: "Early Instinct", bn: "শুরুর বোধ" },
    paragraphs: [
      {
        en: "Long before any venture carried his name, Krishna Kanta was learning the discipline that would define him: watching how markets actually behave, not how they are described. Who buys, who hesitates, whom people trust with their money — these observations became his first education in business.",
        bn: "কোনো উদ্যোগ তাঁর নাম বহন করার অনেক আগে থেকেই Krishna Kanta সেই অনুশীলন রপ্ত করছিলেন, যা পরে তাঁর পরিচয় হয়ে ওঠে: বাজারকে যেভাবে বর্ণনা করা হয় সেভাবে নয়, বাজার আসলে যেভাবে আচরণ করে সেভাবে দেখা। কে কেনে, কে দ্বিধায় থাকে, মানুষ টাকার ব্যাপারে কাকে বিশ্বাস করে — এই পর্যবেক্ষণগুলোই ছিল ব্যবসায় তাঁর প্রথম পাঠ।",
      },
      {
        en: "The specifics of those early years — places, dates, first transactions — belong to the verified archive that is now being assembled. What the record already supports is the pattern: an instinct for timing and practical value that appeared early and never left.",
        bn: "সেই শুরুর বছরগুলোর খুঁটিনাটি — স্থান, তারিখ, প্রথম লেনদেন — এখন গুছিয়ে তোলা যাচাইকৃত আর্কাইভের অংশ। নথি এখনই যা সমর্থন করে তা হলো একটি ধরন: সময়জ্ঞান আর বাস্তব মূল্যবোধের এমন এক সহজাত বোধ, যা শুরুতেই দেখা দিয়েছিল এবং কখনো হারিয়ে যায়নি।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-learning-market",
    index: 3,
    title: { en: "Learning the Market", bn: "বাজার শেখা" },
    paragraphs: [
      {
        en: "Markets teach differently from classrooms. They reward attention, punish assumption, and reveal their lessons only to those who keep showing up. He learned pricing from customers, supply from scarcity, and negotiation from necessity.",
        bn: "বাজার শেখায় শ্রেণিকক্ষের চেয়ে ভিন্নভাবে। সে মনোযোগকে পুরস্কৃত করে, অনুমানকে শাস্তি দেয়, আর নিজের শিক্ষা কেবল তাদের কাছেই খোলে, যারা প্রতিদিন হাজির থাকে। তিনি দাম শিখেছেন ক্রেতার কাছে, সরবরাহ শিখেছেন সংকটের কাছে, দর-কষাকষি শিখেছেন প্রয়োজনের কাছে।",
      },
      {
        en: "This education produced a founder who distrusts theory that cannot survive a shop floor, and who measures every plan against a simple question: does this serve a real person with a real need?",
        bn: "এই শিক্ষা এমন এক প্রতিষ্ঠাতা তৈরি করেছে, যিনি দোকানের মেঝেতে টেকে না এমন তত্ত্বে আস্থা রাখেন না, এবং প্রতিটি পরিকল্পনাকে মাপেন একটি সরল প্রশ্নে: এটি কি সত্যিকারের প্রয়োজনওয়ালা সত্যিকারের কোনো মানুষের কাজে লাগছে?",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-building-trust",
    index: 4,
    title: { en: "Building Trust", bn: "বিশ্বাস নির্মাণ" },
    paragraphs: [
      {
        en: "In the markets where he built his reputation, contracts were often verbal and memory was long. A kept promise travelled; a broken one travelled faster. He treated trust as the one asset that could not be repurchased once spent.",
        bn: "যে বাজারে তিনি সুনাম গড়েছেন, সেখানে চুক্তি প্রায়ই ছিল মৌখিক, আর মানুষের স্মৃতি দীর্ঘ। রাখা প্রতিশ্রুতির খবর ছড়াত; ভাঙা প্রতিশ্রুতির খবর ছড়াত আরও দ্রুত। বিশ্বাসকে তিনি দেখেছেন এমন একমাত্র সম্পদ হিসেবে, যা একবার খরচ হয়ে গেলে আর কিনে ফেরানো যায় না।",
      },
      {
        en: "Decades later, this remains the most consistent testimony about him: relationships that have lasted, suppliers and customers who returned, and a name that came to function as its own guarantee.",
        bn: "কয়েক দশক পরেও তাঁকে নিয়ে সবচেয়ে অভিন্ন সাক্ষ্য এটিই: টিকে থাকা সম্পর্ক, বারবার ফিরে আসা সরবরাহকারী ও ক্রেতা, এবং এমন একটি নাম, যা নিজেই নিজের জামিন হয়ে উঠেছে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-computer-zone",
    index: 5,
    title: { en: "The Computer Zone Chapter", bn: "Computer Zone অধ্যায়" },
    paragraphs: [
      {
        en: "Computer Zone became the institution most closely associated with his public business identity — the place where his instinct for markets, discipline in operations, and eye for people operated together at scale.",
        bn: "Computer Zone হয়ে ওঠে তাঁর প্রকাশ্য ব্যবসায়িক পরিচয়ের সঙ্গে সবচেয়ে ঘনিষ্ঠভাবে জড়িত প্রতিষ্ঠান — যেখানে তাঁর বাজারবোধ, পরিচালনার শৃঙ্খলা আর মানুষ চেনার দৃষ্টি একসঙ্গে বড় পরিসরে কাজ করেছে।",
      },
      {
        en: "The company’s verified history — founding records, milestones, growth — is being assembled for this archive and will be published as it is confirmed. What can be said now, without embellishment, is that the venture chose a technology-facing name and direction well before such choices became common, and that this choice was not an accident.",
        bn: "প্রতিষ্ঠানটির যাচাইকৃত ইতিহাস — প্রতিষ্ঠার নথি, মাইলফলক, বিকাশ — এই আর্কাইভের জন্য সংকলিত হচ্ছে এবং নিশ্চিত হওয়া মাত্র প্রকাশ করা হবে। অতিরঞ্জন ছাড়া এখনই যা বলা যায়: উদ্যোগটি প্রযুক্তিমুখী নাম ও অভিমুখ বেছে নিয়েছিল এমন এক সময়ে, যখন এমন সিদ্ধান্ত মোটেই প্রচলিত ছিল না — এবং সেই পছন্দ কোনো দুর্ঘটনা ছিল না।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-leadership-people",
    index: 6,
    title: { en: "Leadership and People", bn: "নেতৃত্ব ও মানুষ" },
    paragraphs: [
      {
        en: "Ask the people who worked under him what they remember, and the answers converge: he noticed ability early, gave responsibility before it was requested, and defended the room in which people could grow.",
        bn: "তাঁর অধীনে কাজ করা মানুষদের জিজ্ঞেস করুন কী মনে পড়ে — উত্তরগুলো এক জায়গায় মিলে যায়: তিনি সামর্থ্য আগেভাগে লক্ষ করতেন, চাওয়ার আগেই দায়িত্ব দিতেন, এবং মানুষের বেড়ে ওঠার পরিসরটুকু আগলে রাখতেন।",
      },
      {
        en: "This is the least visible and most durable part of his work. Companies can be counted; the confidence installed in a young employee cannot. Yet it is precisely there that a founder’s judgement shows most clearly.",
        bn: "এটিই তাঁর কাজের সবচেয়ে কম দৃশ্যমান অথচ সবচেয়ে টেকসই অংশ। প্রতিষ্ঠান গোনা যায়; কিন্তু একজন তরুণ কর্মীর ভেতরে বসিয়ে দেওয়া আত্মবিশ্বাস গোনা যায় না। অথচ ঠিক সেখানেই একজন প্রতিষ্ঠাতার বিচারবুদ্ধি সবচেয়ে স্পষ্ট ধরা পড়ে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-technology",
    index: 7,
    title: { en: "The Technology Chapter", bn: "প্রযুক্তির অধ্যায়" },
    paragraphs: [
      {
        en: "He did not come to technology as a tourist. He came to it as a businessman who had watched demand change shape and concluded, earlier than most of his peers, that traditional business and emerging technology must eventually converge.",
        bn: "প্রযুক্তিতে তিনি এসেছেন পর্যটক হিসেবে নয়। এসেছেন এমন এক ব্যবসায়ী হিসেবে, যিনি চাহিদার রূপ বদলাতে দেখেছেন এবং সমসাময়িক অনেকের আগেই সিদ্ধান্তে পৌঁছেছেন: প্রথাগত ব্যবসা আর উদীয়মান প্রযুক্তিকে একদিন মিলতেই হবে।",
      },
      {
        en: "That conviction now takes the form of OushodhOS, a pharmacy operating system initiative, and OYSHE AI, an emerging artificial intelligence venture — both built on the same principle as his first businesses: technology must solve practical problems for real operations.",
        bn: "সেই প্রত্যয় আজ রূপ নিয়েছে ফার্মেসি অপারেটিং সিস্টেম উদ্যোগ OushodhOS এবং উদীয়মান কৃত্রিম বুদ্ধিমত্তা উদ্যোগ OYSHE AI-তে — দুটিই দাঁড়িয়ে তাঁর প্রথম ব্যবসাগুলোর নীতির ওপর: প্রযুক্তিকে বাস্তব কার্যক্রমের বাস্তব সমস্যা সমাধান করতে হবে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-present",
    index: 8,
    title: { en: "Present Direction", bn: "বর্তমান অভিমুখ" },
    paragraphs: [
      {
        en: "Today his attention is institutional. The questions that occupy him are the questions of a builder in his most deliberate phase: which ventures deserve the next decade, which people are ready for larger rooms, and what must be written down so that judgement survives its author.",
        bn: "আজ তাঁর মনোযোগ প্রাতিষ্ঠানিক। যে প্রশ্নগুলো তাঁকে ব্যস্ত রাখে, সেগুলো সবচেয়ে সুচিন্তিত পর্বে পৌঁছানো এক নির্মাতার প্রশ্ন: কোন উদ্যোগ আগামী দশকের যোগ্য, কোন মানুষ আরও বড় দায়িত্বের জন্য প্রস্তুত, আর কী কী লিখে রাখতে হবে যেন বিচারবুদ্ধি তার রচয়িতার পরেও বেঁচে থাকে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
  {
    id: "ch-legacy",
    index: 9,
    title: { en: "Legacy in Progress", bn: "নির্মীয়মাণ উত্তরাধিকার" },
    paragraphs: [
      {
        en: "A legacy is usually written at the end of a career. His is being built in the middle of one — in ventures still growing, in people still rising, and in an archive that this website now begins to assemble in public.",
        bn: "উত্তরাধিকার সাধারণত কর্মজীবনের শেষে লেখা হয়। তাঁরটি নির্মিত হচ্ছে মাঝপথে — এখনো বেড়ে চলা উদ্যোগে, এখনো উঠে আসা মানুষে, আর সেই আর্কাইভে, যা এই ওয়েবসাইট আজ প্রকাশ্যে গুছিয়ে তুলতে শুরু করল।",
      },
      {
        en: "The record will grow. The principle behind it will not change: nothing invented, nothing exaggerated — a founder’s life, documented the way he built it. Carefully.",
        bn: "নথি বাড়তে থাকবে। কিন্তু এর পেছনের নীতি বদলাবে না: কিছুই বানানো নয়, কিছুই অতিরঞ্জিত নয় — একজন প্রতিষ্ঠাতার জীবন, ঠিক যেভাবে তিনি তা গড়েছেন সেভাবেই নথিবদ্ধ। যত্নের সঙ্গে।",
      },
    ],
    voice: "editorial-narration",
    verificationStatus: "editorial",
  },
];

/** The leadership-through-people story (homepage section 7 + story page). */
export const leadershipStory: LeadershipStory = {
  id: "ls-hridoy-samadder",
  title: {
    en: "A Founder’s Legacy Also Lives in People",
    bn: "প্রতিষ্ঠাতার উত্তরাধিকার বেঁচে থাকে মানুষের মধ্যেও",
  },
  narrative: [
    {
      en: "Among the people shaped by Krishna Kanta’s leadership is Hridoy Samadder, who entered his organisation as a young employee and later emerged as an entrepreneur, AI systems architect, and technology leader.",
      bn: "Krishna Kanta-র নেতৃত্বে গড়ে ওঠা মানুষদের একজন হৃদয় সমাদ্দার — যিনি তরুণ কর্মী হিসেবে তাঁর প্রতিষ্ঠানে যুক্ত হয়ে পরবর্তীতে উদ্যোক্তা, এআই সিস্টেম স্থপতি ও প্রযুক্তি-নেতা হয়ে উঠেছেন।",
    },
    {
      en: "Their shared story reflects a deeper dimension of leadership: the ability to recognise potential before it has status, invest trust before success is guaranteed, and create an environment where capable people can grow into builders themselves.",
      bn: "তাঁদের যৌথ গল্প নেতৃত্বের এক গভীরতর মাত্রা তুলে ধরে: মর্যাদা পাওয়ার আগেই সম্ভাবনাকে চিনে নেওয়া, সাফল্য নিশ্চিত হওয়ার আগেই বিশ্বাস বিনিয়োগ করা, এবং এমন পরিবেশ তৈরি করা, যেখানে যোগ্য মানুষ নিজেরাই নির্মাতা হয়ে উঠতে পারে।",
    },
  ],
  displayName: "হৃদয় সমাদ্দার",
  displayNameLatin: "Hridoy Samadder",
  displayRoles: {
    en: "CEO · Chief Architecture Engineer · Entrepreneur",
    bn: "সিইও · চিফ আর্কিটেকচার ইঞ্জিনিয়ার · উদ্যোক্তা",
  },
  voice: "editorial-narration",
  verificationStatus: "editorial",
};
