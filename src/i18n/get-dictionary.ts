import type { Locale } from "./config";
import { localeMeta } from "./config";
import type { Dictionary } from "./dictionaries/types";
import en from "./dictionaries/en";
import id from "./dictionaries/id";
import br from "./dictionaries/br";
import de from "./dictionaries/de";
import ar from "./dictionaries/ar";
import tw from "./dictionaries/tw";

const dictionaries: Record<string, Dictionary> = {
  en,
  id,
  br,
  de,
  ar,
  tw,
};

export function getDictionary(locale: Locale): Dictionary {
  const dictKey = localeMeta[locale].dict;
  return dictionaries[dictKey] ?? en;
}
