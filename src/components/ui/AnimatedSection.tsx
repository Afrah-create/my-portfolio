"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface AnimatedSectionProps {
  /** Content revealed on scroll into view. */
  children: ReactNode;
  /** Delay in seconds before the enter animation starts. @default 0 */
  delay?: number;
  /** Additional classes on the wrapper element. */
  className?: string;
}

/**
 * Scroll-triggered fade-and-rise wrapper for page sections.
 * Respects `prefers-reduced-motion` by rendering children without animation.
 */
export function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
