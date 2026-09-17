"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    label: "Stay",
    title: "Rooms & Suites",
    href: "#rooms",
  },
  {
    number: "02",
    label: "Dine",
    title: "Restaurant & Bar",
    href: "#dining",
  },
  {
    number: "03",
    label: "Meet",
    title: "Events & Conferences",
    href: "#events",
  },
];

export default function HeroExperienceNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % experiences.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-36 right-8 z-20 hidden w-64 lg:block xl:right-12">
      <div className="border-l border-white/20 pl-7">
        <p className="mb-6 text-[8px] uppercase tracking-[3.5px] text-white/35">
          Discover Goldstep
        </p>

        <div className="space-y-5">
          {experiences.map((experience, index) => {
            const isActive = active === index;

            return (
              <a
                key={experience.number}
                href={experience.href}
                onMouseEnter={() => setActive(index)}
                className="group block"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-[9px] tracking-[2px] transition-colors duration-300 ${
                      isActive
                        ? "text-[#d7b77a]"
                        : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {experience.number}
                  </span>

                  <span
                    className={`text-[10px] uppercase tracking-[2.5px] transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/80"
                    }`}
                  >
                    {experience.label}
                  </span>
                </div>

                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className="ml-9 mt-2 text-xs text-white/50"
                  >
                    {experience.title}
                  </motion.p>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}