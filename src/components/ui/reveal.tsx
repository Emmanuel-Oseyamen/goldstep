"use client";

import { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  distance = 32,
  once = true,
  amount = 0.2,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case "down":
        return { y: -distance };

      case "left":
        return { x: distance };

      case "right":
        return { x: -distance };

      default:
        return { y: distance };
    }
  };

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        ...getOffset(),
      };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}