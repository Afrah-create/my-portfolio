"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export interface CardProps {
  /** Card body content. */
  children: ReactNode;
  /** Additional classes merged onto the card surface. */
  className?: string;
  /** Applies a cyan glow via box-shadow on hover. @default false */
  glowOnHover?: boolean;
  /** When set, wraps the card in a Next.js link. */
  href?: string;
}

const baseClassName =
  "block bg-[var(--color-surface)] border border-[var(--color-surface-2)] rounded-[var(--radius-card)] p-6";

/**
 * Themed surface card with optional link wrapper and hover lift.
 * Respects `prefers-reduced-motion` by skipping Framer Motion hover effects.
 */
export function Card({
  children,
  className = "",
  glowOnHover = false,
  href,
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();
  const combinedClassName = `${baseClassName} ${href ? "cursor-pointer" : ""} ${className}`.trim();

  const hoverMotion = glowOnHover
    ? { y: -4, boxShadow: "0 0 24px rgba(34,211,238,0.15)" }
    : { y: -4 };

  const content = shouldReduceMotion ? (
    <div className={combinedClassName}>{children}</div>
  ) : (
    <motion.div
      className={combinedClassName}
      whileHover={hoverMotion}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
