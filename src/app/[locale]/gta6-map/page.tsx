import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { mapRegions } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Map — Leonida Regions, Vice City & Keys Guide",
  description:
    "Explore the GTA 6 map: Leonida’s six regions — Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga National Park. Official setting guide.",
  path: "/gta6-map",
  keywords: [
    "GTA 6 map",
    "GTA 6 Leonida",
    "GTA 6 Vice City",
    "GTA VI map size",
    "Leonida Keys",
    "GTA 6 locations",
  ],
});

export default function MapPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-map",
            name: "GTA 6 Map — Leonida Guide",
            description: "Official regions and setting guide for Grand Theft Auto VI’s Leonida map.",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Map", url: `${siteConfig.url}/gta6-map` },
          ]),
          faqJsonLd([
            {
              question: "Where is GTA 6 set?",
              answer:
                "GTA 6 is set in Leonida, a fictional Florida-inspired state. Vice City is the main metropolis, with five other named regions across the map.",
            },
            {
              question: "How big is the GTA 6 map?",
              answer:
                "Rockstar has not published square-mile figures. Studio comments describe Leonida as vastly larger than prior Rockstar sandboxes — roughly on the order of combining several previous maps — treat that as qualitative, not a precise measurement.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Map" }]} />
          <PageHeader
            title="GTA 6 MAP"
            subtitle="Leonida state guide — Vice City and every official region named by Rockstar."
          />
          <QuickAnswer
            question="What is the GTA 6 map?"
            answer="Leonida: a Florida-inspired open world centered on modern Vice City, plus Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga National Park."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-gta space-y-4 text-muted">
            <p>
              Searching “GTA 6 map” usually means one of three things: where the story starts, how the regions connect, or how big Leonida really is. This page sticks to what Rockstar has named and described — so you can orient yourself before (or while) exploring.
            </p>
            <p>
              Lucia and Jason’s campaign moves through coastal islands, neon city blocks, industrial ports, and wild parkland. If you want character context for those locations, see the{" "}
              <LocaleLink href="/characters" className="text-accent-teal hover:text-accent-pink">
                characters guide
              </LocaleLink>
              . For systems you’ll use while traveling, read{" "}
              <LocaleLink href="/gta6-gameplay" className="text-accent-teal hover:text-accent-pink">
                gameplay
              </LocaleLink>
              .
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">SIX OFFICIAL REGIONS</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mapRegions.map((region) => (
              <article
                key={region.slug}
                id={region.slug}
                className="rounded-lg border border-border bg-surface-elevated p-5"
              >
                <h3 className="font-display text-xl tracking-wider text-accent-pink">{region.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{region.summary}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">MAP SIZE — WHAT’S CONFIRMED</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Rockstar has not released an official square-kilometer number. Comments from Rockstar North (reported via Edge and later coverage) describe Leonida as dramatically larger than GTA V’s Los Santos — in the ballpark of stacking prior Rockstar playable maps. Use that as scale context, not a GPS measurement.
            </p>
            <p>
              Practically, visitors should plan for longer travel times, denser traffic in Vice City, and meaningful differences between Keys island hopping and Mount Kalaga wilderness runs. Fast-travel apps and transit options help — covered in our{" "}
              <LocaleLink href="/gta6-tips" className="text-accent-teal hover:text-accent-pink">
                beginner tips
              </LocaleLink>
              .
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHY THIS MATTERS FOR PC PLAYERS</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A denser, larger streaming world is one reason PC hardware talk focuses on CPU simulation and SSD speed as much as raw GPU power. When the Windows version lands, expect open-world streaming to reward fast storage — see{" "}
            <LocaleLink href="/gta6-file-size" className="text-accent-teal hover:text-accent-pink">
              file size
            </LocaleLink>{" "}
            and{" "}
            <LocaleLink href="/system-requirements" className="text-accent-teal hover:text-accent-pink">
              system requirements
            </LocaleLink>
            .
          </p>

          <div className="mt-12">
            <PillarLinks current="/gta6-map" />
          </div>
        </div>
      </section>
    </>
  );
}
