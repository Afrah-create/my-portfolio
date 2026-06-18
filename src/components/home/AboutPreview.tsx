"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const timeline = [
  { step: "01", label: "Student", detail: "Software Engineering @ Makerere" },
  { step: "02", label: "Builder", detail: "Full-stack web applications" },
  { step: "03", label: "Open", detail: "Available for opportunities" },
];

const bentoTiles = [
  {
    label: "Education",
    value: "Makerere University",
    span: "sm:col-span-2 sm:row-span-2",
    large: true,
  },
  { label: "Focus", value: "Full-Stack Development", span: "", large: false },
  { label: "Based in", value: "Uganda", span: "", large: false },
];

export default function AboutPreview() {
  return (
    <section className="section-divider section-surface relative overflow-hidden py-16 sm:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="01 — About"
            title="About Me"
            subtitle="Engineering student building production-ready web apps"
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <AnimatedSection delay={0.1}>
              <blockquote className="mb-8 border-l-2 border-accent/50 pl-5">
                <p className="font-display text-lg font-semibold leading-snug text-secondary sm:text-xl">
                  I build web applications that solve real problems — from
                  voting platforms to health education sites.
                </p>
              </blockquote>

              <p className="mb-4 leading-relaxed text-muted">
                I&apos;m Awongo Fahadi Rashid, a Software Engineering student
                at Makerere University. I work across the full stack, from
                intuitive interfaces to robust backend systems.
              </p>
              <p className="mb-8 leading-relaxed text-muted">
                I&apos;m driven by the challenge of solving complex problems
                and creating applications that make a meaningful impact.
              </p>

              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                {timeline.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        {item.label}
                      </p>
                      <p className="text-xs text-faint">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-accent-border bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors duration-200 hover:border-accent hover:bg-accent/20 sm:w-auto"
              >
                Learn more about me
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[minmax(5rem,auto)]">
                {bentoTiles.map((tile) => (
                  <div
                    key={tile.label}
                    className={`flex flex-col justify-end rounded-xl border border-border bg-background p-4 sm:p-5 ${tile.span}`}
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                      {tile.label}
                    </p>
                    <p
                      className={`font-medium text-secondary ${
                        tile.large
                          ? "font-display text-base sm:text-xl"
                          : "text-sm"
                      }`}
                    >
                      {tile.value}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
