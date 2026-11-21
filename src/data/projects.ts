import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "12",
    title: "CucoCare",
    description:
      "An offline-first Android app for poultry farm management — batch records, age-based vaccination schedules, feed tracking, and farm record-keeping that works without a network connection.",
    techStack: ["Flutter", "Dart", "SQLite", "Android"],
    image: "/projects/hen_mark_mask.png",
    imageTone: "mark",
    download: {
      href: "/apk/cucocare.apk",
      label: "Download APK",
      filename: "CucoCare.apk",
      hint: "Android APK · 27.7 MB",
    },
  },
  {
    id: "13",
    title: "MAMSA Online Voting Platform",
    description:
      "An online voting platform for the Madi' Makerere Students Association — student registration, secure ballot casting, one vote per student, and automated results publishing when elections close.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://e-vote-mamsa.vercel.app/",
    image: "/projects/vote.png",
  },
  {
    id: "9",
    title: "Drate Health",
    description:
      "A maternal and family health NGO website delivering evidence-based health education through videos, blog articles, courses, downloadable resources, and donation support for mothers and caregivers across Africa.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://drate-health-website.vercel.app/",
    image: "/projects/drate.png",

  },
  {
    id: "10",
    title: "School Management System",
    description:
      "A web-based school management platform with secure authentication and role-based workflows for administrators, teachers, and staff to manage school operations online.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://schoolmanage.slimcybertech.com/",
    image: "/projects/SchoolManage.png",

  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
    link: "https://ecommerce-demo.example.com",
    github: "https://github.com/username/ecommerce-platform",
    image: "/projects/e-commerce.JPG",
  },
  {
    id: "2",
    title: "Bweranyangi Girls Group Website",
    description: "A responsive website for Bweranyangi Girls Group featuring information about the school, academics, admissions, news, gallery, and contact details.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://afrah-create.github.io/Bweranyangi-Girls-Group-G/",
    github: "https://github.com/Afrah-Create/Bweranyangi-Girls-Group-G",
    image: "/projects/school.png",
  },
  {
    id: "4",
    title: "Supply Chain Management System",
    description: "An end-to-end supply chain management system built with Laravel handling inventory, procurement, supplier management, order tracking, and role-based access control.",
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "REST APIs"],
    link: "https://afrah-create.github.io/Apex234/",
    github: "https://github.com/username/supply-chain-management",
    image: "/projects/supplychain.JPG",
  },
  {
    id: "5",
    title: "Julie Crafts",
    description: "An ecommerce platform for a craft business built with Next.js and Supabase, featuring a product catalog, shopping cart, and checkout system.",
    techStack: ["Next.js", "Supabase", "CSS3", "JavaScript"],
    link: "https://julie-craft-usersite.vercel.app/",
    github: "https://github.com/Justusmayanja/Julie-craft.git",
    image: "/projects/Julie-crafts.jpeg",
  },
  {
    id: "6",
    title: "Kiyindi Mukene",
    description: "An order management and delivery tracking system built with Next.js and Supabase with pay-on-delivery options.",
    techStack: ["Next.js", "Supabase", "JavaScript"],
    link: "https://kiyindi-mukene.vercel.app",
    github: "https://github.com/Afrah-create/Kiyindi-mukene.git",
    image: "/projects/Mukene.jpeg",
  },
  {
    id: "7",
    title: "Easton Hill Primary School Portal",
    description: "A school management portal with role-based access control for students, teachers, and admins built with Next.js and Supabase.",
    techStack: ["Next.js", "Supabase", "JavaScript", "RBAC"],
    link: "https://easton-hill-3ul5.vercel.app/",
    github: "https://github.com/Afrah-create/easton_hill.git",
    image: "/projects/Easton.jpeg",
  },
  {
    id: "11",
    title: "Slim Cyber Tech Company Website",
    description: "A responisve website for SlimCyber Techologies Limitied build with React",
    techStack: ["Next.js", "Tailwind", "React", "Framer motion"],
    link: "https://slimcybertech.com/",
    image: "/projects/slimcyber.png",
  },
  {
    id: "8",
    title: "Centre for Tomorrow",
    description: "An organization website dedicated to raising funds for children in need with donor support and outreach.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://www.centerfortomorrow.org",
    image: "/projects/cft.png",
  },
];

const PLACEHOLDER_PATTERNS = ["example.com", "username"];

/** Projects visitors can open or download (excludes demo placeholders). */
export function isLiveProject(project: Project): boolean {
  if (project.download) return true;
  if (!project.link) return false;
  return !PLACEHOLDER_PATTERNS.some((pattern) => project.link!.includes(pattern));
}

export function projectPrimaryHref(project: Project): string | undefined {
  return project.link ?? project.download?.href;
}

export const liveProjects = projects.filter(isLiveProject);

/** First project shown as homepage spotlight. */
export const homeSpotlightProject = liveProjects[0];

/** Secondary cards on the homepage projects section. */
export const homeSecondaryProjects = liveProjects.slice(1, 3);

