"use client";

import { useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const techCategories = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    technologies: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    category: "Styling",
    technologies: ["Tailwind CSS", "CSS3", "Responsive Design"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    technologies: ["Git", "Docker", "GitHub", "VS Code"],
  },
] as const;

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-tag-border/40 bg-tag/30 px-3 py-1 text-xs font-medium text-accent/90">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {tech}
    </span>
  );
}

function CategoryRow({
  group,
  animated,
  duration,
}: {
  group: (typeof techCategories)[number];
  animated: boolean;
  duration: string;
}) {
  const duplicated = [...group.technologies, ...group.technologies];

  return (
    <div className="category-row group/row relative overflow-hidden rounded-lg border border-border bg-surface">
      <span
        className="absolute inset-y-0 left-0 w-0.5 bg-accent/60"
        aria-hidden
      />

      <div className="flex items-center gap-3 py-2 pl-3 pr-0 sm:gap-4 sm:py-2.5 sm:pl-4">
        <span className="w-[5.25rem] shrink-0 font-mono text-[10px] font-semibold uppercase leading-tight tracking-wider text-accent/80 sm:w-[6.5rem] sm:text-[11px]">
          {group.category}
        </span>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          {animated ? (
            <div
              className="marquee-track-reverse flex w-max gap-2 py-0.5 sm:gap-2.5"
              style={{ animationDuration: duration }}
            >
              {duplicated.map((tech, index) => (
                <TechPill key={`${tech}-${index}`} tech={tech} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 py-0.5">
              {group.technologies.map((tech) => (
                <TechPill key={tech} tech={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const rowDurations = ["18s", "22s", "16s", "20s", "19s"];

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-divider overflow-hidden py-16 sm:py-20">
      <Container>
        <SectionHeader
          label="04 — Stack"
          title="Tech Stack"
          subtitle="Technologies I use on production projects"
          align="left"
        />

        <div className="mx-auto flex max-w-4xl flex-col gap-2 sm:gap-2.5">
          {techCategories.map((group, index) => (
            <CategoryRow
              key={group.category}
              group={group}
              animated={!shouldReduceMotion}
              duration={rowDurations[index] ?? "18s"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
