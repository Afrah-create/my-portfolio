import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

  const variantStyles = {
    primary:
      "bg-cyan-500 text-gray-950 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70",
    secondary:
      "border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-70",
    ghost:
      "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
