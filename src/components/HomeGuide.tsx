import Link from "next/link";
import { GuideSection } from "@/components/motion/GuideSection";
import {
  homeGuideMeta,
  factSheet,
  unofficialSearchTerms,
  officialChannels,
  preLoadBenefits,
  platformGuides,
  storageRequirements,
  ssdBenefits,
  releaseTimeline,
  timelineDetails,
  editions,
  preOrderIncentives,
  consoleCapabilities,
  pcHistory,
  viceCityModern,
  leonidaRegions,
  luciaProfile,
  jasonProfile,
  gameplayMechanics,
  samsonComparison,
  samsonMechanics,
  pcDownloadSteps,
  avoidUnofficial,
} from "@/lib/home-content";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="section-label text-accent-teal">{label}</p>
      <h2 className="display-heading mt-2 tracking-wider">{title}</h2>
    </div>
  );
}

function TableOfContents() {
  const links = [
    { href: "#overview", label: "Overview" },
    { href: "#fact-sheet", label: "Official Fact Sheet" },
    { href: "#download-guide", label: "Download Guide" },
    { href: "/gta6-download", label: "Full Download Page" },
    { href: "/gta6-file-size", label: "File Size Guide" },
    { href: "#platform-download", label: "Platform Downloads" },
    { href: "#pc-download", label: "PC Download" },
    { href: "#storage", label: "Storage Requirements" },
    { href: "#release-timeline", label: "Release Timeline" },
    { href: "/gta6-release-date", label: "Release Date Page" },
    { href: "/gta6-pc-release-date", label: "PC Release Date" },
    { href: "/gta6-pre-order", label: "Pre-Orders & Pricing" },
    { href: "#hardware", label: "Hardware & PC Delay" },
    { href: "#leonida", label: "Leonida & Vice City" },
    { href: "#characters", label: "Lucia & Jason" },
    { href: "#online", label: "GTA 6 Online" },
    { href: "#open-world", label: "Open-World Landscape" },
    { href: "#summary", label: "Summary" },
  ];

  return (
    <nav aria-label="Table of contents" className="rounded-lg border border-border bg-surface-elevated p-6">
      <h2 className="font-display text-xl tracking-wider">IN THIS GUIDE</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent-pink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function HomeGuide() {
  return (
    <article className="bg-surface">
      {/* Overview */}
      <GuideSection id="overview" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Comprehensive Report" title="THE ULTIMATE GUIDE TO GTA 6" />
          <div className="prose-gta space-y-4">
            {homeGuideMeta.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <TableOfContents />
        </div>
      </GuideSection>

      {/* Fact Sheet */}
      <GuideSection id="fact-sheet" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Official Data"
            title="GTA 6: OFFICIAL FACT SHEET"
          />
          <p className="mb-8 text-muted">
            To understand the sheer scale of Grand Theft Auto VI, parse the structural, corporate, and creative baseline established by Rockstar Games.
          </p>
          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left font-display text-lg tracking-wider text-accent-pink">Project Pillar</th>
                  <th className="px-4 py-3 text-left font-display text-lg tracking-wider text-accent-teal">Confirmed Specification</th>
                </tr>
              </thead>
              <tbody>
                {factSheet.map((row) => (
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

      {/* Download Guide Intro */}
      <GuideSection id="download-guide" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Safety First" title="GTA 6 DOWNLOAD GUIDE" />
          <div className="prose-gta space-y-4">
            {homeGuideMeta.downloadIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-6">
              <h3 className="font-display text-xl tracking-wider text-accent-orange">Commonly Searched (Unconfirmed)</h3>
              <ul className="mt-4 space-y-2">
                {unofficialSearchTerms.map((term) => (
                  <li key={term} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-accent-orange">●</span> {term}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">
                Rockstar has not officially announced these versions. Historically, PC versions sometimes follow console launches — but expectations are not confirmation.
              </p>
            </div>

            <div className="rounded-lg border border-accent-teal/30 bg-accent-teal/5 p-6">
              <h3 className="font-display text-xl tracking-wider text-accent-teal">Can You Download GTA 6 Now?</h3>
              <p className="mt-3 text-sm text-muted">
                GTA 6 can only be downloaded through official channels when available for your platform. Avoid unofficial installers and fake APK websites.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground">Official Availability</h4>
              <ul className="mt-2 space-y-1">
                {officialChannels.map((ch) => (
                  <li key={ch} className="text-sm text-muted">● {ch}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-surface-elevated p-6">
            <h3 className="font-display text-xl tracking-wider">PRE-LOADING BENEFITS</h3>
            <p className="mt-2 text-sm text-muted">Digital purchases may support pre-loading before launch:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {preLoadBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent-pink">▸</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideSection>

      {/* Platform Downloads */}
      <GuideSection id="platform-download" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Step-by-Step" title="HOW TO DOWNLOAD GTA 6" />
          <div className="grid gap-6 md:grid-cols-2">
            {platformGuides.filter((g) => g.steps).map((guide) => (
              <div key={guide.platform} className="rounded-lg border border-border bg-surface-elevated p-6">
                <h3 className="font-display text-2xl tracking-wider text-accent-pink">
                  GTA 6 on {guide.platform}
                </h3>
                <ol className="mt-4 space-y-2">
                  {guide.steps!.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted">
                      <span className="font-display text-lg text-accent-teal">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* PC Download */}
      <GuideSection id="pc-download" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="For PC Players" title="GTA 6 PC DOWNLOAD" />
          <p className="mb-8 text-muted">
            Many users search for GTA 6 PC download. However, Rockstar has not officially confirmed a PC version at this time.
            When it becomes available, follow these steps using official stores only.
          </p>

          <div className="space-y-4">
            {pcDownloadSteps.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-surface-elevated p-5">
                <span className="font-display text-3xl text-accent-pink">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-muted">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/5 p-6">
            <h3 className="font-display text-xl tracking-wider text-red-400">AVOID UNOFFICIAL SOURCES</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {avoidUnofficial.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-red-400">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gta6-download"
              className="inline-block rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-accent-teal"
            >
              Full PC Download Guide →
            </Link>
          </div>
        </div>
      </GuideSection>

      {/* Storage */}
      <GuideSection id="storage" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="File Size" title="DOWNLOAD SIZE & STORAGE" />
          <p className="mb-8 text-muted">
            Modern AAA games continue increasing in size due to high-resolution textures, large maps, cinematic assets, updates, and multiplayer content.
          </p>
          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Requirement</th>
                  <th className="px-4 py-3 text-left">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {storageRequirements.map((row) => (
                  <tr key={row.requirement} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{row.requirement}</td>
                    <td className="px-4 py-3 text-muted">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted">
            <strong className="text-accent-teal">SSD storage improves:</strong>{" "}
            {ssdBenefits.join(", ")}.
          </p>
        </div>
      </GuideSection>

      {/* Release Timeline */}
      <GuideSection id="release-timeline" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Release Date" title="GTA 6 RELEASE TIMELINE" />
          <p className="mb-8 text-muted">
            Rockstar officially locked the final release date as Thursday, November 19, 2026 — after significant speculation and internal shifts to avoid releasing an unpolished flagship title.
          </p>

          <div className="relative space-y-0">
            {releaseTimeline.map((item, i) => (
              <div key={item.date} className="relative flex gap-6 pb-10 last:pb-0">
                {i < releaseTimeline.length - 1 && (
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
            {timelineDetails.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* Pre-Orders */}
      <GuideSection id="pre-orders" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Pricing" title="PRE-ORDERS & EDITIONS" />
          <p className="mb-8 text-muted">
            On June 25, 2026, global digital storefronts and major retailers opened pre-orders at midnight local time.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {editions.map((ed) => (
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
            {preOrderIncentives.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* Hardware */}
      <GuideSection id="hardware" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Next-Gen" title="HARDWARE & THE PC QUESTION" />
          <p className="mb-8 text-muted">
            GTA 6 is built for current-generation console hardware — PS5 and Xbox Series X|S — maximizing structural advantages Rockstar&apos;s engineers can exploit.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {consoleCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-teal">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl tracking-wider">HISTORICAL CONSOLE-TO-PC LAG</h3>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Game</th>
                  <th className="px-4 py-3 text-left">Console Launch</th>
                  <th className="px-4 py-3 text-left">PC Launch</th>
                  <th className="px-4 py-3 text-left">Gap</th>
                </tr>
              </thead>
              <tbody>
                {pcHistory.map((row) => (
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
          <p className="mt-6 text-sm leading-relaxed text-muted">
            This persistent delay is a deliberate optimization strategy — consoles offer fixed hardware targets, while PC requires a standalone optimization cycle for unlocked framerates, ultra-wide displays, and modding frameworks.
          </p>
        </div>
      </GuideSection>

      {/* Leonida */}
      <GuideSection id="leonida" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Open World" title="LEONIDA & VICE CITY" />
          <p className="mb-8 text-muted">
            GTA 6 reimagines Vice City — shifting from the 1986 aesthetic of the original to a contemporary, hyper-connected 2026 landscape in the fictional State of Leonida.
          </p>

          <div className="space-y-4">
            {viceCityModern.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h3 className="font-display text-lg tracking-wider text-accent-pink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl tracking-wider">REGIONAL MAPPING</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leonidaRegions.map((region) => (
              <div key={region.name} className="rounded-lg border border-accent-teal/20 bg-accent-teal/5 p-5">
                <h4 className="font-display text-lg tracking-wider">{region.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{region.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* Characters */}
      <GuideSection id="characters" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Story" title="LUCIA & JASON" />
          <p className="mb-8 text-muted">
            A hyper-focused dual-protagonist structure — a modern Bonnie and Clyde dynamic embedded directly into moment-to-moment gameplay.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[luciaProfile, jasonProfile].map((char) => (
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

          <h3 className="mt-12 font-display text-2xl tracking-wider">CO-DEPENDENT GAMEPLAY</h3>
          <div className="mt-6 space-y-4">
            {gameplayMechanics.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h4 className="font-display text-lg tracking-wider">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* Online */}
      <GuideSection id="online" className="section-padding border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Multiplayer" title="WHAT ABOUT GTA 6 ONLINE?" />
          <p className="leading-relaxed text-muted">
            While Rockstar Games has confirmed that multiplayer development will continue to evolve as a major component of the GTA 6 project, they have not yet detailed an official &quot;GTA Online 2&quot; feature set. Because the current iteration of GTA Online serves as a massive financial pillar for Take-Two Interactive, more concrete multiplayer showcases are expected closer to the fall launch window.
          </p>
        </div>
      </GuideSection>

      {/* Open World Landscape / Samson */}
      <GuideSection id="open-world" className="section-padding border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Industry Context" title="THE CHANGING OPEN-WORLD LANDSCAPE" />
          <p className="mb-4 text-muted">
            With GTA 6 launching late 2026, alternative urban open-world titles have captured community attention — most prominently <strong className="text-foreground">Samson: A Tyndalston Story</strong> by Liquid Swords (founded by Just Cause creator Christofer Sundberg), launched April 8, 2026 on PC at $24.99.
          </p>
          <p className="mb-8 text-sm text-muted">
            Samson is a focused, fast-paced alternative — not a GTA competitor — built on Unreal Engine 5 with a &quot;zero-nonsense&quot; philosophy and no microtransactions.
          </p>

          <div className="table-scroll rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="px-4 py-3 text-left">Element</th>
                  <th className="px-4 py-3 text-left">GTA 6</th>
                  <th className="px-4 py-3 text-left">Samson</th>
                </tr>
              </thead>
              <tbody>
                {samsonComparison.map((row) => (
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
            {samsonMechanics.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-surface-elevated p-5">
                <h4 className="font-display text-lg tracking-wider">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideSection>

      {/* Summary */}
      <GuideSection id="summary" className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Final Word" title="A LANDMARK MOMENT" />
          <div className="prose-gta space-y-4">
            <p>
              On November 19, 2026, Grand Theft Auto VI will transition from an anticipated cultural phenomenon into a physical reality for millions of players across the globe. By focusing entirely on current-generation hardware, designing a dual-protagonist narrative that subverts franchise tropes, and returning to a modernized Vice City, Rockstar Games is aiming to set a benchmark that will define the interactive landscape for the next decade.
            </p>
            <p>
              Financial analysts project GTA 6 will cross $1 billion in gross sales within its first 24 hours — easily overtaking records set by GTA V and modern cinematic blockbusters. The rollout has fundamentally changed massive media event marketing through sparse, high-impact trailer drops that turn each glimpse into a major internet event.
            </p>
            <p>
              At the same time, titles like Samson: A Tyndalston Story highlight a healthy, evolving ecosystem — proving the open-world format still has room for raw innovation, diverse design philosophies, and fresh gameplay ideas while the industry waits for Rockstar&apos;s heavyweight champion to reclaim its throne.
            </p>
          </div>
        </div>
      </GuideSection>
    </article>
  );
}
