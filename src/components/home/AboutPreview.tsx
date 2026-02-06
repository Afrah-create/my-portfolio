import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/15 rounded-full blur-3xl -ml-32 -mb-32" />
      
      <Container>
        <div className="relative z-10">
          <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm Awongo Fahadi Rashid, a Software Engineering student at Makerere University with a passion for building clean, efficient solutions to real-world problems. I enjoy working across the full stack, from crafting intuitive user interfaces to designing robust backend systems.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Currently, I'm focused on deepening my expertise in modern web technologies and software architecture. I'm driven by the challenge of solving complex problems and creating applications that make a meaningful impact.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-200 bg-cyan-50 px-6 py-3 font-medium text-cyan-900 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-100 hover:-translate-y-0.5 hover:shadow-md"
              >
                Learn more about me
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
