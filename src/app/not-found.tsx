import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="tracking-label text-[0.65rem] uppercase text-gold">404</p>
      <h1 className="font-display mt-6 max-w-xl text-[clamp(1.8rem,5vw,3rem)] font-medium leading-tight text-ivory">
        This page is not part of the record.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
        The page you were looking for does not exist in this archive. Return to the beginning of
        the record.
      </p>
      <div className="mt-9 flex items-center gap-6">
        <Link
          href="/en/"
          className="inline-flex min-h-11 items-center border border-gold/60 px-6 py-3 text-[0.75rem] uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Return to the Record
        </Link>
        <Link href="/bn/" lang="bn" className="editorial-link text-sm text-ivory/70">
          বাংলায় ফিরুন
        </Link>
      </div>
    </main>
  );
}
