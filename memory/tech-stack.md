---
name: tech-stack
description: Next.js App Router app, how to run, build, and deploy on Vercel
metadata:
  type: project
---

The site is a **Next.js (App Router) app**, deployed on **Vercel**. (It was briefly a vanilla static generator; that was fully replaced on the client's request.)

- `npm install`, then `npm run dev` (localhost:3000) or `npm run build && npm start`.
- `npm run build` runs `node scripts/check-dashes.js` first, which **fails the build if any em or en dash** appears in `app/`, `components/`, `lib/`, or `public/` (see [[no-em-dashes]]).
- **Next version pinned to a patched release** (16.x). The original `next@15.1.6` had CVE-2025-66478; do not downgrade below the patched line.

Structure:
- `lib/config.js` is the single source of truth (SITE, CITIES, SITUATIONS, POSTS, FAQ, NAV).
- `lib/seo.js` builds Metadata objects + JSON-LD (LocalBusiness, FAQPage, BreadcrumbList).
- `components/` holds Header (client, mobile menu), Footer, LeadForm (client, posts to API), StickyBar (client), CTASection, Faq, Breadcrumb, RelatedLinks, JsonLd.
- `app/globals.css` is the full brand stylesheet (one file, no Tailwind).
- Dynamic silo routes use `generateStaticParams` + `generateMetadata`: `app/markets/[city]`, `app/situations/[slug]`, `app/blog/[slug]`, `app/legal/[slug]`.
- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and `/robots.txt`. `public/llms.txt` is static.
- `app/api/submit-lead/route.js` is the lead endpoint (validates + honeypot; delivery not wired yet, see [[open-items]]).

Deploy: push to GitHub, import in Vercel, zero config (Vercel auto-detects Next). No netlify files anymore.
