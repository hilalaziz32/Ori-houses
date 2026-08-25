import Link from "next/link";

// prefetch is off here on purpose: this is an explore-more grid, so the browser would
// otherwise fetch an RSC payload (~5 KB gz each) for every tile that scrolls into view.
export default function RelatedLinks({ title, links }) {
  return (
    <section className="related">
      <div className="wrap">
        <h2>{title}</h2>
        <ul className="link-grid">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} prefetch={false}>{l.label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
