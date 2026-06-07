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
        <p>Welcome to {SITE.name}, operated by {SITE.legal} (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We take your privacy seriously and are committed to protecting your personal information in compliance with the Telephone Consumer Protection Act (TCPA), Indiana state law, and applicable federal regulations. This policy explains what information we collect, how we use it, and the choices you have.</p>
        <h2>Information we collect</h2>
        <p>When you submit our form, call us, or otherwise contact us, we may collect:</p>
        <ul>
          <li><strong>Contact information:</strong> your name, postal address, email address, and phone number.</li>
          <li><strong>Property information:</strong> details about properties you own or are interested in selling.</li>
          <li><strong>Consent records:</strong> records of your consent to receive calls and text messages from us, including messages sent by automated means.</li>
        </ul>
        <h2>How we use your information</h2>
        <ul>
          <li>To provide real estate services, including evaluating, discussing, and making cash offers on properties.</li>
          <li>To contact you by phone, text, or email about your inquiry or a potential transaction.</li>
          <li>To maintain records of consent and communication preferences as required by the TCPA and other regulations.</li>
        </ul>
        <h2>How we share your information</h2>
        <p>We do not sell your personal information to third parties. We may share it with service providers who help us operate, such as title companies, and when required to do so by law.</p>
        <h2>Your choices</h2>
        <p>You can ask us to update or delete your information, manage your communication preferences, or opt out of messages at any time, including by replying STOP to any text message. You can also reach us directly using the contact information below.</p>
        <h2>Security</h2>
        <p>We use reasonable security measures to help protect your personal information from unauthorized access or disclosure.</p>
        <h2>Data retention</h2>
        <p>We retain your personal information only for as long as necessary for the purposes described in this policy or as required by applicable law.</p>
        <h2>Indiana state privacy rights</h2>
        <p>In addition to the rights described elsewhere in this policy, residents of Indiana may have additional privacy rights under state law.</p>
        <h2>Call recording notice</h2>
        <p>In the course of providing our services and complying with legal requirements, we may record telephone calls and conversations. By engaging in a telephone conversation with us, you consent to the recording of that call for the purposes described in this policy. Recordings may be used for training and quality assurance, are retained only as long as necessary for those purposes, and are protected with reasonable security measures. If you would prefer that your call not be recorded, let us know and we will do our best to accommodate your request.</p>
        <h2>Log files and cookies</h2>
        <p>Like most websites, we may collect standard log file information such as IP address, browser type, internet service provider, the time you visit, and the pages you view. This website does not itself use cookies, but advertising partners such as Google and Meta may use cookies, web beacons, or similar technologies on our behalf to show relevant ads based on your visits to this and other sites, including through Facebook Lead Ads and Google&apos;s DoubleClick DART cookies. We do not have access to or control over these third party cookies, and any information submitted through a Facebook Lead Ad is also governed by this policy. We do not knowingly target ads to anyone under the age of 18. You can disable cookies at any time through your browser settings, though doing so may affect how some parts of this site work.</p>
        <h2>Updates to this policy</h2>
        <p>We may update this Privacy Policy from time to time by posting a revised version on this page with an updated effective date.</p>
        <h2>Contact us</h2>
        <p>If you have questions about this policy, want to update or delete your information, or want to opt out of communications, contact us at <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a> or <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
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
