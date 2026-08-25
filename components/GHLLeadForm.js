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
// snippet's own data-height reserves the right space up front, so there is no jump.
//
// The preconnect hints below are the safe win: the embed needs a cold DNS + TCP + TLS
// round trip before it can paint (~1.1s of TLS alone when measured), and warming those
// two origins from the static HTML takes that off the form's critical path. They live in
// this component so only the two pages that render the form open the sockets.
export default function GHLLeadForm({ card = false }) {
  const form = (
    <>
      <iframe
        src="https://cshbuys.com/widget/form/n2sbpQX8zRO25Y1A7HBG"
        style={{ width: "100%", height: "950px", border: "none", borderRadius: "10px" }}
        id="inline-n2sbpQX8zRO25Y1A7HBG"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form For DBHO Website"
        data-height="950"
        data-layout-iframe-id="inline-n2sbpQX8zRO25Y1A7HBG"
        data-form-id="n2sbpQX8zRO25Y1A7HBG"
        title="Request your offer"
      />
      <Script src="https://cshbuys.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );

  return (
    <>
      <link rel="preconnect" href="https://cshbuys.com" />
      <link rel="preconnect" href="https://stcdn.leadconnectorhq.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
      {card ? <div className="lead-form" id="leadForm">{form}</div> : form}
    </>
  );
}
