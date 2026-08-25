"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const FORM_ID = "n2sbpQX8zRO25Y1A7HBG";
const HEIGHT = 783;

// The GHL iframe paints nothing for a second or two while it pulls its own bundle,
// so we hold a matching skeleton in the same box and cross-fade the real form in on
// load. The box is reserved at the iframe's height either way, so nothing shifts.
export default function GHLEmbed({ card = false, priority = false }) {
  const [loaded, setLoaded] = useState(false);

  // Safety net: if the iframe never fires load (blocked, offline, third-party outage)
  // we still reveal it rather than stranding the visitor on a skeleton forever.
  useEffect(() => {
    if (loaded) return;
    const t = setTimeout(() => setLoaded(true), 6000);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <div
      id="leadForm"
      className={`ghl-embed${card ? " lead-form" : ""}${loaded ? " is-loaded" : ""}`}
      style={{ "--ghl-h": `${HEIGHT}px` }}
    >
      <div className="ghl-skeleton" aria-hidden="true">
        <span className="ghl-sk-title" />
        <span className="ghl-sk-line" />
        <span className="ghl-sk-field" />
        <span className="ghl-sk-field" />
        <span className="ghl-sk-field" />
        <span className="ghl-sk-field" />
        <span className="ghl-sk-field" />
        <span className="ghl-sk-fill" />
        <span className="ghl-sk-btn" />
      </div>
      <iframe
        src={`https://cshbuys.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        className="ghl-frame"
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form For DBHO Website"
        data-height={HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Request your offer"
      />
      {/* Resize bridge only. Deferred past load so it never competes with the form itself. */}
      <Script src="https://cshbuys.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
