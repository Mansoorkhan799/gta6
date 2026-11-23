import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { trailers } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Trailers — Launch, Extended Look, Trailer 1 & 2",
  description:
    "Watch the official GTA 6 trailer timeline: Trailer 1, Trailer 2, An Extended Look, and the Launch Trailer — with dates and what each reveal covered.",
  path: "/gta6-trailers",
  keywords: [
    "GTA 6 trailer",
    "GTA 6 launch trailer",
    "GTA 6 Extended Look",
    "GTA VI trailer 2",
    "Rockstar GTA 6 trailer",
  ],
});

export default function TrailersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-trailers",
            name: "GTA 6 Trailers",
            description: "Official Grand Theft Auto VI trailer timeline and viewing guide.",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Trailers", url: `${siteConfig.url}/gta6-trailers` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Trailers" }]} />
          <PageHeader
            title="TRAILERS"
            subtitle="Every major official GTA 6 trailer in order — from the 2023 reveal to launch."
          />
          <QuickAnswer
            question="Where can I watch GTA 6 trailers?"
            answer="Rockstar’s official GTA VI hub hosts the Launch Trailer, An Extended Look, Trailer 2, and Trailer 1. Use official Rockstar / YouTube uploads only."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {trailers.map((trailer) => (
              <article key={trailer.title} className="rounded-lg border border-border bg-surface-elevated p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-2xl tracking-wider">{trailer.title.toUpperCase()}</h2>
                  <span className="text-xs text-muted">
                    {trailer.date} · {trailer.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">{trailer.note}</p>
                {trailer.youtubeId ? (
                  <div className="mt-4 aspect-video overflow-hidden rounded-lg border border-border bg-black">
                    <iframe
                      title={trailer.title}
                      src={`https://www.youtube-nocookie.com/embed/${trailer.youtubeId}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <a
                    href="https://www.rockstargames.com/VI/out-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent-teal hover:text-accent-pink"
                  >
                    Watch on Rockstar →
                  </a>
                )}
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted">
            Want the full story context after watching? Read{" "}
            <LocaleLink href="/characters" className="text-accent-teal hover:text-accent-pink">
              characters
            </LocaleLink>
            ,{" "}
            <LocaleLink href="/gta6-map" className="text-accent-teal hover:text-accent-pink">
              the Leonida map
            </LocaleLink>
            , and{" "}
            <LocaleLink href="/gta6-gameplay" className="text-accent-teal hover:text-accent-pink">
              gameplay systems
            </LocaleLink>
            .
          </p>

          <div className="mt-12">
            <PillarLinks current="/gta6-trailers" />
          </div>
        </div>
      </section>
    </>
  );
}
