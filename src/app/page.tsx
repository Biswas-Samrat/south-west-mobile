import heroImg from "../public/the home hero.png";

import { Phone, MapPin, BadgeCheck, ShieldCheck, CreditCard, Siren } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SITE } from "@/content/site";
import { QuickQuoteCard } from "@/components/forms/QuickQuoteCard";
import { HeroCtaGroup, ServiceQuoteButton } from "@/components/forms/QuoteButtons";
import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { SwooshDivider } from "@/components/ui/SwooshDivider";
import { RoadDivider } from "@/components/ui/RoadDivider";
import { Section, SectionHeading, StatTile, Card, CheckList, StepList, TicketCard, Accordion } from "@/components/ui";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DiscountCallout } from "@/components/sections/shared/DiscountCallout";
import { PostCard } from "@/components/blog/PostCard";
import { SERVICES } from "@/content/services";
import { CASE_STUDIES } from "@/content/case-studies";
import { getHomeFaqs } from "@/content/faqs";
import { TESTIMONIALS } from "@/content/testimonials";
import { AREAS } from "@/content/areas";
import { FINANCE } from "@/content/finance";
import { getLatestPosts } from "@/lib/posts";
import { PostcodeChecker } from "@/components/forms/PostcodeChecker";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { blueLightQuoteUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Link from "next/link";
import {
  Truck,
  Search,
  PoundSterling,
  CarFront,
  ScanLine,
  Wrench,
  Gauge,
  Check,
  Quote,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const homeFaqs = getHomeFaqs();
  const latestPosts = getLatestPosts(3);

  return (
    <>






      {/* ─── HERO ─── */}
      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#0A1450]"
      >
        {/*
    One looping 12s "job" story: van drives in, parks at the house, drives off.
    0–40% arriving · 40–80% parked · 80–100% leaving.
    With reduced motion: no movement, van stays parked and the final status shows.
  */}
        <style>{`
    .hero-s1, .hero-s2 { opacity: 0; }
    .hero-wheel { transform-box: fill-box; transform-origin: center; }

    @media (prefers-reduced-motion: no-preference) {
      .hero-van   { animation: hero-van 12s infinite; }
      .hero-wheel { animation: hero-wheel 12s infinite; }
      .hero-s1    { animation: hero-s1 12s infinite; }
      .hero-s2    { animation: hero-s2 12s infinite; }
      .hero-s3    { animation: hero-s3 12s infinite; }
      .hero-orbit { animation: hero-orbit 28s linear infinite; }
    }

    @keyframes hero-orbit { to { transform: rotate(360deg); } }

    @keyframes hero-van {
      0%   { left: -14%; animation-timing-function: cubic-bezier(.2,.7,.3,1); }
      40%  { left: 58%; }
      80%  { left: 58%; animation-timing-function: cubic-bezier(.6,0,.9,.4); }
      100% { left: 114%; }
    }
    @keyframes hero-wheel {
      0%   { transform: rotate(0); animation-timing-function: cubic-bezier(.2,.7,.3,1); }
      40%  { transform: rotate(2160deg); }
      80%  { transform: rotate(2160deg); animation-timing-function: cubic-bezier(.6,0,.9,.4); }
      100% { transform: rotate(4320deg); }
    }
    @keyframes hero-s1 {
      0%        { opacity: 0; transform: translateY(6px); }
      3%, 36%   { opacity: 1; transform: none; }
      40%, 100% { opacity: 0; transform: translateY(-6px); }
    }
    @keyframes hero-s2 {
      0%, 40%   { opacity: 0; transform: translateY(6px); }
      44%, 60%  { opacity: 1; transform: none; }
      64%, 100% { opacity: 0; transform: translateY(-6px); }
    }
    @keyframes hero-s3 {
      0%, 64%   { opacity: 0; transform: translateY(6px); }
      68%, 92%  { opacity: 1; transform: none; }
      96%, 100% { opacity: 0; transform: translateY(-6px); }
    }
  `}</style>

        <Container className="relative py-10 sm:py-14 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* ── Copy ── */}
            <div className="relative z-10 min-w-0 lg:col-span-7">
              <h1
                id="hero-heading"
                className="max-w-[18ch] font-display text-[clamp(2.2rem,5.2vw,4.1rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white text-balance"
              >
                <span className="block">Mobile mechanic in Weston-super-Mare.</span>
                <span className="mt-2 block sm:mt-3">We come to you.</span>
              </h1>

              <p className="mt-5 max-w-[52ch] text-base leading-7 text-[#C7D0F0] text-pretty sm:mt-6 sm:text-lg sm:leading-8">
                Honest servicing, diagnostics and repairs at your home or workplace.
                With 15+ years of experience, you get expert car care without towing
                or waiting rooms.
              </p>

              {/* Job tracker: the van drives to the house, the status line follows it.
            Buttons sit under it from sm up; on mobile only the tracker shows. */}
              <div className="mt-7 max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#050A26] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] sm:mt-8">
                <p className="sr-only">
                  We drive to you, find the fault and fix it at your door.
                </p>

                {/* Status line */}
                <div aria-hidden="true" className="flex items-center gap-2.5 px-4 pt-4 sm:px-5">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#22C7E8] ring-4 ring-[#22C7E8]/20" />
                  <div className="relative h-5 min-w-0 flex-1 text-sm font-semibold leading-5 text-white">
                    <span className="hero-s1 absolute inset-0 truncate">Mechanic on the way</span>
                    <span className="hero-s2 absolute inset-0 truncate">Arrived. Finding the fault.</span>
                    <span className="hero-s3 absolute inset-0 truncate">Fixed properly, first time.</span>
                  </div>
                </div>

                {/* Road */}
                <div aria-hidden="true" className="relative mt-2 h-16 overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-9 border-t border-white/15 bg-[#0E1A5C]" />
                  <div
                    className="absolute inset-x-0 bottom-[15px] h-0.5 opacity-40"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg,#fff 0 18px,transparent 18px 36px)",
                    }}
                  />

                  {/* The customer's house */}
                  <svg
                    viewBox="0 0 36 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute bottom-[35px] left-[58%] h-7 w-9 -translate-x-1/2 text-white/45"
                  >
                    <path d="M3 14 18 3l15 11M7 12v14h22V12M15 26v-8h6v8" />
                  </svg>

                  {/* The van */}
                  <div className="hero-van absolute bottom-[3px] left-[58%] w-[76px] -translate-x-1/2">
                    <svg viewBox="0 0 96 48" fill="none" className="block h-auto w-full">
                      <rect x="2" y="8" width="66" height="28" rx="4" fill="#fff" />
                      <rect x="2" y="24" width="66" height="4" fill="#22C7E8" />
                      <path d="M68 14h13c1.5 0 2.5.6 3.4 1.8L92 26v10H68z" fill="#fff" />
                      <path d="M73 18h7.5l6 8H73z" fill="#0A1450" />
                      <circle cx="90" cy="31" r="2" fill="#7ADCF0" />
                      <circle cx="22" cy="38" r="8" fill="#050A26" stroke="#fff" strokeWidth="2" />
                      <g className="hero-wheel">
                        <path d="M22 32v12M16 38h12" stroke="#22C7E8" strokeWidth="2" strokeLinecap="round" />
                      </g>
                      <circle cx="76" cy="38" r="8" fill="#050A26" stroke="#fff" strokeWidth="2" />
                      <g className="hero-wheel">
                        <path d="M76 32v12M70 38h12" stroke="#22C7E8" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Buttons: hidden on mobile */}
                <div className="hidden border-t border-white/15 bg-white p-4 sm:block sm:p-5">
                  <HeroCtaGroup />
                </div>
              </div>

              {/* Trust points */}
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 sm:mt-8">
                {[
                  { icon: BadgeCheck, text: "15+ years’ experience" },
                  { icon: ShieldCheck, text: "Fully insured" },
                  { icon: CreditCard, text: "0% APR finance available" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#22C7E8]" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Service-area dial: the 10-mile radius ── */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-[250px] sm:max-w-[380px] lg:max-w-[440px]">
                {/* Rings bleed past the edges of the section */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 760 760"
                  fill="none"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[190%] w-[190%] max-w-none -translate-x-1/2 -translate-y-1/2"
                >
                  <circle cx="380" cy="380" r="150" stroke="#fff" strokeOpacity=".16" />
                  {/* The coverage ring */}
                  <circle
                    cx="380"
                    cy="380"
                    r="200"
                    stroke="#22C7E8"
                    strokeOpacity=".7"
                    strokeWidth="2"
                    strokeDasharray="3 9"
                    strokeLinecap="round"
                  />
                  <circle cx="380" cy="380" r="270" stroke="#fff" strokeOpacity=".1" />
                  <circle cx="380" cy="380" r="350" stroke="#fff" strokeOpacity=".07" />
                  <circle cx="380" cy="380" r="430" stroke="#fff" strokeOpacity=".05" />
                  <rect
                    x="188"
                    y="507"
                    width="102"
                    height="28"
                    rx="14"
                    fill="#0A1450"
                    stroke="#22C7E8"
                    strokeOpacity=".6"
                  />
                  <text
                    x="239"
                    y="526"
                    textAnchor="middle"
                    fill="#7ADCF0"
                    fontSize="15"
                    fontWeight="600"
                  >
                    10 miles
                  </text>
                </svg>

                {/* Car driving round the 10-mile ring (parked at the top with reduced motion) */}
                <div aria-hidden="true" className="hero-orbit pointer-events-none absolute inset-0">
                  <svg
                    viewBox="0 0 48 24"
                    fill="none"
                    className="absolute left-1/2 top-0 block h-auto w-9 sm:w-11"
                    style={{ transform: "translate(-50%, calc(-100% + 3px))" }}
                  >
                    <rect x="2" y="10" width="44" height="8" rx="2.5" fill="#fff" />
                    <path d="M13 10 18 3.5H31L37 10z" fill="#fff" />
                    <path d="M16.5 9 19.5 5H29.8L33.5 9z" fill="#0A1450" />
                    <path d="M25 5v4" stroke="#fff" strokeWidth="1.2" />
                    <rect x="2" y="13.5" width="44" height="2" fill="#22C7E8" />
                    <circle cx="44" cy="12.5" r="1.3" fill="#7ADCF0" />
                    <circle cx="12" cy="18" r="4.2" fill="#050A26" stroke="#fff" strokeWidth="1.6" />
                    <circle cx="12" cy="18" r="1.2" fill="#22C7E8" />
                    <circle cx="36" cy="18" r="4.2" fill="#050A26" stroke="#fff" strokeWidth="1.6" />
                    <circle cx="36" cy="18" r="1.2" fill="#22C7E8" />
                  </svg>
                </div>

                {/* Mascot */}
                <div className="absolute inset-0 m-auto h-[58%] w-[58%] overflow-hidden rounded-full border-[3px] border-[#22C7E8] bg-mist-100 p-1.5">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={heroImg}
                      alt="Mobile mechanic mascot"
                      fill
                      priority
                      sizes="(min-width: 1024px) 255px, (min-width: 640px) 220px, 145px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Blue Light Card offer */}
                <div className="absolute right-0 top-[4%] flex max-w-[11.5rem] -rotate-3 items-center gap-2.5 rounded-xl border border-white/20 bg-bluelight-600 px-3 py-2.5 text-white shadow-lg sm:-right-3 sm:max-w-[13rem] sm:px-3.5">
                  <Siren className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm font-extrabold leading-tight">
                    20% off labour
                    <span className="block text-xs font-medium text-white/85">
                      with a Blue Light Card
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Quote Card */}
          <div className="relative z-20 mt-10 sm:mt-12 lg:-mb-12 lg:mt-14">
            <QuickQuoteCard />
          </div>
        </Container>
      </section>





      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── TRUST BAR ─── */}
      <Section tone="white" className="py-10 md:py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          <StatTile value="15+" label="Years' experience" />
          <StatTile value="10 miles" label="Coverage from Weston-super-Mare" />
          <StatTile value="0% APR" label="Payment plans over 3, 4 and 6 months" />
          <StatTile value="20% off" label="Labour for Blue Light Card holders" />
          <StatTile value="Fully insured" label="Reliable, professional repairs" className="col-span-2 md:col-span-1" />
        </div>
      </Section>

      <SwooshDivider />

      {/* ─── SERVICES TABS ─── */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything your car needs, brought to you."
          lead="Diagnostics, servicing and repairs at your home or workplace."
        />

        {/* Simple service cards instead of interactive tabs for SSR */}
        <div className="space-y-6">
          {SERVICES.map((service) => {
            const iconMap: Record<string, React.ReactNode> = {
              ScanLine: <ScanLine className="h-6 w-6" />,
              Wrench: <Wrench className="h-6 w-6" />,
              Gauge: <Gauge className="h-6 w-6" />,
            };
            return (
              <Card key={service.slug} hover className="md:flex md:gap-8">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-900">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p className="mb-4 text-ink-700">{service.summary}</p>
                  <CheckList items={service.bullets} />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ServiceQuoteButton serviceName={service.shortTitle}>
                      Book {service.shortTitle.toLowerCase()}
                    </ServiceQuoteButton>
                    <Button variant="link" href={service.href}>
                      {service.shortTitle} details →
                    </Button>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-80 lg:w-96">
                  <ImagePlaceholder
                    aspect="aspect-[4/3]"
                    caption={`${service.slug}.webp`}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <DiscountCallout />
      </Section>

      <SwooshDivider flip />

      {/* ─── WHY CHOOSE US ─── */}
      <Section tone="white">
        <SectionHeading
          title="Why drivers around Weston-super-Mare trust us."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Truck, title: "We come to you.", text: "At home or at work. No towing, no waiting rooms. We fix it while you get on with your day." },
            { icon: Search, title: "Honest diagnosis.", text: "We find the actual fault and tell you straight when you don't need that expensive part." },
            { icon: PoundSterling, title: "Fair, competitive pricing.", text: "Honest quotes and we won't be beaten on price." },
            { icon: ShieldCheck, title: "Fully insured.", text: "Reliable, professional repairs and maintenance you can trust." },
            { icon: CreditCard, title: "Spread the cost.", text: "0% APR payment plans over 3, 4 or 6 months for unexpected repairs." },
            { icon: CarFront, title: "Buying a car? Don't buy blind.", text: "Hire us to view a car with you and get honest advice before you hand over the money." },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-ink-900">{title}</h3>
              <p className="text-ink-700">{text}</p>
            </Card>
          ))}
        </div>
        {/* Pull quote */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <Quote className="mx-auto mb-3 h-8 w-8 text-grape-500" aria-hidden="true" />
          <blockquote className="font-display text-xl font-bold italic text-ink-900 md:text-2xl">
            &ldquo;We believe doing the job right is better than doing the job fast and twice.&rdquo;
          </blockquote>
        </div>
      </Section>

      <SwooshDivider />

      {/* ─── BLUE LIGHT BANNER ─── */}
      <Section tone="navy" className="py-0 md:py-0 lg:py-0">
        <TicketCard>
          <div className="md:flex md:items-center md:gap-10 lg:gap-14">
            <div className="flex-1">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-aqua-300">
                Thank you for what you do
              </p>
              <p className="font-display text-[96px] font-extrabold leading-none tracking-tight gradient-text-dark lg:text-[160px]">
                20%
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-white md:text-3xl">
                OFF ALL LABOUR
              </p>
              <p className="mt-4 max-w-md text-[#C7D0F0]">
                We look after those who look after us. Show your Blue Light Card
                to claim 20% off labour on services, repairs and diagnostics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="whatsapp"
                  size="md"
                  href={blueLightQuoteUrl()}
                  iconLeft={<WhatsAppIcon />}
                >
                  Claim on WhatsApp
                </Button>
                <Button variant="outline-light" size="md" href="/blue-light-card-discount">
                  How it works
                </Button>
              </div>
              <p className="mt-4 text-xs text-ink-300">
                Valid Blue Light Card required. Show your card to claim.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-56 lg:w-72">
              <div className="-rotate-6 rounded-2xl bg-bluelight-600 p-6 shadow-lg">
                <div className="h-3 w-16 rounded bg-white/30" />
                <p className="mt-4 text-lg font-bold text-white">BLUE LIGHT</p>
                <p className="text-sm font-semibold text-white/80">CARD</p>
                <div className="mt-6 flex gap-2">
                  <div className="h-2 w-8 rounded bg-white/20" />
                  <div className="h-2 w-8 rounded bg-white/20" />
                  <div className="h-2 w-8 rounded bg-white/20" />
                  <div className="h-2 w-8 rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </TicketCard>
      </Section>

      <SwooshDivider flip />

      {/* ─── REAL JOBS ─── */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="REAL JOBS FROM OUR WORKSHOP AND DRIVEWAYS"
          title="Real jobs. Real savings."
          lead="No marketing fluff. Here's what we actually found on real customers' cars."
        />
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-px-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {CASE_STUDIES.slice(0, 3).map((cs) => (
            <Card key={cs.id} className="w-[85%] shrink-0 snap-start md:w-auto">
              <h3 className="mb-3 font-display text-lg font-bold text-ink-900">
                {cs.title}
              </h3>
              <p className="text-sm text-ink-500">{cs.vehicle}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-ink-900">What they were told:</span>{" "}
                  {cs.told}
                </p>
                <p>
                  <span className="font-semibold text-ink-900">What we found:</span>{" "}
                  {cs.found}
                </p>
                <div className="flex items-center gap-2 text-success-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span className="font-semibold">{cs.result}</span>
                </div>
              </div>
              {cs.quotedPrice && cs.fixedPrice && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-lg font-bold text-ink-500 line-through">
                    {cs.quotedPrice}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
                  <span className="text-lg font-bold text-success-600">
                    {cs.fixedPrice}
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="link" href="/blog">
            See all recent jobs →
          </Button>
        </div>
      </Section>

      <RoadDivider />

      {/* ─── HOW IT WORKS ─── */}
      <Section tone="white">
        <SectionHeading title="Getting your car sorted is simple." />
        <StepList
          items={[
            { title: "Message or call.", text: "Tell us what's wrong on WhatsApp or ring 07454 986543. A reg number, photos or a video of the noise all help." },
            { title: "Honest diagnosis and quote.", text: "We work out the real fault and give you a clear quote." },
            { title: "We come to you.", text: "At your home or workplace across Weston-super-Mare and a 10-mile radius, or visit our workshop." },
            { title: "Back on the road.", text: "Fixed properly the first time. Need to spread the cost? Ask about 0% APR." },
          ]}
        />
      </Section>

      <SwooshDivider />

      {/* ─── FINANCE ─── */}
      <Section tone="navy">
        <SectionHeading
          title="Unexpected repair bill? Spread the cost."
          lead="Don't let repair bills stretch your finances. Ask us about our 0% APR Payment Assist plans."
          onDark
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {FINANCE.plans.map((plan) => (
            <div
              key={plan.months}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="font-display text-[56px] font-extrabold leading-none text-aqua-400">
                {plan.months}
              </p>
              <p className="mt-2 text-lg font-bold text-white">months</p>
              <p className="mt-1 text-sm text-ink-300">{plan.apr} APR</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-300">
          {FINANCE.disclaimer}
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary-red" size="md" href="/finance">
            Apply or enquire about finance
          </Button>
          <Button variant="outline-light" size="md" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </Button>
        </div>
      </Section>

      <SwooshDivider flip />

      {/* ─── COVERAGE ─── */}
      <Section tone="mist">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              title="Based in Weston-super-Mare. Covering 10 miles around."
              align="left"
            />
            <p className="mb-6 text-ink-700">
              We bring expert car care to the town and all surrounding areas. Drop
              us a message to check we cover your postcode.
            </p>
            <PostcodeChecker />
            <div className="mt-6 flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <Chip key={area.name}>
                  {area.name}
                  {area.postcodes && (
                    <span className="text-ink-500">
                      {" "}
                      ({area.postcodes.join(", ")})
                    </span>
                  )}
                </Chip>
              ))}
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center lg:mt-0">
            {/* SVG radius illustration */}
            <svg viewBox="0 0 400 400" className="h-full max-h-[360px] w-full max-w-[360px]">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#1B2C8C" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#19B0D2" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="#22C7E8" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="8" fill="#22C7E8" />
              <text x="200" y="230" textAnchor="middle" fill="#22C7E8" fontSize="11" fontWeight="bold">
                Weston-super-Mare
              </text>
              <text x="200" y="65" textAnchor="middle" fill="#5B6690" fontSize="10">
                10 miles
              </text>
            </svg>
          </div>
        </div>
      </Section>

      <SwooshDivider />

      {/* ─── TESTIMONIALS ─── */}
      <Section tone="white">
        <SectionHeading title="What customers say." />
        <div className="mx-auto max-w-3xl">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 text-grape-500" aria-hidden="true" />
              <blockquote className="text-lg leading-relaxed text-ink-700 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-ink-900">{t.author}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-ink-500">Read more reviews on</span>
          {SITE.reviewLinks.google && (
            <Button variant="outline-navy" size="sm" href={SITE.reviewLinks.google}>Google</Button>
          )}
          {SITE.reviewLinks.yell && (
            <Button variant="outline-navy" size="sm" href={SITE.reviewLinks.yell}>Yell</Button>
          )}
          {SITE.reviewLinks.facebook && (
            <Button variant="outline-navy" size="sm" href={SITE.reviewLinks.facebook}>Facebook</Button>
          )}
          {!SITE.reviewLinks.google && !SITE.reviewLinks.yell && !SITE.reviewLinks.facebook && (
            <span className="text-sm text-ink-500">Google, Yell and Facebook</span>
          )}
        </div>
      </Section>

      <RoadDivider />

      {/* ─── LATEST POSTS ─── */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="FROM THE WORKSHOP"
          title="Latest updates and car advice."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="link" href="/blog">
            View all posts →
          </Button>
        </div>
      </Section>

      <SwooshDivider />

      {/* ─── FAQ ─── */}
      <Section tone="white">
        <SectionHeading title="Common questions." />
        <div className="mx-auto max-w-3xl">
          <Accordion
            items={homeFaqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
          />
          <div className="mt-6 text-center">
            <Button variant="link" href="/faq">
              See all FAQs →
            </Button>
          </div>
        </div>
        <JsonLd data={faqSchema(homeFaqs)} />
      </Section>

      {/* ─── FINAL CTA ─── */}
      <CtaBand />
    </>
  );
}