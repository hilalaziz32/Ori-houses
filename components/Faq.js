import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/seo";

export default function Faq({ items, heading = "Common questions" }) {
  return (
    <section className="faq" aria-labelledby="faq-h">
      <JsonLd data={faqSchema(items)} />
      <div className="wrap narrow">
        <h2 id="faq-h">{heading}</h2>
        <div className="faq-list">
          {items.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <div className="faq-a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
