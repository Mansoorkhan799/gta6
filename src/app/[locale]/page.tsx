import { Hero } from "@/components/Hero";
import { TrailerSection } from "@/components/TrailerSection";
import { HomeGuide } from "@/components/HomeGuide";
import { NewsSection } from "@/components/NewsSection";
import { FAQSection } from "@/components/FAQSection";
import { DownloadCTA } from "@/components/DownloadCTA";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { faqs } from "@/lib/content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return createMetadata({
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    path: localePath(raw, ""),
    ogLocale: raw === "br" ? "pt_BR" : raw === "tw" ? "zh_TW" : undefined,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: localePath(locale, ""),
            name: dict.meta.homeTitle,
            description: dict.meta.homeDescription,
          }),
          faqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      <Hero dict={dict} />
      <TrailerSection />
      <HomeGuide />
      <NewsSection />
      <FAQSection limit={8} viewAllLabel={dict.common.readMore} />
      <DownloadCTA dict={dict} />
    </>
  );
}
