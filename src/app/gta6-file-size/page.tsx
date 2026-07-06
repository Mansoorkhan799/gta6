import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { storageRequirements, ssdBenefits } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 File Size & Download Size — Storage Requirements",
  description:
    "GTA 6 download size estimated at 100–150GB+. Storage requirements, SSD recommendations, update space, and how to prepare your PC or console for GTA VI.",
  path: "/gta6-file-size",
  keywords: [
    "GTA 6 file size",
    "GTA 6 download size",
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
            description: "GTA 6 estimated download size, storage requirements, and SSD recommendations.",
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
              answer: "Rockstar has not confirmed exact file size. Based on GTA V (72GB base, 100GB+ with updates) and Leonida's expanded open world, expect 100–150GB or more.",
            },
            {
              question: "Do I need an SSD for GTA 6?",
              answer: "Yes — an SSD is strongly recommended for faster loading, texture streaming, and overall performance. NVMe SSD preferred for PC.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 File Size" }]} />
          <PageHeader
            title="GTA 6 FILE SIZE"
            subtitle="Download size estimates, storage requirements, and how to prepare your drive for Grand Theft Auto VI."
          />
          <QuickAnswer
            question="How big is GTA 6?"
            answer="Estimated 100–150GB+ at launch. Rockstar has not confirmed the exact size. An SSD is strongly recommended — reserve extra space for updates and multiplayer content."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-gta">
            <p>
              Modern AAA games continue growing in size. GTA 6 includes high-resolution textures, the largest map Rockstar has built,
              cinematic assets, audio, day-one patches, and evolving multiplayer content — all contributing to a massive install footprint.
            </p>
          </div>

          <h2 className="mt-10 font-display text-3xl tracking-wider">SIZE COMPARISON</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Game</th>
                  <th className="px-4 py-3 text-left">Base Install</th>
                  <th className="px-4 py-3 text-left">With Updates</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["GTA V (2013)", "~72 GB", "100 GB+"],
                  ["Red Dead Redemption 2", "~150 GB", "150 GB+"],
                  ["GTA 6 (estimated)", "100–150 GB", "150 GB+"],
                ].map(([game, base, updates]) => (
                  <tr key={game} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{game}</td>
                    <td className="px-4 py-3 text-muted">{base}</td>
                    <td className="px-4 py-3 text-muted">{updates}</td>
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
            <Link href="/gta6-download" className="rounded bg-accent-pink px-6 py-3 text-sm font-bold uppercase tracking-widest text-black">
              Download Guide
            </Link>
            <Link href="/system-requirements" className="rounded border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-accent-teal hover:text-accent-teal">
              Full PC Specs
            </Link>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-file-size" />
          </div>
        </div>
      </section>
    </>
  );
}
