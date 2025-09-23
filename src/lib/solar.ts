/**
 * Calculates solar elevation angle for a given location and time
 * Based on simplified solar position calculation
 */
export function calculateSolarElevation(
  latitude: number,
  longitude: number,
  date: Date = new Date()
): number {
  // Convert to radians
  const latRad = (latitude * Math.PI) / 180;
  // const lonRad = (longitude * Math.PI) / 180; // Unused for now
  
  // Calculate day of year
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  // Calculate solar declination (simplified)
  const declination = 23.45 * Math.sin((360 * (284 + dayOfYear) / 365) * Math.PI / 180);
  const declRad = (declination * Math.PI) / 180;
  
  // Calculate hour angle
  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60;
  const hourAngle = (utcHours - 12) * 15 + longitude;
  const hourAngleRad = (hourAngle * Math.PI) / 180;
  
  // Calculate solar elevation
  const elevation = Math.asin(
    Math.sin(declRad) * Math.sin(latRad) +
    Math.cos(declRad) * Math.cos(latRad) * Math.cos(hourAngleRad)
  );
  
  return (elevation * 180) / Math.PI; // Convert back to degrees
}

/**
 * Calculates darkness factor based on solar elevation
 * 0 at civil twilight (-6°), 1 at deep darkness (≤-12°)
 */
export function calculateDarknessFactor(solarElevation: number): number {
  // Map solar elevation to darkness factor
  // -6° (civil twilight) = 0
  // -12° (astronomical twilight) = 1
  const darkness = Math.max(0, Math.min(1, ((-solarElevation) - 6) / 6));
  return darkness;
}

/**
 * Gets darkness description based on solar elevation
 */
export function getDarknessDescription(solarElevation: number): string {
  if (solarElevation > 0) return 'Daylight';
  if (solarElevation > -6) return 'Civil twilight';
  if (solarElevation > -12) return 'Nautical twilight';
  if (solarElevation > -18) return 'Astronomical twilight';
  return 'Deep darkness';
}

/**
 * Gets solar data for a specific location and time
 */
export function getSolarData(
  latitude: number,
  longitude: number,
  date: Date = new Date()
): { elevation: number; darknessFactor: number; description: string } {
  const elevation = calculateSolarElevation(latitude, longitude, date);
  const darknessFactor = calculateDarknessFactor(elevation);
  const description = getDarknessDescription(elevation);
  
  return {
    elevation,
    darknessFactor,
    description
  };
}
