import { LocaleLink } from "@/components/LocaleLink";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const pillarPages = [
  { href: "/gta6-release-date", label: "Release Date" },
  { href: "/gta6-pc-release-date", label: "Will GTA 6 Be on PC?" },
  { href: "/gta6-ps5", label: "GTA 6 PS5" },
  { href: "/gta6-leaks", label: "GTA 6 Leaks" },
  { href: "/gta6-map", label: "Leonida Map" },
  { href: "/gta6-gameplay", label: "Gameplay" },
  { href: "/gta6-reviews", label: "Reviews & Scores" },
  { href: "/gta6-editions", label: "Editions & Price" },
  { href: "/where-to-buy", label: "Where to Buy" },
  { href: "/gta6-pre-order", label: "Pre Order GTA 6" },
  { href: "/gta6-download", label: "Download Guide" },
  { href: "/gta6-file-size", label: "File Size" },
  { href: "/system-requirements", label: "System Requirements" },
  { href: "/gta6-online", label: "GTA Online Status" },
  { href: "/gta6-soundtrack", label: "Soundtrack" },
  { href: "/gta6-trailers", label: "Trailers" },
  { href: "/gta6-tips", label: "Beginner Tips" },
  { href: "/characters", label: "Characters" },
  { href: "/news", label: "GTA 6 News" },
] as const;

export function PillarLinks({
  current,
  relatedLabel = "RELATED GUIDES",
}: {
  current?: string;
  relatedLabel?: string;
}) {
  return (
    <ScrollReveal>
      <aside className="rounded-lg border border-border bg-surface-elevated p-4 sm:p-6">
        <h2 className="font-display text-lg tracking-wider sm:text-xl">{relatedLabel}</h2>
        <ul className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2">
          {pillarPages
            .filter((p) => p.href !== current)
            .map((page) => (
              <li key={page.href}>
                <LocaleLink
                  href={page.href}
                  className="block py-1 text-sm text-muted transition-colors hover:text-accent-teal"
                >
                  → {page.label}
                </LocaleLink>
              </li>
            ))}
        </ul>
      </aside>
    </ScrollReveal>
  );
}

export function QuickAnswer({
  question,
  answer,
  label = "Quick Answer",
}: {
  question: string;
  answer: string;
  label?: string;
}) {
  return (
    <ScrollReveal>
      <div className="rounded-lg border border-accent-teal/30 bg-accent-teal/5 p-4 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-teal">{label}</p>
        <h2 className="mt-2 font-display text-xl tracking-wide sm:text-2xl sm:tracking-wider">{question}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">{answer}</p>
      </div>
    </ScrollReveal>
  );
}
