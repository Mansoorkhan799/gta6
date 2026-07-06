import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { siteAssets } from "./site-assets";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

type HowToStep = {
  name: string;
  text: string;
  url?: string;
};

const rockstarOrg = {
  "@type": "Organization" as const,
  name: "Rockstar Games",
  url: "https://www.rockstargames.com",
};

const publisherOrg = {
  "@type": "Organization" as const,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject" as const,
    url: `${siteConfig.url}${siteAssets.logo}`,
  },
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = siteAssets.ogImage,
  noIndex = false,
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: siteConfig.social.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: publisherOrg,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteAssets.logo}`,
    description: siteConfig.description,
    sameAs: [],
  };
}

/** VideoGame + SoftwareApplication — use site-wide and on product/download pages */
export function gta6SoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["VideoGame", "SoftwareApplication"],
    "@id": `${siteConfig.url}/#gta6-software`,
    name: "Grand Theft Auto VI",
    alternateName: ["GTA6", "GTA 6", "GTA VI", "Grand Theft Auto 6"],
    description:
      "Grand Theft Auto VI returns to Vice City in the state of Leonida. Follow Lucia and Jason in a story-driven open-world action-adventure.",
    url: "https://www.rockstargames.com/VI",
    image: `${siteConfig.url}${siteAssets.ogImage}`,
    applicationCategory: "GameApplication",
    applicationSubCategory: "Action-Adventure",
    operatingSystem: [
      "PlayStation 5",
      "Xbox Series X|S",
      "Windows 10",
      "Windows 11",
    ],
    gamePlatform: [...siteConfig.platforms, "PC"],
    genre: ["Action", "Adventure", "Open World"],
    playMode: "SinglePlayer, CoOp, MultiPlayer",
    datePublished: siteConfig.releaseDate,
    softwareVersion: "1.0",
    fileSize: "150GB",
    storageRequirements: "150 GB available space (SSD strongly recommended)",
    memoryRequirements: "16 GB RAM minimum; 32 GB RAM recommended for PC",
    processorRequirements: "Intel Core i5-9600K / AMD Ryzen 5 3600 or equivalent (estimated PC minimum)",
    downloadUrl: [
      "https://www.rockstargames.com/VI",
      "https://www.rockstargames.com/launcher",
      "https://store.steampowered.com",
      "https://store.epicgames.com",
    ],
    author: rockstarOrg,
    publisher: rockstarOrg,
    creator: rockstarOrg,
    offers: [
      {
        "@type": "Offer",
        name: "Grand Theft Auto VI — Standard Edition",
        price: "79.99",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://www.rockstargames.com/VI",
        validFrom: siteConfig.preOrderDate,
        priceValidUntil: siteConfig.releaseDate,
        seller: rockstarOrg,
      },
      {
        "@type": "Offer",
        name: "Grand Theft Auto VI — Ultimate Edition",
        price: "99.99",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://www.rockstargames.com/VI",
        validFrom: siteConfig.preOrderDate,
        seller: rockstarOrg,
      },
    ],
  };
}

