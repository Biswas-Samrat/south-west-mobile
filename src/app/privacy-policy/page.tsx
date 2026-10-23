import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Section, Container } from "@/components/ui";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | South West Mobile",
  description:
    "Privacy policy for South West Mobile. How we collect, store, and protect your personal information in accordance with UK GDPR and Data Protection laws.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        lead="How South West Mobile collects, handles, and protects your personal and vehicle data."
        eyebrow="Legal & Compliance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 prose prose-slate max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-8">
              Last updated: October 2026
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-0">
              1. Who We Are
            </h2>
            <p>
              South West Mobile (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides mobile mechanic, vehicle diagnostics, servicing, and repair services based in Weston-super-Mare, North Somerset, UK. We are the data controller responsible for personal information collected through our website, WhatsApp, phone, email, and during mobile service visits.
            </p>
            <p>
              If you have any questions about this privacy notice or our data protection practices, please contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-primary underline">
                {SITE.email}
              </a>{" "}
              or by phone on {SITE.phoneDisplay}.
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              2. Information We Collect
            </h2>
            <p>We may collect and process the following information when you interact with us:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Contact Information:</strong> Name, phone number, email address.
              </li>
              <li>
                <strong>Vehicle Details:</strong> Vehicle registration number (VRN), make, model, year, fuel type, mileage, diagnostic fault codes, and service history.
              </li>
              <li>
                <strong>Location Data:</strong> Postcode and address where vehicle inspections, servicing, or repairs are carried out (home, workplace, or roadside).
              </li>
              <li>
                <strong>Enquiry &amp; Communication History:</strong> Details of faults reported, photos/videos sent via WhatsApp or email, quotes provided, and messages exchanged.
              </li>
              <li>
                <strong>Eligibility Verification:</strong> Proof of Blue Light Card eligibility (viewed solely to apply discounts).
              </li>
              <li>
                <strong>Payment &amp; Invoicing Details:</strong> Invoicing address, method of payment, and payment confirmation. We do not store full payment card numbers.
              </li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              3. How We Use Your Information
            </h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide quotes, check parts compatibility, and confirm appointment bookings.</li>
              <li>Travel to your specified location to diagnose, service, or repair your vehicle.</li>
              <li>Maintain vehicle service histories, diagnostic logs, and parts warranty records.</li>
              <li>Issue invoices, receipts, and process payments (including financing through Payment Assist where requested).</li>
              <li>Comply with UK legal, accounting, and tax obligations (e.g. HMRC records).</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              4. Lawful Basis for Processing
            </h2>
            <p>
              Under the UK General Data Protection Regulation (UK GDPR), we process your data under:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Contractual necessity:</strong> To fulfill our agreement to inspect, service, or repair your vehicle.
              </li>
              <li>
                <strong>Legitimate interests:</strong> To answer enquiries, provide customer support, and operate our mobile mechanic service.
              </li>
              <li>
                <strong>Legal compliance:</strong> To maintain accounting records and comply with statutory requirements.
              </li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              5. Third-Party Services
            </h2>
            <p>
              We may share necessary data with trusted third parties strictly to deliver our services:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>WhatsApp (Meta):</strong> When you communicate with us via WhatsApp, your messages are subject to WhatsApp&apos;s privacy terms.
              </li>
              <li>
                <strong>Parts Suppliers:</strong> We provide vehicle registration details to verified automotive motor factors solely to order correct parts.
              </li>
              <li>
                <strong>Financing Providers:</strong> When opting for spread payments, you will interact directly with Payment Assist under their financial regulatory terms.
              </li>
              <li>
                <strong>HMRC &amp; Professional Advisors:</strong> For legal compliance and accounting purposes.
              </li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              6. Data Retention
            </h2>
            <p>
              We retain customer service records, invoices, and vehicle history documentation for up to six (6) years in accordance with UK statutory accounting guidelines and warranty verification. General quote enquiries that do not result in a booking are routinely deleted after 12 months.
            </p>

            <h2 className="text-xl font-heading font-bold text-slate-900 mt-8">
              7. Your Rights
            </h2>
            <p>
              Under UK data protection law, you have the right to request access to your personal data, request correction of inaccurate data, request erasure where applicable, and object to processing. To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-primary underline">
                {SITE.email}
              </a>
              . You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO).
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
