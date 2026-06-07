import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { CITIES, SITUATIONS, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Indiana Markets We Buy In", description: "We buy houses for cash across Indianapolis, Fort Wayne, South Bend, Kokomo, and Anderson, Indiana. Find your market and get a 24 hour cash offer.", path: "/markets" });

export default function Page() {
  const faqs = [FAQ.areas, FAQ.close_speed, FAQ.cost];
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Markets", href: "/markets" }]} />
      <section className="page-hero"><div className="wrap"><h1>Where we buy houses in Indiana</h1><p>We are local cash buyers serving five major Indiana markets and the towns around them. Pick your city to see how we help homeowners near you.</p><Link className="btn btn-light lg" href="/contact">Get my cash offer</Link></div></section>
      <section><div className="wrap">
        <div className="section-head"><span className="eyebrow">Markets</span><h2>Five markets, one local team</h2><p>From Indianapolis to the northern lakes, we close fast and pay cash across central and northern Indiana.</p></div>
        <div className="cards">
          {CITIES.map((c) => (
            <Link className="card-link" href={`/markets/${c.slug}`} key={c.slug}><span className="meta">{c.county}</span><h3>We buy houses in {c.name}</h3><p>{c.blurb}</p></Link>
          ))}
        </div>
      </div></section>
      <Faq items={faqs} />
      <RelatedLinks title="Selling for a specific reason?" links={SITUATIONS.map((s) => ({ href: `/situations/${s.slug}`, label: s.short }))} />
      <CTASection />
    </main>
  );
}
