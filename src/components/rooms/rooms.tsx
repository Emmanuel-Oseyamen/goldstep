"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BedDouble, Sparkles } from "lucide-react";

import { RoomCard, type Room } from "./room-card";
import { RoomDetailsModal } from "./room-details-modal";

const rooms: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King",
    category: "Deluxe Room",
    description:
      "A calm, beautifully appointed retreat designed for effortless comfort, whether you are travelling for business or pleasure.",
    longDescription:
      "The Deluxe King brings together generous proportions, warm textures and understated luxury. Natural light fills the room throughout the day while carefully considered details create a quiet sense of arrival. It is an ideal space to slow down, work comfortably or simply enjoy a peaceful night.",
    image: "/rooms/deluxe-king.png",
    size: "38 m²",
    guests: "2 guests",
    bed: "King bed",
    price: "₦85,000",
    priceNote: "per night",
    features: [
      "King-size bed",
      "Rainfall shower",
      "Work desk",
      "Smart TV",
      "High-speed Wi-Fi",
      "Complimentary breakfast",
    ],
    featured: false,
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "Suite",
    description:
      "A spacious suite created for guests who appreciate extra room, privacy and a more elevated stay.",
    longDescription:
      "The Executive Suite is designed around the way modern travellers actually live. A separate lounge creates room to work, meet or unwind, while the bedroom remains a private sanctuary. Refined finishes, generous storage and thoughtful amenities make longer stays especially comfortable.",
    image: "/rooms/executive-suite.png",
    size: "62 m²",
    guests: "2 guests",
    bed: "King bed",
    price: "₦135,000",
    priceNote: "per night",
    features: [
      "Separate living area",
      "King-size bed",
      "Premium bathroom",
      "Dining area",
      "Smart TV",
      "Complimentary breakfast",
    ],
    featured: true,
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "Signature Suite",
    description:
      "Our most distinguished accommodation — expansive, private and designed for an exceptional Goldstep experience.",
    longDescription:
      "The Presidential Suite represents the fullest expression of Goldstep hospitality. Expansive living spaces, a private dining area and beautifully finished interiors give the suite a residential sense of luxury. Every detail has been considered for guests who expect space, privacy and impeccable comfort.",
    image: "/rooms/presidential-suite.png",
    size: "110 m²",
    guests: "4 guests",
    bed: "King bed",
    price: "₦250,000",
    priceNote: "per night",
    features: [
      "Master bedroom",
      "Spacious living room",
      "Private dining area",
      "Premium bathroom",
      "Guest powder room",
      "Dedicated workspace",
    ],
    featured: false,
  },
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <>
      <section
        id="rooms"
        className="goldstep-section overflow-hidden bg-background"
      >
        <div className="goldstep-container">
          {/* Section introduction */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="goldstep-eyebrow">
                <span className="mr-3 inline-block h-px w-8 bg-gold" />
                Stay with us
              </span>

              <h2 className="goldstep-display mt-5 max-w-xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Rooms made for
                <span className="block italic text-gold">restful living.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="max-w-xl lg:ml-auto"
            >
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                From intimate rooms to expansive suites, every Goldstep space
                is designed around one simple idea: you should feel completely
                at ease.
              </p>

              <div className="mt-7 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <BedDouble
                    size={18}
                    strokeWidth={1.4}
                    className="text-gold"
                  />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Thoughtful comfort
                  </span>
                </div>

                <div className="hidden items-center gap-3 sm:flex">
                  <Sparkles
                    size={18}
                    strokeWidth={1.4}
                    className="text-gold"
                  />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Quiet luxury
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Room collection */}
          <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:gap-7">
            {rooms.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                index={index}
                onViewDetails={setSelectedRoom}
              />
            ))}
          </div>

          {/* Bottom editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mt-16 flex flex-col justify-between gap-6 border-t border-border pt-7 sm:flex-row sm:items-center"
          >
            <p className="max-w-lg text-sm leading-6 text-muted-foreground">
              Need something more specific? Our reservations team can help
              you find the room that best suits your stay.
            </p>

            <a
              href="#booking"
              className="group inline-flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground"
            >
              Find your room
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <RoomDetailsModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />
    </>
  );
}