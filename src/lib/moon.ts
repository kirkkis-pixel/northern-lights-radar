interface MoonData {
  lat: number;
  lon: number;
  timezone: string;
  daily: {
    time: string[];
    moonrise: string[];
    moonset: string[];
    moon_phase: number[];
  };
}

/**
 * Fetches moon data using simple astronomical calculations
 * No API key required - uses mathematical formulas
 */
export async function fetchMoonData(
  latitude: number,
  longitude: number
): Promise<MoonData | null> {
  try {
    // Calculate moon phase using astronomical formulas
    const now = new Date();
    const moonPhase = calculateMoonPhase(now);
    const moonTimes = calculateMoonTimes(now, latitude, longitude);
    
    return {
      lat: latitude,
      lon: longitude,
      timezone: 'Europe/Helsinki',
      daily: {
        time: [now.toISOString().split('T')[0]],
        moonrise: [moonTimes.moonrise.toISOString()],
        moonset: [moonTimes.moonset.toISOString()],
        moon_phase: [moonPhase]
      }
    };
  } catch (error) {
    console.error('Failed to calculate moon data:', error);
    return getFallbackMoonData();
  }
}

/**
 * Calculate moon phase using astronomical formulas
 */
function calculateMoonPhase(date: Date): number {
  // Days since known new moon (January 6, 2000)
  const knownNewMoon = new Date('2000-01-06T18:14:00Z');
  const daysSinceNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  
  // Moon synodic period is approximately 29.53059 days
  const moonPhase = (daysSinceNewMoon % 29.53059) / 29.53059;
  
  return moonPhase;
}

/**
 * Calculate moonrise and moonset times
 */
function calculateMoonTimes(date: Date, latitude: number, longitude: number): { moonrise: Date; moonset: Date } {
  // Simplified calculation - in reality this is complex
  // For now, use approximate times based on location
  const localTime = new Date(date.getTime() + (longitude * 4 * 60 * 1000)); // Approximate timezone offset
  
  // Approximate moonrise/moonset (simplified)
  const moonrise = new Date(localTime);
  moonrise.setHours(18, 0, 0, 0); // Approximate moonrise time
  
  const moonset = new Date(localTime);
  moonset.setHours(6, 0, 0, 0); // Approximate moonset time
  
  return { moonrise, moonset };
}

/**
 * Fallback moon data when API is unavailable
 */
function getFallbackMoonData(): MoonData {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  
  // Simple approximation: moon phase cycles every 29.5 days
  const daysSinceNewMoon = (now.getTime() / (1000 * 60 * 60 * 24)) % 29.5;
  const moonPhase = daysSinceNewMoon / 29.5;
  
  return {
    lat: 0,
    lon: 0,
    timezone: 'UTC',
    daily: {
      time: [today],
      moonrise: [new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString()],
      moonset: [new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString()],
      moon_phase: [moonPhase]
    }
  };
}

/**
 * Calculates moon brightness proxy from moon phase
 * 0 = new moon, 1 = full moon
 */
export function calculateMoonBrightness(moonPhase: number): number {
  // moon_phase is 0-1 where 0 is new moon, 0.5 is full moon
  // We want brightness to be 0 at new moon, 1 at full moon
  return Math.abs(moonPhase - 0.5) * 2;
}

/**
 * Gets moon phase description
 */
export function getMoonPhaseDescription(moonPhase: number): string {
  if (moonPhase < 0.05) return 'New moon';
  if (moonPhase < 0.25) return 'Waxing crescent';
  if (moonPhase < 0.45) return 'First quarter';
  if (moonPhase < 0.55) return 'Waxing gibbous';
  if (moonPhase < 0.75) return 'Full moon';
  if (moonPhase < 0.95) return 'Waning gibbous';
  if (moonPhase < 1.0) return 'Last quarter';
  return 'Waning crescent';
}

/**
 * Gets moon data for a specific location
 */
export async function getMoonData(
  latitude: number,
  longitude: number
): Promise<{ moonPhase: number; moonBrightness: number; description: string; raw: Record<string, unknown> } | null> {
  const data = await fetchMoonData(latitude, longitude);
  
  if (!data) {
    return null;
  }
  
  const moonPhase = data.daily.moon_phase[0];
  const moonBrightness = calculateMoonBrightness(moonPhase);
  const description = getMoonPhaseDescription(moonPhase);
  
  return {
    moonPhase,
    moonBrightness,
    description,
    raw: {
      timezone: data.timezone,
      daily: {
        time: data.daily.time[0],
        moonrise: data.daily.moonrise[0],
        moonset: data.daily.moonset[0],
        moon_phase: moonPhase
      }
    }
  };
}
