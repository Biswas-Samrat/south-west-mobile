import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, SectionHeading, StepList, CheckList, TicketCard, Accordion } from "@/components/ui";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { BLUE_LIGHT } from "@/content/blue-light";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Blue Light Card Discount: 20% Off Labour",
  description:
    "Blue Light Card holders get 20% off all labour at South West Mobile, Weston-super-Mare. Show your card to claim on servicing, repairs and diagnostics.",
  path: "/blue-light-card-discount",
});

export default function BlueLightPage() {
  const blFaqs = [
    { id: "who-can-claim", question: "Who can claim?", answer: "Anyone with a valid Blue Light Card. This includes NHS staff, emergency services, armed forces and more." },
    { id: "how-prove", question: "How do I prove it?", answer: "Show your Blue Light Card to the mechanic on the day. Mention it when you first message or call." },
    { id: "applies-to-parts", question: "Does the discount apply to parts?", answer: "The discount applies to labour. Parts are charged at cost." },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blue Light Discount", href: "/blue-light-card-discount" },
        ]}
        eyebrow="BLUE LIGHT CARD"
        title="20% Off Labour for Blue Light Card Holders"
        lead="We look after those who look after us."
      />

      <Section tone="navy" className="py-0 md:py-0 lg:py-0">
        <TicketCard>
          <div className="text-center">
            <p className="font-display text-[96px] font-extrabold leading-none gradient-text-dark lg:text-[160px]">
              20%
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              OFF ALL LABOUR
            </p>
            <p className="mx-auto mt-4 max-w-md text-[#C7D0F0]">
              Show your Blue Light Card to claim 20% off labour on services, repairs and diagnostics.
            </p>
            <div className="mt-6 flex justify-center">
              <QuoteTriggerButton size="lg" variant="primary-red">
                Claim 20% Discount
              </QuoteTriggerButton>
            </div>
          </div>
        </TicketCard>
      </Section>

      <Section tone="white">
        <SectionHeading title="How to claim" />
        <StepList
          items={BLUE_LIGHT.howToClaim.map((s) => ({
            title: s.title,
            text: s.text,
          }))}
        />
      </Section>

      <Section tone="mist">
        <SectionHeading title="What's covered" />
        <CheckList items={BLUE_LIGHT.covered} className="mx-auto max-w-md" />
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-xl rounded-2xl border border-mist-200 bg-mist-50 p-6 text-center text-sm text-ink-500">
          <p className="font-semibold text-ink-900 mb-2">Terms</p>
          <p>{BLUE_LIGHT.terms}</p>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={blFaqs} />
        </div>
      </Section>

      <div className="text-center py-8">
        <p className="text-ink-700 mb-2">Customers are already making the most of it.</p>
      </div>

      <CtaBand />

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blue Light Discount", href: "/blue-light-card-discount" }])} />
      <JsonLd data={faqSchema(blFaqs)} />
    </>
  );
}
