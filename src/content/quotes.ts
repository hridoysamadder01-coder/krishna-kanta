import type { Quote } from "@/lib/types";

/**
 * Quotes and editorial pull-lines.
 *
 * IMPORTANT: No verified direct quotations from Krishna Kanta exist in this
 * file yet. Every entry below is editorial narration and must be rendered
 * with the editorial voice — never styled as a spoken quotation.
 * When a verified quote arrives, add it with voice: "verified-direct-quote"
 * and a documented source.
 */
export const quotes: Quote[] = [
  {
    id: "q-editorial-founder-sees",
    voice: "editorial-narration",
    text: {
      en: "A founder is revealed by what he sees before the market sees it.",
      bn: "বাজার দেখার আগে তিনি কী দেখতে পান — সেটিই একজন প্রতিষ্ঠাতাকে চিনিয়ে দেয়।",
    },
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "q-editorial-quiet-decisions",
    voice: "editorial-narration",
    text: {
      en: "The loudest chapters of this story are decisions that were made quietly.",
      bn: "এই গল্পের সবচেয়ে উচ্চকিত অধ্যায়গুলো আসলে নীরবে নেওয়া কিছু সিদ্ধান্ত।",
    },
    verificationStatus: "editorial",
    isPublic: true,
  },
];

export const publicQuotes = quotes.filter(
  (q) => q.isPublic && q.verificationStatus !== "private",
);
