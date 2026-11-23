import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { soundtrackFacts } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Soundtrack & Album — Radio, Score & The Album",
  description:
    "GTA 6 music guide: Grand Theft Auto VI: The Album (34 tracks), Justice score release, and how radio differs from the companion album.",
  path: "/gta6-soundtrack",
  keywords: [
    "GTA 6 soundtrack",
    "GTA 6 album",
    "GTA 6 radio",
    "GTA VI The Album",
    "GTA 6 Justice score",
  ],
});

export default function SoundtrackPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-soundtrack",
            name: "GTA 6 Soundtrack",
            description: "Companion album, score, and radio overview for Grand Theft Auto VI.",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Soundtrack", url: `${siteConfig.url}/gta6-soundtrack` },
          ]),
          faqJsonLd([
            {
              question: "Is there a GTA 6 soundtrack album?",
              answer: `Yes. ${soundtrackFacts.albumTitle} is a ${soundtrackFacts.albumTracks}-track companion album released ${soundtrackFacts.albumRelease}. It is separate from in-game radio and from Justice’s original score.`,
            },
            {
              question: "Who composed the GTA 6 score?",
              answer: `Justice composed the original score, with a ${soundtrackFacts.scoreTracks}-track release dated ${soundtrackFacts.scoreRelease}.`,
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Soundtrack" }]} />
          <PageHeader
            title="SOUNDTRACK"
            subtitle="The Album, radio stations, and Justice’s score — three different music layers in Leonida."
          />
          <QuickAnswer
            question="What is the GTA 6 soundtrack?"
            answer={`${soundtrackFacts.albumTitle} (${soundtrackFacts.albumTracks} songs, ${soundtrackFacts.albumRelease}) sits beside in-game radio and a separate Justice score (${soundtrackFacts.scoreRelease}).`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-border bg-surface-elevated p-5">
              <h2 className="font-display text-lg tracking-wider text-accent-pink">THE ALBUM</h2>
              <p className="mt-3 text-sm text-muted">
                {soundtrackFacts.albumTracks} tracks · {soundtrackFacts.albumRelease}
              </p>
              <p className="mt-2 text-sm text-muted">{soundtrackFacts.albumArtistsNote}</p>
            </article>
            <article className="rounded-lg border border-border bg-surface-elevated p-5">
              <h2 className="font-display text-lg tracking-wider text-accent-pink">JUSTICE SCORE</h2>
              <p className="mt-3 text-sm text-muted">
                {soundtrackFacts.scoreTracks} tracks · {soundtrackFacts.scoreRelease}
              </p>
              <p className="mt-2 text-sm text-muted">
                Original score by {soundtrackFacts.scoreArtist} — distinct from licensed radio and The Album.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-surface-elevated p-5">
              <h2 className="font-display text-lg tracking-wider text-accent-pink">IN-GAME RADIO</h2>
              <p className="mt-3 text-sm text-muted">{soundtrackFacts.radioNote}</p>
            </article>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHY AUDIO SIZE IS HUGE</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Console pre-load breakdowns showed tens of gigabytes dedicated to audio alone — dialogue, radio, score, and world sound. That is a major reason the install approaches{" "}
            <LocaleLink href="/gta6-file-size" className="text-accent-teal hover:text-accent-pink">
              212 GB
            </LocaleLink>
            .
          </p>

          <div className="mt-12">
            <PillarLinks current="/gta6-soundtrack" />
          </div>
        </div>
      </section>
    </>
  );
}
