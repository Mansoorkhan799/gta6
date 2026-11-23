/**
 * Canonical post-launch facts for Grand Theft Auto VI.
 * Prefer this module for shared numbers, regions, editions, and scores
 * so pages stay consistent with official Rockstar / Take-Two statements.
 */

export const launchStatus = {
  consoleOutNow: true,
  consolePlatforms: ["PlayStation 5", "Xbox Series X|S"] as const,
  pcAnnounced: false,
  pcOfficialWindow: "Not officially announced",
  pcRumorWindow: "Q1 2027 (unconfirmed industry report)",
  pcHistoricalWindow: "Late 2027 – Mid 2028 (based on GTA V / RDR2 gaps)",
  officialUrl: "https://www.rockstargames.com/VI",
  outNowUrl: "https://www.rockstargames.com/VI/out-now",
} as const;

export const storageFacts = {
  rockstarMax: "Up to 212 GB",
  rockstarNote: "Rockstar lists up to 212 GB available storage depending on device.",
  ps5DownloadApprox: "~210 GB (PlayStation download; installs near 212 GB)",
  xboxPackageNote: "Xbox package size can differ slightly from the PS5 download figure.",
  pcEstimate: "Expect 150 GB+ when a PC version ships; official PC size is unannounced.",
} as const;

export const reviewScores = {
  metacriticCritics: 99,
  metacriticCriticReviews: "150+",
  metacriticUsers: "Mixed (review-bombing / early user score volatility is common at launch)",
  highlights: [
    { outlet: "IGN", score: "10/10" },
    { outlet: "GameSpot", score: "10/10" },
    { outlet: "Game Informer", score: "10/10" },
    { outlet: "Eurogamer", score: "5/5" },
    { outlet: "GamesRadar", score: "5/5" },
    { outlet: "The Guardian", score: "5/5" },
  ],
  consensus:
    "Critics praise Leonida’s living open world, Lucia and Jason’s partnership, and Rockstar’s density of systems and detail. User scores can swing hard in the first week — check Metacritic and OpenCritic for the latest snapshot.",
} as const;

export const mapRegions = [
  {
    name: "Vice City",
    slug: "vice-city",
    summary:
      "Leonida’s neon metropolis — beaches, nightlife, downtown towers, and the densest street-level activity on the map.",
  },
  {
    name: "Leonida Keys",
    slug: "leonida-keys",
    summary:
      "Island chain inspired by the Florida Keys. Early story territory for Jason, smuggling routes, and boatyard operations.",
  },
  {
    name: "Grassrivers",
    slug: "grassrivers",
    summary:
      "Wetlands and rural stretches between the Keys and the mainland — ideal for off-road escapes and quieter scores.",
  },
  {
    name: "Port Gellhorn",
    slug: "port-gellhorn",
    summary:
      "Industrial waterfront and working-class coastal town energy outside the Vice City skyline.",
  },
  {
    name: "Ambrosia",
    slug: "ambrosia",
    summary:
      "Smaller Leonida communities and countryside that expand the state beyond the tourist brochure version of Vice City.",
  },
  {
    name: "Mount Kalaga National Park",
    slug: "mount-kalaga",
    summary:
      "Leonida’s wilderness — forests, elevation, and the furthest contrast from Vice City’s neon nights.",
  },
] as const;

