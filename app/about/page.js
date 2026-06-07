import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "About | Local Indiana Cash Home Buyer", description: "Learn about Dave Buys Houses, a local Indiana cash home buyer. Fair offers, any condition, zero fees, and a real local team.", path: "/about" });

export default function Page() {
  const faqs = [FAQ.offer_calc, FAQ.cost, FAQ.private, FAQ.obligation];
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <section className="page-hero"><div className="wrap"><h1>Built for homeowners who need certainty</h1><p>We are a local Indiana real estate investment company. We buy houses directly, with our own funds, so you get a clean cash sale without agents, banks, or surprises.</p></div></section>
      <section><div className="wrap narrow prose">
        <p className="lead">{SITE.name} is operated by {SITE.legal}. We are investors, not a brokerage, which means we are the actual buyer. There is no middleman and no listing.</p>
        <h2>Fair cash offer, no lowballs</h2>
        <p>Our offers are based on your home&apos;s real condition and recent local comparable sales, not a one size fits all formula. We would rather make a fair offer you feel good about than waste your time with a number designed to nickel and dime you.</p>
        <h2>Any house, any condition</h2>
        <p>Storm damage, code violations, mold, hoarder situations, fire, foundation problems. We have bought through all of it. You never repair, paint, or even clean unless you want to.</p>
        <h2>Real people, local team</h2>
        <p>When you call, you reach a real person who lives and works in Indiana, not an out of state call center. We know these neighborhoods because they are ours.</p>
        <h2>Zero fees, zero commissions</h2>
        <p>No agent fees. No closing costs. No service charges. The number we agree on is the number you receive.</p>
      </div></section>
      <Faq items={faqs} />
      <RelatedLinks title="Learn more" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/reviews", label: "Reviews" }, { href: "/markets", label: "Where we buy" }, { href: "/contact", label: "Contact us" }]} />
      <CTASection />
    </main>
  );
}
