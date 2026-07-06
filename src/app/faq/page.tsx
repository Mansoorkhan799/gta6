import type { Metadata } from "next";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 FAQ — Release Date, Download, PC & More",
  description:
    "Answers to the most asked GTA 6 questions: release date, PC download, system requirements, protagonists, map, pricing, and pre-orders.",
  path: "/faq",
  keywords: ["GTA6 FAQ", "GTA 6 questions", "GTA6 release date FAQ", "is GTA 6 on PC"],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/faq",
            name: "GTA 6 FAQ",
            description: "Frequently asked questions about GTA 6 release date, download, PC specs, and more.",
          }),
          faqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "FAQ", url: `${siteConfig.url}/faq` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <PageHeader
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Everything you need to know about Grand Theft Auto VI — release date, download, PC specs, characters, and more."
          />
        </div>
      </div>

      <FAQSection />
    </>
  );
}
