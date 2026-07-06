import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { newsArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "GTA 6 News — Latest Updates, Trailers & Release Info",
  description:
    "Latest Grand Theft Auto VI news — release date updates, trailer breakdowns, pre-order guides, PC port news, and Leonida/Vice City reveals.",
  path: "/news",
  keywords: ["GTA6 news", "GTA 6 updates", "GTA VI latest news", "GTA6 release news"],
});

export default function NewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "News", url: `${siteConfig.url}/news` },
        ])}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News" }]} />
          <PageHeader
            title="GTA 6 NEWS"
            subtitle="Stay updated with the latest Grand Theft Auto VI news, announcements, and analysis."
          />
        </div>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <article
                key={article.slug}
                className="card-glow group rounded-lg border border-border bg-surface-elevated p-6 transition-all hover:border-accent-pink/30"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="rounded bg-accent-pink/10 px-2 py-0.5 font-medium uppercase tracking-wider text-accent-pink">
                    {article.category}
                  </span>
                  <time dateTime={article.datePublished}>
                    {new Date(article.datePublished).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl tracking-wider transition-colors group-hover:text-accent-pink">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-accent-teal transition-colors hover:text-accent-pink"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
