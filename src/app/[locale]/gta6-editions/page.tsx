import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { editions } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Editions & Price — Standard vs Ultimate",
  description:
    "GTA 6 Standard ($79.99) vs Ultimate Edition ($99.99): what’s included, Vintage Vice City Pack, digital vs code-in-box, and which edition to buy.",
  path: "/gta6-editions",
  keywords: [
    "GTA 6 Ultimate Edition",
    "GTA 6 price",
    "GTA 6 Standard Edition",
    "GTA 6 editions",
    "GTA VI cost",
  ],
});

export default function EditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-editions",
            name: "GTA 6 Editions & Price",
            description: "Standard vs Ultimate Edition comparison for Grand Theft Auto VI.",
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Editions & Price", url: `${siteConfig.url}/gta6-editions` },
          ]),
          faqJsonLd([
            {
              question: "How much does GTA 6 cost?",
              answer: `Standard Edition is ${siteConfig.pricing.standard}. Ultimate Edition is ${siteConfig.pricing.ultimate} and is digital-only.`,
            },
            {
              question: "Is Ultimate Edition worth it?",
              answer:
                "Ultimate adds exclusive vehicles, weapons, outfits, shops, and story-threaded bonuses. If you mainly want the campaign, Standard is enough; collectors and cosmetic hunters lean Ultimate.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Editions & Price" }]} />
          <PageHeader
            title="EDITIONS & PRICE"
            subtitle="Standard vs Ultimate — clear inclusions so you do not overpay for cosmetics you will not use."
          />
          <QuickAnswer
            question="Which GTA 6 edition should I buy?"
            answer={`Buy Standard (${siteConfig.pricing.standard}) for the full campaign. Choose Ultimate (${siteConfig.pricing.ultimate}, digital) for exclusive vehicles, gear, shops, and bonuses threaded through Lucia & Jason’s story.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {editions.map((edition) => (
              <article key={edition.name} className="rounded-lg border border-border bg-surface-elevated p-6">
                <h2 className="font-display text-2xl tracking-wider">{edition.name.toUpperCase()}</h2>
                <p className="mt-2 text-3xl font-bold text-accent-teal">{edition.price}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{edition.availability}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {edition.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">PHYSICAL = CODE IN BOX</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Retail “physical” editions contain a download code, not a playable optical disc. You still need console storage and a download — plan for{" "}
            <LocaleLink href="/gta6-file-size" className="text-accent-teal hover:text-accent-pink">
              up to 212 GB
            </LocaleLink>
            .
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wider">PC PRICING</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            PC pricing is unannounced. Console MSRP is the best current reference. Track{" "}
            <LocaleLink href="/gta6-pc-release-date" className="text-accent-teal hover:text-accent-pink">
              PC release date
            </LocaleLink>{" "}
            for storefront news — then buy only from Rockstar / Steam / Epic when they go live.
          </p>

          <div className="mt-10">
            <LocaleLink
              href="/where-to-buy"
              className="inline-flex rounded bg-accent-pink px-6 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-accent-teal"
            >
              Where to Buy GTA 6 →
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-editions" />
          </div>
        </div>
      </section>
    </>
  );
}
