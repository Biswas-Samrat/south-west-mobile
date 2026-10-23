"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SERVICE_SUB_NAV } from "@/content/navigation";

export function ServiceSubNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur-md xl:top-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex gap-1 overflow-x-auto py-2 scrollbar-none"
          aria-label="Service pages"
        >
          {SERVICE_SUB_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                pathname === item.href
                  ? "bg-white text-navy-900 shadow-card"
                  : "text-white/75 hover:bg-white/10 hover:text-white",
              )}
              {...(pathname === item.href ? { "aria-current": "page" as const } : {})}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
