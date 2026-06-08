import Script from "next/script";

// Embeds the GoHighLevel hosted form so submissions land directly in GHL.
// Pass `card` to wrap it in the site's white card styling (for dark backgrounds like the hero).
export default function GHLLeadForm({ card = false }) {
  const form = (
    <>
      <iframe
        src="https://cshbuys.com/widget/form/n2sbpQX8zRO25Y1A7HBG"
        style={{ width: "100%", height: "783px", border: "none", borderRadius: "3px" }}
        id="inline-n2sbpQX8zRO25Y1A7HBG"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form For DBHO Website"
        data-height="783"
        data-layout-iframe-id="inline-n2sbpQX8zRO25Y1A7HBG"
        data-form-id="n2sbpQX8zRO25Y1A7HBG"
        title="Request your offer"
      />
      <Script src="https://cshbuys.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );

  return card ? <div className="lead-form">{form}</div> : form;
}
