import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { newsArticles } from "@/lib/content";
import { newsKeywordFaqs } from "@/lib/keyword-answers";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

type NewsArticle = (typeof newsArticles)[number];

function groupByCategory(articles: readonly NewsArticle[]) {
  const order: string[] = [];
  const groups = new Map<string, NewsArticle[]>();

  for (const article of articles) {
    if (!groups.has(article.category)) {
      order.push(article.category);
      groups.set(article.category, []);
    }
    groups.get(article.category)!.push(article);
  }

  return order.map((category) => ({
    category,
    articles: groups.get(category)!.sort(
      (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    ),
  }));
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="card-glow group flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-6 transition-all hover:border-accent-pink/30">
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
      <h2 className="mt-3 font-display text-xl tracking-wider transition-colors group-hover:text-accent-pink lg:text-2xl">
        <LocaleLink href={`/news/${article.slug}`}>{article.title}</LocaleLink>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
      <LocaleLink
        href={`/news/${article.slug}`}
        className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-accent-teal transition-colors hover:text-accent-pink"
      >
        Read Full Article →
      </LocaleLink>
    </article>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.news;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/news"),
  });
}

export default async function NewsPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.news;

  const categoryGroups = groupByCategory(newsArticles);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/news"),
            name: "GTA 6 News",
            description: "Latest Grand Theft Auto VI news for console launch and PC players.",
          }),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "News", url: `${siteConfig.url}${pagePath(locale, "/news")}` },
          ]),
          faqJsonLd([...newsKeywordFaqs]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: "/" }, { label: page.h1 }]} />
          <PageHeader title={page.h1} subtitle={page.subtitle} />
          <div className="mt-6 max-w-4xl">
            <QuickAnswer question={page.quickQ} answer={page.quickA} label={dict.common.quickAnswer} />
          </div>
        </div>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="flex flex-wrap gap-3 text-sm">
            <LocaleLink href="/gta6-pc-release-date" className="rounded border border-border px-4 py-2 text-muted hover:border-accent-teal hover:text-accent-teal">
              PC status
            </LocaleLink>
            <LocaleLink href="/gta6-leaks" className="rounded border border-border px-4 py-2 text-muted hover:border-accent-teal hover:text-accent-teal">
              Leaks explained
            </LocaleLink>
            <LocaleLink href="/gta6-reviews" className="rounded border border-border px-4 py-2 text-muted hover:border-accent-teal hover:text-accent-teal">
              Reviews
            </LocaleLink>
            <LocaleLink href="/gta6-ps5" className="rounded border border-border px-4 py-2 text-muted hover:border-accent-teal hover:text-accent-teal">
              PS5 guide
            </LocaleLink>
          </div>

          {categoryGroups.map(({ category, articles }) => (
            <div key={category}>
              <h2 className="font-display text-2xl tracking-wider text-accent-pink sm:text-3xl">
                {category}
              </h2>
              <div className="mt-6 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <NewsCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
