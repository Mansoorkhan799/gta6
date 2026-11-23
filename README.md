# GTA6 For PC — gta6forpc.org

Unofficial fan guide for **Grand Theft Auto VI on PC**. Built with Next.js 16, optimized for SEO, AEO, and performance.

## Features

- Pillar pages: release date, PC release, download, pre-order, file size, system requirements
- JSON-LD schema: VideoGame, SoftwareApplication, HowTo, FAQ, Product, Article
- Mobile & tablet responsive Rockstar-inspired UI
- Auto-generated sitemap and robots.txt

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node.js host. Point `gta6forpc.org` DNS to your deployment.

Before launch:
1. Add Google Search Console verification in `src/app/layout.tsx`
2. Submit sitemap: `https://gta6forpc.org/sitemap.xml`

## Disclaimer

This is not affiliated with Rockstar Games or Take-Two Interactive.
