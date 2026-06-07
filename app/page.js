import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE, CITIES, SITUATIONS, FAQ } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = {
  ...meta({ title: `${SITE.name} | Sell Your Indiana Home Fast for Cash`, description: SITE.description, path: "/" }),
  title: { absolute: `${SITE.name} | Sell Your Indiana Home Fast for Cash` },
};

export default function Home() {
  const faqs = [FAQ.close_speed, FAQ.cost, FAQ.repairs, FAQ.behind, FAQ.areas, FAQ.obligation];
  const related = [
    ...CITIES.map((c) => ({ href: `/markets/${c.slug}`, label: c.name })),
    ...SITUATIONS.map((s) => ({ href: `/situations/${s.slug}`, label: s.short })),
    { href: "/blog", label: "Read our guides" },
  ];
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="rating-chip"><span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> Rated {SITE.rating}/5 by {SITE.ratingCount}+ Indiana homeowners</span>
            <h1>Sell your Indiana house <span className="accent">fast for cash</span>, on your timeline.</h1>
            <p className="lead">No repairs. No agents. No fees. Get a fair, no obligation cash offer in 24 hours and close in as little as 7 days. We buy houses in any condition across Indianapolis, Fort Wayne, South Bend, Kokomo, and Anderson.</p>
            <ul className="promises">
              <li>No repairs or cleaning, sell exactly as is.</li>
              <li>No realtor fees or commissions, we pay all closing costs.</li>
              <li>Close in 7 days, or pick a date that works for you.</li>
            </ul>
            <div className="hero-stats">
              <div><b>{SITE.housesBought}</b><span>Houses bought</span></div>
              <div><b>24 hr</b><span>Offer turnaround</span></div>
              <div><b>$0</b><span>Fees or commissions</span></div>
            </div>
            <div className="trust-badges">
              <span><span className="ic" aria-hidden="true">&#9679;</span> Local Indiana team, not a call center</span>
              <span><span className="ic" aria-hidden="true">&#9679;</span> Cash buyer, close in days</span>
              <span><span className="ic" aria-hidden="true">&#9679;</span> No fees, ever</span>
            </div>
          </div>
          <div className="form-wrap">
            <span className="form-badge">&#9733; {SITE.rating} from {SITE.ratingCount}+ reviews</span>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="statband" aria-label="Key numbers">
        <div className="wrap">
          <div className="s"><span className="ic" aria-hidden="true">&#127968;</span><b>{SITE.housesBought}</b><span>Indiana houses bought</span></div>
          <div className="s"><span className="ic" aria-hidden="true">&#9203;</span><b>24 hr</b><span>To your cash offer</span></div>
          <div className="s"><span className="ic" aria-hidden="true">&#128197;</span><b>7 days</b><span>Possible close time</span></div>
          <div className="s"><span className="ic" aria-hidden="true">&#11088;</span><b>{SITE.rating}/5</b><span>Homeowner rating</span></div>
        </div>
      </section>

      <section className="band-cream">
        <div className="wrap">
          <p className="intro-quote">{SITE.name} is a local Indiana cash home buyer serving Indianapolis, Fort Wayne, South Bend, Kokomo, and Anderson. We make cash offers within 24 hours and close in as little as 7 days. No fees, no commissions, no repairs required.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">How it works</span><h2>Three steps. <span className="accent">Zero hassle.</span></h2><p>From the first call to cash in your hand, the whole process can be done in under two weeks.</p></div>
          <div className="steps">
            <div className="step"><div className="num">1</div><h3>Tell us about your house</h3><p>Fill out the form or call us at {SITE.phone}. We need basic details about your property and a way to reach you. Takes about a minute.</p></div>
            <div className="step"><div className="num">2</div><h3>Get your cash offer in 24 hours</h3><p>We review your property, run our research, and call you back with a fair cash offer within 24 hours. No pressure, no obligation.</p></div>
            <div className="step"><div className="num">3</div><h3>Close on your timeline</h3><p>Pick a closing date that works for you. Close in as little as 7 days, or take more time if you need it. You walk away with cash.</p></div>
          </div>
          <p style={{ textAlign: "center", marginTop: 34 }}><Link className="btn btn-primary lg" href="/how-it-works">See the full process</Link></p>
        </div>
      </section>

      <section className="band-cream">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Why sell to us</span><h2>Built for homeowners who need <span className="accent">certainty.</span></h2></div>
          <div className="cards">
            <div className="card"><span className="ic">&#128176;</span><h3>Fair cash offer, no lowballs</h3><p>Based on your home&apos;s actual condition and local comps, not a formula designed to nickel and dime you.</p></div>
            <div className="card"><span className="ic">&#128197;</span><h3>Close on your timeline</h3><p>Need to move fast? We can close in 7 days. Need more time? Pick the date that works for you.</p></div>
            <div className="card"><span className="ic">&#127959;</span><h3>Any house, any condition</h3><p>Storm damage, code violations, mold, hoarder situations, fire, foundation issues. We have seen it all and we still buy.</p></div>
            <div className="card"><span className="ic">&#129309;</span><h3>Real people, local team</h3><p>You talk to a real human, not a call center. We live and work in Indiana.</p></div>
            <div className="card"><span className="ic">&#128683;</span><h3>Zero fees, zero commissions</h3><p>No agent fees. No closing costs. No service charges of any kind.</p></div>
            <div className="card"><span className="ic">&#128205;</span><h3>Local to Indiana</h3><p>Serving Indianapolis, Fort Wayne, South Bend, Kokomo, Anderson, and everywhere in between.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">The difference</span><h2>Selling to Dave vs <span className="accent">listing with an agent</span></h2><p>Two very different experiences. Here is a quick side by side so you can see what you are actually choosing.</p></div>
          <div className="cmp"><table>
            <thead><tr><th></th><th>Selling to Dave</th><th>Listing with an Agent</th></tr></thead>
            <tbody>
              <tr><td>Commissions and fees</td><td>$0</td><td>6% on average</td></tr>
              <tr><td>Repairs needed</td><td>None</td><td>Often required</td></tr>
              <tr><td>Showings</td><td>None</td><td>10 to 25 or more</td></tr>
              <tr><td>Time to close</td><td>7 to 14 days</td><td>60 to 90 plus days</td></tr>
              <tr><td>Closing costs</td><td>We pay</td><td>You pay</td></tr>
              <tr><td>Offer</td><td>Cash, as is</td><td>Subject to financing</td></tr>
              <tr><td>Appraisal contingency</td><td>None</td><td>Almost always</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Any situation</span><h2>We buy through the <span className="accent">hard situations.</span></h2><p>Whatever is happening with the house or your life, there is a good chance we have handled it before.</p></div>
          <div className="chips">
            <Link href="/situations/inherited-house">Inherited house</Link>
            <Link href="/situations/avoid-foreclosure">Facing foreclosure</Link>
            <Link href="/situations/probate">Probate</Link>
            <Link href="/situations/sell-with-tenants">Tenants in place</Link>
            <Link href="/situations/divorce">Divorce</Link>
            <Link href="/situations/damaged-house">Fire or storm damage</Link>
            <Link href="/situations/damaged-house">Foundation issues</Link>
            <Link href="/situations/damaged-house">Mold or water damage</Link>
            <Link href="/situations/avoid-foreclosure">Behind on payments</Link>
            <Link href="/situations">Vacant or hoarder home</Link>
          </div>
        </div>
      </section>

      <section className="band-cream">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Real stories</span><h2>From homeowners just like <span className="accent">you.</span></h2></div>
          <div className="reviews-grid">
            <div className="review"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>I was dreading selling my mom&apos;s house after she passed. Dave&apos;s team made it unbelievably simple. Cash in hand in 12 days, no repairs, no stress. They even let us keep the closing date flexible while we sorted out family stuff.</p><div className="head"><span className="avatar" aria-hidden="true">MJ</span><div><div className="who">Maria J.</div><div className="where">Indianapolis</div></div></div></div>
            <div className="review"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>House had foundation issues and three agents told me I would need $40K in repairs before listing. Dave bought it as is for a fair price and closed in two weeks. I am honestly relieved I did not go the traditional route.</p><div className="head"><span className="avatar" aria-hidden="true">RT</span><div><div className="who">Robert T.</div><div className="where">Fort Wayne</div></div></div></div>
            <div className="review"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>Behind on payments and did not want a foreclosure on my record. Reached out on a Tuesday, had an offer Wednesday, closed nine days later. Straight with me from the first call. Worth every star.</p><div className="head"><span className="avatar" aria-hidden="true">DK</span><div><div className="who">Denise K.</div><div className="where">Kokomo</div></div></div></div>
          </div>
          <p style={{ textAlign: "center", marginTop: 34 }}><Link className="btn btn-outline lg" href="/reviews">Read more reviews</Link></p>
        </div>
      </section>

      <Faq items={faqs} />
      <RelatedLinks title="Explore by market and situation" links={related} />
      <CTASection />
    </main>
  );
}
