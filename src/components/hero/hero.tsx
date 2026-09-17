"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BookingBar from "./booking-bar";
import HeroExperienceNav from "./hero-experience-nav";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#171512] text-white"
    >
      {/* ================================================================
          HERO IMAGE
      ================================================================= */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/goldstep-hero.png"
          alt="Goldstep Hotels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ================================================================
          CINEMATIC IMAGE TREATMENT
      ================================================================= */}

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30" />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,.5)]" />

      {/* ================================================================
          MAIN CONTENT
      ================================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-48 pt-32 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="goldstep-eyebrow text-[#d7b77a]"
          >
            Exceptional hospitality
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-4xl font-display text-[clamp(4.5rem,10vw,9.5rem)] font-light leading-[0.78] tracking-[-0.05em]"
          >
            Stay
            <br />

            <span className="ml-[7vw] italic text-[#d7b77a]">
              beautifully.
            </span>
          </motion.h1>

          {/* Supporting copy */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.85,
              duration: 0.75,
            }}
            className="mt-9 max-w-md text-sm leading-7 text-white/70 sm:text-base"
          >
            Thoughtfully designed spaces, genuine hospitality, and
            unforgettable moments — all waiting for you at Goldstep.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#booking"
              className="group inline-flex items-center gap-5 bg-[#d7b77a] px-7 py-4 text-[10px] font-semibold uppercase tracking-[2.5px] text-[#171512] transition duration-500 hover:bg-[#ead7ac]"
            >
              Reserve your stay

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#rooms"
              className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[2.5px] text-white/75 transition hover:text-white"
            >
              Explore rooms

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================================================================
          EXPERIENCE NAVIGATION
      ================================================================= */}

      <HeroExperienceNav />

      {/* ================================================================
          BOOKING BAR
      ================================================================= */}

      <BookingBar />

      {/* ================================================================
          SCROLL INDICATOR
      ================================================================= */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 right-7 z-20 hidden items-center gap-3 xl:flex"
      >
        <span className="text-[8px] uppercase tracking-[4px] text-white/40 [writing-mode:vertical-rl]">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg text-[#d7b77a]"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}