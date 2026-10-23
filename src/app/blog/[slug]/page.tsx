import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui";
import { PostHeader, PostBody } from "@/components/blog/PostHeader";
import { PostGrid } from "@/components/blog/PostGrid";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogPostSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 155),
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  return (
    <>
      <Section tone="white" className="pt-8 md:pt-12">
        <PostHeader post={post} />
        <div className="mx-auto max-w-3xl">
          {post.image && (
            <ImagePlaceholder aspect="aspect-[16/9]" caption={post.image.src} className="mb-8" />
          )}
          {!post.image && (
            <ImagePlaceholder aspect="aspect-[16/9]" caption={`${post.slug}.webp`} className="mb-8" />
          )}
          <PostBody body={post.body} facebookUrl={post.facebookUrl} />
        </div>
      </Section>

      <CtaBand />

      {related.length > 0 && (
        <Section tone="mist">
          <SectionHeading title="Related posts" />
          <PostGrid posts={related} />
        </Section>
      )}

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])} />
      <JsonLd data={blogPostSchema(post)} />
    </>
  );
}
