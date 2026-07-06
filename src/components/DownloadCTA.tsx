import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function DownloadCTA() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="download-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-transparent to-accent-teal/10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="download-cta-heading" className="display-heading tracking-wider">
            READY FOR <span className="gradient-text">GTA 6</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:mt-4 sm:text-lg">
            Get the complete guide to downloading GTA 6 on PC. Official platforms, release timeline,
            and step-by-step instructions — updated for {siteConfig.releaseDateDisplay}.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/gta6-download"
              className="flex min-h-[48px] items-center justify-center rounded bg-accent-pink px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_40px_rgba(255,110,180,0.5)] sm:text-sm"
            >
              GTA 6 Download Guide
            </Link>
            <Link
              href="/faq"
              className="flex min-h-[48px] items-center justify-center rounded border border-border px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all hover:border-accent-teal hover:text-accent-teal sm:text-sm"
            >
              Read FAQ
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
