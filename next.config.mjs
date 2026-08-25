/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Files under /assets keep stable, unhashed names (logo-horizontal.svg and friends),
    // so they must stay bustable: `immutable` would pin a stale logo in returning
    // visitors' caches for a year with no way to invalidate short of renaming the file.
    // A day of freshness plus a week of stale-while-revalidate keeps them edge-fast while
    // letting an update propagate within 24h. Hashed files under /_next/static are
    // separately served immutable by Next, which is correct there.
    const assetCache = [
      { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
    ];
    return [
      { source: "/(.*)", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ]},
      { source: "/assets/:path*", headers: assetCache },
    ];
  },
};
export default nextConfig;
