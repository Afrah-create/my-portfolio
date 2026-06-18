"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces with React and modern CSS.",
    project: "Drate Health",
    href: "https://drate-health-website.vercel.app/",
  },
  {
    number: "02",
    title: "Full-Stack & APIs",
    description:
      "End-to-end systems with secure auth, data layers, and deployment.",
    project: "MAMSA Online Voting",
    href: "https://e-vote-mamsa.vercel.app/",
  },
  {
    number: "03",
    title: "Product Engineering",
    description:
      "Role-based workflows and operational tools for real organizations.",
    project: "School Management System",
    href: "https://school-management-systme-web.vercel.app/login",
  },
];

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="02 — Services"
            title="What I Do"
            subtitle="Capabilities tied to real projects I've shipped"
            align="left"
          />

          {shouldReduceMotion ? (
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <ServiceRow key={service.number} service={service} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {services.map((service) => (
                <motion.div key={service.number} variants={staggerItem}>
                  <ServiceRow service={service} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

function ServiceRow({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-tag-border/50 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
      <span className="font-mono text-2xl font-bold text-accent/80">
        {service.number}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </div>
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 self-start rounded-full border border-tag-border/50 bg-tag/40 px-3 py-1.5 text-xs font-medium text-accent transition-colors group-hover:border-accent sm:self-center"
      >
        → {service.project}
      </a>
    </div>
  );
}
