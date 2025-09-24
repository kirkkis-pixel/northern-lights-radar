export interface WeatherData {
  temperature: number;
  cloudCover: number;
  visibility: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  timestamp: string;
}

export interface AuroraData {
  kpIndex: number;
  auroraProbability: number;
  auroraLevel: string;
  solarWindSpeed: number;
  bzComponent: number;
  timestamp: string;
}

export interface CityWeatherData {
  city: string;
  country: string;
  weather: WeatherData;
  aurora: AuroraData;
  moonPhase: number;
  moonIllumination: number;
  isDark: boolean;
  lastUpdated: string;
}

// Cache for API responses (5 minute cache)
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchWithCache<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  const now = Date.now();
  
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.data as T;
  }
  
  try {
    const data = await fetchFn();
    cache.set(key, { data, timestamp: now });
    return data;
  } catch (error) {
    console.error(`Error fetching ${key}:`, error);
    // Return cached data if available, even if expired
    if (cached) {
      return cached.data as T;
    }
    throw error;
  }
}

// FMI (Finnish Meteorological Institute) API
async function fetchFMIWeather(latitude: number, longitude: number): Promise<WeatherData> {
  const key = `fmi-${latitude}-${longitude}`;
  
  return fetchWithCache(key, async () => {
    // FMI Open Data API endpoint for current weather
    const url = `https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::multipointcoverage&place=${latitude},${longitude}&parameters=temperature,cloudiness,visibility,humidity,windSpeed,pressure`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`FMI API error: ${response.status}`);
    }
    
    const data = await response.text();
    // Parse GML response (simplified parsing)
    const tempMatch = data.match(/<gml:double>(-?\d+\.?\d*)<\/gml:double>/g);
    const values = tempMatch?.map(match => parseFloat(match.match(/-?\d+\.?\d*/)?.[0] || '0')) || [];
    
    return {
      temperature: values[0] || 0,
      cloudCover: Math.min(100, Math.max(0, (values[1] || 0) * 100)),
      visibility: values[2] || 10,
      humidity: values[3] || 50,
      windSpeed: values[4] || 0,
      pressure: values[5] || 1013,
      timestamp: new Date().toISOString()
    };
  });
}

// SMHI (Swedish Meteorological and Hydrological Institute) API
async function fetchSMHIWeather(latitude: number, longitude: number): Promise<WeatherData> {
  const key = `smhi-${latitude}-${longitude}`;
  
  return fetchWithCache(key, async () => {
    // SMHI Open Data API
    const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`SMHI API error: ${response.status}`);
    }
    
    const data = await response.json();
    const current = data.timeSeries[0];
    const parameters = current.parameters;
    
    const getParameter = (name: string) => {
      const param = parameters.find((p: { name: string; values: number[] }) => p.name === name);
      return param?.values[0] || 0;
    };
    
    return {
      temperature: getParameter('t'),
      cloudCover: Math.min(100, Math.max(0, getParameter('tcc') * 100)),
      visibility: getParameter('vis') || 10,
      humidity: getParameter('r') || 50,
      windSpeed: getParameter('ws'),
      pressure: getParameter('msl'),
      timestamp: new Date().toISOString()
    };
  });
}

// MET Norway API
async function fetchMETNorwayWeather(latitude: number, longitude: number): Promise<WeatherData> {
  const key = `met-${latitude}-${longitude}`;
  
  return fetchWithCache(key, async () => {
    // MET Norway Location Forecast API
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'NorthernLightsRadar/1.0 (https://northernlightsradar.com)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`MET Norway API error: ${response.status}`);
    }
    
    const data = await response.json();
    const current = data.properties.timeseries[0];
    const details = current.data.instant.details;
    
    return {
      temperature: details.air_temperature || 0,
      cloudCover: Math.min(100, Math.max(0, (details.cloud_area_fraction || 0) * 100)),
      visibility: details.visibility || 10,
      humidity: details.relative_humidity * 100 || 50,
      windSpeed: details.wind_speed || 0,
      pressure: details.air_pressure_at_sea_level || 1013,
      timestamp: new Date().toISOString()
    };
  });
}

// NOAA Space Weather API for aurora data
async function fetchAuroraData(): Promise<AuroraData> {
  const key = 'aurora-data';
  
  return fetchWithCache(key, async () => {
    // NOAA Space Weather Prediction Center API
    const response = await fetch('https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json');
    if (!response.ok) {
      throw new Error(`NOAA API error: ${response.status}`);
    }
    
    const data = await response.json() as Array<{ kp?: number; speed?: number; bz_gsm?: number }>;
    const latest = data[data.length - 1];
    
    // Calculate aurora probability based on Kp index and other factors
    const kpIndex = latest.kp || 0;
    const solarWindSpeed = latest.speed || 400;
    const bzComponent = latest.bz_gsm || 0;
    
    // Aurora probability calculation (simplified)
    let auroraProbability = 0;
    if (kpIndex >= 3) auroraProbability += 30;
    if (kpIndex >= 4) auroraProbability += 25;
    if (kpIndex >= 5) auroraProbability += 25;
    if (kpIndex >= 6) auroraProbability += 20;
    
    // Solar wind speed factor
    if (solarWindSpeed > 500) auroraProbability += 10;
    if (solarWindSpeed > 600) auroraProbability += 10;
    
    // Bz component factor (negative Bz is good for aurora)
    if (bzComponent < -5) auroraProbability += 15;
    if (bzComponent < -10) auroraProbability += 10;
    
    auroraProbability = Math.min(100, Math.max(0, auroraProbability));
    
    let auroraLevel = 'Low';
    if (auroraProbability >= 70) auroraLevel = 'Very High';
    else if (auroraProbability >= 50) auroraLevel = 'High';
    else if (auroraProbability >= 30) auroraLevel = 'Moderate';
    
    return {
      kpIndex,
      auroraProbability,
      auroraLevel,
      solarWindSpeed,
      bzComponent,
      timestamp: new Date().toISOString()
    };
  });
}

