"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      // Lenis already applies the html scroll-padding-top, so no extra offset here.
      anchors: true,
    });

    // A direct visit to /#section may have scrolled before the navbar was measured; realign once it is.
    const { hash } = window.location;
    const frame = hash ? requestAnimationFrame(() => lenis.scrollTo(hash, { immediate: true })) : 0;

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
