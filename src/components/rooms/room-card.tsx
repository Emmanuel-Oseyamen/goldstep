"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Maximize2,
  Users,
} from "lucide-react";

export interface Room {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  size: string;
  guests: string;
  bed: string;
  price: string;
  priceNote: string;
  features: string[];
  featured?: boolean;
}

interface RoomCardProps {
  room: Room;
  index: number;
  onViewDetails: (room: Room) => void;
}

export function RoomCard({
  room,
  index,
  onViewDetails,
}: RoomCardProps) {
  const isFeatured = room.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
      }}
      className={`group relative ${
        isFeatured
          ? "lg:col-span-6"
          : index === 0
            ? "lg:col-span-3"
            : "lg:col-span-3"
      }`}
    >
      {/* Image */}
      <button
        type="button"
        onClick={() => onViewDetails(room)}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`View details for ${room.name}`}
      >
        <div
          className={`relative overflow-hidden bg-charcoal ${
            isFeatured
              ? "aspect-[4/5] sm:aspect-[5/6]"
              : "aspect-[4/5]"
          }`}
        >
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 100vw, 25vw"
            }
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Featured label */}
          {isFeatured && (
            <div className="absolute left-5 top-5">
              <span className="inline-flex items-center border border-white/30 bg-black/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Signature stay
              </span>
            </div>
          )}

          {/* View icon */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </div>

          {/* Image bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
              {room.category}
            </div>

            <h3 className="font-display text-3xl tracking-[-0.02em] text-white sm:text-4xl">
              {room.name}
            </h3>
          </div>
        </div>
      </button>

      {/* Information */}
      <div className="pt-5">
        <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-border pb-5">
          <div className="flex items-center gap-2">
            <Maximize2
              size={14}
              strokeWidth={1.4}
              className="text-gold"
            />
            <span className="text-xs text-muted-foreground">
              {room.size}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users
              size={14}
              strokeWidth={1.4}
              className="text-gold"
            />
            <span className="text-xs text-muted-foreground">
              {room.guests}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <BedDouble
              size={14}
              strokeWidth={1.4}
              className="text-gold"
            />
            <span className="text-xs text-muted-foreground">
              {room.bed}
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              From
            </p>

            <p className="mt-1 font-display text-2xl text-foreground">
              {room.price}
            </p>

            <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {room.priceNote}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onViewDetails(room)}
            className="group/link inline-flex items-center gap-2 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground"
          >
            Details
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}