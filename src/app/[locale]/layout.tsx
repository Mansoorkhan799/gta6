import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScrollHandler } from "@/components/motion/SmoothScrollHandler";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationJsonLd,
  gta6SoftwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localeMeta, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const meta = localeMeta[locale];

  return (
    <div lang={meta.htmlLang} className="flex min-h-screen flex-col">
      <JsonLd data={[websiteJsonLd(), organizationJsonLd(), gta6SoftwareApplicationJsonLd()]} />
      <MotionProvider>
        <SmoothScrollHandler />
        <div className="grain-overlay" aria-hidden="true" />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <ScrollToTop />
      </MotionProvider>
    </div>
  );
}
