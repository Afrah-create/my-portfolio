import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import WhatIDo from "@/components/home/WhatIDo";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import TechStack from "@/components/home/TechStack";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutPreview />
      <WhatIDo />
      <ProjectsPreview />
      <TechStack />
      <ContactCTA />
    </main>
  );
}
