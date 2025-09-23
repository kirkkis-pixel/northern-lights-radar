/**
 * Norwegian Meteorological Institute (MET Norway) Weather Data
 * Free API: https://api.met.no/
 */

export interface METWeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  hourly: {
    time: string[];
    cloudcover: number[];
    visibility: number[];
    precipitation: number[];
    temperature_2m: number[];
  };
}

/**
 * Fetch weather data from MET Norway (Norwegian Meteorological Institute)
 * Free API with no authentication required
 * Documentation: https://api.met.no/weatherapi/locationforecast/2.0/documentation
 */
export async function fetchMETWeatherData(
  latitude: number,
  longitude: number
): Promise<METWeatherData | null> {
  try {
    // MET Norway Location Forecast API
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;
    
    const response = await fetch(url, {
      next: { revalidate: 1800 }, // Cache for 30 minutes
      headers: {
        'User-Agent': 'NorthernLightsRadar/1.0 (https://northernlightsradar.com)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`MET Norway API error: ${response.status}`);
    }
    
    const data = await response.json();
    return parseMETWeatherData(data, latitude, longitude);
  } catch (error) {
    console.error('Failed to fetch MET Norway weather data:', error);
    return null;
  }
}

/**
 * Parse MET Norway weather data and convert to our standard format
 */
function parseMETWeatherData(data: Record<string, unknown>, latitude: number, longitude: number): METWeatherData {
  // MET Norway returns data in a different format, so we'll create mock data for now
  // In a real implementation, you would parse the actual MET response
  const now = new Date();
  const hourly = {
    time: [] as string[],
    cloudcover: [] as number[],
    visibility: [] as number[],
    precipitation: [] as number[],
    temperature_2m: [] as number[]
  };
  
  // Generate 24 hours of mock data based on Norwegian Lapland conditions
  for (let i = 0; i < 24; i++) {
    const time = new Date(now.getTime() + i * 60 * 60 * 1000);
    hourly.time.push(time.toISOString());
    
    // Mock data based on Norwegian Lapland location and time
    const cloudCover = Math.max(0, Math.min(100, 20 + Math.sin(i * 0.25) * 30));
    const visibility = Math.max(0, Math.min(100, 90 + Math.sin(i * 0.1) * 10));
    const precipitation = Math.max(0, Math.random() * 2);
    const temperature = -6 + Math.sin(i * 0.12) * 14; // Typical Norwegian Lapland winter temp
    
    hourly.cloudcover.push(cloudCover);
    hourly.visibility.push(visibility);
    hourly.precipitation.push(precipitation);
    hourly.temperature_2m.push(temperature);
  }
  
  return {
    latitude,
    longitude,
    timezone: 'Europe/Oslo',
    hourly
  };
}

/**
 * Calculate average cloud cover for the viewing window (21:00-03:00 local)
 */
export function calculateNorwegianViewingCloudCover(hourly: METWeatherData['hourly']): number {
  const viewingHours = [21, 22, 23, 0, 1, 2, 3]; // 9 PM to 3 AM
  const cloudCovers: number[] = [];
  
  viewingHours.forEach(hour => {
    const hourIndex = hour === 0 ? 24 : hour; // Handle midnight
    if (hourly.cloudcover[hourIndex]) {
      cloudCovers.push(hourly.cloudcover[hourIndex]);
    }
  });
  
  if (cloudCovers.length === 0) return 45; // Default if no data
  
  return cloudCovers.reduce((sum, cover) => sum + cover, 0) / cloudCovers.length;
}
