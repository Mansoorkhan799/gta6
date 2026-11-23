import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

export async function resolveLocale(params: Promise<{ locale: string }>): Promise<{
  locale: Locale;
  dict: Dictionary;
}> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return { locale: raw, dict: getDictionary(raw) };
}

export function pagePath(locale: Locale, path: string) {
  return localePath(locale, path);
}
