import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my portfolio of web development projects",
};

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 text-center mb-16">
          <p className="text-cyan-400 text-sm sm:text-base font-mono tracking-wider mb-3">
            Explore my recent work and side projects
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A curated selection of products, platforms, and experiments that showcase my approach to problem-solving and modern web development.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              Download Resume
              <svg
                className="h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 5v10m0 0l-4-4m4 4l4-4M5 19h14" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col rounded-2xl border border-cyan-500/20 bg-gray-900/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
            >
              {project.image && (
                <div className="relative mb-5 overflow-hidden rounded-xl border border-cyan-500/20 bg-gray-950">
                  <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/15 via-transparent to-blue-500/15" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={800}
                    height={500}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200/80 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-cyan-500/10 text-cyan-100 px-3 py-1 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-100 font-medium inline-flex items-center text-sm transition-colors duration-200 hover:text-cyan-300"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 font-medium inline-flex items-center text-sm transition-colors duration-200 hover:text-white"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
