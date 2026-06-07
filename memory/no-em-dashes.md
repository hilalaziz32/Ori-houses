---
name: no-em-dashes
description: Hard house rule, no em or en dashes, enforced by the build
metadata:
  type: feedback
---

The client requires **no em dashes** anywhere in user-facing copy.

**Why:** explicit client instruction; em dashes read as AI generated and are off brand.

**How to apply:** rewrite with periods, commas, "and", or parentheses. Use ranges like "7 to 14 days", not "7-14". `build.js` enforces this: it scans every generated page for `—` or `–` and **fails the build** if any are found. Do not disable that guard.
