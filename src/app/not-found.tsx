import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { SITE } from "@/content/site";
import { Phone, Home, Wrench, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <Container className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-100 text-amber-700 font-bold text-3xl mb-6 shadow-inner">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
          Looks like you&apos;ve taken a wrong turn
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for has been moved, removed, or doesn&apos;t exist. Don&apos;t worry, we can get you back on the right track!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button href="/" variant="primary-red" size="lg" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
          <Button href="/services" variant="outline-navy" size="lg" className="inline-flex items-center gap-2">
            <Wrench className="w-5 h-5" />
            View Services
          </Button>
          <Button
            href={`tel:${SITE.phoneTel}`}
            variant="outline-navy"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call {SITE.phoneDisplay}
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left">
          <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
            Popular destinations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
            <Link
              href="/services/diagnostics"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Diagnostics
            </Link>
            <Link
              href="/services/servicing"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Servicing
            </Link>
            <Link
              href="/services/repairs"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Repairs
            </Link>
            <Link
              href="/blue-light-card-discount"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Blue Light Card
            </Link>
            <Link
              href="/finance"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              0% Finance
            </Link>
            <Link
              href="/areas"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Areas Covered
            </Link>
            <Link
              href="/reviews"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Customer Reviews
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-brand-primary py-1 underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
