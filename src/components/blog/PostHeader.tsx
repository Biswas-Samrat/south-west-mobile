import type { Post, PostBlock } from "@/types";
import { Chip } from "@/components/ui/Chip";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { formatDate } from "@/lib/format";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="mb-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <div className="mb-3 flex items-center gap-2">
        {post.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      <h1 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-ink-900 text-balance md:text-4xl lg:text-[44px] lg:leading-[50px]">
        {post.title}
      </h1>
      {post.publishedAt && (
        <p className="mt-3 text-sm text-ink-500">
          {formatDate(post.publishedAt)}
        </p>
      )}
    </div>
  );
}

interface PostBodyProps {
  body: PostBlock[];
  facebookUrl?: string;
}

export function PostBody({ body, facebookUrl }: PostBodyProps) {
  return (
    <div className="prose mx-auto">
      {body.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return <blockquote key={i}>{block.text}</blockquote>;
          case "timeline":
            return (
              <div key={i} className="my-6 space-y-4 border-l-2 border-aqua-500 pl-4">
                {block.items.map((item, j) => (
                  <div key={j}>
                    <p className="font-bold text-ink-900">{item.label}</p>
                    <p className="text-ink-700">{item.text}</p>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}

      {facebookUrl && (
        <p className="mt-8">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-electric-600 hover:text-aqua-500"
          >
            View this post on Facebook →
          </a>
        </p>
      )}
    </div>
  );
}
