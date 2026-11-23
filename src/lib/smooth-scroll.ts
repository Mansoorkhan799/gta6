import { animate } from "framer-motion";

export function smoothScrollTo(targetY: number, reducedMotion = false) {
  const y = Math.max(0, targetY);

  if (reducedMotion) {
    window.scrollTo({ top: y, behavior: "auto" });
    return;
  }

  animate(window.scrollY, y, {
    duration: 0.75,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

export function scrollToElement(id: string, offset = 0, reducedMotion = false) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(y, reducedMotion);
}
