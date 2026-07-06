import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service — GTA6 For PC",
  description:
    "Terms of service for gta6forpc.org. Rules for using our unofficial GTA 6 fan guide website.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/terms-of-service",
            name: "Terms of Service",
            description: `Terms of service for ${siteConfig.domain}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Terms of Service", url: `${siteConfig.url}/terms-of-service` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
          <PageHeader
            title="TERMS OF SERVICE"
            subtitle={`Last updated: January 2026. By using ${siteConfig.domain}, you agree to these terms.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="prose-gta mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2>ACCEPTANCE OF TERMS</h2>
          <p>
            By accessing or using {siteConfig.domain}, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use this website.
          </p>

          <h2>NATURE OF THE SITE</h2>
          <p>
            {siteConfig.domain} is an <strong>unofficial fan website</strong>. We are not affiliated with
            Rockstar Games, Take-Two Interactive, or any official Grand Theft Auto entity. See our{" "}
            <Link href="/disclaimer">Disclaimer</Link> for full details.
          </p>

          <h2>USE OF CONTENT</h2>
          <p>
            All content on this site is provided for informational purposes only. You may not reproduce,
            redistribute, or commercially exploit our content without written permission.
          </p>

          <h2>NO DOWNLOADS OR PIRACY</h2>
          <p>
            This website does not provide game downloads, cracks, torrents, or unauthorized copies of
            Grand Theft Auto VI. We only guide users to official purchase and download channels.
          </p>

          <h2>ACCURACY OF INFORMATION</h2>
          <p>
            We strive for accuracy but do not guarantee that all information (release dates, specs, pricing)
            is current or complete. Always verify on{" "}
            <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">
              Rockstar Games
            </a>{" "}
            before making purchasing decisions.
          </p>

          <h2>USER CONDUCT</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site for unlawful purposes</li>
            <li>Attempt to hack, scrape, or disrupt our services</li>
            <li>Submit false or misleading information through contact forms</li>
            <li>Impersonate Rockstar Games or our site operators</li>
          </ul>

          <h2>INTELLECTUAL PROPERTY</h2>
          <p>
            Grand Theft Auto and related marks are trademarks of Take-Two Interactive. Our original
            text, layout, and branding are protected by applicable copyright laws.
          </p>

          <h2>LIMITATION OF LIABILITY</h2>
          <p>
            We are not liable for any damages arising from your use of this site, reliance on our
            content, or interactions with third-party links and services.
          </p>

          <h2>CHANGES</h2>
          <p>
            We may modify these Terms at any time. Continued use of the site after changes constitutes
            acceptance of the updated Terms.
          </p>

          <h2>CONTACT</h2>
          <p>
            Questions about these Terms? Visit our <Link href="/contact">Contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
