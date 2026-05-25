"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20">
      <Container>
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              What I Do
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Expertise and capabilities
            </p>
          </div>

          {shouldReduceMotion ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} glowOnHover>
                  <span className="mb-4 block text-2xl text-cyan-400" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="mb-3 font-medium text-slate-100">
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
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card glowOnHover className="h-full">
                    <span
                      className="mb-4 block text-2xl text-cyan-400"
                      aria-hidden
                    >
                      {service.icon}
                    </span>
                    <h3 className="mb-3 font-medium text-slate-100">
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
