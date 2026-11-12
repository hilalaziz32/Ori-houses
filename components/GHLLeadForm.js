import Script from "next/script";

// Embeds the GoHighLevel hosted form so submissions land directly in GHL.
// Pass `card` to wrap it in the site's white card styling (for dark backgrounds like the hero).
//
// Keep the iframe markup exactly as GHL ships it. form_embed.js mutates this element's
// inline styles at runtime (it sets position on the iframe and on its container, and drives
// height from the form's measured content), so anything we layer over or wrap around it
// gets fought by that script. A loading skeleton overlaid here broke the hero layout.
//
// One deliberate change from GHL's snippet: it ships height:100%, but this card has no
// definite height, so 100% resolves to auto and the iframe collapses to its 150px default
// until form_embed.js measures the form and rewrites the height. Pinning the box at the
// form's real rendered height (measured 1137 to 1228px across mobile and desktop, Nov 2026)
// reserves the right space up front. The old 1000px reservation made the page jump ~200px
// when form_embed.js resized it (CLS 0.235 on /contact). If fields are added or removed in
// GHL, re-measure and update both height values below.
//
// data-initial-iframe-hidden="true" is the flag form_embed.js sets after its own "hide every
// form until it reports its first height" pass, so pre-setting it skips that pass. On phones
// the script arrives ~1s after the form starts drawing, so that pass hid a visible form for
// ~2s (a second blink). We already reserve the right height, so the hide buys nothing here.
//
// The .ghl-form-slot wrapper (below) also carries a min-height (globals.css) so the space
// stays reserved while form_embed.js hides and resizes the iframe.
//
// The preconnect hints below are the safe win: the embed needs a cold DNS + TCP + TLS
// round trip before it can paint, and warming the two origins on its critical path takes
// that off the form's time to first paint. They live in this component so only the two
// pages that render the form open the sockets.
export default function GHLLeadForm({ card = false }) {
  const form = (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/LkPF1fKw1Q0eYX7VlcPF"
        style={{ width: "100%", height: "1200px", border: "none", borderRadius: "10px" }}
        id="inline-LkPF1fKw1Q0eYX7VlcPF"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form For DBHO Website"
        data-height="1200"
        data-layout-iframe-id="inline-LkPF1fKw1Q0eYX7VlcPF"
        data-form-id="LkPF1fKw1Q0eYX7VlcPF"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        data-initial-iframe-hidden="true"
        title="Request your offer"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );

  // id must be exactly `${iframe id}-wrapper`. form_embed.js looks for that parent and, if it
  // finds it, leaves the iframe where it is. Without it the script moves the iframe into a
  // wrapper it builds itself, and moving an iframe in the DOM makes the browser reload it:
  // the visitor saw a ready form vanish and redraw ~2s later, and every asset (including
  // GHL's Cloudflare Turnstile check) downloaded twice.
  const slot = <div className="ghl-form-slot" id="inline-LkPF1fKw1Q0eYX7VlcPF-wrapper">{form}</div>;

  return (
    <>
      <link rel="preconnect" href="https://api.leadconnectorhq.com" />
      <link rel="preconnect" href="https://stcdn.leadconnectorhq.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
      <link rel="preconnect" href="https://challenges.cloudflare.com" />
      {card ? <div className="lead-form" id="leadForm">{slot}</div> : slot}
    </>
  );
}
