import { LocaleLink } from "@/components/LocaleLink";
import { faqs } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type FaqItem = { question: string; answer: string };

export function FAQSection({
  limit,
  items,
  eyebrow = "Got Questions?",
  title = "GTA 6 FAQ",
  subtitle = "Direct answers about GTA 6 release date, download, PC requirements, and more.",
  viewAllLabel = "View All FAQs",
}: {
  limit?: number;
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  viewAllLabel?: string;
}) {
  const source = items ?? faqs.map((f) => ({ question: f.question, answer: f.answer }));
  const list = limit ? source.slice(0, limit) : source;

  return (
    <section className="section-padding" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="section-label text-accent-teal">{eyebrow}</p>
          <h2 id="faq-heading" className="display-heading mt-2 tracking-wider">
            {title}
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base">{subtitle}</p>
        </ScrollReveal>

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {list.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.06}>
              <details className="group rounded-lg border border-border bg-surface-elevated transition-colors open:border-accent-pink/30">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-3 p-4 font-medium text-foreground marker:content-none sm:p-5">
                  <span className="text-left text-sm sm:text-base">{faq.question}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-border px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5">
                  {faq.answer}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>

        {limit && (
          <ScrollReveal className="mt-6 text-center sm:mt-8">
            <LocaleLink
              href="/faq"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent-pink transition-colors hover:text-accent-teal"
            >
              {viewAllLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LocaleLink>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
