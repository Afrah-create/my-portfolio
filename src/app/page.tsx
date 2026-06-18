import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import AboutPreview from "@/components/home/AboutPreview";
import WhatIDo from "@/components/home/WhatIDo";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import TechStack from "@/components/home/TechStack";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <StatsBand />
      <AboutPreview />
      <WhatIDo />
      <ProjectsPreview />
      <TechStack />
      <Contact />
    </main>
  );
}
