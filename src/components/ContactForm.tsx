"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"fullName" | "email" | "enquiryType" | "message" | "consent", string>>;

const copy = {
  fullName: { en: "Full name", bn: "পুরো নাম" },
  organisation: { en: "Organisation (optional)", bn: "প্রতিষ্ঠান (ঐচ্ছিক)" },
  email: { en: "E-mail address", bn: "ইমেইল ঠিকানা" },
  enquiryType: { en: "Enquiry type", bn: "জিজ্ঞাসার ধরন" },
  message: { en: "Message", bn: "বার্তা" },
  consent: {
    en: "I consent to this message being reviewed by the office of Krishna Kanta.",
    bn: "আমি সম্মত যে এই বার্তাটি Krishna Kanta-র দপ্তর পর্যালোচনা করবে।",
  },
  submit: { en: "Send the Message", bn: "বার্তা পাঠান" },
  sending: { en: "Sending…", bn: "পাঠানো হচ্ছে…" },
  errorSummary: {
    en: "The form could not be sent. Please review the fields below.",
    bn: "ফর্মটি পাঠানো যায়নি। নিচের ঘরগুলো আবার দেখুন।",
  },
  required: { en: "This field is required.", bn: "এই ঘরটি পূরণ করা আবশ্যক।" },
  invalidEmail: { en: "Please enter a valid e-mail address.", bn: "সঠিক ইমেইল ঠিকানা লিখুন।" },
  consentRequired: { en: "Consent is required to send the message.", bn: "বার্তা পাঠাতে সম্মতি প্রয়োজন।" },
  success: {
    en: "Your message has been received. The office responds to selected correspondence.",
    bn: "আপনার বার্তা গৃহীত হয়েছে। দপ্তর নির্বাচিত পত্রালাপের উত্তর দিয়ে থাকে।",
  },
  failure: {
    en: "The message could not be transmitted. Please try again shortly.",
    bn: "বার্তাটি পাঠানো যায়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।",
  },
  noChannel: {
    en: "The direct correspondence channel is not yet open. Your message has not been sent and has been kept below so you can retain a copy. Official contact channels will be published after verification.",
    bn: "সরাসরি পত্রালাপের ব্যবস্থা এখনো চালু হয়নি। আপনার বার্তাটি পাঠানো হয়নি এবং নিচে রেখে দেওয়া হয়েছে, যেন অনুলিপিটি আপনার কাছে থাকে। যাচাই শেষে দাপ্তরিক যোগাযোগ-মাধ্যম প্রকাশ করা হবে।",
  },
  enquiryOptions: [
    { value: "business", en: "Business correspondence", bn: "ব্যবসায়িক পত্রালাপ" },
    { value: "media", en: "Media enquiries", bn: "গণমাধ্যম জিজ্ঞাসা" },
    { value: "venture", en: "Venture enquiries", bn: "উদ্যোগ-সংক্রান্ত জিজ্ঞাসা" },
    { value: "institutional", en: "Institutional communication", bn: "প্রাতিষ্ঠানিক যোগাযোগ" },
  ],
} as const;

