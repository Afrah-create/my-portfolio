"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { liveProjects, projects } from "@/data/projects";
import { Project } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { springTransition } from "@/lib/motion";

const allTechTags = Array.from(
  new Set(projects.flatMap((project) => project.techStack))
).sort();

const featuredProject = liveProjects[0] ?? projects[0];

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-full px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        active
          ? "font-medium text-accent-foreground"
          : "border border-border bg-surface text-muted hover:border-accent-border"
      }`}
    >
      {active && !shouldReduceMotion && (
        <motion.span
          layoutId="project-filter-pill"
          className="absolute inset-0 rounded-full bg-accent"
          transition={springTransition}
          aria-hidden
        />
      )}
      {active && shouldReduceMotion && (
        <span
          className="absolute inset-0 rounded-full bg-accent"
          aria-hidden
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function ProjectGridCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card glowOnHover className="group flex h-full flex-col overflow-hidden p-0">
      {project.image &&
        (shouldReduceMotion ? (
          <div className="relative h-44 overflow-hidden rounded-t-[var(--radius-card)]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
          </div>
        ) : (
          <div className="relative h-44 overflow-hidden rounded-t-[var(--radius-card)]">
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={800}
                height={500}
                className="h-44 w-full object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 flex items-end bg-transparent p-4 transition-colors duration-300 group-hover:bg-overlay">
              <span className="translate-y-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View project →
              </span>
            </div>
          </div>
        ))}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-tag-border bg-tag px-2 py-0.5 text-[10px] text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-display font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent transition-colors hover:text-accent-hover"
          >
            Live Demo
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted transition-colors hover:text-secondary"
            >
              GitHub
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card glowOnHover className="group mb-12 overflow-hidden p-0 lg:mb-16">
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
              <motion.div className="h-full w-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            )}
            <span className="absolute left-4 top-4 rounded-full border border-accent-border bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              Featured
            </span>
          </div>
        )}

        <div className="flex flex-col justify-center p-8 lg:p-10">
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
          <h2 className="font-display mb-3 text-2xl font-bold text-foreground lg:text-3xl">
            {project.title}
          </h2>
          <p className="mb-6 leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              View Live Demo
            </Link>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-border-strong px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const rest = projects.slice(1);
    if (!activeTag) return rest;
    return rest.filter((project) => project.techStack.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      {!activeTag && <FeaturedProject project={featuredProject} />}

      <div className="mb-10 flex flex-wrap justify-start gap-2">
        <FilterPill active={activeTag === null} onClick={() => setActiveTag(null)}>
          All
        </FilterPill>
        {allTechTags.map((tag) => (
          <FilterPill
            key={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </FilterPill>
        ))}
      </div>

      {shouldReduceMotion ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <ProjectGridCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectGridCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
