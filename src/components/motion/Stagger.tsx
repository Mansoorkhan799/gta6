"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerContainer({ children, className }: StaggerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      variants={fadeUp}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
