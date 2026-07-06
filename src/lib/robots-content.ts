import { siteConfig } from "@/lib/site-config";
import { priorityPaths, standardPaths } from "@/lib/sitemap-data";

export function generateRobotsTxt() {
  const { url, domain } = siteConfig;

  const allowLines = (paths: string[]) =>
    paths.map((path) => `Allow: ${path || "/"}`).join("\n");

  return `# robots.txt for ${domain}

# ============================================
# AI CONTENT USAGE POLICY
# ============================================
# As a condition of accessing this website, you agree to abide by the following
# content signals:
#
# (a) If a content-signal = yes, you may collect content for the corresponding use.
# (b) If a content-signal = no, you may not collect content for the corresponding use.
# (c) If no signal is present, the website operator neither grants nor restricts
#     permission via content signal with respect to the corresponding use.
#
# Content signals:
# - search:    Building search index and providing search results
# - ai-input:  Using content for AI-generated answers and responses
# - ai-train:  Training or fine-tuning AI models
#
# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.

# ============================================
# MAIN CRAWLER RULES
# ============================================

# Allow search engines, but prevent AI training via dedicated bot rules below
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# Priority pages (GTA 6 SEO pillars)
${allowLines(priorityPaths)}

# Standard pages
${allowLines(standardPaths)}

# ============================================
# AI BOT RESTRICTIONS (Training Prevention)
# ============================================

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: cohere-ai
Disallow: /

# ============================================
# SEARCH ENGINE BOTS (Explicitly Allow)
# ============================================

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandex
Allow: /

User-agent: DuckDuckBot
Allow: /

# ============================================
# SITEMAPS
# ============================================

Sitemap: ${url}/sitemap-index.xml
Sitemap: ${url}/sitemap.xml
Sitemap: ${url}/image-sitemap.xml

# ============================================
# IMPORTANT: DO NOT ADD Host DIRECTIVE
# ============================================
# The Host directive is DEPRECATED and IGNORED by Googlebot.
# Adding it will cause warnings in Google Search Console.
# Use canonical URLs and redirects instead (handled at hosting level).
`;
}
