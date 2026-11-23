import type { Metadata } from "next";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy — GTA6 For PC",
  description:
    "Privacy policy for gta6forpc.org. Learn what data we collect, how we use cookies and analytics, and your privacy rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/privacy-policy",
            name: "Privacy Policy",
            description: `Privacy policy for ${siteConfig.domain}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <PageHeader
            title="PRIVACY POLICY"
            subtitle={`Last updated: January 2026. This policy explains how ${siteConfig.domain} handles your information.`}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="prose-gta mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2>OVERVIEW</h2>
          <p>
            {siteConfig.domain} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy
            describes how we collect, use, and protect information when you visit our website.
          </p>

          <h2>INFORMATION WE COLLECT</h2>
          <h3>Automatically Collected Data</h3>
          <p>When you visit our site, we may automatically collect:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website or search query</li>
            <li>IP address (anonymized where possible)</li>
          </ul>

          <h3>Analytics</h3>
          <p>
            We may use analytics services (such as Google Analytics) to understand how visitors use our site.
            These services use cookies and similar technologies. You can opt out via your browser settings
            or Google&apos;s opt-out tools.
          </p>

          <h2>COOKIES</h2>
          <p>
            We use cookies to improve site performance, remember preferences, and analyze traffic.
            You can disable cookies in your browser settings, though some features may not work correctly.
          </p>

          <h2>HOW WE USE YOUR INFORMATION</h2>
          <ul>
            <li>Improve website content and user experience</li>
            <li>Analyze traffic and usage patterns</li>
            <li>Monitor site security and prevent abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>THIRD-PARTY SERVICES</h2>
          <p>Our site may include embedded content or links to third parties, including:</p>
          <ul>
            <li>YouTube (embedded trailers)</li>
            <li>Rockstar Games (external links)</li>
            <li>Analytics providers</li>
            <li>Hosting and CDN services</li>
          </ul>
          <p>
            These third parties have their own privacy policies. We are not responsible for their practices.
          </p>

          <h2>DATA SHARING</h2>
          <p>
            We do not sell your personal information. We may share anonymized analytics data with service
            providers who assist in operating our website.
          </p>

          <h2>YOUR RIGHTS</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access data we hold about you</li>
            <li>Request correction or deletion</li>
            <li>Opt out of analytics tracking</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>CHILDREN&apos;S PRIVACY</h2>
          <p>
            Our site is not directed at children under 13. We do not knowingly collect information from
            children. Grand Theft Auto VI is rated Mature (17+) by the ESRB.
          </p>

          <h2>CHANGES TO THIS POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date.
          </p>

          <h2>CONTACT</h2>
          <p>
            For privacy-related questions, visit our{" "}
            <a href="/contact">Contact page</a>.
          </p>
        </div>
      </section>
    </>
  );
}
