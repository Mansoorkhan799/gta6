import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/TrailerSection";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { newsArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    keywords: ["GTA6", "GTA 6", article.category],
  });
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");

  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 font-display text-3xl tracking-wider">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 font-display text-2xl tracking-wider">
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
    }
    if (block.startsWith("|")) {
      const rows = block.split("\n").filter((r) => !r.includes("---"));
      return (
        <div key={i} className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map((row, j) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                const Tag = j === 0 ? "th" : "td";
                return (
                  <tr key={j} className="border-b border-border">
                    {cells.map((cell, k) => (
                      <Tag key={k} className="px-4 py-2 text-left">
                        {cell}
                      </Tag>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    if (/^\d+\./.test(block)) {
      const items = block.split("\n");
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s*/, "")) }} />
          ))}
        </ol>
      );
    }
    return (
      <p
        key={i}
        className="mt-4 leading-relaxed text-muted"
        dangerouslySetInnerHTML={{ __html: formatInline(block) }}
      />
    );
  });
}

function formatInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-accent-pink">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            slug: article.slug,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "News", url: `${siteConfig.url}/news` },
            { name: article.title, url: `${siteConfig.url}/news/${article.slug}` },
          ]),
        ]}
      />

      <article className="hero-gradient page-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: article.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="rounded bg-accent-pink/10 px-2 py-0.5 font-medium uppercase tracking-wider text-accent-pink">
              {article.category}
            </span>
            <time dateTime={article.datePublished}>
              Published{" "}
              {new Date(article.datePublished).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl tracking-wider sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{article.excerpt}</p>
        </div>
      </article>

      <div className="pb-24">
        <div className="prose-gta mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {renderContent(article.content)}
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-surface-elevated p-6 text-center">
            <p className="text-sm text-muted">Want to play GTA 6 on PC?</p>
            <Link
              href="/gta6-download"
              className="mt-4 inline-block rounded bg-accent-pink px-6 py-2 text-sm font-bold uppercase tracking-widest text-black"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
