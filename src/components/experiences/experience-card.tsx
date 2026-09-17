"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

export interface Experience {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  featured?: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  onSelect?: (experience: Experience) => void;
}

export function ExperienceCard({
  experience,
  index,
  onSelect,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
      }}
      className={`group ${
        experience.featured
          ? "lg:col-span-8"
          : "lg:col-span-4"
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect?.(experience)}
        className="block w-full text-left"
        aria-label={`Explore ${experience.title}`}
      >
        <div
          className={`relative overflow-hidden bg-charcoal ${
            experience.featured
              ? "aspect-[5/4] sm:aspect-[16/10]"
              : "aspect-[4/5]"
          }`}
        >
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes={
              experience.featured
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 1024px) 100vw, 34vw"
            }
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.045]"
          />

          <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Number */}
          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 font-mono text-[9px] text-white backdrop-blur-md">
            {experience.number}
          </div>

          {/* Explore icon */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight
              size={17}
              strokeWidth={1.4}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              {experience.category}
            </p>

            <h3 className="mt-2 font-display text-4xl leading-none tracking-[-0.025em] text-white sm:text-5xl">
              {experience.title}
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
              {experience.description}
            </p>
          </div>
        </div>
      </button>

      {/* Metadata */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border py-4">
        <div className="flex items-center gap-2">
          <MapPin
            size={13}
            strokeWidth={1.4}
            className="text-gold"
          />
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {experience.location}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3
            size={13}
            strokeWidth={1.4}
            className="text-gold"
          />
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {experience.duration}
          </span>
        </div>
      </div>
    </motion.article>
  );
}