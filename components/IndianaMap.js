// Decorative, lightweight Indiana map. The real navigation lives in the city list
// beside it; the dots are aria-hidden so the SVG stays purely visual.
import { CITIES } from "@/lib/config";

// Approximate positions on a 240 x 300 viewBox (north is up).
// side controls which way the label runs so nothing clips the state edge.
const PINS = {
  "south-bend": { x: 116, y: 32, label: "South Bend", side: "right" },
  "fort-wayne": { x: 190, y: 74, label: "Fort Wayne", side: "left" },
  kokomo: { x: 118, y: 118, label: "Kokomo", side: "right" },
  anderson: { x: 158, y: 144, label: "Anderson", side: "right" },
  indianapolis: { x: 110, y: 176, label: "Indianapolis", side: "right", star: true },
};

export default function IndianaMap() {
  return (
    <svg className="in-map" viewBox="0 0 240 300" role="img" aria-label="Map of Indiana showing the cities we buy houses in">
      <path
        className="state"
        d="M58 14 L150 10 L152 40 L196 42 L208 250 L150 262 Q132 266 132 280 L120 286 Q108 280 110 266 L40 270 L48 60 L56 60 Z"
      />
      {CITIES.map((c) => {
        const p = PINS[c.slug];
        if (!p) return null;
        return (
          <g key={c.slug} aria-hidden="true">
            <circle className="ring" cx={p.x} cy={p.y} r="11" />
            {p.star ? (
              <text className="star" x={p.x} y={p.y + 5} textAnchor="middle" fontSize="16">&#9733;</text>
            ) : (
              <circle className="pin" cx={p.x} cy={p.y} r="5" />
            )}
            <text className="lbl" x={p.side === "left" ? p.x - 14 : p.x + 14} y={p.y + 4} textAnchor={p.side === "left" ? "end" : "start"}>{p.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
