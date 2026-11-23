import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { gameplaySystems } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Gameplay — Dual Protagonists, Wanted & Systems",
  description:
    "GTA 6 gameplay explained: Lucia & Jason switching, six-star wanted, Criminal Profile, heists, vehicles, phone apps, and what makes Leonida feel alive.",
  path: "/gta6-gameplay",
  keywords: [
    "GTA 6 gameplay",
    "GTA 6 features",
    "GTA 6 wanted system",
    "GTA 6 Criminal Profile",
    "Lucia Jason switch",
  ],
});

export default function GameplayPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-gameplay",
            name: "GTA 6 Gameplay",
            description: "Core gameplay systems in Grand Theft Auto VI.",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Gameplay", url: `${siteConfig.url}/gta6-gameplay` },
          ]),
          faqJsonLd([
            {
              question: "Can you switch between Lucia and Jason in GTA 6?",
              answer:
                "Yes. Rockstar designed dual-protagonist play with locked missions, auto-switch set pieces, and free-roam switching when the story allows. The unused partner continues a routine until you call them.",
            },
            {
              question: "Does GTA 6 have a six-star wanted level?",
              answer:
                "Yes. The wanted system goes up to six stars. Crimes escalate when witnesses or alarms report you.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gameplay" }]} />
          <PageHeader
            title="GTA 6 GAMEPLAY"
            subtitle="The systems that define Leonida — partners, heat, heists, and a world that keeps moving."
          />
          <QuickAnswer
            question="What is new in GTA 6 gameplay?"
            answer="Dual protagonists with flexible switching, a six-star wanted ladder, Criminal Profile reputation, denser living-world simulation, tiered vehicle theft, and deeper robbery / banking loops."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted leading-relaxed">
            Reviews and Rockstar’s own showcases agree on one theme: GTA 6 is not only a bigger map — it is a thicker set of interactions. Use this page as a systems overview, then jump to{" "}
            <LocaleLink href="/gta6-tips" className="text-accent-teal hover:text-accent-pink">
              beginner tips
            </LocaleLink>{" "}
            for practical first-hour advice, or{" "}
            <LocaleLink href="/gta6-reviews" className="text-accent-teal hover:text-accent-pink">
              reviews
            </LocaleLink>{" "}
            for critic consensus.
          </p>

          <div className="mt-10 space-y-6">
            {gameplaySystems.map((system) => (
              <article key={system.title} className="rounded-lg border border-border bg-surface-elevated p-5 sm:p-6">
                <h2 className="font-display text-2xl tracking-wider">{system.title.toUpperCase()}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{system.body}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">STORY LENGTH & PACE</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Coverage around launch commonly places the main story in a multi-dozen-hour range depending on how much optional, consequence-bearing content you chase. Leonida rewards detours — podcasts, mini-activities, and side scores — without forcing every distraction onto the critical path.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wider">ONLINE VS SINGLE-PLAYER</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Day-one messaging centered on the Lucia & Jason campaign. For multiplayer expectations and what is (and is not) confirmed, see{" "}
            <LocaleLink href="/gta6-online" className="text-accent-teal hover:text-accent-pink">
              GTA Online status
            </LocaleLink>
            .
          </p>

          <div className="mt-12">
            <PillarLinks current="/gta6-gameplay" />
          </div>
        </div>
      </section>
    </>
  );
}
