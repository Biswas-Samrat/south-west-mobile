import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TicketCardProps {
  children: ReactNode;
  className?: string;
}

export function TicketCard({ children, className }: TicketCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl discount-gradient p-6 md:p-10 lg:p-14",
        className,
      )}
    >
      {/* Notch left */}
      <div
        className="absolute top-1/2 left-0 h-8 w-4 -translate-y-1/2 rounded-r-full bg-navy-950"
        aria-hidden="true"
      />
      {/* Notch right */}
      <div
        className="absolute top-1/2 right-0 h-8 w-4 -translate-y-1/2 rounded-l-full bg-navy-950"
        aria-hidden="true"
      />
      {/* Dashed inner border */}
      <div
        className="pointer-events-none absolute inset-3 rounded-2xl border-2 border-dashed border-white/20"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
