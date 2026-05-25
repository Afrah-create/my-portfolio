import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "neon";
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
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

  const variantStyles = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed",
    secondary:
      "border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-50 disabled:opacity-70 disabled:cursor-not-allowed",
    neon:
      "border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] disabled:opacity-70 disabled:cursor-not-allowed",
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
