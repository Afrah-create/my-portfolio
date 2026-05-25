/**
 * Site-wide config for metadata, Open Graph, and canonical URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourname.vercel.app).
 */
export const siteConfig = {
  name: "Awongo Fahadi Rashid",
  shortName: "Awongo Rashid",
  title: "Awongo Fahadi Rashid | Software Engineering Student",
  description:
    "Portfolio of Awongo Fahadi Rashid — Software Engineering student at Makerere University building full-stack web apps with React, Next.js, and TypeScript.",
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
