import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <MarketSection />
      <FeaturesSection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
