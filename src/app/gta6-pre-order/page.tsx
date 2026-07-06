import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, howToPreOrderJsonLd, gta6ProductJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { editions, preOrderIncentives } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Pre-Order — Editions, Pricing & Bonuses ($79.99 / $99.99)",
  description:
    "Pre-order GTA 6 now on PS5 and Xbox Series X|S. Standard Edition $79.99, Ultimate Edition $99.99. Vintage Vice City Pack, pre-load Nov 12, launch Nov 19, 2026.",
  path: "/gta6-pre-order",
  keywords: [
    "GTA 6 pre order",
    "GTA6 pre-order",
    "GTA 6 pre order bonus",
    "GTA 6 Ultimate Edition",
    "GTA 6 price",
    "pre order GTA 6",
  ],
});

const preOrderStores = [
  { name: "Rockstar Games Store", url: "https://www.rockstargames.com/VI", type: "Digital & Physical" },
  { name: "PlayStation Store", url: "https://store.playstation.com", type: "PS5 Digital" },
  { name: "Xbox Store", url: "https://www.xbox.com", type: "Xbox Series X|S Digital" },
  { name: "Amazon / Best Buy / GameStop", url: "https://www.amazon.com", type: "Physical (download code)" },
];

export default function PreOrderPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-pre-order",
            name: "GTA 6 Pre-Order Guide",
            description: "Pre-order GTA 6 Standard and Ultimate Editions for PS5 and Xbox Series X|S.",
            mainEntityId: `${siteConfig.url}/gta6-pre-order#howto-preorder`,
          }),
          gta6ProductJsonLd(),
          gta6SoftwareApplicationJsonLd(),
          howToPreOrderJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Pre-Order", url: `${siteConfig.url}/gta6-pre-order` },
          ]),
          faqJsonLd([
            {
              question: "How much does GTA 6 cost?",
              answer: `GTA 6 Standard Edition is ${siteConfig.pricing.standard} and Ultimate Edition is ${siteConfig.pricing.ultimate} for PS5 and Xbox Series X|S.`,
            },
            {
              question: "When can I pre-load GTA 6?",
              answer: `Digital pre-loading begins ${siteConfig.preLoadDateDisplay}. The game launches ${siteConfig.releaseDateDisplay}.`,
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Pre-Order" }]} />
          <PageHeader
            title="GTA 6 PRE-ORDER"
            subtitle="Editions, pricing, bonuses, pre-load dates, and where to pre-order Grand Theft Auto VI."
          />
          <QuickAnswer
            question="Can I pre-order GTA 6?"
            answer={`Yes — pre-orders are live for PS5 and Xbox Series X|S. Standard Edition ${siteConfig.pricing.standard}, Ultimate Edition ${siteConfig.pricing.ultimate}. Pre-load starts ${siteConfig.preLoadDateDisplay}.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wider">EDITIONS & PRICING</h2>
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

          <h2 className="mt-12 font-display text-3xl tracking-wider">PRE-ORDER BONUSES</h2>
          <div className="mt-6 space-y-4">
            {preOrderIncentives.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHERE TO PRE-ORDER</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {preOrderStores.map((store) => (
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
              PC pre-orders are <strong className="text-foreground">not yet available</strong>.
              Bookmark{" "}
              <Link href="/gta6-pc-release-date" className="text-accent-teal underline-offset-4 hover:underline">
                our PC release date guide
              </Link>{" "}
              for updates.
            </p>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-pre-order" />
          </div>
        </div>
      </section>
    </>
  );
}
