import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}

export function Chip({ children, className, onDark = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        onDark ? "bg-white/10 text-white" : "bg-mist-100 text-ink-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
