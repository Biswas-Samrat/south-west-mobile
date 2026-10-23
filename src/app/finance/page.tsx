import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, SectionHeading, Card, StepList, Accordion } from "@/components/ui";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { FINANCE } from "@/content/finance";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "0% APR Car Repair Finance",
  description: "Spread the cost of unexpected car repairs with 0% APR payment plans over 3, 4 or 6 months. Mobile mechanic in Weston-super-Mare. Subject to status.",
  path: "/finance",
});

export default function FinancePage() {
  const finFaqs = [
    { id: "how-apply", question: "How do I apply for finance?", answer: "Get your quote, tell us you'd like a payment plan, and we'll sort the rest. It's subject to status and approval." },
    { id: "what-covered", question: "What can I use finance for?", answer: "Any repair or service. It's designed for unexpected bills so you can get back on the road without the financial stress." },
    { id: "credit-check", question: "Is there a credit check?", answer: "Yes, finance is subject to status and approval. Terms apply." },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Finance", href: "/finance" }]}
        eyebrow="0% APR FINANCE"
        title="0% APR Payment Plans for Car Repairs"
        lead="Don't let repair bills stretch your finances."
      />

      <Section tone="white">
        <SectionHeading title="Spread the cost with 0% APR Payment Assist" lead="Unexpected repair? Spread the cost over 3, 4 or 6 months with no interest." />
        <div className="grid gap-4 sm:grid-cols-3">
          {FINANCE.plans.map((plan) => (
            <Card key={plan.months} className="text-center" hover>
              <p className="font-display text-[56px] font-extrabold leading-none text-aqua-500">{plan.months}</p>
              <p className="mt-2 text-lg font-bold text-ink-900">months</p>
              <p className="mt-1 text-sm text-ink-500">{plan.apr} APR</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading title="How it works" />
        <StepList items={[
          { title: "Get your quote.", text: "Message us on WhatsApp or call and we'll give you an honest quote for the repair." },
          { title: "Ask for a payment plan.", text: "Tell us you'd like to spread the cost and we'll arrange 0% APR finance." },
          { title: "Get back on the road.", text: "Your car is fixed and you pay in manageable instalments." },
        ]} />
      </Section>

      <Section tone="white">
        <SectionHeading title="A real example" align="left" />
        <Card className="max-w-3xl">
          <p className="text-ink-700">
            A customer who was mid-move into her first home lost all power and was told she
            needed a new engine. We found a clogged oil strainer, fixed it, and arranged 0% APR
            finance to get her mobile again.
          </p>
        </Card>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-xl rounded-2xl border border-mist-200 bg-mist-50 p-6 text-center text-sm text-ink-500">
          <p className="font-semibold text-ink-900 mb-2">Finance disclaimer</p>
          <p>{FINANCE.disclaimer}</p>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={finFaqs} />
        </div>
      </Section>

      <Section tone="white" className="pt-0">
        <div className="text-center">
          <QuoteTriggerButton size="lg" serviceName="Finance Enquiries">
            Ask about 0% payment plans
          </QuoteTriggerButton>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Finance", href: "/finance" }])} />
      <JsonLd data={faqSchema(finFaqs)} />
    </>
  );
}
