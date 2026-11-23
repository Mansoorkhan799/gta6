import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { onlineStatus } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Online — Multiplayer Status & What We Know",
  description:
    "Is GTA Online coming to GTA 6? Launch focused on single-player. Here’s the honest status on multiplayer, rumors vs confirmation, and how to stay safe.",
  path: "/gta6-online",
  keywords: [
    "GTA 6 Online",
    "GTA 6 multiplayer",
    "GTA Online VI",
    "GTA 6 GTA Online",
    "GTA 6 co-op",
  ],
});

export default function OnlinePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-online",
            name: "GTA 6 Online Status",
            description: onlineStatus.summary,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Online", url: `${siteConfig.url}/gta6-online` },
          ]),
          faqJsonLd([
            {
              question: "Does GTA 6 have Online at launch?",
              answer:
                "Rockstar’s launch marketing emphasized the single-player story. A full GTA 6 online mode has not been detailed with a feature list and start date comparable to GTA Online’s public documentation.",
            },
            {
              question: "Will GTA Online shut down?",
              answer:
                "Rockstar has not announced a shutdown of GTA V’s GTA Online tied to GTA 6’s launch. Treat “Online migrating tomorrow” social posts as unverified unless Rockstar confirms.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Online" }]} />
          <PageHeader title="GTA 6 ONLINE" subtitle={onlineStatus.headline} />
          <QuickAnswer question="Is GTA 6 Online out?" answer={onlineStatus.summary} />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wider">WHAT WE KNOW</h2>
          <ul className="mt-6 space-y-3">
            {onlineStatus.whatWeKnow.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-surface-elevated p-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-wider">PLAY THE STORY FIRST</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            If you just unlocked Leonida, focus on{" "}
            <LocaleLink href="/gta6-gameplay" className="text-accent-teal hover:text-accent-pink">
              gameplay systems
            </LocaleLink>{" "}
            and{" "}
            <LocaleLink href="/gta6-tips" className="text-accent-teal hover:text-accent-pink">
              beginner tips
            </LocaleLink>
            . Online will have its own economy, progression, and anti-cheat expectations when Rockstar is ready.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wider">SCAM WATCH</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Sites offering “GTA 6 Online PC beta,” free shark-card generators, or early multiplayer APKs are not official. Stick to{" "}
            <a
              href="https://www.rockstargames.com/newswire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-teal hover:text-accent-pink"
            >
              Rockstar Newswire
            </a>{" "}
            and our{" "}
            <LocaleLink href="/gta6-download" className="text-accent-teal hover:text-accent-pink">
              safe download guide
            </LocaleLink>
            .
          </p>

          <div className="mt-12">
            <PillarLinks current="/gta6-online" />
          </div>
        </div>
      </section>
    </>
  );
}
