"use client";

import { ArrowUpRight, MapPin } from "lucide-react";

const footerNavigation = [
  {
    title: "Discover",
    links: [
      { label: "Rooms & Suites", href: "#rooms" },
      { label: "Dining", href: "#dining" },
      { label: "Experiences", href: "#experiences" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    title: "Goldstep",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Location", href: "#location" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#12110f] text-white">
      {/* ================================================================
          DECORATIVE BACKGROUND
      ================================================================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d7b77a]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#d7b77a]/[0.025] blur-3xl" />

      {/* ================================================================
          MAIN FOOTER
      ================================================================= */}

      <div className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-20 sm:px-8 lg:px-12 lg:pb-10 lg:pt-28 xl:px-16">
        {/* ============================================================
            TOP BRAND STATEMENT
        ============================================================= */}

        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:pb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-[#d7b77a]/50">
                <span className="font-serif text-lg font-medium text-[#d7b77a]">
                  G
                </span>
              </div>

              <div>
                <p className="text-[16px] font-semibold uppercase tracking-[4px]">
                  Goldstep
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[3.5px] text-white/40">
                  Hotels & Hospitality
                </p>
              </div>
            </div>

            <h2 className="mt-10 max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-[-0.025em] text-white/95 sm:text-5xl lg:text-6xl">
              A stay worth
              <br />
              <span className="italic text-[#d7b77a]">
                remembering.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Thoughtful hospitality, beautiful spaces, and experiences
              designed around the way you want to stay.
            </p>
          </div>

          {/* Newsletter / booking CTA */}
          <div className="flex flex-col justify-end lg:items-end">
            <div className="w-full max-w-md">
              <p className="text-[9px] uppercase tracking-[3px] text-[#d7b77a]">
                Stay in the know
              </p>

              <h3 className="mt-3 font-serif text-2xl font-light text-white">
                Discover what’s happening at Goldstep.
              </h3>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-7 flex border-b border-white/20 pb-2 transition-colors focus-within:border-[#d7b77a]"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center text-[#d7b77a]"
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </form>

              <p className="mt-3 text-[9px] leading-4 text-white/25">
                By subscribing, you agree to receive occasional news and
                updates from Goldstep Hotels.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            NAVIGATION
        ============================================================= */}

        <div className="grid grid-cols-2 gap-10 border-b border-white/10 py-12 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1.5fr] lg:py-16">
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-[9px] uppercase tracking-[3px] text-[#d7b77a]">
                {group.title}
              </p>

              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={11}
                        strokeWidth={1.4}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-5 text-[9px] uppercase tracking-[3px] text-[#d7b77a]">
              Find us
            </p>

            <div className="flex gap-3">
              <MapPin
                size={16}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-white/40"
              />

              <div>
                <p className="text-sm leading-6 text-white/65">
                  Goldstep Hotels
                </p>

                <p className="mt-1 text-xs leading-5 text-white/35">
                  Your city, Nigeria
                </p>

                <a
                  href="#location"
                  className="mt-4 inline-flex items-center gap-2 text-[9px] uppercase tracking-[2px] text-[#d7b77a] transition-colors hover:text-white"
                >
                  Get directions

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.3}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM BAR
        ============================================================= */}

        <div className="flex flex-col gap-7 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[9px] uppercase tracking-[2px] text-white/25">
              © {currentYear} Goldstep Hotels
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <p className="text-[9px] uppercase tracking-[2px] text-white/25">
              All rights reserved
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a
              href="#privacy"
              className="text-[9px] uppercase tracking-[2px] text-white/25 transition hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[9px] uppercase tracking-[2px] text-white/25 transition hover:text-white/60"
            >
              Terms
            </a>

            <a
              href="#cookies"
              className="text-[9px] uppercase tracking-[2px] text-white/25 transition hover:text-white/60"
            >
              Cookies
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-white/10 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <span className="text-xs font-medium">f</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}