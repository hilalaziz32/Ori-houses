"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/config";

export default function LeadForm({ heading = "Get Your Cash Offer", sub = "Fill out the form. We will contact you within 24 hours." }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    if (f.website.value) return; // honeypot
    const phone = (f.phone.value || "").replace(/[^0-9]/g, "");
    if (phone.length < 10) return alert("Please enter a valid phone number.");
    if (!f.consent.checked) return alert("Please agree to be contacted so we can reach you.");
    setBusy(true);
    const data = Object.fromEntries(new FormData(f).entries());
    try {
      const res = await fetch("/api/submit-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("bad");
      router.push("/thank-you");
    } catch {
      setBusy(false);
      alert(`Something went wrong. Please call us at ${SITE.phone}.`);
    }
  }

  return (
    <form id="leadForm" className="lead-form" onSubmit={onSubmit} noValidate>
      <h2>{heading}</h2>
      <p className="form-sub">{sub}</p>
      <div className="row">
        <label>First name<input type="text" name="firstName" placeholder="Jane" autoComplete="given-name" required /></label>
        <label>Last name<input type="text" name="lastName" placeholder="Smith" autoComplete="family-name" required /></label>
      </div>
      <label>Phone<input type="tel" name="phone" placeholder="317-555-0199" autoComplete="tel" required /></label>
      <label>Email <span className="opt">(optional)</span><input type="email" name="email" placeholder="you@example.com" autoComplete="email" /></label>
      <label>Property address<input type="text" name="address" placeholder="123 Main St, Indianapolis, IN" autoComplete="street-address" required /></label>
      <label className="hp" aria-hidden="true"><input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to receive recurring calls and texts from {SITE.legal} at the number provided, including by automated means. Consent is not a condition of any sale. Message and data rates may apply. Reply STOP to opt out. See our <a href="/legal/sms-terms">SMS terms</a> and <a href="/legal/privacy">privacy policy</a>.</span>
      </label>
      <button type="submit" className="btn btn-primary block lg" disabled={busy}>{busy ? "Sending..." : "Get My Cash Offer"}</button>
      <p className="form-foot">No obligation. We never list your house publicly.</p>
    </form>
  );
}
