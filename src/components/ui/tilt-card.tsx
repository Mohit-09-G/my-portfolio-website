"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const spring = { stiffness: 180, damping: 20, mass: 0.5 };

/** 3D tilt with a soft light glare that follows the mouse. */
export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const glareX = useSpring(50, spring);
  const glareY = useSpring(50, spring);
  const glare = useMotionTemplate`radial-gradient(600px circle at ${glareX}% ${glareY}%, var(--accent-soft), transparent 40%)`;

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set((0.5 - py) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full"
      >
        {children}
        <motion.div
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </motion.div>
    </div>
  );
}
