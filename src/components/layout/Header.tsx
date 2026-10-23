
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, FileText } from "lucide-react";

import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";
import { MAIN_NAV } from "@/content/navigation";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { QuoteModal } from "@/components/forms/QuoteModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(mobileOpen);

  // Track page scroll for header styling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when navigating to another page.
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close the desktop dropdown when clicking outside.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menus when pressing Escape.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-navy-950/95 shadow-xl backdrop-blur-md"
            : "border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Logo onDark={scrolled} />

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex xl:gap-2"
            aria-label="Main navigation"
          >
            {MAIN_NAV.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={cn(
                        "rounded-lg px-2 py-2 text-sm font-semibold transition-colors xl:text-[15px]",
                        scrolled
                          ? isActive(item.href)
                            ? "font-bold text-aqua-400"
                            : "text-white/90 hover:text-white"
                          : isActive(item.href)
                            ? "font-bold text-electric-600"
                            : "text-slate-800 hover:text-electric-600"
                      )}
                    >
                      {item.label}
                    </Link>

                    <button
                      ref={triggerRef}
                      type="button"
                      onClick={() => setDropdownOpen((open) => !open)}
                      className={cn(
                        "rounded-md p-1.5 transition-colors",
                        scrolled
                          ? "text-white/80 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                      aria-label="Toggle services menu"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          dropdownOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className={cn(
                          "absolute left-0 top-full z-50 mt-1 w-72 rounded-2xl border p-2 shadow-2xl",
                          scrolled
                            ? "border-white/10 bg-navy-900 text-white"
                            : "border-slate-200 bg-white text-slate-900"
                        )}
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDropdownOpen(false)}
                            className={cn(
                              "block rounded-xl px-4 py-3 transition-colors",
                              scrolled
                                ? "text-white hover:bg-white/10"
                                : "text-slate-900 hover:bg-slate-50"
                            )}
                            role="menuitem"
                          >
                            <span className="block text-sm font-semibold">
                              {child.label}
                            </span>

                            {child.description && (
                              <span
                                className={cn(
                                  "mt-0.5 block text-xs",
                                  scrolled
                                    ? "text-slate-300"
                                    : "text-slate-500"
                                )}
                              >
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDropdownOpen(false)}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors xl:text-[15px]",
                    scrolled
                      ? isActive(item.href)
                        ? "font-bold text-aqua-400"
                        : "text-white/90 hover:text-white"
                      : isActive(item.href)
                        ? "font-bold text-electric-600"
                        : "text-slate-800 hover:text-electric-600"
                  )}
                  {...(isActive(item.href)
                    ? { "aria-current": "page" as const }
                    : {})}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop quote button */}
          <div className="hidden items-center lg:flex">
            <Button
              variant="primary-red"
              size="sm"
              onClick={() => setQuoteModalOpen(true)}
              iconLeft={<FileText className="h-4 w-4" />}
              className="shrink-0 whitespace-nowrap"
            >
              Get a quote
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-100"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenQuote={() => {
          setMobileOpen(false);
          setQuoteModalOpen(true);
        }}
        pathname={pathname}
      />

      {/* Quote modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  pathname: string;
}

function MobileDrawer({
  isOpen,
  onClose,
  onOpenQuote,
  pathname,
}: MobileDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Focus the first interactive element when the drawer opens.
  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false);
      return;
    }

    const drawer = drawerRef.current;
    if (!drawer) return;

    const firstFocusable =
      drawer.querySelector<HTMLElement>(
        'button, a, [tabindex]:not([tabindex="-1"])'
      );

    firstFocusable?.focus();
  }, [isOpen]);

  // Close the menu with Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] overflow-hidden transition-all duration-300 lg:hidden",
        isOpen
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        className={cn(
          // Important: constrain the panel to the actual mobile viewport.
          "fixed inset-y-0 right-0 z-[80] flex h-[100dvh] max-h-[100dvh] w-[min(88vw,380px)] flex-col overflow-hidden bg-navy-950 shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-4">
          <span className="text-sm font-bold uppercase tracking-wider text-aqua-400">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/*
          IMPORTANT FIX:
          min-h-0 allows the navigation area to shrink inside the flex
          container. overflow-y-auto lets users scroll through every link.
        */}
        <nav
          className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-4 py-2"
          aria-label="Mobile navigation"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {MAIN_NAV.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="border-b border-white/10"
                >
                  <div className="flex min-h-14 items-center">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex min-h-14 flex-1 items-center py-3 text-lg font-semibold transition-colors",
                        pathname === item.href
                          ? "text-aqua-400"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen((open) => !open)
                      }
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={servicesOpen}
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="space-y-1 pb-3 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                            pathname === child.href
                              ? "bg-white/10 text-aqua-400"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex min-h-14 items-center border-b border-white/10 py-3 text-lg font-semibold transition-colors",
                  pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(`${item.href}/`))
                    ? "text-aqua-400"
                    : "text-white/85 hover:text-white"
                )}
                {...(pathname === item.href
                  ? { "aria-current": "page" as const }
                  : {})}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/*
          Separate, non-shrinking footer:
          quote and phone buttons remain visible without covering the links.
        */}
        <div className="shrink-0 space-y-3 border-t border-white/10 bg-navy-950 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <Button
            variant="primary-red"
            size="lg"
            fullWidth
            onClick={onOpenQuote}
            iconLeft={<FileText className="h-5 w-5" />}
          >
            Get a Quote
          </Button>

          <Button
            variant="light"
            size="lg"
            fullWidth
            href={`tel:${SITE.phoneTel}`}
            iconLeft={<Phone className="h-5 w-5" />}
          >
            Call {SITE.phoneDisplay}
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-1 text-center text-sm text-ink-300">
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-white"
            >
              Email us
            </a>

            <span aria-hidden="true">·</span>

            <a
              href={SITE.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Facebook Messenger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
