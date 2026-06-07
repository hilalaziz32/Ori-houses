import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { SITE, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Reviews", description: `Read reviews from Indiana homeowners who sold their house to Dave Buys Houses. Rated ${SITE.rating} out of 5 by ${SITE.ratingCount}+ sellers.`, path: "/reviews" });

const DATA = [
  ["Maria J.", "Indianapolis", "I was dreading selling my mom's house after she passed. Dave's team made it unbelievably simple. Cash in hand in 12 days, no repairs, no stress. They even let us keep the closing date flexible while we sorted out family stuff."],
  ["Robert T.", "Fort Wayne", "House had foundation issues and three agents told me I would need $40K in repairs before listing. Dave bought it as is for a fair price and closed in two weeks. I am honestly relieved I did not go the traditional route."],
  ["Denise K.", "Kokomo", "Behind on payments and did not want a foreclosure on my record. Reached out on a Tuesday, had an offer Wednesday, closed nine days later. Straight with me from the first call. Worth every star."],
  ["James P.", "South Bend", "Inherited a rental with tenants still in it. I had no idea what to do. Dave bought it without making me deal with the lease or the tenants. Easiest decision I made all year."],
  ["Carol M.", "Anderson", "Needed to relocate for work in three weeks. There was no way a normal sale would close in time. Dave closed in nine days and I made my move without a second mortgage hanging over me."],
  ["Tyrone W.", "Indianapolis", "The house needed a new roof and the kitchen was gutted from a flood. Every buyer wanted a discount and an inspection. Dave gave me a fair as is number and stuck to it. No games."],
];

export default function Page() {
  const faqs = [FAQ.close_speed, FAQ.private, FAQ.obligation];
  const reviewSchema = {
    "@context": "https://schema.org", "@type": "LocalBusiness", name: SITE.name, "@id": SITE.domain + "/#business",
    aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.rating, reviewCount: SITE.ratingCount, bestRating: "5" },
    review: DATA.map((d) => ({ "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, author: { "@type": "Person", name: d[0] }, reviewBody: d[2] })),
  };
  return (
    <main id="main">
      <JsonLd data={reviewSchema} />
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
      <section className="page-hero"><div className="wrap"><h1>From homeowners just like you</h1><p>Rated {SITE.rating} out of 5 by {SITE.ratingCount}+ Indiana homeowners. Here are a few of their stories.</p></div></section>
      <section><div className="wrap"><div className="reviews-grid">
        {DATA.map((d) => (
          <div className="review" key={d[0] + d[1]}><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>{d[2]}</p><div className="who">{d[0]}</div><div className="where">{d[1]}</div></div>
        ))}
      </div></div></section>
      <Faq items={faqs} />
      <RelatedLinks title="See how we help" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/situations", label: "Your situation" }, { href: "/markets", label: "Your market" }, { href: "/contact", label: "Get your offer" }]} />
      <CTASection />
    </main>
  );
}
