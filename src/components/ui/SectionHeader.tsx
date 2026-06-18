import { ReactNode } from "react";

export interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      <p className="mb-3 font-mono text-xs tracking-widest text-accent/90 sm:text-sm">
        {label}
      </p>
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base text-muted sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
