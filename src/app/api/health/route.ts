import { NextResponse } from "next/server";

export async function GET() {
  const out: any = { ok: true, checks: [] };
  try {
    const r = await fetch("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json", { cache: "no-store" });
    out.checks.push({ name: "OVATION", ok: r.ok, status: r.status });
  } catch (e: any) { 
    out.ok = false; 
    out.checks.push({ name: "OVATION", ok: false, error: String(e) }); 
  }

  try {
    const r = await fetch("https://api.open-meteo.com/v1/forecast?latitude=66.5&longitude=25.7&hourly=cloudcover&timezone=auto", { cache: "no-store" });
    out.checks.push({ name: "Open-Meteo", ok: r.ok, status: r.status });
  } catch (e: any) { 
    out.ok = false; 
    out.checks.push({ name: "Open-Meteo", ok: false, error: String(e) }); 
  }

  return NextResponse.json(out);
}
