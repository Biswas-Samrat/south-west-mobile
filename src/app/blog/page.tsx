import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Workshop Updates & Car Advice Blog | South West Mobile",
  description:
    "Expert vehicle advice, real mobile repair case studies, DPF maintenance tips and diagnostic stories from our mobile mechanic in Weston-super-Mare.",
  path: "/blog",
});

export default function BlogPage() {
  const allPosts = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        eyebrow="BLOG"
        title="Workshop Updates and Car Advice"
        lead="What we've been fixing, what we've found, and honest advice so you don't get caught out."
        showCTAs={false}
      />

      <Section tone="white">
        <BlogIndexClient posts={allPosts} tags={allTags} />
      </Section>

      <CtaBand />
    </>
  );
}
