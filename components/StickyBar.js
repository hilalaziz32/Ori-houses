"use client";
import { useEffect, useRef } from "react";
import { SITE } from "@/lib/config";

export default function StickyBar() {
  const ref = useRef(null);
  useEffect(() => {
    const bar = ref.current;
    const form = document.getElementById("leadForm");
    if (!bar || !form || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (e) => { bar.style.display = e[0].isIntersecting ? "none" : ""; },
      { rootMargin: "0px 0px -40% 0px" }
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);
  return (
    <div className="sticky-cta" ref={ref}>
      <a className="sticky-call" href={`tel:${SITE.phoneRaw}`}><span aria-hidden="true">&#128222;</span> Call now</a>
      <a className="sticky-offer" href="/contact">Get cash offer</a>
    </div>
  );
}
