import { LocaleLink } from "@/components/LocaleLink";
import { GuideSection } from "@/components/motion/GuideSection";
import { TableOfContents } from "@/components/TableOfContents";
import type { GuideContent } from "@/i18n/guide/types";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="section-label text-accent-teal">{label}</p>
      <h2 className="display-heading mt-2 tracking-wider">{title}</h2>
    </div>
  );
}

export function HomeGuide({ content }: { content: GuideContent }) {
  const c = content;

  return (
    <article className="bg-surface">
      <GuideSection id="overview" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.overview.label} title={c.overview.title} />
          <div className="prose-gta space-y-4">
            {c.overview.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <TableOfContents title={c.tocTitle} links={c.toc} />
        </div>
      </GuideSection>

      <GuideSection id="fact-sheet" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.factSheet.label} title={c.factSheet.title} />
          {c.factSheet.intro && (
            <p className="mb-8 text-muted">
              {typeof c.factSheet.intro === "string" ? c.factSheet.intro : c.factSheet.intro[0]}
            </p>
          )}
          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left font-display text-lg tracking-wider text-accent-pink">
                    {c.factSheet.pillarHeader}
                  </th>
                  <th className="px-4 py-3 text-left font-display text-lg tracking-wider text-accent-teal">
                    {c.factSheet.specHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.factSheet.rows.map((row) => (
                  <tr key={row.pillar} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">{row.pillar}</td>
                    <td className="px-4 py-3 text-muted">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="download-guide" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.downloadGuide.label} title={c.downloadGuide.title} />
          <div className="prose-gta space-y-4">
            {c.downloadGuide.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
              <h3 className="font-display text-xl tracking-wider text-accent-orange">
                {c.downloadGuide.commonlySearchedTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {c.downloadGuide.unofficialTerms.map((term) => (
                  <li key={term} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-accent-orange">●</span> {term}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">{c.downloadGuide.commonlySearchedNote}</p>
            </div>

            <div className="rounded-lg border border-accent-teal/30 bg-accent-teal/5 p-6">
              <h3 className="font-display text-xl tracking-wider text-accent-teal">
                {c.downloadGuide.canDownloadTitle}
              </h3>
              <p className="mt-3 text-sm text-muted">{c.downloadGuide.canDownloadBody}</p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground">
                {c.downloadGuide.officialAvailability}
              </h4>
              <ul className="mt-2 space-y-1">
                {c.downloadGuide.officialChannels.map((ch) => (
                  <li key={ch} className="text-sm text-muted">
                    ● {ch}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-surface-elevated p-6">
            <h3 className="font-display text-xl tracking-wider">{c.downloadGuide.preLoadTitle}</h3>
            <p className="mt-2 text-sm text-muted">{c.downloadGuide.preLoadBody}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {c.downloadGuide.preLoadBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent-pink">▸</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="platform-download" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.platformDownload.label} title={c.platformDownload.title} />
          <div className="grid gap-6 md:grid-cols-2">
            {c.platformDownload.platforms
              .filter((g) => g.steps)
              .map((guide) => (
                <div key={guide.platform} className="rounded-lg border border-border bg-surface-elevated p-6">
                  <h3 className="font-display text-2xl tracking-wider text-accent-pink">
                    {c.platformDownload.onPlatform.replace("{platform}", guide.platform)}
                  </h3>
                  <ol className="mt-4 space-y-2">
                    {guide.steps!.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <span className="font-display text-lg text-accent-teal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="pc-download" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.pcDownload.label} title={c.pcDownload.title} />
          <p className="mb-8 text-muted">{c.pcDownload.intro}</p>

          <div className="space-y-4">
            {c.pcDownload.steps.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-surface-elevated p-5">
                <span className="font-display text-3xl text-accent-pink">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-muted">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/5 p-6">
            <h3 className="font-display text-xl tracking-wider text-red-400">{c.pcDownload.avoidTitle}</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {c.pcDownload.avoidItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-red-400">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <LocaleLink
              href="/gta6-download"
              className="inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-accent-teal"
            >
              {c.pcDownload.fullGuideCta}
            </LocaleLink>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="storage" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.storage.label} title={c.storage.title} />
          <p className="mb-8 text-muted">{c.storage.intro}</p>
          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">{c.storage.requirementHeader}</th>
                  <th className="px-4 py-3 text-left">{c.storage.recommendationHeader}</th>
                </tr>
              </thead>
              <tbody>
                {c.storage.rows.map((row) => (
                  <tr key={row.requirement} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.requirement}</td>
                    <td className="px-4 py-3 text-muted">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted">
            <strong className="text-accent-teal">{c.storage.ssdLabel}</strong> {c.storage.ssdBenefits.join(", ")}.
          </p>
        </div>
      </GuideSection>

      <GuideSection id="release-timeline" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.releaseTimeline.label} title={c.releaseTimeline.title} />
          <p className="mb-8 text-muted">{c.releaseTimeline.intro}</p>

          <div className="relative space-y-0">
            {c.releaseTimeline.items.map((item, i) => (
              <div key={item.date} className="relative flex gap-6 pb-10 last:pb-0">
                {i < c.releaseTimeline.items.length - 1 && (
                  <div className="absolute left-[11px] top-6 h-full w-px bg-border" />
                )}
                <div className="relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full border-2 border-accent-pink bg-background" />
                <div>
                  <time className="text-xs font-medium uppercase tracking-wider text-accent-teal">{item.date}</time>
                  <h3 className="font-display text-xl tracking-wider">{item.event}</h3>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {c.releaseTimeline.details.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="pre-orders" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.preOrders.label} title={c.preOrders.title} />
          <p className="mb-8 text-muted">{c.preOrders.intro}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {c.preOrders.editions.map((ed) => (
              <div
                key={ed.name}
                className={`rounded-lg border p-6 ${ed.featured ? "border-accent-pink bg-accent-pink/5" : "border-border bg-surface-elevated"}`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-wider">{ed.name}</h3>
                  <span className="font-display text-3xl text-accent-teal">{ed.price}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{ed.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {c.preOrders.incentives.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="hardware" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.hardware.label} title={c.hardware.title} />
          <p className="mb-8 text-muted">{c.hardware.intro}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {c.hardware.capabilities.map((cap) => (
              <div key={cap.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-teal">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl tracking-wider">{c.hardware.lagTitle}</h3>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">{c.hardware.gameHeader}</th>
                  <th className="px-4 py-3 text-left">{c.hardware.consoleHeader}</th>
                  <th className="px-4 py-3 text-left">{c.hardware.pcHeader}</th>
                  <th className="px-4 py-3 text-left">{c.hardware.gapHeader}</th>
                </tr>
              </thead>
              <tbody>
                {c.hardware.history.map((row) => (
                  <tr key={row.game} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.game}</td>
                    <td className="px-4 py-3 text-muted">{row.console}</td>
                    <td className="px-4 py-3 text-muted">{row.pc}</td>
                    <td className="px-4 py-3 text-accent-pink">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">{c.hardware.lagBody}</p>
        </div>
      </GuideSection>

      <GuideSection id="leonida" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.leonida.label} title={c.leonida.title} />
          <p className="mb-8 text-muted">{c.leonida.intro}</p>

          <div className="space-y-4">
            {c.leonida.modern.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl tracking-wider">{c.leonida.regionalTitle}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {c.leonida.regions.map((region) => (
              <div key={region.name} className="rounded-lg border border-accent-teal/20 bg-accent-teal/5 p-5">
                <h4 className="font-display text-lg tracking-wider">{region.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{region.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="characters" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.characters.label} title={c.characters.title} />
          <p className="mb-8 text-muted">{c.characters.intro}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {[c.characters.lucia, c.characters.jason].map((char) => (
              <div key={char.name} className="rounded-lg border border-border bg-surface-elevated p-6">
                <h3 className="font-display text-3xl tracking-wider text-accent-pink">{char.name}</h3>
                <div className="mt-4 space-y-4">
                  {char.highlights.map((h) => (
                    <div key={h.label}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent-teal">{h.label}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl tracking-wider">{c.characters.codependentTitle}</h3>
          <div className="mt-6 space-y-4">
            {c.characters.mechanics.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h4 className="font-display text-lg tracking-wider">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="online" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.online.label} title={c.online.title} />
          <p className="leading-relaxed text-muted">{c.online.body}</p>
        </div>
      </GuideSection>

      <GuideSection id="open-world" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.openWorld.label} title={c.openWorld.title} />
          {c.openWorld.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "mb-4 text-muted" : "mb-8 text-sm text-muted"}>
              {p}
            </p>
          ))}

          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">{c.openWorld.elementHeader}</th>
                  <th className="px-4 py-3 text-left">{c.openWorld.gta6Header}</th>
                  <th className="px-4 py-3 text-left">{c.openWorld.samsonHeader}</th>
                </tr>
              </thead>
              <tbody>
                {c.openWorld.comparison.map((row) => (
                  <tr key={row.element} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium align-top">{row.element}</td>
                    <td className="px-4 py-3 text-muted align-top">{row.gta6}</td>
                    <td className="px-4 py-3 text-muted align-top">{row.samson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {c.openWorld.mechanics.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h4 className="font-display text-lg tracking-wider">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      <GuideSection id="summary" className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={c.summary.label} title={c.summary.title} />
          <div className="prose-gta space-y-4">
            {c.summary.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </GuideSection>
    </article>
  );
}
