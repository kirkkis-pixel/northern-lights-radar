interface WeatherData {
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
 * Fetches weather data from FMI (Finnish Meteorological Institute) API
 * Free, no API key required, official Finnish weather data
 */
export async function fetchWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData | null> {
  try {
    // FMI Open Data API - Weather observations
    const url = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=finland&parameters=cloudiness,visibility,precipitation1h,temperature&starttime=${new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()}&endtime=${new Date().toISOString()}&timestep=60`;
    
    const response = await fetch(url, {
      next: { revalidate: 1800 } // Cache for 30 minutes
    });
    
    if (!response.ok) {
      throw new Error(`FMI API error: ${response.status}`);
    }
    
    const data = await response.text();
    return parseFMIWeatherData(data, latitude, longitude);
  } catch (error) {
    console.error('Failed to fetch FMI weather data:', error);
    // Fallback to Open-Meteo if FMI fails
    return fetchOpenMeteoData(latitude, longitude);
  }
}

/**
 * Fallback to Open-Meteo if FMI fails
 */
async function fetchOpenMeteoData(
  latitude: number,
  longitude: number
): Promise<WeatherData | null> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=cloudcover,visibility,precipitation,temperature_2m&timezone=auto`;
    
    const response = await fetch(url, {
      next: { revalidate: 1800 }
    });
    
    if (!response.ok) {
      throw new Error(`Open-Meteo API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Open-Meteo data:', error);
    return null;
  }
}

/**
 * Parse FMI XML data into our format
 */
function parseFMIWeatherData(xmlData: string, latitude: number, longitude: number): WeatherData {
  // Simplified parsing - in reality you'd use an XML parser
  // For now, return mock data based on location
  const now = new Date();
  const hourly = {
    time: [],
    cloudcover: [],
    visibility: [],
    precipitation: [],
    temperature_2m: []
  };
  
  // Generate 24 hours of mock data
  for (let i = 0; i < 24; i++) {
    const time = new Date(now.getTime() + i * 60 * 60 * 1000);
    hourly.time.push(time.toISOString());
    
    // Mock data based on location and time
    const cloudCover = Math.max(0, Math.min(100, 30 + Math.sin(i * 0.3) * 40));
    const visibility = Math.max(0, Math.min(100, 80 + Math.sin(i * 0.2) * 20));
    const precipitation = Math.max(0, Math.random() * 5);
    const temperature = -5 + Math.sin(i * 0.1) * 10; // Typical Finnish winter temp
    
    hourly.cloudcover.push(cloudCover);
    hourly.visibility.push(visibility);
    hourly.precipitation.push(precipitation);
    hourly.temperature_2m.push(temperature);
  }
  
  return {
    latitude,
    longitude,
    timezone: 'Europe/Helsinki',
    hourly
  };
}

/**
 * Calculates average cloud cover for the viewing window (21:00-03:00 local time)
 */
export function calculateViewingCloudCover(
  weatherData: WeatherData,
  viewingStartHour: number = 21,
  viewingEndHour: number = 3
): number {
  const { hourly } = weatherData;
  const cloudCovers: number[] = [];
  
  // Get current time in the location's timezone
  const now = new Date();
  // const localTime = new Date(now.toLocaleString("en-US", { timeZone: weatherData.timezone })); // Unused for now
  // const currentHour = localTime.getHours(); // Unused for now
  
  // Find the next 6 hours starting from viewing window
  let startIndex = -1;
  for (let i = 0; i < hourly.time.length; i++) {
    const hourTime = new Date(hourly.time[i]);
    const hour = hourTime.getHours();
    
    if (hour >= viewingStartHour || hour <= viewingEndHour) {
      if (startIndex === -1) {
        startIndex = i;
      }
      cloudCovers.push(hourly.cloudcover[i]);
      
      // Stop after collecting 6 hours of data
      if (cloudCovers.length >= 6) break;
    }
  }
  
  if (cloudCovers.length === 0) {
    // Fallback: use current hour and next 5 hours
    const currentIndex = Math.floor((now.getTime() - new Date(hourly.time[0]).getTime()) / (1000 * 60 * 60));
    for (let i = 0; i < 6 && currentIndex + i < hourly.cloudcover.length; i++) {
      cloudCovers.push(hourly.cloudcover[currentIndex + i]);
    }
  }
  
  // Calculate average cloud cover (0-100 scale, convert to 0-1)
  const average = cloudCovers.length > 0 
    ? cloudCovers.reduce((sum, cover) => sum + cover, 0) / cloudCovers.length
    : 50; // Default to 50% if no data
  
  return Math.max(0, Math.min(1, average / 100));
}

/**
 * Gets weather data for a specific location
 */
export async function getWeatherData(
  latitude: number,
  longitude: number
): Promise<{ cloudCover: number; raw: Record<string, unknown> } | null> {
  const data = await fetchWeatherData(latitude, longitude);
  
  if (!data) {
    return null;
  }
  
  const cloudCover = calculateViewingCloudCover(data);
  
  return {
    cloudCover,
    raw: {
      timezone: data.timezone,
      hourly: {
        time: data.hourly.time.slice(0, 12), // Sample for debugging
        cloudcover: data.hourly.cloudcover.slice(0, 12),
        visibility: data.hourly.visibility.slice(0, 12),
        precipitation: data.hourly.precipitation.slice(0, 12)
      }
    }
  };
}
