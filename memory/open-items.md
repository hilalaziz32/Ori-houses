---
name: open-items
description: What still needs real values or assets before the site goes live
metadata:
  type: project
---

Outstanding before launch (carried over from the original site's gaps and this rebuild):

1. **Lead delivery:** the `app/api/submit-lead/route.js` handler validates and accepts leads but only `console.log`s them. Wire real delivery (email / CRM / speed-to-lead SMS) via env vars.
2. **Analytics/pixels:** ships **no** analytics yet by design. Add GA4 + Meta Pixel (e.g. `@next/third-parties`) with real IDs from env. The original site had dead `{{GA4_ID}}`/`{{FB_PIXEL_ID}}` placeholders, so confirm real IDs exist.
3. **OG image:** currently `og-default.svg`. Many social platforms do not render SVG previews. Replace with a real 1200x630 PNG.
4. **Turnstile / spam:** original used Cloudflare Turnstile. Re-add a real site key on the form if desired (honeypot is already in place).
5. **Real media:** swap in real Indiana house photos and team faces for trust.
6. **Confirm deploy target** is `5minutescashoffers.com` (canonical points there).

See [[seo-geo-strategy]] and [[tech-stack]].
