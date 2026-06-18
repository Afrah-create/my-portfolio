import { ReactNode } from "react";

export interface PageHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export default function PageHeader({
  label,
  title,
  subtitle,
  className = "",
  align = "center",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleClass =
    align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl";

  return (
    <div className={`${alignClass} ${className}`}>
      <p className="mb-3 font-mono text-sm tracking-wider text-accent">
        {label}
      </p>
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-5 text-base text-muted sm:text-lg ${subtitleClass}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
