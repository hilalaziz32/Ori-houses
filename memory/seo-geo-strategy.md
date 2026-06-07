---
name: seo-geo-strategy
description: Silo architecture, schema, llms.txt, and GEO choices baked into the build
metadata:
  type: project
---

SEO and GEO (Generative Engine Optimization) decisions are built into the generator:

- **Silo architecture:** three silos (Markets, Situations, Guides), each with a pillar page that links down to cluster pages, and every cluster page links back up to its pillar, sideways to siblings, and across to related silos. The footer links to all silos site-wide. The `relatedLinks()` block on every page enforces this.
- **Structured data:** `LocalBusiness` (with `aggregateRating`) on every page, plus `FAQPage` (FAQ on nearly every page), `BreadcrumbList`, per-city `Service`, per-article `Article`, and a `Review` block on the reviews page.
- **GEO content shape:** answer-first copy, scannable lists, comparison table, definitive quotable facts (24 hour offer, 7 to 14 day close, $0 fees, 4.9/5 from 347), consistent NAP. These help answer engines extract and cite.
- **`llms.txt`:** Markdown summary + curated link list at `dist/llms.txt`. `robots.txt` explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, etc., and points to the sitemap.
- **Performance:** one small CSS file, two tiny vanilla JS files, no framework, long cache headers, self-hosted brand SVGs. Fast pages help both ranking and ad Quality Score.

Related planning doc: `idea/dave-buys-houses-rebuild-brief.md`. See [[site-map]].
