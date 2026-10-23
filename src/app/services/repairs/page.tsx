import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DiscountCallout } from "@/components/sections/shared/DiscountCallout";
import { FinanceStrip } from "@/components/sections/shared/FinanceStrip";
import { ServiceSubNav } from "@/components/layout/ServiceSubNav";
import { Section, SectionHeading, Card, CheckList, Accordion, Button } from "@/components/ui";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { serviceQuoteUrl } from "@/lib/whatsapp";
import { Wrench, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Car Repairs Weston-super-Mare",
  description:
    "Mobile car repairs in Weston-super-Mare: brakes, clutches, cambelts, engines, DPF and electrical. No job turned away. 0% APR finance available.",
  path: "/services/repairs",
});

const repairCategories = [
  {
    id: "brakes-suspension",
    title: "Brakes and suspension",
    text: "Squeals, grinding, a soft pedal or pulling to one side? Don't turn the radio up. We've seen a van where a brake pad had fallen out completely and the pedal went to the floor.",
    signs: ["Squealing or grinding noise", "Soft or spongy brake pedal", "Pulling to one side", "Vibration when braking"],
  },
  {
    id: "clutch-gearbox",
    title: "Clutch and gearbox",
    text: "Slipping, judder, heavy pedal or trouble finding gears. We'll confirm the clutch is the real culprit first; one customer was told it was a starter motor.",
    signs: ["Clutch slipping or juddering", "Heavy clutch pedal", "Difficulty finding gears", "Burning smell"],
  },
  {
    id: "cambelts",
    title: "Cambelts, timing belts and wet belts",
    text: "Timing and PSA wet-belt jobs, done properly. A clogged oil strainer from belt debris can starve an engine of oil, and a garage once told a customer she needed a new engine.",
    signs: ["Overdue for replacement", "Ticking from the engine", "Oil pressure warning light", "Engine running rough"],
  },
  {
    id: "engine",
    title: "Engine repairs and replacements",
    text: "Head gaskets, compression faults and full engine changes. We strip down to confirm the fault before recommending a replacement.",
    signs: ["Overheating", "White smoke from exhaust", "Oil in coolant or coolant in oil", "Loss of compression"],
  },
  {
    id: "dpf",
    title: "DPF repairs",
    text: "Before you buy a new DPF, let us check pressure sensors and pipes, glow plugs, air-flow sensors and more, then clean the DPF if needed.",
    signs: ["DPF warning light", "Loss of power", "Excessive exhaust smoke", "Limp mode"],
  },
  {
    id: "electrical",
    title: "Electrical",
    text: "Alternators, starter motors, batteries and sensors. A noisy auxiliary belt was traced to a faulty alternator pulley and fixed while the customer was at work.",
    signs: ["Battery warning light", "Slow cranking", "Electrical items not working", "Dimming lights"],
  },
  {
    id: "air-con",
    title: "Air-con",
    text: "Air-con checks and repairs.",
    signs: ["Warm air from vents", "Unusual smells", "Noisy compressor"],
  },
  {
    id: "mot-prep",
    title: "MOT prep and failures",
    text: "Pre-MOT checks and repairs for anything that needs fixing before the test.",
    signs: ["MOT due soon", "Previous MOT advisories", "Warning lights on dashboard"],
  },
];

const warningSigns = [
  "Warning lights",
  "Oil pressure light",
  "Loss of power",
  "New noises (grinding, knocking, whining)",
  "Soft brake pedal",
  "Burning smells",
  "Smoke from exhaust",
];

const repairFaqs = [
  { id: "how-long-repair", question: "How long do repairs take?", answer: "It depends on the job. Many repairs can be done in a few hours at your home or workplace. Bigger jobs like engine changes may take a couple of days at our workshop." },
  { id: "parts", question: "Do you supply parts?", answer: "Yes. We source quality parts at competitive prices and can discuss options with you." },
  { id: "guarantee", question: "Do you guarantee your work?", answer: "Yes. We stand behind our repairs. Ask us for details on the guarantee for your specific job." },
];

export default function RepairsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Repairs", href: "/services/repairs" },
        ]}
        eyebrow="REPAIRS"
        title="Mobile Car Repairs in Weston-super-Mare"
        lead="No job turned away, big or small. From brakes to engine replacements, we do it all at your door or in our workshop."
      />
      <ServiceSubNav />

      {/* Repair categories */}
      <Section tone="white">
        <div className="space-y-8">
          {repairCategories.map((cat) => (
            <Card key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
                  <Wrench className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-ink-900">{cat.title}</h2>
                  <p className="mt-2 text-ink-700">{cat.text}</p>
                  <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-ink-900">Signs to look out for:</p>
                    <CheckList items={cat.signs} />
                  </div>
                  <div className="mt-4">
                    <Button variant="whatsapp" size="sm" href={serviceQuoteUrl(cat.title)} iconLeft={<WhatsAppIcon className="h-4 w-4" />}>
                      Get a quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Warning signs */}
      <Section tone="mist">
        <SectionHeading title="Don't ignore these" />
        <div className="mx-auto max-w-2xl">
          <div className="grid grid-cols-2 gap-3">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex items-center gap-2 rounded-xl bg-signal-100 p-3 text-sm font-medium text-ink-900">
                <AlertTriangle className="h-4 w-4 shrink-0 text-signal-600" aria-hidden="true" />
                {sign}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Second-hand tyres story */}
      <Section tone="white">
        <SectionHeading title="Second-hand tyres: don't." align="left" />
        <div className="max-w-3xl">
          <p className="mb-4 text-ink-700">
            A 2010 car&apos;s tyre was made in 1997. The tread ripped off on the motorway and
            damaged the bumper, arch liner and back light. An extra £10 for a new tyre became
            over £100 of repairs.
          </p>
          <p className="mb-6 text-ink-700 font-semibold">
            Don&apos;t penny-pinch with your car.
          </p>
          <QuoteTriggerButton size="md" serviceName="Repairs">
            Request a repair quote
          </QuoteTriggerButton>
        </div>
      </Section>

      <FinanceStrip />
      <DiscountCallout />

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={repairFaqs} />
        </div>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Repairs", href: "/services/repairs" }])} />
      <JsonLd data={serviceSchema("Mobile Car Repairs", "Mobile car repairs in Weston-super-Mare: brakes, clutches, cambelts, engines, DPF and electrical.")} />
      <JsonLd data={faqSchema(repairFaqs)} />
    </>
  );
}
