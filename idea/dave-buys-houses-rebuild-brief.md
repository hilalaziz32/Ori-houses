# Dave Buys Houses — Deep Dive + Rebuild Brainstorm

**Live preview:** https://davebuyshouses-website.netlify.app/
**Production (canonical):** https://5minutescashoffers.com/
**Audited:** 2026-06-07
**Business:** DBHO LLC — Indiana cash home buyer (real estate investor, *not* a brokerage). Markets: Indianapolis, Fort Wayne, South Bend, Kokomo, Anderson.

---

## 0. TL;DR

The current site is a clean, conversion-minded **hand-coded static HTML/CSS/JS** landing site on Netlify. The copy and structure are genuinely good — clear value prop, strong objection-handling, social proof, comparison table. But it has **production-breaking bugs** (analytics/pixel/maps placeholders never filled, a dead blog section) and a brittle, un-maintainable foundation (one 41 KB CSS file, no build system, hotlinked Unsplash images). 

**Verdict:** The *content and positioning are worth keeping almost verbatim.* The *implementation should be rebuilt* on a real framework so it's trackable, maintainable, fast, and extensible into the local-SEO landing pages this business actually needs to grow.

---

## 1. What's actually there (current state)

### Tech stack (detected)
| Layer | Current |
|---|---|
| Hosting | Netlify (Edge), HTTP/2 |
| Build | **None** — raw static files, no bundler/framework |
| Markup | Hand-written HTML (47 KB single index) |
| CSS | One file `/css/styles.css` — **40.9 KB**, no preprocessor/utility system |
| JS | `/js/main.js` (1.8 KB) + `/js/form.js` (6.5 KB), vanilla |
| Fonts | Google Fonts — Poppins (headings) + Inter (body) |
| Forms | POST `/api/submit-lead` → Netlify Function `submit-lead` |
| Spam | Cloudflare Turnstile + honeypot field |
| Analytics | GA4 + Meta Pixel snippets present **but unconfigured** |
| Maps | Google Maps JS API loader present, **key unconfigured** |
| SEO | title, meta desc, OG, Twitter, canonical, JSON-LD ×4 |

### Pages that exist (200 OK)
`/` · `/how-it-works` · `/about` · `/reviews` · `/markets` · `/markets/indianapolis` · `/contact` · `/privacy` · `/terms` · `/sms-terms` · `/robots.txt` · `/sitemap.xml` · `/assets/og-default.svg`

> Note: the homepage top-nav uses in-page `#anchors`, but real standalone pages also exist. There's an inconsistency between "one long landing page" and "multi-page site" — they coexist half-finished.

### Structured data present
`LocalBusiness`, `Organization`, `Service`, `FAQPage` JSON-LD blocks. Good baseline.

---

## 2. Problems found (ranked by severity)

### 🔴 Critical — costing money right now
1. **Analytics & tracking are dead in production.** The page literally ships:
   - `gtag('config', '{{GA4_ID}}')`
   - `fbq('init', '{{FB_PIXEL_ID}}')` (appears twice)
   - `{{GOOGLE_MAPS_API_KEY}}`
   
   These template placeholders were never replaced. **No GA4, no Meta Pixel, no conversion tracking is firing.** For a lead-gen / paid-traffic business this is the single most expensive bug — you can't measure or optimize ad spend, retarget, or know which channel converts.

2. **The blog / "Helpful Insights" section is broken.** Three article cards are shown ("Sell an Inherited House," "Behind on Mortgage Payments," "Cash Buyer vs. Realtor") but `/blog` and the article URLs return **404**. Dead content that (a) looks broken to users and (b) wastes the strongest organic-SEO opportunity this business has.

### 🟠 High
3. **Hotlinked Unsplash images.** Hero/section imagery loads from `images.unsplash.com` with `?w=900&q=80`. Risks: slow LCP, third-party dependency/outage, no control over caching, and licensing ambiguity for commercial use. Should be self-hosted + optimized (AVIF/WebP).
4. **OG/Twitter share image is an `.svg`** (`og-default.svg`). Facebook, LinkedIn, iMessage, and others **do not render SVG** social previews → blank/broken link cards when shared. Needs a 1200×630 PNG/JPG.
5. **No `AggregateRating` / `Review` schema** despite prominently claiming "4.9/5 from 347+ homeowners." Leaving star-rating rich-results on the table.
6. **Maintainability wall.** A single 41 KB hand-edited CSS file + duplicated HTML across `/about`, `/reviews`, etc. means every header/footer/nav change is a manual multi-file edit. This won't scale to the dozens of city pages the SEO strategy needs.

### 🟡 Medium / polish
7. Nav strategy is half-anchors, half-pages — confusing IA and duplicate-content risk (anchored sections vs. standalone pages with similar content).
8. No `llms.txt` content (file 404s on prod; local repo copy is just a description-of-what-llms.txt-is, not a real one).
9. Accessibility unverified — needs an audit pass (form labels, contrast on green-on-cream, focus states, reduced-motion).
10. `priceRange: "$$"` in LocalBusiness schema is meaningless for a home buyer — minor schema hygiene.
11. Honeypot field reportedly labeled visibly ("do not fill") — should be visually hidden, not instructive.

