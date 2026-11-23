import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Sans_SC } from "next/font/google";
import { siteAssets } from "@/lib/site-assets";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
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
      className={`${bebas.variable} ${inter.variable} ${noto.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
