import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Section, Container } from "@/components/ui";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | South West Mobile",
  description:
    "Terms and conditions of service for South West Mobile mechanic services in Weston-super-Mare and North Somerset.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        lead="Standard terms of service for South West Mobile repairs, servicing, and mobile call-outs."
        eyebrow="Terms of Business"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 prose prose-slate max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-8">
              Last updated: October 2026
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-0">
              1. Overview
            </h2>
            <p>
              These Terms &amp; Conditions govern the provision of vehicle maintenance, servicing, diagnostics, and repairs by South West Mobile (&ldquo;we&rdquo;, &ldquo;us&rdquo;) to the customer (&ldquo;you&rdquo;). By confirming a booking or commissioning work, you agree to these terms.
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              2. Estimates &amp; Quotations
            </h2>
            <p>
              Initial quotes provided via WhatsApp, phone, or email are estimates based on the information and fault descriptions provided. If during physical inspection or diagnostic testing additional faults or worn components are identified:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We will explain the findings clearly and provide an updated price estimate.</li>
              <li>No additional work or parts will be fitted without your explicit authorization.</li>
              <li>Diagnostic fees apply for electronic fault investigation, live-data logging, and smoke testing.</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              3. Location &amp; Safe Working Conditions
            </h2>
            <p>
              As a mobile mechanic service, work is carried out at your chosen location (driveway, workplace car park, or roadside). You must ensure:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The vehicle is situated on firm, level ground suitable for safe jacking and axle stand deployment where necessary.</li>
              <li>The location is legally accessible and safe, off busy high-speed motorways or clearways.</li>
              <li>You have permission for mechanical repairs to be performed on the premises (e.g. private parking or workplace grounds).</li>
              <li>The keys, locking wheel nut key, and vehicle access are made available at the agreed appointment time.</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              4. Parts &amp; Warranty
            </h2>
            <p>
              We fit quality original equipment (OE) or OE-equivalent parts from reputable motor factors.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Parts Warranty:</strong> Fitted parts carry the manufacturer&apos;s warranty (typically 12 months / 12,000 miles against manufacturing defects).
              </li>
              <li>
                <strong>Workmanship Guarantee:</strong> Our labour is backed by a 12-month workmanship guarantee for the specific repair performed.
              </li>
              <li>
                <strong>Customer-Supplied Parts:</strong> If you supply your own parts, we cannot provide any warranty on the parts themselves or any labour associated with premature component failure or incorrect fitment specifications provided by third-party sellers.
              </li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              5. Payment, Blue Light Discounts &amp; Financing
            </h2>
            <p>
              Payment is due upon completion of the repair or service visit on the same day.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Payment Methods:</strong> We accept debit/credit cards, bank transfer, and cash.
              </li>
              <li>
                <strong>Blue Light Card:</strong> A 20% discount applies to labour charges for valid Blue Light Card holders. The card or service ID must be shown upon completion. Discount cannot be combined with other promotional offers and does not apply to retail parts prices.
              </li>
              <li>
                <strong>Payment Assist Financing:</strong> Spread your repair bill across 4 equal monthly instalments with 0% interest and no hidden fees. Subject to eligibility and debit card verification via Payment Assist Ltd.
              </li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              6. Cancellations &amp; Rescheduling
            </h2>
            <p>
              We understand plans change. Please provide at least 24 hours&apos; notice if you need to reschedule or cancel your mobile mechanic appointment so the time slot can be made available to other stranded motorists.
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              7. Limitation of Liability
            </h2>
            <p>
              We exercise reasonable skill and care in all diagnostics and mechanical work. We cannot be held liable for pre-existing vehicle corrosion, seized bolts, secondary failures caused by prolonged driving with active warning lights, or delays caused by severe weather or parts supplier logistical delays.
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              8. Contact &amp; Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. For any enquiries regarding these terms, please contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-primary underline">
                {SITE.email}
              </a>{" "}
              or {SITE.phoneDisplay}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
