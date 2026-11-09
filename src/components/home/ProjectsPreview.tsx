"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  homeSecondaryProjects,
  homeSpotlightProject,
  projectPrimaryHref,
} from "@/data/projects";
import { Project } from "@/types/project";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectActions from "@/components/projects/ProjectActions";
import { staggerContainer, staggerItem } from "@/lib/motion";

function SpotlightProject({ project }: { project: Project }) {
  return (
    <Card glowOnHover className="group overflow-hidden p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {project.image && (
          <ProjectImage
            src={project.image}
            alt={`${project.title} preview`}
            variant="spotlight"
            tone={project.imageTone}
            badge={
              <span className="absolute left-4 top-4 z-10 rounded-full border border-accent-border bg-accent/10 px-3 py-1 font-mono text-xs text-accent backdrop-blur-sm">
                Spotlight
              </span>
            }
          />
        )}

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-tag-border bg-tag px-2.5 py-0.5 text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="font-display mb-3 text-2xl font-bold text-foreground lg:text-3xl">
            {project.title}
          </h3>
          <p className="mb-6 leading-relaxed text-muted">
            {project.description}
          </p>
          <ProjectActions project={project} variant="featured" />
          {project.download?.hint && (
            <p className="mt-3 text-xs text-faint">{project.download.hint}</p>
          )}
        </div>
      </div>
    </Card>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  const href = projectPrimaryHref(project);
  const downloadOnly = project.download && !project.link ? project.download : undefined;

  const body = (
    <>
      {project.image && (
        <ProjectImage
          src={project.image}
          alt={`${project.title} preview`}
          variant="card"
          tone={project.imageTone}
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-display font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-3 line-clamp-3 text-sm text-muted sm:line-clamp-2">
          {project.description}
        </p>
        <span className="mt-auto text-sm text-accent">
          {downloadOnly ? "Download APK →" : "View project →"}
        </span>
      </div>
    </>
  );

  if (downloadOnly) {
    return (
      <a
        href={downloadOnly.href}
        download={downloadOnly.filename}
        className="block h-full no-underline"
      >
        <Card glowOnHover className="group flex h-full flex-col overflow-hidden p-0">
          {body}
        </Card>
      </a>
    );
  }

  return (
    <Card
      href={href}
      glowOnHover
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      {body}
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
