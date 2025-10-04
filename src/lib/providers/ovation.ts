export type Ovation = { kp?: number; prob?: number; updated?: string };

export async function fetchOvation(lat: number, lon: number): Promise<Ovation> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
  
  try {
    // Fetch both OVATION data and Kp data in parallel
    const [ovationRes, kpRes] = await Promise.all([
      fetch("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json", { 
        next: { revalidate: 300 },
        signal: controller.signal
      }),
      fetch("https://services.swpc.noaa.gov/json/planetary_k_index_1m.json", { 
        next: { revalidate: 300 },
        signal: controller.signal
      })
    ]);
    
    clearTimeout(timeoutId);
    
    if (!ovationRes.ok) throw new Error(`OVATION ${ovationRes.status}`);
    if (!kpRes.ok) throw new Error(`KP ${kpRes.status}`);
    
    const [ovationJson, kpJson] = await Promise.all([
      ovationRes.json(),
      kpRes.json()
    ]);

    // Find nearest probability cell; json.coordinates is often [lon,lat,prob]
    let best = { d: Number.POSITIVE_INFINITY, prob: 0 };
    for (const c of ovationJson.coordinates ?? []) {
      const d = Math.hypot((c[1] - lat), (c[0] - lon));
      if (d < best.d) best = { d, prob: Number(c[2] || 0) };
    }
    
    // Get latest Kp value from the array
    const latestKp = kpJson[0]?.kp_index ?? kpJson[0]?.estimated_kp ?? 0;
    const updated = ovationJson?.Observation_Time || ovationJson?.time || new Date().toISOString();
    
    return { 
      kp: Number(latestKp), 
      prob: Math.max(0, Math.min(100, best.prob)), 
      updated 
    };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
