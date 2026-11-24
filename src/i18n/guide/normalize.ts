import type { GuideContent } from "./types";

/** Convert either flat GuideContent or legacy agent-shaped objects into GuideContent. */
export function normalizeGuide(raw: Record<string, unknown>): GuideContent {
  if (isFlatGuide(raw)) return raw;

  const sections = (raw.sections ?? {}) as Record<string, Record<string, string>>;
  const headers = (raw.tableHeaders ?? {}) as Record<string, string>;
  const toc = (raw.toc ?? {}) as { title?: string; links?: { href: string; label: string }[] };

  const s = (key: string) => sections[key] ?? {};

  return {
    tocTitle: toc.title ?? "IN THIS GUIDE",
    toc: toc.links ?? [],
    overview: {
      label: s("overview").label ?? "",
      title: s("overview").title ?? "",
      paragraphs: (raw.intro as string[]) ?? [],
    },
    factSheet: {
      label: s("factSheet").label ?? "",
      title: s("factSheet").title ?? "",
      intro: s("factSheet").intro ?? "",
      pillarHeader: headers.pillar ?? "Project Pillar",
      specHeader: headers.spec ?? "Confirmed Specification",
      rows: (raw.factSheet as GuideContent["factSheet"]["rows"]) ?? [],
    },
    downloadGuide: {
      label: s("downloadGuide").label ?? "",
      title: s("downloadGuide").title ?? "",
      paragraphs: (raw.downloadIntro as string[]) ?? [],
      commonlySearchedTitle: String(raw.commonlySearchedTitle ?? ""),
      commonlySearchedNote: String(raw.commonlySearchedNote ?? ""),
      unofficialTerms: (raw.unofficialSearchTerms as string[]) ?? [],
      canDownloadTitle: String(raw.canDownloadTitle ?? ""),
      canDownloadBody: String(raw.canDownloadBody ?? ""),
      officialAvailability: String(raw.officialAvailability ?? ""),
      officialChannels: (raw.officialChannels as string[]) ?? [],
      preLoadTitle: String(raw.preLoadTitle ?? ""),
      preLoadBody: String(raw.preLoadBody ?? ""),
      preLoadBenefits: (raw.preLoadBenefits as string[]) ?? [],
    },
    platformDownload: {
      label: s("platformDownload").label ?? "",
      title: s("platformDownload").title ?? "",
      onPlatform: String(raw.onPlatform ?? "GTA 6 on {platform}"),
      platforms: ((raw.platformGuides as { platform: string; steps?: string[]; note?: string; avoid?: string[] }[]) ?? []).map(
        (g) =>
          g.steps
            ? { platform: g.platform, steps: [...g.steps] }
            : { platform: g.platform, note: g.note ?? "", avoid: [...(g.avoid ?? [])] }
      ),
    },
    pcDownload: {
      label: s("pcDownload").label ?? "",
      title: s("pcDownload").title ?? "",
      intro: s("pcDownload").intro ?? String(raw.pcDownloadIntro ?? ""),
      steps: (raw.pcDownloadSteps as string[]) ?? [],
      avoidTitle: String(raw.avoidTitle ?? ""),
      avoidItems: (raw.avoidUnofficial as string[]) ?? [],
      fullGuideCta: String(raw.fullPcGuideCta ?? ""),
    },
    storage: {
      label: s("storage").label ?? "",
      title: s("storage").title ?? "",
      intro: s("storage").intro ?? "",
      requirementHeader: headers.requirement ?? "Requirement",
      recommendationHeader: headers.recommendation ?? "Recommendation",
      rows: (raw.storageRequirements as GuideContent["storage"]["rows"]) ?? [],
      ssdLabel: String(raw.ssdImproves ?? ""),
      ssdBenefits: (raw.ssdBenefits as string[]) ?? [],
    },
    releaseTimeline: {
      label: s("releaseTimeline").label ?? "",
      title: s("releaseTimeline").title ?? "",
      intro: s("releaseTimeline").intro ?? "",
      items: (raw.releaseTimeline as GuideContent["releaseTimeline"]["items"]) ?? [],
      details: (raw.timelineDetails as GuideContent["releaseTimeline"]["details"]) ?? [],
    },
    preOrders: {
      label: s("preOrders").label ?? "",
      title: s("preOrders").title ?? "",
      intro: s("preOrders").intro ?? "",
      editions: (raw.editions as GuideContent["preOrders"]["editions"]) ?? [],
      incentives: (raw.preOrderIncentives as GuideContent["preOrders"]["incentives"]) ?? [],
    },
    hardware: {
      label: s("hardware").label ?? "",
      title: s("hardware").title ?? "",
      intro: s("hardware").intro ?? "",
      capabilities: (raw.consoleCapabilities as GuideContent["hardware"]["capabilities"]) ?? [],
      lagTitle: String(raw.historicalLagTitle ?? ""),
      gameHeader: headers.game ?? "Game",
      consoleHeader: headers.consoleLaunch ?? "Console Launch",
      pcHeader: headers.pcLaunch ?? "PC Launch",
      gapHeader: headers.gap ?? "Gap",
      history: ((raw.pcHistory as { game: string; console?: string; consoleLaunch?: string; pc?: string; pcLaunch?: string; gap: string }[]) ?? []).map(
        (row) => ({
          game: row.game,
          console: row.console ?? row.consoleLaunch ?? "",
          pc: row.pc ?? row.pcLaunch ?? "",
          gap: row.gap,
        })
      ),
      lagBody: String(raw.historicalLagBody ?? ""),
    },
    leonida: {
      label: s("leonida").label ?? "",
      title: s("leonida").title ?? "",
      intro: s("leonida").intro ?? "",
      modern: (raw.viceCityModern as GuideContent["leonida"]["modern"]) ?? [],
      regionalTitle: String(raw.regionalMapping ?? ""),
      regions: (raw.leonidaRegions as GuideContent["leonida"]["regions"]) ?? [],
    },
    characters: {
      label: s("characters").label ?? "",
      title: s("characters").title ?? "",
      intro: s("characters").intro ?? "",
      lucia: (raw.luciaProfile as GuideContent["characters"]["lucia"]) ?? { name: "Lucia", highlights: [] },
      jason: (raw.jasonProfile as GuideContent["characters"]["jason"]) ?? { name: "Jason", highlights: [] },
      codependentTitle: String(raw.codependentGameplay ?? ""),
      mechanics: (raw.gameplayMechanics as GuideContent["characters"]["mechanics"]) ?? [],
    },
    online: {
      label: s("online").label ?? "",
      title: s("online").title ?? "",
      body: String(raw.onlineBody ?? ""),
    },
    openWorld: {
      label: s("openWorld").label ?? "",
      title: s("openWorld").title ?? "",
      intro: [String(raw.openWorldIntro1 ?? ""), String(raw.openWorldIntro2 ?? "")].filter(Boolean),
      elementHeader: headers.element ?? "Element",
      gta6Header: headers.gta6 ?? "GTA 6",
      samsonHeader: headers.samson ?? "Samson",
      comparison: (raw.samsonComparison as GuideContent["openWorld"]["comparison"]) ?? [],
      mechanics: (raw.samsonMechanics as GuideContent["openWorld"]["mechanics"]) ?? [],
    },
    summary: {
      label: s("summary").label ?? "",
      title: s("summary").title ?? "",
      paragraphs: (raw.summaryParagraphs as string[]) ?? [],
    },
  };
}

function isFlatGuide(raw: Record<string, unknown>): raw is GuideContent {
  const overview = raw.overview as { paragraphs?: unknown } | undefined;
  return Array.isArray(overview?.paragraphs) && !("sections" in raw);
}
