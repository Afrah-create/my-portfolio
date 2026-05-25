"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { SKILLS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Learn more about my journey">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </SectionTitle>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-1 order-1 lg:order-1"
              >
                <div className="relative mx-auto max-w-70 sm:max-w-80 lg:max-w-none">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700/50">
                    <Image
                      src="/profile.jpg"
                      alt="Awongo Fahadi Rashid"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10 opacity-60" />
                </div>

                {/* Quick Info Cards - Mobile/Tablet */}
                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 lg:hidden">
                  {[
                    { label: "Experience", value: "3+" },
                    { label: "Projects", value: "25+" },
                    { label: "Skills", value: "15+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-700/50"
                    >
                      <div className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Story Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-2 order-2 lg:order-2"
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    My Story
                  </h3>
                </motion.div>

                <div className="space-y-4 sm:space-y-5 text-gray-300 leading-relaxed">
                  <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg">
                    I&apos;m a passionate <span className="text-blue-400 font-semibold">software engineering student</span> at Makerere University with a deep love for creating beautiful, functional web applications. My journey into web development started several years ago, and I&apos;ve been hooked ever since.
                  </motion.p>

                  <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg">
                    I specialize in building modern, <span className="text-purple-400 font-semibold">full-stack web applications</span> using cutting-edge technologies like React, Next.js, and Node.js. I believe in writing clean, maintainable code and creating user experiences that are both intuitive and delightful.
                  </motion.p>

                  <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg">
                    Throughout my academic journey and personal projects, I&apos;ve had the opportunity to work on diverse applications—from <span className="text-pink-400 font-semibold">e-commerce platforms</span> to school management systems. Each project has taught me something new and helped me grow as a developer.
                  </motion.p>

                  <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg">
                    I&apos;m committed to continuous learning and staying up-to-date with the latest trends and best practices in web development. I enjoy tackling challenging problems and collaborating with teams to deliver high-quality solutions that make a real impact.
                  </motion.p>
                </div>

                {/* Quick Stats - Desktop Only */}
                <motion.div
                  variants={containerVariants}
                  className="hidden lg:grid grid-cols-3 gap-4 mt-8"
                >
                  {[
                    { label: "Years of Experience", value: "3+", color: "from-blue-400 to-cyan-400" },
                    { label: "Projects Completed", value: "25+", color: "from-purple-400 to-pink-400" },
                    { label: "Technologies Mastered", value: "15+", color: "from-pink-400 to-red-400" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className={`text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
            >
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl p-4 sm:p-5 text-center cursor-default overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Skill text */}
                  <span className="relative z-10 font-semibold text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Pulsing dot indicator */}
                  <motion.div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center bg-linear-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Education & Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-3 shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                      Bachelor of Science in Software Engineering
                    </h4>
                    <p className="text-xs sm:text-sm text-purple-400 font-semibold mb-2">
                      Makerere University
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Aug 2024 – Expected Jan 2029 · <span className="text-green-400 font-semibold">GPA: 4.0</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3 shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-1 shrink-0">•</span>
                        <span>Built 25+ production-ready projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-1 shrink-0">•</span>
                        <span>Mastered 15+ technologies & frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-1 shrink-0">•</span>
                        <span>Maintained 4.0 GPA throughout studies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}