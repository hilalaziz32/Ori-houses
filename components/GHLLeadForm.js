import GHLEmbed from "./GHLEmbed";

// Embeds the GoHighLevel hosted form so submissions land directly in GHL.
// Pass `card` to wrap it in the site's white card styling (for dark backgrounds like the hero).
// Pass `priority` for an above-the-fold instance so the iframe starts fetching immediately.
//
// This stays a server component so the preconnect hints below ship in the static HTML.
// The embed opens connections to several origins before it can paint anything; warming
// the two that sit on its critical path removes a full DNS + TCP + TLS round trip
// (measured at ~1.1s of TLS alone on a cold connection) from the form's time to first paint.
export default function GHLLeadForm({ card = false, priority = false }) {
  return (
    <>
      <link rel="preconnect" href="https://cshbuys.com" />
      <link rel="preconnect" href="https://stcdn.leadconnectorhq.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
      <GHLEmbed card={card} priority={priority} />
    </>
  );
}
