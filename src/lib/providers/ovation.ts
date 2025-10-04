export type Ovation = { kp?: number; prob?: number; updated?: string };

export async function fetchOvation(lat: number, lon: number): Promise<Ovation> {
  const res = await fetch(
    "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json",
    { next: { revalidate: 300 } } // cache real response up to 5 min
  );
  if (!res.ok) throw new Error(`OVATION ${res.status}`);
  const json = await res.json();

  // Find nearest probability cell; json.coordinates is often [lon,lat,prob]
  let best = { d: Number.POSITIVE_INFINITY, prob: 0 };
  for (const c of json.coordinates ?? []) {
    const d = Math.hypot((c[1] - lat), (c[0] - lon));
    if (d < best.d) best = { d, prob: Number(c[2] || 0) };
  }
  const kp = Number(json.Kp ?? json.kp ?? 0);
  const updated = json?.Observation_Time || json?.time || new Date().toISOString();
  return { kp, prob: Math.max(0, Math.min(100, best.prob)), updated };
}
