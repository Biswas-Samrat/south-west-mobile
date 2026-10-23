import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, SectionHeading, Accordion } from "@/components/ui";
import { getFaqsByGroup, FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description: "Answers about mobile mechanic visits, areas covered, quotes, the Blue Light Card discount and 0% APR finance from South West Mobile.",
  path: "/faq",
});

export default function FaqPage() {
  const grouped = getFaqsByGroup();
  const groups = Object.entries(grouped);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs", href: "/faq" }]}
        eyebrow="FAQS"
        title="Frequently Asked Questions"
        showCTAs={false}
      />

      <Section tone="white">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold text-ink-900">Quick answers</h2>
              <p className="mt-2 text-ink-700">
                Can&apos;t find what you&apos;re looking for? Request a quote online or call 07454 986543.
              </p>
              <nav className="mt-6 hidden lg:block" aria-label="FAQ groups">
                <ul className="space-y-2">
                  {groups.map(([group]) => (
                    <li key={group}>
                      <a href={`#${group.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-electric-600 hover:text-aqua-500 transition-colors">
                        {group}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-8 lg:col-span-8 lg:mt-0">
            {groups.map(([group, faqs]) => (
              <div key={group} id={group.toLowerCase().replace(/\s+/g, "-")} className="mb-10 scroll-mt-32">
                <h3 className="mb-4 font-display text-xl font-bold text-ink-900">{group}</h3>
                <Accordion items={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQs", href: "/faq" }])} />
      <JsonLd data={faqSchema(FAQS)} />
    </>
  );
}
