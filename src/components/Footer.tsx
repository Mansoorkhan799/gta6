import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
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
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-muted/60">
              This is an unofficial fan site. Grand Theft Auto VI is a trademark of Rockstar Games.
              We are not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/gta6-release-date", label: "Release Date" },
                { href: "/gta6-pc-release-date", label: "PC Release Date" },
                { href: "/gta6-pre-order", label: "Pre-Order" },
                { href: "/gta6-download", label: "GTA 6 Download" },
                { href: "/gta6-file-size", label: "File Size" },
                { href: "/system-requirements", label: "System Requirements" },
                { href: "/faq", label: "FAQ" },
                { href: "/news", label: "Latest News" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wider">Official</h3>
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {year}{" "}
            <Link
              href="/"
              className="text-foreground/80 transition-colors hover:text-accent-teal"
            >
              {siteConfig.domain}
            </Link>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted">
            <Link href="/about" className="transition-colors hover:text-accent-teal">
              About
            </Link>
            <Link href="/disclaimer" className="transition-colors hover:text-accent-teal">
              Disclaimer
            </Link>
            <span>GTA 6 Release: {siteConfig.releaseDateDisplay}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
