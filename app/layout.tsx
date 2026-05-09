import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Moxa Source Partner | Premium Japanese Wellness Supply",
    template: "%s | Moxa Source Partner",
  },
  description:
    "Premium moxa sourcing and wellness supply partner for acupuncture clinics, luxury spas, and international wellness distributors.",
  keywords: [
    "moxa",
    "acupuncture",
    "Japanese wellness",
    "moxibustion",
    "B2B wellness supply",
    "luxury spa supply",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
