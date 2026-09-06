import Link from "next/link";
import StickyBar from "./StickyBar";
import { SITE, addressLine, dbaLine } from "@/lib/config";

const COLS = [
  { h: "Company", links: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]},
  { h: "Markets", links: [
    { href: "/markets", label: "All Indiana markets" },
    { href: "/markets/indianapolis", label: "Indianapolis" },
    { href: "/markets/fort-wayne", label: "Fort Wayne" },
    { href: "/markets/south-bend", label: "South Bend" },
    { href: "/markets/kokomo", label: "Kokomo" },
    { href: "/markets/anderson", label: "Anderson" },
  ]},
  { h: "Situations", links: [
    { href: "/situations", label: "All situations" },
    { href: "/situations/inherited-house", label: "Inherited house" },
    { href: "/situations/avoid-foreclosure", label: "Avoid foreclosure" },
    { href: "/situations/sell-with-tenants", label: "Sell with tenants" },
    { href: "/situations/probate", label: "Probate" },
    { href: "/situations/damaged-house", label: "Damaged house" },
  ]},
  { h: "Guides", links: [
    { href: "/blog", label: "All guides" },
    { href: "/blog/sell-inherited-house-indiana", label: "Selling an inherited house" },
    { href: "/blog/behind-on-mortgage-payments-options", label: "Behind on payments?" },
    { href: "/blog/cash-buyer-vs-realtor", label: "Cash buyer vs realtor" },
  ]},
];

// The footer carries 22 links and sits on every page, so leaving prefetch on meant every
// page pulled ~22 RSC payloads (~126 KB gz) as soon as the footer scrolled into view.
// The header nav and CTAs keep prefetch; these sitemap-style links do not.
export default function Footer() {
  return (
    <>
      <StickyBar />
      <footer className="site-footer">
        <div className="wrap fgrid">
          <div className="fcol fbrand">
            <Link className="brand" href="/"><span className="brand-text"><strong>DAVE BUYS HOUSES</strong><em>INDIANA</em></span></Link>
            <p>{SITE.name} is a local Indiana cash home buyer. We are real estate investors who purchase properties directly as principals. We are not licensed real estate agents or a brokerage.</p>
            <p className="dba">{dbaLine()}</p>
            <p className="nap"><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />{addressLine()}</p>
          </div>
          {COLS.map((c) => (
            <div className="fcol" key={c.h}>
              <h3>{c.h}</h3>
              <ul>{c.links.map((l) => <li key={l.href}><Link href={l.href} prefetch={false}>{l.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="wrap fbar">
          <p>&copy; 2026 {SITE.name}. All rights reserved.</p>
          <p className="legal-links"><Link href="/legal/privacy" prefetch={false}>Privacy Policy</Link> <Link href="/legal/terms" prefetch={false}>Terms of Service</Link> <Link href="/legal/sms-terms" prefetch={false}>SMS Terms</Link></p>
        </div>
      </footer>
    </>
  );
}
