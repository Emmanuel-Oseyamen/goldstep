"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Minus,
  Plus,
  Users,
} from "lucide-react";

export interface GuestCounts {
  adults: number;
  children: number;
  rooms: number;
}

interface GuestSelectorProps {
  value: GuestCounts;
  onChange: (value: GuestCounts) => void;
  label?: string;
}

const LIMITS = {
  adults: 10,
  children: 6,
  rooms: 5,
};

function CounterRow({
  label,
  description,
  value,
  min,
  max,
  onDecrease,
  onIncrease,
}: {
  label: string;
  description: string;
  value: number;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm text-foreground">{label}</p>
        <p className="mt-0.5 text-[10px] text-foreground/35">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          disabled={value <= min}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-25"
          aria-label={`Decrease ${label}`}
        >
          <Minus size={12} />
        </button>

        <span className="w-5 text-center text-sm tabular-nums">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          disabled={value >= max}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-25"
          aria-label={`Increase ${label}`}
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
}

export function GuestSelector({
  value,
  onChange,
  label,
}: GuestSelectorProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function update(
    key: keyof GuestCounts,
    amount: number
  ) {
    const limits = LIMITS[key];

    const nextValue = Math.min(
      limits,
      Math.max(1, value[key] + amount)
    );

    onChange({
      ...value,
      [key]: nextValue,
    });
  }

  const guestLabel =
    value.adults + value.children === 1
      ? "1 Guest"
      : `${value.adults + value.children} Guests`;

  return (
    <div ref={wrapperRef} className="relative">
      {label && (
        <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between border border-foreground/10 bg-white/50 px-5 py-4 text-left transition-colors hover:border-gold/50"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <div className="flex items-center gap-3">
          <Users
            size={17}
            strokeWidth={1.4}
            className="text-gold"
          />

          <div>
            <span className="block text-sm">
              {guestLabel}
            </span>

            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-foreground/35">
              {value.rooms}{" "}
              {value.rooms === 1 ? "room" : "rooms"}
            </span>
          </div>
        </div>

        <ChevronDown
          size={15}
          className={`text-foreground/30 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-2 w-[min(340px,calc(100vw-2rem))] border border-foreground/10 bg-ivory-soft px-5 shadow-[0_20px_60px_rgba(23,21,18,0.14)]"
          >
            <CounterRow
              label="Adults"
              description="Ages 13 and above"
              value={value.adults}
              min={1}
              max={LIMITS.adults}
              onDecrease={() => update("adults", -1)}
              onIncrease={() => update("adults", 1)}
            />

            <div className="border-t border-foreground/10">
              <CounterRow
                label="Children"
                description="Ages 0–12"
                value={value.children}
                min={0}
                max={LIMITS.children}
                onDecrease={() => {
                  if (value.children > 0) {
                    onChange({
                      ...value,
                      children: value.children - 1,
                    });
                  }
                }}
                onIncrease={() => update("children", 1)}
              />
            </div>

            <div className="border-t border-foreground/10">
              <CounterRow
                label="Rooms"
                description="Number of rooms"
                value={value.rooms}
                min={1}
                max={LIMITS.rooms}
                onDecrease={() => update("rooms", -1)}
                onIncrease={() => update("rooms", 1)}
              />
            </div>

            <div className="border-t border-foreground/10 py-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full bg-charcoal px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-charcoal-soft"
              >
                Apply guests
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}