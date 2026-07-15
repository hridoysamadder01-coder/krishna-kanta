"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Static-export-safe root redirect: sends visitors to the default locale.
 * A visible link remains for non-JS visitors and crawlers.
 */
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en/");
  }, [router]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-ink px-6 text-center">
      <p className="font-display text-2xl font-semibold tracking-[0.18em] text-ivory">
        KRISHNA&nbsp;KANTA
      </p>
      <p className="text-sm text-stone">
        <Link href="/en/" className="editorial-link text-gold">
          English
        </Link>
        <span className="mx-3 text-stone/50">·</span>
        <Link href="/bn/" lang="bn" className="editorial-link text-gold">
          বাংলা
        </Link>
      </p>
    </main>
  );
}
