"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

import {
  GalleryLightbox,
  type GalleryImage,
} from "./gallery-lightbox";

const galleryImages: GalleryImage[] = [
  {
    id: "arrival",
    src: "/gallery/download.png",
    alt: "Goldstep hotel exterior",
    category: "Arrival",
    title: "A beautiful place to arrive",
  },
  {
    id: "lobby",
    src: "/gallery/gallery2.png",
    alt: "Goldstep hotel lobby",
    category: "The Hotel",
    title: "First impressions",
  },
  {
    id: "suite",
    src: "/gallery/gallery1.png",
    alt: "Goldstep luxury suite",
    category: "Stay",
    title: "Room to breathe",
  },
  {
    id: "dining",
    src: "/gallery/unnamed.png",
    alt: "Goldstep dining room",
    category: "Dining",
    title: "Around the table",
  },
  {
    id: "pool",
    src: "/gallery/pool.png",
    alt: "Goldstep pool",
    category: "Leisure",
    title: "Slow afternoons",
  },
  {
    id: "evening",
    src: "/gallery/evening.png",
    alt: "Goldstep evening atmosphere",
    category: "Evenings",
    title: "When the day slows down",
  },
  {
    id: "detail",
    src: "/gallery/images.png",
    alt: "Goldstep hotel interior detail",
    category: "Details",
    title: "Considered down to the detail",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const openImage = (index: number) => {
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const previousImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  };

  const nextImage = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1
        ? 0
        : current + 1;
    });
  };

  return (
    <>
      <section
        id="gallery"
        className="overflow-hidden bg-background"
      >
        <div className="goldstep-container py-24 sm:py-32 lg:py-40">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="goldstep-eyebrow">
                <span className="mr-3 inline-block h-px w-8 bg-gold" />
                A glimpse of Goldstep
              </span>

              <h2 className="goldstep-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                See the place.
                <span className="block italic text-gold">
                  Feel the atmosphere.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-sm text-sm leading-6 text-muted-foreground lg:text-right"
            >
              A collection of spaces, moments and details that tell the
              Goldstep story.
            </motion.p>
          </div>

          {/* Gallery */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12">
            {/* Large image */}
            <GalleryItem
              image={galleryImages[0]}
              index={0}
              className="sm:col-span-2 lg:col-span-7"
              aspectClass="aspect-[16/10]"
              onClick={openImage}
            />

            {/* Tall image */}
            <GalleryItem
              image={galleryImages[1]}
              index={1}
              className="lg:col-span-5"
              aspectClass="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[5/6]"
              onClick={openImage}
            />

            {/* Row */}
            <GalleryItem
              image={galleryImages[2]}
              index={2}
              className="lg:col-span-4"
              aspectClass="aspect-[4/5]"
              onClick={openImage}
            />

            <GalleryItem
              image={galleryImages[3]}
              index={3}
              className="lg:col-span-4"
              aspectClass="aspect-[4/5]"
              onClick={openImage}
            />

            <GalleryItem
              image={galleryImages[4]}
              index={4}
              className="lg:col-span-4"
              aspectClass="aspect-[4/5]"
              onClick={openImage}
            />

            {/* Wide image */}
            <GalleryItem
              image={galleryImages[5]}
              index={5}
              className="sm:col-span-2 lg:col-span-8"
              aspectClass="aspect-[16/9]"
              onClick={openImage}
            />

            <GalleryItem
              image={galleryImages[6]}
              index={6}
              className="sm:col-span-2 lg:col-span-4"
              aspectClass="aspect-[16/9] lg:aspect-[4/3]"
              onClick={openImage}
            />
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 flex items-center justify-between border-t border-border pt-6"
          >
            <div className="flex items-center gap-3">
              <Maximize2
                size={15}
                strokeWidth={1.3}
                className="text-gold"
              />

              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                View full gallery
              </span>
            </div>

            <a
              href="#booking"
              className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em]"
            >
              Come see for yourself

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={closeGallery}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  );
}

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  className?: string;
  aspectClass: string;
  onClick: (index: number) => void;
}

function GalleryItem({
  image,
  index,
  className = "",
  aspectClass,
  onClick,
}: GalleryItemProps) {
  return (
    <motion.button
      type="button"
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
      }}
      onClick={() => onClick(index)}
      className={`group relative overflow-hidden text-left ${className}`}
      aria-label={`View ${image.title}`}
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

        {/* Hover details */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
              {image.category}
            </p>

            <p className="mt-1 font-display text-xl text-white">
              {image.title}
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md">
            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
            />
          </span>
        </div>
      </div>
    </motion.button>
  );
}