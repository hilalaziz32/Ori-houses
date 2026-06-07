import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { SITE, POSTS, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}
const find = (slug) => POSTS.find((p) => p.slug === slug);

const BODIES = {
  "sell-inherited-house-indiana": {
    faqs: [FAQ.probate, FAQ.close_speed, FAQ.cost],
    toc: [["probate", "Does it have to go through probate?"], ["taxes", "What about taxes?"], ["siblings", "When siblings disagree"], ["options", "Your selling options"]],
    body: (
      <>
        <h2 id="probate">Does it have to go through probate?</h2>
        <p>In most cases, yes. Probate is the court process that transfers a deceased person&apos;s property to their heirs. In Indiana, how long it takes depends on the estate. A small estate may qualify for a simplified process, while a larger or contested one can take months. The good news is that a house can often be sold during probate, not just after it closes.</p>
        <h2 id="taxes">What about taxes?</h2>
        <p>Two taxes worry people most: capital gains and inheritance tax. Indiana repealed its inheritance tax, so that is one less concern. For capital gains, inherited property usually receives a stepped up basis, meaning the value resets to the date of death. If you sell soon after inheriting, your taxable gain is often small. Always confirm your specifics with a tax professional.</p>
        <h2 id="siblings">When siblings disagree</h2>
        <p>Shared inheritances cause friction. One sibling wants to keep the house, another wants cash, and a third lives out of state and just wants it handled. A clean cash sale can break the deadlock because it converts an emotional asset into a clear number everyone can split. No repairs to argue over, no months of showings to coordinate.</p>
        <h2 id="options">Your selling options</h2>
        <ul>
          <li><strong>List with an agent.</strong> Best for a fully updated home when no one is in a hurry. Expect repairs, showings, commissions, and 60 to 90 days or more.</li>
          <li><strong>Sell for cash as is.</strong> Best when the house needs work, the heirs want speed, or family wants privacy. No repairs, no fees, and a close in as little as 7 days.</li>
        </ul>
        <p>If a cash sale sounds right, see how we handle <Link href="/situations/inherited-house">inherited houses</Link> and <Link href="/situations/probate">probate sales</Link>.</p>
      </>
    ),
  },
  "behind-on-mortgage-payments-options": {
    faqs: [FAQ.behind, FAQ.underwater, FAQ.close_speed],
    toc: [["reinstate", "1. Reinstate the loan"], ["modify", "2. Loan modification"], ["forbearance", "3. Forbearance"], ["sell", "4. Sell the house"], ["short", "5. Short sale"]],
    body: (
      <>
        <p>Falling behind on a mortgage is stressful, but you almost always have more options than the panic lets you see. Here are the five real ones for Indiana homeowners, including the ones lenders rarely lead with.</p>
        <h2 id="reinstate">1. Reinstate the loan</h2>
        <p>If you can pay the past due amount in a lump sum, you can bring the loan current and stop the process. This works when the hardship was temporary, like a short gap in income that has since recovered.</p>
        <h2 id="modify">2. Loan modification</h2>
        <p>Your lender may agree to change the terms of the loan, such as the interest rate or length, to lower the monthly payment. This keeps you in the home but requires qualifying and paperwork, and approval is not guaranteed.</p>
        <h2 id="forbearance">3. Forbearance</h2>
        <p>A forbearance pauses or reduces payments for a set period while you recover from a hardship. The paused amount still has to be repaid later, so it is a bridge, not an eraser.</p>
        <h2 id="sell">4. Sell the house</h2>
        <p>If keeping the home is not realistic, selling before foreclosure protects your credit and can put cash in your pocket if you have equity. A cash sale is fast enough to beat most auction dates, which is why homeowners in pre-foreclosure often choose it. See <Link href="/situations/avoid-foreclosure">how we help you avoid foreclosure</Link>.</p>
        <h2 id="short">5. Short sale</h2>
        <p>If you owe more than the home is worth, the lender may approve a short sale, accepting less than the full balance to avoid the cost of foreclosing. It takes lender cooperation and time, but it can be a graceful exit when you are underwater.</p>
        <p>The single most important factor across all five options is time. The earlier you act, the more doors stay open.</p>
      </>
    ),
  },
  "cash-buyer-vs-realtor": {
    faqs: [FAQ.cost, FAQ.close_speed, FAQ.repairs],
    toc: null,
    body: (
      <>
        <p>The headline price an agent quotes is not what you keep. To compare honestly, you have to subtract everything that comes out of that number and add back the months you spend carrying the house. Here is the real math.</p>
        <h2>What comes out of an agent sale</h2>
        <ul>
          <li><strong>Commissions:</strong> around 6% of the sale price on average.</li>
          <li><strong>Repairs and prep:</strong> buyers and inspectors expect a move in ready home.</li>
          <li><strong>Closing costs:</strong> often 1% to 3% paid by the seller.</li>
          <li><strong>Carrying costs:</strong> mortgage, taxes, insurance, and utilities for the 60 to 90 plus days it sits.</li>
          <li><strong>Price reductions:</strong> common when a listing lingers.</li>
        </ul>
        <h2>What comes out of a cash sale</h2>
        <p>With a cash offer like ours, the list is short: nothing. No commissions, no repairs, no closing costs, and no months of carrying the home. The offer is the amount you walk away with.</p>
        <h2>A simple example</h2>
        <p>Say an agent lists a home with a likely sale price of $200,000. Take out 6% commission ($12,000), $8,000 in repairs, $4,000 in closing costs, and three months of carrying costs at $1,500 a month ($4,500). That is $28,500 gone before you count a single price reduction, leaving roughly $171,500 and a three month wait.</p>
        <p>A cash offer that looks lower on paper can net about the same in your pocket, far sooner, with none of the risk that financing falls through. The right answer depends on your home&apos;s condition and how fast you need to move. If speed and certainty matter, run your numbers and then <Link href="/contact">get a cash offer to compare</Link>.</p>
      </>
    ),
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) return {};
  return meta({ title: p.title, description: p.desc, path: `/blog/${slug}`, ogType: "article" });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) notFound();
  const data = BODIES[slug];
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.desc, datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.domain + "/assets/logo-horizontal.svg" } },
    mainEntityOfPage: SITE.domain + `/blog/${slug}`,
  };
  return (
    <main id="main">
      <JsonLd data={articleSchema} />
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Guides", href: "/blog" }, { name: p.title, href: `/blog/${slug}` }]} />
      <section><div className="wrap prose" style={{ paddingTop: 40 }}>
        <h1>{p.title}</h1>
        <p className="post-meta">By {p.author} &middot; {p.read} read</p>
        <p className="lead">{p.desc}</p>
        {data.toc && (
          <div className="toc"><h3>In this guide</h3><ul>{data.toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul></div>
        )}
        {data.body}
        <p><Link className="btn btn-primary lg" href="/contact">Get a no obligation cash offer</Link></p>
      </div></section>
      <Faq items={data.faqs} />
      <RelatedLinks title="More guides" links={POSTS.filter((x) => x.slug !== slug).map((x) => ({ href: `/blog/${x.slug}`, label: x.title })).concat([{ href: "/situations", label: "Browse situations" }])} />
      <CTASection />
    </main>
  );
}
