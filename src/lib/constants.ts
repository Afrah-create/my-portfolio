import { siteConfig } from "@/lib/site";

export const SITE_NAME = siteConfig.name;
export const SITE_DESCRIPTION = siteConfig.description;

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/yourusername" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", href: "https://twitter.com/yourusername" },
];

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
];
