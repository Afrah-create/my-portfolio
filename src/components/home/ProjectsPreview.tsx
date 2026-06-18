"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const featuredProjects = projects.slice(0, 3);

function ProjectPreviewCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card
      href={project.link}
      glowOnHover
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      {project.image &&
        (shouldReduceMotion ? (
          <div className="relative h-40 overflow-hidden rounded-t-[var(--radius-card)]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={640}
              height={400}
              className="h-40 w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative h-40 overflow-hidden rounded-t-[var(--radius-card)]">
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
                className="h-40 w-full object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 flex items-end bg-slate-950/0 p-4 transition-colors duration-300 group-hover:bg-slate-950/60">
              <span className="translate-y-2 text-sm font-medium text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View project →
              </span>
            </div>
          </div>
        ))}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-800 bg-cyan-950 px-2 py-0.5 text-[10px] text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-display font-semibold text-slate-100">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-400">
          {project.description}
        </p>

        <span className="mt-auto text-sm text-cyan-400">View project →</span>
      </div>
    </Card>
  );
}

export default function ProjectsPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-divider section-surface py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="03 — Work"
            title="Featured Projects"
            subtitle="Check out my recent work"
          />

          {shouldReduceMotion ? (
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectPreviewCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <motion.div
              className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectPreviewCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="text-center">
            <Button href="/projects">View All Projects</Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
