"use client";

import { useEffect } from "react";
import { Container, Button } from "@/components/ui";
import { SITE } from "@/content/site";
import { AlertCircle, RefreshCw, Phone } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <Container className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-600 mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
          Something went wrong
        </h1>
        <p className="text-slate-600 text-base mb-6">
          We encountered an unexpected error loading this page. Please try refreshing or get in touch with us directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary-red"
            size="md"
            className="inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </Button>
          <Button
            href={`tel:${SITE.phoneTel}`}
            variant="outline-navy"
            size="md"
            className="inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call {SITE.phoneDisplay}
          </Button>
        </div>
      </Container>
    </div>
  );
}
