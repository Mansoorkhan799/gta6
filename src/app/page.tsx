import { Hero } from "@/components/Hero";
import { HomeGuide } from "@/components/HomeGuide";
import { TrailerSection } from "@/components/TrailerSection";
import { FAQSection } from "@/components/FAQSection";
import { DownloadCTA } from "@/components/DownloadCTA";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, howToDownloadPCJsonLd, webPageJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "GTA 6 For PC — Ultimate Guide: Release Date, Download & Gameplay",
  description:
    "The ultimate guide to GTA 6: release date (November 19, 2026), download guide for PC/PS5/Xbox, file size, installation, gameplay, Lucia & Jason, and Vice City Leonida.",
  path: "/",
  keywords: [
    "GTA 6 download",
    "GTA6 download",
    "GTA 6 file size",
    "how to install GTA 6",
    "GTA 6 release date",
    "GTA 6 PC download",
    "GTA 6 gameplay",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: "GTA 6 For PC — Ultimate Guide",
            description: siteConfig.description,
            mainEntityId: `${siteConfig.url}/gta6-download#howto-pc-download`,
          }),
          faqJsonLd(faqs.slice(0, 5).map((f) => ({ question: f.question, answer: f.answer }))),
          howToDownloadPCJsonLd(),
        ]}
      />
      <Hero />
      <HomeGuide />
      <TrailerSection />
      <FAQSection limit={5} />
      <DownloadCTA />
    </>
  );
}
