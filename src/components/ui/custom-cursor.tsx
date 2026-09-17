"use client";

import {
  useEffect,
  useRef,
} from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const cursorRef =
    useRef<HTMLDivElement>(null);

  const followerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia(
        "(hover: none), (pointer: coarse)"
      ).matches;

    if (isTouchDevice) {
      return;
    }

    const cursor =
      cursorRef.current;

    const follower =
      followerRef.current;

    if (!cursor || !follower) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;

    let followerX = -100;
    let followerY = -100;

    let frame = 0;

    function handlePointerMove(
      event: PointerEvent
    ) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    function animateFollower() {
      followerX +=
        (mouseX - followerX) * 0.14;

      followerY +=
        (mouseY - followerY) * 0.14;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      frame = requestAnimationFrame(
        animateFollower
      );
    }

    function handlePointerOver(
      event: PointerEvent
    ) {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-cursor='interactive']"
        )
      ) {
        follower.classList.add(
          "cursor-expanded"
        );
      }
    }

    function handlePointerOut(
      event: PointerEvent
    ) {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-cursor='interactive']"
        )
      ) {
        follower.classList.remove(
          "cursor-expanded"
        );
      }
    }

    document.addEventListener(
      "pointermove",
      handlePointerMove
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    frame = requestAnimationFrame(
      animateFollower
    );

    return () => {
      document.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block"
      />

      <div
        ref={followerRef}
        aria-hidden="true"
        className="goldstep-cursor-follower pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50 opacity-0 transition-[width,height,background-color,border-color,opacity] duration-300 lg:block"
      />
    </>
  );
}