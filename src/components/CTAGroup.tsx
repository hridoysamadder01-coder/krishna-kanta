import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTA = { href: string; label: string };

/** Editorial call-to-action pair: solid gold-outline primary + quiet secondary. */
export function CTAGroup({
  primary,
  secondary,
  className,
  tone = "dark",
}: {
  primary: CTA;
  secondary?: CTA;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <Link
        href={primary.href}
        className={cn(
          "group inline-flex min-h-11 items-center gap-3 border px-7 py-3 text-[0.78rem] uppercase tracking-[0.16em] transition-colors duration-300",
          tone === "dark"
            ? "border-gold/60 text-gold hover:bg-gold hover:text-ink"
            : "border-gold-muted text-gold-muted hover:bg-gold-muted hover:text-paper",
        )}
      >
        {primary.label}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
      {secondary && (
        <Link
          href={secondary.href}
          className={cn(
            "editorial-link inline-flex min-h-11 items-center px-1 py-3 text-[0.78rem] uppercase tracking-[0.16em]",
            tone === "dark" ? "text-ivory/80 hover:text-ivory" : "text-ink/70 hover:text-ink",
          )}
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
}
