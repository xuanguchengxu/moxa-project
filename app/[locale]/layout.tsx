import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-jp",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sc",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const meta = messages.metadata as Record<string, string>;

  return {
    title: {
      default: meta?.title || "Moxa Source Partner | Premium Moxa Supply",
      template: "%s | Moxa Source Partner",
    },
    description: meta?.description,
    keywords: meta?.keywords,
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      locale: locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const fontClass =
    locale === "ja"
      ? notoJP.variable
      : locale === "zh"
        ? notoSC.variable
        : "";

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${cormorant.variable} ${fontClass} bg-background`}
    >
      <body className="min-h-screen font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
