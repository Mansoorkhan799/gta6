import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { storageRequirements, ssdBenefits } from "@/lib/home-content";
import { storageFacts } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 File Size — Up to 212 GB Storage Guide",
  description:
    "GTA 6 file size: Rockstar lists up to 212 GB depending on device. Console download breakdown, SSD advice, and what PC players should reserve.",
  path: "/gta6-file-size",
  keywords: [
    "GTA 6 file size",
    "GTA 6 download size",
    "GTA 6 212 GB",
    "GTA6 file size PC",
    "GTA 6 storage requirements",
    "how big is GTA 6",
  ],
});

export default function FileSizePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-file-size",
            name: "GTA 6 File Size & Download Size",
            description: storageFacts.rockstarNote,
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 File Size", url: `${siteConfig.url}/gta6-file-size` },
          ]),
          faqJsonLd([
            {
              question: "How big is GTA 6 download?",
              answer: `${storageFacts.rockstarNote} ${storageFacts.ps5DownloadApprox}`,
            },
            {
              question: "Do I need an SSD for GTA 6?",
              answer:
                "Yes — an SSD is strongly recommended for texture streaming and load times on console and will be essential on PC. NVMe is preferred for future Windows installs.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 File Size" }]} />
          <PageHeader
            title="GTA 6 FILE SIZE"
            subtitle="Official storage guidance, console download context, and how to prepare your drive."
          />
          <QuickAnswer
            question="How big is GTA 6?"
            answer={`${storageFacts.rockstarMax} available storage depending on device, per Rockstar. Free extra space for patches. PC size is still unannounced.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-gta space-y-4 text-muted">
            <p>
              Rockstar’s published figure is the one that matters for shoppers: <strong className="text-foreground">{storageFacts.rockstarMax}</strong>. Pre-load observers also reported large audio and world-data chunks — which matches a denser Leonida and the music footprint covered on our{" "}
              <LocaleLink href="/gta6-soundtrack" className="text-accent-teal hover:text-accent-pink">
                soundtrack page
              </LocaleLink>
              .
            </p>
          </div>

          <h2 className="mt-10 font-display text-3xl tracking-wider">CONFIRMED VS ESTIMATED</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Platform</th>
                  <th className="px-4 py-3 text-left">Size guidance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rockstar (all devices)", storageFacts.rockstarMax],
                  ["PlayStation 5", storageFacts.ps5DownloadApprox],
                  ["Xbox Series X|S", storageFacts.xboxPackageNote],
                  ["PC (future)", storageFacts.pcEstimate],
                ].map(([platform, size]) => (
                  <tr key={platform} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{platform}</td>
                    <td className="px-4 py-3 text-muted">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">SIZE COMPARISON</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Game</th>
                  <th className="px-4 py-3 text-left">Install guidance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["GTA V", "~72 GB base historically; 100 GB+ with updates"],
                  ["Red Dead Redemption 2", "~150 GB class install"],
                  ["GTA 6 (console)", "Up to 212 GB per Rockstar"],
                ].map(([game, size]) => (
                  <tr key={game} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{game}</td>
                    <td className="px-4 py-3 text-muted">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">STORAGE RECOMMENDATIONS</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Requirement</th>
                  <th className="px-4 py-3 text-left">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {storageRequirements.map((row) => (
                  <tr key={row.requirement} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.requirement}</td>
                    <td className="px-4 py-3 text-muted">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHY SSD MATTERS</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {ssdBenefits.map((b) => (
              <li key={b} className="rounded-lg border border-accent-teal/20 bg-accent-teal/5 p-4 text-sm text-muted">
                <span className="text-accent-teal">▸</span> {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <LocaleLink href="/where-to-buy" className="rounded bg-accent-pink px-6 py-3 text-sm font-bold uppercase tracking-widest text-black">
              Where to Buy
            </LocaleLink>
            <LocaleLink href="/system-requirements" className="rounded border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-accent-teal hover:text-accent-teal">
              Full PC Specs
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-file-size" />
          </div>
        </div>
      </section>
    </>
  );
}
