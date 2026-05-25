"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <Container>
        <AnimatedSection>
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-slate-100">
                About Me
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Get to know me better
              </p>
            </div>

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
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
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
                <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-surface-2)] bg-[var(--color-surface)]">
                  <Image
                    src="/profile.jpg"
                    alt="Awongo Fahadi Rashid"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-950/40 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
