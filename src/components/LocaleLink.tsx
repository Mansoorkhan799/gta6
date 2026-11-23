"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentProps } from "react";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";

function useLocale(): Locale {
  const pathname = usePathname() || "/";
  const maybe = pathname.split("/").filter(Boolean)[0];
  return maybe && isLocale(maybe) ? maybe : defaultLocale;
}

export const LocaleLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(
  function LocaleLink({ href, ...props }, ref) {
    const locale = useLocale();
    const raw = typeof href === "string" ? href : href.pathname || "/";

    if (
      raw.startsWith("http") ||
      raw.startsWith("mailto:") ||
      raw.startsWith("tel:") ||
      raw.startsWith("#")
    ) {
      return <Link ref={ref} href={href} {...props} />;
    }

    const path = raw.startsWith("/") ? raw : `/${raw}`;
    const localized = localePath(locale, path === "/" ? "" : path);
    return <Link ref={ref} href={localized} {...props} />;
  }
);

export function useLocalePath(path = "") {
  const locale = useLocale();
  return localePath(locale, path);
}

export { useLocale };
