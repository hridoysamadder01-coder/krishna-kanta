import type { GalleryRecord } from "@/lib/types";

/**
 * The visual archive.
 *
 * No verified photographs have been supplied yet. The records below are
 * EDITORIAL PLACEHOLDER FRAMES: abstract compositions that reserve a slot
 * for a specific category of real photograph. They fabricate no events,
 * locations, or dates. Replace `image.src`, set `isPlaceholder: false`,
 * fill in the verified fields, and flip `verificationStatus` when real
 * archival photographs arrive. See IMAGE_GUIDE.md.
 */
export const gallery: GalleryRecord[] = [
  {
    id: "ga-portrait-slot",
    image: {
      src: "/images/placeholder-archival-01.svg",
      alt: {
        en: "Editorial frame reserved for a verified formal portrait",
        bn: "যাচাইকৃত আনুষ্ঠানিক প্রতিকৃতির জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1200,
      height: 1500,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "office-portrait",
    },
    caption: {
      en: "Formal portrait — reserved for the verified archive",
      bn: "আনুষ্ঠানিক প্রতিকৃতি — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "photograph",
    verificationStatus: "editorial",
    featured: true,
    isPublic: true,
  },
  {
    id: "ga-business-slot",
    image: {
      src: "/images/placeholder-archival-02.svg",
      alt: {
        en: "Editorial frame reserved for a verified archival business photograph",
        bn: "যাচাইকৃত ব্যবসায়িক আলোকচিত্রের জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "archival-business",
    },
    caption: {
      en: "The early business years — reserved for the verified archive",
      bn: "ব্যবসার শুরুর বছরগুলো — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "business-record",
    verificationStatus: "editorial",
    featured: true,
    isPublic: true,
  },
  {
    id: "ga-leadership-slot",
    image: {
      src: "/images/placeholder-leadership-01.svg",
      alt: {
        en: "Editorial frame reserved for a verified leadership moment photograph",
        bn: "নেতৃত্বের যাচাইকৃত মুহূর্তচিত্রের জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "leadership-moment",
    },
    caption: {
      en: "Leadership in practice — reserved for the verified archive",
      bn: "কর্মক্ষেত্রে নেতৃত্ব — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "photograph",
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "ga-document-slot",
    image: {
      src: "/images/placeholder-detail-01.svg",
      alt: {
        en: "Editorial frame reserved for verified documents and records",
        bn: "যাচাইকৃত দলিল ও নথির জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1200,
      height: 1500,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "detail",
    },
    caption: {
      en: "Documents and records — reserved for the verified archive",
      bn: "দলিল ও নথিপত্র — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "document",
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "ga-public-slot",
    image: {
      src: "/images/placeholder-public-01.svg",
      alt: {
        en: "Editorial frame reserved for verified public appearance photographs",
        bn: "প্রকাশ্য উপস্থিতির যাচাইকৃত আলোকচিত্রের জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1600,
      height: 1000,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "public-appearance",
    },
    caption: {
      en: "Public record — reserved for the verified archive",
      bn: "প্রকাশ্য নথি — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "public-appearance",
    verificationStatus: "editorial",
    isPublic: true,
  },
  {
    id: "ga-historical-slot",
    image: {
      src: "/images/placeholder-historical-01.svg",
      alt: {
        en: "Editorial frame reserved for verified historical photographs",
        bn: "যাচাইকৃত ঐতিহাসিক আলোকচিত্রের জন্য সংরক্ষিত সম্পাদকীয় ফ্রেম",
      },
      width: 1200,
      height: 1500,
      treatment: "mono",
      isPlaceholder: true,
      placeholderKind: "historical",
    },
    caption: {
      en: "The historical record — reserved for the verified archive",
      bn: "ঐতিহাসিক নথি — যাচাইকৃত আর্কাইভের জন্য সংরক্ষিত",
    },
    recordType: "photograph",
    verificationStatus: "editorial",
    isPublic: true,
  },
];

/** Records safe to show publicly (editorial frames or verified photographs). */
export const publicGallery = gallery.filter(
  (g) => g.isPublic && (g.verificationStatus === "verified" || g.verificationStatus === "editorial"),
);

/** Only fully verified photographs — used to decide empty-state messaging. */
export const verifiedGallery = gallery.filter(
  (g) => g.isPublic && g.verificationStatus === "verified",
);
