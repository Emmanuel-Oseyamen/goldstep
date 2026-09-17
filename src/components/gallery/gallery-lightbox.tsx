"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const activeImage =
    activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = originalOverflow;
    };
  }, [
    activeIndex,
    onClose,
    onPrevious,
    onNext,
  ]);

  return (
    <AnimatePresence>
      {activeImage && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:right-7 sm:top-7"
          >
            <X
              size={19}
              strokeWidth={1.3}
            />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:left-7"
          >
            <ChevronLeft
              size={20}
              strokeWidth={1.3}
            />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:right-7"
          >
            <ChevronRight
              size={20}
              strokeWidth={1.3}
            />
          </button>

          {/* Image */}
          <motion.div
            key={activeImage.id}
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative h-[75vh] w-full max-w-6xl"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 w-[calc(100%-120px)] -translate-x-1/2 text-center sm:bottom-8">
            <p className="text-[9px] uppercase tracking-[0.22em] text-gold">
              {activeImage.category}
            </p>

            <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
              {activeImage.title}
            </p>

            <p className="mt-2 text-[10px] tracking-[0.15em] text-white/40">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}