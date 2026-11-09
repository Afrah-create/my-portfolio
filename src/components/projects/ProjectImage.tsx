"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ProjectImageProps = {
  src: string;
  alt: string;
  variant?: "card" | "spotlight";
  tone?: "mark";
  priority?: boolean;
  badge?: ReactNode;
  showHoverHint?: boolean;
  hoverHint?: string;
};

const frameStyles = {
  card: "aspect-[3/2] rounded-t-[var(--radius-card)]",
  spotlight: "aspect-[3/2] sm:aspect-[16/10] lg:aspect-[4/3]",
};

export default function ProjectImage({
  src,
  alt,
  variant = "card",
  tone,
  priority = false,
  badge,
  showHoverHint = false,
  hoverHint = "View project →",
}: ProjectImageProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMark = tone === "mark";

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={
        isMark
          ? "object-contain object-center p-10 sm:p-14"
          : "object-contain object-center p-3 sm:p-4"
      }
      sizes={
        variant === "spotlight"
          ? "(max-width: 1024px) 100vw, 50vw"
          : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
    />
  );

  return (
    <div
      className={`group/image relative w-full overflow-hidden border-b border-border ${
        isMark ? "bg-[#2A241D]" : "bg-surface"
      } ${frameStyles[variant]}`}
    >
      {shouldReduceMotion ? (
        image
      ) : (
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.25 }}
        >
          {image}
        </motion.div>
      )}

      {badge}

      {showHoverHint && !shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 flex items-end bg-transparent p-4 transition-colors duration-300 group-hover/image:bg-overlay/40">
          <span className="translate-y-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">
            {hoverHint}
          </span>
        </div>
      )}
    </div>
  );
}
