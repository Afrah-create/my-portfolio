"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const fullName = "Awongo Fahadi Rashid";
const [firstWord, ...nameRestParts] = fullName.split(" ");
const restOfName = nameRestParts.join(" ");

const headlineStyle = {
  color: "#22D3EE",
  textShadow:
    "0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)",
};

const firstWordContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.2,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

const restOfNameVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.45,
      ease: "easeOut" as const,
    },
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const buttonContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0,
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: <MailIcon />,
    external: false,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const MotionOrDiv = shouldReduceMotion ? "div" : motion.div;
  const MotionOrSpan = shouldReduceMotion ? "span" : motion.span;
  const MotionOrH1 = shouldReduceMotion ? "h1" : motion.h1;
  const MotionOrA = shouldReduceMotion ? "a" : motion.a;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {shouldReduceMotion ? (
          <>
            <div className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-cyan-500 opacity-15 blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-cyan-500 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: 2,
              }}
              className="absolute bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500 blur-3xl"
            />
          </>
        )}
      </div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 space-y-8 text-center lg:order-1 lg:text-left">
            <MotionOrDiv
              {...(!shouldReduceMotion && {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.4, delay: 0.05 },
              })}
              className="inline-block"
            >
              <span className="font-mono text-sm tracking-wider text-cyan-400 sm:text-base">
                👋 Hello, I&apos;m
              </span>
            </MotionOrDiv>

            <MotionOrH1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap">
              {shouldReduceMotion ? (
                <span style={headlineStyle}>{fullName}</span>
              ) : (
                <>
                  <motion.span
                    variants={firstWordContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline"
                  >
                    {firstWord.split("").map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={letterVariants}
                        className="inline-block cursor-default transition-colors duration-300 hover:text-cyan-300"
                        style={headlineStyle}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    variants={restOfNameVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block cursor-default transition-colors duration-300 hover:text-cyan-300"
                    style={headlineStyle}
                  >
                    {"\u00A0"}
                    {restOfName}
                  </motion.span>
                </>
              )}
            </MotionOrH1>

            <MotionOrDiv
              {...(!shouldReduceMotion && {
                variants: subtitleVariants,
                initial: "hidden",
                animate: "visible",
              })}
              className="space-y-3"
            >
              <p className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl md:text-3xl">
                Software Engineering Student
              </p>
              <p className="text-base text-gray-400 sm:text-lg md:text-xl">
                at{" "}
                <span className="font-semibold text-cyan-400">
                  Makerere University
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4 lg:justify-start">
                {["React", "Next.js", "TypeScript", "Node.js"].map((tech, i) => (
                  <MotionOrSpan
                    key={tech}
                    {...(!shouldReduceMotion && {
                      initial: { opacity: 0, scale: 0 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 1.05 + i * 0.05, duration: 0.2 },
                    })}
                    className="rounded-full border border-cyan-500/30 bg-gray-800/50 px-3 py-1 text-xs text-cyan-300 sm:text-sm"
                  >
                    {tech}
                  </MotionOrSpan>
                ))}
              </div>
            </MotionOrDiv>

            <MotionOrDiv
              {...(!shouldReduceMotion && {
                variants: buttonContainerVariants,
                initial: "hidden",
                animate: "visible",
              })}
              className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start"
            >
              <Button href="/projects" variant="neon" className="group">
                <span className="flex items-center gap-2">
                  View Projects
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Button>
              <Button href="/contact" variant="neon">
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </span>
              </Button>
            </MotionOrDiv>

            <MotionOrDiv
              {...(!shouldReduceMotion && {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.15, duration: 0.2 },
              })}
              className="flex justify-center gap-4 pt-6 lg:justify-start"
            >
              {socialLinks.map((social, i) => (
                <MotionOrA
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  {...(!shouldReduceMotion && {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1.15 + i * 0.05, duration: 0.2 },
                    whileHover: { y: -3, scale: 1.1 },
                  })}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-gray-800/50 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  {social.icon}
                </MotionOrA>
              ))}
            </MotionOrDiv>
          </div>

          <MotionOrDiv
            {...(!shouldReduceMotion && {
              variants: imageVariants,
              initial: "hidden",
              animate: "visible",
            })}
            className="order-1 flex justify-center lg:order-2"
          >
            {shouldReduceMotion ? (
              <div className="relative">
                <ProfileImageContent />
              </div>
            ) : (
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative"
              >
                <ProfileImageContent animated />
              </motion.div>
            )}
          </MotionOrDiv>
        </div>
      </Container>

      {shouldReduceMotion ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400/50 pt-2">
            <div className="h-2 w-1 rounded-full bg-cyan-400" />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400/50 pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function ProfileImageContent({ animated = false }: { animated?: boolean }) {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-72 lg:w-72">
      {animated ? (
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute -inset-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-30 blur-2xl"
        />
      ) : (
        <div className="absolute -inset-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-30 blur-2xl" />
      )}

      {animated ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #22D3EE, #3B82F6, #22D3EE)",
            padding: "3px",
          }}
        >
          <div className="h-full w-full rounded-full bg-gray-900" />
        </motion.div>
      ) : (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #22D3EE, #3B82F6, #22D3EE)",
            padding: "3px",
          }}
        >
          <div className="h-full w-full rounded-full bg-gray-900" />
        </div>
      )}

      <div
        className="absolute inset-2 rounded-full border-2 border-cyan-400/50"
        style={{
          boxShadow:
            "0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.2)",
        }}
      />

      <div className="absolute inset-2 overflow-hidden rounded-full">
        <Image
          src="/profile.jpg"
          alt="Awongo Fahadi Rashid"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          priority
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
        />
      </div>

      {[...Array(8)].map((_, i) =>
        animated ? (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.2 }}
            className="absolute h-2 w-2 rounded-full bg-cyan-400"
            style={{
              top: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
              left: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
            }}
          />
        ) : (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-400"
            style={{
              top: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
              left: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
            }}
          />
        )
      )}
    </div>
  );
}
