'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBadgeColorClass } from '@/lib/score';

interface CityData {
  city: {
    slug: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    description: string;
    viewingSpots: string[];
  };
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
}

export default function LocalCitiesSection() {
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        setLoading(true);
        
        // Fetch data for all Lapland cities
        const citySlugs = ['rovaniemi', 'ivalo', 'inari', 'levi', 'saariselka', 'yllas', 'kilpisjarvi', 'kemi'];
        
        const promises = citySlugs.map(async (slug) => {
          try {
            const response = await fetch(`/api/city/${slug}`);
            if (response.ok) {
              return await response.json();
            }
            return null;
          } catch {
            return null;
          }
        });
        
        const results = await Promise.all(promises);
        const validResults = results.filter(Boolean) as CityData[];
        
        console.log('API results:', results);
        console.log('Valid results:', validResults);
        
        // If no valid results, use fallback data
        if (validResults.length === 0) {
          console.log('No valid API results, using fallback data');
          const fallbackData: CityData[] = [
            {
              city: {
                slug: 'rovaniemi',
                name: 'Rovaniemi',
                region: 'Lapland',
                country: 'Finland',
                latitude: 66.5039,
                longitude: 25.7294,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Arktikum Museum', 'Santa Claus Village', 'Ounasvaara Hill'],
                description: 'Capital of Lapland • Arctic Circle • Best infrastructure'
              },
              score: 85,
              badge: 'Excellent',
              components: { P: 0.78, Visibility: 0.92, Dark: 0.9, MoonOK: 0.8 }
            },
            {
              city: {
                slug: 'ivalo',
                name: 'Ivalo',
                region: 'Lapland',
                country: 'Finland',
                latitude: 68.6592,
                longitude: 27.5389,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Ivalo Airport', 'Wilderness areas', 'Sámi cultural sites'],
                description: 'Northernmost airport • Wilderness access • Sámi culture'
              },
              score: 78,
              badge: 'Great',
              components: { P: 0.72, Visibility: 0.85, Dark: 0.9, MoonOK: 0.6 }
            },
            {
              city: {
                slug: 'inari',
                name: 'Inari',
                region: 'Lapland',
                country: 'Finland',
                latitude: 68.9059,
                longitude: 27.0288,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Lake Inari', 'Sámi Museum', 'Wilderness areas'],
                description: 'Sámi cultural heart • Lake Inari • Authentic Arctic'
              },
              score: 82,
              badge: 'Great',
              components: { P: 0.75, Visibility: 0.88, Dark: 0.9, MoonOK: 0.8 }
            },
            {
              city: {
                slug: 'levi',
                name: 'Levi',
                region: 'Lapland',
                country: 'Finland',
                latitude: 67.8041,
                longitude: 24.8081,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Levi Ski Resort', 'Mountain slopes', 'Fell areas'],
                description: 'Mountain resort • Ski slopes • Elevated viewing'
              },
              score: 76,
              badge: 'Good',
              components: { P: 0.68, Visibility: 0.82, Dark: 0.7, MoonOK: 0.6 }
            },
            {
              city: {
                slug: 'saariselka',
                name: 'Saariselkä',
                region: 'Lapland',
                country: 'Finland',
                latitude: 68.4167,
                longitude: 27.4167,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Saariselkä village', 'Fell landscapes', 'Wilderness areas'],
                description: 'Mountain village • Fell landscapes • Remote wilderness'
              },
              score: 79,
              badge: 'Great',
              components: { P: 0.71, Visibility: 0.86, Dark: 0.9, MoonOK: 0.8 }
            },
            {
              city: {
                slug: 'yllas',
                name: 'Ylläs',
                region: 'Lapland',
                country: 'Finland',
                latitude: 67.5667,
                longitude: 24.2167,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Seven fells', 'Ski resort', 'Panoramic views'],
                description: 'Seven fells • Ski resort • Panoramic views'
              },
              score: 74,
              badge: 'Good',
              components: { P: 0.66, Visibility: 0.80, Dark: 0.7, MoonOK: 0.6 }
            },
            {
              city: {
                slug: 'kilpisjarvi',
                name: 'Kilpisjärvi',
                region: 'Lapland',
                country: 'Finland',
                latitude: 69.0500,
                longitude: 20.7833,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Three-country border', 'Arctic wilderness', 'Remote areas'],
                description: 'Northernmost village • Arctic Circle • Prime location'
              },
              score: 88,
              badge: 'Excellent',
              components: { P: 0.82, Visibility: 0.95, Dark: 1.0, MoonOK: 0.9 }
            },
            {
              city: {
                slug: 'kemi',
                name: 'Kemi',
                region: 'Lapland',
                country: 'Finland',
                latitude: 65.7361,
                longitude: 24.5639,
                timezone: 'Europe/Helsinki',
                viewingSpots: ['Icebreaker port', 'Coastal areas', 'City center'],
                description: 'Coastal city • Icebreaker port • Gateway to Lapland'
              },
              score: 71,
              badge: 'Good',
              components: { P: 0.65, Visibility: 0.78, Dark: 0.7, MoonOK: 0.6 }
            }
          ];
          setCitiesData(fallbackData);
        } else {
          // Sort by score (highest first)
          validResults.sort((a, b) => b.score - a.score);
          setCitiesData(validResults);
        }
      } catch (error) {
        console.error('Error fetching cities data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCitiesData();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-pulse">
                <div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div>
                <div className="h-12 bg-white/20 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {citiesData.map((cityData, index) => {
            try {
              const badgeColorClass = getBadgeColorClass(cityData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');
              
              return (
                <Link
                  key={cityData.city.slug}
                  href={`/finland/lapland/${cityData.city.slug}/aurora`}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-light text-white group-hover:text-cyan-300 transition-colors">
                        {cityData.city.name}
                      </h3>
                      <div className={`px-4 py-2 rounded-full text-sm font-light ${badgeColorClass} backdrop-blur-sm border border-white/10`}>
                        {cityData.badge}
                      </div>
                    </div>
                    
                    {/* Score Display */}
                    <div className="text-center mb-8">
                      <div className="text-5xl font-thin text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {cityData.score}
                      </div>
                      <div className="text-sm text-white/50 font-light tracking-wide">Aurora Score</div>
                    </div>
                    
                    {/* Components Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-light text-cyan-300/80 mb-1">
                          {Math.round((cityData.components.P || 0) * 100)}%
                        </div>
                        <div className="text-xs text-white/50 font-light uppercase tracking-wider">Aurora</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-cyan-300/80 mb-1">
                          {Math.round((cityData.components.Visibility || 0) * 100)}%
                        </div>
                        <div className="text-xs text-white/50 font-light uppercase tracking-wider">Visibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-cyan-300/80 mb-1">
                          {(cityData.components.Dark || 0) > 0.8 ? 'High' : (cityData.components.Dark || 0) > 0.5 ? 'Medium' : 'Low'}
                        </div>
                        <div className="text-xs text-white/50 font-light uppercase tracking-wider">Darkness</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-cyan-300/80 mb-1">
                          {Math.round((cityData.components.MoonOK || 0) * 100)}%
                        </div>
                        <div className="text-xs text-white/50 font-light uppercase tracking-wider">Moon</div>
                      </div>
                    </div>
                    
                    {/* Viewing Spots */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/60 font-light mb-1 tracking-wide">Viewing Spots</p>
                          <p className="text-xs text-white/40">
                            {(cityData.city.viewingSpots || []).slice(0, 2).join(', ')}
                          </p>
                          {(cityData.city.viewingSpots || []).length > 2 && (
                            <p className="text-xs text-white/30 mt-1">
                              +{(cityData.city.viewingSpots || []).length - 2} more locations
                            </p>
                          )}
                        </div>
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                          <svg className="w-4 h-4 text-white/60 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              );
            } catch (error) {
              console.error('Error rendering city card:', error, cityData);
              return null;
            }
          })}
        </div>
        
      </div>
    </div>
  );
}
