/**
 * Central content schemas for the Krishna Kanta founder identity website.
 *
 * Every fact rendered on the public site must be traceable to a record built
 * from these types. See VERIFICATION_POLICY.md for the editorial rules.
 */

export type VerificationStatus =
  | "verified" // confirmed against a documented source
  | "pending" // claimed but not yet confirmed — never rendered as fact
  | "editorial" // careful editorial narration, clearly non-factual framing
  | "private"; // internal record, must never reach the public bundle

export type ContentVoice =
  | "editorial-narration"
  | "verified-direct-quote"
  | "documented-principle";

export type LocalisedText = {
  en: string;
  bn: string;
};

export type SourceReference = {
  label: string;
  url?: string;
  documentId?: string;
  accessedAt?: string;
  notes?: string;
};

export type ImagePlaceholderKind =
  | "hero-portrait"
  | "office-portrait"
  | "archival-business"
  | "leadership-moment"
  | "venture"
  | "public-appearance"
  | "historical"
  | "detail";

export type ImageAsset = {
  src: string;
  alt: LocalisedText;
  width: number;
  height: number;
  /** 0–1 horizontal focal point used for object-position. */
  focalX?: number;
  /** 0–1 vertical focal point used for object-position. */
  focalY?: number;
  credit?: string;
  treatment?: "mono" | "plain";
  /**
   * True while the slot is filled by an abstract editorial placeholder.
   * Replace the file and flip this flag when a verified photograph arrives.
   */
  isPlaceholder: boolean;
  /** What real photograph this slot is waiting for. Internal only. */
  placeholderKind?: ImagePlaceholderKind;
};

export type RoleRecord = {
  personName: LocalisedText;
  roleTitle: LocalisedText;
  verificationStatus: VerificationStatus;
};

export type TimelineEntry = {
  id: string;
  slug: string;
  title: LocalisedText;
  summary: LocalisedText;
  story?: LocalisedText;
  /** Verified year only. Never invent. */
  year?: number;
  /** Verified ISO date only. Never invent. */
  date?: string;
  /** Editorial phase label shown when no verified date exists. */
  phase?: LocalisedText;
  ventureIds?: string[];
  image?: ImageAsset;
  sources?: SourceReference[];
  verificationStatus: VerificationStatus;
  isPublic: boolean;
};

export type VentureStatus = "active" | "established" | "emerging" | "future";

export type Venture = {
  id: string;
  slug: string;
  name: string;
  nameBn?: string;
  category: LocalisedText;
  categoryKey: "established-business" | "technology" | "ai" | "ecommerce" | "future";
  founderRole: LocalisedText;
  leadership: RoleRecord[];
  description: LocalisedText;
  status: VentureStatus;
  websiteUrl?: string;
  foundingYear?: number;
  location?: LocalisedText;
  verificationStatus: VerificationStatus;
  image?: ImageAsset;
  relatedTimelineIds?: string[];
  isPublic: boolean;
  featured?: boolean;
};

export type Quote = {
  id: string;
  voice: ContentVoice;
  text: LocalisedText;
  attribution?: LocalisedText;
  sources?: SourceReference[];
  verificationStatus: VerificationStatus;
  isPublic: boolean;
};

export type Principle = {
  id: string;
  title: LocalisedText;
  text: LocalisedText;
  interpretation?: LocalisedText;
  voice: ContentVoice;
  relatedTimelineId?: string;
  verificationStatus: VerificationStatus;
};

export type PressRecordType =
  | "interview"
  | "news"
  | "announcement"
  | "milestone"
  | "public-appearance";

export type PressRecord = {
  id: string;
  title: LocalisedText;
  publisher?: string;
  publicationDate?: string;
  eventDate?: string;
  summary: LocalisedText;
  externalUrl?: string;
  thumbnail?: ImageAsset;
  recordType: PressRecordType;
  verificationStatus: VerificationStatus;
  archived: boolean;
};

export type GalleryRecordType =
  | "photograph"
  | "document"
  | "milestone"
  | "business-record"
  | "public-appearance"
  | "press"
  | "speech"
  | "letter"
  | "award";

export type GalleryRecord = {
  id: string;
  image: ImageAsset;
  /** Verified year only. */
  year?: number;
  location?: LocalisedText;
  event?: LocalisedText;
  caption: LocalisedText;
  photographer?: string;
  rightsStatus?: string;
  source?: SourceReference;
  recordType: GalleryRecordType;
  verificationStatus: VerificationStatus;
  featured?: boolean;
  isPublic: boolean;
};

export type LeadershipStory = {
  id: string;
  title: LocalisedText;
  narrative: LocalisedText[];
  displayName: string;
  displayNameLatin: string;
  displayRoles: LocalisedText;
  voice: ContentVoice;
  verificationStatus: VerificationStatus;
  sources?: SourceReference[];
};

export type StoryChapter = {
  id: string;
  index: number;
  title: LocalisedText;
  paragraphs: LocalisedText[];
  image?: ImageAsset;
  sources?: SourceReference[];
  voice: ContentVoice;
  verificationStatus: VerificationStatus;
};

export type FounderProfile = {
  name: string;
  /** Official Bengali form of the name — only when formally supplied. */
  nameBn?: string;
  descriptors: LocalisedText[];
  country: LocalisedText;
  summary: LocalisedText;
  positioning: LocalisedText;
  legacySummary: LocalisedText;
  portrait: ImageAsset;
  officePortrait: ImageAsset;
  verificationStatus: VerificationStatus;
};
