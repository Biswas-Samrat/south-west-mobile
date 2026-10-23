"use client";

import { useState } from "react";
import type { PostTag } from "@/types";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: PostTag[];
  activeTag: string;
  onChange: (tag: string) => void;
}

export function TagFilter({ tags, activeTag, onChange }: TagFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          activeTag === "All"
            ? "bg-navy-900 text-white"
            : "bg-mist-100 text-ink-700 hover:bg-mist-200",
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            activeTag === tag
              ? "bg-navy-900 text-white"
              : "bg-mist-100 text-ink-700 hover:bg-mist-200",
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
