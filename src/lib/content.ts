export const faqs = [
  {
    question: "When is GTA 6 releasing?",
    answer:
      "Grand Theft Auto VI is scheduled to release on November 19, 2026, for PlayStation 5 and Xbox Series X|S. Rockstar Games confirmed this date in their official Newswire announcement. The PC version release date has not been officially announced yet, but based on previous GTA titles, a PC release typically follows 12–18 months after console launch.",
  },
  {
    question: "Can I download GTA 6 on PC?",
    answer:
      "GTA 6 is not yet available for PC download. The game launches first on PS5 and Xbox Series X|S on November 19, 2026. When the PC version releases, you will be able to download it officially through the Rockstar Games Launcher, Steam, and Epic Games Store. Always use official platforms — never download from unofficial or pirated sources.",
  },
  {
    question: "What is the GTA 6 download size?",
    answer:
      "Rockstar has not confirmed the exact download size for GTA 6 on PC. Based on GTA V's 72GB base install (over 100GB with updates) and the expanded Leonida open world, expect GTA 6 to require 100–150GB or more of storage space. An SSD is strongly recommended.",
  },
  {
    question: "What are the GTA 6 PC system requirements?",
    answer:
      "Official PC system requirements have not been released yet. Based on the game's scope and next-gen console specs, estimated minimum requirements include: Windows 10/11 64-bit, Intel Core i5-9600K or AMD Ryzen 5 3600, 16GB RAM, NVIDIA GTX 1660 Super or AMD RX 5600 XT, and 100GB SSD storage. Recommended specs will likely require RTX 3070 or better and 32GB RAM.",
  },
  {
    question: "Where does GTA 6 take place?",
    answer:
      "GTA 6 is set in the fictional state of Leonida, inspired by Florida, with Vice City as the main city. The open world includes urban areas, beaches, swamps, and the Keys-inspired islands. The story follows Lucia and Jason, a criminal duo navigating modern-day Vice City.",
  },
  {
    question: "Who are the GTA 6 protagonists?",
    answer:
      "GTA 6 features two protagonists: Lucia (a female character, the first female lead in a mainline GTA game) and Jason. Their story is inspired by Bonnie and Clyde-style criminal partnership set in the modern Vice City underworld.",
  },
  {
    question: "How much will GTA 6 cost on PC?",
    answer:
      "Rockstar has not announced PC pricing yet. Console Standard Edition is $79.99 USD and Ultimate Edition is $99.99 USD. PC pricing typically matches console pricing when the PC version launches.",
  },
  {
    question: "Will GTA 6 have GTA Online?",
    answer:
      "While Rockstar has not confirmed details, GTA Online was a massive success with GTA V and is expected to return in some form with GTA 6. Rockstar typically launches the single-player campaign first, with online features following shortly after.",
  },
  {
    question: "Is GTA 6 available for pre-order on PC?",
    answer:
      "Pre-orders for GTA 6 are currently available for PS5 and Xbox Series X|S through Rockstar Games and major retailers. PC pre-orders have not opened yet. Sign up for notifications on Rockstar's official website to be alerted when PC pre-orders become available.",
  },
  {
    question: "How to download GTA 6 safely?",
    answer:
      "Only download GTA 6 from official sources: Rockstar Games Launcher (rockstargames.com), Steam (store.steampowered.com), or Epic Games Store. Never use torrent sites, cracked versions, or unofficial download pages — they contain malware, violate copyright law, and won't receive updates or online access.",
  },
] as const;

export { newsArticles } from "./news-articles";

export const characters = [
  {
    name: "Lucia",
    role: "Protagonist",
    description:
      "Lucia is one of two main protagonists in GTA 6 — the first female lead in a mainline Grand Theft Auto game. She's a fierce, complex character navigating the criminal world of Vice City alongside Jason.",
  },
  {
    name: "Jason",
    role: "Protagonist",
    description:
      "Jason is Lucia's partner in crime and the second playable protagonist. Together they form a Bonnie and Clyde-inspired duo pulling heists and surviving the Leonida underworld.",
  },
] as const;

export const systemRequirements = {
  minimum: [
    { label: "OS", value: "Windows 10 64-bit (Windows 11 recommended)" },
    { label: "Processor", value: "Intel Core i5-9600K / AMD Ryzen 5 3600" },
    { label: "Memory", value: "16 GB RAM" },
    { label: "Graphics", value: "NVIDIA GeForce GTX 1660 Super 6GB / AMD Radeon RX 5600 XT" },
    { label: "DirectX", value: "Version 12" },
    { label: "Storage", value: "100 GB available space (SSD required)" },
    { label: "Network", value: "Broadband Internet connection" },
  ],
  recommended: [
    { label: "OS", value: "Windows 11 64-bit" },
    { label: "Processor", value: "Intel Core i7-12700K / AMD Ryzen 7 5800X" },
    { label: "Memory", value: "32 GB RAM" },
    { label: "Graphics", value: "NVIDIA GeForce RTX 4070 12GB / AMD Radeon RX 7800 XT" },
    { label: "DirectX", value: "Version 12" },
    { label: "Storage", value: "150 GB NVMe SSD" },
    { label: "Network", value: "Broadband Internet connection" },
  ],
  note: "These are estimated requirements based on game scope and industry standards. Rockstar Games has not released official PC system requirements yet.",
} as const;
