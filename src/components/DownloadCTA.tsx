"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function DownloadCTA({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="download-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-transparent to-accent-teal/10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="download-cta-heading" className="display-heading tracking-wider">
            {dict.cta.headingBefore}
            <span className="gradient-text">{dict.cta.headingAccent}</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:mt-4 sm:text-lg">{dict.cta.body}</p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <LocaleLink
              href="/where-to-buy"
              className="flex min-h-[48px] items-center justify-center rounded bg-accent-pink px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_40px_rgba(255,110,180,0.5)] sm:text-sm"
            >
              {dict.cta.buy}
            </LocaleLink>
            <LocaleLink
              href="/gta6-pc-release-date"
              className="flex min-h-[48px] items-center justify-center rounded border border-border px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all hover:border-accent-teal hover:text-accent-teal sm:text-sm"
            >
              {dict.cta.pcTracker}
            </LocaleLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
