"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, FileText } from "lucide-react";
import { SITE } from "@/content/site";
import { FOOTER_SERVICES, FOOTER_LINKS, LEGAL_LINKS } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SwooshDivider } from "@/components/ui/SwooshDivider";
import { Logo } from "./Logo";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { QuoteModal } from "@/components/forms/QuoteModal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy-950" role="contentinfo">
        <SwooshDivider />

        <Container>
          {/* Top CTA row */}
          <div className="flex flex-col items-center gap-6 border-b border-white/10 py-10 text-center md:flex-row md:justify-between md:text-left">
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Need a mechanic?{" "}
              <span className="gradient-text-dark">We come to you.</span>
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary-red"
                size="md"
                onClick={() => setModalOpen(true)}
                iconLeft={<FileText className="h-5 w-5" />}
              >
                Request a Quote
              </Button>
              <Button
                variant="light"
                size="md"
                href={`tel:${SITE.phoneTel}`}
                iconLeft={<Phone className="h-5 w-5" />}
              >
                Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>

        {/* Grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-3 text-sm font-semibold text-aqua-400">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Honest, reliable mobile mechanic servicing, diagnostics and repairs
              in Weston-super-Mare and the surrounding 10 miles.
            </p>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Follow South West Mobile on Facebook"
            >
              <FacebookIcon />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
                >
                  <FileText className="h-4 w-4 shrink-0 text-brand-primary" />
                  Request a Quote
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <span>
                  Based in {SITE.locality}, {SITE.region}
                  <br />
                  Covering a {SITE.coverageMiles}-mile radius
                </span>
              </li>
              {SITE.workshopAddress && (
                <li className="text-sm text-ink-300">
                  Workshop: {SITE.workshopAddress}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 pb-24 md:pb-6">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-ink-300 md:flex-row md:justify-between md:text-left">
            <p>
              © {currentYear} {SITE.name}. All rights reserved.
              {SITE.companyNumber && (
                <span> Company no. {SITE.companyNumber}.</span>
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] text-ink-300/70 md:text-left">
            Blue Light Card is a trademark of its respective owner. South West
            Mobile is an independent business.
          </p>
        </div>
      </Container>
    </footer>

    <QuoteModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
    />
  </>
  );
}