/**
 * Selective, professional contact form.
 * - Client-side validation with an accessible error summary
 * - Honeypot field against naive bots
 * - Posts JSON to NEXT_PUBLIC_CONTACT_ENDPOINT when configured
 * - Without an endpoint it NEVER pretends success: it shows an explicit
 *   "channel not yet open" state and preserves the visitor's text
 * Rate limiting must be enforced server-side at the endpoint (see DEPLOYMENT.md).
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failure" | "no-channel">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const tr = (obj: { en: string; bn: string }) => obj[locale] || obj.en;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if ((data.get("company_website") as string)?.length) {
      setStatus("success");
      return;
    }

    const values = {
      fullName: ((data.get("fullName") as string) || "").trim(),
      organisation: ((data.get("organisation") as string) || "").trim(),
      email: ((data.get("email") as string) || "").trim(),
      enquiryType: (data.get("enquiryType") as string) || "",
      message: ((data.get("message") as string) || "").trim(),
      consent: data.get("consent") === "on",
    };

    const nextErrors: FieldErrors = {};
    if (!values.fullName) nextErrors.fullName = tr(copy.required);
    if (!values.email) nextErrors.email = tr(copy.required);
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = tr(copy.invalidEmail);
    if (!values.enquiryType) nextErrors.enquiryType = tr(copy.required);
    if (!values.message) nextErrors.message = tr(copy.required);
    if (!values.consent) nextErrors.consent = tr(copy.consentRequired);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      summaryRef.current?.focus();
      return;
    }

    if (!siteConfig.contactEndpoint) {
      setStatus("no-channel");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Endpoint responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("failure");
    }
  }

  const fieldClass = (hasError: boolean) =>
    cn(
      "w-full border bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/40",
      hasError ? "border-red-500/70" : "border-ink/20 focus:border-gold-muted",
    );

  const errorText = (id: string, message?: string) =>
    message ? (
      <p id={id} role="alert" className="mt-2 text-xs text-red-700">
        {message}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div role="status" className="border border-gold-muted/50 bg-white px-8 py-12 text-center">
        <p className="font-display text-xl text-ink">{tr(copy.success)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div
        ref={summaryRef}
        tabIndex={-1}
        aria-live="assertive"
        className={cn(Object.keys(errors).length === 0 && status !== "failure" && status !== "no-channel" && "sr-only")}
      >
        {Object.keys(errors).length > 0 && (
          <p className="border border-red-400 bg-red-50 px-5 py-4 text-sm text-red-800">
            {tr(copy.errorSummary)}
          </p>
        )}
        {status === "failure" && (
          <p className="border border-red-400 bg-red-50 px-5 py-4 text-sm text-red-800">
            {tr(copy.failure)}
          </p>
        )}
        {status === "no-channel" && (
          <p className="border border-gold-muted/50 bg-white px-5 py-4 text-sm leading-relaxed text-ink/85">
            {tr(copy.noChannel)}
          </p>
        )}
      </div>

      {/* Honeypot — visually hidden and ignored by assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="tracking-label mb-2 block text-[0.65rem] uppercase text-ink/60">
            {tr(copy.fullName)}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "err-fullName" : undefined}
            className={fieldClass(!!errors.fullName)}
          />
          {errorText("err-fullName", errors.fullName)}
        </div>

        <div>
          <label htmlFor="organisation" className="tracking-label mb-2 block text-[0.65rem] uppercase text-ink/60">
            {tr(copy.organisation)}
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={fieldClass(false)}
          />
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="tracking-label mb-2 block text-[0.65rem] uppercase text-ink/60">
            {tr(copy.email)}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={fieldClass(!!errors.email)}
          />
          {errorText("err-email", errors.email)}
        </div>

        <div>
          <label htmlFor="enquiryType" className="tracking-label mb-2 block text-[0.65rem] uppercase text-ink/60">
            {tr(copy.enquiryType)}
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            defaultValue=""
            aria-invalid={!!errors.enquiryType}
            aria-describedby={errors.enquiryType ? "err-enquiryType" : undefined}
            className={fieldClass(!!errors.enquiryType)}
          >
            <option value="" disabled>
              —
            </option>
            {copy.enquiryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt[locale] || opt.en}
              </option>
            ))}
          </select>
          {errorText("err-enquiryType", errors.enquiryType)}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="tracking-label mb-2 block text-[0.65rem] uppercase text-ink/60">
          {tr(copy.message)}
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={fieldClass(!!errors.message)}
        />
        {errorText("err-message", errors.message)}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "err-consent" : undefined}
            className="mt-1 h-4 w-4 accent-[#8c7448]"
          />
          <span>{tr(copy.consent)}</span>
        </label>
        {errorText("err-consent", errors.consent)}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center border border-gold-muted px-8 py-3 text-[0.78rem] uppercase tracking-[0.16em] text-gold-muted transition-colors duration-300 hover:bg-gold-muted hover:text-paper disabled:opacity-50"
      >
        {status === "sending" ? tr(copy.sending) : tr(copy.submit)}
      </button>
    </form>
  );
}
