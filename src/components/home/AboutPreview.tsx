"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  { label: "Education", value: "Makerere University" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "Based in", value: "Uganda" },
];

export default function AboutPreview() {
  return (
    <section className="section-divider section-surface relative overflow-hidden py-20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            label="01 — About"
            title="About Me"
            subtitle="Get to know me better"
          />

          <div className="mx-auto max-w-3xl">
            <AnimatedSection delay={0.1}>
              <p className="mb-6 text-center leading-relaxed text-slate-400 lg:text-left">
                I&apos;m Awongo Fahadi Rashid, a Software Engineering student
                at Makerere University with a passion for building clean,
                efficient solutions to real-world problems. I enjoy working
                across the full stack, from crafting intuitive user interfaces
                to designing robust backend systems.
              </p>
              <p className="mb-10 text-center leading-relaxed text-slate-400 lg:text-left">
                Currently, I&apos;m focused on deepening my expertise in modern
                web technologies and software architecture. I&apos;m driven by
                the challenge of solving complex problems and creating
                applications that make a meaningful impact.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--color-surface-2)] bg-[var(--color-bg)] px-4 py-3 text-center sm:text-left"
                  >
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
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
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
