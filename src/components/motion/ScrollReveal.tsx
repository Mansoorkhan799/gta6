"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, fadeUp, viewportOnce } from "@/lib/motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
