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
        const citySlugs = ['rovaniemi', 'ivalo', 'inari', 'levi', 'saariselka', 'yllas', 'kilpisjarvi'];
        
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
        
        // Sort by score (highest first)
        validResults.sort((a, b) => b.score - a.score);
        
        setCitiesData(validResults);
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
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Lapland Cities
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Live aurora conditions across Finnish Lapland
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Conditions</span>
          </div>
          <h2 className="text-4xl font-thin text-white mb-6">
            Lapland Cities
          </h2>
          <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Discover real-time aurora conditions across Finnish Lapland&apos;s most beautiful destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {citiesData.map((cityData, index) => {
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
                        {Math.round(cityData.components.P * 100)}%
                      </div>
                      <div className="text-xs text-white/50 font-light uppercase tracking-wider">Aurora</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-cyan-300/80 mb-1">
                        {Math.round(cityData.components.Visibility * 100)}%
                      </div>
                      <div className="text-xs text-white/50 font-light uppercase tracking-wider">Visibility</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-cyan-300/80 mb-1">
                        {cityData.components.Dark > 0.8 ? 'High' : cityData.components.Dark > 0.5 ? 'Medium' : 'Low'}
                      </div>
                      <div className="text-xs text-white/50 font-light uppercase tracking-wider">Darkness</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-cyan-300/80 mb-1">
                        {Math.round(cityData.components.MoonOK * 100)}%
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
                          {cityData.city.viewingSpots.slice(0, 2).join(', ')}
                        </p>
                        {cityData.city.viewingSpots.length > 2 && (
                          <p className="text-xs text-white/30 mt-1">
                            +{cityData.city.viewingSpots.length - 2} more locations
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
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-24">
          <Link
            href="/lapland/northern-lights"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white px-12 py-5 rounded-full font-light tracking-wide hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-500 text-xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-105"
          >
            <span>Explore All Cities</span>
            <div className="w-2 h-2 bg-white/60 rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
