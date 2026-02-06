import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with React and modern web technologies.",
  },
  {
    title: "Backend & APIs",
    description: "Creating robust server-side solutions and RESTful APIs that power scalable applications.",
  },
  {
    title: "Problem Solving",
    description: "Tackling complex challenges with clear thinking, clean code, and thoughtful architecture.",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle subtitle="Expertise and capabilities">What I Do</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
