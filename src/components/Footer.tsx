"use client";

import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { LocaleLink } from "@/components/LocaleLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

const guideHrefs = [
  "/gta6-pc-release-date",
  "/gta6-ps5",
  "/gta6-pre-order",
  "/gta6-leaks",
  "/gta6-release-date",
  "/gta6-map",
  "/gta6-gameplay",
  "/gta6-reviews",
  "/where-to-buy",
  "/gta6-download",
  "/news",
  "/faq",
] as const;

const legalHrefs = [
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
] as const;

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  const guideLabels: Record<(typeof guideHrefs)[number], string> = {
    "/gta6-pc-release-date": dict.nav.pc,
    "/gta6-ps5": dict.nav.ps5,
    "/gta6-pre-order": dict.nav.preOrder,
    "/gta6-leaks": dict.nav.leaks,
    "/gta6-release-date": dict.common.release,
    "/gta6-map": dict.common.map,
    "/gta6-gameplay": dict.common.gameplay,
    "/gta6-reviews": dict.nav.reviews,
    "/where-to-buy": dict.nav.buy,
    "/gta6-download": dict.common.download,
    "/news": dict.nav.news,
    "/faq": dict.common.faq,
  };

  const legalLabels: Record<(typeof legalHrefs)[number], string> = {
    "/about": dict.common.about,
    "/contact": dict.common.contact,
    "/privacy-policy": dict.common.privacy,
    "/terms-of-service": dict.common.terms,
    "/disclaimer": dict.common.disclaimer,
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <LanguageSwitcher current={locale} label={dict.common.language} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LocaleLink href="/" className="inline-flex items-center gap-3">
              <Image
                src={siteAssets.favicon.png96}
                alt=""
                width={40}
                height={40}
                className="rounded-sm"
              />
              <span className="font-display text-3xl tracking-widest">
                GTA<span className="text-accent-pink">VI</span>
              </span>
            </LocaleLink>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{dict.meta.homeDescription}</p>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">{dict.footer.follow}</p>
              <SocialLinks className="mt-3" />
            </div>

            <p className="mt-4 text-xs text-muted/60">{dict.footer.disclaimer}</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-lg tracking-wider">{dict.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {guideHrefs.map((href) => (
                <li key={href}>
                  <LocaleLink href={href} className="text-sm text-muted transition-colors hover:text-accent-teal">
                    {guideLabels[href]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wider">{dict.footer.legal}</h3>
            <ul className="mt-4 space-y-2">
              {legalHrefs.map((href) => (
                <li key={href}>
                  <LocaleLink href={href} className="text-sm text-muted transition-colors hover:text-accent-teal">
                    {legalLabels[href]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wider">{dict.footer.official}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.rockstargames.com/VI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent-teal"
                >
                  Rockstar Games
                </a>
              </li>
              <li>
                <a
                  href="https://www.rockstargames.com/newswire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent-teal"
                >
                  Rockstar Newswire
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-xs text-muted sm:text-left">
          &copy; {year} {siteConfig.domain}. {dict.meta.siteName}.
        </div>
      </div>
    </footer>
  );
}
