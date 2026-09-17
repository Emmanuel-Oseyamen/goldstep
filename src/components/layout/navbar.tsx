"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navigation = [
  { label: "Stay", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experience", href: "#experiences" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/5 bg-[#f8f6f1]/90 text-[#171512] shadow-[0_8px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[94px] lg:px-12 xl:px-16">
          {/* ============================================================
              BRAND
          ============================================================ */}

          <a
            href="/"
            aria-label="Goldstep Hotels — Home"
            className="group relative z-[60] flex items-center gap-3"
          >
            {/* Goldstep monogram */}
            <div
              className={`flex h-10 w-10 items-center justify-center border transition-all duration-500 lg:h-11 lg:w-11 ${
                scrolled
                  ? "border-[#b89555]/50"
                  : "border-white/35 group-hover:border-[#d8bb7d]"
              }`}
            >
              <span
                className={`font-serif text-lg font-medium transition-colors duration-500 ${
                  scrolled ? "text-[#b89555]" : "text-[#d8bb7d]"
                }`}
              >
                G
              </span>
            </div>

            <div className="leading-none">
              <span
                className={`block text-[15px] font-semibold uppercase tracking-[4px] transition-colors duration-500 lg:text-[16px] ${
                  scrolled ? "text-[#171512]" : "text-white"
                }`}
              >
                Goldstep
              </span>

              <span
                className={`mt-1.5 block text-[7px] uppercase tracking-[3.5px] transition-colors duration-500 lg:text-[8px] ${
                  scrolled ? "text-black/45" : "text-white/55"
                }`}
              >
                Hotels & Hospitality
              </span>
            </div>
          </a>

          {/* ============================================================
              DESKTOP NAVIGATION
          ============================================================ */}

          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex 2xl:gap-10"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-3 text-[10px] font-medium uppercase tracking-[2.5px] transition-colors duration-300 ${
                  scrolled
                    ? "text-black/60 hover:text-black"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-[#b89555]" : "bg-[#d8bb7d]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ============================================================
              ACTIONS
          ============================================================ */}

          <div className="relative z-[60] flex items-center gap-2.5 sm:gap-3">
            {/* Reservation */}
            <a
              href="#booking"
              className={`group hidden items-center gap-3 border px-5 py-3 text-[9px] font-semibold uppercase tracking-[2px] transition-all duration-500 sm:flex lg:px-6 lg:py-3.5 ${
                scrolled
                  ? "border-[#b89555] bg-[#b89555] text-white hover:bg-[#a68348]"
                  : "border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-[#d8bb7d] hover:bg-white/10"
              }`}
            >
              <span>Book a stay</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`flex h-11 w-11 items-center justify-center border transition-all duration-500 xl:hidden ${
                menuOpen
                  ? "border-black/10 bg-black/5 text-[#171512]"
                  : scrolled
                    ? "border-black/10 bg-black/5 text-[#171512]"
                    : "border-white/25 bg-white/5 text-white backdrop-blur-md"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    className="relative block h-4 w-4"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                    <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Menu size={19} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================================================================
          MOBILE MENU
      ================================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            navigation={navigation}
            onClose={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}