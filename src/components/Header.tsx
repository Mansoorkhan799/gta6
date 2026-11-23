"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LocaleLink } from "@/components/LocaleLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteAssets } from "@/lib/site-assets";
import { defaultTransition } from "@/lib/motion";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/gta6-pc-release-date", label: dict.nav.pc },
    { href: "/gta6-ps5", label: dict.nav.ps5 },
    { href: "/gta6-pre-order", label: dict.nav.preOrder },
    { href: "/gta6-leaks", label: dict.nav.leaks },
    { href: "/where-to-buy", label: dict.nav.buy },
    { href: "/gta6-reviews", label: dict.nav.reviews },
    { href: "/news", label: dict.nav.news },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reducedMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...defaultTransition, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/95 pt-[env(safe-area-inset-top)]"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <LocaleLink
          href="/"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
          aria-label={`${dict.meta.siteName} ${dict.nav.home}`}
        >
          <Image
            src={siteAssets.favicon.png96}
            alt=""
            width={32}
            height={32}
            className="shrink-0 rounded-sm sm:h-9 sm:w-9"
            priority
          />
          <span className="truncate font-display text-xl tracking-widest text-foreground transition-colors group-hover:text-accent-pink sm:text-2xl lg:text-3xl">
            GTA<span className="text-accent-pink">VI</span>
          </span>
          <span className="hidden shrink-0 text-[10px] font-medium uppercase tracking-[0.15em] text-muted lg:block">
            For PC
          </span>
        </LocaleLink>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {links.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className="rounded px-2.5 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground xl:px-3 xl:text-sm"
            >
              {link.label}
            </LocaleLink>
          ))}
          <LocaleLink
            href="/where-to-buy"
            className="ml-1 rounded bg-accent-pink px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-accent-teal xl:ml-2 xl:px-5 xl:text-sm"
          >
            {dict.nav.buyCta}
          </LocaleLink>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border xl:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-40 bg-black/60 backdrop-blur-sm sm:top-16 xl:hidden"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={reducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-50 overflow-hidden border-t border-border bg-background xl:hidden"
              aria-label="Mobile navigation"
            >
              <div className="max-h-[calc(100svh-3.5rem)] overflow-y-auto px-4 py-4 sm:max-h-[calc(100svh-4rem)]">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <LocaleLink
                      href={link.href}
                      className="block min-h-[44px] rounded px-3 py-3 text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </LocaleLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05, duration: 0.25 }}
                >
                  <LocaleLink
                    href="/where-to-buy"
                    className="mt-3 flex min-h-[44px] items-center justify-center rounded bg-accent-pink px-5 py-3 text-sm font-bold uppercase tracking-wider text-black"
                    onClick={() => setOpen(false)}
                  >
                    {dict.nav.buyCta}
                  </LocaleLink>
                </motion.div>
                <div className="mt-4 border-t border-border pt-4">
                  <LanguageSwitcher current={locale} label={dict.common.language} />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
