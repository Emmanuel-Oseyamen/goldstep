"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { BookingForm } from "./booking-form";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({
  open,
  onClose,
}: BookingModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close reservation window"
            onClick={onClose}
            className="fixed inset-0 h-full w-full cursor-default bg-charcoal/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative flex min-h-screen items-start justify-center px-4 py-6 sm:px-6 sm:py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-5xl overflow-hidden bg-ivory"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-5 sm:px-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-foreground/45 transition-colors hover:text-foreground"
                >
                  <ArrowLeft
                    size={14}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Back
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 text-center">
                  <p className="font-display text-xl tracking-wide">
                    Goldstep
                  </p>

                  <p className="hidden text-[8px] uppercase tracking-[0.3em] text-gold sm:block">
                    Hotels
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center border border-foreground/10 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Close"
                >
                  <X size={16} strokeWidth={1.4} />
                </button>
              </div>

              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                {/* Editorial side */}
                <div className="relative hidden overflow-hidden bg-charcoal px-10 py-12 text-ivory lg:block">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border border-gold/50" />
                    <div className="absolute -left-10 top-30 h-96 w-96 rounded-full border border-gold/20" />
                  </div>

                  <div className="relative flex h-full min-h-[700px] flex-col">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
                        Reservations
                      </p>

                      <h1
                        id="booking-modal-title"
                        className="mt-5 max-w-sm font-display text-6xl leading-[0.9]"
                      >
                        Your stay
                        <br />
                        begins{" "}
                        <span className="italic text-gold">
                          here.
                        </span>
                      </h1>

                      <p className="mt-7 max-w-sm text-sm leading-7 text-ivory/55">
                        Tell us when you&apos;d like to
                        arrive, and we&apos;ll take care of
                        the rest.
                      </p>
                    </div>

                    <div className="mt-auto border-t border-ivory/10 pt-6">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-ivory/35">
                        Goldstep Hotels
                      </p>

                      <p className="mt-3 max-w-xs text-xs leading-6 text-ivory/45">
                        Thoughtfully designed spaces,
                        genuine hospitality and a stay
                        worth remembering.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                  <div className="mb-8 lg:hidden">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      Reservations
                    </p>

                    <h1 className="mt-3 font-display text-4xl leading-none">
                      Your stay begins{" "}
                      <span className="italic text-gold">
                        here.
                      </span>
                    </h1>
                  </div>

                  <BookingForm onSuccess={onClose} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}