"use client";

import { useState } from "react";
import { Phone, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { QuoteModal } from "@/components/forms/QuoteModal";

export function CtaBand() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden py-16 md:py-20">
        {/* Background */}
        <div className="absolute inset-0 final-cta-gradient" aria-hidden="true" />
        <div className="absolute inset-0 bg-navy-900/55" aria-hidden="true" />

        <Container className="relative z-10 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-[44px] lg:leading-[50px]">
            Don&apos;t wait for a breakdown.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#C7D0F0]">
            Book in today, don&apos;t leave it too late. No one wants engine failure!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="primary-red"
              size="lg"
              onClick={() => setModalOpen(true)}
              iconLeft={<FileText className="h-5 w-5" />}
            >
              Request a Free Quote
            </Button>
            <Button
              variant="light"
              size="lg"
              href={`tel:${SITE.phoneTel}`}
              iconLeft={<Phone className="h-5 w-5" />}
            >
              Call {SITE.phoneDisplay}
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#C7D0F0]/80">
            Remember: we come to you.
          </p>
        </Container>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
