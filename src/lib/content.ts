import { castMembers } from "@/lib/game-data";
import { siteConfig } from "@/lib/site-config";

export const faqs = [
  {
    question: "Will GTA 6 be on PC?",
    answer:
      "Yes — a PC version is expected eventually, but Rockstar has not announced a Windows release date. GTA 6 launched on PS5 and Xbox Series X|S on November 19, 2026. Until an official PC store page exists, ignore “free GTA 6 PC download” sites.",
  },
  {
    question: "Is GTA 6 out now?",
    answer:
      "Yes. Grand Theft Auto VI launched on November 19, 2026 for PlayStation 5 and Xbox Series X|S. It is available worldwide through PlayStation Store, Xbox / Microsoft Store, Rockstar Games Store, and retailers (physical copies are download codes in a box).",
  },
  {
    question: "When does GTA 6 come out on PC?",
    answer:
      "No official date. An unconfirmed October 2026 report suggested Q1 2027. Historical Rockstar console-to-PC gaps are roughly 12–18 months. Only Rockstar Newswire counts as confirmation.",
  },
  {
    question: "Is GTA 6 on PS5?",
    answer:
      "Yes. GTA 6 is out on PlayStation 5 (PS5 Pro Enhanced). It is not available on PS4.",
  },
  {
    question: "Can I still pre-order GTA 6?",
    answer:
      "The game is already launched — buy Standard ($79.99) or Ultimate ($99.99) from official stores. Pre-order bonuses such as the Vintage Vice City Pack applied to purchases before November 20, 2026.",
  },
  {
    question: "What were the GTA 6 leaks?",
    answer:
      "In September 2022 Rockstar confirmed a hack stole early development footage. Take-Two said development continued as planned. After launch, prefer official news over anonymous leak dumps.",
  },
  {
    question: "Can I download GTA 6 on PC right now?",
    answer:
      "No. There is no official Windows version yet. Rockstar Games Launcher, Steam, and Epic will only carry GTA 6 after Rockstar announces PC. Fake PC installers, torrents, and “cracked” builds are malware vectors — skip them.",
  },
  {
    question: "What is the GTA 6 download size?",
    answer:
      "Rockstar lists up to 212 GB of available storage depending on device. Console pre-load packages are in that ballpark. PC install size is unannounced; plan for a large SSD footprint when the PC version arrives.",
  },
  {
    question: "What are the GTA 6 PC system requirements?",
    answer:
      "Official PC system requirements have not been released. Early technical analysis suggests heavy CPU simulation cost and strong GPU demand at higher resolutions. Our system requirements page tracks estimated minimums and recommended builds until Rockstar publishes official specs.",
  },
  {
    question: "Where does GTA 6 take place?",
    answer:
      "GTA 6 is set in the fictional state of Leonida, inspired by Florida. Official regions include Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga National Park.",
  },
  {
    question: "Who are the GTA 6 protagonists?",
    answer:
      "Lucia Caminos and Jason Duval — a dual-protagonist duo you can switch between. Lucia is the first female lead in a mainline GTA; Jason is her partner in crime across Leonida.",
  },
  {
    question: "How much does GTA 6 cost?",
    answer: `Standard Edition is ${siteConfig.pricing.standard}. Ultimate Edition is ${siteConfig.pricing.ultimate} (digital). Purchases before November 20, 2026 included the Vintage Vice City Pack; digital buys also included a free month of GTA+.`,
  },
  {
    question: "Will GTA 6 have GTA Online?",
    answer:
      "Rockstar has not published a full online roadmap for GTA 6. Launch marketing centered on single-player. Given GTA Online’s success, an online mode is widely expected later — wait for official Newswire details rather than third-party “Online early access” claims.",
  },
  {
    question: "Where should I buy GTA 6?",
    answer:
      "Official channels only: PlayStation Store, Xbox / Microsoft Store, Rockstar Games Store, and reputable retailers for code-in-box physical editions. See our where-to-buy guide for edition differences.",
  },
  {
    question: "How are GTA 6 reviews?",
    answer:
      "Critic reception is exceptional — Metacritic critic scores sit near all-time highs (around 99) with many perfect marks from major outlets. User scores can be volatile at launch; check live aggregates for the current picture.",
  },
  {
    question: "How to download GTA 6 safely?",
    answer:
      "On console: use PlayStation Store or Xbox Store after purchase. On PC: wait for the official Rockstar announcement, then use Rockstar Games Launcher / Steam / Epic only. Never use torrent sites, cracked versions, or unofficial “PC APK” pages.",
  },
] as const;

export { newsArticles } from "./news-articles";

export const characters = castMembers;

export const systemRequirements = {
  minimum: [
    { label: "OS", value: "Windows 10 64-bit (Windows 11 recommended)" },
    { label: "Processor", value: "Intel Core i5-9600K / AMD Ryzen 5 3600" },
    { label: "Memory", value: "16 GB RAM" },
    { label: "Graphics", value: "NVIDIA GeForce GTX 1660 Super 6GB / AMD Radeon RX 5600 XT" },
    { label: "DirectX", value: "Version 12" },
    { label: "Storage", value: "150 GB+ available space (SSD required) — official PC size TBD" },
    { label: "Network", value: "Broadband Internet connection" },
  ],
  recommended: [
    { label: "OS", value: "Windows 11 64-bit" },
    { label: "Processor", value: "Intel Core i7-12700K / AMD Ryzen 7 5800X (or newer X3D / Zen 5 class)" },
    { label: "Memory", value: "32 GB RAM" },
    { label: "Graphics", value: "NVIDIA GeForce RTX 4070 12GB / AMD Radeon RX 7800 XT or better" },
    { label: "DirectX", value: "Version 12" },
    { label: "Storage", value: "NVMe SSD with large free headroom for patches" },
    { label: "Network", value: "Broadband Internet connection" },
  ],
  note: "Estimated requirements only. Rockstar has not released official PC system requirements. Post-launch console analysis points to heavy CPU world simulation — budget CPU headroom as carefully as GPU.",
} as const;
