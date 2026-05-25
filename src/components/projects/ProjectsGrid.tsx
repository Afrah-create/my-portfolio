"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { Card } from "@/components/ui/Card";

const allTechTags = Array.from(
  new Set(projects.flatMap((project) => project.techStack))
).sort();

function ProjectGridCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card glowOnHover className="flex h-full flex-col overflow-hidden p-0">
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
          <motion.div
            className="relative h-44 overflow-hidden rounded-t-[var(--radius-card)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
          </motion.div>
        ))}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-800 bg-cyan-950 px-2 py-0.5 text-[10px] text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-semibold text-slate-100">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-cyan-400 transition-colors hover:text-cyan-300"
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
              className="inline-flex items-center text-sm text-slate-400 transition-colors hover:text-slate-200"
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

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((project) => project.techStack.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      <div className="relative z-10 mb-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ${
            activeTag === null
              ? "bg-cyan-500 font-medium text-gray-950"
              : "border border-[var(--color-surface-2)] bg-[var(--color-surface)] text-slate-400 hover:border-cyan-700"
          }`}
        >
          All
        </button>
        {allTechTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ${
              activeTag === tag
                ? "bg-cyan-500 font-medium text-gray-950"
                : "border border-[var(--color-surface-2)] bg-[var(--color-surface)] text-slate-400 hover:border-cyan-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {shouldReduceMotion ? (
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <ProjectGridCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
