import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "How It Works", description: "Our simple three step process to sell your Indiana house for cash. Tell us about your house, get an offer in 24 hours, and close on your timeline.", path: "/how-it-works" });

export default function Page() {
  const faqs = [FAQ.close_speed, FAQ.offer_calc, FAQ.cost, FAQ.stay, FAQ.obligation];
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "How It Works", href: "/how-it-works" }]} />
      <section className="page-hero"><div className="wrap"><h1>How selling your house to us works</h1><p>A simple, three step process with no obligation at any stage. Here is exactly what happens from your first message to the day you get paid.</p><Link className="btn btn-light lg" href="/contact">Start my cash offer</Link></div></section>
      <section><div className="wrap narrow prose">
        <h2>Step 1: Tell us about your house</h2>
        <p>Fill out the form or call {SITE.phone}. We ask for the property address, its rough condition, and the best way to reach you. There is no long questionnaire and no credit check. This takes about a minute.</p>
        <h2>Step 2: Get your cash offer in 24 hours</h2>
        <p>We pull recent sales of comparable homes near you, factor in the condition and any repairs, and call you back with a fair cash offer within 24 hours. We walk you through how we reached the number so nothing feels like a black box. The offer is yours to accept, sit on, or decline.</p>
        <h2>Step 3: Close on your timeline</h2>
        <p>If the number works, you pick the closing date. We can close in as little as 7 days through a local title company, or wait several weeks if you need more time to move or settle other matters. We cover the closing costs. You sign, and you walk away with cash.</p>
        <div className="toc"><h3>Why sellers choose this route</h3><ul><li>No repairs, cleaning, or staging.</li><li>No showings or open houses.</li><li>No financing or appraisal contingencies that fall through.</li><li>No commissions or hidden fees.</li></ul></div>
        <p>Want to see how this compares to listing with an agent in real dollars? Read <Link href="/blog/cash-buyer-vs-realtor">Cash Buyer vs Realtor: which one actually nets you more</Link>.</p>
      </div></section>
      <Faq items={faqs} />
      <RelatedLinks title="Keep exploring" links={[{ href: "/about", label: "Why sell to us" }, { href: "/reviews", label: "Read reviews" }, { href: "/markets", label: "Areas we buy in" }, { href: "/situations", label: "Your situation" }]} />
      <CTASection />
    </main>
  );
}
