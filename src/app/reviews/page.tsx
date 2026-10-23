import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/content/testimonials";
import { SITE } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Quote } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews",
  description: "Read what customers say about South West Mobile, your Weston-super-Mare mobile mechanic. Reviews on Google, Yell and Facebook.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]}
        eyebrow="REVIEWS"
        title="Customer Reviews"
        lead="Check out our reviews on Google, Yell and Facebook. You won't be disappointed."
      />

      <Section tone="white">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {SITE.reviewLinks.google && <Button variant="outline-navy" href={SITE.reviewLinks.google}>Google Reviews</Button>}
          {SITE.reviewLinks.yell && <Button variant="outline-navy" href={SITE.reviewLinks.yell}>Yell Reviews</Button>}
          {SITE.reviewLinks.facebook && <Button variant="outline-navy" href={SITE.reviewLinks.facebook}>Facebook Reviews</Button>}
          {!SITE.reviewLinks.google && !SITE.reviewLinks.yell && !SITE.reviewLinks.facebook && (
            <p className="text-ink-500">Review links coming soon. Find us on Google, Yell and Facebook.</p>
          )}
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 text-grape-500" aria-hidden="true" />
              <blockquote className="text-lg leading-relaxed text-ink-700 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-ink-900">{t.author}</p>
              {t.platform && <p className="text-sm text-ink-500">via {t.platform}</p>}
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }])} />
    </>
  );
}
