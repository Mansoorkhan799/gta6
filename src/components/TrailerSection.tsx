import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedPageHeader } from "@/components/motion/AnimatedPageHeader";

export function TrailerSection() {
  return (
    <section className="section-padding" aria-labelledby="trailer-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="section-label text-accent-teal">Watch Now</p>
          <h2 id="trailer-heading" className="display-heading mt-2 tracking-wider">
            OFFICIAL TRAILERS
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {[
            { title: "Grand Theft Auto VI — Trailer 1", id: "QdBZY2fkU-0" },
            { title: "Grand Theft Auto VI — Trailer 2", id: "VQRLujxTm3c" },
          ].map((trailer, index) => (
            <ScrollReveal key={trailer.id} delay={index * 0.1}>
              <article className="overflow-hidden rounded-lg border border-border bg-surface-elevated">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${trailer.id}?rel=0`}
                    title={trailer.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-display text-base tracking-wider sm:text-lg">{trailer.title}</h3>
                  <p className="mt-1 text-xs text-muted">Official Rockstar Games trailer</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-6 text-center text-xs text-muted sm:mt-8 sm:text-sm">
          <p>
            Trailers courtesy of{" "}
            <a
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-teal underline-offset-4 hover:underline"
            >
              Rockstar Games
            </a>
            . Visit the official site for the latest media.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted sm:text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex max-w-full items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="shrink-0">/</span>}
            {item.href ? (
              <Link href={item.href} className="truncate transition-colors hover:text-accent-teal">
                {item.label}
              </Link>
            ) : (
              <span className="truncate text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return <AnimatedPageHeader title={title} subtitle={subtitle} />;
}
