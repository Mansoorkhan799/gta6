import Link from "next/link";
import { faqs } from "@/lib/content";

export function FAQSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section-padding" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-label text-accent-teal">Got Questions?</p>
          <h2 id="faq-heading" className="display-heading mt-2 tracking-wider">
            GTA 6 FAQ
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base">
            Direct answers about GTA 6 release date, download, PC requirements, and more.
          </p>
        </div>

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {items.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-border bg-surface-elevated transition-colors open:border-accent-pink/30"
            >
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
          ))}
        </div>

        {limit && (
          <div className="mt-6 text-center sm:mt-8">
            <Link
              href="/faq"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent-pink transition-colors hover:text-accent-teal"
            >
              View All FAQs
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
