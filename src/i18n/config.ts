export const defaultLocale = "en" as const;

/** URL prefixes for non-default locales: /id, /br, /de … English stays at `/`. */
export const locales = [
  "en",
  "id",
  "br",
  "de",
  "ar",
  "tw",
  "sg",
  "irl",
  "au",
  "uk",
  "ca",
] as const;

export type Locale = (typeof locales)[number];

/** Locales that appear as a URL segment (everything except English). */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; label: string; dict: Locale }
> = {
  en: { htmlLang: "en", ogLocale: "en_US", label: "English", dict: "en" },
  id: { htmlLang: "id", ogLocale: "id_ID", label: "Indonesia", dict: "id" },
  br: { htmlLang: "pt-BR", ogLocale: "pt_BR", label: "Brasil", dict: "br" },
  de: { htmlLang: "de", ogLocale: "de_DE", label: "Deutsch", dict: "de" },
  ar: { htmlLang: "es-AR", ogLocale: "es_AR", label: "Español (AR)", dict: "ar" },
  tw: { htmlLang: "zh-Hant-TW", ogLocale: "zh_TW", label: "繁體中文", dict: "tw" },
  // English regional markets share the English dictionary
  sg: { htmlLang: "en-SG", ogLocale: "en_SG", label: "Singapore", dict: "en" },
  irl: { htmlLang: "en-IE", ogLocale: "en_IE", label: "Ireland", dict: "en" },
  au: { htmlLang: "en-AU", ogLocale: "en_AU", label: "Australia", dict: "en" },
  uk: { htmlLang: "en-GB", ogLocale: "en_GB", label: "United Kingdom", dict: "en" },
  ca: { htmlLang: "en-CA", ogLocale: "en_CA", label: "Canada", dict: "en" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Public URL path. English has no prefix — keeps indexed `/` URLs. */
export function localePath(locale: Locale, path = "") {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized || "/";
  }
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPathname(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  const maybe = parts[0];
  if (maybe && isLocale(maybe)) {
    const rest = "/" + parts.slice(1).join("/");
    return { locale: maybe, path: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}
