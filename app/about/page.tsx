import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Premium Moxa Sourcing",
  description:
    "Learn about our Japanese moxa supply chain excellence, B2B export partnerships, and commitment to premium wellness supply.",
  keywords: [
    "moxa",
    "Japanese wellness",
    "acupuncture",
    "premium clinic supply",
  ],
};

const values = [
  {
    title: "Japanese Herbal Excellence",
    description: "Direct access to premium moxa from Japan's finest herbal production regions, ensuring the highest quality for discerning wellness professionals.",
  },
  {
    title: "B2B Partnership Focus",
    description: "Streamlined export cooperation designed specifically for clinics, spas, and distributors seeking reliable long-term supply relationships.",
  },
  {
    title: "Consistent Supply Chain",
    description: "Robust logistics and inventory management ensuring stable, predictable supply for your recurring wellness product needs.",
  },
  {
    title: "Wellness Industry Standards",
    description: "Professional presentation and documentation meeting international wellness market quality and regulatory standards.",
  },
  {
    title: "Global Clinical Support",
    description: "Dedicated support for wellness businesses worldwide, from product selection to custom formulation consultation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  About Us
                </span>
              </div>
              <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                <span className="text-balance">Your Premium Japanese Wellness Supply Partner</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We connect global wellness businesses with exceptional moxa products from 
                Japan&apos;s finest herbal production regions, combining traditional excellence 
                with modern B2B reliability.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
              >
                Partner With Us
              </Link>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/images/about-wellness.jpg"
                alt="Premium Japanese wellness therapy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              <span className="text-balance">Our Commitment to Excellence</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every aspect of our operation is designed to deliver exceptional value 
              to wellness professionals worldwide.
            </p>
          </div>

          <div className="mt-16 grid gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-serif text-xl font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Global Partners" },
              { value: "50+", label: "Countries Served" },
              { value: "100%", label: "Quality Guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-5xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
