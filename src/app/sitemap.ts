import type { MetadataRoute } from "next";
import { getMainSitemapEntries } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return getMainSitemapEntries();
}
