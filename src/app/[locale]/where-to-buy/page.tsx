import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { buyChannels } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.buy;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/where-to-buy"),
  });
}

export default async function WhereToBuyPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.buy;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/where-to-buy"),
            name: "Where to Buy GTA 6",
            description: "Official purchase channels for Grand Theft Auto VI on PS5 and Xbox Series X|S.",
          }),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "Where to Buy", url: `${siteConfig.url}${pagePath(locale, "/where-to-buy")}` },
          ]),
          faqJsonLd([
            {
              question: "Where can I buy GTA 6?",
              answer:
                "PlayStation Store, Xbox / Microsoft Store, Rockstar Games Store, and major retailers for code-in-box physical editions. Console only at launch — no official PC storefront yet.",
            },
            {
              question: "Can I buy GTA 6 for PC?",
              answer:
                "Not yet. There is no official PC SKU. Grey-market “PC keys” claiming day-one Windows access are not legitimate Rockstar products.",
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
          <div className="space-y-4">
            {buyChannels.map((channel) => (
              <article key={channel.name} className="rounded-lg border border-border bg-surface-elevated p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl tracking-wider">{channel.name.toUpperCase()}</h2>
                  <span className="text-xs uppercase tracking-wider text-accent-teal">{channel.platforms}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{channel.note}</p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-accent-pink hover:text-accent-teal"
                >
                  Visit store →
                </a>
              </article>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">BEFORE YOU PAY</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>
              Pick an edition — see{" "}
              <LocaleLink href="/gta6-editions" className="text-accent-teal hover:text-accent-pink">
                Standard vs Ultimate
              </LocaleLink>
              .
            </li>
            <li>Confirm you own PS5 or Xbox Series X|S (not last-gen).</li>
            <li>
              Free ~212 GB — details on{" "}
              <LocaleLink href="/gta6-file-size" className="text-accent-teal hover:text-accent-pink">
                file size
              </LocaleLink>
              .
            </li>
            <li>
              PC players: follow the{" "}
              <LocaleLink href="/gta6-download" className="text-accent-teal hover:text-accent-pink">
                download safety guide
              </LocaleLink>{" "}
              and wait for Rockstar’s announcement.
            </li>
          </ul>

          <div className="mt-12">
            <PillarLinks current="/where-to-buy" relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
