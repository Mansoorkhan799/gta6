import type { Locale } from "@/i18n/config";
import { localeMeta } from "@/i18n/config";
import type { GuideContent } from "./types";
import { normalizeGuide } from "./normalize";
import en from "./en";

const loaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import("./en"),
  id: () => import("./id"),
  br: () => import("./br"),
  de: () => import("./de"),
  ar: () => import("./ar"),
  tw: () => import("./tw"),
};

export async function getGuideContent(locale: Locale): Promise<GuideContent> {
  const key = localeMeta[locale].dict;
  try {
    const mod = await (loaders[key] ?? loaders.en)();
    return normalizeGuide(mod.default as Record<string, unknown>);
  } catch {
    return normalizeGuide(en as unknown as Record<string, unknown>);
  }
}
