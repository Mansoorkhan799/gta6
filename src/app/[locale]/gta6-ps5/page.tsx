import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { ps5KeywordFaqs } from "@/lib/keyword-answers";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.ps5;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/gta6-ps5"),
  });
}

export default async function PS5Page({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.ps5;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/gta6-ps5"),
            name: "GTA 6 on PS5",
            description: "Grand Theft Auto VI on PlayStation 5 — availability, pricing, Pro Enhanced, storage.",
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "GTA 6 PS5", url: `${siteConfig.url}${pagePath(locale, "/gta6-ps5")}` },
          ]),
          faqJsonLd([...ps5KeywordFaqs]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: "/" }, { label: page.h1 }]} />
          <PageHeader title={page.h1} subtitle={page.subtitle} />
          <QuickAnswer question={page.quickQ} answer={page.quickA} label={dict.common.quickAnswer} />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-surface-elevated p-5">
            <h2 className="font-display text-xl tracking-wider">PS5 SNAPSHOT</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Platform: PlayStation 5 · PS5 Pro Enhanced</li>
              <li>• Status: Out now worldwide</li>
              <li>• Not on: PS4 / PC (PC unannounced)</li>
              <li>• Storage: up to ~212 GB depending on device</li>
              <li>• Buy: PlayStation Store, Rockstar Store, retailers (code-in-box)</li>
            </ul>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">HOW TO GET GTA 6 ON PS5</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
            <li>Open the PlayStation Store on your PS5 (or shop Rockstar / retailers).</li>
            <li>
              Choose Standard or Ultimate — compare on{" "}
              <LocaleLink href="/gta6-editions" className="text-accent-teal hover:text-accent-pink">
                editions
              </LocaleLink>
              .
            </li>
            <li>Purchase and download; free enough SSD space first.</li>
            <li>Launch after install completes — DualSense features ship with the PS5 build.</li>
          </ol>

          <h2 className="mt-12 font-display text-3xl tracking-wider">PS5 VS WAITING FOR PC</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            If your question is really “should I buy PS5 or wait for PC,” the honest split is: console is playable today;{" "}
            <LocaleLink href="/gta6-pc-release-date" className="text-accent-teal hover:text-accent-pink">
              PC has no official date
            </LocaleLink>
            . Many players buy console now and rebuy/upgrade later when Windows ships — that is a budget choice, not a Rockstar promise.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wider">FAQS</h2>
          <div className="mt-6 space-y-4">
            {ps5KeywordFaqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <LocaleLink href="/where-to-buy" className="rounded bg-accent-pink px-6 py-3 text-sm font-bold uppercase tracking-widest text-black">
              Where to Buy
            </LocaleLink>
            <LocaleLink href="/gta6-file-size" className="rounded border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-accent-teal">
              File Size Guide
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-ps5" relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
