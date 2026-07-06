import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, howToDownloadPCJsonLd, howToDownloadPS5JsonLd, howToDownloadXboxJsonLd, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 Download — How to Download GTA VI on PC (Official Guide)",
  description:
    "Complete GTA 6 download guide for PC. Learn how to download Grand Theft Auto VI safely from official platforms — Rockstar Launcher, Steam & Epic Games Store.",
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
    title: "Wait for PC Release",
    description:
      "GTA 6 launches on PS5 & Xbox Series X|S on November 19, 2026. The PC version is expected 12–18 months later. Bookmark this page for updates.",
  },
  {
    step: "02",
    title: "Install Rockstar Games Launcher",
    description:
      "Download the Rockstar Games Launcher from rockstargames.com. This is the primary platform for all Rockstar PC titles including GTA 6.",
  },
  {
    step: "03",
    title: "Choose Your Store",
    description:
      "GTA 6 on PC will be available on Rockstar Games Launcher, Steam, and Epic Games Store. Pick your preferred platform and create an account.",
  },
  {
    step: "04",
    title: "Purchase Officially",
    description:
      "Buy GTA 6 only from official stores. Standard Edition: $79.99 USD. Avoid third-party key sellers until verified and trusted.",
  },
  {
    step: "05",
    title: "Check System Requirements",
    description:
      "Verify your PC meets minimum specs: 16GB RAM, GTX 1660 Super, 100GB SSD. See our full requirements page for details.",
  },
  {
    step: "06",
    title: "Download & Install",
    description:
      "Once the PC version releases, click 'Install' in your chosen launcher. Download size estimated at 100–150GB. Use an SSD for best performance.",
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
              answer: "No. GTA 6 is not yet available for PC. Console release is November 19, 2026. PC release is estimated for 2027.",
            },
            {
              question: "Where to download GTA 6 safely?",
              answer: "Only from Rockstar Games Launcher, Steam, or Epic Games Store when the PC version releases.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "GTA 6 Download" }]} />
          <PageHeader
            title="GTA 6 DOWNLOAD"
            subtitle="Your complete guide to downloading Grand Theft Auto VI on PC — official platforms, release timeline, and safety tips."
          />

          <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
            <h2 className="font-display text-xl tracking-wider text-accent-orange">Important Notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              GTA 6 is <strong className="text-foreground">not yet available for PC download</strong>.
              Console release: {siteConfig.releaseDateDisplay}. Never download from unofficial sites —
              they contain malware and are illegal. This guide prepares you for the official PC launch.
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
          <Link
            href="/system-requirements"
            className="mt-6 inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_30px_rgba(255,110,180,0.4)]"
          >
            View System Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
