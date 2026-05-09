import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact for Premium Wellness Supply",
  description:
    "Start a conversation about premium moxa supply for your clinic, spa, or distribution business.",
  keywords: [
    "moxa contact",
    "wellness supply inquiry",
    "clinic supply partnership",
  ],
};

const contactInfo = [
  {
    title: "Email Us",
    description: "For partnership inquiries and product information",
    value: "contact@moxasource.com",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    description: "Monday to Friday",
    value: "9:00 AM - 6:00 PM JST",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Response Time",
    description: "We typically respond within",
    value: "24-48 Hours",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Get in Touch
              </span>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              <span className="text-balance">Start Your Wellness Partnership</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Share your market focus, product interests, and partnership goals. 
              We specialize in clinic supply, distribution, and OEM solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            {/* Info Cards */}
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {info.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {info.description}
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    {info.value}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl bg-primary/10 p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Partnership Benefits
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Premium quality moxa products",
                    "Competitive B2B pricing",
                    "Reliable international shipping",
                    "Dedicated account support",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <svg className="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
