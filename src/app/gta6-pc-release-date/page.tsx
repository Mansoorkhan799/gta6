import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { pcHistory } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 PC Release Date — When Is GTA VI Coming to PC?",
  description:
    "GTA 6 PC release date is unannounced. Based on Rockstar history, expect GTA VI on PC between late 2027 and mid-2028. Full analysis, Steam/Launcher info, and what to expect.",
  path: "/gta6-pc-release-date",
  keywords: [
    "GTA 6 PC release date",
    "GTA6 PC release",
    "when is GTA 6 coming to PC",
    "GTA VI PC launch",
    "GTA 6 Steam release date",
  ],
});

export default function PCReleaseDatePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-pc-release-date",
            name: "GTA 6 PC Release Date",
            description: `When GTA 6 is coming to PC — estimated ${siteConfig.pcReleaseEstimate}.`,
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 PC Release Date", url: `${siteConfig.url}/gta6-pc-release-date` },
          ]),
          faqJsonLd([
            {
              question: "When is GTA 6 coming to PC?",
              answer: `Rockstar has not announced a GTA 6 PC release date. Console launch is ${siteConfig.releaseDateDisplay}. Based on historical delays, PC is estimated for ${siteConfig.pcReleaseEstimate}.`,
            },
            {
              question: "Will GTA 6 be on Steam?",
              answer: "Rockstar has not confirmed Steam availability, but GTA V and RDR2 both launched on Steam after their PC releases. Expect GTA 6 on Rockstar Launcher with likely Steam support.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 PC Release Date" }]} />
          <PageHeader
            title="GTA 6 PC RELEASE DATE"
            subtitle="When Grand Theft Auto VI is expected on PC — official status, historical patterns, and platform predictions."
          />
          <QuickAnswer
            question="When is GTA 6 coming to PC?"
            answer={`No official PC date yet. Console release is ${siteConfig.releaseDateDisplay}. Based on Rockstar history, GTA 6 PC is estimated for ${siteConfig.pcReleaseEstimate}.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-gta space-y-4">
            <p>
              Grand Theft Auto VI will launch first on PlayStation 5 and Xbox Series X|S on{" "}
              <strong>{siteConfig.releaseDateDisplay}</strong>. A PC version is entirely absent from Rockstar&apos;s active marketing roadmap — but history strongly suggests it will arrive later.
            </p>
            <p>
              This is not a dismissal of the PC audience. Rockstar splits development to optimize for fixed console hardware first, then dedicates a standalone cycle for PC — unlocking framerates, ultra-wide support, ray tracing, and modding frameworks.
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">HISTORICAL CONSOLE-TO-PC GAP</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Game</th>
                  <th className="px-4 py-3 text-left">Console</th>
                  <th className="px-4 py-3 text-left">PC</th>
                  <th className="px-4 py-3 text-left">Gap</th>
                </tr>
              </thead>
              <tbody>
                {pcHistory.map((row) => (
                  <tr key={row.game} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.game}</td>
                    <td className="px-4 py-3 text-muted">{row.console}</td>
                    <td className="px-4 py-3 text-muted">{row.pc}</td>
                    <td className="px-4 py-3 text-accent-pink">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">EXPECTED PC PLATFORMS</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Rockstar Launcher", note: "Primary platform — day-one PC release expected" },
              { name: "Steam", note: "Likely available at or shortly after PC launch" },
              { name: "Epic Games Store", note: "Possible timed exclusivity or simultaneous release" },
            ].map((p) => (
              <div key={p.name} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.note}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHAT PC PLAYERS CAN EXPECT</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {[
              "Unlocked framerates and ultra-wide monitor support",
              "Enhanced ray tracing and DLSS/FSR upscaling",
              "Higher resolution textures and draw distances",
              "Mod support (GTA V's mod community is massive)",
              "Potential exclusive PC graphics settings",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent-teal">▸</span> {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/gta6-download" className="rounded bg-accent-pink px-6 py-3 text-sm font-bold uppercase tracking-widest text-black">
              PC Download Guide
            </Link>
            <Link href="/system-requirements" className="rounded border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-accent-teal hover:text-accent-teal">
              System Requirements
            </Link>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-pc-release-date" />
          </div>
        </div>
      </section>
    </>
  );
}
