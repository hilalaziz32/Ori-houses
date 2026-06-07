---
name: project-overview
description: What the Ori Website repo builds, the client, and where output goes
metadata:
  type: project
---

This repo is a full rebuild of the **Dave Buys Houses** website (client: DBHO LLC, an Indiana cash home buyer). Original live reference: https://davebuyshouses-website.netlify.app/ . Production/canonical domain: https://5minutescashoffers.com .

The rebuild was requested to: keep the original content and green/cream theme, use **silo architecture** with heavy internal linking, follow current SEO/GEO best practice, ship an efficient `llms.txt`, include a form CTA plus a click-to-call button, make every page fast, and use **no em dashes** anywhere.

It is built as a **Next.js (App Router) app deployed on Vercel**. Brand SVGs provided by the client live in `content/` and are served from `public/assets/`.

See [[tech-stack]], [[site-map]], [[seo-geo-strategy]], [[open-items]].
