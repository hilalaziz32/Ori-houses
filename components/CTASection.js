import Link from "next/link";
import { SITE } from "@/lib/config";

export default function CTASection() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>Ready for a fair cash offer?</h2>
          <p>Tell us about your house and get a no obligation offer within 24 hours. Or call and talk to a real person on our Indiana team right now.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-light lg" href="/contact">Get My Cash Offer</Link>
          <a className="btn btn-call lg" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
