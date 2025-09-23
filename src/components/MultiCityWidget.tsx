'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CityData {
  slug: string;
  name: string;
  score: number;
  badge: string;
  components: {
    aurora: number;
    visibility: number;
    darkness: string;
    moon: string;
  };
  lastUpdated: string;
}

interface MultiCityWidgetProps {
  cities: Array<{
    slug: string;
    name: string;
    latitude: number;
    longitude: number;
  }>;
  title?: string;
  description?: string;
}

export default function MultiCityWidget({ 
  cities, 
  title = "Live Aurora Conditions", 
  description = "Real-time aurora scores across Lapland cities" 
}: MultiCityWidgetProps) {
  const [cityData, setCityData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setLoading(true);
        const promises = cities.map(async (city) => {
          try {
            const response = await fetch(`/api/city/${city.slug}`);
            if (response.ok) {
              const data = await response.json();
              return {
                slug: city.slug,
                name: city.name,
                score: data.score || 0,
                badge: data.badge || 'Unknown',
                components: {
                  aurora: data.components?.aurora || 0,
                  visibility: data.components?.visibility || 0,
                  darkness: data.components?.darkness || 'Unknown',
                  moon: data.components?.moon || 'Unknown'
                },
                lastUpdated: new Date().toLocaleTimeString()
              };
            }
            return null;
          } catch {
            return null;
          }
        });

        const results = await Promise.all(promises);
        const validResults = results.filter(Boolean) as CityData[];
        setCityData(validResults);
      } catch (err) {
        setError('Failed to load city data');
        console.error('Error fetching city data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCityData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchCityData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [cities]);

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'excellent': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'great': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'good': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'fair': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'poor': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
            </div>
            <h2 className="text-4xl font-thin text-white mb-6">{title}</h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">{description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cities.map((city) => (
              <div key={city.slug} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-pulse">
                <div className="text-center mb-4">
                  <div className="h-6 bg-white/20 rounded mb-2"></div>
                  <div className="h-12 bg-white/20 rounded mb-2"></div>
                  <div className="h-6 bg-white/20 rounded w-20 mx-auto"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12 text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
            <p className="text-red-300 font-light">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
          </div>
          <h2 className="text-4xl font-thin text-white mb-6">{title}</h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cityData.map((city) => (
            <Link
              key={city.slug}
              href={`/finland/lapland/${city.slug}/aurora`}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {city.name}
                </h3>
                <div className="text-4xl font-thin text-cyan-300/80 mb-2">
                  {city.score}
                </div>
                <div className={`text-sm font-light uppercase tracking-wider px-3 py-1 rounded-full border ${getBadgeColor(city.badge)}`}>
                  {city.badge}
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Aurora:</span>
                  <span className="text-cyan-300">{Math.round(city.components.aurora * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Visibility:</span>
                  <span className="text-cyan-300">{Math.round(city.components.visibility * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Darkness:</span>
                  <span className="text-cyan-300">{city.components.darkness}</span>
                </div>
                <div className="flex justify-between">
                  <span>Moon:</span>
                  <span className="text-cyan-300">{city.components.moon}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-white/50">Updated: {city.lastUpdated}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
