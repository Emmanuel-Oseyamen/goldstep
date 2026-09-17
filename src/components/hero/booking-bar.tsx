"use client";

import { CalendarDays, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingBar() {
  return (
    <motion.div
      id="booking"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.15,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute bottom-6 left-1/2 z-30 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 sm:bottom-8"
    >
      <div className="border border-white/15 bg-[#171512]/90 p-1.5 shadow-2xl backdrop-blur-xl sm:p-2">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto]">
          {/* ============================================================
              CHECK IN
          ============================================================ */}

          <button
            type="button"
            className="group flex items-center gap-4 border-b border-white/10 px-5 py-4 text-left transition hover:bg-white/5 sm:border-b-0 sm:border-r"
          >
            <CalendarDays
              size={18}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7b77a]"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[2.5px] text-white/35">
                Check in
              </p>

              <p className="mt-1 text-xs text-white/70 group-hover:text-white">
                Select date
              </p>
            </div>
          </button>

          {/* ============================================================
              CHECK OUT
          ============================================================ */}

          <button
            type="button"
            className="group flex items-center gap-4 border-b border-white/10 px-5 py-4 text-left transition hover:bg-white/5 sm:border-b-0 sm:border-r"
          >
            <CalendarDays
              size={18}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7b77a]"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[2.5px] text-white/35">
                Check out
              </p>

              <p className="mt-1 text-xs text-white/70 group-hover:text-white">
                Select date
              </p>
            </div>
          </button>

          {/* ============================================================
              GUESTS
          ============================================================ */}

          <button
            type="button"
            className="group flex items-center gap-4 px-5 py-4 text-left transition hover:bg-white/5 sm:border-r sm:border-white/10"
          >
            <Users
              size={18}
              strokeWidth={1.2}
              className="shrink-0 text-[#d7b77a]"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[2.5px] text-white/35">
                Guests
              </p>

              <p className="mt-1 text-xs text-white/70 group-hover:text-white">
                2 Guests
              </p>
            </div>
          </button>

          {/* ============================================================
              SEARCH
          ============================================================ */}

          <a
            href="#rooms"
            className="group flex min-h-[62px] items-center justify-between gap-8 bg-[#d7b77a] px-6 py-4 transition-colors duration-500 hover:bg-[#ead7ac] sm:min-w-[175px]"
          >
            <div>
              <p className="text-[8px] uppercase tracking-[2.5px] text-[#5d4b2c]">
                Reservations
              </p>

              <p className="mt-1 text-xs font-semibold text-[#171512]">
                Check availability
              </p>
            </div>

            <ArrowUpRight
              size={18}
              strokeWidth={1.3}
              className="text-[#171512] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}