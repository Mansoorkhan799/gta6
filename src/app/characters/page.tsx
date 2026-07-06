import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { characters } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Characters — Lucia, Jason & Vice City Cast",
  description:
    "Meet the GTA 6 characters — Lucia and Jason, the dual protagonists of Grand Theft Auto VI set in Vice City, Leonida. Story, roles, and everything we know.",
  path: "/characters",
  keywords: [
    "GTA6 characters",
    "GTA 6 Lucia",
    "GTA 6 Jason",
    "GTA VI protagonists",
    "GTA6 cast",
  ],
});

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Characters", url: `${siteConfig.url}/characters` },
        ])}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Characters" }]} />
          <PageHeader
            title="CHARACTERS"
            subtitle="Meet the protagonists of Grand Theft Auto VI — Lucia and Jason navigate the criminal underworld of modern-day Vice City."
          />
        </div>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {characters.map((character) => (
              <article
                key={character.name}
                className="card-glow overflow-hidden rounded-lg border border-border bg-surface-elevated"
              >
                <div className="relative h-48 bg-gradient-to-br from-accent-pink/20 via-surface to-accent-teal/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl tracking-wider text-foreground/10">
                      {character.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface-elevated to-transparent p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent-teal">
                      {character.role}
                    </span>
                    <h2 className="font-display text-4xl tracking-wider">{character.name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted">{character.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-border bg-surface-elevated p-8">
            <h2 className="font-display text-3xl tracking-wider">THE SETTING: LEONIDA</h2>
            <p className="mt-4 leading-relaxed text-muted">
              GTA 6 is set in the fictional state of <strong className="text-foreground">Leonida</strong>,
              inspired by Florida. Vice City serves as the metropolitan hub — a vibrant, neon-soaked city
              with beaches, nightlife, and a thriving criminal ecosystem. Beyond the city limits lie
              swamplands, small towns, and island chains modeled after the Florida Keys.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Lucia and Jason&apos;s story unfolds across this diverse landscape, from high-rise heists
              in downtown Vice City to boat chases through mangrove swamps.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gta6-download"
              className="inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black"
            >
              Get Ready for GTA 6
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
