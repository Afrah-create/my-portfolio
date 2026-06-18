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
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
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

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const imageX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const nameMotion = fadeUp(0);
  const roleMotion = fadeUp(0.15);
  const bodyMotion = fadeUp(0.3);
  const imageMotion = fadeUp(0.2, 0.6);

  return (
    <section
      className="dot-grid relative flex min-h-screen items-center overflow-hidden bg-gray-950 py-24 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.62fr] lg:gap-16">
          <div className="order-2 flex flex-col gap-6 text-center lg:order-1 lg:text-left">
            {shouldReduceMotion ? (
              <>
                <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-cyan-400 lg:mx-0" />
                <h1 className="font-display text-5xl font-black tracking-tight text-slate-50 lg:text-6xl">
                  <span className="text-cyan-400">{accentWord}</span> {restOfName}
                </h1>
                <RotatingRole shouldReduceMotion />
                <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-500 lg:mx-0">
                  Building clean, full-stack web experiences with React, Next.js,
                  and modern TypeScript tooling.
                </p>
                <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <HeroPrimaryButton href="/projects">View Projects</HeroPrimaryButton>
                  <HeroSecondaryButton href="/#contact">Contact Me</HeroSecondaryButton>
                </div>
              </>
            ) : (
              <>
                <motion.div
                  variants={nameMotion}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-cyan-400 lg:mx-0" />
                  <h1 className="font-display text-5xl font-black tracking-tight text-slate-50 lg:text-6xl">
                    <span className="text-cyan-400">{accentWord}</span>{" "}
                    {restOfName}
                  </h1>
                </motion.div>

                <motion.div
                  variants={roleMotion}
                  initial="hidden"
                  animate="visible"
                >
                  <RotatingRole shouldReduceMotion={false} />
                </motion.div>

                <motion.p
                  variants={bodyMotion}
                  initial="hidden"
                  animate="visible"
                  className="mx-auto max-w-lg text-base leading-relaxed text-slate-500 lg:mx-0"
                >
                  Building clean, full-stack web experiences with React, Next.js,
                  and modern TypeScript tooling.
                </motion.p>

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
            )}
          </div>

          {shouldReduceMotion ? (
            <div className="order-1 w-full lg:order-2">
              <ProfileImage />
            </div>
          ) : (
            <motion.div
              variants={imageMotion}
              initial="hidden"
              animate="visible"
              className="order-1 w-full lg:order-2"
              style={{ x: imageX, y: imageY }}
            >
              <ProfileImage />
            </motion.div>
          )}
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

function ProfileImage() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-700/60 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/profile.jpg"
            alt="Awongo Fahadi Rashid"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
        </div>
      </div>
      <figcaption className="sr-only">Portrait of Awongo Fahadi Rashid</figcaption>
    </figure>
  );
}
