import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/config";
import { meta } from "@/lib/seo";

const PAGES = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <>
        <p className="post-meta">Last updated January 2026</p>
        <p>{SITE.name}, operated by {SITE.legal}, respects your privacy. This policy explains what we collect and how we use it.</p>
        <h2>Information we collect</h2>
        <p>When you submit our form or call us, we collect the details you provide, such as your name, phone number, email, and property address. We use this only to evaluate your property and contact you about a cash offer.</p>
        <h2>How we use your information</h2>
        <ul><li>To prepare and discuss a cash offer for your property.</li><li>To contact you by phone, text, or email about your inquiry.</li><li>To meet legal and recordkeeping requirements.</li></ul>
        <h2>Sharing</h2>
        <p>We do not sell your personal information. We share it only with service providers who help us operate, such as title companies, and only as needed to complete a transaction you request.</p>
        <h2>Your choices</h2>
        <p>You can ask us to update or delete your information, and you can opt out of messages at any time. Reply STOP to text messages or contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </>
    ),
  },
  terms: {
    title: "Terms of Service",
    body: (
      <>
        <p className="post-meta">Last updated January 2026</p>
        <p>By using this website you agree to these terms. {SITE.name} is operated by {SITE.legal}.</p>
        <h2>Who we are</h2>
        <p>We are a real estate investment company. We purchase properties directly as principals. We are not licensed real estate agents and we do not provide brokerage services.</p>
        <h2>No professional advice</h2>
        <p>Information on this site is general and does not constitute legal, tax, or financial advice. Consult a qualified professional about your specific situation.</p>
        <h2>Offers</h2>
        <p>Any cash offer we make is non binding until a written purchase agreement is signed by both parties. Offers are based on the information provided and may change if that information is inaccurate.</p>
        <h2>Use of the site</h2>
        <p>You agree not to misuse the site or submit false information. We may update these terms at any time by posting a revised version here.</p>
      </>
    ),
  },
  "sms-terms": {
    title: "SMS Terms",
    body: (
      <>
        <p className="post-meta">Last updated January 2026</p>
        <p>By providing your phone number and checking the consent box, you agree to receive recurring calls and text messages from {SITE.legal} at the number provided, including messages sent by automated means.</p>
        <h2>Consent is not a condition of sale</h2>
        <p>Agreeing to receive messages is not required to sell us your property or to use our services.</p>
        <h2>Message frequency and rates</h2>
        <p>Message frequency varies. Message and data rates may apply depending on your carrier and plan.</p>
        <h2>Opting out</h2>
        <p>Reply STOP at any time to stop receiving text messages. Reply HELP for help, or contact us at <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a> or <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PAGES[slug];
  if (!p) return {};
  return meta({ title: p.title, description: `${p.title} for ${SITE.name} (${SITE.legal}).`, path: `/legal/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = PAGES[slug];
  if (!p) notFound();
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: p.title, href: `/legal/${slug}` }]} />
      <section><div className="wrap prose" style={{ paddingTop: 40 }}>
        <h1>{p.title}</h1>
        {p.body}
      </div></section>
    </main>
  );
}
