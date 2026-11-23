"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta, localePath, stripLocaleFromPathname, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname() || "/";
  const { path } = stripLocaleFromPathname(pathname);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
      <ul className="flex flex-wrap gap-2">
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={localePath(locale, path === "/" ? "" : path)}
              className={`rounded border px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
                locale === current
                  ? "border-accent-pink text-accent-pink"
                  : "border-border text-muted hover:border-accent-teal hover:text-accent-teal"
              }`}
              hrefLang={localeMeta[locale].htmlLang}
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
