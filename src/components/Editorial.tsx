import { cn } from "@/lib/utils";

/** Small uppercase gold label with a leading rule, e.g. section eyebrows. */
export function SectionLabel({
  children,
  className,
  as: Tag = "p",
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h2";
  tone?: "dark" | "light";
}) {
  return (
    <Tag
      className={cn(
        "tracking-label flex items-center gap-4 text-[0.7rem] font-medium uppercase",
        tone === "dark" ? "text-gold" : "text-gold-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-px w-10 shrink-0",
          tone === "dark" ? "bg-gold/60" : "bg-gold-muted/60",
        )}
      />
      {children}
    </Tag>
  );
}

/** Large display serif heading used across editorial sections. */
export function EditorialHeading({
  children,
  className,
  as: Tag = "h2",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-medium leading-[1.15] tracking-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Expanding fine gold rule. */
export function GoldRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("gold-rule w-full", className)} />;
}
