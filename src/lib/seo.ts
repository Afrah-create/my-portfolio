import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path without domain, e.g. `/projects` */
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const pageTitle = `${title} | ${siteConfig.shortName}`;
  const canonicalPath = path === "/" ? "/" : path;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalPath,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      ...(siteConfig.twitterHandle
        ? { creator: `@${siteConfig.twitterHandle}` }
        : {}),
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.twitterHandle
      ? { creator: `@${siteConfig.twitterHandle}` }
      : {}),
  },
};
