import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  className?: string;
  onDark?: boolean;
}

export function CheckList({ items, className, onDark = false }: CheckListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
              onDark ? "bg-white/10 text-aqua-400" : "bg-aqua-500/10 text-aqua-500",
            )}
          >
            <Check className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className={cn("text-base", onDark ? "text-[#C7D0F0]" : "text-ink-700")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
