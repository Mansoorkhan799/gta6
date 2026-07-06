export const socialLinks = [
  {
    name: "X (Twitter)",
    label: "GTA 6 Info on X",
    href: "https://x.com/GTASixInfo",
    icon: "x",
  },
  {
    name: "Instagram",
    label: "Grand Theft Auto VI on Instagram",
    href: "https://www.instagram.com/grandtheftvi/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    label: "GTA 6 News Facebook Group",
    href: "https://www.facebook.com/groups/GTA6news/",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    label: "GTA 6 discussion on LinkedIn",
    href: "https://www.linkedin.com/posts/ashutosh-kumar-singh951_grand-theft-auto-vi-is-one-of-the-games-i-activity-7470631297946865664-ZQYU",
    icon: "linkedin",
  },
] as const;

export const siteConfig = {
  name: "GTA6 For PC",
  domain: "gta6forpc.org",
  url: "https://gta6forpc.org",
  tagline: "Grand Theft Auto VI — PC Release Guide",
  description:
    "Your ultimate guide to Grand Theft Auto VI on PC. Get the latest GTA 6 release date, system requirements, download info, trailers, and everything you need to play GTA VI on PC.",
  keywords: [
    "GTA6",
    "GTA 6",
    "GTA VI",
    "Grand Theft Auto 6",
    "Grand Theft Auto VI",
    "GTA6 download",
    "GTA 6 download",
    "GTA6 for PC",
    "GTA 6 PC",
    "GTA6 release date",
    "GTA 6 release date PC",
    "GTA6 system requirements",
    "GTA VI Vice City",
    "Rockstar Games GTA6",
    "download GTA6 PC",
    "GTA6 pre-order",
    "GTA 6 Leonida",
  ],
  releaseDate: "2026-11-19",
  releaseDateDisplay: "November 19, 2026",
  releaseDay: "Thursday",
  preOrderDate: "2026-06-25",
  preLoadDate: "2026-11-12",
  preLoadDateDisplay: "November 12, 2026",
  platforms: ["PlayStation 5", "Xbox Series X|S"],
  pcReleaseEstimate: "Late 2027 – Mid 2028 (estimated)",
  pricing: {
    standard: "$79.99",
    ultimate: "$99.99",
  },
  social: {
    twitter: "@GTASixInfo",
    x: "https://x.com/GTASixInfo",
    instagram: "https://www.instagram.com/grandtheftvi/",
    facebook: "https://www.facebook.com/groups/GTA6news/",
    linkedin:
      "https://www.linkedin.com/posts/ashutosh-kumar-singh951_grand-theft-auto-vi-is-one-of-the-games-i-activity-7470631297946865664-ZQYU",
  },
  author: "GTA6 For PC Team",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gta6-release-date", label: "Release Date" },
  { href: "/gta6-download", label: "Download" },
  { href: "/gta6-pre-order", label: "Pre-Order" },
  { href: "/system-requirements", label: "Specs" },
  { href: "/news", label: "News" },
  { href: "/faq", label: "FAQ" },
] as const;
