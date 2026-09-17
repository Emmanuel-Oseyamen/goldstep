"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Utensils,
} from "lucide-react";

export interface Restaurant {
  id: string;
  number: string;
  name: string;
  type: string;
  description: string;
  image: string;
  hours: string;
  cuisine: string;
  featured?: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

export function RestaurantCard({
  restaurant,
  index,
}: RestaurantCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className={`group ${
        restaurant.featured
          ? "lg:col-span-7"
          : "lg:col-span-5"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          restaurant.featured
            ? "aspect-[5/4] sm:aspect-[16/10]"
            : "aspect-[5/4]"
        }`}
      >
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes={
            restaurant.featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 1024px) 100vw, 42vw"
          }
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-[10px] tracking-[0.12em] text-white backdrop-blur-md">
          {restaurant.number}
        </div>

        {/* Arrow */}
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight size={16} strokeWidth={1.4} />
        </div>

        {/* Bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
            {restaurant.type}
          </p>

          <h3 className="mt-2 font-display text-4xl tracking-[-0.025em] text-white sm:text-5xl">
            {restaurant.name}
          </h3>
        </div>
      </div>

      <div className="pt-5">
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          {restaurant.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
          <div className="flex items-center gap-2">
            <Utensils
              size={14}
              strokeWidth={1.4}
              className="text-gold"
            />
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {restaurant.cuisine}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3
              size={14}
              strokeWidth={1.4}
              className="text-gold"
            />
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {restaurant.hours}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}