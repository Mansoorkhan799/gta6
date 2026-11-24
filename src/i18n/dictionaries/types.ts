export type Dictionary = {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    home: string;
    pc: string;
    ps5: string;
    preOrder: string;
    leaks: string;
    buy: string;
    reviews: string;
    news: string;
    buyCta: string;
  };
  footer: {
    quickLinks: string;
    legal: string;
    official: string;
    follow: string;
    disclaimer: string;
    regions: string;
  };
  common: {
    quickAnswer: string;
    relatedGuides: string;
    readMore: string;
    home: string;
    language: string;
    release: string;
    map: string;
    gameplay: string;
    download: string;
    faq: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  };
  trailer: {
    eyebrow: string;
    title: string;
    videoTitle: string;
    videoCaption: string;
  };
  news: {
    eyebrow: string;
    title: string;
    allNews: string;
    readMore: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    items: { question: string; answer: string }[];
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    ctaBuy: string;
    ctaPc: string;
    statusLabel: string;
    statusValue: string;
    criticsLabel: string;
    criticsValue: string;
    pcLabel: string;
    pcValue: string;
  };
  cta: {
    headingBefore: string;
    headingAccent: string;
    body: string;
    buy: string;
    pcTracker: string;
  };
  home: {
    guideTitle: string;
    guideIntro: string[];
    factSheetTitle: string;
    factSheetLabel: string;
  };
  pages: {
    pc: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
      keyFactsTitle: string;
      keyFacts: string[];
      sections: { h2: string; body: string }[];
      faqs: { q: string; a: string }[];
    };
    ps5: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
    preOrder: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
    leaks: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
    buy: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
    reviews: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
    news: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      subtitle: string;
      quickQ: string;
      quickA: string;
    };
  };
};
