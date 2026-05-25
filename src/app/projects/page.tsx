import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my portfolio of web development projects",
};

export default function ProjectsPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 mb-16 text-center">
          <p className="mb-3 font-mono text-sm tracking-wider text-cyan-400 sm:text-base">
            Explore my recent work and side projects
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A curated selection of products, platforms, and experiments that
            showcase my approach to problem-solving and modern web development.
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

        <ProjectsGrid />
      </Container>
    </main>
  );
}
