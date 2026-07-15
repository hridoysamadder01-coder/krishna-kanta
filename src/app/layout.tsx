import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hind_Siliguri, Inter, Tiro_Bangla } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Tiro Bangla: elegant editorial Bengali serif with impeccable conjunct
// shaping (single 400 weight — headings render it cleanly).
const displayBn = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
  variable: "--font-display-bn",
  display: "swap",
});

// Hind Siliguri: clean, highly readable Bengali sans for body text.
const bodyBn = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  variable: "--font-body-bn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Krishna Kanta — Founder · Business Leader · Bangladesh",
  description:
    "The official website of Krishna Kanta, a Bangladeshi entrepreneur, founder and chairman — a record of business instinct, leadership, people, and legacy.",
};

export const viewport: Viewport = {
  themeColor: "#11110f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The default document language; each locale segment overrides it via
    // a lang attribute on its own wrapper and syncs <html lang> client-side.
    <html lang="en" className={`${display.variable} ${body.variable} ${displayBn.variable} ${bodyBn.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
