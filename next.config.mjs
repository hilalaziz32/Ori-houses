/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/(.*)", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ]},
      { source: "/assets/:path*", headers: longCache },
    ];
  },
};
export default nextConfig;
