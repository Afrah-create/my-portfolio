"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

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

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection delay={0.1}>
              <div>
                <p className="mb-6 leading-relaxed text-slate-400">
                  I&apos;m Awongo Fahadi Rashid, a Software Engineering student
                  at Makerere University with a passion for building clean,
                  efficient solutions to real-world problems. I enjoy working
                  across the full stack, from crafting intuitive user
                  interfaces to designing robust backend systems.
                </p>
                <p className="mb-10 leading-relaxed text-slate-400">
                  Currently, I&apos;m focused on deepening my expertise in
                  modern web technologies and software architecture. I&apos;m
                  driven by the challenge of solving complex problems and
                  creating applications that make a meaningful impact.
                </p>
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
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-surface-2)] bg-[var(--color-bg)] ring-1 ring-slate-800">
                <Image
                  src="/profile.jpg"
                  alt="Awongo Fahadi Rashid"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
