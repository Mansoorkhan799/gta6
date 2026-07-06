"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";
import { defaultTransition } from "@/lib/motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

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
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
          aria-label="GTA6 For PC Home"
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
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2.5 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground xl:px-3 xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/gta6-download"
            className="ml-1 rounded bg-accent-pink px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-accent-teal xl:ml-2 xl:px-5 xl:text-sm"
          >
            Get GTA 6
          </Link>
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
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className="block min-h-[44px] rounded px-3 py-3 text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                >
                  <Link
                    href="/gta6-download"
                    className="mt-3 flex min-h-[44px] items-center justify-center rounded bg-accent-pink px-5 py-3 text-sm font-bold uppercase tracking-wider text-black"
                    onClick={() => setOpen(false)}
                  >
                    Get GTA 6
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
