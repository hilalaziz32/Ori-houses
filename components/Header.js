"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE, NAV } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = NAV.map((n) => (
    <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
      {n.label}
    </Link>
  ));
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label={`${SITE.name} home`}>
          <img className="brand-logo" src="/assets/logo-horizontal.svg" alt={`${SITE.name} Indiana`} width="240" height="50" />
        </Link>
        <nav className="primary" aria-label="Primary">{links}</nav>
        <a className="btn btn-call" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> {SITE.phone}</a>
        <button className="menu-toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>&#9776;</button>
      </div>
      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
        {links}
        <Link className="btn btn-primary block" href="/contact" onClick={() => setOpen(false)}>Get My Cash Offer</Link>
      </nav>
    </header>
  );
}
