import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, gta6SoftwareApplicationJsonLd, webPageJsonLd } from "@/lib/seo";
import { reviewScores } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.reviews;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/gta6-reviews"),
  });
}

export default async function ReviewsPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.reviews;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/gta6-reviews"),
            name: "GTA 6 Reviews",
            description: "Critic scores and consensus for Grand Theft Auto VI.",
            mainEntityId: `${siteConfig.url}/#gta6-software`,
          }),
          gta6SoftwareApplicationJsonLd(),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "GTA 6 Reviews", url: `${siteConfig.url}${pagePath(locale, "/gta6-reviews")}` },
          ]),
          faqJsonLd([
            {
              question: "What is the GTA 6 Metacritic score?",
              answer: `Critic aggregates placed Grand Theft Auto VI around ${reviewScores.metacriticCritics}/100 at launch — universal acclaim across major outlets. Check Metacritic for the live count.`,
            },
            {
              question: "Is GTA 6 worth buying?",
              answer:
                "Critics overwhelmingly say yes for open-world fans: world density, dual leads, and systemic detail are the recurring praise points. Match that against your platform (PS5 / Xbox now; PC later) and edition choice.",
            },
          ]),
        ]}
      />

      <div className="hero-gradient page-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: "/" }, { label: page.h1 }]} />
          <PageHeader title={page.h1} subtitle={page.subtitle} />
          <QuickAnswer question={page.quickQ} answer={page.quickA} label={dict.common.quickAnswer} />
        </div>
      </div>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-accent-pink/30 bg-accent-pink/5 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-pink">Metacritic critics</p>
            <p className="mt-2 font-display text-6xl tracking-wider text-foreground">{reviewScores.metacriticCritics}</p>
            <p className="mt-2 text-sm text-muted">Universal acclaim · {reviewScores.metacriticCriticReviews} reviews at launch window</p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">NOTABLE SCORES</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left font-medium">Outlet</th>
                  <th className="px-4 py-3 text-left font-medium">Score</th>
                </tr>
              </thead>
              <tbody>
                {reviewScores.highlights.map((row) => (
                  <tr key={row.outlet} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">{row.outlet}</td>
                    <td className="px-4 py-3 text-accent-teal">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHAT CRITICS AGREE ON</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{reviewScores.consensus}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Leonida reacts with unprecedented density — weather, NPCs, activities, and systemic detail.</li>
            <li>Lucia and Jason’s relationship is treated as a core achievement, not just a dual-avatar gimmick.</li>
            <li>Technical and artistic polish justifies the long wait for many reviewers.</li>
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-wider">USER SCORES AT LAUNCH</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {reviewScores.metacriticUsers} Large launches often see review-bombing, server frustration, or edition debates. Prefer long-form critic writing plus a few days of player reports over a single snapshot score.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LocaleLink
              href="/where-to-buy"
              className="rounded bg-accent-pink px-5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-accent-teal"
            >
              Where to Buy
            </LocaleLink>
            <LocaleLink
              href="/gta6-editions"
              className="rounded border border-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-accent-teal"
            >
              Compare Editions
            </LocaleLink>
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-reviews" relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
