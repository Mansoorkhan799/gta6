"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, fadeUp } from "@/lib/motion";

export function AnimatedPageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={fadeUp}
      transition={defaultTransition}
      className="mb-8 sm:mb-12"
    >
      <h1 className="font-display text-4xl tracking-wide sm:text-5xl sm:tracking-wider md:text-6xl lg:text-7xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
