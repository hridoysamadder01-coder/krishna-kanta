import Image from "next/image";
import type { ImageAsset } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * The single image component used across the site. Supports focal-point
 * positioning, monochrome archival treatment, dark overlays, and credits.
 * Replacing a placeholder with a real photograph requires only a content
 * record change — no structural edits.
 */
export function PortraitFigure({
  image,
  locale,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  overlay = false,
  caption,
  rounded = false,
}: {
  image: ImageAsset;
  locale: Locale;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
  caption?: string;
  rounded?: boolean;
}) {
  const objectPosition = `${(image.focalX ?? 0.5) * 100}% ${(image.focalY ?? 0.5) * 100}%`;

  return (
    <figure className={cn("relative overflow-hidden", rounded && "rounded-lg", className)}>
      <Image
        src={image.src}
        alt={t(image.alt, locale)}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className={cn(
          "h-full w-full object-cover",
          image.treatment === "mono" && "img-mono",
          imgClassName,
        )}
        style={{ objectPosition }}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20"
        />
      )}
      {(caption || image.credit) && (
        <figcaption className="mt-3 text-xs leading-relaxed text-stone">
          {caption}
          {caption && image.credit ? " — " : ""}
          {image.credit}
        </figcaption>
      )}
    </figure>
  );
}
