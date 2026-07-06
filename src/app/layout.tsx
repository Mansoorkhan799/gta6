import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd } from "@/components/JsonLd";
import {
  createMetadata,
  organizationJsonLd,
  gta6SoftwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  ...createMetadata({
    title: "GTA 6 For PC — Download, Release Date & System Requirements",
    description: siteConfig.description,
    path: "/",
    ogImage: siteAssets.ogImage,
  }),
  icons: {
    icon: [
      { url: siteAssets.favicon.ico, sizes: "any" },
      { url: siteAssets.favicon.svg, type: "image/svg+xml" },
      { url: siteAssets.favicon.png96, sizes: "96x96", type: "image/png" },
    ],
    apple: siteAssets.favicon.appleTouch,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col font-sans"
        suppressHydrationWarning
      >
        <JsonLd data={[websiteJsonLd(), organizationJsonLd(), gta6SoftwareApplicationJsonLd()]} />
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
