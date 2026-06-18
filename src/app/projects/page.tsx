import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore web development projects by Awongo Fahadi Rashid — e-commerce, school portals, Next.js apps, and full-stack builds.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <PageHeader
          label="Projects"
          title="Selected Work"
          subtitle="A curated selection of products, platforms, and experiments that showcase my approach to problem-solving and modern web development."
          align="left"
          className="mb-12"
        />

        <div className="mb-12 flex justify-start">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/20"
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

        <ProjectsGrid />
      </Container>
    </main>
  );
}
