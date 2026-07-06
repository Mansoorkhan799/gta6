"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#fact-sheet", label: "Official Fact Sheet" },
  { href: "#download-guide", label: "Download Guide" },
  { href: "/gta6-download", label: "Full Download Page" },
  { href: "/gta6-file-size", label: "File Size Guide" },
  { href: "#platform-download", label: "Platform Downloads" },
  { href: "#pc-download", label: "PC Download" },
  { href: "#storage", label: "Storage Requirements" },
  { href: "#release-timeline", label: "Release Timeline" },
  { href: "/gta6-release-date", label: "Release Date Page" },
  { href: "/gta6-pc-release-date", label: "PC Release Date" },
  { href: "/gta6-pre-order", label: "Pre-Orders & Pricing" },
  { href: "#hardware", label: "Hardware & PC Delay" },
  { href: "#leonida", label: "Leonida & Vice City" },
  { href: "#characters", label: "Lucia & Jason" },
  { href: "#online", label: "GTA 6 Online" },
  { href: "#open-world", label: "Open-World Landscape" },
  { href: "#summary", label: "Summary" },
];

export function TableOfContents() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <nav
      aria-label="Table of contents"
      className="mt-8 rounded-lg border border-border bg-surface-elevated sm:mt-10"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6"
      >
        <h2 className="font-display text-xl tracking-wider">IN THIS GUIDE</h2>
        <motion.svg
          className="h-5 w-5 shrink-0 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="grid gap-2 border-t border-border px-4 pb-4 pt-3 sm:grid-cols-2 sm:px-6 sm:pb-6 sm:pt-4 lg:grid-cols-3">
              {links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="block py-1 text-sm text-muted transition-colors hover:text-accent-pink"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-1 text-sm text-muted transition-colors hover:text-accent-pink"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
