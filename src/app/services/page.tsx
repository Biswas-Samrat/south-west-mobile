import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SERVICES, ALL_SERVICE_CHIPS } from "@/content/services";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DiscountCallout } from "@/components/sections/shared/DiscountCallout";
import { FinanceStrip } from "@/components/sections/shared/FinanceStrip";
import { ServiceSubNav } from "@/components/layout/ServiceSubNav";
import { Section, SectionHeading, Card, CheckList, Chip, Accordion } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { ScanLine, Wrench, Gauge, CarFront } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Car Servicing, Diagnostics and Repairs",
  description:
    "Mobile car servicing, diagnostics and repairs in Weston-super-Mare and 10 miles around. Honest, reliable and fully insured. We come to you.",
  path: "/services",
});

export default function ServicesPage() {
  const serviceFaqs = FAQS.filter((f) => f.group === "Services").slice(0, 3);
  const iconMap: Record<string, React.ReactNode> = {
    ScanLine: <ScanLine className="h-8 w-8" />,
    Wrench: <Wrench className="h-8 w-8" />,
    Gauge: <Gauge className="h-8 w-8" />,
  };

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        eyebrow="OUR SERVICES"
        title="Mobile Car Servicing, Diagnostics and Repairs in Weston-super-Mare"
        lead="Skip the garage wait and let the mechanic come to you. Honest, reliable and professional service at your home or workplace."
      />
      <ServiceSubNav />

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.slug} hover className="flex flex-col">
              <ImagePlaceholder aspect="aspect-[16/9]" caption={`${service.slug}.webp`} className="mb-4" />
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
                {iconMap[service.icon]}
              </div>
              <h2 className="mb-2 font-display text-xl font-bold text-ink-900">{service.title}</h2>
              <p className="mb-4 text-ink-700">{service.summary}</p>
              <CheckList items={service.bullets.slice(0, 4)} className="mb-6" />
              <div className="mt-auto flex flex-wrap gap-3">
                <QuoteTriggerButton size="sm" serviceName={service.shortTitle}>
                  Get a quote
                </QuoteTriggerButton>
                <Button variant="link" href={service.href}>Learn more →</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Car buying checks */}
      <Section tone="mist" id="car-buying-checks">
        <SectionHeading title="Buying a car? Don't buy blind." align="left" />
        <div className="max-w-3xl">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
            <CarFront className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mb-4 text-ink-700">
            A dodgy dealer told one customer their timing belt had 40,000 miles left. It didn&apos;t.
            You can hire us to come and view a car with you and give you honest advice before you buy.
          </p>
          <QuoteTriggerButton size="md" serviceName="Car-buying check">
            Book a vehicle inspection
          </QuoteTriggerButton>
        </div>
      </Section>

      {/* Everything A to Z */}
      <Section tone="white">
        <SectionHeading title="Everything we do, A to Z" />
        <div className="flex flex-wrap justify-center gap-2">
          {ALL_SERVICE_CHIPS.map((chip) => (
            <Link key={chip.label} href={chip.href}>
              <Chip className="cursor-pointer transition-colors hover:bg-mist-200">{chip.label}</Chip>
            </Link>
          ))}
        </div>
      </Section>

      <DiscountCallout />
      <FinanceStrip />

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={serviceFaqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }])} />
      <JsonLd data={serviceSchema("Mobile Car Services", "Mobile car servicing, diagnostics and repairs in Weston-super-Mare")} />
      {serviceFaqs.length > 0 && <JsonLd data={faqSchema(serviceFaqs)} />}
    </>
  );
}
