"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "01",
    label: "A place to arrive",
  },
  {
    value: "02",
    label: "A place to unwind",
  },
  {
    value: "03",
    label: "A place to remember",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f2eb] text-[#171512]"
    >
      {/* ================================================================
          INTRODUCTION
      ================================================================= */}

      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="goldstep-eyebrow">
              The Goldstep experience
            </div>

            <p className="mt-6 max-w-xs text-xs leading-6 text-black/45">
              More than somewhere to sleep. A considered space to
              pause, connect, celebrate and simply enjoy being here.
            </p>
          </motion.div>

          {/* Statement */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-display text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.04em]">
              Hospitality is not
              <span className="italic text-[#b89555]">
                {" "}
                a service.
              </span>

              <br />

              <span className="text-black/35">
                It is how we make
              </span>

              <br />

              you feel.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ================================================================
          IMAGE + STORY
      ================================================================= */}

      <div className="mx-auto max-w-[1600px] px-6 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="goldstep-image relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/goldstep-about.png"
              alt="The Goldstep Hotels experience"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Story */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-8 h-px w-12 bg-[#b89555]" />

            <h3 className="font-display text-4xl font-light leading-tight tracking-[-0.02em] sm:text-5xl">
              Designed around
              <br />
              <span className="italic text-[#b89555]">
                your stay.
              </span>
            </h3>

            <div className="mt-8 space-y-5 text-sm leading-7 text-black/55">
              <p>
                At Goldstep, every detail has a purpose. From the
                moment you arrive to the moment you leave, our spaces,
                service and atmosphere are designed to make your time
                with us feel effortless.
              </p>

              <p>
                Whether you are here for a quiet escape, an important
                meeting, a celebration or simply a change of scenery,
                Goldstep gives you room to slow down and enjoy the
                moment.
              </p>
            </div>

            <a
              href="#experiences"
              className="group mt-9 inline-flex items-center gap-4 border-b border-black/15 pb-3 text-[9px] font-medium uppercase tracking-[2.5px] transition-colors hover:border-[#b89555]"
            >
              Discover our story

              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================================================================
          EXPERIENCE STATEMENT
      ================================================================= */}

      <div className="border-t border-black/10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`px-6 py-10 sm:px-8 lg:px-12 xl:px-16 ${
                index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""
              } border-black/10`}
            >
              <span className="text-[9px] tracking-[2px] text-[#b89555]">
                {stat.value}
              </span>

              <p className="mt-3 font-display text-2xl font-light text-black/75 sm:text-3xl">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}