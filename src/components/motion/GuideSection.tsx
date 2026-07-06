"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function GuideSection({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className}>
      <ScrollReveal>{children}</ScrollReveal>
    </section>
  );
}
