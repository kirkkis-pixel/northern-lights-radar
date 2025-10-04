import { fetchOvation } from "./providers/ovation";
import { fetchCloudPct } from "./providers/clouds";
import { darkness, moonOK } from "./providers/astro";

export type AuroraNow = {
  score: number;
  kp?: number;
  prob?: number;        // OVATION prob 0..100
  cloudPct?: number;    // 0..100
  dark: number;         // 0..1
  moon: number;         // 0..1 (MoonOK)
  updatedAt: string;    // the most conservative of inputs
  freshness: { ovation?: string; clouds?: string };
};

function computeScore(prob?: number, cloudPct?: number, dark = 0, moon = 1) {
  const P = (prob ?? 0) / 100;
  const vis = 1 - (Math.max(0, Math.min(100, cloudPct ?? 100)) / 100);
  return Math.round(100 * P * vis * dark * moon);
}

export async function getAuroraNow(lat: number, lon: number): Promise<AuroraNow> {
  const [ov, clouds] = await Promise.allSettled([
    fetchOvation(lat, lon),
    fetchCloudPct(lat, lon),
  ]);

  const ovOk = ov.status === "fulfilled" ? ov.value : undefined;
  const clOk = clouds.status === "fulfilled" ? clouds.value : undefined;

  const dark = darkness(lat, lon);
  const moon = moonOK();

  const score = computeScore(ovOk?.prob, clOk?.cloudPct, dark, moon);

  // When multiple sources, choose the oldest timestamp for updatedAt (conservative)
  const updatedAt = [ovOk?.updated, clOk?.updated]
    .filter(Boolean)
    .sort()
    .at(0) || new Date().toISOString();

  return {
    score,
    kp: ovOk?.kp,
    prob: ovOk?.prob,
    cloudPct: clOk?.cloudPct,
    dark, moon,
    updatedAt,
    freshness: { ovation: ovOk?.updated, clouds: clOk?.updated }
  };
}
