import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";

const productKeys = ["stick", "smokeless", "box", "wool"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "products" });

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

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {productKeys.map((key, index) => (
              <ProductCard key={key} productKey={key} index={index} />
            ))}
          </div>

          {/* Custom Solutions Banner */}
          <div className="mt-20 rounded-3xl bg-primary/10 p-10 text-center lg:p-16">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {t("customSolutions.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("customSolutions.description")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
            >
              {t("customSolutions.cta")}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
