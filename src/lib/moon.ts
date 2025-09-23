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
 * Fetches moon data from OpenWeather One Call API
 */
export async function fetchMoonData(
  latitude: number,
  longitude: number
): Promise<MoonData | null> {
  const apiKey = process.env.OWM_API_KEY;
  
  if (!apiKey) {
    console.warn('OpenWeather API key not found, using fallback moon data');
    return getFallbackMoonData();
  }
  
  try {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 1800 } // Cache for 30 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Moon API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      daily: {
        time: data.daily.map((day: { dt: number }) => new Date(day.dt * 1000).toISOString().split('T')[0]),
        moonrise: data.daily.map((day: { moonrise: number }) => new Date(day.moonrise * 1000).toISOString()),
        moonset: data.daily.map((day: { moonset: number }) => new Date(day.moonset * 1000).toISOString()),
        moon_phase: data.daily.map((day: { moon_phase: number }) => day.moon_phase)
      }
    };
  } catch (error) {
    console.error('Failed to fetch moon data:', error);
    return getFallbackMoonData();
  }
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
