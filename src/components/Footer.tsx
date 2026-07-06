import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-config";
import { siteAssets } from "@/lib/site-assets";

const quickLinks = [
  { href: "/gta6-release-date", label: "Release Date" },
  { href: "/gta6-pc-release-date", label: "PC Release Date" },
  { href: "/gta6-pre-order", label: "Pre-Order" },
  { href: "/gta6-download", label: "GTA 6 Download" },
  { href: "/gta6-file-size", label: "File Size" },
  { href: "/system-requirements", label: "System Requirements" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "Latest News" },
];

const legalLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
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

            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Follow Us</p>
              <SocialLinks className="mt-3" />
            </div>

            <p className="mt-4 text-xs text-muted/60">
              This is an unofficial fan site. Grand Theft Auto VI is a trademark of Rockstar Games.
              We are not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-lg tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wider">Legal & Info</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wider">Community</h3>
            <SocialLinks variant="list" className="mt-4" />
            <h3 className="mt-8 font-display text-lg tracking-wider">Official</h3>
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
              <li>
                <a
                  href="https://support.rockstargames.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent-teal"
                >
                  Rockstar Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-xs text-muted sm:text-left">
            &copy; {year}{" "}
            <Link
              href="/"
              className="text-foreground/80 transition-colors hover:text-accent-teal"
            >
              {siteConfig.domain}
            </Link>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
