import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { systemRequirements } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 System Requirements — PC Minimum & Recommended Specs",
  description:
    "GTA 6 PC system requirements — estimated minimum and recommended specs for Grand Theft Auto VI. CPU, GPU, RAM, and storage requirements for optimal gameplay.",
  path: "/system-requirements",
  keywords: [
    "GTA6 system requirements",
    "GTA 6 PC specs",
    "GTA6 minimum requirements",
    "GTA 6 recommended specs",
    "can my PC run GTA 6",
  ],
});

function SpecTable({
  title,
  specs,
  accent,
}: {
  title: string;
  specs: readonly { label: string; value: string }[];
  accent: "pink" | "teal";
}) {
  const borderClass = accent === "pink" ? "border-accent-pink/30" : "border-accent-teal/30";
  const textClass = accent === "pink" ? "text-accent-pink" : "text-accent-teal";

  return (
    <div className={`rounded-lg border ${borderClass} bg-surface-elevated overflow-hidden`}>
      <h2 className={`border-b border-border bg-surface px-6 py-4 font-display text-2xl tracking-wider ${textClass}`}>
        {title}
      </h2>
      <dl className="divide-y divide-border">
        {specs.map((spec) => (
          <div key={spec.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <dt className="text-sm font-medium text-muted">{spec.label}</dt>
            <dd className="text-sm text-foreground">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function SystemRequirementsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/system-requirements",
            name: "GTA 6 PC System Requirements",
            description: "Estimated minimum and recommended PC specs for Grand Theft Auto VI.",
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "System Requirements", url: `${siteConfig.url}/system-requirements` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "System Requirements" }]} />
          <PageHeader
            title="SYSTEM REQUIREMENTS"
            subtitle="Estimated PC hardware requirements for Grand Theft Auto VI. Official specs will be confirmed closer to the PC release."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-4 text-sm text-muted">
            ⚠️ {systemRequirements.note}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <SpecTable title="MINIMUM" specs={systemRequirements.minimum} accent="pink" />
            <SpecTable title="RECOMMENDED" specs={systemRequirements.recommended} accent="teal" />
          </div>

          <div className="mt-12 rounded-lg border border-border bg-surface-elevated p-8">
            <h2 className="font-display text-3xl tracking-wider">PERFORMANCE TIPS</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <span className="text-accent-pink">▸</span>
                <span><strong className="text-foreground">SSD Required:</strong> Install GTA 6 on an NVMe SSD for faster load times and texture streaming.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-pink">▸</span>
                <span><strong className="text-foreground">32GB RAM Recommended:</strong> Leonida&apos;s open world will benefit from extra memory for smooth gameplay.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-pink">▸</span>
                <span><strong className="text-foreground">Ray Tracing:</strong> Expect optional RT features — RTX 4070+ recommended for ray tracing at 1440p.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-pink">▸</span>
                <span><strong className="text-foreground">DLSS / FSR:</strong> AI upscaling will likely be supported for higher framerates on mid-range GPUs.</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted">Ready to download when GTA 6 hits PC?</p>
            <Link
              href="/gta6-download"
              className="mt-4 inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black"
            >
              GTA 6 Download Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
