import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-60px 0px -60px 0px",
} as const;

export const HEADER_OFFSET = 72;
