import { newsArticles } from "@/lib/content";
import { locales, localeMeta, localePath, type Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

const contentPaths = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/gta6-release-date", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gta6-pc-release-date", priority: 0.98, changeFrequency: "daily" as const },
  { path: "/gta6-ps5", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gta6-leaks", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-reviews", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/where-to-buy", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gta6-map", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-gameplay", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-editions", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-pre-order", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gta6-download", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-file-size", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/system-requirements", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/gta6-online", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/gta6-soundtrack", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gta6-trailers", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gta6-tips", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/news", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/characters", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms-of-service", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" as const },
];

/** @deprecated kept for imports that expect the old list shape */
export const staticPagePaths = contentPaths;
export const priorityPaths = contentPaths.filter((p) => p.priority >= 0.8).map((p) => p.path);
export const standardPaths = ["/about", "/contact", "/privacy-policy", "/terms-of-service", "/disclaimer"];

function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[localeMeta[locale].htmlLang] = `${siteConfig.url}${localePath(locale, path)}`;
  }
  languages["x-default"] = `${siteConfig.url}${localePath("en", path)}`;
  return languages;
}

export function getMainSitemapEntries() {
  const entries = [];

  for (const page of contentPaths) {
    const languages = languageAlternates(page.path);
    for (const locale of locales) {
      entries.push({
        url: `${siteConfig.url}${localePath(locale as Locale, page.path)}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: locale === "en" ? page.priority : Math.max(0.4, page.priority - 0.05),
        alternates: { languages },
      });
    }
  }

  for (const article of newsArticles) {
    const path = `/news/${article.slug}`;
    const languages = languageAlternates(path);
    for (const locale of locales) {
      entries.push({
        url: `${siteConfig.url}${localePath(locale as Locale, path)}`,
        lastModified: new Date(article.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}

export type ImageSitemapEntry = {
  pageUrl: string;
  images: {
    loc: string;
    title: string;
    caption?: string;
  }[];
};

export function getImageSitemapEntries(): ImageSitemapEntry[] {
  const heroImage = {
    loc: `${siteConfig.url}${siteAssets.heroBackground}`,
    title: "Grand Theft Auto VI — Vice City Leonida artwork",
    caption: "GTA 6 hero artwork for gta6forpc.org — PC release guide and download info",
  };

  const logoImage = {
    loc: `${siteConfig.url}${siteAssets.favicon.png96}`,
    title: "GTA6 For PC logo",
    caption: "GTA6 For PC site logo and favicon",
  };

  const ogImage = {
    loc: `${siteConfig.url}${siteAssets.ogImage}`,
    title: "GTA 6 For PC — Open Graph preview image",
    caption: "Grand Theft Auto VI social sharing preview for gta6forpc.org",
  };

  const heroPaths = contentPaths
    .filter((p) => !["/privacy-policy", "/terms-of-service", "/disclaimer", "/contact"].includes(p.path))
    .map((p) => p.path);

  return [
    ...locales.flatMap((locale) =>
      heroPaths.map((path) => ({
        pageUrl: `${siteConfig.url}${localePath(locale, path)}`,
        images: [heroImage, ogImage],
      }))
    ),
    {
      pageUrl: `${siteConfig.url}${localePath("en", "/about")}`,
      images: [logoImage, heroImage],
    },
    ...newsArticles.flatMap((article) =>
      locales.map((locale) => ({
        pageUrl: `${siteConfig.url}${localePath(locale, `/news/${article.slug}`)}`,
        images: [heroImage],
      }))
    ),
  ];
}

export function formatSitemapDate(date: Date = new Date()) {
  return date.toISOString().split("T")[0];
}
