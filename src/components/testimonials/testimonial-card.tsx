"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  stay: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  active?: boolean;
}

export function TestimonialCard({
  testimonial,
  index,
  active = false,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className={`relative border-t pt-7 transition-colors duration-500 ${
        active
          ? "border-gold"
          : "border-border"
      }`}
    >
      <Quote
        size={21}
        strokeWidth={1.2}
        className="text-gold"
      />

      <blockquote className="mt-7 max-w-xl font-display text-2xl leading-[1.15] tracking-[-0.02em] text-foreground sm:text-3xl">
        “{testimonial.quote}”
      </blockquote>

      <div className="mt-8 flex items-end justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-foreground">
            {testimonial.name}
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {testimonial.role}
          </p>
        </div>

        <p className="text-right text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          {testimonial.stay}
        </p>
      </div>
    </motion.article>
  );
}