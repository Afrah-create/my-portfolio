"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  href?: string;
}

const baseClassName =
  "block bg-surface border border-border rounded-[var(--radius-card)] p-6";

export function Card({
  children,
  className = "",
  glowOnHover = false,
  href,
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();
  const combinedClassName = `${baseClassName} ${href ? "cursor-pointer" : ""} ${className}`.trim();

  const hoverMotion = glowOnHover
    ? { y: -4, boxShadow: "var(--card-glow)" }
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
