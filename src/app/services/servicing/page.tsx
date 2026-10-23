import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DiscountCallout } from "@/components/sections/shared/DiscountCallout";
import { ServiceSubNav } from "@/components/layout/ServiceSubNav";
import { Section, SectionHeading, Card, CheckList, Accordion } from "@/components/ui";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { QuoteTriggerButton } from "@/components/forms/QuoteTriggerButton";
import { TESTIMONIALS } from "@/content/testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { Quote } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Car Servicing Weston-super-Mare",
  description:
    "Mobile car servicing in Weston-super-Mare: oil and filter changes, full services and safety check-ups at your door. 20% off labour with a Blue Light Card.",
  path: "/services/servicing",
});

export default function ServicingPage() {
  const serviceFaqs = [
    { id: "how-often", question: "How often should I service my car?", answer: "Most cars need at least an annual service or every 10,000 to 12,000 miles. Check your owner's handbook or ask us and we'll advise." },
    { id: "what-included", question: "What's included in a service?", answer: "It depends on the type of service. An oil and filter change covers the basics. A full service includes a more thorough check of brakes, fluids, filters and more." },
    { id: "how-long", question: "How long does a service take?", answer: "An oil and filter service usually takes about an hour. A full service can take two to three hours depending on the vehicle." },
  ];

  const serviceOptions = [
    {
      title: "Oil and filter service",
      bullets: ["Engine oil replaced", "Oil filter replaced", "Visual check of key components", "Top-up of screen wash"],
    },
    {
      title: "Full service",
      bullets: ["Everything in the oil and filter service", "Air filter and cabin filter checked", "Brake inspection", "Battery and charging system test", "Full fluid level check", "Comprehensive vehicle inspection"],
    },
    {
      title: "Seasonal and safety check-up",
      bullets: ["Brake inspection", "Battery and alternator check", "Diagnostics to banish mysterious check-engine lights", "Tyre condition check", "Lights and wipers check"],
    },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Servicing", href: "/services/servicing" },
        ]}
        eyebrow="SERVICING"
        title="Mobile Car Servicing in Weston-super-Mare"
        lead="Oil and filter changes to full services at your home or workplace, with an honest check-over while we're there."
      />
      <ServiceSubNav />

      {/* Service options */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceOptions.map((opt) => (
            <Card key={opt.title} hover className="flex flex-col">
              <h2 className="mb-4 font-display text-xl font-bold text-ink-900">{opt.title}</h2>
              <p className="mb-3 text-sm font-semibold text-ink-500 uppercase tracking-wide">What&apos;s included</p>
              <QuoteTriggerButton size="sm" fullWidth serviceName={`Servicing: ${opt.title}`}>
                Book this service
              </QuoteTriggerButton>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pollen filter proof */}
      <Section tone="mist">
        <SectionHeading
          title="Garage-serviced doesn't always mean looked after."
          align="left"
        />
        <div className="max-w-3xl">
          <p className="mb-6 text-ink-700">
            A car that had only ever been to a garage arrived with a filthy pollen filter.
            No care had been given to the jobs at all. Book your service with a vehicle
            technician you can trust.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder aspect="aspect-[4/3]" caption="job-pollen-filter-before.webp" />
            <ImagePlaceholder aspect="aspect-[4/3]" caption="job-pollen-filter-after.webp" />
          </div>
        </div>
      </Section>

      {/* Pull quote */}
      <Section tone="white">
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-3 h-8 w-8 text-grape-500" aria-hidden="true" />
          <blockquote className="font-display text-xl font-bold italic text-ink-900 md:text-2xl">
            &ldquo;Doing the job right is better than doing the job fast and twice.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Testimonial */}
      {TESTIMONIALS.length > 0 && (
        <Section tone="mist">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto mb-4 h-8 w-8 text-grape-500" aria-hidden="true" />
            <blockquote className="text-lg leading-relaxed text-ink-700 italic">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </blockquote>
            <p className="mt-4 font-semibold text-ink-900">{TESTIMONIALS[0].author}</p>
          </div>
        </Section>
      )}

      <DiscountCallout />

      <Section tone="white">
        <SectionHeading title="Common questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={serviceFaqs} />
        </div>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Servicing", href: "/services/servicing" }])} />
      <JsonLd data={serviceSchema("Mobile Car Servicing", "Mobile car servicing in Weston-super-Mare at your home or workplace.")} />
      <JsonLd data={faqSchema(serviceFaqs)} />
    </>
  );
}
