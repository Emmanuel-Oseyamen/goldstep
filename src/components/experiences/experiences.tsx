"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import {
  ExperienceCard,
  type Experience,
} from "./experience-card";

const experiences: Experience[] = [
  {
    id: "slow-morning",
    number: "01",
    title: "The Slow Morning",
    category: "Wellness",
    description:
      "Begin without rushing. Breakfast, quiet spaces and time to yourself before the day asks anything of you.",
    image: "/experiences/slow-morning.png",
    location: "Goldstep",
    duration: "Half day",
    featured: true,
  },
  {
    id: "city-discovery",
    number: "02",
    title: "City Discovery",
    category: "Explore",
    description:
      "Step beyond the hotel and discover the culture, food and character of the city around you.",
    image: "/experiences/city-discovery.png",
    location: "Beyond Goldstep",
    duration: "Flexible",
  },
  {
    id: "evening-ritual",
    number: "03",
    title: "Evening Ritual",
    category: "Dining",
    description:
      "Dinner, conversation and beautifully unhurried evenings designed to become part of the memory.",
    image: "/experiences/evening-ritual.png",
    location: "The Reserve",
    duration: "Evening",
  },
];

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  return (
    <>
      <section
        id="experiences"
        className="relative overflow-hidden bg-charcoal text-white"
      >
        {/* Background atmosphere */}
        <div className="absolute inset-0">
          <Image
            src="/experiences/experiences-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-charcoal/90" />
        </div>

        <div className="goldstep-container relative py-24 sm:py-32 lg:py-40">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="goldstep-eyebrow text-white/60">
                <span className="mr-3 inline-block h-px w-8 bg-gold" />
                Experience Goldstep
              </span>

              <h2 className="goldstep-display mt-5 max-w-4xl text-5xl leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                Stay for the room.
                <span className="block italic text-gold">
                  Remember the feeling.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="max-w-lg text-base leading-7 text-white/50 sm:text-lg">
                The best hotel stays are made of more than beautiful rooms.
                They are made of mornings without alarms, conversations that
                run late and places you discover along the way.
              </p>

              <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold">
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.3}
                />
                Discover your Goldstep moment
              </div>
            </motion.div>
          </div>

          {/* Experiences */}
          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-7">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                onSelect={setSelectedExperience}
              />
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-24 max-w-4xl text-center sm:mt-32"
          >
            <span className="font-display text-5xl leading-none text-gold/50">
              “
            </span>

            <p className="mt-1 font-display text-3xl leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
              Luxury is not having more.
              <span className="block italic text-white/60">
                It is needing less.
              </span>
            </p>

            <div className="mx-auto mt-7 h-px w-10 bg-gold" />
          </motion.div>
        </div>
      </section>

      {/* Experience modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedExperience(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 35,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-3xl overflow-hidden bg-background text-foreground"
            >
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close experience"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md"
              >
                <X size={17} strokeWidth={1.4} />
              </button>

              <div className="relative aspect-[16/8]">
                <Image
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                    {selectedExperience.category}
                  </p>

                  <h3 className="mt-2 font-display text-4xl text-white sm:text-5xl">
                    {selectedExperience.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  {selectedExperience.description}
                </p>

                <div className="mt-7 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Experience
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedExperience.duration}
                    </p>
                  </div>

                  <a
                    href="#booking"
                    onClick={() => setSelectedExperience(null)}
                    className="group inline-flex items-center justify-center gap-3 bg-charcoal px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold"
                  >
                    Plan your stay

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}