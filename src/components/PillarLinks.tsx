import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const pillarPages = [
  { href: "/gta6-release-date", label: "Release Date" },
  { href: "/gta6-pc-release-date", label: "PC Release Date" },
  { href: "/gta6-pre-order", label: "Pre-Order" },
  { href: "/gta6-download", label: "Download Guide" },
  { href: "/gta6-file-size", label: "File Size" },
  { href: "/system-requirements", label: "System Requirements" },
] as const;

export function PillarLinks({ current }: { current?: string }) {
  return (
    <ScrollReveal>
      <aside className="rounded-lg border border-border bg-surface-elevated p-4 sm:p-6">
        <h2 className="font-display text-lg tracking-wider sm:text-xl">RELATED GUIDES</h2>
        <ul className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2">
          {pillarPages
            .filter((p) => p.href !== current)
            .map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="block py-1 text-sm text-muted transition-colors hover:text-accent-teal"
                >
                  → {page.label}
                </Link>
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
}: {
  question: string;
  answer: string;
}) {
  return (
    <ScrollReveal>
      <div className="rounded-lg border border-accent-teal/30 bg-accent-teal/5 p-4 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-teal">Quick Answer</p>
        <h2 className="mt-2 font-display text-xl tracking-wide sm:text-2xl sm:tracking-wider">{question}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">{answer}</p>
      </div>
    </ScrollReveal>
  );
}
