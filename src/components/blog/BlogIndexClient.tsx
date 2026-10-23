"use client";

import { useState } from "react";
import { TagFilter } from "@/components/blog/TagFilter";
import { PostGrid } from "@/components/blog/PostGrid";
import type { Post, PostTag } from "@/types";

interface BlogIndexClientProps {
  posts: Post[];
  tags: PostTag[];
}

export function BlogIndexClient({ posts, tags }: BlogIndexClientProps) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? posts
      : posts.filter((p) => p.tags.includes(activeTag as PostTag));

  return (
    <>
      <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
      <PostGrid posts={filtered} />
    </>
  );
}