/** @deprecated Use gta6SoftwareApplicationJsonLd */
export function videoGameJsonLd() {
  return gta6SoftwareApplicationJsonLd();
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  mainEntityId,
}: {
  path: string;
  name: string;
  description: string;
  mainEntityId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${path}#webpage`,
    url: `${siteConfig.url}${path}`,
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#gta6-software` },
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/news/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: publisherOrg,
    publisher: publisherOrg,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/news/${article.slug}`,
    },
  };
}

function buildHowToSchema({
  id,
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  tools,
}: {
  id: string;
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: { value: string; currency?: string };
  tools?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": id,
    name,
    description,
    image: `${siteConfig.url}${siteAssets.ogImage}`,
    ...(totalTime ? { totalTime } : {}),
    ...(estimatedCost
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: estimatedCost.currency ?? "USD",
            value: estimatedCost.value,
          },
        }
      : {}),
    ...(tools?.length
      ? {
          tool: tools.map((tool) => ({
            "@type": "HowToTool",
            name: tool,
          })),
        }
      : {}),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };
}

/** How to download GTA 6 on PC — for /gta6-download and homepage */
export function howToDownloadPCJsonLd() {
  return buildHowToSchema({
    id: `${siteConfig.url}/gta6-download#howto-pc-download`,
    name: "How to Download GTA 6 on PC",
    description:
      "Official step-by-step guide to downloading and installing Grand Theft Auto VI on PC via Rockstar Games Launcher, Steam, or Epic Games Store.",
    totalTime: "PT45M",
    estimatedCost: { value: "79.99", currency: "USD" },
    tools: [
      "Rockstar Games Launcher",
      "Steam Client",
      "Epic Games Store",
      "Windows 10 or Windows 11 PC",
      "SSD with 150 GB free space",
    ],
    steps: [
      {
        name: "Wait for the official PC release",
        text: `GTA 6 launches on console ${siteConfig.releaseDateDisplay}. The PC version is expected ${siteConfig.pcReleaseEstimate}. Only download once Rockstar announces the official PC release.`,
        url: `${siteConfig.url}/gta6-pc-release-date`,
      },
      {
        name: "Install Rockstar Games Launcher",
        text: "Download and install the Rockstar Games Launcher from rockstargames.com. Create a Rockstar Social Club account if you do not have one.",
        url: "https://www.rockstargames.com/launcher",
      },
      {
        name: "Choose an official PC store",
        text: "Purchase GTA 6 only from official platforms: Rockstar Games Launcher, Steam, or Epic Games Store. Never use torrent sites or unofficial download pages.",
        url: `${siteConfig.url}/gta6-download`,
      },
      {
        name: "Verify PC system requirements",
        text: "Confirm your PC meets minimum specs: Windows 10/11 64-bit, 16 GB RAM, GTX 1660 Super or RX 5600 XT, and 150 GB SSD storage.",
        url: `${siteConfig.url}/system-requirements`,
      },
      {
        name: "Purchase the game",
        text: `Buy the Standard Edition (${siteConfig.pricing.standard}) or Ultimate Edition (${siteConfig.pricing.ultimate}) through your chosen official store.`,
        url: "https://www.rockstargames.com/VI",
      },
      {
        name: "Download and install",
        text: "Click Install in your launcher. Download size is estimated at 100–150 GB. Use an SSD for optimal loading and texture streaming performance.",
        url: `${siteConfig.url}/gta6-file-size`,
      },
    ],
  });
}

/** How to pre-order GTA 6 on console */
export function howToPreOrderJsonLd() {
  return buildHowToSchema({
    id: `${siteConfig.url}/gta6-pre-order#howto-preorder`,
    name: "How to Pre-Order GTA 6",
    description:
      "Step-by-step guide to pre-ordering Grand Theft Auto VI on PlayStation 5 and Xbox Series X|S, including editions, bonuses, and pre-loading.",
    totalTime: "PT10M",
    estimatedCost: { value: "79.99", currency: "USD" },
    tools: ["PlayStation Store account", "Xbox Store account", "Rockstar Games account"],
    steps: [
      {
        name: "Choose your edition",
        text: `Select Standard Edition (${siteConfig.pricing.standard}) or Ultimate Edition (${siteConfig.pricing.ultimate}). Pre-order before November 20, 2026 to receive the Vintage Vice City Pack.`,
        url: `${siteConfig.url}/gta6-pre-order`,
      },
      {
        name: "Open your platform store",
        text: "Visit the Rockstar Games Store, PlayStation Store, or Xbox Store. Physical retailers like Amazon and Best Buy also accept pre-orders.",
        url: "https://www.rockstargames.com/VI",
      },
      {
        name: "Complete your pre-order",
        text: "Add GTA 6 to cart, select your platform (PS5 or Xbox Series X|S), and complete payment. Digital orders qualify for pre-loading.",
      },
      {
        name: "Pre-load starting November 12, 2026",
        text: "Digital purchasers can download game files from November 12, 2026 — one week before the November 19 launch. Play instantly at midnight on release day.",
        url: `${siteConfig.url}/gta6-release-date`,
      },
    ],
  });
}

