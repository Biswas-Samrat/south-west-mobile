import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { autoRepairSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: "Mobile Mechanic Weston-super-Mare | South West Mobile",
    template: "%s | South West Mobile",
  },
  description:
    "Mobile mechanic in Weston-super-Mare with 15+ years' experience. Servicing, diagnostics and repairs at your door. 20% off labour for Blue Light Card holders.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE.name,
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "South West Mobile - Mobile Mechanic Weston-super-Mare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
  },
  other: {
    "theme-color": "#0A1450",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable}`}>
      <body className="pb-[72px] md:pb-0">
        <SkipLink />
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <JsonLd data={autoRepairSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
