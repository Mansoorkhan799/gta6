import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, howToDownloadPCJsonLd, howToDownloadPS5JsonLd, howToDownloadXboxJsonLd, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Download — Safe Console Install & PC Wait Guide",
  description:
    "How to download GTA 6 safely: console installs from official stores now, PC still unannounced. Avoid fake Windows cracks — prepare Rockstar Launcher / Steam / Epic for later.",
  path: "/gta6-download",
  keywords: [
    "GTA6 download",
    "GTA 6 download PC",
    "download GTA VI",
    "GTA6 free download",
    "GTA 6 PC download",
    "how to download GTA 6",
  ],
});

const downloadSteps = [
  {
    step: "01",
    title: "Know Your Platform",
    description:
      "Console: GTA 6 is out now on PS5 and Xbox Series X|S — buy and download from official stores. PC: still unannounced — ignore “cracked PC” sites.",
  },
  {
    step: "02",
    title: "Console — Buy Officially",
    description:
      "Use PlayStation Store, Xbox Store, Rockstar Games Store, or trusted retailers (code-in-box). Compare Standard vs Ultimate on our editions page.",
  },
  {
    step: "03",
    title: "Free ~212 GB Storage",
    description:
      "Rockstar lists up to 212 GB depending on device. Install on an SSD and leave headroom for patches.",
  },
  {
    step: "04",
    title: "PC — Install Rockstar Launcher Early",
    description:
      "When Windows ships, expect Rockstar Games Launcher (often required even for Steam/Epic). Install the genuine launcher from rockstargames.com only.",
  },
  {
    step: "05",
    title: "PC — Check Estimated Specs",
    description:
      "Official PC requirements are unannounced. Review our estimated minimums / recommended builds and plan SSD capacity generously.",
  },
  {
    step: "06",
    title: "Never Use Unofficial Installers",
    description:
      "Torrents, “GTA 6 APK,” modified EXE packs, and grey PC keys claiming day-one Windows access are malware and scam risks.",
  },
];

const officialPlatforms = [
  {
    name: "Rockstar Games Launcher",
    url: "https://www.rockstargames.com/launcher",
    description: "Primary platform — expected day-one PC release",
    badge: "Recommended",
  },
  {
    name: "Steam",
    url: "https://store.steampowered.com",
    description: "Valve's platform — likely available at or shortly after launch",
    badge: "Popular",
  },
  {
    name: "Epic Games Store",
    url: "https://store.epicgames.com",
    description: "Epic's storefront — possible timed exclusivity or day-one",
    badge: "Alternative",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/gta6-download",
            name: "GTA 6 Download Guide",
            description: "Official guide to downloading Grand Theft Auto VI on PC, PS5, and Xbox.",
            mainEntityId: `${siteConfig.url}/gta6-download#howto-pc-download`,
          }),
          gta6SoftwareApplicationJsonLd(),
          howToDownloadPCJsonLd(),
          howToDownloadPS5JsonLd(),
          howToDownloadXboxJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "GTA 6 Download", url: `${siteConfig.url}/gta6-download` },
          ]),
          faqJsonLd([
            {
              question: "Can I download GTA 6 on PC now?",
              answer: `No. There is no official Windows version yet. Consoles launched ${siteConfig.releaseDateDisplay}. Wait for Rockstar’s PC announcement — then use Rockstar Launcher / Steam / Epic only.`,
            },
            {
              question: "Where to download GTA 6 safely?",
              answer: "On console: PlayStation Store or Xbox Store after purchase. On PC (future): Rockstar Games Launcher, Steam, or Epic Games Store only.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Download" }]} />
          <PageHeader
            title="GTA 6 DOWNLOAD"
            subtitle="Safe console installs now — and a scam-free prep guide for the unannounced PC version."
          />

          <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
            <h2 className="font-display text-xl tracking-wider text-accent-orange">Important Notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Console players can download GTA 6 <strong className="text-foreground">right now</strong> from official stores.
              PC players: there is still <strong className="text-foreground">no official Windows download</strong>.
              Fake PC installers are malware. See{" "}
              <LocaleLink href="/where-to-buy" className="text-accent-teal hover:text-accent-pink">
                where to buy
              </LocaleLink>{" "}
              for legitimate console purchase paths.
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="font-display text-4xl tracking-wider">
            HOW TO DOWNLOAD GTA 6 ON PC
          </h2>
          <div className="mt-10 space-y-6">
            {downloadSteps.map((item) => (
              <article
                key={item.step}
                className="flex gap-6 rounded-lg border border-border bg-surface-elevated p-6 transition-colors hover:border-accent-pink/30"
              >
                <span className="font-display text-4xl text-accent-pink">{item.step}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-wider">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface" aria-labelledby="platforms-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="platforms-heading" className="font-display text-4xl tracking-wider">
            OFFICIAL DOWNLOAD PLATFORMS
          </h2>
          <p className="mt-4 text-muted">
            When GTA 6 releases on PC, download exclusively from these official platforms:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {officialPlatforms.map((platform) => (
              <article
                key={platform.name}
                className="card-glow flex flex-col rounded-lg border border-border bg-surface-elevated p-6"
              >
                <span className="w-fit rounded bg-accent-teal/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-accent-teal">
                  {platform.badge}
                </span>
                <h3 className="mt-3 font-display text-xl tracking-wider">{platform.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{platform.description}</p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-medium uppercase tracking-wider text-accent-pink transition-colors hover:text-accent-teal"
                >
                  Visit Store →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wider">PREPARE YOUR PC</h2>
          <p className="mt-4 text-muted">Check if your gaming rig is ready for GTA 6</p>
          <LocaleLink
            href="/system-requirements"
            className="mt-6 inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_30px_rgba(255,110,180,0.4)]"
          >
            View System Requirements
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
