import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { beginnerTips } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Tips — Beginner Guide for Leonida",
  description:
    "GTA 6 beginner tips: rob smarter, stock zombix, shake cops, recover impounded cars, bank your cash, and survive your first hours in Vice City.",
  path: "/gta6-tips",
  keywords: [
    "GTA 6 tips",
    "GTA 6 beginner guide",
    "GTA 6 tricks",
    "GTA 6 how to escape cops",
    "GTA VI tips",
  ],
});

export default function TipsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-tips",
            name: "GTA 6 Beginner Tips",
            description: "Practical beginner tips for Grand Theft Auto VI in Leonida.",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Beginner Tips", url: `${siteConfig.url}/gta6-tips` },
          ]),
          faqJsonLd([
            {
              question: "What should new GTA 6 players do first?",
              answer:
                "Learn when to stop looting once sirens hit, keep healing items stocked, bank cash often, and practice vehicle escapes. Systems depth matters more than rushing every side activity in hour one.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Beginner Tips" }]} />
          <PageHeader
            title="BEGINNER TIPS"
            subtitle="Practical habits that keep Lucia and Jason alive — and solvent — in Leonida."
          />
          <QuickAnswer
            question="Any must-know GTA 6 tips?"
            answer="Leave robberies when sirens hit, prioritize safes over civilians, stock zombix, use focus to spot loot, bank cash, and recover impounded cars via Scooter Bros when needed."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-muted">
            These tips complement the deeper{" "}
            <LocaleLink href="/gta6-gameplay" className="text-accent-teal hover:text-accent-pink">
              gameplay systems page
            </LocaleLink>
            . They are orientation advice for new players — not a full spoiler walkthrough.
          </p>

          <ol className="mt-10 space-y-5">
            {beginnerTips.map((tip, index) => (
              <li key={tip.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-teal">Tip {index + 1}</p>
                <h2 className="mt-1 font-display text-xl tracking-wider">{tip.title.toUpperCase()}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tip.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-lg border border-border bg-surface p-6">
            <h2 className="font-display text-2xl tracking-wider">NEXT STEPS</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                → Learn regions on the{" "}
                <LocaleLink href="/gta6-map" className="text-accent-teal hover:text-accent-pink">
                  Leonida map
                </LocaleLink>
              </li>
              <li>
                → Meet the cast on{" "}
                <LocaleLink href="/characters" className="text-accent-teal hover:text-accent-pink">
                  characters
                </LocaleLink>
              </li>
              <li>
                → Still on PC waitlist?{" "}
                <LocaleLink href="/gta6-pc-release-date" className="text-accent-teal hover:text-accent-pink">
                  PC release tracker
                </LocaleLink>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-tips" />
          </div>
        </div>
      </section>
    </>
  );
}
