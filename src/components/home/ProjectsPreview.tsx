"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  homeSecondaryProjects,
  homeSpotlightProject,
} from "@/data/projects";
import { Project } from "@/types/project";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

function SpotlightProject({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card glowOnHover className="group overflow-hidden p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {project.image && (
          <div className="relative h-56 overflow-hidden lg:h-auto lg:min-h-[320px]">
            {shouldReduceMotion ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            )}
            <span className="absolute left-4 top-4 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-400">
              Spotlight
            </span>
          </div>
        )}

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-800 bg-cyan-950 px-2.5 py-0.5 text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="font-display mb-3 text-2xl font-bold text-slate-50 lg:text-3xl">
            {project.title}
          </h3>
          <p className="mb-6 leading-relaxed text-slate-400">
            {project.description}
          </p>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-400"
          >
            View live project →
          </Link>
        </div>
      </div>
    </Card>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card
      href={project.link}
      glowOnHover
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      {project.image &&
        (shouldReduceMotion ? (
          <div className="relative h-36 overflow-hidden rounded-t-[var(--radius-card)]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={640}
              height={400}
              className="h-36 w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative h-36 overflow-hidden rounded-t-[var(--radius-card)]">
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={640}
                height={400}
                className="h-36 w-full object-cover"
              />
            </motion.div>
          </div>
        ))}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-display font-semibold text-slate-100">
          {project.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-slate-400">
          {project.description}
        </p>
        <span className="mt-auto text-sm text-cyan-400">View project →</span>
      </div>
    </Card>
  );
}

export default function ProjectsPreview() {
  const shouldReduceMotion = useReducedMotion();
  const spotlight = homeSpotlightProject;
  const secondary = homeSecondaryProjects;

  if (!spotlight) return null;

  return (
    <section className="section-divider section-surface py-16 sm:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="03 — Work"
            title="Featured Projects"
            subtitle="Live products and platforms — no placeholders"
          />

          <div className="mb-8">
            <SpotlightProject project={spotlight} />
          </div>

          {secondary.length > 0 &&
            (shouldReduceMotion ? (
              <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {secondary.map((project) => (
                  <SecondaryProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <motion.div
                className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {secondary.map((project) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <SecondaryProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ))}

          <div className="text-center">
            <Button href="/projects">View All Projects</Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
