import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  return createMetadata({
    title: dict.faq.title,
    description: dict.faq.subtitle,
    path: pagePath(locale, "/faq"),
  });
}

export default async function FAQPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/faq"),
            name: dict.faq.title,
            description: dict.faq.subtitle,
          }),
          faqJsonLd(dict.faq.items),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: dict.common.faq, url: `${siteConfig.url}${pagePath(locale, "/faq")}` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: "/" }, { label: dict.common.faq }]} />
          <PageHeader title={dict.faq.title} subtitle={dict.faq.subtitle} />
        </div>
      </div>

      <FAQSection
        items={dict.faq.items}
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        viewAllLabel={dict.faq.viewAll}
      />
    </>
  );
}
