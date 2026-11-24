export type GuideContent = {
  /* ------------------------------------------------------------------ */
  /* Table of Contents                                                    */
  /* ------------------------------------------------------------------ */
  tocTitle: string;
  toc: { href: string; label: string }[];

  /* ------------------------------------------------------------------ */
  /* Overview                                                             */
  /* ------------------------------------------------------------------ */
  overview: {
    label: string;
    title: string;
    paragraphs: string[];
  };

  /* ------------------------------------------------------------------ */
  /* Fact Sheet                                                           */
  /* ------------------------------------------------------------------ */
  factSheet: {
    label: string;
    title: string;
    intro: string;
    pillarHeader: string;
    specHeader: string;
    rows: { pillar: string; spec: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Download Guide                                                       */
  /* ------------------------------------------------------------------ */
  downloadGuide: {
    label: string;
    title: string;
    paragraphs: string[];
    commonlySearchedTitle: string;
    commonlySearchedNote: string;
    unofficialTerms: string[];
    canDownloadTitle: string;
    canDownloadBody: string;
    officialAvailability: string;
    officialChannels: string[];
    preLoadTitle: string;
    preLoadBody: string;
    preLoadBenefits: string[];
  };

  /* ------------------------------------------------------------------ */
  /* Platform Downloads                                                   */
  /* ------------------------------------------------------------------ */
  platformDownload: {
    label: string;
    title: string;
    /** Template string – replace {platform} with the platform name */
    onPlatform: string;
    platforms: {
      platform: string;
      steps?: string[];
      note?: string;
      avoid?: string[];
    }[];
  };

  /* ------------------------------------------------------------------ */
  /* PC Download                                                          */
  /* ------------------------------------------------------------------ */
  pcDownload: {
    label: string;
    title: string;
    intro: string;
    steps: string[];
    avoidTitle: string;
    avoidItems: string[];
    fullGuideCta: string;
  };

  /* ------------------------------------------------------------------ */
  /* Storage                                                              */
  /* ------------------------------------------------------------------ */
  storage: {
    label: string;
    title: string;
    intro: string;
    requirementHeader: string;
    recommendationHeader: string;
    rows: { requirement: string; recommendation: string }[];
    ssdLabel: string;
    ssdBenefits: string[];
  };

  /* ------------------------------------------------------------------ */
  /* Release Timeline                                                     */
  /* ------------------------------------------------------------------ */
  releaseTimeline: {
    label: string;
    title: string;
    intro: string;
    items: { date: string; event: string; detail: string }[];
    details: { title: string; text: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Pre-Orders / Editions                                                */
  /* ------------------------------------------------------------------ */
  preOrders: {
    label: string;
    title: string;
    intro: string;
    editions: { name: string; price: string; description: string; featured?: boolean }[];
    incentives: { title: string; text: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Hardware & PC History                                                */
  /* ------------------------------------------------------------------ */
  hardware: {
    label: string;
    title: string;
    intro: string;
    capabilities: { title: string; text: string }[];
    lagTitle: string;
    gameHeader: string;
    consoleHeader: string;
    pcHeader: string;
    gapHeader: string;
    history: { game: string; console: string; pc: string; gap: string }[];
    lagBody: string;
  };

  /* ------------------------------------------------------------------ */
  /* Leonida / Vice City                                                  */
  /* ------------------------------------------------------------------ */
  leonida: {
    label: string;
    title: string;
    intro: string;
    modern: { title: string; text: string }[];
    regionalTitle: string;
    regions: { name: string; text: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Characters                                                           */
  /* ------------------------------------------------------------------ */
  characters: {
    label: string;
    title: string;
    intro: string;
    lucia: { name: string; highlights: { label: string; text: string }[] };
    jason: { name: string; highlights: { label: string; text: string }[] };
    codependentTitle: string;
    mechanics: { title: string; text: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Online                                                               */
  /* ------------------------------------------------------------------ */
  online: {
    label: string;
    title: string;
    body: string;
  };

  /* ------------------------------------------------------------------ */
  /* Open World / Samson                                                  */
  /* ------------------------------------------------------------------ */
  openWorld: {
    label: string;
    title: string;
    intro: string[];
    elementHeader: string;
    gta6Header: string;
    samsonHeader: string;
    comparison: { element: string; gta6: string; samson: string }[];
    mechanics: { title: string; text: string }[];
  };

  /* ------------------------------------------------------------------ */
  /* Summary                                                              */
  /* ------------------------------------------------------------------ */
  summary: {
    label: string;
    title: string;
    paragraphs: string[];
  };
};
