"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  Navigation,
  Plane,
} from "lucide-react";

const nearbyPlaces = [
  {
    name: "City Centre",
    distance: "10 min",
    type: "By car",
  },
  {
    name: "Business District",
    distance: "15 min",
    type: "By car",
  },
  {
    name: "Airport",
    distance: "25 min",
    type: "By car",
  },
  {
    name: "Local Attractions",
    distance: "10–20 min",
    type: "By car",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="overflow-hidden bg-background"
    >
      <div className="goldstep-container py-24 sm:py-32 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="goldstep-eyebrow">
              <span className="mr-3 inline-block h-px w-8 bg-gold" />
              Find Goldstep
            </span>

            <h2 className="goldstep-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Close to
              <span className="block italic text-gold">
                everything.
              </span>
              Away from the noise.
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Conveniently positioned for business, leisure and everything
            between — while giving you a peaceful place to return to at the
            end of the day.
          </motion.p>
        </div>

        {/* Location visual */}
        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-12">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden lg:col-span-7"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/location/location.png"
                alt="Goldstep Hotels surroundings"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              {/* Location marker */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-gold text-white shadow-2xl">
                  <MapPin
                    size={22}
                    strokeWidth={1.3}
                  />
                </div>

                <div className="mt-2 bg-black/60 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Goldstep Hotels
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="flex flex-col justify-between bg-ivory-soft p-7 sm:p-9 lg:col-span-5 lg:p-10"
          >
            <div>
              <span className="goldstep-eyebrow">
                Our address
              </span>

              <div className="mt-6 flex gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-gold"
                />

                <div>
                  <p className="font-display text-2xl">
                    Goldstep Hotels
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Your street address
                    <br />
                    Your city, Nigeria
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="group mt-7 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em]"
              >
                Get directions

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-7 border-t border-border pt-7">
              <div>
                <Car
                  size={18}
                  strokeWidth={1.3}
                  className="text-gold"
                />

                <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Parking
                </p>

                <p className="mt-1 text-sm">
                  Available
                </p>
              </div>

              <div>
                <Clock3
                  size={18}
                  strokeWidth={1.3}
                  className="text-gold"
                />

                <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Front desk
                </p>

                <p className="mt-1 text-sm">
                  24 hours
                </p>
              </div>

              <div>
                <Navigation
                  size={18}
                  strokeWidth={1.3}
                  className="text-gold"
                />

                <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Transfers
                </p>

                <p className="mt-1 text-sm">
                  On request
                </p>
              </div>

              <div>
                <Plane
                  size={18}
                  strokeWidth={1.3}
                  className="text-gold"
                />

                <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Airport
                </p>

                <p className="mt-1 text-sm">
                  Approx. 25 min
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nearby */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-6 border-y border-border"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map((place, index) => (
              <div
                key={place.name}
                className={`py-6 sm:px-6 ${
                  index !== 0
                    ? "border-t border-border sm:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  {place.type}
                </p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="font-display text-xl">
                    {place.name}
                  </p>

                  <span className="text-sm text-gold">
                    {place.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final statement */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <p className="mx-auto max-w-2xl font-display text-3xl leading-[1.1] tracking-[-0.025em] sm:text-4xl">
            Wherever you're going,
            <span className="italic text-gold">
              {" "}
              start here.
            </span>
          </p>

          <a
            href="#booking"
            className="group mt-7 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em]"
          >
            Plan your stay

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}