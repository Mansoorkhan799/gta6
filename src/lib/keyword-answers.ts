/**
 * Direct, AI Overview–friendly answers for high-volume keyword clusters.
 * Keep first sentences self-contained (40–60 words) so they can be cited.
 */

import { siteConfig } from "@/lib/site-config";

export const pcKeywordFaqs = [
  {
    question: "Will GTA 6 be on PC?",
    answer:
      "Yes — Rockstar is expected to bring Grand Theft Auto VI to PC eventually, but there is no official Windows release date yet. GTA 6 launched on PlayStation 5 and Xbox Series X|S on November 19, 2026. Until Rockstar announces PC, treat any “GTA 6 PC download” as unofficial.",
  },
  {
    question: "Is GTA 6 coming to PC?",
    answer:
      "Almost certainly, based on Rockstar’s history with GTA V and Red Dead Redemption 2, but it is not confirmed with a date. Console versions are out now. PC remains unannounced on Rockstar’s official platform list.",
  },
  {
    question: "When does GTA 6 come out on PC?",
    answer:
      "Rockstar has not published a PC launch date. An unconfirmed October 2026 industry report suggested Q1 2027. Historical console-to-PC gaps for Rockstar titles are roughly 12–18 months. Only Newswire / Take-Two filings count as official.",
  },
  {
    question: "Is GTA 6 on PC right now?",
    answer:
      "No. As of launch week, Grand Theft Auto VI is available on PS5 and Xbox Series X|S only. There is no legitimate Rockstar Games Launcher, Steam, or Epic SKU for Windows yet.",
  },
  {
    question: "Will GTA 6 be on Steam / Rockstar Launcher?",
    answer:
      "Not confirmed. When Rockstar ships PC versions of recent titles, the Rockstar Games Launcher is typically required, with Steam and often Epic also carrying the game. Wait for the official PC product page before buying keys.",
  },
] as const;

export const preOrderKeywordFaqs = [
  {
    question: "Can I still pre-order GTA 6?",
    answer: `GTA 6 is already out (November 19, 2026). You buy Standard (${siteConfig.pricing.standard}) or Ultimate (${siteConfig.pricing.ultimate}) from official stores now. The Vintage Vice City Pack applied to purchases before November 20, 2026.`,
  },
  {
    question: "How do I pre-order GTA VI?",
    answer:
      "Pre-orders opened June 25, 2026 on PlayStation Store, Xbox Store, Rockstar Games Store, and retailers. After launch, use the same official channels to purchase — there is no separate PC pre-order yet.",
  },
  {
    question: "What did GTA 6 pre-order include?",
    answer:
      "Standard and Ultimate editions of the full game, plus the Vintage Vice City Pack for qualifying early purchases, and one month of GTA+ for digital buyers. Ultimate added exclusive vehicles, weapons, outfits, and shops.",
  },
] as const;

export const ps5KeywordFaqs = [
  {
    question: "Is GTA 6 on PS5?",
    answer:
      "Yes. Grand Theft Auto VI launched on PlayStation 5 (including PS5 Pro Enhanced) on November 19, 2026. It is not available on PS4.",
  },
  {
    question: "Does GTA 6 support PS5 Pro?",
    answer:
      "Yes. PlayStation lists Grand Theft Auto VI as PS5 Pro Enhanced. Buy and download through the PlayStation Store; reserve up to about 212 GB of storage.",
  },
  {
    question: "How much does GTA 6 cost on PS5?",
    answer: `Standard Edition is ${siteConfig.pricing.standard}. Ultimate Edition is ${siteConfig.pricing.ultimate} (digital). Physical retail boxes contain a download code, not a playable disc.`,
  },
] as const;

export const leaksKeywordFaqs = [
  {
    question: "What were the GTA 6 leaks?",
    answer:
      "In September 2022, Rockstar confirmed a network intrusion stole early Grand Theft Auto development footage. Take-Two filed an 8-K stating work would continue as planned. Later marketing and the November 19, 2026 launch superseded leak-era speculation.",
  },
  {
    question: "Who was the GTA 6 hacker?",
    answer:
      "Coverage at the time linked the dump to an actor using names such as “teapotuberhacker.” Rockstar confirmed unauthorized access and theft of early footage. Do not download or redistribute stolen assets — that remains illegal.",
  },
  {
    question: "Are new GTA 6 leaks still important after launch?",
    answer:
      "For gameplay and story, play the released game and read official Newswire notes. Post-launch “leaks” about PC dates or Online features are often unverified — prefer Rockstar statements over anonymous dumps.",
  },
] as const;

export const newsKeywordFaqs = [
  {
    question: "Where can I find GTA 6 news?",
    answer:
      "Start with Rockstar Newswire for official updates. This site’s news hub tracks launch status, PC rumors, reviews, soundtrack releases, and safe-download warnings for PC players waiting on Windows.",
  },
] as const;
