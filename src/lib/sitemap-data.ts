import { newsArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

export const staticPagePaths = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/gta6-release-date", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gta6-pc-release-date", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-pre-order", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-download", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gta6-file-size", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/system-requirements", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/news", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/characters", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms-of-service", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" as const },
];

export const priorityPaths = [
  "/gta6-release-date",
  "/gta6-pc-release-date",
  "/gta6-pre-order",
  "/gta6-download",
  "/gta6-file-size",
  "/system-requirements",
  "/faq",
  "/news",
  "/characters",
];

export const standardPaths = [
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
];

export function getMainSitemapEntries() {
  const newsPages = newsArticles.map((article) => ({
    url: `${siteConfig.url}/news/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPagePaths.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...newsPages,
  ];
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

  const heroPages = [
    "",
    "/gta6-release-date",
    "/gta6-pc-release-date",
    "/gta6-pre-order",
    "/gta6-download",
    "/gta6-file-size",
    "/system-requirements",
  ];

  return [
    ...heroPages.map((path) => ({
      pageUrl: `${siteConfig.url}${path}`,
      images: [heroImage, ogImage],
    })),
    {
      pageUrl: `${siteConfig.url}/about`,
      images: [logoImage, heroImage],
    },
    {
      pageUrl: `${siteConfig.url}/news`,
      images: [heroImage],
    },
    ...newsArticles.map((article) => ({
      pageUrl: `${siteConfig.url}/news/${article.slug}`,
      images: [heroImage],
    })),
  ];
}

export function formatSitemapDate(date: Date = new Date()) {
  return date.toISOString().split("T")[0];
}
