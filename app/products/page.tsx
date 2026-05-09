import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Moxa Products for Clinics and Wellness Centers",
  description:
    "Explore our curated collection of moxa sticks, smokeless therapy devices, moxa boxes, and raw materials for clinic, spa, and OEM supply.",
  keywords: [
    "moxa products",
    "acupuncture clinic supply",
    "moxibustion device",
    "premium wellness supply",
  ],
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Product Collection
              </span>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              <span className="text-balance">Premium Moxa Supply for Wellness Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A curated selection of premium moxa products for acupuncture clinics, 
              therapy centers, luxury spas, and OEM manufacturing partners.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-background p-12 text-center shadow-card">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              <span className="text-balance">Looking for Custom Solutions?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We offer OEM manufacturing, private label services, and customized product 
              development for wellness brands and distributors.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
            >
              Discuss Your Requirements
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
