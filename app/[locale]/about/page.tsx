import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import QualitySection from "@/components/QualitySection";
import ApplicationsSection from "@/components/ApplicationsSection";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const values = ["authenticity", "quality", "reliability", "service"] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {t("badge")}
              </span>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              <span className="text-balance">{t("title")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated">
                <Image
                  src="/images/about-wellness.jpg"
                  alt="Moxa production heritage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -left-4 -bottom-4 -z-10 h-full w-full rounded-3xl bg-secondary" />
            </div>

            <div>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {t("story.title")}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("story.p1")}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t("story.p2")}
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <p className="font-serif text-4xl font-semibold text-primary">500+</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.partners")}</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-semibold text-primary">50+</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.countries")}</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-semibold text-primary">15+</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.experience")}</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-semibold text-primary">100T</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t("stats.production")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("values.title")}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-serif text-xl font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {t(`values.${value}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`values.${value}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QualitySection />
      <ApplicationsSection />
      <CTASection />
    </>
  );
}
