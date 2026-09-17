"use client";

import {
  motion,
  useScroll,
} from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] h-px origin-left bg-gold"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}