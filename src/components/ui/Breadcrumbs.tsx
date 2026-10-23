import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onDark?: boolean;
}

export function Breadcrumbs({ items, className, onDark = false }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("mb-4", className)}
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5",
                    onDark ? "text-ink-300" : "text-ink-500",
                  )}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className={cn(
                    "font-medium",
                    onDark ? "text-white" : "text-ink-900",
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:underline",
                    onDark
                      ? "text-ink-300 hover:text-white"
                      : "text-ink-500 hover:text-ink-900",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
