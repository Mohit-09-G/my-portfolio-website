"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "./use-media-query";

const INTERACTIVE = "a, button, input, select, textarea, summary, label, [role='button']";

/** Subtle follower ring for desktop mouse users. The native cursor stays visible. */
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine) and (hover: hover)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reduce;

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    function move(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest?.(INTERACTIVE)));
    }
    function leave() {
      setVisible(false);
    }
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
    >
      <motion.div
        animate={{ scale: hovering ? 1.8 : 1, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="-ml-4 -mt-4 size-8 rounded-full border border-white/70"
      />
    </motion.div>
  );
}
