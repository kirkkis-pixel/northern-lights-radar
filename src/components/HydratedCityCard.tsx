'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AuroraNow } from '@/lib/aurora-now';

interface City {
  slug: string;
  name: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  viewingSpots: string[];
  description: string;
}

interface HydratedCityCardProps {
  city: City;
  initialData?: AuroraNow;
}

const getCountryFlag = (country: string) => {
  switch (country) {
    case 'Finland': return '🇫🇮';
    case 'Sweden': return '🇸🇪';
    case 'Norway': return '🇳🇴';
    default: return '';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 40) return 'text-yellow-400';
  if (score >= 20) return 'text-orange-400';
  return 'text-red-400';
};

const getScoreBadge = (score: number) => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Great';
  if (score >= 40) return 'Good';
  if (score >= 20) return 'Fair';
  return 'Poor';
};

const formatDarkness = (dark: number) => {
  if (dark > 0.8) return 'Deep Darkness';
  if (dark > 0.5) return 'Dark';
  if (dark > 0.2) return 'Twilight';
  return 'Daylight';
};

const formatMoon = (moon: number) => {
  if (moon > 0.8) return 'New Moon';
  if (moon > 0.6) return 'Crescent';
  if (moon > 0.4) return 'Half Moon';
  if (moon > 0.2) return 'Gibbous';
  return 'Full Moon';
};

export default function HydratedCityCard({ city, initialData }: HydratedCityCardProps) {
  const [auroraData, setAuroraData] = useState<AuroraNow | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  const fetchAuroraData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/aurora-now?lat=${city.latitude}&lon=${city.longitude}`, {
        cache: 'no-store'
      });
      if (!response.ok) throw new Error('Failed to fetch aurora data');
      const data: AuroraNow = await response.json();
      setAuroraData(data);
    } catch (err: any) {
      setError(err.message);
      // Keep the initial data if API fails
      if (!initialData) {
        setAuroraData({
          score: 0,
          kp: 0,
          prob: 0,
          cloudPct: 100,
          dark: 0,
          moon: 1,
          updatedAt: new Date().toISOString(),
          freshness: {}
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch if we don't have initial data
    if (!initialData) {
      fetchAuroraData();
    }
    
    // Set up periodic refresh every 5 minutes
    const interval = setInterval(fetchAuroraData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city.latitude, city.longitude, initialData]);

  const score = auroraData?.score ?? 0;
  const badge = getScoreBadge(score);
  const badgeColorClass = score >= 80 ? 'bg-green-500' : 
                          score >= 60 ? 'bg-blue-500' : 
                          score >= 40 ? 'bg-yellow-500' : 
                          score >= 20 ? 'bg-orange-500' : 'bg-red-500';

  return (
    <Link href={`/${city.country.toLowerCase()}/northern-lights/${city.slug}`} className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">{city.name}</h3>
          <span className="text-2xl">{getCountryFlag(city.country)}</span>
        </div>
        
        <p className="text-white/60 text-sm mb-4">{city.description}</p>
        
        {loading ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400 mx-auto mb-2"></div>
            <p className="text-white/50 text-xs">Loading data...</p>
          </div>
        ) : error && !auroraData ? (
          <div className="text-center py-4 text-red-400 text-sm">
            <p>Data temporarily unavailable</p>
          </div>
        ) : (
          <>
            {/* Aurora Score */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-4xl font-bold text-white">{score}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${badgeColorClass}`}>{badge}</span>
              </div>
            </div>
            
            {/* Data Grid */}
            <div className="grid grid-cols-2 gap-y-2 text-sm text-white/70">
              <div>Aurora Prob: <span className="font-medium">{auroraData?.prob != null ? `${auroraData.prob}%` : 'N/A'}</span></div>
              <div>Clouds: <span className="font-medium">{auroraData?.cloudPct != null ? `${auroraData.cloudPct}%` : 'N/A'}</span></div>
              <div>Darkness: <span className="font-medium">{formatDarkness(auroraData?.dark ?? 0)}</span></div>
              <div>Moon: <span className="font-medium">{formatMoon(auroraData?.moon ?? 0)}</span></div>
            </div>
            
            {/* Last Updated */}
            <div className="text-xs text-white/50 mt-4">
              Last updated: {auroraData?.updatedAt ? new Date(auroraData.updatedAt).toLocaleTimeString() : 'N/A'}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
