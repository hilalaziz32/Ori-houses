import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { CITIES, SITUATIONS, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Sell Your House for Any Situation", description: "Inherited a house, behind on payments, going through probate or divorce, or stuck with a damaged property? See how we buy Indiana houses in any situation.", path: "/situations" });

export default function Page() {
  const faqs = [FAQ.repairs, FAQ.behind, FAQ.tenants, FAQ.probate, FAQ.underwater];
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Situations", href: "/situations" }]} />
      <section className="page-hero"><div className="wrap"><h1>Whatever your situation, we can help</h1><p>People sell to us for all kinds of reasons. Find the one that fits yours and see exactly how we make it work.</p><Link className="btn btn-light lg" href="/contact">Get my cash offer</Link></div></section>
      <section><div className="wrap"><div className="cards">
        {SITUATIONS.map((s) => (
          <Link className="card-link" href={`/situations/${s.slug}`} key={s.slug}><h3>{s.name}</h3><p>{s.h}.</p></Link>
        ))}
      </div></div></section>
      <Faq items={faqs} />
      <RelatedLinks title="Where we buy" links={CITIES.map((c) => ({ href: `/markets/${c.slug}`, label: c.name }))} />
      <CTASection />
    </main>
  );
}
