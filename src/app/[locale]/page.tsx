import { Hero } from "@/components/Hero";
import { TrailerSection } from "@/components/TrailerSection";
import { FAQSection } from "@/components/FAQSection";
import { DownloadCTA } from "@/components/DownloadCTA";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import { createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { factSheet } from "@/lib/home-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return createMetadata({
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    path: localePath(raw, ""),
    ogLocale: raw === "br" ? "pt_BR" : raw === "tw" ? "zh_TW" : undefined,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faqItems = dict.pages.pc.faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: localePath(locale, ""),
            name: dict.meta.homeTitle,
            description: dict.meta.homeDescription,
          }),
          faqJsonLd(faqItems),
        ]}
      />
      <Hero dict={dict} />

      <section className="section-padding border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="section-label text-accent-teal">{dict.home.factSheetLabel}</p>
          <h2 className="display-heading mt-2 tracking-wider">{dict.home.guideTitle}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {dict.home.guideIntro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 font-display text-2xl tracking-wider">{dict.home.factSheetTitle}</h3>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {factSheet.map((row) => (
                  <tr key={row.pillar} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.pillar}</td>
                    <td className="px-4 py-3 text-muted">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/gta6-pc-release-date", label: dict.nav.pc },
              { href: "/gta6-ps5", label: dict.nav.ps5 },
              { href: "/where-to-buy", label: dict.nav.buy },
              { href: "/gta6-reviews", label: dict.nav.reviews },
              { href: "/gta6-leaks", label: dict.nav.leaks },
              { href: "/news", label: dict.nav.news },
            ].map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:border-accent-teal hover:text-accent-teal"
              >
                → {item.label}
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <TrailerSection />
      <FAQSection
        limit={5}
        items={faqItems}
        eyebrow={dict.common.quickAnswer}
        title="FAQ"
        subtitle={dict.home.guideIntro[0]}
        viewAllLabel={dict.common.readMore}
      />
      <DownloadCTA dict={dict} />
    </>
  );
}
