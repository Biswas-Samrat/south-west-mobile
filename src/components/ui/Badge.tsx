import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bluelight" | "signal";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        variant === "default" && "bg-aqua-500/10 text-aqua-500",
        variant === "bluelight" && "bg-bluelight-600 text-white",
        variant === "signal" && "bg-signal-100 text-signal-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
