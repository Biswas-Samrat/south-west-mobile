import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onDark?: boolean;
  hover?: boolean;
  as?: "div" | "article";
}

export function Card({
  children,
  className,
  id,
  onDark = false,
  hover = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-2xl p-6",
        onDark
          ? "border border-white/10 bg-navy-800/60"
          : "border border-mist-200 bg-white shadow-card",
        hover &&
          "transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
