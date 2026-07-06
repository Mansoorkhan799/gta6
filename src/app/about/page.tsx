import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "About GTA6 For PC — Who We Are",
  description:
    "About gta6forpc.org — an unofficial fan guide for Grand Theft Auto VI on PC. Our mission, what we cover, and how we help players find official download info.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/about",
            name: "About GTA6 For PC",
            description: siteConfig.description,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: `${siteConfig.url}/about` },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <PageHeader
            title="ABOUT US"
            subtitle="gta6forpc.org is an unofficial fan site dedicated to helping players find accurate, safety-first information about Grand Theft Auto VI on PC."
          />
        </div>
      </div>

      <section className="section-padding">
        <div className="prose-gta mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2>OUR MISSION</h2>
          <p>
            Millions of players search for GTA 6 release dates, download guides, system requirements, and PC port news every day.
            Our goal is to provide clear, well-organized, and trustworthy information — always pointing users to{" "}
            <strong>official Rockstar Games channels</strong> for purchases and downloads.
          </p>

          <h2>WHAT WE COVER</h2>
          <ul>
            <li>GTA 6 release date and PC port timeline</li>
            <li>Official download and pre-order guides</li>
            <li>Estimated PC system requirements and file size</li>
            <li>Character, map, and gameplay breakdowns</li>
            <li>News updates sourced from Rockstar announcements</li>
          </ul>

          <h2>UNOFFICIAL FAN SITE</h2>
          <p>
            We are <strong>not affiliated with Rockstar Games or Take-Two Interactive</strong>.
            Grand Theft Auto VI is a trademark of Rockstar Games. Read our full{" "}
            <Link href="/disclaimer">disclaimer</Link> for details.
          </p>

          <h2>CONTACT & UPDATES</h2>
          <p>
            We update guides when Rockstar publishes new information. Bookmark{" "}
            <Link href="/">{siteConfig.domain}</Link> for the latest GTA 6 PC news.
          </p>
        </div>
      </section>
    </>
  );
}
