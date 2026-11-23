import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, prefixedLocales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/image-sitemap") ||
    pathname.startsWith("/manifest")
  ) {
    return;
  }

  // /en and /en/... → public unprefixed English URLs (preserve indexed root)
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    const stripped = pathname.slice(defaultLocale.length + 1) || "/";
    url.pathname = stripped;
    return NextResponse.redirect(url);
  }

  const hasPrefixedLocale = prefixedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (hasPrefixedLocale) return;

  // Unprefixed paths are English — rewrite internally to /[locale] without changing the URL
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
