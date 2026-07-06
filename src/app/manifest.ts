import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "GTA6 PC",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#ff6eb4",
    icons: [
      {
        src: siteAssets.favicon.manifest192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteAssets.favicon.manifest512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
