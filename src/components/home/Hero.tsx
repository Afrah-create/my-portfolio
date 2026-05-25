"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const fullName = "Awongo Fahadi Rashid";
const [accentWord, ...nameRestParts] = fullName.split(" ");
const restOfName = nameRestParts.join(" ");

const fadeUp = (delay: number, duration = 0.5) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: "easeOut" as const },
  },
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const nameMotion = fadeUp(0);
  const roleMotion = fadeUp(0.15);
  const bodyMotion = fadeUp(0.3);
  const imageMotion = fadeUp(0.2, 0.6);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 py-24 lg:py-32">
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.62fr] lg:gap-16">
          {/* Text column */}
          <div className="order-2 flex flex-col gap-6 text-center lg:order-1 lg:text-left">
            {shouldReduceMotion ? (
              <>
                <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-cyan-400 lg:mx-0" />
                <h1 className="text-5xl font-black tracking-tight text-slate-50 lg:text-6xl">
                  <span className="text-cyan-400">{accentWord}</span> {restOfName}
                </h1>
                <p className="text-lg font-normal text-slate-400 lg:text-xl">
                  Software Engineering Student at Makerere University
                </p>
                <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-500 lg:mx-0">
                  Building clean, full-stack web experiences with React, Next.js,
                  and modern TypeScript tooling.
                </p>
                <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <HeroPrimaryButton href="/projects">View Projects</HeroPrimaryButton>
                  <HeroSecondaryButton href="/contact">Contact Me</HeroSecondaryButton>
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
                  <h1 className="text-5xl font-black tracking-tight text-slate-50 lg:text-6xl">
                    <span className="text-cyan-400">{accentWord}</span> {restOfName}
                  </h1>
                </motion.div>

                <motion.p
                  variants={roleMotion}
                  initial="hidden"
                  animate="visible"
                  className="text-lg font-normal text-slate-400 lg:text-xl"
                >
                  Software Engineering Student at Makerere University
                </motion.p>

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
                  <HeroSecondaryButton href="/contact">Contact Me</HeroSecondaryButton>
                </motion.div>
              </>
            )}
          </div>

          {/* Image column */}
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
            >
              <ProfileImage />
            </motion.div>
          )}
        </div>
      </Container>
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