/** How to download GTA 6 on PlayStation 5 */
export function howToDownloadPS5JsonLd() {
  return buildHowToSchema({
    id: `${siteConfig.url}/gta6-download#howto-ps5-download`,
    name: "How to Download GTA 6 on PlayStation 5",
    description: "Official steps to purchase, download, and install Grand Theft Auto VI on PS5.",
    totalTime: "PT30M",
    tools: ["PlayStation 5 console", "PlayStation Network account", "150 GB free storage"],
    steps: [
      { name: "Open PlayStation Store", text: "From your PS5 home screen, navigate to the PlayStation Store.", url: "https://store.playstation.com" },
      { name: "Search for GTA VI", text: "Search 'Grand Theft Auto VI' or 'GTA 6' in the store search bar." },
      { name: "Select your edition", text: `Choose Standard Edition (${siteConfig.pricing.standard}) or Ultimate Edition (${siteConfig.pricing.ultimate}).` },
      { name: "Purchase or pre-order", text: "Complete the purchase. Pre-orders allow pre-loading from November 12, 2026." },
      { name: "Download and install", text: "Select Download. Installation requires significant storage — SSD recommended." },
      { name: "Launch on release day", text: `Game unlocks ${siteConfig.releaseDateDisplay}. Launch from your game library at midnight local time.` },
    ],
  });
}

/** How to download GTA 6 on Xbox Series X|S */
export function howToDownloadXboxJsonLd() {
  return buildHowToSchema({
    id: `${siteConfig.url}/gta6-download#howto-xbox-download`,
    name: "How to Download GTA 6 on Xbox Series X|S",
    description: "Official steps to purchase, download, and install Grand Theft Auto VI on Xbox.",
    totalTime: "PT30M",
    tools: ["Xbox Series X or Series S console", "Microsoft account", "150 GB free storage"],
    steps: [
      { name: "Open Xbox Store", text: "Navigate to the Microsoft Store on your Xbox Series X|S console.", url: "https://www.xbox.com" },
      { name: "Search for GTA VI", text: "Search 'Grand Theft Auto VI' in the store." },
      { name: "Select your edition", text: `Choose Standard Edition (${siteConfig.pricing.standard}) or Ultimate Edition (${siteConfig.pricing.ultimate}).` },
      { name: "Purchase or pre-order", text: "Complete checkout. Digital pre-orders support pre-loading from November 12, 2026." },
      { name: "Install the game", text: "Select Install and wait for the download to complete." },
      { name: "Launch on release day", text: `Game goes live ${siteConfig.releaseDateDisplay} at midnight local time.` },
    ],
  });
}

/** Product schema for pre-order page */
export function gta6ProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/gta6-pre-order#product`,
    name: "Grand Theft Auto VI",
    description: "Grand Theft Auto VI for PlayStation 5 and Xbox Series X|S. Set in Vice City, Leonida.",
    image: `${siteConfig.url}${siteAssets.ogImage}`,
    brand: rockstarOrg,
    category: "Video Games",
    offers: [
      {
        "@type": "Offer",
        name: "Standard Edition",
        price: "79.99",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://www.rockstargames.com/VI",
        seller: rockstarOrg,
      },
      {
        "@type": "Offer",
        name: "Ultimate Edition",
        price: "99.99",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://www.rockstargames.com/VI",
        seller: rockstarOrg,
      },
    ],
  };
}

/** @deprecated Use howToDownloadPCJsonLd */
export function howToJsonLd() {
  return howToDownloadPCJsonLd();
}
