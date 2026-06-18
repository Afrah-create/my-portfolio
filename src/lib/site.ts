/**
 * Site-wide config for metadata, Open Graph, and canonical URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourname.vercel.app).
 */
export const siteConfig = {
  name: "Awongo Fahadi Rashid",
  shortName: "Awongo Rashid",
  title: "Awongo Fahadi Rashid | Software Engineer",
  description:
    "Software engineer and full-stack developer portfolio featuring selected projects, technical skills, and professional background.",
  /** Copy used on the generated Open Graph image */
  og: {
    role: "Software Engineer · Full-Stack Developer",
    tagline:
      "I design and build dependable web applications with modern JavaScript, React, and Next.js.",
    affiliation: "Makerere University",
  },
  profileImagePath: "profile.jpg",
  /** Resolved base URL for metadataBase, sitemap, and OG absolute URLs */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "en_US",
  /** Twitter/X handle without @ — leave empty to omit creator tag */
  twitterHandle: "",
  keywords: [
    "Awongo Fahadi Rashid",
    "Software Engineer",
    "Makerere University",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
  ],
} as const;
