import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 min-[390px]:px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
