"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds a gentle fade-up to any element with className "reveal" as it scrolls in.
// Re-runs on every route change so client-side navigation (e.g. clicking back to
// the home page) re-observes the new page's elements instead of leaving them hidden.
// Marks <html> with "js" so no-JS users see content fully visible (CSS handles that).
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Safety net: if anything is still hidden shortly after navigation, reveal it.
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    }, 600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [pathname]);
  return null;
}
