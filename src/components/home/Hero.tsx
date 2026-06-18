"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ProfilePortrait from "@/components/ui/ProfilePortrait";
import {
  CURRENTLY_BUILDING,
  HERO_PROOF,
  HERO_STAT_CHIPS,
} from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

const fullName = "Awongo Fahadi Rashid";
const [accentWord, ...nameRestParts] = fullName.split(" ");
const restOfName = nameRestParts.join(" ");

const roles = [
  "Software Engineering Student at Makerere University",
  "Full-Stack Developer",
  "Problem Solver",
];

function RotatingRole({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="text-base font-normal leading-snug text-muted sm:text-lg lg:text-xl">
        {roles[0]}
      </p>
    );
  }

  return (
    <div className="relative min-h-[3.5rem] sm:min-h-[2rem] sm:h-8 sm:overflow-hidden lg:h-9">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-base font-normal leading-snug text-muted sm:text-lg lg:text-xl"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function ScrollCue() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      aria-hidden
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
        Scroll
      </span>
      <motion.svg
        className="h-5 w-5 text-accent/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </motion.div>
  );
}

const headlineClass =
  "font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground max-[380px]:text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl";

function HeroContent({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const nameMotion = fadeUp(0);
  const roleMotion = fadeUp(0.15);
  const bodyMotion = fadeUp(0.3);
  const chipsMotion = fadeUp(0.4);

  const chips = (
    <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
      {HERO_STAT_CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5"
        >
          <span className="font-display text-sm font-bold text-accent">
            {chip.value}
          </span>
          <span className="text-xs text-faint">{chip.label}</span>
        </span>
      ))}
    </div>
  );

  const ctas = (
    <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start">
      <HeroPrimaryButton href="/projects">View Projects</HeroPrimaryButton>
      <HeroSecondaryButton href="/#contact">Contact Me</HeroSecondaryButton>
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <>
        <div className="mx-auto mb-5 h-[3px] w-10 rounded-full bg-accent lg:mx-0" />
        <h1 className={headlineClass}>
          <span className="text-accent">{accentWord}</span> {restOfName}
        </h1>
        <RotatingRole shouldReduceMotion />
        <p className="font-mono text-xs tracking-wide text-faint sm:text-sm">
          {HERO_PROOF}
        </p>
        <p className="mx-auto max-w-lg text-base leading-relaxed text-muted lg:mx-0">
          Building clean, full-stack web experiences with React, Next.js, and
          modern TypeScript tooling.
        </p>
        {chips}
        {ctas}
      </>
    );
  }

  return (
    <>
      <motion.div variants={nameMotion} initial="hidden" animate="visible">
        <div className="mx-auto mb-5 h-[3px] w-10 rounded-full bg-accent lg:mx-0" />
        <h1 className={headlineClass}>
          <span className="text-accent">{accentWord}</span> {restOfName}
        </h1>
      </motion.div>
      <motion.div variants={roleMotion} initial="hidden" animate="visible">
        <RotatingRole shouldReduceMotion={false} />
      </motion.div>
      <motion.p
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
        className="font-mono text-xs tracking-wide text-faint sm:text-sm"
      >
        {HERO_PROOF}
      </motion.p>
      <motion.p
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-lg text-base leading-relaxed text-muted lg:mx-0"
      >
        Building clean, full-stack web experiences with React, Next.js, and
        modern TypeScript tooling.
      </motion.p>
      <motion.div
        variants={chipsMotion}
        initial="hidden"
        animate="visible"
      >
        {chips}
      </motion.div>
      <motion.div
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
      >
        {ctas}
      </motion.div>
    </>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const imageX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const imageMotion = fadeUp(0.2, 0.6);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="dot-grid relative flex min-h-[calc(100dvh-env(safe-area-inset-top))] items-center overflow-hidden bg-background py-16 sm:min-h-screen sm:py-24 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.62fr] lg:gap-16">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <HeroContent shouldReduceMotion={!!shouldReduceMotion} />
          </div>

          <div className="w-full pb-4 lg:pb-0">
            <div className="relative mx-auto max-w-[15rem] sm:max-w-[17rem] lg:mx-0 lg:max-w-none">
              {shouldReduceMotion ? (
                <ProfilePortrait variant="hero" priority />
              ) : (
                <motion.div
                  variants={imageMotion}
                  initial="hidden"
                  animate="visible"
                  style={{ x: imageX, y: imageY }}
                >
                  <ProfilePortrait variant="hero" priority />
                </motion.div>
              )}

              <Link
                href={CURRENTLY_BUILDING.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 left-1/2 z-10 flex max-w-[calc(100%+1rem)] -translate-x-1/2 flex-col items-center gap-0.5 rounded-full border border-accent-border bg-background/95 px-3 py-2 text-center shadow-lg backdrop-blur-sm transition-colors hover:border-accent sm:max-w-none sm:flex-row sm:gap-2 sm:px-4 lg:left-auto lg:translate-x-0 lg:-right-4"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[11px] text-muted sm:text-xs">
                  <span className="sm:hidden">Building</span>
                  <span className="hidden sm:inline">
                    {CURRENTLY_BUILDING.label}
                  </span>
                </span>
                <span className="text-[11px] font-medium leading-tight text-accent sm:text-xs">
                  {CURRENTLY_BUILDING.project}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      {!shouldReduceMotion && <ScrollCue />}
    </section>
  );
}

const buttonBaseClass =
  "inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:py-3";

function HeroPrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBaseClass} bg-accent font-semibold text-accent-foreground hover:bg-accent-hover`}
    >
      {children}
    </Link>
  );
}

function HeroSecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBaseClass} border border-border-strong text-secondary hover:border-accent hover:text-accent`}
    >
      {children}
    </Link>
  );
}
