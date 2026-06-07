import Link from "next/link";

export default function RelatedLinks({ title, links }) {
  return (
    <section className="related">
      <div className="wrap">
        <h2>{title}</h2>
        <ul className="link-grid">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
