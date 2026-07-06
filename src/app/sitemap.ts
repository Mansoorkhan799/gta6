import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { newsArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
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
    { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const newsPages = newsArticles.map((article) => ({
    url: `${siteConfig.url}/news/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...newsPages,
  ];
}
