import type { Metadata } from "next";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer — GTA6 For PC",
  description:
    "Legal disclaimer for gta6forpc.org. Unofficial fan site — not affiliated with Rockstar Games or Take-Two Interactive.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/disclaimer",
            name: "Disclaimer",
            description: "Legal disclaimer for gta6forpc.org",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Disclaimer", url: `${siteConfig.url}/disclaimer` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
          <PageHeader title="DISCLAIMER" />
        </div>
      </div>

      <section className="section-padding">
        <div className="prose-gta mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p>
            <strong>{siteConfig.domain}</strong> is an unofficial fan website. We are not affiliated with,
            endorsed by, or connected to Rockstar Games, Take-Two Interactive, or any of their subsidiaries.
          </p>

          <h2>TRADEMARKS</h2>
          <p>
            Grand Theft Auto, GTA, Rockstar Games, and related logos are trademarks of Take-Two Interactive
            Software and Rockstar Games. All trademarks belong to their respective owners.
          </p>

          <h2>NO DOWNLOADS HOSTED</h2>
          <p>
            This website does not host, distribute, or provide download links for pirated, cracked, or unofficial
            copies of Grand Theft Auto VI. All download guidance directs users to official platforms only.
          </p>

          <h2>INFORMATION ACCURACY</h2>
          <p>
            Release dates, system requirements, and pricing are based on official announcements and industry
            estimates where noted. Information may change as Rockstar updates their plans. Always verify on{" "}
            <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">
              rockstargames.com
            </a>.
          </p>

          <h2>EXTERNAL LINKS</h2>
          <p>
            We link to third-party sites (Rockstar, Steam, Epic Games, etc.). We are not responsible for their
            content, policies, or availability.
          </p>

          <h2>LIABILITY</h2>
          <p>
            Use of this site is at your own risk. We make no warranties about the completeness or accuracy of
            information provided.
          </p>
        </div>
      </section>
    </>
  );
}
