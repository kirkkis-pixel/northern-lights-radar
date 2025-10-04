import SunCalc from "suncalc";

// Darkness: 0 at ≥ -6°, 1 at ≤ -12°
export function darkness(lat: number, lon: number, at = new Date()) {
  const elevDeg = SunCalc.getPosition(at, lat, lon).altitude * 180 / Math.PI;
  const d = (((-elevDeg) - 6) / 6);
  return Math.max(0, Math.min(1, d));
}

// MoonOK = 1 - 0.6 * illumination_fraction
export function moonOK(at = new Date()) {
  const { fraction } = SunCalc.getMoonIllumination(at);
  return Math.max(0, 1 - 0.6 * fraction);
}
