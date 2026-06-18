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
      <p className="text-lg font-normal text-slate-400 lg:text-xl">{roles[0]}</p>
    );
  }

  return (
    <div className="relative h-8 overflow-hidden lg:h-9">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-lg font-normal text-slate-400 lg:text-xl"
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
      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
        Scroll
      </span>
      <motion.svg
        className="h-5 w-5 text-cyan-400/70"
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

function HeroContent({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const nameMotion = fadeUp(0);
  const roleMotion = fadeUp(0.15);
  const bodyMotion = fadeUp(0.3);
  const chipsMotion = fadeUp(0.4);

  const content = (
    <>
      <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-cyan-400 lg:mx-0" />
      <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-6xl xl:text-7xl">
        <span className="text-cyan-400">{accentWord}</span> {restOfName}
      </h1>
      <RotatingRole shouldReduceMotion={shouldReduceMotion} />
      <p className="font-mono text-xs tracking-wide text-slate-500 sm:text-sm">
        {HERO_PROOF}
      </p>
      <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-500 lg:mx-0">
        Building clean, full-stack web experiences with React, Next.js, and
        modern TypeScript tooling.
      </p>
      <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
        {HERO_STAT_CHIPS.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-2)] bg-[var(--color-surface)] px-3 py-1.5"
          >
            <span className="font-display text-sm font-bold text-cyan-400">
              {chip.value}
            </span>
            <span className="text-xs text-slate-500">{chip.label}</span>
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
        <HeroPrimaryButton href="/projects">View Projects</HeroPrimaryButton>
        <HeroSecondaryButton href="/#contact">Contact Me</HeroSecondaryButton>
      </div>
    </>
  );

  if (shouldReduceMotion) {
    return <>{content}</>;
  }

  return (
    <>
      <motion.div variants={nameMotion} initial="hidden" animate="visible">
        <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-cyan-400 lg:mx-0" />
        <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-6xl xl:text-7xl">
          <span className="text-cyan-400">{accentWord}</span> {restOfName}
        </h1>
      </motion.div>
      <motion.div variants={roleMotion} initial="hidden" animate="visible">
        <RotatingRole shouldReduceMotion={false} />
      </motion.div>
      <motion.p
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
        className="font-mono text-xs tracking-wide text-slate-500 sm:text-sm"
      >
        {HERO_PROOF}
      </motion.p>
      <motion.p
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-lg text-base leading-relaxed text-slate-500 lg:mx-0"
      >
        Building clean, full-stack web experiences with React, Next.js, and
        modern TypeScript tooling.
      </motion.p>
      <motion.div
        variants={chipsMotion}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-2 lg:justify-start"
      >
        {HERO_STAT_CHIPS.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-2)] bg-[var(--color-surface)] px-3 py-1.5"
          >
            <span className="font-display text-sm font-bold text-cyan-400">
              {chip.value}
            </span>
            <span className="text-xs text-slate-500">{chip.label}</span>
          </span>
        ))}
      </motion.div>
      <motion.div
        variants={bodyMotion}
        initial="hidden"
        animate="visible"
        className="mt-2 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
      >
        <HeroPrimaryButton href="/projects">View Projects</HeroPrimaryButton>
        <HeroSecondaryButton href="/#contact">Contact Me</HeroSecondaryButton>
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
      className="dot-grid relative flex min-h-screen items-center overflow-hidden bg-gray-950 py-24 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.62fr] lg:gap-16">
          <div className="order-2 flex flex-col gap-5 text-center lg:order-1 lg:text-left">
            <HeroContent shouldReduceMotion={!!shouldReduceMotion} />
          </div>

          <div className="order-1 w-full lg:order-2">
            <div className="relative">
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
                className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan-500/30 bg-[var(--color-bg)]/95 px-4 py-2 shadow-lg backdrop-blur-sm transition-colors hover:border-cyan-400/50 lg:left-auto lg:translate-x-0 lg:-right-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-xs text-slate-400">
                  {CURRENTLY_BUILDING.label}
                </span>
                <span className="text-xs font-medium text-cyan-400">
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
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

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
      className={`${buttonBaseClass} bg-cyan-500 font-semibold text-gray-950 hover:bg-cyan-400`}
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
      className={`${buttonBaseClass} border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400`}
    >
      {children}
    </Link>
  );
}
