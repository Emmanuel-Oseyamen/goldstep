"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Check,
  Maximize2,
  Users,
  X,
} from "lucide-react";

import type { Room } from "./room-card";

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
}

export function RoomDetailsModal({
  room,
  onClose,
}: RoomDetailsModalProps) {
  useEffect(() => {
    if (!room) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [room, onClose]);

  return (
    <AnimatePresence>
      {room && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="room-modal-title"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-background shadow-2xl sm:max-h-[88vh] sm:flex-row"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close room details"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-black/45 sm:right-5 sm:top-5"
            >
              <X size={19} strokeWidth={1.4} />
            </button>

            {/* Image */}
            <div className="relative h-[38vh] min-h-[280px] sm:h-auto sm:w-[48%]">
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 640px) 100vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
                  {room.category}
                </p>

                <h2
                  id="room-modal-title"
                  className="font-display text-4xl tracking-[-0.03em] sm:text-5xl"
                >
                  {room.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Intro */}
                  <div className="border-b border-border pb-7">
                    <span className="goldstep-eyebrow">
                      The room
                    </span>

                    <p className="mt-5 max-w-2xl font-display text-2xl leading-[1.15] text-foreground sm:text-3xl">
                      {room.description}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {room.longDescription}
                    </p>
                  </div>

                  {/* Room specifications */}
                  <div className="grid grid-cols-2 gap-y-7 border-b border-border py-7 sm:grid-cols-3">
                    <div>
                      <Maximize2
                        size={17}
                        strokeWidth={1.3}
                        className="text-gold"
                      />

                      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Room size
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        {room.size}
                      </p>
                    </div>

                    <div>
                      <Users
                        size={17}
                        strokeWidth={1.3}
                        className="text-gold"
                      />

                      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Guests
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        {room.guests}
                      </p>
                    </div>

                    <div>
                      <BedDouble
                        size={17}
                        strokeWidth={1.3}
                        className="text-gold"
                      />

                      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Sleeping
                      </p>

                      <p className="mt-1 text-sm text-foreground">
                        {room.bed}
                      </p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="py-7">
                    <span className="goldstep-eyebrow">
                      Included with your stay
                    </span>

                    <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {room.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                            <Check size={11} strokeWidth={2} />
                          </span>

                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom booking bar */}
              <div className="border-t border-border bg-ivory-soft p-5 sm:p-6 lg:px-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      From
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-3xl text-foreground">
                        {room.price}
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        / night
                      </span>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    onClick={onClose}
                    className="group inline-flex min-h-12 items-center justify-center gap-3 bg-charcoal px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-gold"
                  >
                    Reserve this room

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}