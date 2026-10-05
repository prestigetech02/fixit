import type { Service } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export type JsonLd = Record<string, unknown>;

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationJsonLd(): JsonLd {
  const { address } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": organizationId,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/brand/logo.png"),
    image: absoluteUrl(siteConfig.ogImage.url),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate Agidingbi / ACME Road, Lagos
      latitude: 6.6205,
      longitude: 3.3492,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    priceRange: "$$",
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/what-we-do/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: "Facility Management",
  };
}

export type PersonInput = {
  name: string;
  jobTitle: string;
  image?: string;
};

export function personJsonLd(people: PersonInput[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FixIt Management Team",
    itemListElement: people.map((person, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: person.name,
        jobTitle: person.jobTitle,
        ...(person.image ? { image: absoluteUrl(person.image) } : {}),
        worksFor: { "@id": organizationId },
      },
    })),
  };
}

export function sitewideJsonLd(): JsonLd[] {
  return [organizationJsonLd(), websiteJsonLd()];
}
