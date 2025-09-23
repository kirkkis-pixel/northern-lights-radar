import { NextRequest, NextResponse } from 'next/server';
import citiesData from '@/data/cities.json';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Find city in registry
    const city = citiesData.cities.find(c => c.slug === slug);
    
    if (!city) {
      return NextResponse.json(
        { error: 'City not found' },
        { status: 404 }
      );
    }
    
    // Fetch score data for this city
    const scoreResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/score?lat=${city.latitude}&lon=${city.longitude}`
    );
    
    if (!scoreResponse.ok) {
      throw new Error('Failed to fetch score data');
    }
    
    const scoreData = await scoreResponse.json();
    
    // Return city data with score
    const response = {
      city: {
        slug: city.slug,
        name: city.name,
        region: city.region,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude,
        timezone: city.timezone,
        viewingSpots: city.viewingSpots,
        description: city.description
      },
      score: scoreData.score,
      badge: scoreData.badge,
      components: scoreData.components,
      raw: scoreData.raw,
      dataAvailability: scoreData.dataAvailability
    };
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300'
      }
    });
    
  } catch (error) {
    console.error('City API error:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch city data' },
      { status: 500 }
    );
  }
}
