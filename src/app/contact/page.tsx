import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Section, SectionHeading, Card } from "@/components/ui";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SITE } from "@/content/site";
import { Phone, Mail, MapPin, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact South West Mobile | Book a Mobile Mechanic",
  description:
    "Get in touch with South West Mobile. Call 07454 986543 or request a quote online. Mobile mechanic serving Weston-super-Mare and North Somerset.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={autoRepairSchema()} />
      <PageHero
        title="Contact South West Mobile"
        lead="Fast response for quotes and bookings. We come to your home, workplace, or roadside across Weston-super-Mare and North Somerset."
        eyebrow="Get in Touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Direct Contact Cards */}
      <Section className="pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Online Quote */}
          <a
            href="#quote-form"
            className="group block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-primary transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <span className="text-2xl font-bold">📋</span>
            </div>
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-1">
              Instant Request
            </span>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
              Online Quote
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Fill out our simple form with your registration and preferred service.
            </p>
            <span className="text-sm font-semibold text-brand-primary group-hover:underline inline-flex items-center gap-1">
              Fill Form Below &rarr;
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="group block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-primary transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-1">
              Urgent &amp; Roadside
            </span>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
              Call Direct
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Speak directly with our technician for emergency call-outs.
            </p>
            <span className="text-sm font-semibold text-brand-primary group-hover:underline inline-flex items-center gap-1">
              Call {SITE.phoneDisplay} &rarr;
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SITE.email}`}
            className="group block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Written Quotes
            </span>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
              Email
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Ideal for non-urgent enquiries or fleet service requests.
            </p>
            <span className="text-sm font-semibold text-slate-900 group-hover:underline inline-flex items-center gap-1 truncate max-w-full">
              {SITE.email} &rarr;
            </span>
          </a>

          {/* Facebook */}
          <a
            href={SITE.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
              Social Messenger
            </span>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
              Facebook
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Reach us on Facebook Messenger or browse our latest job photos.
            </p>
            <span className="text-sm font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-1">
              Open Messenger &rarr;
            </span>
          </a>
        </div>
      </Section>

      {/* Main Form Section & Information */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quote Form */}
          <div className="lg:col-span-7" id="quote-form">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-heading font-bold text-slate-900">
                  Request a Quote or Booking
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill in your vehicle details and service needed. We will review your enquiry and get back to you promptly with an estimate.
                </p>
              </div>
              <QuoteForm />
            </div>
          </div>

          {/* Helpful Information Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Service & Coverage Card */}
            <Card className="p-6">
              <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-brand-primary" />
                Service Location &amp; Radius
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Based in <strong className="text-slate-900">Weston-super-Mare</strong> (BS22, BS23, BS24) and operating within a <strong className="text-slate-900">10-mile radius</strong> across North Somerset.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                <li>• Home driveway or street parking</li>
                <li>• Workplace / staff car park</li>
                <li>• Safe roadside or breakdown locations</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900">
                  <strong>Need urgent help?</strong> Call us right away on{" "}
                  <a href={`tel:${SITE.phoneTel}`} className="underline font-semibold">
                    {SITE.phoneDisplay}
                  </a>{" "}
                  for roadside and same-day availability.
                </p>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6">
              <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-brand-primary" />
                Operating Hours
              </h3>
              <div className="space-y-2 text-sm text-slate-700 mb-4">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-slate-900">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Saturday</span>
                  <span className="font-semibold text-slate-900">08:00 – 16:00</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Sunday &amp; Bank Holidays</span>
                  <span className="font-semibold text-slate-600">Emergency call-outs</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Messages received after hours are answered early the next working morning.
              </p>
            </Card>

            {/* Blue Light Card Banner */}
            <Card className="p-6 bg-gradient-to-br from-blue-900 to-slate-950 text-white border-0">
              <div className="flex items-center gap-2 mb-2 text-sky-300 font-semibold text-xs tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                Blue Light Card Holders
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">
                20% Discount on Labour
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                NHS, Police, Fire, Ambulance, Armed Forces and RNLI personnel qualify for 20% off all labour charges. Mention when contacting us.
              </p>
              <a
                href="/blue-light-card-discount"
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline"
              >
                Learn more about our Blue Light discount &rarr;
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
