import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { SKILLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn more about me, my skills, and experience",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle subtitle="Learn more about my journey">About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m a full-stack developer with a passion for creating beautiful, 
                functional web applications. My journey into web development started 
                several years ago, and I&apos;ve been hooked ever since.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge 
                technologies. I believe in writing clean, maintainable code and creating 
                user experiences that are both intuitive and delightful.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work on diverse projects, 
                from small business websites to large-scale enterprise applications. Each 
                project has taught me something new and helped me grow as a developer.
              </p>
              <p>
                I&apos;m committed to continuous learning and staying up-to-date with the latest 
                trends and best practices in web development. I enjoy tackling challenging 
                problems and collaborating with teams to deliver high-quality solutions.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-gray-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
