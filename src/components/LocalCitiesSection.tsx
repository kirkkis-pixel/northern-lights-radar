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
          {citiesData.map((cityData) => {
            const badgeColorClass = getBadgeColorClass(cityData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');
            
            return (
              <Link
                key={cityData.city.slug}
                href={`/finland/lapland/${cityData.city.slug}/aurora`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {cityData.city.name}
                  </h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColorClass}`}>
                    {cityData.badge}
                  </div>
                </div>
                
                <div className="text-3xl font-light text-gray-900 mb-4">
                  {cityData.score}
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Aurora:</span>
                    <span className="font-medium">{Math.round(cityData.components.P * 100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Visibility:</span>
                    <span className="font-medium">{Math.round(cityData.components.Visibility * 100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness:</span>
                    <span className="font-medium">
                      {cityData.components.Dark > 0.8 ? 'High' : cityData.components.Dark > 0.5 ? 'Medium' : 'Low'}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-light">
                    {cityData.city.viewingSpots.length} viewing spots
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/lapland/northern-lights"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            View All Cities
          </Link>
        </div>
      </div>
    </div>
  );
}
