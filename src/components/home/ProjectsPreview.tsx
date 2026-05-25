"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";

const featuredProjects = projects.slice(0, 3);

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

function ProjectPreviewCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card
      href={project.link}
      glowOnHover
      className="flex h-full flex-col overflow-hidden p-0"
    >
      {project.image && (
        shouldReduceMotion ? (
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
          <motion.div
            className="relative h-40 overflow-hidden rounded-t-[var(--radius-card)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={640}
              height={400}
              className="h-40 w-full object-cover"
            />
          </motion.div>
        )
      )}

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

        <h3 className="mb-2 font-semibold text-slate-100">{project.title}</h3>
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
    <section className="py-20">
      <Container>
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Check out my recent work
            </p>
          </div>

          {shouldReduceMotion ? (
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectPreviewCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <motion.div
              className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
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
