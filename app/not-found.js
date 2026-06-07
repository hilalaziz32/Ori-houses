import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero" style={{ minHeight: "54vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1>Page not found</h1>
          <p style={{ margin: "0 auto" }}>The page you are looking for moved or never existed. Let us point you back in the right direction.</p>
          <Link className="btn btn-light lg" href="/" style={{ marginTop: 24 }}>Back to home</Link>
        </div>
      </section>
      <RelatedLinks title="Popular pages" links={[{ href: "/how-it-works", label: "How it works" }, { href: "/markets", label: "Markets" }, { href: "/situations", label: "Situations" }, { href: "/contact", label: "Get my cash offer" }]} />
    </main>
  );
}
