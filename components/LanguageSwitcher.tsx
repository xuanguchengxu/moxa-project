"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const flagEmoji: Record<Locale, string> = {
    en: "🇬🇧",
    ja: "🇯🇵",
    zh: "🇨🇳",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Select language"
      >
        <span className="text-base">{flagEmoji[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-border bg-card shadow-elevated">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => handleLocaleChange(l)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                l === locale
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="text-base">{flagEmoji[l]}</span>
              <span>{localeNames[l]}</span>
              {l === locale && (
                <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
