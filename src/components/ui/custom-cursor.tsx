"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't activate the custom cursor on touch/coarse-pointer devices.
    const mediaQuery = window.matchMedia(
      "(pointer: coarse)"
    );

    if (mediaQuery.matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest(
        "a, button, [data-cursor='interactive']"
      );

      if (interactive) {
        follower.classList.add("is-hovering");
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const relatedTarget = event.relatedTarget;

      if (
        relatedTarget instanceof Node &&
        target.closest(
          "a, button, [data-cursor='interactive']"
        )?.contains(relatedTarget)
      ) {
        return;
      }

      follower.classList.remove("is-hovering");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener(
      "pointerover",
      handlePointerOver
    );
    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />

      <motion.div
        ref={followerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50 transition-[width,height,background-color,border-color] duration-200"
      />
    </>
  );
}