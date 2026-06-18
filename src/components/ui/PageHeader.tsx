"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export interface PageHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  className = "",
}: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const inner = (
    <>
      <p className="mb-3 font-mono text-sm tracking-wider text-cyan-400">
        {label}
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </>
  );

  if (shouldReduceMotion) {
    return <div className={`text-center ${className}`}>{inner}</div>;
  }

  return (
    <motion.div
      className={`text-center ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeUp(0)}
    >
      {inner}
    </motion.div>
  );
}
