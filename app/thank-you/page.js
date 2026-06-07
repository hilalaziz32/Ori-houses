import RelatedLinks from "@/components/RelatedLinks";
import { SITE } from "@/lib/config";

export const metadata = { title: "Thank You", description: "Thank you. We will contact you within 24 hours with your cash offer.", robots: { index: false, follow: true } };

export default function Page() {
  return (
    <main id="main">
      <section className="page-hero" style={{ minHeight: "54vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1>Thank you. We got your details.</h1>
          <p style={{ margin: "0 auto" }}>A member of our Indiana team will reach out within 24 hours with your cash offer. Need to talk sooner?</p>
          <a className="btn btn-light lg" href={`tel:${SITE.phoneRaw}`} style={{ marginTop: 24 }}><span aria-hidden="true">&#128222;</span> Call {SITE.phone}</a>
        </div>
      </section>
      <RelatedLinks title="While you wait" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/reviews", label: "Read reviews" }, { href: "/faq", label: "Common questions" }, { href: "/blog", label: "Helpful guides" }]} />
    </main>
  );
}
