import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Japanese Wellness Supply for Modern Clinics",
  description:
    "Premium moxa sourcing from Japan's finest herbal production regions. Trusted by luxury spas and acupuncture clinics worldwide.",
  keywords: [
    "moxa",
    "acupuncture",
    "Japanese wellness",
    "premium clinic supply",
  ],
};

const features = [
  {
    title: "Premium Quality Assurance",
    description: "Rigorous quality control from Japan's finest herbal production regions.",
  },
  {
    title: "B2B Export Excellence",
    description: "Streamlined international cooperation for clinic and spa supply chains.",
  },
  {
    title: "Stable Supply Chain",
    description: "Consistent sourcing capability for recurring wellness product needs.",
  },
  {
    title: "Wellness Brand Positioning",
    description: "Professional presentation for modern wellness market standards.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketSection />
      
      {/* Features Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Why Choose Us
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <span className="text-balance">A Focused Sourcing Partner for Premium Wellness Programs</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We bridge traditional Japanese wellness heritage with modern clinical excellence, 
                delivering premium moxa products to discerning wellness professionals worldwide.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-primary"
              >
                Learn more about us
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-serif text-lg font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
            <span className="text-balance">Ready to Elevate Your Wellness Practice?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Join over 500 wellness professionals who trust Moxa Source for their premium supply needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-card px-8 text-sm font-semibold text-foreground shadow-soft transition-all hover:shadow-card"
            >
              Start a Conversation
            </Link>
            <Link
              href="/products"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-foreground/30 px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
