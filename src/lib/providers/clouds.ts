export async function fetchCloudPct(lat: number, lon: number): Promise<{ cloudPct?: number; updated?: string }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
  
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=cloudcover&timezone=auto`;
    const res = await fetch(url, { 
      next: { revalidate: 1800 }, // 30 min
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`Open-Meteo ${res.status}`);
    const j = await res.json();

  const times: string[] = j?.hourly?.time ?? [];
  const cc: number[]    = j?.hourly?.cloudcover ?? [];
  if (!times.length || !cc.length) return { cloudPct: undefined, updated: undefined };

  // Avg 21:00–03:00 local
  const idxs: number[] = [];
  times.forEach((t, i) => {
    const h = new Date(t).getHours();
    if (h >= 21 || h <= 3) idxs.push(i);
  });
  const vals = idxs.map(i => cc[i]).filter(v => typeof v === "number");
  const avg = vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : undefined;

    // Use the last hour we considered as "updated"
    const updated = vals.length ? times[idxs.at(-1)!] : new Date().toISOString();
    return { cloudPct: avg, updated };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
