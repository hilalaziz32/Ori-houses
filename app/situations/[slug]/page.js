import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, SITUATIONS, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export function generateStaticParams() {
  return SITUATIONS.map((s) => ({ slug: s.slug }));
}
const find = (slug) => SITUATIONS.find((s) => s.slug === slug);

const CONTENT = {
  "inherited-house": {
    faqs: [FAQ.probate, FAQ.cost, FAQ.close_speed, FAQ.private],
    lead: "Inheriting a house can feel like inheriting a second job. Property taxes, upkeep, and family decisions pile up fast. We make the selling part simple.",
    body: (
      <>
        <h2>Selling an inherited Indiana house</h2>
        <p>You do not have to clean it out, fix it up, or settle every family disagreement before you sell. We buy inherited homes as is and can often coordinate around probate so the sale closes the moment the estate clears.</p>
        <h2>What you do not have to deal with</h2>
        <ul><li>No repairs, hauling, or estate cleanouts required.</li><li>No agent commissions cutting into the inheritance.</li><li>A private sale that keeps family business off the public market.</li></ul>
        <p>For a deeper walkthrough, read our guide on <Link href="/blog/sell-inherited-house-indiana">how to sell an inherited house in Indiana</Link>, or learn more about <Link href="/situations/probate">selling a house in probate</Link>.</p>
      </>
    ),
  },
  "avoid-foreclosure": {
    faqs: [FAQ.behind, FAQ.underwater, FAQ.close_speed, FAQ.private],
    lead: "If you are behind on your mortgage, time is the one thing working against you. The sooner you act, the more options you keep.",
    body: (
      <>
        <h2>Sell before foreclosure hits your credit</h2>
        <p>A completed foreclosure can follow you for years. Selling for cash before the bank finishes the process can protect your credit and sometimes leave you with money in hand. We move quickly and discreetly.</p>
        <h2>How we help homeowners in pre-foreclosure</h2>
        <ul><li>Fast closings that can beat an auction date.</li><li>A private sale, so the situation stays between us.</li><li>Help even when you owe close to what the house is worth.</li></ul>
        <p>Not sure of your options? Read <Link href="/blog/behind-on-mortgage-payments-options">your 5 real options when you are behind on payments</Link>.</p>
      </>
    ),
  },
  "sell-with-tenants": {
    faqs: [FAQ.tenants, FAQ.cost, FAQ.close_speed, FAQ.repairs],
    lead: "Tired of being a landlord? You can sell a tenant occupied property without evicting anyone or waiting for a lease to end.",
    body: (
      <>
        <h2>Sell a rental with tenants still in place</h2>
        <p>We buy occupied rentals all the time. You do not need to give notice, chase down rent, or get the unit empty first. We take the property with the lease and handle the rest.</p>
        <h2>Why landlords sell to us</h2>
        <ul><li>No need to evict or wait out a lease.</li><li>No turnover repairs or make ready costs.</li><li>A clean exit from a property you are done managing.</li></ul>
        <p>Many tenant occupied homes come to us through <Link href="/situations/inherited-house">an inheritance</Link>. We can help with those too.</p>
      </>
    ),
  },
  probate: {
    faqs: [FAQ.probate, FAQ.close_speed, FAQ.cost, FAQ.private],
    lead: "Selling a house tied up in probate has extra steps, but it does not have to be slow or confusing. We do this often.",
    body: (
      <>
        <h2>Sell a house in probate in Indiana</h2>
        <p>We can frequently begin the process before probate fully closes and complete the sale once the court signs off. We work alongside your attorney and the estate to keep things moving.</p>
        <h2>What to expect</h2>
        <ul><li>A cash offer that does not depend on bank financing.</li><li>Coordination with the estate and its representative.</li><li>A close timed to when the court allows the sale.</li></ul>
        <p>Related reading: <Link href="/situations/inherited-house">selling an inherited house</Link> and our full <Link href="/blog/sell-inherited-house-indiana">inherited house guide</Link>.</p>
      </>
    ),
  },
  divorce: {
    faqs: [FAQ.close_speed, FAQ.cost, FAQ.private, FAQ.obligation],
    lead: "In a divorce, the house is often the last thing tying two people together. A fast, clean cash sale lets both sides move on.",
    body: (
      <>
        <h2>Sell the house and split the proceeds cleanly</h2>
        <p>A cash sale removes the back and forth of listings, showings, and negotiating with buyers. We give both parties one fair number and a firm closing date, which makes splitting the proceeds straightforward.</p>
        <h2>Why a cash sale fits a divorce</h2>
        <ul><li>One offer, one timeline, no drawn out listing.</li><li>A private sale away from the public market.</li><li>No repairs or staging to argue over.</li></ul>
      </>
    ),
  },
  "damaged-house": {
    faqs: [FAQ.repairs, FAQ.cost, FAQ.close_speed, FAQ.offer_calc],
    lead: "Fire, water, mold, storm, or foundation damage scares off most buyers and lenders. It does not scare us.",
    body: (
      <>
        <h2>We buy damaged Indiana houses as is</h2>
        <p>You will not find a buyer with a mortgage who wants a house with serious damage, and the repairs to make it lendable can cost more than they are worth to you. We pay cash and take the property exactly as it stands.</p>
        <h2>Damage we buy through</h2>
        <ul><li>Fire and smoke damage.</li><li>Water damage, flooding, and mold.</li><li>Storm and roof damage.</li><li>Foundation and structural problems.</li><li>Code violations and condemned properties.</li></ul>
        <p>Curious how we price a damaged home? See <Link href="/how-it-works">how our offer is calculated</Link>.</p>
      </>
    ),
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = find(slug);
  if (!s) return {};
  return meta({ title: `${s.name} in Indiana`, description: `${CONTENT[slug].lead} Cash offer in 24 hours across Indiana.`, path: `/situations/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const s = find(slug);
  if (!s) notFound();
  const data = CONTENT[slug];
  const others = SITUATIONS.filter((x) => x.slug !== slug).map((x) => ({ href: `/situations/${x.slug}`, label: x.short })).concat([{ href: "/situations", label: "All situations" }]);
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Situations", href: "/situations" }, { name: s.short, href: `/situations/${slug}` }]} />
      <section className="page-hero"><div className="wrap"><h1>{s.h}</h1><p>{data.lead}</p><div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}><Link className="btn btn-light lg" href="/contact">Get my cash offer</Link><a className="btn btn-call lg" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> {SITE.phone}</a></div></div></section>
      <section><div className="wrap narrow prose">{data.body}</div></section>
      <Faq items={data.faqs} />
      <RelatedLinks title="Other situations we handle" links={others} />
      <CTASection />
    </main>
  );
}
