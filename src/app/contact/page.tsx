import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Contact Us — GTA6 For PC",
  description:
    "Contact gta6forpc.org for questions, corrections, or feedback about our Grand Theft Auto VI PC guides.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/contact",
            name: "Contact GTA6 For PC",
            description: `Contact ${siteConfig.domain}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: `${siteConfig.url}/contact` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <PageHeader
            title="CONTACT US"
            subtitle="Questions, corrections, or feedback about our GTA 6 guides? We'd love to hear from you."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-gta">
            <p>
              {siteConfig.domain} is an unofficial fan site. For official Grand Theft Auto VI support,
              please contact{" "}
              <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">
                Rockstar Games Support
              </a>.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "General Inquiries",
                text: "Questions about our guides, content suggestions, or site feedback.",
                action: `hello@${siteConfig.domain}`,
                href: `mailto:hello@${siteConfig.domain}`,
              },
              {
                title: "Corrections",
                text: "Found outdated release info or incorrect specs? Let us know so we can update our guides.",
                action: `corrections@${siteConfig.domain}`,
                href: `mailto:corrections@${siteConfig.domain}`,
              },
              {
                title: "Privacy Requests",
                text: "Data access, deletion, or privacy-related questions.",
                action: "Privacy Policy",
                href: "/privacy-policy",
              },
              {
                title: "Official Game Support",
                text: "Purchase issues, account problems, or game bugs — contact Rockstar directly.",
                action: "Rockstar Support",
                href: "https://support.rockstargames.com",
                external: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface-elevated p-5"
              >
                <h2 className="font-display text-xl tracking-wider">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent-teal hover:text-accent-pink"
                  >
                    {item.action} →
                  </a>
                ) : item.href.startsWith("mailto") ? (
                  <a
                    href={item.href}
                    className="mt-3 inline-block text-sm font-medium text-accent-teal hover:text-accent-pink"
                  >
                    {item.action}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-3 inline-block text-sm font-medium text-accent-teal hover:text-accent-pink"
                  >
                    {item.action} →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            We aim to respond within 3–5 business days. This is a fan site — we cannot assist with
            game purchases, downloads, or Rockstar account issues.
          </p>
        </div>
      </section>
    </>
  );
}
