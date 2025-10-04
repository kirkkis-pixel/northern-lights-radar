import { NextResponse } from "next/server";
import { getAuroraNow } from "@/lib/aurora-now";

export const revalidate = 60; // API response can be cached by Next

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = Number(searchParams.get("lat"));
    const lon = Number(searchParams.get("lon"));
    if (!isFinite(lat) || !isFinite(lon)) {
      return NextResponse.json({ error: "lat/lon required" }, { status: 400 });
    }
    const data = await getAuroraNow(lat, lon);
    return NextResponse.json(data);
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
