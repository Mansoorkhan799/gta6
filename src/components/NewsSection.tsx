import Link from "next/link";
import { newsArticles } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function NewsSection() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="section-padding bg-surface" aria-labelledby="news-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-label text-accent-pink">Latest Updates</p>
            <h2 id="news-heading" className="display-heading mt-2 tracking-wider">
              GTA 6 NEWS
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium uppercase tracking-wider text-accent-teal transition-colors hover:text-accent-pink"
          >
            All News →
          </Link>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 0.08}>
              <article className="card-glow group flex h-full flex-col rounded-lg border border-border bg-surface-elevated transition-all hover:border-accent-teal/30">
                <div className="relative h-2 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-teal" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded bg-accent-pink/10 px-2 py-0.5 font-medium uppercase tracking-wider text-accent-pink">
                      {article.category}
                    </span>
                    <time dateTime={article.datePublished}>
                      {new Date(article.datePublished).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-3 font-display text-xl tracking-wider transition-colors group-hover:text-accent-pink">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="mt-4 text-xs font-medium uppercase tracking-wider text-accent-teal transition-colors hover:text-accent-pink"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
