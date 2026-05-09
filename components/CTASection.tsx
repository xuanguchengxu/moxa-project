"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="bg-gradient-to-br from-secondary via-background to-secondary/50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          <span className="text-balance">{t("title")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
          >
            {t("primary")}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-card px-8 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/5"
          >
            {t("secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
