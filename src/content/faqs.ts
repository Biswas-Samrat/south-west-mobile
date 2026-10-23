import type { Faq } from "@/types";

export const FAQS: Faq[] = [
  /* ── Booking and quotes ────────────────────────────────── */
  {
    id: "how-to-get-a-quote",
    group: "Booking and quotes",
    question: "How do I get a quote?",
    answer:
      "Use our online quote form or call 07454 986543. Tell us your vehicle registration, your postcode and what's needed. We'll get back to you promptly with an honest quote.",
    home: true,
  },
  {
    id: "do-you-come-to-me",
    group: "Booking and quotes",
    question: "Do you really come to me?",
    answer:
      "Yes. We come to your home or workplace anywhere within roughly 10 miles of Weston-super-Mare. No towing and no waiting rooms. For bigger jobs we also have a workshop.",
    home: true,
  },
  {
    id: "pre-purchase-check",
    group: "Booking and quotes",
    question: "Can you check a car before I buy it?",
    answer:
      "Yes. You can hire us to come and view a car with you and give you honest advice. Don't buy a car blind.",
    home: true,
  },

  /* ── Services ──────────────────────────────────────────── */
  {
    id: "do-i-need-new-dpf",
    group: "Services",
    question: "Do I really need a new DPF?",
    answer:
      "Not as often as some garages make out. Many DPF warnings come from faults such as split pipes, pressure sensors and pipes, glow plugs or air-flow sensors. Get a second opinion before you spend big money.",
    home: true,
  },
  {
    id: "mot-prep",
    group: "Services",
    question: "Do you do MOT prep?",
    answer:
      "Yes. We do MOT prep and repairs for anything that needs fixing before the test.",
  },
  {
    id: "too-big-for-driveway",
    group: "Services",
    question: "What if the job is too big for a driveway?",
    answer:
      "We never turn a job away. Mobile service is our main priority, and our new workshop means we can take on bigger work too.",
  },
  {
    id: "are-you-insured",
    group: "Services",
    question: "Are you insured?",
    answer: "Yes. We're fully insured.",
  },

  /* ── Pricing and finance ───────────────────────────────── */
  {
    id: "blue-light-discount",
    group: "Pricing and finance",
    question: "How does the Blue Light Card discount work?",
    answer:
      "Show your Blue Light Card to claim 20% off all labour on services, repairs and diagnostics. Mention it when you message or call.",
    home: true,
  },
  {
    id: "spread-the-cost",
    group: "Pricing and finance",
    question: "Can I spread the cost of a repair?",
    answer:
      "Yes. We offer 0% APR Payment Assist plans over 3, 4 or 6 months for unexpected repairs. Subject to status.",
    home: true,
  },

  /* ── Areas and workshop ────────────────────────────────── */
  {
    id: "areas-covered",
    group: "Areas and workshop",
    question: "Which areas do you cover?",
    answer:
      "We're based in Weston-super-Mare and cover a 10-mile radius, including the town and surrounding areas. Send us your postcode and we'll confirm.",
  },
  {
    id: "do-you-have-workshop",
    group: "Areas and workshop",
    question: "Do you have a workshop?",
    answer:
      "Yes. Our new workshop lets us offer more services. Mobile service is still our main priority.",
  },
];

export function getHomeFaqs(): Faq[] {
  return FAQS.filter((f) => f.home);
}

export function getFaqsByGroup(): Record<string, Faq[]> {
  return FAQS.reduce(
    (acc, faq) => {
      if (!acc[faq.group]) acc[faq.group] = [];
      acc[faq.group].push(faq);
      return acc;
    },
    {} as Record<string, Faq[]>,
  );
}
