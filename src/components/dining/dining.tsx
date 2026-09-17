"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChefHat,
  Wine,
} from "lucide-react";

import {
  RestaurantCard,
  type Restaurant,
} from "./restaurant-card";

const restaurants: Restaurant[] = [
  {
    id: "the-goldstep-table",
    number: "01",
    name: "The Goldstep Table",
    type: "All-day dining",
    description:
      "A relaxed dining room where familiar flavours meet thoughtful presentation, from slow mornings to long evening conversations.",
    image: "/dining/goldstep-table.png",
    hours: "7:00 AM — 11:00 PM",
    cuisine: "Contemporary",
    featured: true,
  },
  {
    id: "the-reserve",
    number: "02",
    name: "The Reserve",
    type: "Bar & lounge",
    description:
      "An intimate evening destination for beautifully made cocktails, fine drinks and unhurried conversation.",
    image: "/dining/reserve.png",
    hours: "4:00 PM — 1:00 AM",
    cuisine: "Cocktails & small plates",
    featured: false,
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="overflow-hidden bg-background"
    >
      <div className="goldstep-container py-24 sm:py-32 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="goldstep-eyebrow">
              <span className="mr-3 inline-block h-px w-8 bg-gold" />
              Food & drink
            </span>

            <h2 className="goldstep-display mt-5 max-w-3xl text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Come hungry.
              <span className="block italic text-gold">
                Leave inspired.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
              <ChefHat
                size={19}
                strokeWidth={1.3}
                className="text-gold"
              />
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
              <Wine
                size={19}
                strokeWidth={1.3}
                className="text-gold"
              />
            </div>
          </motion.div>
        </div>

        {/* Restaurant collection */}
        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              index={index}
            />
          ))}
        </div>

        {/* Dining philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="mt-20 border-y border-border py-10 sm:mt-28 sm:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <span className="goldstep-eyebrow">
              Our approach
            </span>

            <p className="max-w-4xl font-display text-3xl leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
              Good food should feel{" "}
              <span className="italic text-gold">
                effortless.
              </span>{" "}
              Great food should give you something to remember.
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Whether it is breakfast before a meeting, dinner with someone
            special or a late drink after a long day, there is always a table
            waiting.
          </p>

          <a
            href="#booking"
            className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground"
          >
            Reserve a table
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Full-width atmospheric image */}
      <div className="relative h-[45vh] min-h-[360px] overflow-hidden sm:h-[55vh]">
        <Image
          src="/dining/dining-atmosphere.png"
          alt="Goldstep dining atmosphere"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
              Gather. Taste. Stay awhile.
            </p>

            <h3 className="mt-4 font-display text-5xl tracking-[-0.035em] text-white sm:text-7xl lg:text-8xl">
              The table is yours.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}