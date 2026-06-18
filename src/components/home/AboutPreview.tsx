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
  { label: "Education", value: "Makerere University", span: "col-span-2 row-span-2" },
  { label: "Focus", value: "Full-Stack Development", span: "col-span-1" },
  { label: "Based in", value: "Uganda", span: "col-span-1" },
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
              <blockquote className="mb-8 border-l-2 border-cyan-500/50 pl-5">
                <p className="font-display text-xl font-semibold leading-snug text-slate-200 sm:text-2xl">
                  I build web applications that solve real problems — from
                  voting platforms to health education sites.
                </p>
              </blockquote>

              <p className="mb-4 leading-relaxed text-slate-400">
                I&apos;m Awongo Fahadi Rashid, a Software Engineering student
                at Makerere University. I work across the full stack, from
                intuitive interfaces to robust backend systems.
              </p>
              <p className="mb-8 leading-relaxed text-slate-400">
                I&apos;m driven by the challenge of solving complex problems
                and creating applications that make a meaningful impact.
              </p>

              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
                {timeline.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-cyan-400">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20"
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
              <div className="grid grid-cols-2 gap-3 auto-rows-[minmax(5rem,auto)]">
                {bentoTiles.map((tile) => (
                  <div
                    key={tile.label}
                    className={`flex flex-col justify-end rounded-xl border border-[var(--color-surface-2)] bg-[var(--color-bg)] p-4 sm:p-5 ${tile.span}`}
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                      {tile.label}
                    </p>
                    <p
                      className={`font-medium text-slate-200 ${
                        tile.span.includes("row-span-2")
                          ? "font-display text-lg sm:text-xl"
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
