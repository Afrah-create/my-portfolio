"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const services = [
  {
    icon: "⟨/⟩",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with React and modern web technologies.",
  },
  {
    icon: "{ }",
    title: "Backend & APIs",
    description:
      "Creating robust server-side solutions and RESTful APIs that power scalable applications.",
  },
  {
    icon: "✦",
    title: "Problem Solving",
    description:
      "Tackling complex challenges with clear thinking, clean code, and thoughtful architecture.",
  },
];

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="02 — Services"
            title="What I Do"
            subtitle="Expertise and capabilities"
          />

          {shouldReduceMotion ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} glowOnHover className="h-full">
                  <span className="mb-4 block font-mono text-2xl text-cyan-400" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="mb-3 font-display font-semibold text-slate-100">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={staggerItem}>
                  <Card glowOnHover className="h-full">
                    <span
                      className="mb-4 block font-mono text-2xl text-cyan-400"
                      aria-hidden
                    >
                      {service.icon}
                    </span>
                    <h3 className="mb-3 font-display font-semibold text-slate-100">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
