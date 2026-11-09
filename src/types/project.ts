export interface ProjectDownload {
  href: string;
  label: string;
  filename: string;
  hint?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
  /** Transparent logo/mark shown on a dark brand tile. */
  imageTone?: "mark";
  download?: ProjectDownload;
}
