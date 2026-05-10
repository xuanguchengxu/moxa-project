"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const faqItems = ["moq", "samples", "shipping", "payment", "oem", "quality"] as const;

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {t("badge")}
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            <span className="text-balance">{t("title")}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg font-semibold text-foreground">
                  {t(`items.${item}.q`)}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 pb-6 pt-4">
                  <p className="leading-relaxed text-muted-foreground">
                    {t(`items.${item}.a`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
