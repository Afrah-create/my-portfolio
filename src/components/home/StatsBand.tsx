"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { HIGHLIGHT_STATS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

function statLabel(label: string) {
  if (label === "To opportunities") {
    return (
      <>
        <span className="sm:hidden">Opportunities</span>
        <span className="hidden sm:inline">{label}</span>
      </>
    );
  }
  return label;
}

export default function StatsBand() {
  const shouldReduceMotion = useReducedMotion();

  const grid = (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-surface-elevated md:grid-cols-4">
      {HIGHLIGHT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center bg-background px-3 py-5 text-center sm:px-4 sm:py-8"
        >
          <span className="font-display text-xl font-bold text-accent max-[380px]:text-lg sm:text-2xl md:text-3xl">
            {stat.value}
          </span>
          <span className="mt-1 font-mono text-[11px] uppercase leading-tight tracking-wider text-faint sm:text-xs">
            {statLabel(stat.label)}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section-divider py-12 sm:py-14">
      <Container>
        {shouldReduceMotion ? (
          grid
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp(0)}
          >
            {grid}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
