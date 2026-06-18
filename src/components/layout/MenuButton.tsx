"use client";

import { type RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MenuButtonProps = {
  open: boolean;
  onClick: () => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

export default function MenuButton({ open, onClick, buttonRef }: MenuButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const topLine = open
    ? { rotate: 45, y: 8 }
    : { rotate: 0, y: 0 };
  const middleLine = open ? { opacity: 0 } : { opacity: 1 };
  const bottomLine = open
    ? { rotate: -45, y: -8 }
    : { rotate: 0, y: 0 };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeInOut" as const };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 md:hidden"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-navigation"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span className="relative block h-4 w-6" aria-hidden>
        {shouldReduceMotion ? (
          <span className="block text-lg leading-none">{open ? "×" : "☰"}</span>
        ) : (
          <>
            <motion.span
              animate={topLine}
              transition={transition}
              className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current"
            />
            <motion.span
              animate={middleLine}
              transition={transition}
              className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current"
            />
            <motion.span
              animate={bottomLine}
              transition={transition}
              className="absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-current"
            />
          </>
        )}
      </span>
    </button>
  );
}
