// Single source of truth. House rule: no em dashes in any copy.

export const SITE = {
  name: "Dave Buys Houses",
  // Registered entity behind the brand. Carrier and 10DLC review needs this to match
  // the campaign registration exactly, so it is spaced as registered: DOIHOMES LLC.
  legal: "DOIHOMES LLC",
  domain: "https://www.davebuyshousesindiana.com",
  phone: "317-526-4837",
  phoneRaw: "3175264837",
  phoneIntl: "+1-317-526-4837",
  email: "office@5minutescashoffers.com",
  cityHQ: "Indianapolis",
  region: "IN",
  rating: "4.9",
  ratingCount: "347",
  housesBought: "1,200+",
  themeColor: "#1F4429",
  // Local SEO. Leave street/zip/geo empty until the real values are confirmed:
  // schema omits any field left blank rather than publishing a placeholder.
  address: { street: "", city: "Indianapolis", region: "IN", zip: "", country: "US" },
  geo: { lat: "", lng: "" },
  priceRange: "$$",
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  // Google Business Profile URL first, then any social profiles.
  profiles: [],
  // Search Console token from the "HTML tag" method: the content="..." value only.
  googleVerification: "",
  description:
    "Sell your Indiana house fast for cash. No repairs, no fees, no agents. Get a fair cash offer in 24 hours across Indianapolis, Fort Wayne, South Bend, Kokomo, and Anderson.",
};

// One line postal address for display (footer, contact page). Street and zip are still
// blank in SITE.address, so today this renders "Indianapolis, IN". Fill those two fields
// in and the full registered address appears everywhere it is shown, plus in the
// LocalBusiness schema, with no further edits.
export function addressLine() {
  const { street, city, region, zip } = SITE.address;
  const locality = [city, region].filter(Boolean).join(", ");
  return [street, [locality, zip].filter(Boolean).join(" ")].filter(Boolean).join(", ");
}

// Ties the trading name to the registered entity. Carriers reviewing an SMS campaign
// need to see that Dave Buys Houses and DOIHOMES LLC are the same company.
export function dbaLine() {
  return `${SITE.name} is a DBA of ${SITE.legal}.`;
}

export const CITIES = [
  { slug: "indianapolis", name: "Indianapolis", county: "Marion County", blurb: "Indiana's capital and largest market, from Fountain Square to the far north side." },
  { slug: "fort-wayne", name: "Fort Wayne", county: "Allen County", blurb: "Northeast Indiana's hub, where older housing stock often needs work we are happy to take on." },
  { slug: "south-bend", name: "South Bend", county: "St. Joseph County", blurb: "Home of Notre Dame, with many inherited and rental properties changing hands." },
  { slug: "kokomo", name: "Kokomo", county: "Howard County", blurb: "A tight-knit central Indiana city where fast, private sales matter." },
  { slug: "anderson", name: "Anderson", county: "Madison County", blurb: "An East Central Indiana community we have served for years." },
];

export const SITUATIONS = [
  { slug: "inherited-house", name: "Sell an Inherited House", short: "Inherited House", h: "Sell an inherited Indiana house without the stress" },
  { slug: "avoid-foreclosure", name: "Avoid Foreclosure", short: "Avoid Foreclosure", h: "Behind on payments? Sell before foreclosure hits your record" },
  { slug: "sell-with-tenants", name: "Sell a House With Tenants", short: "Sell With Tenants", h: "Sell a tenant occupied Indiana property, no eviction needed" },
  { slug: "probate", name: "Sell a Probate House", short: "Probate", h: "Sell a house in probate in Indiana" },
  { slug: "divorce", name: "Sell a House in Divorce", short: "Divorce", h: "Sell the house fast and split the proceeds cleanly" },
  { slug: "damaged-house", name: "Sell a Damaged House", short: "Damaged House", h: "Fire, storm, mold, or foundation damage? We still buy" },
];

export const POSTS = [
  { slug: "sell-inherited-house-indiana", title: "How to Sell an Inherited House in Indiana", desc: "Probate, taxes, sibling disagreements, and deferred maintenance, explained in plain language.", date: "2026-01-15", author: "Dave Scott", read: "8 min" },
  { slug: "behind-on-mortgage-payments-options", title: "Behind on Mortgage Payments? Your 5 Real Options in Indiana", desc: "A clear breakdown of every option Indiana homeowners have, including the ones lenders rarely mention.", date: "2026-02-03", author: "Dave Scott", read: "9 min" },
  { slug: "cash-buyer-vs-realtor", title: "Cash Buyer vs Realtor: Which One Actually Nets You More?", desc: "The real math of listing with an agent versus taking a cash offer, line by line.", date: "2026-02-20", author: "Dave Scott", read: "7 min" },
];

export const FAQ = {
  close_speed: { q: "How fast can you actually close?", a: "As fast as 7 days when the title is clear. If there is probate, liens, or other paperwork, it can take longer. We give you a realistic timeline before you commit, never a vague promise." },
  cost: { q: "Do I have to pay anything?", a: "No. There are no commissions, no fees, and no closing costs. The number we offer is the number you walk away with." },
  repairs: { q: "What if my house needs repairs?", a: "That is our problem, not yours. We buy houses in any condition. Do not repair, do not paint, and do not clean if you would rather not." },
  behind: { q: "What if I am behind on my mortgage?", a: "We work with homeowners in pre-foreclosure all the time. The sooner you reach out, the more options you have." },
  tenants: { q: "What if I have tenants in the property?", a: "We buy tenant occupied properties. You do not need to evict anyone or get them to move out first." },
  probate: { q: "What if the house is in probate?", a: "We buy probate properties. We can often start the process before probate fully closes, then close once it does." },
  offer_calc: { q: "How is your offer calculated?", a: "We look at recent sales of similar houses in your area, then subtract estimated repairs, holding costs, and a reasonable margin. We show you the logic, not just a number." },
  underwater: { q: "What if I owe more than the house is worth?", a: "We can sometimes still help through a short sale or other creative structures. It is worth a conversation." },
  private: { q: "Is this confidential?", a: "Yes. Neighbors and family do not know unless you choose to tell them." },
  areas: { q: "What areas of Indiana do you buy in?", a: "Indianapolis (Marion County), Fort Wayne (Allen County), South Bend (St. Joseph County), Kokomo (Howard County), Anderson (Madison County), and the towns around them." },
  obligation: { q: "Is the offer really no obligation?", a: "Yes. You can take our offer, think it over, compare it to listing with an agent, or walk away. There is no pressure and no cost to find out your number." },
};

export const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/markets", label: "Markets" },
  { href: "/situations", label: "Situations" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];
