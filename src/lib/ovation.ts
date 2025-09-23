interface OVATIONPoint {
  lat: number;
  lon: number;
  value: number;
}

interface OVATIONData {
  coordinates: OVATIONPoint[];
  forecast: string;
  version: string;
}

/**
 * Fetches OVATION Prime aurora probability data from NOAA SWPC
 */
export async function fetchOVATIONData(): Promise<OVATIONData | null> {
  try {
    const response = await fetch('https://services.swpc.noaa.gov/json/ovation_aurora_latest.json', {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`OVATION API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch OVATION data:', error);
    return null;
  }
}

/**
 * Performs bilinear interpolation to get aurora probability at a specific lat/lon
 */
export function interpolateAuroraProbability(
  data: OVATIONData,
  targetLat: number,
  targetLon: number
): number {
  const { coordinates } = data;
  
  // Find the four nearest points for bilinear interpolation
  const sortedByDistance = coordinates
    .map(point => ({
      ...point,
      distance: Math.sqrt(
        Math.pow(point.lat - targetLat, 2) + Math.pow(point.lon - targetLon, 2)
      )
    }))
    .sort((a, b) => a.distance - b.distance);
  
  // Use the closest point for simplicity (can be enhanced with proper bilinear interpolation)
  const closest = sortedByDistance[0];
  
  // Normalize probability to 0-1 range
  return Math.max(0, Math.min(1, closest.value / 100));
}

/**
 * Gets aurora probability for a specific location
 */
export async function getAuroraProbability(
  latitude: number,
  longitude: number
): Promise<{ probability: number; raw: Record<string, unknown> } | null> {
  const data = await fetchOVATIONData();
  
  if (!data) {
    return null;
  }
  
  const probability = interpolateAuroraProbability(data, latitude, longitude);
  
  return {
    probability,
    raw: {
      forecast: data.forecast,
      version: data.version,
      coordinates: data.coordinates.slice(0, 4) // Sample for debugging
    }
  };
}
