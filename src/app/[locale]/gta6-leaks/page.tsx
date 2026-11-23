import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { Breadcrumbs, PageHeader } from "@/components/TrailerSection";
import { PillarLinks, QuickAnswer } from "@/components/PillarLinks";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { leaksKeywordFaqs } from "@/lib/keyword-answers";
import { siteConfig } from "@/lib/site-config";
import { resolveLocale, pagePath } from "@/i18n/page-helpers";

const timeline = [
  {
    date: "September 2022",
    title: "Early footage dump",
    detail:
      "Hours of early development clips appeared online. Rockstar confirmed a network intrusion stole confidential materials, including next-GTA footage.",
  },
  {
    date: "September 19, 2022",
    title: "Take-Two 8-K",
    detail:
      "Take-Two told investors the incident was contained, live services were unaffected, and development timelines were not expected to suffer long-term disruption.",
  },
  {
    date: "2023–2026",
    title: "Official trailers replace speculation",
    detail:
      "Trailer 1, Trailer 2, Extended Look, and launch marketing became the authoritative public picture of Leonida, Lucia, and Jason.",
  },
  {
    date: "November 19, 2026",
    title: "Game ships",
    detail:
      "GTA 6 launches on PS5 and Xbox Series X|S. Reviews and the playable game supersede leak-era guesses for most player questions.",
  },
] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.leaks;
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: pagePath(locale, "/gta6-leaks"),
  });
}

export default async function LeaksPage({ params }: Props) {
  const { locale, dict } = await resolveLocale(params);
  const page = dict.pages.leaks;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: pagePath(locale, "/gta6-leaks"),
            name: "GTA 6 Leaks Explained",
            description:
              "What the 2022 GTA 6 leak was, what Rockstar confirmed, and how to treat leak claims after launch.",
          }),
          breadcrumbJsonLd([
            { name: dict.common.home, url: `${siteConfig.url}${pagePath(locale, "")}` },
            { name: "GTA 6 Leaks", url: `${siteConfig.url}${pagePath(locale, "/gta6-leaks")}` },
          ]),
          faqJsonLd([...leaksKeywordFaqs]),
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
          <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-5 text-sm text-muted">
            We summarize publicly confirmed facts only. We do not host, link to, or redistribute stolen footage or assets.
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">LEAK TIMELINE</h2>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <article key={item.date} className="rounded-lg border border-border bg-surface-elevated p-5">
                <time className="text-xs font-medium uppercase tracking-wider text-accent-teal">{item.date}</time>
                <h3 className="mt-1 font-display text-xl tracking-wider">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">GTA HACKER — WHAT WAS REPORTED</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Contemporary reporting tied the dump to an online actor often referred to as “teapotuberhacker,” who also claimed involvement in other intrusions. Rockstar’s confirmation was limited to unauthorized access and theft of early footage — not a full public attribution dossier. Searching “gta hacker” today mostly resurfaces that 2022 incident, not a new post-launch exploit guide.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wider">LEAKS VS OFFICIAL SOURCES</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Claim type</th>
                  <th className="px-4 py-3 text-left">Trust it?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rockstar Newswire / store pages", "Yes — primary source"],
                  ["Take-Two filings / earnings remarks", "Yes for corporate/platform strategy"],
                  ["2022 Rockstar leak confirmation", "Yes — incident was real"],
                  ["Anonymous PC date / Online dumps", "No — wait for official posts"],
                  ["Sites offering leaked PC builds", "Dangerous & illegal — avoid"],
                ].map(([claim, trust]) => (
                  <tr key={claim} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{claim}</td>
                    <td className="px-4 py-3 text-muted">{trust}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wider">WHERE TO GO INSTEAD</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              → Live updates:{" "}
              <LocaleLink href="/news" className="text-accent-teal hover:text-accent-pink">
                GTA 6 news hub
              </LocaleLink>
            </li>
            <li>
              → PC rumors vs facts:{" "}
              <LocaleLink href="/gta6-pc-release-date" className="text-accent-teal hover:text-accent-pink">
                Will GTA 6 be on PC?
              </LocaleLink>
            </li>
            <li>
              → Playable systems:{" "}
              <LocaleLink href="/gta6-gameplay" className="text-accent-teal hover:text-accent-pink">
                gameplay guide
              </LocaleLink>
            </li>
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-wider">FAQS</h2>
          <div className="mt-6 space-y-4">
            {leaksKeywordFaqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <PillarLinks current="/gta6-leaks" relatedLabel={dict.common.relatedGuides} />
          </div>
        </div>
      </section>
    </>
  );
}
