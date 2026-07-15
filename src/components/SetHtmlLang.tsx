"use client";

import { useEffect } from "react";

/** Keeps <html lang> in sync with the active locale segment. */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
