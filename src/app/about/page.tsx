"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

const timeline = [
  {
    year: "2024 — 2029",
    title: "BSc Software Engineering",
    org: "Makerere University",
    detail: "Expected Jan 2029 · GPA: 4.0",
  },
  {
    year: "Ongoing",
    title: "Full-Stack Development",
    org: "Personal & Academic Projects",
    detail: "Building production-ready web applications",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main-content" className="min-h-screen py-16 sm:py-20 lg:py-24">
      <Container>
        <PageHeader
          label="About"
          title={
            <>
              My <span className="text-cyan-400">Story</span>
            </>
          }
          subtitle="Learn more about my journey, skills, and what drives me as a developer."
          className="mb-16 sm:mb-20"
        />

        <div className="max-w-6xl mx-auto">
          {/* Profile + Story */}
          <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-16 sm:mb-20">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="relative mx-auto max-w-80 lg:max-w-none">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-700/60 ring-1 ring-slate-800">
                  <Image
                    src="/profile.jpg"
                    alt="Awongo Fahadi Rashid"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 320px, 33vw"
                  />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[var(--color-surface-2)] bg-[var(--color-surface)] p-3 text-center sm:p-4"
                  >
                    <div className="font-display text-xl font-bold text-cyan-400 sm:text-2xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer(0.08)}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="show"
              className="lg:col-span-2"
            >
              <motion.h2
                variants={staggerItem}
                className="font-display mb-6 text-2xl font-bold text-slate-50 sm:text-3xl"
              >
                Who I am
              </motion.h2>

              <div className="space-y-5 text-slate-400 leading-relaxed">
                {[
                  "I'm a passionate software engineering student at Makerere University with a deep love for creating beautiful, functional web applications. My journey into web development started several years ago, and I've been hooked ever since.",
                  "I specialize in building modern, full-stack web applications using cutting-edge technologies like React, Next.js, and Node.js. I believe in writing clean, maintainable code and creating user experiences that are both intuitive and delightful.",
                  "Throughout my academic journey and personal projects, I've worked on diverse applications—from e-commerce platforms to school management systems. Each project has taught me something new and helped me grow as a developer.",
                  "I'm committed to continuous learning and staying up-to-date with the latest trends and best practices in web development.",
                ].map((paragraph) => (
                  <motion.p
                    key={paragraph.slice(0, 40)}
                    variants={staggerItem}
                    className="text-sm sm:text-base md:text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.section
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="section-divider mb-16 pt-16 sm:mb-20 sm:pt-20"
          >
            <h2 className="font-display mb-8 text-center text-2xl font-bold text-slate-50 sm:text-3xl">
              Skills & Technologies
            </h2>

            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer(0.04)}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4"
            >
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  className="rounded-xl border border-[var(--color-surface-2)] bg-[var(--color-surface)] p-4 text-center transition-colors hover:border-cyan-800/60 hover:bg-cyan-500/5 sm:p-5"
                >
                  <span className="text-sm font-semibold text-slate-200 sm:text-base">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="section-divider pt-16 sm:pt-20"
          >
            <h2 className="font-display mb-10 text-center text-2xl font-bold text-slate-50 sm:text-3xl">
              Education & Journey
            </h2>

            <div className="relative mx-auto max-w-2xl">
              <div
                className="absolute left-4 top-2 bottom-2 w-px bg-slate-700 sm:left-5"
                aria-hidden
              />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-12 sm:pl-14"
                  >
                    <span
                      className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[var(--color-bg)] sm:left-3.5"
                      aria-hidden
                    />
                    <p className="mb-1 font-mono text-xs text-cyan-400">
                      {item.year}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-400">{item.org}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </Container>
    </main>
  );
}
