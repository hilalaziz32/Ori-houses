import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { POSTS } from "@/lib/config";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Guides", description: "Practical guides for Indiana homeowners on selling an inherited house, avoiding foreclosure, and comparing cash buyers to realtors.", path: "/blog" });

export default function Page() {
  return (
    <main id="main">
      <Breadcrumb trail={[{ name: "Home", href: "/" }, { name: "Guides", href: "/blog" }]} />
      <section className="page-hero"><div className="wrap"><h1>Guides for Indiana homeowners</h1><p>Clear, practical answers to the hard questions that come up when you need to sell. Written by our team, free of jargon.</p></div></section>
      <section><div className="wrap"><div className="cards">
        {POSTS.map((p) => (
          <Link className="card-link" href={`/blog/${p.slug}`} key={p.slug}><span className="meta">{p.read} read</span><h3>{p.title}</h3><p>{p.desc}</p></Link>
        ))}
      </div></div></section>
      <RelatedLinks title="Selling for a specific reason?" links={[{ href: "/situations/inherited-house", label: "Inherited house" }, { href: "/situations/avoid-foreclosure", label: "Avoid foreclosure" }, { href: "/situations/probate", label: "Probate" }, { href: "/situations/damaged-house", label: "Damaged house" }, { href: "/markets", label: "Your market" }, { href: "/faq", label: "Full FAQ" }]} />
      <CTASection />
    </main>
  );
}
