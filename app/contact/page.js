import GHLLeadForm from "@/components/GHLLeadForm";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Contact | Get a Cash Offer", description: "Contact Dave Buys Houses for a fair, no obligation cash offer on your Indiana home within 24 hours. Call 317-526-4837 or request your offer online.", path: "/contact" });

export default function Page() {
  const faqs = [FAQ.cost, FAQ.close_speed, FAQ.obligation];
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <section><div className="wrap split" style={{ paddingTop: 48 }}>
        <div className="prose">
          <span className="eyebrow" style={{ textAlign: "left" }}>Contact</span>
          <h1>Get your cash offer</h1>
          <p className="lead">Tell us about your house and we will get back to you within 24 hours with a fair, no obligation cash offer. Prefer to talk? Call or text us any time.</p>
          <p><strong>Phone:</strong> <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a><br />
          <strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
          <strong>Headquarters:</strong> {SITE.cityHQ}, {SITE.region}</p>
          <p>We buy across Indianapolis, Fort Wayne, South Bend, Kokomo, Anderson, and the surrounding towns. Everything you share stays private.</p>
          <p><a className="btn btn-call lg" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> Call {SITE.phone}</a></p>
        </div>
        <GHLLeadForm />
      </div></section>
      <Faq items={faqs} />
      <RelatedLinks title="Before you reach out" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/faq", label: "Read the FAQ" }, { href: "/reviews", label: "See reviews" }, { href: "/markets", label: "Confirm your market" }]} />
    </main>
  );
}
