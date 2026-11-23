import { generateRobotsTxt } from "@/lib/robots-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(generateRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
