import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "FAQ", description: "Answers to the most common questions about selling your Indiana house for cash: timing, fees, repairs, probate, tenants, and more.", path: "/faq" });

export default function Page() {
  const all = Object.values(FAQ);
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
      <section className="page-hero"><div className="wrap"><h1>Common questions, straight answers</h1><p>Everything Indiana homeowners ask us before selling. Still unsure? Call {SITE.phone} and talk it through with a real person.</p></div></section>
      <Faq items={all} heading="Frequently asked questions" />
      <RelatedLinks title="Helpful next steps" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/situations", label: "Browse situations" }, { href: "/blog", label: "Read our guides" }, { href: "/contact", label: "Get my cash offer" }]} />
      <CTASection />
    </main>
  );
}
