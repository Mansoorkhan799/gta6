import { LocaleLink } from "@/components/LocaleLink";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedPageHeader } from "@/components/motion/AnimatedPageHeader";
import type { Dictionary } from "@/i18n/dictionaries/types";

const FEATURED_VIDEO_ID = "5oO5L3phQ5Y";

export function TrailerSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-padding" aria-labelledby="trailer-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="section-label text-accent-teal">{dict.trailer.eyebrow}</p>
          <h2 id="trailer-heading" className="display-heading mt-2 tracking-wider">
            {dict.trailer.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-8 max-w-4xl sm:mt-12">
          <article className="overflow-hidden rounded-lg border border-accent-pink/30 bg-surface-elevated shadow-[0_0_40px_rgba(255,110,180,0.12)]">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?rel=0`}
                title={dict.trailer.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-display text-lg tracking-wider sm:text-xl">{dict.trailer.videoTitle}</h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">{dict.trailer.videoCaption}</p>
            </div>
          </article>
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
              <LocaleLink href={item.href} className="truncate transition-colors hover:text-accent-teal">
                {item.label}
              </LocaleLink>
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
