import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "diagnostics",
    title: "Mobile Car Diagnostics",
    shortTitle: "Diagnostics",
    icon: "ScanLine",
    summary:
      "Warning light on? Strange noise? Losing power? We find the real fault before you spend a penny on parts you don't need.",
    bullets: [
      "Engine warning lights and fault codes",
      "Misfires, loss of power and rough running",
      "DPF faults (we repair, not just replace)",
      "Belt, bearing, knocking and brake noises",
      "Battery, charging and electrical faults",
      "Oil leaks and oil-pressure warnings",
    ],
    href: "/services/diagnostics",
    whatsappService: "Diagnostics",
  },
  {
    slug: "servicing",
    title: "Mobile Car Servicing",
    shortTitle: "Servicing",
    icon: "Wrench",
    summary:
      "From oil and filter changes to full services, done on your driveway or at your workplace, with an honest check-over while we're there.",
    bullets: [
      "Oil and filter service",
      "Full service",
      "Battery test",
      "Brake inspection",
      "Cabin/pollen filter",
      "Air-con",
      "Pre-MOT checks",
    ],
    href: "/services/servicing",
    whatsappService: "Servicing",
  },
  {
    slug: "repairs",
    title: "Mobile Car Repairs",
    shortTitle: "Repairs",
    icon: "Gauge",
    summary:
      "From brakes and clutches to timing belts and engine replacements. No job turned away, big or small.",
    bullets: [
      "Brakes and suspension",
      "Clutch and gearbox repairs",
      "Cambelts, timing belts and wet belts",
      "Engine repairs and replacements",
      "Starters, alternators and electrical",
      "Air-con and MOT-failure repairs",
    ],
    href: "/services/repairs",
    whatsappService: "Repairs",
  },
];

export const ALL_SERVICE_CHIPS = [
  { label: "Air-con", href: "/services/repairs#air-con" },
  { label: "Alternators and starters", href: "/services/repairs#electrical" },
  { label: "Batteries", href: "/services/repairs#electrical" },
  { label: "Brakes", href: "/services/repairs#brakes-suspension" },
  { label: "Cambelts", href: "/services/repairs#cambelts" },
  { label: "Clutches", href: "/services/repairs#clutch-gearbox" },
  { label: "DPF repairs", href: "/services/repairs#dpf" },
  { label: "Diagnostics", href: "/services/diagnostics" },
  { label: "Engine replacements", href: "/services/repairs#engine" },
  { label: "Gearbox", href: "/services/repairs#clutch-gearbox" },
  { label: "MOT prep", href: "/services/repairs#mot-prep" },
  { label: "Servicing", href: "/services/servicing" },
  { label: "Suspension", href: "/services/repairs#brakes-suspension" },
  { label: "Timing/wet belts", href: "/services/repairs#cambelts" },
  { label: "Wheel bearings", href: "/services/repairs#brakes-suspension" },
  { label: "Window regulators", href: "/services/repairs#electrical" },
];

export const SERVICE_OPTIONS = [
  "Diagnostics",
  "Servicing: oil and filter",
  "Servicing: full service",
  "Brakes and suspension",
  "Clutch and gearbox",
  "Cambelt / timing belt",
  "Engine repair or replacement",
  "DPF problem",
  "Electrical (battery, alternator, starter)",
  "Air-con",
  "MOT prep",
  "Pre-purchase car check",
  "Breakdown",
  "Not sure / something else",
];
