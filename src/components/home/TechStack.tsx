"use client";

import { useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type CategoryTheme = {
  label: string;
  border: string;
  rowBg: string;
  accentBar: string;
  pillBorder: string;
  pillBg: string;
  pillText: string;
  dot: string;
  duration: string;
};

const techCategories = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "SQL"],
    theme: {
      label: "text-sky-400",
      border: "border-sky-900/50",
      rowBg: "bg-sky-950/20",
      accentBar: "bg-sky-400",
      pillBorder: "border-sky-800/45",
      pillBg: "bg-sky-950/35",
      pillText: "text-sky-200",
      dot: "bg-sky-400",
      duration: "16s",
    },
  },
  {
    category: "Frameworks",
    technologies: ["React", "Next.js", "Node.js", "Express"],
    theme: {
      label: "text-violet-400",
      border: "border-violet-900/50",
      rowBg: "bg-violet-950/20",
      accentBar: "bg-violet-400",
      pillBorder: "border-violet-800/45",
      pillBg: "bg-violet-950/35",
      pillText: "text-violet-200",
      dot: "bg-violet-400",
      duration: "22s",
    },
  },
  {
    category: "Styling",
    technologies: ["Tailwind CSS", "CSS3", "Responsive Design"],
    theme: {
      label: "text-emerald-400",
      border: "border-emerald-900/50",
      rowBg: "bg-emerald-950/20",
      accentBar: "bg-emerald-400",
      pillBorder: "border-emerald-800/45",
      pillBg: "bg-emerald-950/35",
      pillText: "text-emerald-200",
      dot: "bg-emerald-400",
      duration: "13s",
    },
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Firebase"],
    theme: {
      label: "text-amber-400",
      border: "border-amber-900/50",
      rowBg: "bg-amber-950/20",
      accentBar: "bg-amber-400",
      pillBorder: "border-amber-800/45",
      pillBg: "bg-amber-950/35",
      pillText: "text-amber-200",
      dot: "bg-amber-400",
      duration: "19s",
    },
  },
  {
    category: "Tools & DevOps",
    technologies: ["Git", "Docker", "GitHub", "VS Code"],
    theme: {
      label: "text-rose-400",
      border: "border-rose-900/50",
      rowBg: "bg-rose-950/20",
      accentBar: "bg-rose-400",
      pillBorder: "border-rose-800/45",
      pillBg: "bg-rose-950/35",
      pillText: "text-rose-200",
      dot: "bg-rose-400",
      duration: "15s",
    },
  },
] as const;

const allTechs = techCategories.flatMap((cat) => cat.technologies);
const duplicatedTechs = [...allTechs, ...allTechs];

const themeByTech = new Map(
  techCategories.flatMap((cat) =>
    cat.technologies.map((tech) => [tech, cat.theme] as const)
  )
);

function TechPill({
  tech,
  theme,
}: {
  tech: string;
  theme: CategoryTheme;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${theme.pillBorder} ${theme.pillBg} ${theme.pillText}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} aria-hidden />
      {tech}
    </span>
  );
}

function CategoryRow({
  group,
  animated,
}: {
  group: (typeof techCategories)[number];
  animated: boolean;
}) {
  const { theme } = group;
  const duplicated = [...group.technologies, ...group.technologies];

  return (
    <div
      className={`category-row group/row relative overflow-hidden rounded-lg border ${theme.border} ${theme.rowBg}`}
    >
      <span
        className={`absolute inset-y-0 left-0 w-0.5 ${theme.accentBar}`}
        aria-hidden
      />

      <div className="flex items-center gap-3 py-2 pl-3 pr-0 sm:gap-4 sm:py-2.5 sm:pl-4">
        <span
          className={`w-[5.25rem] shrink-0 font-mono text-[10px] font-semibold uppercase leading-tight tracking-wider sm:w-[6.5rem] sm:text-[11px] ${theme.label}`}
        >
          {group.category}
        </span>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          {animated ? (
            <div
              className="marquee-track-reverse flex w-max gap-2 py-0.5 sm:gap-2.5"
              style={{ animationDuration: theme.duration }}
            >
              {duplicated.map((tech, index) => (
                <TechPill
                  key={`${tech}-${index}`}
                  tech={tech}
                  theme={theme}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 py-0.5">
              {group.technologies.map((tech) => (
                <TechPill key={tech} tech={tech} theme={theme} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-divider overflow-hidden py-20">
      <Container>
        <SectionHeader
          label="04 — Stack"
          title="Tech Stack"
          subtitle="Technologies I work with"
        />

        {/* Top ticker — all techs, right to left, faster */}
        <div className="relative mb-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[var(--color-bg)] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[var(--color-bg)] to-transparent sm:w-20" />

          <div className="overflow-hidden">
            {shouldReduceMotion ? (
              <div className="flex flex-wrap justify-center gap-2">
                {techCategories.flatMap((cat) =>
                  cat.technologies.map((tech) => (
                    <TechPill key={tech} tech={tech} theme={cat.theme} />
                  ))
                )}
              </div>
            ) : (
              <div
                className="marquee-track flex w-max gap-2.5 sm:gap-3"
                style={{ animationDuration: "20s" }}
              >
                {duplicatedTechs.map((tech, index) => (
                  <TechPill
                    key={`${tech}-${index}`}
                    tech={tech}
                    theme={themeByTech.get(tech) ?? techCategories[0].theme}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grouped rows — each line scrolls at its own pace & color */}
        <div className="mx-auto flex max-w-4xl flex-col gap-2 sm:gap-2.5">
          {techCategories.map((group) => (
            <CategoryRow
              key={group.category}
              group={group}
              animated={!shouldReduceMotion}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
