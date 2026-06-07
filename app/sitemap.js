import { SITE, CITIES, SITUATIONS, POSTS } from "@/lib/config";

export default function sitemap() {
  const lastModified = "2026-06-07";
  const paths = [
    "/", "/how-it-works", "/about", "/reviews", "/faq", "/contact",
    "/markets", ...CITIES.map((c) => `/markets/${c.slug}`),
    "/situations", ...SITUATIONS.map((s) => `/situations/${s.slug}`),
    "/blog", ...POSTS.map((p) => `/blog/${p.slug}`),
    "/legal/privacy", "/legal/terms", "/legal/sms-terms",
  ];
  return paths.map((p) => ({ url: SITE.domain + p, lastModified }));
}
