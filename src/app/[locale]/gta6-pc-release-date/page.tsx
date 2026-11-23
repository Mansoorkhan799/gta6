import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return createMetadata({
    title: dict.pages.pc.metaTitle,
    description: dict.pages.pc.metaDescription,
    path: localePath(raw, "/gta6-pc-release-date"),
  });
}

export default async function PCReleaseDatePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const pc = dict.pages.pc;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: localePath(locale, "/gta6-pc-release-date"),
            name: pc.metaTitle,
            description: pc.metaDescription,
          }),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${localePath(locale, "")}` },
            {
              name: pc.title,
              url: `${siteConfig.url}${localePath(locale, "/gta6-pc-release-date")}`,
            },
          ]),
          faqJsonLd(pc.faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: dict.common.home, href: "/" },
              { label: pc.title },
            ]}
          />
          <PageHeader title={pc.h1} subtitle={pc.subtitle} />
          <QuickAnswer question={pc.quickQ} answer={pc.quickA} label={dict.common.quickAnswer} />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-surface-elevated p-5 sm:p-6">
            <h2 className="font-display text-xl tracking-wider">{pc.keyFactsTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {pc.keyFacts.map((fact) => (
                <li key={fact}>• {fact}</li>
              ))}
            </ul>
          </div>

          {pc.sections.map((section) => (
            <div key={section.h2} className="mt-12">
              <h2 className="font-display text-3xl tracking-wider">{section.h2}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}

          <h2 className="mt-12 font-display text-3xl tracking-wider">FAQ</h2>
          <div className="mt-6 space-y-4">
            {pc.faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <LocaleLink
              href="/gta6-download"
              className="rounded bg-accent-pink px-6 py-3 text-sm font-bold uppercase tracking-widest text-black"
            >
              Download
            </LocaleLink>
            <LocaleLink
              href="/gta6-ps5"
              className="rounded border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-accent-teal"
            >
              {dict.nav.ps5}
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
