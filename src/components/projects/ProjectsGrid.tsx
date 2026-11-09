"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { liveProjects, projects } from "@/data/projects";
import { Project } from "@/types/project";
import { Card } from "@/components/ui/Card";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectActions from "@/components/projects/ProjectActions";
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
      className={`relative shrink-0 min-h-[44px] rounded-full px-4 py-2.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
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
  return (
    <Card glowOnHover className="group flex h-full flex-col overflow-hidden p-0">
      {project.image && (
        <ProjectImage
          src={project.image}
          alt={`${project.title} preview`}
          variant="card"
          tone={project.imageTone}
          showHoverHint
          hoverHint={project.download ? "Download APK →" : "View project →"}
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-tag-border bg-tag px-2 py-0.5 text-xs text-accent"
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

        <ProjectActions project={project} variant="card" />
        {project.download?.hint && (
          <p className="mt-1 text-xs text-faint">{project.download.hint}</p>
        )}
      </div>
    </Card>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Card glowOnHover className="group mb-12 overflow-hidden p-0 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {project.image && (
          <ProjectImage
            src={project.image}
            alt={`${project.title} preview`}
            variant="spotlight"
            tone={project.imageTone}
            badge={
              <span className="absolute left-4 top-4 z-10 rounded-full border border-accent-border bg-accent/10 px-3 py-1 font-mono text-xs text-accent backdrop-blur-sm">
                Featured
              </span>
            }
          />
        )}

        <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
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
          <ProjectActions project={project} variant="featured" />
          {project.download?.hint && (
            <p className="mt-3 text-xs text-faint">{project.download.hint}</p>
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
    if (!activeTag) return projects.slice(1);
    return projects.filter((project) => project.techStack.includes(activeTag));
  }, [activeTag]);

  return (
    <>
      {!activeTag && <FeaturedProject project={featuredProject} />}

      <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-start sm:overflow-visible sm:px-0">
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
