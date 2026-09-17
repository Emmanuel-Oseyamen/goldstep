"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import {
  TestimonialCard,
  type Testimonial,
} from "./testimonial-card";

const testimonials: Testimonial[] = [
  {
    id: "guest-01",
    quote:
      "The kind of hotel where everything feels considered, but nothing feels forced. We genuinely did not want to leave.",
    name: "Amina O.",
    role: "Leisure guest",
    stay: "Weekend stay",
  },
  {
    id: "guest-02",
    quote:
      "From check-in to breakfast, the service was warm without ever becoming intrusive. That balance is rare.",
    name: "David K.",
    role: "Business traveller",
    stay: "Business stay",
  },
  {
    id: "guest-03",
    quote:
      "Beautiful rooms, excellent food and a team that actually pays attention. Goldstep has become our first choice.",
    name: "Chinonso E.",
    role: "Returning guest",
    stay: "Extended stay",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1
          ? 0
          : current + 1
      );
    }, 6500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-ivory-soft"
    >
      <div className="goldstep-container py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Intro */}
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="goldstep-eyebrow">
              Guestbook
            </span>

            <h2 className="goldstep-display mt-5 max-w-md text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              The best
              <span className="block italic text-gold">
                stories
              </span>
              come from our guests.
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <Quote
                size={18}
                strokeWidth={1.3}
                className="text-gold"
              />

              <p className="text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                What staying at Goldstep feels like
              </p>
            </div>
          </motion.div>

          {/* Testimonial */}
          <div>
            <div className="relative min-h-[360px]">
              {testimonials.map(
                (testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={false}
                    animate={{
                      opacity:
                        activeIndex === index ? 1 : 0,
                      y:
                        activeIndex === index
                          ? 0
                          : 12,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className={`${
                      activeIndex === index
                        ? "relative"
                        : "pointer-events-none absolute inset-0"
                    }`}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      index={0}
                      active={
                        activeIndex === index
                      }
                    />
                  </motion.div>
                )
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                {testimonials.map(
                  (testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() =>
                        setActiveIndex(index)
                      }
                      aria-label={`Show testimonial ${index + 1}`}
                      className={`h-px transition-all duration-300 ${
                        activeIndex === index
                          ? "w-10 bg-gold"
                          : "w-5 bg-border"
                      }`}
                    />
                  )
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  <ArrowLeft
                    size={15}
                    strokeWidth={1.3}
                  />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={1.3}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}