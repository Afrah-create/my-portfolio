"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const techCategories = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "SQL"],
    colors: {
      text: "text-sky-300",
      border: "border-sky-400/40",
      bg: "bg-sky-500/10",
      glow: "bg-sky-500/20",
      dot: "bg-sky-400",
    },
  },
  {
    category: "Frameworks",
    technologies: ["React", "Next.js", "Node.js", "Express"],
    colors: {
      text: "text-violet-300",
      border: "border-violet-400/40",
      bg: "bg-violet-500/10",
      glow: "bg-violet-500/20",
      dot: "bg-violet-400",
    },
  },
  {
    category: "Styling",
    technologies: ["Tailwind CSS", "CSS3", "Responsive Design"],
    colors: {
      text: "text-emerald-300",
      border: "border-emerald-400/40",
      bg: "bg-emerald-500/10",
      glow: "bg-emerald-500/20",
      dot: "bg-emerald-400",
    },
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Firebase"],
    colors: {
      text: "text-amber-300",
      border: "border-amber-400/40",
      bg: "bg-amber-500/10",
      glow: "bg-amber-500/20",
      dot: "bg-amber-400",
    },
  },
  {
    category: "Tools & DevOps",
    technologies: ["Git", "Docker", "GitHub", "VS Code"],
    colors: {
      text: "text-slate-300",
      border: "border-slate-400/40",
      bg: "bg-slate-500/10",
      glow: "bg-slate-500/20",
      dot: "bg-slate-400",
    },
  },
];

// Flatten all technologies for the ticker
const allTechs = techCategories.flatMap((cat) =>
  cat.technologies.map((tech) => ({ tech, colors: cat.colors }))
);

// Duplicate multiple times for seamless loop
const duplicatedTechs = [...allTechs, ...allTechs, ...allTechs];

export default function TechStack() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900 overflow-hidden relative">
      {/* Softer gradient overlay - only at far edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionTitle subtitle="Technologies I work with">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </SectionTitle>
        </motion.div>

        {/* Continuous scrolling ticker - with padding for mobile */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12">
          <div className="overflow-hidden px-4 sm:px-0">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8"
              animate={{
                x: [0, -50 * allTechs.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Slower for better readability
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechs.map((item, index) => (
                <motion.div
                  key={index}
                  className="shrink-0"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [0.96, 1, 0.96],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border-2 ${item.colors.border} ${item.colors.bg} relative group transition-all duration-300`}
                  >
                    {/* Neon glow effect */}
                    <div
                      className={`absolute inset-0 rounded-lg ${item.colors.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                    />
                    
                    <motion.span
                      className={`relative z-10 font-semibold text-sm sm:text-base md:text-lg ${item.colors.text} whitespace-nowrap`}
                      animate={{
                        filter: [
                          "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
                          "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                          "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.15,
                      }}
                    >
                      {item.tech}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category breakdown with pulsing effect - Responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto mt-12 sm:mt-16 px-4 sm:px-0">
          {techCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="group bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300">
                <h3
                  className={`text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wide ${group.colors.text}`}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {group.technologies.map((tech, techIndex) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="relative"
                    >
                      <motion.div
                        className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                        whileHover={{ x: 4 }}
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          opacity: {
                            repeat: Infinity,
                            duration: 3,
                            delay: techIndex * 0.3,
                          },
                        }}
                      >
                        {/* Pulsing dot */}
                        <motion.span
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${group.colors.dot} shrink-0`}
                          animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 4px rgba(255,255,255,0.3)",
                              "0 0 12px rgba(255,255,255,0.8)",
                              "0 0 4px rgba(255,255,255,0.3)",
                            ],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: techIndex * 0.2,
                          }}
                        />
                        <span className="text-gray-300 text-xs sm:text-sm font-medium">
                          {tech}
                        </span>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Ambient background glow - more subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl sm:max-w-3xl md:max-w-4xl opacity-40 sm:opacity-50">
        <motion.div
          className="w-full h-full bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}