---

## 3. What to KEEP (it's good — don't throw it away)

- **Positioning & messaging.** "Sell your Indiana house fast for cash — on your timeline" + the "certainty" angle is strong, specific, and locally targeted.
- **Objection-first structure.** How It Works → Why Us → Comparison table → Reviews → FAQ is textbook high-intent lead-gen flow. Keep the order.
- **The Dave-vs-Agent comparison table.** Concrete, scannable, persuasive. Keep.
- **FAQ depth** (probate, tenants, behind-on-mortgage, underwater, confidentiality). This is also prime FAQ-schema + long-tail SEO fuel. Keep & expand.
- **Trust stats** (1,200+ bought, 24 hr, $0 fees, 4.9/5).
- **Compliance posture** — TCPA SMS consent, "not a brokerage / principals" disclosure, Turnstile, honeypot. Keep all of it.
- **Brand palette** — deep forest green (#1F4429) on warm cream. Calm, trustworthy, differentiated from the usual loud "WE BUY HOUSES" yellow/red. Keep & systematize into tokens.
- **The Netlify-Function lead pipeline** (`/api/submit-lead`). Good serverless pattern.

---

## 4. Rebuild strategy — recommended direction

### Recommended stack: **Astro + Tailwind, on Netlify**
**Why Astro specifically for this business:**
- Ships **zero JS by default** → fastest possible LCP → better Quality Score on Google Ads + better Core Web Vitals for SEO. This is a paid-traffic landing site; speed = cheaper leads.
- **Content Collections** make the blog and (critically) **programmatic city landing pages** trivial — write one template, generate `/we-buy-houses/{city}` for Indianapolis, Fort Wayne, South Bend, Kokomo, Anderson + every surrounding town. This is *the* growth lever for this niche.
- Component-based → one `<Header>`, `<Footer>`, `<LeadForm>` reused everywhere; kills the duplicate-HTML maintenance problem.
- Built-in image optimization (`<Image>`) → self-hosted, AVIF/WebP, responsive, lazy. Fixes the Unsplash problem.
- Keeps the existing Netlify Function backend as-is.

**Alternatives considered:**
- *Next.js* — overkill; client runtime weight hurts a pure-content lead site. Choose only if a richer app/dashboard is planned.
- *Keep vanilla, just fix bugs* — fastest/cheapest, but doesn't solve maintainability or unlock city pages. Fine as a 1-day stopgap, not the rebuild.
- *WordPress* — easy blogging for non-devs, but slower, heavier, more attack surface, worse CWV. Only if the client insists on self-editing content with zero dev involvement.

### Architecture
```
src/
  components/   Header, Footer, LeadForm, FAQItem, ComparisonTable, ReviewCard, StatBar, TrustBadges, CTASection
  layouts/      BaseLayout (head/SEO/schema), PageLayout, CityLayout, ArticleLayout
  pages/        index, how-it-works, about, reviews, contact, markets/index
  content/
    cities/     indianapolis.md, fort-wayne.md, ... (frontmatter → page)
    blog/       inherited-house.md, behind-on-mortgage.md, cash-vs-realtor.md
  styles/       tokens (colors, type scale, spacing) → Tailwind config
config: design tokens from #1F4429 green + cream system
```

---

## 5. Brainstorm — ideas to make it "perfectly fine" (and then some)

### A. Conversion-rate optimization (highest ROI)
1. **Sticky mobile CTA bar** — persistent "Call" + "Get Cash Offer" at bottom on mobile (most traffic & most distress sellers are mobile).
2. **Multi-step form** instead of one long form. Step 1 = just property address (lowest friction, highest start rate). Then condition, timeline, contact. Multi-step typically lifts completion 20–40% for real-estate lead gen.
3. **Address autocomplete** via the Google Maps Places API key they already wired (and never enabled) → cleaner data, faster fill, validates Indiana service area instantly.
4. **Dynamic "do we buy in your area?" check** — enter ZIP, instant "Yes, we buy in {county}!" micro-win before the form.
5. **Exit-intent / scroll-depth offer** (lightweight) for desktop abandoners.
6. **"Cash offer estimate" teaser** — even a rough range ("Homes like yours: $X–$Y") dramatically increases form starts; back-end can still be manual.
7. **Click-to-call tracking** as a first-class conversion (distress sellers often call, don't fill forms).
8. **Above-the-fold trust** — move "4.9/5 · 347 reviews · 1,200 bought" higher and make it a real, schema-backed rating.

### B. SEO / organic growth (the real long-term moat)
9. **Programmatic city + county pages**: `/we-buy-houses/{indianapolis|fort-wayne|south-bend|kokomo|anderson}` plus surrounding towns (Carmel, Fishers, Noblesville, Greenwood, Muncie, Lafayette…). One template, localized comps/neighborhoods/testimonials. This is how every successful cash-buyer outranks competitors.
10. **Situation/intent pages**: `/sell-inherited-house`, `/avoid-foreclosure-indiana`, `/sell-house-with-tenants`, `/sell-fire-damaged-house`, `/probate-house-sale-indiana`, `/sell-house-fast-divorce`. Each maps to a real FAQ already on the site → expand into full pages.
11. **Resurrect & finish the blog** with the 3 articles already advertised + the situation content above. Add `Article` + `BreadcrumbList` schema.
12. **Add `AggregateRating` + `Review` schema** → star rich-results in SERPs.
13. **Real `llms.txt` + `sitemap.xml` regeneration** covering all new pages.
14. **Internal linking** hub-and-spoke: city pages ↔ situation pages ↔ blog.

### C. Trust & credibility
15. **Real photos** — actual Indiana houses bought, before/after, the team. Replace generic Unsplash. Huge for a "real people, local" brand.
16. **Video testimonials** (or even short text+photo of named sellers) — more believable than text quotes.
17. **A real "Dave" / team page with faces** — the brand is built on "talk to a real human, not a call center." Show the humans.
18. **BBB / Google Business Profile / verified-reviews badges** linked out.
19. **Case studies** ("Bought in Kokomo, closed in 9 days — here's the timeline") doubling as long-tail content.
20. **Trust microcopy near the form** — "We never list your house publicly" + "No obligation" right at the submit button.

### D. Technical / performance / reliability
21. **Fix tracking properly** — env-injected GA4 + Meta Pixel + Google Maps keys via Netlify env vars, validated at build (fail the build if a placeholder leaks to prod).
22. **Consent-mode / cookie banner** if running EU/CA traffic or for CCPA hygiene.
23. **Server-side lead forwarding** — Netlify Function already exists; add CRM/Zapier/email + SMS auto-reply ("Got it — Dave will call within 24 hrs") for instant speed-to-lead.
24. **Self-host + optimize all images** (AVIF/WebP, responsive `srcset`, blur-up).
25. **Core Web Vitals budget** — target LCP < 2.0s, CLS ~0, INP < 200ms; monitor in GA4.
26. **Proper PNG OG image** (1200×630) per page type + dynamic OG for city pages.
27. **Accessibility pass** — WCAG AA: labeled inputs, focus rings, contrast check on green/cream, prefers-reduced-motion, skip-link (already has `#main-content`).
28. **Design tokens** — codify the green/cream palette, Poppins/Inter type scale, spacing into Tailwind theme so the brand is consistent and changeable in one place.

### E. Lead-ops / business layer (beyond the website)
29. **Speed-to-lead automation** — auto-SMS + auto-email + Slack/CRM ping the instant a form submits (conversion drops fast after 5 min).
30. **A/B testing harness** (Netlify split testing or simple flag) on headline, form length, CTA copy.
31. **Call tracking numbers** per channel (Google Ads vs. organic vs. Facebook) to attribute spend.
32. **Lightweight CRM** (or Airtable/HubSpot free) wired to the form for pipeline tracking.

---

## 6. Suggested phasing

**Phase 0 — Emergency fixes (½ day, do regardless of rebuild)**
- Inject real GA4 / Meta Pixel / Maps keys (or remove dead snippets).
- Fix or hide the broken blog cards (no 404s shown to users).
- Swap SVG OG image for a PNG.

**Phase 1 — Rebuild foundation (Astro + Tailwind)**
- Componentize current single-page content 1:1 (keep copy).
- Design tokens, self-hosted optimized images, SEO/schema layout, env-managed keys with build-time validation.
- Reach parity + fix all 🔴/🟠 issues.

**Phase 2 — Conversion layer**
- Multi-step form + address autocomplete + service-area check, sticky mobile CTA, speed-to-lead automation, real trust media.

**Phase 3 — SEO growth engine**
- Programmatic city/county pages, situation pages, finished blog, AggregateRating schema, internal-linking, sitemap/llms.txt.

**Phase 4 — Optimize**
- A/B tests, call tracking, CRM, CWV monitoring, iterate on data (now that tracking actually works).

---

## 7. Open questions for the client / next steps

1. Is `5minutescashoffers.com` the real production target? (canonical points there — rebuild should ship there, not just Netlify preview.)
2. Do we have access to the existing repo / Netlify project, or are we rebuilding from this audit only?
3. Real GA4 ID, Meta Pixel ID, Google Maps API key — do they exist yet?
4. Where should leads actually go (CRM? email? SMS auto-reply)?
5. Can the client provide real photos, team bios, and verifiable reviews?
6. Stack preference confirmed (Astro recommended) or constraint (e.g., client must self-edit → WordPress)?
7. Scope: polish the existing one-pager, or build the full multi-page local-SEO machine (recommended for growth)?

---

*This is a planning/brainstorm doc only — no code has been changed. Awaiting direction on scope and stack before building.*
