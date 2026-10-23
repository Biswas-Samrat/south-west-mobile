import type { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Diagnostics",
        href: "/services/diagnostics",
        description: "Warning lights, fault finding and DPF diagnosis",
      },
      {
        label: "Servicing",
        href: "/services/servicing",
        description: "Oil changes, full services and safety checks",
      },
      {
        label: "Repairs",
        href: "/services/repairs",
        description: "Brakes, clutches, engines and everything else",
      },
      {
        label: "All services",
        href: "/services",
        description: "View our full range of services",
      },
    ],
  },
  { label: "Blue Light Discount", href: "/blue-light-card-discount" },
  { label: "Finance", href: "/finance" },
  { label: "Areas", href: "/areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Diagnostics", href: "/services/diagnostics" },
  { label: "Servicing", href: "/services/servicing" },
  { label: "Repairs", href: "/services/repairs" },
  { label: "Car-buying checks", href: "/services#car-buying-checks" },
  { label: "Air-con and MOT prep", href: "/services/repairs#air-con" },
];

export const FOOTER_LINKS = [
  { label: "Blue Light Discount", href: "/blue-light-card-discount" },
  { label: "Finance", href: "/finance" },
  { label: "Areas We Cover", href: "/areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export const SERVICE_SUB_NAV = [
  { label: "Overview", href: "/services" },
  { label: "Diagnostics", href: "/services/diagnostics" },
  { label: "Servicing", href: "/services/servicing" },
  { label: "Repairs", href: "/services/repairs" },
];
