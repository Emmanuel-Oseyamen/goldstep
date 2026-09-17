"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Gem,
  Martini,
  ShieldCheck,
  Sparkles,
  Waves,
  Wifi,
} from "lucide-react";

export interface Amenity {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: "spa" | "pool" | "dining" | "fitness" | "wifi" | "security" | "service";
  featured?: boolean;
}

interface AmenityCardProps {
  amenity: Amenity;
  index: number;
  onSelect?: (amenity: Amenity) => void;
}

const icons = {
  spa: Sparkles,
  pool: Waves,
  dining: Martini,
  fitness: Dumbbell,
  wifi: Wifi,
  security: ShieldCheck,
  service: Gem,
};

export function AmenityCard({
  amenity,
  index,
  onSelect,
}: AmenityCardProps) {
  const Icon = icons[amenity.icon];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect?.(amenity)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      className="group relative w-full overflow-hidden border border-white/10 bg-white/[0.035] p-6 text-left transition-colors duration-500 hover:bg-white/[0.07] sm:p-7"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
          <Icon size={19} strokeWidth={1.3} />
        </div>

        <span className="font-mono text-[10px] tracking-[0.15em] text-white/30">
          {amenity.number}
        </span>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-2xl tracking-[-0.02em] text-white sm:text-[27px]">
          {amenity.name}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
          {amenity.description}
        </p>
      </div>

      <div className="mt-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
        Explore
        <ArrowUpRight size={13} strokeWidth={1.4} />
      </div>

      {/* Decorative line */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
    </motion.button>
  );
}