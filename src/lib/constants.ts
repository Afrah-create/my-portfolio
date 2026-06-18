import { siteConfig } from "@/lib/site";

export const SITE_NAME = siteConfig.name;
export const SITE_DESCRIPTION = siteConfig.description;

export const CONTACT = {
  email: "fahadirashidawongo@gmail.com",
  github: "https://github.com/Afrah-create",
  whatsapp: "https://wa.me/256764922070",
  whatsappDisplay: "0764922070",
} as const;

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: CONTACT.github },
  { name: "WhatsApp", href: CONTACT.whatsapp },
  { name: "Email", href: `mailto:${CONTACT.email}` },
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

export const HIGHLIGHT_STATS = [
  { value: "25+", label: "Projects built" },
  { value: "10+", label: "Live demos" },
  { value: "15+", label: "Technologies" },
  { value: "Open", label: "To opportunities" },
] as const;

export const HERO_PROOF = "25+ projects · Makerere · Available for work";

export const HERO_STAT_CHIPS = [
  { value: "3+", label: "Years coding" },
  { value: "10+", label: "Live projects" },
] as const;

export const CURRENTLY_BUILDING = {
  label: "Currently building",
  project: "School Management System",
  href: "https://school-management-systme-web.vercel.app/login",
} as const;
