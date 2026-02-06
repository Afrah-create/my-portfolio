import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle subtitle="Check out my recent work">Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col rounded-xl border border-cyan-100/60 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              {project.image && (
                <div className="relative mb-5 overflow-hidden rounded-lg border border-cyan-100/70 bg-linear-to-br from-cyan-50 via-white to-cyan-100">
                  <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-cyan-400/10" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={640}
                    height={400}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium inline-flex items-center text-sm transition-colors duration-200 hover:text-cyan-600"
                >
                  View Project
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
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/projects">View All Projects</Button>
        </div>
      </Container>
    </section>
  );
}
