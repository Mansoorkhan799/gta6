import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-14 sm:pt-16">
      <Image
        src={siteAssets.heroBackground}
        alt="Grand Theft Auto VI — Vice City Leonida artwork"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-[center_25%] sm:object-center"
      />

      <div className="absolute inset-0 bg-black/60 sm:bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-transparent to-accent-teal/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-6 text-center sm:px-6 sm:pb-16 lg:px-8">
        <p className="animate-fade-up text-[10px] font-medium uppercase tracking-[0.15em] text-accent-teal drop-shadow-lg sm:text-xs sm:tracking-[0.25em] md:text-sm md:tracking-[0.3em]">
          Grand Theft Auto VI — PC Edition
        </p>

        <h1 className="animate-fade-up mt-3 font-display text-[3.25rem] leading-[0.9] tracking-wide drop-shadow-2xl sm:mt-4 sm:text-7xl sm:tracking-wider md:text-8xl lg:text-9xl xl:text-[10rem]">
          GTA<span className="gradient-text">VI</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-4 max-w-3xl px-1 text-base leading-relaxed text-foreground/90 drop-shadow-md sm:mt-6 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          The ultimate guide to <strong className="text-white">GTA 6 release date</strong>, download platforms,
          gameplay, and the changing open-world landscape.
        </p>

        <div
          className="animate-fade-up mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/gta6-download"
            className="flex min-h-[48px] w-full items-center justify-center rounded bg-accent-pink px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-accent-teal hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
          >
            GTA 6 Download Guide
          </Link>
          <Link
            href="/system-requirements"
            className="flex min-h-[48px] w-full items-center justify-center rounded border border-white/30 bg-black/30 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-accent-teal hover:text-accent-teal sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
          >
            System Requirements
          </Link>
        </div>

        <div
          className="animate-fade-up mx-auto mt-8 grid w-full max-w-lg gap-3 rounded-lg border border-white/10 bg-black/40 p-4 text-left text-xs text-foreground/80 backdrop-blur-md sm:mt-12 sm:max-w-3xl sm:gap-0 sm:p-0 sm:text-sm md:flex md:max-w-4xl md:flex-wrap md:items-center md:justify-center md:gap-6 md:rounded-lg md:border md:p-4 md:text-center"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-start gap-2 sm:items-center md:justify-center">
            <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse-glow rounded-full bg-accent-pink sm:mt-0" />
            <span>
              Console Release:{" "}
              <strong className="block text-white sm:inline">{siteConfig.releaseDateDisplay}</strong>
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
          <div>
            PC Release:{" "}
            <strong className="block text-accent-teal sm:inline">{siteConfig.pcReleaseEstimate}</strong>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
          <div>
            Setting:{" "}
            <strong className="block text-white sm:inline">Vice City, Leonida</strong>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:bottom-8 sm:block">
        <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
