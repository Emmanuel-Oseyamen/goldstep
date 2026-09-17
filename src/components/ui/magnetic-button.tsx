"use client";

import {
  ButtonHTMLAttributes,
  ReactNode,
  useRef,
} from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

interface MagneticButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 0.18,
  className = "",
  ...buttonProps
}: MagneticButtonProps) {
  const buttonRef =
    useRef<HTMLButtonElement>(null);

  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    if (shouldReduceMotion || !buttonRef.current) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    buttonRef.current.style.setProperty(
      "--magnetic-x",
      `${x * strength}px`
    );

    buttonRef.current.style.setProperty(
      "--magnetic-y",
      `${y * strength}px`
    );
  }

  function handleMouseLeave() {
    if (!buttonRef.current) return;

    buttonRef.current.style.setProperty(
      "--magnetic-x",
      "0px"
    );

    buttonRef.current.style.setProperty(
      "--magnetic-y",
      "0px"
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      {...buttonProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{
        scale: shouldReduceMotion ? 1 : 0.97,
      }}
      style={{
        transform:
          "translate3d(var(--magnetic-x, 0px), var(--magnetic-y, 0px), 0)",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.button>
  );
}