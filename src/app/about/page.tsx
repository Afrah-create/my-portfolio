"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProfilePortrait from "@/components/ui/ProfilePortrait";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SkillsMarquee from "@/components/about/SkillsMarquee";
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
              My <span className="text-accent">Story</span>
            </>
          }
          subtitle="Learn more about my journey, skills, and what drives me as a developer."
          align="left"
          className="mb-10 sm:mb-16 md:mb-20"
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
              <ProfilePortrait variant="about" priority className="lg:max-w-none" />

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-surface p-3 text-center sm:p-4"
                  >
                    <div className="font-display text-xl font-bold text-accent sm:text-2xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="mt-1 px-1 text-xs font-medium uppercase leading-tight tracking-wide text-faint">
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
                className="font-display mb-6 text-2xl font-bold text-foreground sm:text-3xl"
              >
                Who I am
              </motion.h2>

              <blockquote className="mb-6 border-l-2 border-accent-border pl-4">
                <motion.p
                  variants={staggerItem}
                  className="font-display text-lg font-medium leading-snug text-secondary sm:text-xl"
                >
                  I build web applications that solve real problems — from
                  voting platforms to health education sites.
                </motion.p>
              </blockquote>

              <div className="space-y-5 text-muted leading-relaxed">
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
            <h2 className="font-display mb-8 text-left text-2xl font-bold text-foreground sm:text-3xl">
              Skills & Technologies
            </h2>

            <SkillsMarquee />

            <p className="sr-only">{SKILLS.join(", ")}</p>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="section-divider pt-16 sm:pt-20"
          >
            <h2 className="font-display mb-10 text-left text-2xl font-bold text-foreground sm:text-3xl">
              Education & Journey
            </h2>

            <div className="relative mx-auto max-w-2xl">
              <div
                className="absolute left-4 top-2 bottom-2 w-px bg-border-strong sm:left-5"
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
                      className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:left-3.5"
                      aria-hidden
                    />
                    <p className="mb-1 font-mono text-xs text-accent">
                      {item.year}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-muted">{item.org}</p>
                    <p className="mt-1 text-sm text-faint">{item.detail}</p>
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
