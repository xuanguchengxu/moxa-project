import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Premium Wellness Supply
              </span>
            </div>
            
            <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-balance">Traditional Eastern Wellness for Modern Clinics</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Premium moxa sourcing from Japan&apos;s finest herbal production regions. 
              Trusted by luxury spas and acupuncture clinics worldwide.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
              >
                Explore Products
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-card px-8 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/5"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Global Partners" },
                { value: "50+", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/images/hero-wellness.jpg"
                alt="Premium Japanese wellness spa treatment environment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 p-6 shadow-card backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Clinical Excellence
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-foreground">
                  Premium moxa products for acupuncture, therapy, and wellness professionals
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl bg-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
