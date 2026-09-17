"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  Mail,
  Phone,
  Users,
  X,
} from "lucide-react";

import {
  EventCard,
  type EventVenue,
} from "./event-card";

const venues: EventVenue[] = [
  {
    id: "grand-ballroom",
    number: "01",
    name: "Grand Ballroom",
    type: "Celebrations & galas",
    description:
      "An elegant, adaptable venue for weddings, receptions, galas and celebrations that deserve a memorable setting.",
    image: "/events/grand-ballroom.png",
    capacity: "Up to 400",
    size: "480 m²",
    features: [
      "Flexible layout",
      "Stage",
      "Premium AV",
      "Private entrance",
    ],
    featured: true,
  },
  {
    id: "executive-boardroom",
    number: "02",
    name: "Executive Boardroom",
    type: "Meetings & strategy",
    description:
      "A private, focused environment for executive meetings, presentations, negotiations and high-level conversations.",
    image: "/events/executive-boardroom.png",
    capacity: "Up to 18",
    size: "54 m²",
    features: [
      "Video conferencing",
      "Presentation screen",
      "Private dining",
      "High-speed Wi-Fi",
    ],
  },
  {
    id: "conference-suite",
    number: "03",
    name: "Conference Suite",
    type: "Corporate events",
    description:
      "A flexible professional setting designed for conferences, workshops, seminars and private corporate gatherings.",
    image: "/events/conference-suite.png",
    capacity: "Up to 120",
    size: "180 m²",
    features: [
      "Modular seating",
      "Premium AV",
      "Breakout space",
      "Dedicated support",
    ],
  },
];

export default function Events() {
  const [selectedVenue, setSelectedVenue] =
    useState<EventVenue | null>(null);

  return (
    <>
      <section
        id="events"
        className="overflow-hidden bg-background"
      >
        <div className="goldstep-container py-24 sm:py-32 lg:py-40">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="goldstep-eyebrow">
                <span className="mr-3 inline-block h-px w-8 bg-gold" />
                Gather at Goldstep
              </span>

              <h2 className="goldstep-display mt-5 max-w-2xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Make the
                <span className="block italic text-gold">
                  occasion matter.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                From intimate boardroom conversations to celebrations with
                hundreds of guests, Goldstep gives every gathering the space,
                service and attention it deserves.
              </p>
            </motion.div>
          </div>

          {/* Event philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="mt-16 grid border-y border-border sm:grid-cols-3 lg:mt-20"
          >
            <div className="border-b border-border py-6 sm:border-b-0 sm:border-r sm:pr-7">
              <Building2
                size={19}
                strokeWidth={1.3}
                className="text-gold"
              />

              <p className="mt-4 font-display text-2xl">
                Beautiful spaces
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Designed to make an impression before the first guest arrives.
              </p>
            </div>

            <div className="border-b border-border py-6 sm:border-b-0 sm:border-r sm:px-7">
              <Users
                size={19}
                strokeWidth={1.3}
                className="text-gold"
              />

              <p className="mt-4 font-display text-2xl">
                Flexible capacity
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Spaces that adapt to the size and character of your event.
              </p>
            </div>

            <div className="py-6 sm:pl-7">
              <Check
                size={19}
                strokeWidth={1.3}
                className="text-gold"
              />

              <p className="mt-4 font-display text-2xl">
                Personal attention
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A dedicated team making sure every detail is handled.
              </p>
            </div>
          </motion.div>

          {/* Venues */}
          <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
            {venues.map((venue, index) => (
              <EventCard
                key={venue.id}
                venue={venue}
                index={index}
                onEnquire={setSelectedVenue}
              />
            ))}
          </div>

          {/* Event CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 overflow-hidden bg-charcoal text-white sm:mt-28"
          >
            <div className="relative">
              <Image
                src="/events/events-cta.png"
                alt=""
                width={1600}
                height={700}
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />

              <div className="absolute inset-0 bg-charcoal/75" />

              <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
                <div className="max-w-2xl">
                  <span className="goldstep-eyebrow text-white/60">
                    Planning something special?
                  </span>

                  <h3 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                    Tell us what you
                    <span className="block italic text-gold">
                      have in mind.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                    Our events team can help shape the right space, setup,
                    menu and experience around your occasion.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedVenue(venues[0])
                  }
                  className="group inline-flex items-center gap-3 self-start bg-white px-6 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-gold hover:text-white lg:self-end"
                >
                  Start planning

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event enquiry modal */}
      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedVenue(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 35,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-2xl overflow-hidden bg-background"
            >
              <button
                type="button"
                onClick={() => setSelectedVenue(null)}
                aria-label="Close event enquiry"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md"
              >
                <X size={17} strokeWidth={1.4} />
              </button>

              <div className="relative aspect-[16/7]">
                <Image
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:left-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                    {selectedVenue.type}
                  </p>

                  <h3 className="mt-2 font-display text-4xl text-white sm:text-5xl">
                    {selectedVenue.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-muted-foreground">
                  {selectedVenue.description}
                </p>

                <div className="mt-6 grid grid-cols-2 border-y border-border">
                  <div className="py-4">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      Capacity
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedVenue.capacity}
                    </p>
                  </div>

                  <div className="border-l border-border py-4 pl-5">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      Venue size
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedVenue.size}
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Begin your enquiry
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <a
                      href="mailto:events@goldstephotels.com"
                      className="group flex items-center justify-center gap-3 border border-border px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <Mail size={15} strokeWidth={1.4} />
                      Email events
                    </a>

                    <a
                      href="tel:+2340000000000"
                      className="group flex items-center justify-center gap-3 bg-charcoal px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold"
                    >
                      <Phone size={15} strokeWidth={1.4} />
                      Call our team
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}