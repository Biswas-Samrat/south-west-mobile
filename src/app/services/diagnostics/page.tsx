import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DiscountCallout } from "@/components/sections/shared/DiscountCallout";
import { ServiceSubNav } from "@/components/layout/ServiceSubNav";
import { Section, SectionHeading, Card, CheckList, StepList, Accordion } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { CASE_STUDIES } from "@/content/case-studies";
import { FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Car Diagnostics Weston-super-Mare",
  description:
    "Mobile car diagnostics in Weston-super-Mare. Warning lights, DPF faults, misfires and noises traced properly at your home or workplace.",
  path: "/services/diagnostics",
});

export default function DiagnosticsPage() {
  const dpfCases = CASE_STUDIES.filter((cs) => cs.id.startsWith("dpf"));
  const diagFaqs = [
    { id: "what-happens", question: "What happens in a diagnostic?", answer: "We scan fault codes, read live data, and then test components hands-on to confirm the real fault. You get a plain-English explanation and a clear quote before any work starts." },
    { id: "home-or-work", question: "Can you diagnose at my home or workplace?", answer: "Yes. We come to you anywhere within roughly 10 miles of Weston-super-Mare. For more involved diagnostics we can also use our workshop." },
    { id: "dpf-diagnosis", question: "Do you diagnose DPF problems?", answer: "Yes. DPF diagnosis is one of our specialities. We check pressure sensors, pipes, glow plugs, air-flow sensors and more before recommending a DPF replacement." },
    { id: "bluelight-diagnostics", question: "Is the 20% Blue Light discount valid on diagnostics?", answer: "Yes, it applies to all labour including diagnostics." },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Diagnostics", href: "/services/diagnostics" },
        ]}
        eyebrow="DIAGNOSTICS"
        title="Mobile Car Diagnostics in Weston-super-Mare"
        lead="Warning light? Strange noise? Losing power? We find the real fault, not just the error code."
      />
      <ServiceSubNav />

      {/* What is a diagnostic */}
      <Section tone="white">
        <SectionHeading title="What is a car diagnostic?" align="left" />
        <div className="max-w-3xl space-y-4 text-ink-700">
          <p>
            A diagnostic is how we work out what&apos;s actually wrong with your car instead of guessing.
            We combine fault-code scanning with hands-on testing and inspection to trace the root cause,
            so you only pay to fix what&apos;s really broken.
          </p>
          <p>
            Some garages charge more to diagnose a fault than the repair is worth. We keep it practical:
            in one recent job a DPF fault that two garages couldn&apos;t find was traced in about 20 minutes.
          </p>
        </div>
      </Section>

      {/* What a diagnostic includes */}
      <Section tone="mist">
        <SectionHeading title="What a diagnostic includes" />
        <StepList
          items={[
            { title: "Listen", text: "You tell us what you've noticed: the noise, the warning light, when it happens." },
            { title: "Scan", text: "We read fault codes and live data to point us in the right direction." },
            { title: "Test", text: "Codes are a clue, not a verdict. We test sensors, wiring, pressures and components to confirm the real fault." },
            { title: "Inspect", text: "A hands-on check for leaks, wear and damage, the things a scanner can't see." },
            { title: "Report", text: "A plain-English explanation and a clear quote before any repair work starts." },
          ]}
        />
      </Section>

      {/* What we diagnose */}
      <Section tone="white">
        <SectionHeading title="What we diagnose" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            "Engine warning lights",
            "Misfires and rough running",
            "Loss of power",
            "DPF problems",
            "Belt, bearing and knocking noises",
            "Battery and charging faults",
            "Oil leaks and oil-pressure warnings",
            "ABS and brake faults",
          ].map((symptom) => (
            <Card key={symptom} className="text-center text-sm font-medium text-ink-900">
              {symptom}
            </Card>
          ))}
        </div>
      </Section>

      {/* DPF case studies */}
      <Section tone="mist">
        <SectionHeading
          title="Told you need a new DPF? Get a second opinion."
          lead="Needing a new DPF is not as common as some garages make it out to be."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {dpfCases.map((cs) => (
            <Card key={cs.id}>
              <h3 className="mb-2 font-display text-lg font-bold text-ink-900">{cs.title}</h3>
              <p className="text-sm text-ink-500">{cs.vehicle}</p>
              <div className="mt-3 space-y-2 text-sm">
                <p><span className="font-semibold text-ink-900">Told:</span> {cs.told}</p>
                <p><span className="font-semibold text-ink-900">Found:</span> {cs.found}</p>
                <div className="flex items-center gap-2 text-success-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span className="font-semibold">{cs.result}</span>
                </div>
              </div>
              {cs.quotedPrice && cs.fixedPrice && (
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-bold text-ink-500 line-through">{cs.quotedPrice}</span>
                  <ArrowRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
                  <span className="font-bold text-success-600">{cs.fixedPrice}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <DiscountCallout />

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={diagFaqs} />
        </div>
      </Section>

      <Section tone="white" className="pt-0">
        <div className="text-center">
          <QuoteTriggerButton size="lg" serviceName="Diagnostics">
            Book a diagnostic
          </QuoteTriggerButton>
        </div>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Diagnostics", href: "/services/diagnostics" }])} />
      <JsonLd data={serviceSchema("Mobile Car Diagnostics", "Mobile car diagnostics in Weston-super-Mare. Warning lights, DPF faults, misfires and noises.")} />
      <JsonLd data={faqSchema(diagFaqs)} />
    </>
  );
}
