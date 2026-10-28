import type { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Kept for compatibility with existing callers.
  hover?: boolean;
}

/** Static cards avoid dozens of viewport observers and touch-device animation work. */
export default function BaseCard({ children, className = "", hover = true }: BaseCardProps) {
  return (
    <div className={`card-surface p-8 md:p-10 ${hover ? "interactive-card" : ""} ${className}`}>
      {children}
    </div>
  );
}
