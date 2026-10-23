import { SITE } from "@/content/site";
import type { Post } from "@/types";

export function autoRepairSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.siteUrl}/#business`,
    name: SITE.name,
    slogan: SITE.tagline,
    description:
      "Mobile mechanic in Weston-super-Mare with over 15 years' experience. Servicing, diagnostics and repairs at your door.",
    url: SITE.siteUrl,
    telephone: SITE.phoneTel,
    email: SITE.email,
    logo: `${SITE.siteUrl}/images/brand/logo.svg`,
    image: `${SITE.siteUrl}/og/og-default.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      geoRadius: "16093",
    },
    sameAs: [SITE.facebookUrl].filter(Boolean),
    knowsAbout: [
      "Car diagnostics",
      "Car servicing",
      "Brake repairs",
      "Clutch replacement",
      "Cambelt replacement",
      "DPF diagnosis and repair",
      "Engine replacement",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile mechanic services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Diagnostics" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Servicing" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Repairs" },
        },
      ],
    },
  };

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.siteUrl,
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.siteUrl}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "AutoRepair",
      "@id": `${SITE.siteUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: SITE.locality,
    },
  };
}

export function blogPostSchema(post: Post) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image
      ? `${SITE.siteUrl}${post.image.src}`
      : `${SITE.siteUrl}/og/og-default.png`,
    author: {
      "@type": "AutoRepair",
      "@id": `${SITE.siteUrl}/#business`,
      name: SITE.name,
    },
    publisher: {
      "@type": "AutoRepair",
      "@id": `${SITE.siteUrl}/#business`,
      name: SITE.name,
    },
  };

  if (post.publishedAt) {
    schema.datePublished = post.publishedAt;
  }

  return schema;
}
