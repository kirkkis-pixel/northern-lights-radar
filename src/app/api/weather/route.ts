import { NextRequest, NextResponse } from 'next/server';
import { 
  getWeatherDataByCountry, 
  fetchRealTimeAuroraData,
  RealTimeWeatherData,
  RealTimeAuroraData 
} from '@/lib/real-time-weather';

interface CityWeatherData {
  city: string;
  country: string;
  weather: RealTimeWeatherData;
  aurora: RealTimeAuroraData;
  moonPhase: number;
  moonIllumination: number;
  isDark: boolean;
  lastUpdated: string;
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
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  
  // During polar night (Nov-Feb) in high latitudes, it's always dark enough
  if (month >= 11 || month <= 2) return true;
  
  // During other months, check if it's nighttime
  if (hour >= 22 || hour <= 6) return true;
  
  return false;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const country = searchParams.get('country');
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  if (!city || !country || !latitude || !longitude) {
    return NextResponse.json(
      { error: 'Missing required parameters: city, country, latitude, longitude' },
      { status: 400 }
    );
  }

  try {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    
    // Validate coordinates
    if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      );
    }

    // Fetch real-time weather and aurora data in parallel
    const [weather, aurora] = await Promise.allSettled([
      getWeatherDataByCountry(lat, lon, country),
      fetchRealTimeAuroraData(lat, lon)
    ]);
    
    // Handle weather data
    let weatherData: RealTimeWeatherData;
    if (weather.status === 'fulfilled') {
      weatherData = weather.value;
    } else {
      console.error('Weather data fetch failed:', weather.reason);
      // Fallback weather data
      const month = new Date().getMonth() + 1;
      const realisticTemp = lat > 65 ? 
        (month >= 10 || month <= 3 ? Math.floor(Math.random() * 15) - 10 : Math.floor(Math.random() * 20) + 5) :
        Math.floor(Math.random() * 15) + 5;
      
      weatherData = {
        temperature: realisticTemp,
        cloudCover: Math.floor(Math.random() * 40) + 30,
        visibility: Math.floor(Math.random() * 15) + 5, // 5-20km realistic visibility
        humidity: Math.floor(Math.random() * 30) + 60,
        windSpeed: Math.floor(Math.random() * 8) + 3,
        pressure: 1013 + Math.floor(Math.random() * 20) - 10,
        precipitation: Math.floor(Math.random() * 5),
        uvIndex: Math.floor(Math.random() * 3),
        timestamp: new Date().toISOString(),
        source: 'FALLBACK',
        quality: 'LOW'
      };
    }
    
    // Handle aurora data
    let auroraData: RealTimeAuroraData;
    if (aurora.status === 'fulfilled') {
      auroraData = aurora.value;
    } else {
      console.error('Aurora data fetch failed:', aurora.reason);
      // Fallback aurora data
      auroraData = {
        kpIndex: 2,
        auroraProbability: 25,
        auroraLevel: 'Low',
        solarWindSpeed: 400,
        bzComponent: 0,
        density: 5,
        temperature: 0,
        dstIndex: 0,
        aeIndex: 50,
        apIndex: 5,
        timestamp: new Date().toISOString(),
        forecast: {
          next3Hours: 25,
          next6Hours: 30,
          next12Hours: 20,
          next24Hours: 35
        },
        source: 'FALLBACK',
        quality: 'LOW'
      };
    }
    
    // Calculate moon data
    const now = new Date();
    const moonData = calculateMoonPhase(now);
    
    // Check if it's dark enough for aurora
    const isDark = isDarkEnoughForAurora(lat, now);
    
    const response: CityWeatherData = {
      city,
      country,
      weather: weatherData,
      aurora: auroraData,
      moonPhase: moonData.phase,
      moonIllumination: moonData.illumination,
      isDark,
      lastUpdated: now.toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
}