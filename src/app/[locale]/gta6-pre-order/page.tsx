import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, howToPreOrderJsonLd, gta6ProductJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { editions, preOrderIncentives } from "@/lib/home-content";
import { preOrderKeywordFaqs } from "@/lib/keyword-answers";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

const buyStores = [
  { name: "Rockstar Games Store", url: "https://www.rockstargames.com/VI", type: "Digital & Physical" },
  { name: "PlayStation Store", url: "https://store.playstation.com", type: "PS5 Digital" },
  { name: "Xbox Store", url: "https://www.xbox.com", type: "Xbox Series X|S Digital" },
  { name: "Amazon / Best Buy / GameStop", url: "https://www.amazon.com", type: "Physical (download code)" },
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.preOrder;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/gta6-pre-order"),
  });
}

export default async function PreOrderPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.preOrder;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/gta6-pre-order"),
            name: "Pre Order GTA 6 / GTA VI",
            description: "GTA 6 pre-order history, pricing, bonuses, and where to buy after launch.",
            mainEntityId: `${siteConfig.url}/gta6-pre-order#howto-preorder`,
          }),
          gta6ProductJsonLd(),
          gta6SoftwareApplicationJsonLd(),
          howToPreOrderJsonLd(),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "Pre Order GTA 6", url: `${siteConfig.url}${pagePath(locale, "/gta6-pre-order")}` },
          ]),
          faqJsonLd([
            ...preOrderKeywordFaqs,
            {
              question: "How much does GTA 6 cost?",
              answer: `GTA 6 Standard Edition is ${siteConfig.pricing.standard} and Ultimate Edition is ${siteConfig.pricing.ultimate} for PS5 and Xbox Series X|S.`,
            },
          ]),
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
            <h2 className="font-display text-xl tracking-wider">KEY FACTS</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Pre-orders opened: June 25, 2026</li>
              <li>• Launch / buy-now date: {siteConfig.releaseDateDisplay}</li>
              <li>• Standard: {siteConfig.pricing.standard} · Ultimate: {siteConfig.pricing.ultimate}</li>
              <li>• Bonus window: Vintage Vice City Pack for purchases before Nov 20, 2026</li>
              <li>• PC pre-order: not available (PC unannounced)</li>
            </ul>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">EDITIONS & PRICING</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {editions.map((ed) => (
              <div
                key={ed.name}
                className={`rounded-lg border p-6 ${ed.featured ? "border-accent-pink bg-accent-pink/5" : "border-border bg-surface-elevated"}`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-wider">{ed.name}</h3>
                  <span className="font-display text-3xl text-accent-teal">{ed.price}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{ed.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHAT PRE-ORDERS INCLUDED</h2>
          <div className="mt-6 space-y-4">
            {preOrderIncentives.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHERE TO BUY GTA VI NOW</h2>
          <p className="mt-4 text-sm text-muted">
            Same official storefronts that took pre-orders now sell the live game. Full channel notes:{" "}
            <LocaleLink href="/where-to-buy" className="text-accent-teal hover:text-accent-pink">
              where to buy
            </LocaleLink>
            .
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {buyStores.map((store) => (
              <a
                key={store.name}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow rounded-lg border border-border bg-surface-elevated p-5 transition-colors hover:border-accent-teal/30"
              >
                <h3 className="font-display text-lg tracking-wider">{store.name}</h3>
                <p className="mt-1 text-xs text-muted">{store.type}</p>
                <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-accent-teal">
                  Visit Store →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
            <h2 className="font-display text-xl tracking-wider">PC PRE-ORDERS</h2>
            <p className="mt-2 text-sm text-muted">
              There is still no GTA 6 PC pre-order. Track{" "}
              <LocaleLink href="/gta6-pc-release-date" className="text-accent-teal underline-offset-4 hover:underline">
                will GTA 6 be on PC?
              </LocaleLink>{" "}
              for the official announcement.
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">FAQS</h2>
          <div className="mt-6 space-y-4">
            {preOrderKeywordFaqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-pre-order" relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
