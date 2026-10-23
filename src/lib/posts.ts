import { POSTS } from "@/content/posts";
import type { Post, PostTag } from "@/types";

/** Revalidation period in seconds for future ISR */
export const REVALIDATE = 3600;

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => {
    if (a.publishedAt && b.publishedAt) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
    if (a.publishedAt) return -1;
    if (b.publishedAt) return 1;
    return a.order - b.order;
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getLatestPosts(n: number): Post[] {
  return getAllPosts().slice(0, n);
}

export function getRelatedPosts(post: Post, n: number): Post[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const withSharedTags = others.filter((p) =>
    p.tags.some((t) => post.tags.includes(t)),
  );
  if (withSharedTags.length >= n) return withSharedTags.slice(0, n);
  const remaining = others.filter(
    (p) => !withSharedTags.some((wt) => wt.slug === p.slug),
  );
  return [...withSharedTags, ...remaining].slice(0, n);
}

export function getAllTags(): PostTag[] {
  const tags = new Set<PostTag>();
  POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
