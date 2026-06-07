---
name: site-map
description: Every route in the Next app and how the silos are organized
metadata:
  type: project
---

Next App Router routes (pretty URLs, no trailing slash). 32 prerendered routes total.

**Core:** `/`, `/how-it-works`, `/about`, `/reviews`, `/faq`, `/contact`
**Markets silo (pillar `/markets`):** `/markets/[city]` for indianapolis, fort-wayne, south-bend, kokomo, anderson
**Situations silo (pillar `/situations`):** `/situations/[slug]` for inherited-house, avoid-foreclosure, sell-with-tenants, probate, divorce, damaged-house
**Guides silo (pillar `/blog`):** `/blog/[slug]` for sell-inherited-house-indiana, behind-on-mortgage-payments-options, cash-buyer-vs-realtor
**Legal:** `/legal/[slug]` for privacy, terms, sms-terms
**Utility:** `/thank-you` (noindex), `not-found.js` (404)
**Machine:** `/sitemap.xml`, `/robots.txt`, `/llms.txt`
**API:** `POST /api/submit-lead`

To add a city, situation, or post: edit the arrays in `lib/config.js`. Situation body JSX lives in `app/situations/[slug]/page.js` (CONTENT map); article bodies in `app/blog/[slug]/page.js` (BODIES map); legal copy in `app/legal/[slug]/page.js` (PAGES map). See [[tech-stack]].
