"use client";

import { useReducedMotion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

const midpoint = Math.ceil(SKILLS.length / 2);
const skillsRowForward = SKILLS.slice(0, midpoint);
const skillsRowReverse = SKILLS.slice(midpoint);

function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-secondary shadow-sm sm:px-5 sm:py-3">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {skill}
    </span>
  );
}

function SkillsMarqueeRow({
  skills,
  direction,
  animated,
  duration,
}: {
  skills: readonly string[];
  direction: "forward" | "reverse";
  animated: boolean;
  duration: string;
}) {
  const duplicated = [...skills, ...skills];
  const trackClass =
    direction === "forward" ? "marquee-track" : "marquee-track-reverse";

  return (
    <div className="category-row group/row relative overflow-hidden rounded-xl border border-border bg-surface/50 py-3 sm:py-3.5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent sm:w-16"
        aria-hidden
      />

      {animated ? (
        <div
          className={`${trackClass} flex w-max gap-3 px-1 sm:gap-4`}
          style={{ animationDuration: duration }}
        >
          {duplicated.map((skill, index) => (
            <SkillPill key={`${skill}-${index}`} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 px-4 sm:gap-4">
          {skills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const animated = !shouldReduceMotion;

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <SkillsMarqueeRow
        skills={skillsRowForward}
        direction="forward"
        animated={animated}
        duration="24s"
      />
      <SkillsMarqueeRow
        skills={skillsRowReverse}
        direction="reverse"
        animated={animated}
        duration="20s"
      />
    </div>
  );
}
