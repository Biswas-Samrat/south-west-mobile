import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Section, SectionHeading, Chip } from "@/components/ui";
import { PostcodeChecker } from "@/components/forms/PostcodeChecker";
import { AREAS } from "@/content/areas";
import { SITE } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Mechanic Areas Covered",
  description: "South West Mobile covers Weston-super-Mare and a 10-mile radius across North Somerset. Check your postcode and we'll come to you.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Areas", href: "/areas" }]}
        eyebrow="AREAS WE COVER"
        title="Mobile Mechanic Covering Weston-super-Mare and North Somerset"
        lead="Based in Weston-super-Mare, covering a 10-mile radius."
      />

      <Section tone="white">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading title="We come to your home or workplace" align="left" />
            <p className="mb-6 text-ink-700">
              Not sure if you&apos;re in range? Send us your postcode and we&apos;ll confirm.
              Mobile service is our main priority. Our workshop is also available for bigger jobs.
            </p>
            {SITE.workshopAddress && (
              <p className="mb-4 text-sm text-ink-500">Workshop: {SITE.workshopAddress}</p>
            )}
            <PostcodeChecker />
            <div className="mt-6 flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <Chip key={area.name}>
                  {area.name}
                  {area.postcodes && <span className="text-ink-500"> ({area.postcodes.join(", ")})</span>}
                </Chip>
              ))}
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center lg:mt-0">
            <svg viewBox="0 0 400 400" className="h-full max-h-[360px] w-full max-w-[360px]">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#1B2C8C" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#19B0D2" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="#22C7E8" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="8" fill="#22C7E8" />
              <text x="200" y="230" textAnchor="middle" fill="#22C7E8" fontSize="11" fontWeight="bold">Weston-super-Mare</text>
              <text x="200" y="65" textAnchor="middle" fill="#5B6690" fontSize="10">10 miles</text>
            </svg>
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }])} />
    </>
  );
}
