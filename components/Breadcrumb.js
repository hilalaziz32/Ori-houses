import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export default function Breadcrumb({ trail }) {
  return (
    <nav className="crumbs wrap" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(trail)} />
      {trail.map((t, i) => {
        const last = i === trail.length - 1;
        return (
          <span key={t.href}>
            {last ? <span aria-current="page">{t.name}</span> : <Link href={t.href}>{t.name}</Link>}
            {!last && <span className="sep" aria-hidden="true">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