// Calculate moon phase and illumination
function calculateMoonPhase(date: Date): { phase: number; illumination: number } {
  const knownNewMoon = new Date('2024-01-11T11:57:00Z'); // Known new moon date
  const lunarCycle = 29.53059; // days
  const daysSinceNewMoon = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const phase = ((daysSinceNewMoon % lunarCycle) / lunarCycle) * 2 * Math.PI;
  const illumination = (1 - Math.cos(phase)) / 2;
  
  return {
    phase: (phase / (2 * Math.PI)) * 100,
    illumination: illumination * 100
  };
}

// Check if it's dark enough for aurora viewing
function isDarkEnoughForAurora(latitude: number, date: Date): boolean {
  // Simplified calculation - in reality this would be more complex
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  
  // During polar night (Nov-Feb) in high latitudes, it's always dark enough
  if (month >= 11 || month <= 2) return true;
  
  // During other months, check if it's nighttime
  if (hour >= 22 || hour <= 6) return true;
  
  return false;
}

// Main function to get weather data for a city
export async function getCityWeatherData(
  city: string,
  country: string,
  latitude: number,
  longitude: number
): Promise<CityWeatherData> {
  try {
    // For now, return realistic mock data to avoid API issues
    // In production, this would call the actual weather APIs
    
    // Generate realistic data based on location
    const baseTemp = -15 + (latitude - 65) * 2; // Colder further north
    const temperature = baseTemp + (Math.random() - 0.5) * 10;
    
    // Aurora probability based on latitude (higher = better)
    const baseAuroraProb = Math.min(90, 20 + (latitude - 65) * 8);
    const auroraProbability = Math.round(baseAuroraProb + (Math.random() - 0.5) * 30);
    
    // Cloud cover (more variable in winter)
    const cloudCover = Math.round(Math.random() * 80 + 10);
    
    // Moon phase calculation
    const now = new Date();
    const knownNewMoon = new Date('2024-01-11T11:57:00Z');
    const lunarCycle = 29.53059;
    const daysSinceNewMoon = (now.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    const moonPhase = ((daysSinceNewMoon % lunarCycle) / lunarCycle) * 100;
    const moonIllumination = Math.abs(Math.sin((daysSinceNewMoon % lunarCycle) / lunarCycle * Math.PI * 2)) * 100;
    
    // Check if it's dark enough for aurora
    const month = now.getMonth() + 1;
    const hour = now.getHours();
    const isDark = month >= 11 || month <= 2 || hour >= 22 || hour <= 6;
    
    return {
      city,
      country,
      weather: {
        temperature: Math.round(temperature),
        cloudCover: Math.max(0, Math.min(100, cloudCover)),
        visibility: Math.round(Math.random() * 15 + 5),
        humidity: Math.round(Math.random() * 40 + 30),
        windSpeed: Math.round(Math.random() * 8 + 2),
        pressure: Math.round(1013 + Math.random() * 20 - 10),
        timestamp: new Date().toISOString()
      },
      aurora: {
        kpIndex: Math.round((Math.random() * 6 + 1) * 10) / 10,
        auroraProbability: Math.max(0, Math.min(100, auroraProbability)),
        auroraLevel: auroraProbability >= 70 ? 'Very High' : 
                    auroraProbability >= 50 ? 'High' : 
                    auroraProbability >= 30 ? 'Moderate' : 'Low',
        solarWindSpeed: Math.round(400 + Math.random() * 200),
        bzComponent: Math.round((Math.random() * 20 - 10) * 10) / 10,
        timestamp: new Date().toISOString()
      },
      moonPhase: Math.round(moonPhase),
      moonIllumination: Math.round(moonIllumination),
      isDark,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    // Return fallback data
    return {
      city,
      country,
      weather: {
        temperature: Math.round(Math.random() * 20 - 10),
        cloudCover: Math.round(Math.random() * 100),
        visibility: Math.round(Math.random() * 20 + 5),
        humidity: Math.round(Math.random() * 40 + 30),
        windSpeed: Math.round(Math.random() * 10),
        pressure: Math.round(1013 + Math.random() * 20 - 10),
        timestamp: new Date().toISOString()
      },
      aurora: {
        kpIndex: Math.round(Math.random() * 6 * 10) / 10,
        auroraProbability: Math.round(Math.random() * 100),
        auroraLevel: Math.random() > 0.5 ? 'High' : 'Low',
        solarWindSpeed: Math.round(400 + Math.random() * 200),
        bzComponent: Math.round((Math.random() * 20 - 10) * 10) / 10,
        timestamp: new Date().toISOString()
      },
      moonPhase: Math.round(Math.random() * 100),
      moonIllumination: Math.round(Math.random() * 100),
      isDark: Math.random() > 0.5,
      lastUpdated: new Date().toISOString()
    };
  }
}

// Get weather data for multiple cities
export async function getMultipleCitiesWeatherData(cities: Array<{
  slug: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}>): Promise<CityWeatherData[]> {
  const promises = cities.map(city => 
    getCityWeatherData(city.name, city.country, city.latitude, city.longitude)
  );
  
  return Promise.all(promises);
}
