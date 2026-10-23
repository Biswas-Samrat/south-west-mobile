# South West Mobile - Mobile Mechanic Website

Complete front-end website for **South West Mobile**, an established mobile mechanic business serving **Weston-super-Mare** and North Somerset (BS22, BS23, BS24 and surrounding 10-mile radius).

Built strictly according to the **Master Build Prompt & Design System Specification**.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS + Vanilla CSS utilities & design tokens
- **Icons:** `lucide-react` + custom SVGs (WhatsApp, Facebook Messenger, Payment Assist, Blue Light Card)
- **Fonts:** Inter (sans body) & Sora (geometric display headings)
- **Structured Data:** Schema.org JSON-LD (AutoRepair / LocalBusiness, FAQPage, BlogPost, BreadcrumbList)
- **State & Forms:** Client-side React hooks with comprehensive regex validation, zero backend/database requirements, instant WhatsApp message deep-links with clipboard fallback.

---

## 🚀 Routes & Architecture

| Route | Description |
|---|---|
| `/` | Complete 14-section home page (Hero, Marquee, Trust Bar, 3 Core Services, Why Us, Blue Light Banner, Real Jobs Carousel, How It Works, 0% Finance Strip, Service Area Map & Postcode Checker, Testimonials, Recent Blog Posts, FAQ Accordion, Final CTA) |
| `/services` | Services overview with core service cards, car-buying checks highlight, interactive A-Z repair chips, and FAQ |
| `/services/diagnostics` | Dedicated diagnostics service page (OBD-II, live data, smoke testing, DPF fault finding & case studies) |
| `/services/servicing` | Interim / Full / Major servicing packages, pollen filter inspection comparison, oil specs & checklist |
| `/services/repairs` | 8 anchored repair categories (Brakes, Clutch, Cambelt/Timing Chain, Suspension, Exhaust/DPF, Cooling/Radiator, Electrical, Tyre puncture/fitting), warning signs & finance callout |
| `/blue-light-card-discount` | Dedicated 20% labour discount page with perforated ticket visual, eligibility requirements, and claim workflow |
| `/finance` | 0% APR financing overview via Payment Assist (4-month interest-free split payment, calculator, real customer example) |
| `/areas` | Interactive postcode coverage checker (BS22, BS23, BS24 + North Somerset towns: Worle, Clevedon, Nailsea, Congresbury, Cheddar, Burnham-on-Sea) |
| `/reviews` | Verified customer reviews & direct links to review platforms |
| `/blog` | Technical articles, maintenance tips, warning light guides, and case studies with instant category/tag filtering |
| `/blog/[slug]` | Individual statically generated blog posts with read times, related articles, author credentials, and JSON-LD schema |
| `/about` | Mechanic bio (15+ years experience), van workshop equipment, and core operating values |
| `/faq` | Grouped FAQ categories with desktop sticky sidebar navigation |
| `/contact` | Direct communication channels (WhatsApp, Phone, Email, Facebook) + full interactive vehicle quote form with registration validation |
| `/privacy-policy` | UK GDPR compliant privacy notice covering vehicle VRN data, location details, WhatsApp interaction and data retention |
| `/terms` | Mobile mechanic terms of service covering roadside working conditions, parts warranties, and payment terms |

---

## 📋 Assumptions & Placeholders

Per project specifications, where specific real-world company details are awaiting final confirmation from the business owner, they are centralized in [`src/content/site.ts`](file:///c:/Users/HP/Desktop/South%20west%20mobile/south-west-mobile/src/content/site.ts) and annotated with `// [CONFIRM]`:

1. **Company Legal Registration:** `SITE.legalName`, `SITE.companyNumber`, and `SITE.registeredAddress` are currently set to `null` pending formal Companies House registration details.
2. **Physical Workshop / Base:** `SITE.workshopAddress` is set to Weston-super-Mare operating base. As a 100% mobile mechanic business, all customer services are performed on-site at home or workplace.
3. **External Review Platform URLs:** Links for Google Business Profile, Yell, and Facebook Reviews are structured in `src/content/site.ts` to easily populate live URLs once live claiming is finalized.
4. **Operating Hours:** Default standard mobile working hours are Mon–Fri 08:00–18:00, Sat 08:00–16:00, with emergency call-outs available by prior phone arrangement.

---

## 💻 Getting Started Locally

```bash
# Navigate to project directory
cd south-west-mobile

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Runs at `http://localhost:3000`.
