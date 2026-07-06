import { getImageSitemapEntries, formatSitemapDate } from "@/lib/sitemap-data";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = getImageSitemapEntries();
  const lastmod = formatSitemapDate();

  const urlBlocks = entries
    .map((entry) => {
      const images = entry.images
        .map(
          (image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>${
        image.caption
          ? `\n      <image:caption>${escapeXml(image.caption)}</image:caption>`
          : ""
      }
    </image:image>`
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(entry.pageUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
