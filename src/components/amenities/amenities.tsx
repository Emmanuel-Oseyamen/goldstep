"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  AmenityCard,
  type Amenity,
} from "./amenity-card";

const amenities: Amenity[] = [
  {
    id: "wellness",
    number: "01",
    name: "Wellness & Spa",
    description:
      "A private space to slow down, reset and give yourself room to breathe.",
    icon: "spa",
  },
  {
    id: "pool",
    number: "02",
    name: "Pool & Leisure",
    description:
      "Unhurried afternoons, cool water and a quieter way to spend the day.",
    icon: "pool",
  },
  {
    id: "dining",
    number: "03",
    name: "Dining",
    description:
      "Thoughtful food and memorable drinks, served throughout the day.",
    icon: "dining",
  },
  {
    id: "fitness",
    number: "04",
    name: "Fitness",
    description:
      "A modern fitness space for keeping your routine wherever you are.",
    icon: "fitness",
  },
  {
    id: "connectivity",
    number: "05",
    name: "Always Connected",
    description:
      "Reliable high-speed Wi-Fi and spaces designed for productive moments.",
    icon: "wifi",
  },
  {
    id: "security",
    number: "06",
    name: "Security",
    description:
      "Thoughtful security and attentive service, giving you peace of mind.",
    icon: "security",
  },
  {
    id: "service",
    number: "07",
    name: "Personal Service",
    description:
      "Warm, attentive hospitality without unnecessary formality.",
    icon: "service",
  },
];

export default function Amenities() {
  const [selectedAmenity, setSelectedAmenity] =
    useState<Amenity | null>(null);

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-charcoal text-white"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <Image
          src="/amenities/amenities-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      </div>

      <div className="goldstep-container relative py-24 sm:py-32 lg:py-40">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="goldstep-eyebrow text-white/60">
              <span className="mr-3 inline-block h-px w-8 bg-gold" />
              At Goldstep
            </span>

            <h2 className="goldstep-display mt-5 max-w-2xl text-5xl leading-[0.92] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              More than a room.
              <span className="block italic text-gold">
                An entire experience.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-base leading-7 text-white/55 sm:text-lg">
              From the moment you arrive until the moment you leave, every
              part of your stay has been considered. Discover spaces,
              services and small details designed to make life feel easier.
            </p>
          </motion.div>
        </div>

        {/* Featured experience */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden sm:mt-20 lg:mt-24"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/8]">
            <Image
              src="/amenities/wellness.png"
              alt="Goldstep wellness experience"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1600ms] hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
              <div className="max-w-lg">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                  The Goldstep ritual
                </p>

                <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                  Make time
                  <span className="block italic text-gold">
                    for yourself.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                  Wellness, leisure and quiet moments are part of the stay —
                  not something you have to leave the hotel to find.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Amenities grid */}
        <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={amenity.id}
              amenity={amenity}
              index={index}
              onSelect={setSelectedAmenity}
            />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-sm leading-6 text-white/40">
            Some experiences are planned. Others happen naturally. Goldstep
            leaves room for both.
          </p>

          <a
            href="#booking"
            className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white"
          >
            Plan your stay
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Lightweight detail panel */}
      {selectedAmenity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 sm:p-6"
        >
          <div className="pointer-events-auto mx-auto flex max-w-2xl items-center justify-between gap-6 border border-white/10 bg-charcoal/95 p-5 shadow-2xl backdrop-blur-xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                {selectedAmenity.number}
              </p>
              <p className="mt-1 font-display text-xl text-white">
                {selectedAmenity.name}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedAmenity(null)}
              className="text-[10px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}