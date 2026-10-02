import type { Metadata } from "next";

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL when needed. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://fixitmulticoncepts.com";

export const siteConfig = {
  name: "FixIt",
  legalName: "FixIt Facility Management",
  tagline: "Nigeria's first-choice facility managers",
  description:
    "FixIt Facility Management delivers custodial hygiene, landscaping, security, waste management, HVAC, electrical, and facility operations across Nigeria's busiest public and commercial spaces.",
  url: siteUrl,
  locale: "en_NG",
  language: "en-NG",
  email: "info@fixitmulticoncepts.com",
  phone: "+2349169221713",
  phoneDisplay: "+234 916 922 1713",
  address: {
    street: "9a, Ajumobi Olorunoje street, Off ACME road, Agidingbi",
    locality: "Lagos",
    region: "Lagos State",
    country: "NG",
    countryName: "Nigeria",
  },
  /** Default share image (1200×630). */
  ogImage: {
    url: "/og/default.png",
    width: 1200,
    height: 630,
    alt: "FixIt Facility Management in Lagos, Nigeria",
  },
  /** Leave a URL empty until the account exists; its icon shows as "coming soon". */
  social: {
    facebook: "https://www.facebook.com/share/1HXfT5nVC3/",
    instagram: "https://www.instagram.com/fixit_mgt/",
    linkedin: "",
    youtube: "",
  },
  keywords: [
    "FixIt",
    "FixIt Facility Management",
    "facility management Lagos",
    "facility management Nigeria",
    "janitorial services Nigeria",
    "HVAC maintenance Lagos",
    "waste management Nigeria",
    "security and access control",
    "custodial services",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  /** Bypass the root `%s | FixIt` title template (use for the homepage). */
  absoluteTitle?: boolean;
};

/** Shared metadata builder for later page-level SEO passes. */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage.url,
  noIndex = false,
  absoluteTitle = false,
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialTitle = absoluteTitle
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.legalName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : undefined),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Facility Management in Lagos, Nigeria`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: [{ url: "/brand/logo.png", type: "image/png" }],
    shortcut: "/brand/logo.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Facility Management in Lagos, Nigeria`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Facility Management in Lagos, Nigeria`,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Facility Management",
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
};
