import type { Metadata } from "next";
import { SITE } from "@/content/site";

interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: BuildMetadataParams): Metadata {
  const url = `${SITE.siteUrl}${path}`;
  const ogImage = image || `${SITE.siteUrl}/og/og-default.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: "en_GB",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
  };
}
