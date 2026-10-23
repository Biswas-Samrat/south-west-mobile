import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, SectionHeading, Card, ImagePlaceholder } from "@/components/ui";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ShieldCheck, Search, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Meet South West Mobile: a Weston-super-Mare mobile mechanic with over 15 years of experience, honest advice and a workshop for bigger jobs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
        eyebrow="ABOUT US"
        title="About South West Mobile"
        lead="Mobile mechanic with over 15 years of experience. We come to you."
      />

      <Section tone="white">
        <SectionHeading title="Our story" align="left" />
        <div className="max-w-3xl space-y-4 text-ink-700">
          <p>
            South West Mobile was built on a simple idea: skip the garage wait and let the
            mechanic come to you. Whether it&apos;s an unexpected issue or routine maintenance,
            we provide honest, reliable and professional service right at your home or workplace.
          </p>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title="What we stand for" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Search, title: "Honest", text: "We tell you what's actually wrong and never recommend work you don't need." },
            { icon: ShieldCheck, title: "Reliable", text: "Fully insured, on time, and we stand behind every job we do." },
            { icon: Wrench, title: "Professional", text: "Over 15 years of experience, quality parts, and proper diagnostics." },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-ink-900">{title}</h3>
              <p className="text-ink-700">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Mobile first, workshop when you need it" align="left" />
        <div className="max-w-3xl space-y-4 text-ink-700">
          <p>
            Mobile service remains our main priority. Our new workshop lets us offer more
            to our customers, and no job will be turned away.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ImagePlaceholder aspect="aspect-[16/9]" caption="about-van.webp" />
          <ImagePlaceholder aspect="aspect-[16/9]" caption="workshop.webp" />
        </div>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-2xl text-center">
          <ImagePlaceholder aspect="aspect-square" caption="mascot-mechanic.png" className="mx-auto mb-6 w-48 rounded-full" />
          <h2 className="font-display text-2xl font-bold text-ink-900">Meet the mechanic</h2>
          <p className="mt-2 text-ink-700">Over 15 years of hands-on experience with all makes and models.</p>
          <div className="mt-4">
            <Link href="/blog/week-in-the-life-of-a-mobile-mechanic" className="text-sm font-semibold text-electric-600 hover:text-aqua-500 transition-colors">
              Read: A week in the life of a mobile mechanic →
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
    </>
  );
}