export const castMembers = [
  {
    name: "Lucia Caminos",
    role: "Protagonist",
    description:
      "The first playable female lead in a mainline Grand Theft Auto. Lucia fought for her family, served time in Leonida Penitentiary, and wants the better life her mother imagined since their Liberty City days. Partnering with Jason may be her way out — or deeper in.",
  },
  {
    name: "Jason Duval",
    role: "Protagonist",
    description:
      "Ex-Army, raised around grifters, now working collections in the Keys for local dealers. He lives rent-free through Brian Heder and considers Cal Hampton a friend. Meeting Lucia could be the best or worst thing that ever happened to him.",
  },
  {
    name: "Cal Hampton",
    role: "Supporting",
    description:
      "Jason’s Vice City–connected friend. Official Rockstar materials place Cal in the orbit of the city’s darker opportunities.",
  },
  {
    name: "Boobie Ike",
    role: "Supporting",
    description:
      "A Vice City power player whose empire is tied to the city’s nightlife and underworld economy.",
  },
  {
    name: "Dre'Quan Priest",
    role: "Supporting",
    description:
      "Part of Leonida’s music scene — chasing a rise that only Vice City’s spotlight (and its dangers) can offer.",
  },
  {
    name: "Real Dimez",
    role: "Supporting",
    description:
      "Official supporting cast member tied to Leonida’s street-level culture and criminal networks.",
  },
  {
    name: "Raul Bautista",
    role: "Supporting",
    description:
      "Featured in Rockstar’s cast materials; associated with high-stakes getaways and story set pieces.",
  },
  {
    name: "Brian Heder",
    role: "Supporting",
    description:
      "Keys boatyard operator who still moves product. Jason’s housing arrangement and local collections run through Heder’s world.",
  },
] as const;

export const editions = [
  {
    name: "Standard Edition",
    price: "$79.99",
    availability: "Digital + physical (download code in box)",
    includes: [
      "Full Grand Theft Auto VI single-player campaign",
      "Vintage Vice City Pack for purchases before November 20, 2026",
      "1 month of GTA+ for digital purchases (redeemable in GTA V / Rockstar classics)",
    ],
  },
  {
    name: "Ultimate Edition",
    price: "$99.99",
    availability: "Digital only (PlayStation Store / Xbox Store)",
    includes: [
      "Everything in Standard",
      "Exclusive vehicles (including ’95 Grotti Cheetah and more)",
      "Weapon variants, outfits, shops, and story-threaded bonuses",
      "Premium apparel, watercraft, mod shops, and compound extras",
    ],
  },
] as const;

export const buyChannels = [
  {
    name: "PlayStation Store",
    platforms: "PS5 / PS5 Pro Enhanced",
    href: "https://www.playstation.com/en-us/games/grand-theft-auto-vi/",
    note: "Digital Standard and Ultimate. PS5 Pro Enhanced.",
  },
  {
    name: "Microsoft / Xbox Store",
    platforms: "Xbox Series X|S",
    href: "https://www.xbox.com/",
    note: "Digital editions for Series X|S. Cloud Gaming streams on supported Xbox devices.",
  },
  {
    name: "Rockstar Games Store",
    platforms: "Console digital / physical code",
    href: "https://www.rockstargames.com/VI",
    note: "Official Rockstar storefront for console editions — not a Windows PC build.",
  },
  {
    name: "Retailers",
    platforms: "Physical code-in-box",
    href: "https://www.rockstargames.com/VI",
    note: "Amazon, Best Buy, Walmart and others sell physical boxes containing a download code (not a playable disc).",
  },
] as const;

export const gameplaySystems = [
  {
    title: "Dual protagonists",
    body: "Play as Jason and Lucia. Some missions lock you to one character, some auto-switch mid-set piece, and free-roam often lets you swap when the story allows. The partner you are not controlling keeps a routine — call or text them to regroup.",
  },
  {
    title: "Living Leonida",
    body: "Weather, denser traffic, longer day-night cycles, and NPCs that react to crime and climate. Rockstar’s marketing and reviews both emphasize a world that stays busy whether you follow the main path or wander.",
  },
  {
    title: "Wanted system (six stars)",
    body: "A six-star wanted ladder returns. Crimes escalate when witnesses or alarms report you. Early stars are easier to shake; higher heat demands smarter escapes — highways, off-road, ducking in vehicles, and partner coordination.",
  },
  {
    title: "Criminal Profile",
    body: "Your choices shape how Leonida perceives you. Style, reputation, and criminal habits feed into how the world responds — beyond a simple good/evil meter.",
  },
  {
    title: "Heists, boosting & banking",
    body: "Rob stores, compounds, and banks; fence boosted cars; use banking apps to move cash off your person. Story missions sometimes require you to raise funds first — greed vs. escape timing matters.",
  },
  {
    title: "Vehicles & phone apps",
    body: "Fuel and engine health matter. Scooter Bros can deliver your car (including impounds). Ryde Me, transit, and boats expand travel. Car theft is tiered — scanners, lock picks, and later tools change how you steal.",
  },
] as const;

