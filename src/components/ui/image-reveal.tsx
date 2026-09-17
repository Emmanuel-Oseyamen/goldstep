"use client";

import Image, {
  ImageProps,
} from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

interface ImageRevealProps
  extends Omit<ImageProps, "alt"> {
  alt: string;
  className?: string;
  wrapperClassName?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  overlay?: boolean;
}

export function ImageReveal({
  alt,
  className = "",
  wrapperClassName = "",
  delay = 0,
  duration = 1.1,
  scale = 1.08,
  overlay = false,
  ...imageProps
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${wrapperClassName}`}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="absolute inset-0 z-10 origin-center"
        initial={{
          scale: shouldReduceMotion ? 1 : scale,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: shouldReduceMotion
            ? 0.2
            : duration + 0.15,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          {...imageProps}
          alt={alt}
          className={`h-full w-full object-cover ${className}`}
        />
      </motion.div>

      {overlay && (
        <div className="pointer-events-none absolute inset-0 z-20 bg-charcoal/10" />
      )}
    </motion.div>
  );
}