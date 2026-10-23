import { cn } from "@/lib/utils";

interface StatTileProps {
  value: string;
  label: string;
  className?: string;
}

export function StatTile({ value, label, className }: StatTileProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="font-display text-3xl font-extrabold text-ink-900 md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-ink-500">{label}</p>
      <div className="mx-auto mt-2 h-0.5 w-10 brand-swoosh-gradient rounded-full" aria-hidden="true" />
    </div>
  );
}
