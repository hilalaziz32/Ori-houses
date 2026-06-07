import { SITE } from "@/lib/config";

export default function robots() {
  const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/thank-you", "/api/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: SITE.domain + "/sitemap.xml",
    host: SITE.domain,
  };
}
