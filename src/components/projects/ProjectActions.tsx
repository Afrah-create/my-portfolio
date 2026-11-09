import Link from "next/link";
import { Project } from "@/types/project";

type Variant = "card" | "featured";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path d="M12 5v10m0 0l-4-4m4 4l4-4M5 19h14" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const styles = {
  featured: {
    primary:
      "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:w-fit",
    secondary:
      "inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-border-strong px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-accent hover:text-accent",
    wrap: "flex flex-wrap items-center gap-4",
  },
  card: {
    primary:
      "inline-flex min-h-[44px] items-center gap-1 py-2 text-sm text-accent transition-colors hover:text-accent-hover",
    secondary:
      "inline-flex min-h-[44px] items-center gap-1 py-2 text-sm text-muted transition-colors hover:text-secondary",
    wrap: "mt-auto flex flex-wrap gap-4",
  },
} as const;

export default function ProjectActions({
  project,
  variant,
}: {
  project: Project;
  variant: Variant;
}) {
  const s = styles[variant];
  const download = project.download;
  const iconClass = variant === "featured" ? "h-4 w-4" : "ml-0.5 h-4 w-4";

  if (!download && !project.link && !project.github) return null;

  return (
    <div className={s.wrap}>
      {download && (
        <a
          href={download.href}
          download={download.filename}
          className={s.primary}
        >
          {download.label}
          <DownloadIcon className={iconClass} />
        </a>
      )}
      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={download ? s.secondary : s.primary}
        >
          {variant === "featured" ? "View Live Demo" : "Live Demo"}
          {variant === "card" && <ExternalIcon className={iconClass} />}
        </Link>
      )}
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={s.secondary}
        >
          GitHub
          {variant === "card" && <ExternalIcon className={iconClass} />}
        </Link>
      )}
    </div>
  );
}
