"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { HEADER_OFFSET } from "@/lib/motion";
import { scrollToElement } from "@/lib/smooth-scroll";

export function SmoothScrollHandler() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      const element = document.getElementById(id);
      if (!element) return;

      event.preventDefault();
      scrollToElement(id, HEADER_OFFSET, reducedMotion ?? false);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reducedMotion]);

  return null;
}
