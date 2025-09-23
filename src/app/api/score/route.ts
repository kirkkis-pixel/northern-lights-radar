import { NextRequest, NextResponse } from 'next/server';
import { getAuroraProbability } from '@/lib/ovation';
import { getWeatherData } from '@/lib/weather';
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
    
    // Fetch all data sources in parallel
    const [auroraData, weatherData, moonData] = await Promise.all([
      getAuroraProbability(lat, lon),
      getWeatherData(lat, lon),
      getMoonData(lat, lon)
    ]);
    
    // Get solar data (no API call needed)
    const solarData = getSolarData(lat, lon);
    
    // Calculate score with available data
    const auroraProbability = auroraData?.probability ?? 0.5; // Default to 50% if unavailable
    const cloudCover = weatherData?.cloudCover ?? 0.5; // Default to 50% if unavailable
    const darknessFactor = solarData.darknessFactor;
    const moonBrightness = moonData?.moonBrightness ?? 0.5; // Default to 50% if unavailable
    
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
        aurora: auroraData?.raw ?? null,
        weather: weatherData?.raw ?? null,
        moon: moonData?.raw ?? null,
        solar: {
          elevation: solarData.elevation,
          darkness: solarData.description
        }
      },
      dataAvailability: {
        aurora: !!auroraData,
        weather: !!weatherData,
        moon: !!moonData,
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

