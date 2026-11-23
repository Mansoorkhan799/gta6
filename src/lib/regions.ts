import { siteConfig } from "@/lib/site-config";

export type RegionConfig = {
  slug: string;
  code: string;
  name: string;
  demonym: string;
  /** BCP 47 language for content wrapper (e.g. id, pt-BR, de) */
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  currencyNote: string;
  flagLabel: string;
  primaryIntent: string;
  title: string;
  description: string;
  keywords: string[];
  quickQuestion: string;
  quickAnswer: string;
  intro: string[];
  localNotes: { title: string; body: string }[];
  focusLinks: { href: string; label: string; why: string }[];
  faqs: { question: string; answer: string }[];
};

export const regions: RegionConfig[] = [
  {
    slug: "sg",
    code: "SG",
    name: "Singapore",
    demonym: "Singapore",
    htmlLang: "en-SG",
    hreflang: "en-SG",
    ogLocale: "en_SG",
    currencyNote: "PS Store / Xbox prices show in SGD for Singapore accounts",
    flagLabel: "Singapore",
    primaryIntent: "GTA 6 PC status + console buy path",
    title: "GTA 6 PC Singapore — Will GTA 6 Be on PC? (SG Guide)",
    description:
      "GTA 6 for Singapore players: will GTA 6 be on PC, PS5/Xbox buy options in SGD, file size, and safe download rules for SG gamers.",
    keywords: [
      "gta 6 pc",
      "gta 6 singapore",
      "gta 6 pc singapore",
      "will gta 6 be on pc singapore",
      "gta 6 ps5 singapore",
      "gta6 for pc",
    ],
    quickQuestion: "Is GTA 6 on PC in Singapore?",
    quickAnswer:
      "Not yet. GTA 6 is out on PS5 and Xbox Series X|S worldwide (including Singapore). There is no official PC / Steam / Rockstar Launcher version. Singapore players should buy console editions now or wait for Rockstar’s PC announcement.",
    intro: [
      "Singapore search traffic for “gta 6 pc” is huge — this hub answers that intent in clear English for SG players without fake Windows downloads.",
      "Console editions are live. PC remains unannounced. Use official PlayStation Store, Xbox Store, or Rockstar storefronts tied to your Singapore account.",
    ],
    localNotes: [
      {
        title: "Stores & currency",
        body: "Digital purchases on a Singapore PSN or Microsoft account typically settle in SGD. Physical code-in-box editions from regional retailers still need a PS5 or Xbox Series X|S to redeem.",
      },
      {
        title: "Storage & internet",
        body: `Plan for up to ${siteConfig.fileSizeDisplay} of free SSD space. Fibre makes the console download practical; still leave headroom for day-one patches.`,
      },
      {
        title: "PC waiting list",
        body: "“gta 6 pc” does not mean a local Steam unlock exists. Bookmark our PC tracker and ignore cracked “SG exclusive” installers.",
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Will GTA 6 be on PC?", why: "Primary SG keyword intent" },
      { href: "/gta6-download", label: "Safe download guide", why: "Scam protection for PC searchers" },
      { href: "/gta6-ps5", label: "GTA 6 on PS5", why: "Playable option today" },
      { href: "/where-to-buy", label: "Where to buy", why: "Official storefronts" },
    ],
    faqs: [
      {
        question: "Can I play GTA 6 on PC in Singapore?",
        answer:
          "No official PC version is available yet. Singapore players can play on PS5 or Xbox Series X|S now and wait for Rockstar’s Windows release.",
      },
      {
        question: "Where should Singapore players buy GTA 6?",
        answer:
          "PlayStation Store, Xbox / Microsoft Store, Rockstar Games Store, or trusted retailers. Avoid unofficial PC key sites claiming day-one Windows access.",
      },
    ],
  },
  {
    slug: "irl",
    code: "IE",
    name: "Ireland",
    demonym: "Irish",
    htmlLang: "en-IE",
    hreflang: "en-IE",
    ogLocale: "en_IE",
    currencyNote: "Digital storefronts for Ireland typically show EUR pricing",
    flagLabel: "Ireland",
    primaryIntent: "GTA 6 leaks + PC / buy guidance",
    title: "GTA 6 Ireland — Leaks, PC Status & Where to Buy (IRL)",
    description:
      "GTA 6 guide for Ireland: leaks explained, will GTA 6 be on PC, PS5/Xbox buy options in EUR, and verified news for Irish players.",
    keywords: [
      "gta 6 leak",
      "gta 6 leaks ireland",
      "gta 6 ireland",
      "gta 6 pc ireland",
      "pre order gta 6 ireland",
      "gta 6 ps5 ireland",
    ],
    quickQuestion: "What’s the GTA 6 situation for Ireland?",
    quickAnswer:
      "GTA 6 is out now on PS5 and Xbox Series X|S for Irish players. The famous 2022 leaks are historical — the game has shipped. PC is still unannounced. Buy from official EU/IE storefronts and treat new “leak” PC builds as scams.",
    intro: [
      "Ireland shows strong interest in “gta 6 leak” queries. This IRL hub separates the confirmed 2022 Rockstar hack from post-launch rumor noise — in English, as used for gaming search in Ireland.",
      "If you are ready to play, console is live. If you are waiting for PC, use the official status tracker rather than anonymous dumps.",
    ],
    localNotes: [
      {
        title: "EUR pricing",
        body: "Irish PlayStation and Xbox accounts usually display euro pricing for Standard and Ultimate editions. Retail code-in-box copies are still digital downloads underneath.",
      },
      {
        title: "Leaks vs launch",
        body: "The September 2022 intrusion stole early footage; Rockstar confirmed it. After the November 19, 2026 launch, gameplay answers come from the shipped game — not old alpha clips.",
      },
      {
        title: "Language note",
        body: "This page is written in English (en-IE). Irish-language (Gaeilge) search volume for GTA 6 is minimal; we localise for the Ireland market rather than a full Gaeilge translation.",
      },
    ],
    focusLinks: [
      { href: "/gta6-leaks", label: "GTA 6 leaks explained", why: "Matches IE leak intent" },
      { href: "/gta6-pc-release-date", label: "Will GTA 6 be on PC?", why: "PC waiters in Ireland" },
      { href: "/news", label: "GTA 6 news", why: "Verified updates" },
      { href: "/gta6-pre-order", label: "Pre order / buy guide", why: "Pricing & editions" },
    ],
    faqs: [
      {
        question: "Are GTA 6 leaks still relevant in Ireland?",
        answer:
          "The 2022 Rockstar hack is a confirmed historical event. For current play, use the released PS5/Xbox game and official Newswire. New anonymous PC “leaks” are usually unverified.",
      },
      {
        question: "Can I buy GTA 6 in Ireland?",
        answer:
          "Yes — PlayStation Store, Xbox Store, Rockstar, and EU retailers. PC purchase is not available until Rockstar announces Windows.",
      },
    ],
  },
  {
    slug: "au",
    code: "AU",
    name: "Australia",
    demonym: "Australian",
    htmlLang: "en-AU",
    hreflang: "en-AU",
    ogLocale: "en_AU",
    currencyNote: "Australian accounts typically show AUD pricing on PlayStation / Xbox stores",
    flagLabel: "Australia",
    primaryIntent: "GTA 6 leaks + news + PC",
    title: "GTA 6 Australia — Leaks, News & PC Guide (AU)",
    description:
      "GTA 6 for Australia: leaks context, latest news, will GTA 6 be on PC, and where Aussie players can buy on PS5/Xbox.",
    keywords: [
      "gta 6 leaks",
      "gta 6 news",
      "gta 6 australia",
      "gta 6 pc australia",
      "gta 6 ps5 australia",
    ],
    quickQuestion: "What’s the GTA 6 status for Australia?",
    quickAnswer:
      "GTA 6 launched worldwide on PS5 and Xbox Series X|S on November 19, 2026 — including Australia. PC is unannounced. Use official AU storefronts; read leaks as history, news as ongoing coverage.",
    intro: [
      "Australian searches for “gta 6 leaks” and “gta 6 news” stay active around launch. This AU hub points you to verified facts, not recycled rumor threads.",
      "Same global release applies — buy console now, track PC separately, and treat unofficial Windows builds as malware risks.",
    ],
    localNotes: [
      {
        title: "AUD storefronts",
        body: "PSN and Xbox accounts set to Australia generally bill in AUD. Check local classification and store listing before purchase.",
      },
      {
        title: "News cadence",
        body: "Follow Rockstar Newswire for official patches and Online plans. Our news hub summarises launch, PC rumors, and soundtrack updates for AU readers.",
      },
    ],
    focusLinks: [
      { href: "/gta6-leaks", label: "Leaks explained", why: "Top AU keyword theme" },
      { href: "/news", label: "GTA 6 news", why: "Ongoing updates" },
      { href: "/gta6-pc-release-date", label: "PC release status", why: "PC gaming audience" },
      { href: "/where-to-buy", label: "Where to buy", why: "Official purchase path" },
    ],
    faqs: [
      {
        question: "Is GTA 6 out in Australia?",
        answer:
          "Yes. Grand Theft Auto VI released globally on November 19, 2026 for PS5 and Xbox Series X|S, including Australia.",
      },
      {
        question: "Is there a GTA 6 PC release date for Australia?",
        answer:
          "No country-specific PC date. Rockstar has not announced Windows anywhere. Australians should watch the same official channels as other regions.",
      },
    ],
  },
  {
    slug: "id",
    code: "ID",
    name: "Indonesia",
    demonym: "Indonesia",
    htmlLang: "id",
    hreflang: "id-ID",
    ogLocale: "id_ID",
    currencyNote: "Harga digital PlayStation / Xbox biasanya dalam IDR untuk akun Indonesia",
    flagLabel: "Indonesia",
    primaryIntent: "Kapan GTA 6 rilis di PC",
    title: "Kapan GTA 6 Rilis di PC? Panduan Indonesia",
    description:
      "Kapan GTA 6 rilis di PC? Belum ada tanggal resmi. Status console out now, tip beli aman di Indonesia, dan cara menghindari unduhan PC palsu.",
    keywords: [
      "kapan gta 6 rilis di pc",
      "gta 6 pc indonesia",
      "gta 6 rilis pc",
      "kapan gta 6 keluar di pc",
      "gta 6 steam indonesia",
    ],
    quickQuestion: "Kapan GTA 6 rilis di PC?",
    quickAnswer:
      "Belum ada tanggal resmi dari Rockstar. GTA 6 sudah rilis di PS5 dan Xbox Series X|S sejak 19 November 2026. Versi PC belum diumumkan — abaikan situs yang menawarkan unduhan Windows gratis hari ini.",
    intro: [
      "Pencarian “kapan gta 6 rilis di pc” sangat umum di Indonesia. Halaman ini menjawab langsung dalam Bahasa Indonesia dengan fakta resmi, bukan rumor unduhan ilegal.",
      "Konsol sudah bisa dimainkan sekarang. Untuk PC, tunggu pengumuman Rockstar Newswire, lalu beli hanya lewat Rockstar Launcher / Steam / Epic.",
    ],
    localNotes: [
      {
        title: "Akun & harga",
        body: "Gunakan PlayStation Store atau Microsoft Store dengan region Indonesia bila memungkinkan. Waspadai penjual key murah yang mengklaim “PC day one”.",
      },
      {
        title: "Penyimpanan",
        body: `Siapkan ruang SSD hingga sekitar ${siteConfig.fileSizeDisplay}. Unduhan besar lebih nyaman di koneksi rumah yang stabil.`,
      },
      {
        title: "Bahasa",
        body: "Konten hub ini dalam Bahasa Indonesia (id-ID). Panduan teknis global tetap tersedia dalam bahasa Inggris di halaman pilar.",
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Status PC (EN)", why: "Tracker tanggal PC" },
      { href: "/gta6-download", label: "Panduan unduhan aman", why: "Hindari malware" },
      { href: "/gta6-ps5", label: "GTA 6 di PS5", why: "Opsi main sekarang" },
      { href: "/where-to-buy", label: "Tempat beli resmi", why: "Store resmi" },
    ],
    faqs: [
      {
        question: "Kapan GTA 6 rilis di PC?",
        answer:
          "Rockstar belum mengumumkan tanggal PC. Ada rumor Q1 2027 yang belum dikonfirmasi. Historisnya port PC Rockstar sering 12–18 bulan setelah konsol.",
      },
      {
        question: "Apakah GTA 6 sudah bisa dimainkan di Indonesia?",
        answer:
          "Ya, di PS5 dan Xbox Series X|S. Belum ada versi Windows resmi untuk dibeli di Steam atau launcher lain.",
      },
    ],
  },
  {
    slug: "br",
    code: "BR",
    name: "Brasil",
    demonym: "brasileiro",
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    ogLocale: "pt_BR",
    currencyNote: "Contas brasileiras na PlayStation / Xbox geralmente exibem preços em BRL",
    flagLabel: "Brasil",
    primaryIntent: "Vai ter GTA 6 para PC?",
    title: "Vai Ter GTA 6 para PC? Guia Brasil",
    description:
      "Vai ter GTA 6 para PC? Sim, é esperado — mas ainda sem data oficial. Status no Brasil, PS5/Xbox e como evitar download falso.",
    keywords: [
      "vai ter gta 6 para pc",
      "gta 6 pc brasil",
      "gta 6 para pc",
      "quando gta 6 pc",
      "gta vi pc brasil",
    ],
    quickQuestion: "Vai ter GTA 6 para PC?",
    quickAnswer:
      "Sim, uma versão para PC é esperada — mas Rockstar ainda não anunciou data. GTA 6 já está disponível no PS5 e Xbox Series X|S desde 19 de novembro de 2026. Não existe download oficial no Steam/Launcher agora.",
    intro: [
      "A busca “vai ter gta 6 para pc” é forte no Brasil. Esta página responde em português (pt-BR) com o status real pós-lançamento de console.",
      "Quem quiser jogar agora deve comprar nas lojas oficiais de console. Quem espera PC deve acompanhar o anúncio da Rockstar — nunca instaladores “crackeados”.",
    ],
    localNotes: [
      {
        title: "Lojas e BRL",
        body: "PlayStation Store e Microsoft Store com conta Brasil costumam mostrar preços em reais. Edições físicas com código ainda exigem download grande.",
      },
      {
        title: "Armazenamento",
        body: `Reserve até cerca de ${siteConfig.fileSizeDisplay} de SSD. Patches do dia um também ocupam espaço.`,
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Status PC (EN)", why: "Datas e rumores" },
      { href: "/gta6-download", label: "Download seguro", why: "Evitar malware" },
      { href: "/gta6-editions", label: "Edições e preço", why: "Standard vs Ultimate" },
      { href: "/where-to-buy", label: "Onde comprar", why: "Lojas oficiais" },
    ],
    faqs: [
      {
        question: "Vai ter GTA 6 para PC?",
        answer:
          "É esperado que sim, pelo histórico da Rockstar, mas não há data oficial. Consoles já lançaram; Windows ainda não.",
      },
      {
        question: "Quando sai GTA 6 no PC?",
        answer:
          "Sem data confirmada. Um rumor de Q1 2027 não foi confirmado pela Rockstar. Espere o Newswire oficial.",
      },
    ],
  },
  {
    slug: "de",
    code: "DE",
    name: "Deutschland",
    demonym: "deutsch",
    htmlLang: "de",
    hreflang: "de-DE",
    ogLocale: "de_DE",
    currencyNote: "PlayStation- / Xbox-Konten in Deutschland zeigen Preise meist in EUR",
    flagLabel: "Deutschland",
    primaryIntent: "GTA 6 PC Release",
    title: "GTA 6 PC Release — Wann kommt GTA 6 auf PC? (DE)",
    description:
      "GTA 6 PC Release: Noch kein offizielles Datum. Konsolen sind live, PC unangekündigt — sichere Infos für Spieler in Deutschland.",
    keywords: [
      "gta 6 pc release",
      "gta 6 pc release date",
      "wann kommt gta 6 auf pc",
      "gta 6 pc deutschland",
      "gta 6 steam",
    ],
    quickQuestion: "Wann kommt GTA 6 auf PC?",
    quickAnswer:
      "Es gibt noch kein offizielles PC-Release-Datum. GTA 6 ist seit dem 19. November 2026 auf PS5 und Xbox Series X|S erhältlich. Eine Windows-Version wurde von Rockstar noch nicht angekündigt.",
    intro: [
      "Für „gta 6 pc release“ kommt starker Traffic aus Deutschland. Dieser Hub beantwortet die Frage auf Deutsch — klar für AI Overviews und Spieler.",
      "Konsolenversion jetzt kaufen oder auf die offizielle PC-Ankündigung warten. Keine „PC Cracks“ oder Fake-Keys.",
    ],
    localNotes: [
      {
        title: "Stores & EUR",
        body: "Offizielle Käufe über PlayStation Store, Xbox Store oder Rockstar. Physische Boxen enthalten Download-Codes.",
      },
      {
        title: "Speicherplatz",
        body: `Plane bis zu etwa ${siteConfig.fileSizeDisplay} freien SSD-Speicher ein.`,
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "PC-Status (EN)", why: "Release-Tracker" },
      { href: "/gta6-download", label: "Download-Sicherheit", why: "Malware vermeiden" },
      { href: "/system-requirements", label: "Systemanforderungen", why: "PC-Hardware schätzen" },
      { href: "/where-to-buy", label: "Kauf-Guide", why: "Offizielle Shops" },
    ],
    faqs: [
      {
        question: "Wann ist der GTA 6 PC Release?",
        answer:
          "Offiziell unangekündigt. Ein unbestätigter Bericht nannte Q1 2027. Historisch folgen Rockstar-PC-Ports oft 12–18 Monate nach der Konsole.",
      },
      {
        question: "Ist GTA 6 schon auf PC spielbar?",
        answer:
          "Nein. Nur PS5 und Xbox Series X|S. Steam / Rockstar Launcher führen noch keine GTA-VI-PC-SKU.",
      },
    ],
  },
  {
    slug: "ar",
    code: "AR",
    name: "Argentina",
    demonym: "argentino",
    htmlLang: "es-AR",
    hreflang: "es-AR",
    ogLocale: "es_AR",
    currencyNote: "Las cuentas de Argentina en PlayStation / Xbox suelen mostrar precios regionales",
    flagLabel: "Argentina",
    primaryIntent: "GTA VI PC",
    title: "GTA VI PC — ¿Va a salir en PC? Guía Argentina",
    description:
      "GTA VI PC en Argentina: todavía sin fecha oficial. Consolas ya disponibles, rumores de PC y cómo comprar sin caer en descargas falsas.",
    keywords: [
      "gta vi pc",
      "gta 6 pc argentina",
      "gta 6 para pc",
      "cuando sale gta 6 pc",
      "gta vi pc fecha",
    ],
    quickQuestion: "¿Va a haber GTA VI en PC?",
    quickAnswer:
      "Se espera que sí, pero Rockstar no publicó fecha. GTA 6 ya salió en PS5 y Xbox Series X|S el 19 de noviembre de 2026. No hay versión Windows oficial en Steam ni Rockstar Launcher todavía.",
    intro: [
      "La consulta “gta vi pc” tiene fuerte interés en Argentina. Este hub responde en español (es-AR) con el estado real después del lanzamiento en consolas.",
      "Jugá en consola ahora o esperá el anuncio oficial de PC. Evitá instaladores pirata que circulan con ese keyword.",
    ],
    localNotes: [
      {
        title: "Tiendas regionales",
        body: "Usá PlayStation Store, Xbox Store o Rockstar con tu cuenta de Argentina. Revisá precio y región antes de comprar keys de terceros.",
      },
      {
        title: "Almacenamiento",
        body: `Reservá hasta cerca de ${siteConfig.fileSizeDisplay} en SSD para la instalación de consola.`,
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Estado PC (EN)", why: "Fecha y rumores" },
      { href: "/gta6-download", label: "Descarga segura", why: "Evitar malware" },
      { href: "/gta6-editions", label: "Ediciones", why: "Standard vs Ultimate" },
      { href: "/where-to-buy", label: "Dónde comprar", why: "Tiendas oficiales" },
    ],
    faqs: [
      {
        question: "¿GTA VI PC ya está disponible?",
        answer:
          "No. Solo consolas PS5 y Xbox Series X|S. La versión PC sigue sin anunciarse.",
      },
      {
        question: "¿Cuándo sale GTA 6 en PC?",
        answer:
          "Sin fecha oficial. Un rumor de Q1 2027 no fue confirmado por Rockstar.",
      },
    ],
  },
  {
    slug: "uk",
    code: "UK",
    name: "United Kingdom",
    demonym: "UK",
    htmlLang: "en-GB",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    currencyNote: "UK PlayStation / Xbox accounts typically show GBP pricing",
    flagLabel: "United Kingdom",
    primaryIntent: "GTA 6 PC release date",
    title: "GTA 6 PC Release Date UK — When Is It Coming?",
    description:
      "GTA 6 PC release date for the UK: still unannounced. Consoles out now, GBP store notes, and safe waiting tips for British PC players.",
    keywords: [
      "gta 6 pc release date",
      "gta 6 pc uk",
      "when is gta 6 coming to pc uk",
      "gta 6 steam uk",
    ],
    quickQuestion: "When is the GTA 6 PC release date in the UK?",
    quickAnswer:
      "Rockstar has not announced a PC release date for the UK or anywhere else. GTA 6 is out now on PS5 and Xbox Series X|S (19 November 2026). Wait for an official Windows store page before buying PC keys.",
    intro: [
      "“gta 6 pc release date” skews heavily to the UK in global keyword tools. This en-GB hub answers that intent without fake Steam listings.",
      "Buy console editions today in GBP storefronts, or track the PC announcement and ignore cracked “UK exclusive” downloads.",
    ],
    localNotes: [
      {
        title: "GBP stores",
        body: "PlayStation Store and Xbox Store on UK accounts usually bill in pounds. Physical editions are still download codes in a box.",
      },
      {
        title: "PEGI / age rating",
        body: "Check the store age rating on your account region before purchase — GTA titles are mature-rated.",
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Full PC tracker", why: "Dates & rumours" },
      { href: "/gta6-download", label: "Safe download guide", why: "Avoid malware" },
      { href: "/gta6-pre-order", label: "Editions / buy history", why: "Pricing context" },
      { href: "/where-to-buy", label: "Where to buy", why: "Official shops" },
    ],
    faqs: [
      {
        question: "Has GTA 6 got a PC release date in the UK?",
        answer:
          "No. There is no UK-specific or global official PC date yet. Console versions launched worldwide on 19 November 2026.",
      },
      {
        question: "Can UK players download GTA 6 on Steam now?",
        answer:
          "No legitimate Steam SKU exists until Rockstar announces PC. Any current “Steam GTA 6” page claiming Windows play is not the real product.",
      },
    ],
  },
  {
    slug: "ca",
    code: "CA",
    name: "Canada",
    demonym: "Canadian",
    htmlLang: "en-CA",
    hreflang: "en-CA",
    ogLocale: "en_CA",
    currencyNote: "Canadian PSN / Xbox accounts typically show CAD pricing",
    flagLabel: "Canada",
    primaryIntent: "gta6 pc status",
    title: "GTA6 PC Canada — Is GTA 6 Coming to PC?",
    description:
      "GTA6 PC for Canada: still unannounced. Console launch status, CAD buying notes, and safe answers for “is gta 6 coming to pc”.",
    keywords: [
      "gta6 pc",
      "gta 6 pc canada",
      "is gta 6 coming to pc",
      "gta6 pc release date",
      "gta 6 on pc canada",
    ],
    quickQuestion: "Is GTA 6 coming to PC in Canada?",
    quickAnswer:
      "A PC version is expected eventually, but Rockstar has not announced it. Canadians can play on PS5 and Xbox Series X|S now (launched November 19, 2026). There is no official gta6 pc download yet.",
    intro: [
      "Keyword tools show “gta6 pc” interest concentrating in Canada among other markets. This en-CA page matches that query with a direct status answer.",
      "Use official console stores in CAD, and treat “free PC build” sites as malware risks.",
    ],
    localNotes: [
      {
        title: "CAD storefronts",
        body: "PlayStation Store and Xbox Store on Canadian accounts usually price in CAD. Confirm edition (Standard vs Ultimate) before checkout.",
      },
      {
        title: "ESRB rating",
        body: "GTA VI is Mature-rated — check the store listing on your account.",
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "Will GTA 6 be on PC?", why: "Primary PC FAQ" },
      { href: "/gta6-download", label: "Download safety", why: "Scam protection" },
      { href: "/system-requirements", label: "PC specs estimates", why: "Hardware planning" },
      { href: "/where-to-buy", label: "Where to buy", why: "Official channels" },
    ],
    faqs: [
      {
        question: "Is gta6 pc available in Canada?",
        answer:
          "No official Windows release yet. Console versions are available now for Canadian PS5 and Xbox players.",
      },
      {
        question: "When will GTA 6 be on PC?",
        answer:
          "Unannounced. An unverified Q1 2027 report exists; only Rockstar Newswire confirms dates.",
      },
    ],
  },
  {
    slug: "tw",
    code: "TW",
    name: "台灣",
    demonym: "台灣",
    htmlLang: "zh-Hant-TW",
    hreflang: "zh-Hant-TW",
    ogLocale: "zh_TW",
    currencyNote: "台灣 PlayStation / Xbox 帳號通常以 TWD 計價",
    flagLabel: "Taiwan",
    primaryIntent: "GTA 6 PC / 發售日",
    title: "GTA 6 PC 發售日？台灣玩家指南",
    description:
      "GTA 6 PC 什麼時候出？官方尚未公布。主機版已上市，台灣玩家購買建議與避免假 PC 下載的說明。",
    keywords: [
      "gta 6 release date",
      "gta 6 pc 發售",
      "gta 6 pc 什麼時候出",
      "gta 6 台灣",
      "gta vi pc",
    ],
    quickQuestion: "GTA 6 PC 什麼時候出？",
    quickAnswer:
      "Rockstar 尚未公布 PC 發售日。GTA 6 已於 2026 年 11 月 19 日在 PS5 與 Xbox Series X|S 全球上市（含台灣）。目前沒有官方 Steam / Rockstar Launcher Windows 版本。",
    intro: [
      "台灣地區常搜尋 GTA 6 發售相關字詞。本頁以繁體中文說明主機已上市、PC 仍未官宣的現況，並連到英文深度頁。",
      "想現在玩請走官方主機商店；等 PC 請盯 Rockstar 公告，不要下載來路不明的安裝包。",
    ],
    localNotes: [
      {
        title: "商店與幣別",
        body: "請透過台灣／適當地區帳號的 PlayStation Store 或 Xbox Store 購買。實體盒裝多半是下載序號，仍需足夠 SSD 空間。",
      },
      {
        title: "容量",
        body: `請預留約 ${siteConfig.fileSizeDisplay} 的可用空間，並預留更新檔空間。`,
      },
    ],
    focusLinks: [
      { href: "/gta6-pc-release-date", label: "PC 狀態（英文）", why: "發售追蹤" },
      { href: "/gta6-release-date", label: "主機發售資訊", why: "已上市時程" },
      { href: "/gta6-download", label: "安全下載指南", why: "防詐騙" },
      { href: "/where-to-buy", label: "購買通路", why: "官方商店" },
    ],
    faqs: [
      {
        question: "GTA 6 在台灣可以玩嗎？",
        answer:
          "可以，在 PS5 與 Xbox Series X|S 上遊玩。PC 官方版本仍未上市。",
      },
      {
        question: "GTA 6 PC 發售日公布了嗎？",
        answer:
          "尚未公布。網路上的 Q1 2027 說法未經 Rockstar 證實。",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

export function regionLanguageAlternates() {
  const languages: Record<string, string> = {
    "x-default": siteConfig.url,
    en: siteConfig.url,
  };
  for (const region of regions) {
    languages[region.hreflang] = `${siteConfig.url}/${region.slug}`;
  }
  return languages;
}
