"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Maximize2,
} from "lucide-react";

export interface EventVenue {
  id: string;
  number: string;
  name: string;
  type: string;
  description: string;
  image: string;
  capacity: string;
  size: string;
  features: string[];
  featured?: boolean;
}

interface EventCardProps {
  venue: EventVenue;
  index: number;
  onEnquire: (venue: EventVenue) => void;
}

export function EventCard({
  venue,
  index,
  onEnquire,
}: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className={`group border-t border-border pt-6 ${
        venue.featured
          ? "lg:col-span-7"
          : "lg:col-span-5"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div
          className={`relative ${
            venue.featured
              ? "aspect-[16/10]"
              : "aspect-[5/4]"
          }`}
        >
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            sizes={
              venue.featured
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 100vw, 42vw"
            }
            className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-black/10" />

          <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 font-mono text-[9px] text-white backdrop-blur-md">
            {venue.number}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="pt-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              {venue.type}
            </p>

            <h3 className="mt-2 font-display text-4xl tracking-[-0.025em] text-foreground sm:text-5xl">
              {venue.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onEnquire(venue)}
            aria-label={`Enquire about ${venue.name}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.4}
            />
          </button>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
          {venue.description}
        </p>

        {/* Specs */}
        <div className="mt-6 grid grid-cols-2 border-y border-border">
          <div className="flex items-center gap-3 py-4">
            <Users
              size={16}
              strokeWidth={1.3}
              className="text-gold"
            />

            <div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                Capacity
              </p>

              <p className="mt-1 text-sm">
                {venue.capacity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-border py-4 pl-5">
            <Maximize2
              size={16}
              strokeWidth={1.3}
              className="text-gold"
            />

            <div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                Venue size
              </p>

              <p className="mt-1 text-sm">
                {venue.size}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-5 flex flex-wrap gap-2">
          {venue.features.map((feature) => (
            <span
              key={feature}
              className="border border-border px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onEnquire(venue)}
          className="group/enquire mt-6 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground"
        >
          Make an enquiry

          <ArrowUpRight
            size={14}
            strokeWidth={1.4}
            className="transition-transform duration-300 group-hover/enquire:-translate-y-0.5 group-hover/enquire:translate-x-0.5"
          />
        </button>
      </div>
    </motion.article>
  );
}