"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LocaleLink } from "@/components/LocaleLink";
import { siteAssets } from "@/lib/site-assets";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function Hero({ dict }: { dict: Dictionary }) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden pt-14 sm:min-h-screen sm:pt-16">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={reducedMotion ? false : { scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={siteAssets.heroBackground}
          alt="Grand Theft Auto VI — Vice City Leonida artwork"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-top"
        />
      </motion.div>

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
        <StaggerContainer>
          <StaggerItem>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-accent-teal drop-shadow-lg sm:text-xs sm:tracking-[0.25em] md:text-sm md:tracking-[0.3em]">
              {dict.hero.eyebrow}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-3 font-display text-[3.25rem] leading-[0.9] tracking-wide drop-shadow-2xl sm:mt-4 sm:text-7xl sm:tracking-wider md:text-8xl lg:text-9xl xl:text-[10rem]">
              {dict.hero.titleBefore}
              <span className="gradient-text">{dict.hero.titleAccent}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-4 max-w-3xl px-1 text-base leading-relaxed text-foreground/90 drop-shadow-md sm:mt-6 sm:text-lg md:text-xl">
              {dict.hero.subtitle}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <LocaleLink
                href="/where-to-buy"
                className="flex min-h-[48px] w-full items-center justify-center rounded bg-accent-pink px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-accent-teal hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                {dict.hero.ctaBuy}
              </LocaleLink>
              <LocaleLink
                href="/gta6-pc-release-date"
                className="flex min-h-[48px] w-full items-center justify-center rounded border border-white/30 bg-black/30 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-accent-teal hover:text-accent-teal sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                {dict.hero.ctaPc}
              </LocaleLink>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mx-auto mt-8 grid w-full max-w-lg gap-3 rounded-lg border border-white/10 bg-black/40 p-4 text-left text-xs text-foreground/80 backdrop-blur-md sm:mt-12 sm:max-w-3xl sm:text-sm md:flex md:max-w-4xl md:flex-wrap md:items-center md:justify-center md:gap-6 md:p-4 md:text-center">
              <div className="flex items-start gap-2 sm:items-center md:justify-center">
                <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse-glow rounded-full bg-accent-teal sm:mt-0" />
                <span>
                  {dict.hero.statusLabel}:{" "}
                  <strong className="block text-white sm:inline">{dict.hero.statusValue}</strong>
                </span>
              </div>
              <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
              <div>
                {dict.hero.criticsLabel}:{" "}
                <strong className="block text-accent-pink sm:inline">{dict.hero.criticsValue}</strong>
              </div>
              <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
              <div>
                {dict.hero.pcLabel}:{" "}
                <strong className="block text-accent-teal sm:inline">{dict.hero.pcValue}</strong>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
