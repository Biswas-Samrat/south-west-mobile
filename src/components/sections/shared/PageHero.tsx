"use client";

import { useState } from "react";
import { Phone, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { QuoteModal } from "@/components/forms/QuoteModal";

interface PageHeroProps {
  breadcrumbs: { label: string; href: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  showCTAs?: boolean;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  showCTAs = true,
}: PageHeroProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="hero-bg dot-grid py-14 md:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} onDark />
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-aqua-400 md:text-[13px]">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-[-0.02em] text-white text-balance md:text-[48px] md:leading-[52px] lg:text-[60px] lg:leading-[64px]">
            {title}
          </h1>
          {lead && (
            <p className="mt-4 max-w-2xl text-[17px] leading-7 text-[#C7D0F0] text-pretty md:text-lg md:leading-[30px] lg:text-xl lg:leading-8">
              {lead}
            </p>
          )}
          {showCTAs && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          )}
        </Container>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
