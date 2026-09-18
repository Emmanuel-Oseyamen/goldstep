"use client";

import {
  type ComponentPropsWithoutRef,
  useRef,
} from "react";
import { motion, type MotionProps } from "framer-motion";

type MagneticButtonProps =
  Omit<
    ComponentPropsWithoutRef<"button">,
    keyof MotionProps
  > &
    MotionProps & {
      strength?: number;
    };

export default function MagneticButton({
  children,
  strength = 0.18,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleMouseMove(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const button = buttonRef.current;

    if (!button) {
      onMouseMove?.(event);
      return;
    }

    const rect = button.getBoundingClientRect();

    const x =
      (event.clientX - rect.left - rect.width / 2) *
      strength;

    const y =
      (event.clientY - rect.top - rect.height / 2) *
      strength;

    button.style.setProperty(
      "--magnetic-x",
      `${x}px`
    );

    button.style.setProperty(
      "--magnetic-y",
      `${y}px`
    );

    onMouseMove?.(event);
  }

  function handleMouseLeave(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const button = buttonRef.current;

    if (button) {
      button.style.setProperty(
        "--magnetic-x",
        "0px"
      );

      button.style.setProperty(
        "--magnetic-y",
        "0px"
      );
    }

    onMouseLeave?.(event);
  }

  return (
    <motion.button
      ref={buttonRef}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      style={{
        ...(style as React.CSSProperties),
        transform:
          "translate3d(var(--magnetic-x, 0px), var(--magnetic-y, 0px), 0)",
      }}
    >
      {children}
    </motion.button>
  );
}