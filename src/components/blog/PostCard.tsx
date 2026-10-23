import Link from "next/link";
import type { Post } from "@/types";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card as="article" hover className="flex flex-col">
      <ImagePlaceholder
        aspect="aspect-[16/9]"
        caption={post.image?.src || `${post.slug}.webp`}
        className="mb-4"
      />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-center gap-2">
          {post.tags[0] && <Chip>{post.tags[0]}</Chip>}
          {post.source === "facebook" && (
            <span className="text-xs text-ink-500">Posted on Facebook</span>
          )}
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-ink-900 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-electric-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-ink-700 line-clamp-2">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-electric-600 transition-colors hover:text-aqua-500"
        >
          Read more →
        </Link>
      </div>
    </Card>
  );
}
