import { NextResponse } from "next/server";

// Lead intake endpoint. For now it validates and accepts the lead.
// TODO: wire to email / CRM / SMS (see memory/open-items). Add env-based delivery.
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot.
  if (data.website) return NextResponse.json({ ok: true });

  const phone = String(data.phone || "").replace(/[^0-9]/g, "");
  if (!data.firstName || !data.lastName || phone.length < 10 || !data.address || !data.consent) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  // Placeholder delivery. Replace with real integration.
  console.log("New lead:", { name: `${data.firstName} ${data.lastName}`, phone, email: data.email, address: data.address });

  return NextResponse.json({ ok: true });
}
