import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "center" | "left";
}

/** @deprecated Prefer SectionHeader for new sections. Kept for backward compatibility. */
export default function SectionTitle({
  children,
  subtitle,
  label,
  className = "",
  align = "center",
}: SectionTitleProps) {
  if (label && typeof children === "string") {
    return (
      <SectionHeader
        label={label}
        title={children}
        subtitle={subtitle}
        align={align}
        className={className}
      />
    );
  }

  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted">{subtitle}</p>
      )}
    </div>
  );
}
