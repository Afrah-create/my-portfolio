"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const fullName = "Awongo Fahadi Rashid";

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
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
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
      duration: 0.8,
      delay: 2.2,
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
      delay: 2.8,
      duration: 0.6,
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
      duration: 1.2,
      delay: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
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

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="text-cyan-400 text-sm sm:text-base font-mono tracking-wider">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name with animated letters */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight lg:whitespace-nowrap"
            >
              {fullName.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariants}
                  className="inline-block hover:text-cyan-300 transition-colors duration-300 cursor-default"
                  style={{
                    color: "#22D3EE",
                    textShadow: "0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineering Student
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                at <span className="text-cyan-400 font-semibold">Makerere University</span>
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
                {["React", "Next.js", "TypeScript", "Node.js"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3 + i * 0.1 }}
                    className="px-3 py-1 text-xs sm:text-sm bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button href="/projects" variant="neon" className="group">
                <span className="flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
              <Button href="/contact" variant="neon">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="flex gap-4 justify-center lg:justify-start pt-6"
            >
              {[
                { icon: "github", label: "GitHub" },
                { icon: "linkedin", label: "LinkedIn" },
                { icon: "twitter", label: "Twitter" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-800/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-sm">🔗</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72">
                {/* Outer glow ring */}
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-30 blur-2xl"
                />
                
                {/* Rotating gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #22D3EE, #3B82F6, #22D3EE)",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900" />
                </motion.div>

                {/* Inner shadow ring */}
                <div
                  className="absolute inset-2 rounded-full border-2 border-cyan-400/50"
                  style={{
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.2)",
                  }}
                />

                {/* Profile image */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Awongo Fahadi Rashid"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                {/* Decorative dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + i * 0.1 }}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      top: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                      left: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                      boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}