export const beginnerTips = [
  {
    title: "Leave when the sirens start",
    body: "Finish the register and safe, then exit. Extra loot is worthless if you lose everything in a bust.",
  },
  {
    title: "Prioritize the big take",
    body: "Cashiers and safes beat shaking down random civilians for pocket change.",
  },
  {
    title: "Stock zombix",
    body: "Keep healing items on hand. Grocery stores and hideouts are reliable restocks.",
  },
  {
    title: "Use focus outside combat",
    body: "Focus can highlight nearby loot during exploration without draining the same way combat focus does.",
  },
  {
    title: "Escape smart",
    body: "Create distance on highways, then cut off-road. Duck in cars under fire. Use handbrake U-turns to break line of sight.",
  },
  {
    title: "Recover impounded rides",
    body: "Scooter Bros can return an impounded vehicle (and often trunk stash) for a fee — faster than a solo lot raid.",
  },
  {
    title: "Don’t carry all your cash",
    body: "Bank money when you can. Getting busted with a fat wallet hurts more than a light pocket.",
  },
  {
    title: "Invest in the relationship",
    body: "Lucia and Jason’s bond affects optional scenes and tone. You can neglect or repair it — story crime partnership continues either way.",
  },
] as const;

export const trailers = [
  {
    title: "Launch Trailer",
    date: "October 15, 2026",
    duration: "1:29",
    youtubeId: "",
    note: "Launch marketing push ahead of November 19 unlock.",
  },
  {
    title: "An Extended Look",
    date: "August 27, 2026",
    duration: "26:48",
    youtubeId: "",
    note: "Long-form gameplay and world showcase from Rockstar.",
  },
  {
    title: "Trailer 2",
    date: "May 6, 2025",
    duration: "2:47",
    youtubeId: "VQRLujxTm3c",
    note: "Second official trailer — deepened Lucia & Jason story framing.",
  },
  {
    title: "Trailer 1",
    date: "December 4, 2023",
    duration: "1:31",
    youtubeId: "QdBZY2fkU-0",
    note: "Reveal trailer that set the modern Vice City / Leonida tone.",
  },
] as const;

export const soundtrackFacts = {
  albumTitle: "Grand Theft Auto VI: The Album",
  albumTracks: 34,
  albumRelease: "November 20, 2026",
  albumArtistsNote:
    "Features new music spanning pop, hip-hop, electronic, Latin, R&B, and rock — including artists such as Lana Del Rey, Dua Lipa, Playboi Carti, JENNIE, and Zara Larsson (per launch coverage).",
  scoreArtist: "Justice",
  scoreTracks: 30,
  scoreRelease: "December 11, 2026",
  radioNote:
    "In-game radio is separate from The Album, with high-profile hosts and a wide station mix inside Leonida.",
} as const;

export const onlineStatus = {
  headline: "GTA Online for GTA 6 is not fully detailed yet",
  summary:
    "Rockstar’s launch marketing focused on the single-player story. Multiplayer-related package hints and history with GTA Online strongly suggest an online future, but Rockstar has not published a full feature list, name confirmation, or launch date for a GTA 6 online mode.",
  whatWeKnow: [
    "GTA V’s GTA Online remains active and commercially central for Rockstar.",
    "Pre-load metadata observers noted multiplayer-related activity hooks — not the same as a day-one online launch announcement.",
    "Expect Rockstar to communicate online plans on Newswire when ready — do not trust third-party “Online APK” or PC multiplayer cracks.",
  ],
} as const;
