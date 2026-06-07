import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { SITE, CITIES, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

function find(slug) {
  return CITIES.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = find(city);
  if (!c) return {};
  return meta({
    title: `We Buy Houses ${c.name}, IN | Cash Offer in 24 Hours`,
    description: `Sell your house fast for cash in ${c.name}, Indiana. No repairs, no fees, no agents. Get a fair cash offer in 24 hours across ${c.county}.`,
    path: `/markets/${c.slug}`,
  });
}

export default async function Page({ params }) {
  const { city } = await params;
  const c = find(city);
  if (!c) notFound();
  const faqs = [FAQ.close_speed, FAQ.cost, FAQ.repairs, FAQ.behind, FAQ.areas];
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", name: `Cash Home Buying in ${c.name}, IN`, serviceType: "We buy houses for cash",
    areaServed: { "@type": "City", name: c.name }, provider: { "@type": "LocalBusiness", name: SITE.name, telephone: SITE.phoneIntl, url: SITE.domain + "/" },
  };
  const others = CITIES.filter((x) => x.slug !== c.slug).map((x) => ({ href: `/markets/${x.slug}`, label: x.name })).concat([{ href: "/markets", label: "All markets" }]);
  return (
    <main id="main">
      <JsonLd data={serviceSchema} />
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets" }, { name: c.name, href: `/markets/${c.slug}` }]} />
      <section className="page-hero"><div className="wrap"><h1>We buy houses for cash in {c.name}, Indiana</h1><p>Sell your {c.name} house as is, with no repairs, no agent fees, and a fair cash offer in 24 hours. We serve all of {c.county}.</p><div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}><Link className="btn btn-light lg" href="/contact">Get my cash offer</Link><a className="btn btn-call lg" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> {SITE.phone}</a></div></div></section>
      <section><div className="wrap narrow prose">
        <p className="lead">If you need to sell a house fast in {c.name}, we make it simple. We are local cash buyers, not agents, so there is no listing, no showings, and no waiting on a buyer&apos;s financing.</p>
        <h2>Why {c.name} homeowners sell to us</h2>
        <p>{c.blurb} Whether you are dealing with an inherited property, a rental you are tired of managing, a home that needs major repairs, or a move you need to make quickly, we buy in any condition and close on the date you choose.</p>
        <ul>
          <li>A fair cash offer based on real {c.county} comparable sales.</li>
          <li>No commissions, no closing costs, and no repair bills.</li>
          <li>Close in as little as 7 days through a local title company.</li>
          <li>Private sale, so neighbors and family do not need to know.</li>
        </ul>
        <h2>How it works in {c.name}</h2>
        <p>Tell us about the property, get your offer within 24 hours, and pick your closing date. That is the whole process. Read the <Link href="/how-it-works">full step by step here</Link>.</p>
        <h2>Common reasons people sell fast in {c.name}</h2>
        <p>Many of our {c.name} sellers come to us during a specific life event. We have dedicated guidance for each one: <Link href="/situations/inherited-house">inherited houses</Link>, <Link href="/situations/avoid-foreclosure">avoiding foreclosure</Link>, <Link href="/situations/probate">probate</Link>, <Link href="/situations/sell-with-tenants">tenant occupied rentals</Link>, and <Link href="/situations/damaged-house">damaged homes</Link>.</p>
      </div></section>
      <Faq items={faqs} heading={`Selling a house in ${c.name}: common questions`} />
      <RelatedLinks title="Other Indiana markets" links={others} />
      <CTASection />
    </main>
  );
}
