import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchRealTimeAuroraData, 
  getWeatherDataByCountry
} from '@/lib/real-time-weather';
import { getMoonData } from '@/lib/moon';
import { getSolarData } from '@/lib/solar';
import { calculateScore } from '@/lib/score';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = parseFloat(searchParams.get('lat') || '');
    const lon = parseFloat(searchParams.get('lon') || '');
    
    if (isNaN(lat) || isNaN(lon)) {
      return NextResponse.json(
        { error: 'Invalid latitude or longitude' },
        { status: 400 }
      );
    }
    
    // Validate coordinates
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      return NextResponse.json(
        { error: 'Coordinates out of valid range' },
        { status: 400 }
      );
    }
    
    // Determine country based on coordinates
    const determineCountry = (lat: number, lon: number): string => {
      if (lat >= 59 && lat <= 70 && lon >= 5 && lon <= 31) return 'Norway';
      if (lat >= 55 && lat <= 69 && lon >= 11 && lon <= 24) return 'Sweden';
      if (lat >= 60 && lat <= 70 && lon >= 20 && lon <= 31) return 'Finland';
      return 'Unknown';
    };
    
    const country = determineCountry(lat, lon);
    
    // Fetch all data sources in parallel with error handling
    const [auroraData, weatherData, moonData] = await Promise.allSettled([
      fetchRealTimeAuroraData(lat, lon),
      getWeatherDataByCountry(lat, lon, country),
      getMoonData(lat, lon)
    ]);
    
    // Get solar data (no API call needed)
    const solarData = getSolarData(lat, lon);
    
    // Extract data with fallbacks
    const aurora = auroraData.status === 'fulfilled' ? auroraData.value : null;
    const weather = weatherData.status === 'fulfilled' ? weatherData.value : null;
    const moon = moonData.status === 'fulfilled' ? moonData.value : null;
    
    // Calculate score with available data and good fallbacks
    const auroraProbability = aurora ? (aurora.auroraProbability / 100) : 0.7; // Convert percentage to decimal
    const cloudCover = weather ? (weather.cloudCover / 100) : 0.3; // Convert percentage to decimal
    const darknessFactor = solarData.darknessFactor;
    const moonBrightness = moon?.moonBrightness ?? 0.3; // Default to 30% if unavailable (good conditions)
    
    const scoreResult = calculateScore(
      auroraProbability,
      cloudCover,
      darknessFactor,
      moonBrightness
    );
    
    // Prepare response with raw data for debugging
    const response = {
      score: scoreResult.score,
      badge: scoreResult.badge,
      components: scoreResult.components,
      raw: {
        aurora: aurora ? {
          kpIndex: aurora.kpIndex,
          auroraProbability: aurora.auroraProbability,
          auroraLevel: aurora.auroraLevel,
          solarWindSpeed: aurora.solarWindSpeed,
          bzComponent: aurora.bzComponent,
          source: aurora.source,
          quality: aurora.quality
        } : null,
        weather: weather ? {
          temperature: weather.temperature,
          cloudCover: weather.cloudCover,
          visibility: weather.visibility,
          humidity: weather.humidity,
          windSpeed: weather.windSpeed,
          pressure: weather.pressure,
          source: weather.source,
          quality: weather.quality
        } : null,
        moon: moon?.raw ?? null,
        solar: {
          elevation: solarData.elevation,
          darkness: solarData.description
        }
      },
      dataAvailability: {
        aurora: !!aurora,
        weather: !!weather,
        moon: !!moon,
        solar: true
      }
    };
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300'
      }
    });
    
  } catch (error) {
    console.error('Score API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to calculate score',
        score: 0,
        badge: 'Poor',
        components: { P: 0, Visibility: 0, Dark: 0, MoonOK: 0 },
        raw: null,
        dataAvailability: { aurora: false, weather: false, moon: false, solar: false }
      },
      { status: 500 }
    );
  }
}

