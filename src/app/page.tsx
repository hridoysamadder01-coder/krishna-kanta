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
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-paper px-6 text-center text-ink">
      <p className="font-display text-2xl font-semibold tracking-[0.18em] text-ink">
        KRISHNA&nbsp;KANTA
      </p>
      <p className="text-sm text-ink/60">
        <Link href="/en/" className="editorial-link text-gold-muted">
          English
        </Link>
        <span className="mx-3 text-ink/30">·</span>
        <Link href="/bn/" lang="bn" className="editorial-link text-gold-muted">
          বাংলা
        </Link>
      </p>
    </main>
  );
}
