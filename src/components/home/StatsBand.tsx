"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { HIGHLIGHT_STATS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function StatsBand() {
  const shouldReduceMotion = useReducedMotion();

  const grid = (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-surface-2)] bg-[var(--color-surface-2)] md:grid-cols-4">
      {HIGHLIGHT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center bg-[var(--color-bg)] px-4 py-6 text-center sm:py-8"
        >
          <span className="font-display text-2xl font-bold text-cyan-400 sm:text-3xl">
            {stat.value}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
            {stat.label}
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
