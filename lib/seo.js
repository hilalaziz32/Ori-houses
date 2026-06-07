import { SITE } from "./config";

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
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE.domain + "/#business",
    name: SITE.name,
    legalName: SITE.legal,
    telephone: SITE.phoneIntl,
    email: SITE.email,
    url: SITE.domain + "/",
    image: SITE.domain + "/assets/og-default.svg",
    address: { "@type": "PostalAddress", addressLocality: "Indianapolis", addressRegion: "IN", addressCountry: "US" },
    areaServed: ["Indianapolis", "Fort Wayne", "South Bend", "Kokomo", "Anderson"].map((n) => ({ "@type": "City", name: n })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.rating, reviewCount: SITE.ratingCount, bestRating: "5" },
  };
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
