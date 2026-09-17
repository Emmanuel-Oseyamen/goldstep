"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
  onClose: () => void;
}

export default function MobileMenu({
  navigation,
  onClose,
}: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 bg-[#f5f2eb] text-[#171512]"
    >
      {/* ================================================================
          BACKGROUND DETAIL
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-[#d7b77a]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#d7b77a]/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* ================================================================
          MENU CONTENT
      ================================================================= */}

      <div className="relative flex h-full flex-col px-6 pb-7 pt-28 sm:px-10">
        <div className="mx-auto flex h-full w-full max-w-xl flex-col">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#b89555]" />

            <span className="text-[9px] uppercase tracking-[3px] text-black/45">
              Goldstep Hotels
            </span>
          </motion.div>

          {/* ============================================================
              NAVIGATION
          ============================================================ */}

          <nav aria-label="Mobile navigation" className="flex-1">
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.12 + index * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-baseline justify-between border-b border-black/[0.07] py-4 sm:py-5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[9px] tracking-[2px] text-[#b89555]">
                      0{index + 1}
                    </span>

                    <span className="font-serif text-4xl font-light tracking-[-0.02em] text-[#171512] transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    className="text-black/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b89555]"
                  />
                </motion.a>
              ))}
            </div>

            {/* Booking CTA */}
            <motion.a
              href="#booking"
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
              className="mt-8 flex items-center justify-between bg-[#171512] px-6 py-5 text-white transition-colors duration-300 hover:bg-[#292720]"
            >
              <div>
                <p className="text-[8px] uppercase tracking-[2.5px] text-[#d7b77a]">
                  Reservations
                </p>

                <p className="mt-1 text-sm">
                  Reserve your stay
                </p>
              </div>

              <ArrowUpRight
                size={19}
                strokeWidth={1.3}
                className="text-[#d7b77a]"
              />
            </motion.a>
          </nav>

          {/* ============================================================
              FOOTER INFORMATION
          ============================================================ */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
            className="mt-8 border-t border-black/10 pt-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-black/45">
                  <MapPin size={13} strokeWidth={1.3} />

                  <span className="text-[9px] uppercase tracking-[2px]">
                    Your destination
                  </span>
                </div>

                <p className="mt-2 max-w-xs text-xs leading-5 text-black/50">
                  Exceptional hospitality, thoughtfully designed for
                  memorable stays.
                </p>
              </div>

              <div className="flex gap-5">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="text-[9px] uppercase tracking-[2px] text-black/45 transition hover:text-black"
                >
                  Contact
                </a>

                <a
                  href="#location"
                  onClick={onClose}
                  className="text-[9px] uppercase tracking-[2px] text-black/45 transition hover:text-black"
                >
                  Location
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}