import { SITE, CITIES } from "./config";

// Build a Next Metadata object with canonical + OG + Twitter.
export function meta({ title, description, path = "/", ogType = "website" }) {
  const url = SITE.domain + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName: SITE.name, locale: "en_US", type: ogType,
      images: [{ url: SITE.domain + "/assets/og-default.svg" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [SITE.domain + "/assets/og-default.svg"] },
  };
}

// JSON-LD helpers.
export function localBusinessSchema() {
  const { address: a, geo, hours } = SITE;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE.domain + "/#business",
    name: SITE.name,
    legalName: SITE.legal,
    description: SITE.description,
    telephone: SITE.phoneIntl,
    email: SITE.email,
    url: SITE.domain + "/",
    image: SITE.domain + "/assets/og-default.svg",
    logo: SITE.domain + "/assets/logo-horizontal.svg",
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      ...(a.street ? { streetAddress: a.street } : {}),
      addressLocality: a.city,
      addressRegion: a.region,
      ...(a.zip ? { postalCode: a.zip } : {}),
      addressCountry: a.country,
    },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    }],
  };

  if (geo.lat && geo.lng) {
    schema.geo = { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng };
  }
  if (SITE.profiles.length) {
    schema.sameAs = SITE.profiles;
  }
  return schema;
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: SITE.domain + t.href })),
  };
}
