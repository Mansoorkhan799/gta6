import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { releaseTimeline, timelineDetails } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Release Date — Out Now on PS5 & Xbox",
  description:
    "GTA 6 released November 19, 2026 on PS5 and Xbox Series X|S. Full timeline, pre-load history, platforms, and the latest PC release status.",
  path: "/gta6-release-date",
  keywords: [
    "GTA 6 release date",
    "GTA6 release date",
    "when does GTA 6 come out",
    "GTA VI release date",
    "GTA 6 launch date",
    "GTA 6 out now",
  ],
});

export default function ReleaseDatePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-release-date",
            name: "GTA 6 Release Date",
            description: `GTA 6 releases ${siteConfig.releaseDateDisplay} on PS5 and Xbox Series X|S.`,
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Release Date", url: `${siteConfig.url}/gta6-release-date` },
          ]),
          faqJsonLd([
            {
              question: "When did GTA 6 release?",
              answer: `Grand Theft Auto VI launched on ${siteConfig.releaseDay}, ${siteConfig.releaseDateDisplay}, for PlayStation 5 and Xbox Series X|S. It is out now worldwide.`,
            },
            {
              question: "Has GTA 6 been delayed?",
              answer: "Yes before launch. GTA 6 was initially targeted for 2025, shifted to May 26, 2026, then finalized to November 19, 2026 by Rockstar Games.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Release Date" }]} />
          <PageHeader
            title="GTA 6 RELEASE DATE"
            subtitle="Out now on console — full timeline, platforms, and what still matters for PC players."
          />
          <QuickAnswer
            question="When did GTA 6 come out?"
            answer={`GTA 6 launched ${siteConfig.releaseDay}, ${siteConfig.releaseDateDisplay}, on PlayStation 5 and Xbox Series X|S. PC remains officially unannounced.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wider">OFFICIALLY CONFIRMED</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Status", "Out now (console)"],
                  ["Release Date", `${siteConfig.releaseDay}, ${siteConfig.releaseDateDisplay}`],
                  ["Platforms", "PlayStation 5, Xbox Series X|S"],
                  ["Developer", "Rockstar Games"],
                  ["Publisher", "Take-Two Interactive"],
                  ["Setting", "State of Leonida (Vice City)"],
                  ["Pre-Load Started", siteConfig.preLoadDateDisplay],
                  ["Standard Price", siteConfig.pricing.standard],
                  ["File Size", siteConfig.fileSizeDisplay],
                  ["Metacritic (critics)", siteConfig.metacriticScore],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{label}</td>
                    <td className="px-4 py-3 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">RELEASE TIMELINE</h2>
          <div className="mt-6 space-y-6">
            {releaseTimeline.map((item) => (
              <div key={item.date} className="rounded-lg border border-border bg-surface-elevated p-5">
                <time className="text-xs font-medium uppercase tracking-wider text-accent-teal">{item.date}</time>
                <h3 className="font-display text-xl tracking-wider">{item.event}</h3>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {timelineDetails.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
            <h2 className="font-display text-xl tracking-wider">PC RELEASE DATE</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Rockstar has not announced a PC release date. Based on historical patterns (GTA V: 19 months, RDR2: 13 months),
              GTA 6 for PC is estimated for <strong className="text-foreground">{siteConfig.pcReleaseEstimate}</strong>.
            </p>
            <LocaleLink href="/gta6-pc-release-date" className="mt-4 inline-block text-sm font-medium uppercase tracking-wider text-accent-teal hover:text-accent-pink">
              Full PC Release Date Guide →
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-release-date" />
          </div>
        </div>
      </section>
    </>
  );
}
