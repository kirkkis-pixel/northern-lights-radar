'use client';

import { useState, useEffect } from 'react';
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

interface RealTimeCityCardProps {
  city: City;
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

export default function RealTimeCityCard({ city }: RealTimeCityCardProps) {
  const [auroraData, setAuroraData] = useState<AuroraNow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuroraData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `/api/aurora-now?lat=${city.latitude}&lon=${city.longitude}`,
          { cache: 'no-store' }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        setAuroraData(data);
      } catch (err) {
        console.error('Failed to fetch aurora data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchAuroraData();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchAuroraData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city.latitude, city.longitude]);

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: city.timezone
    });
  };

  if (loading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-white/20 rounded w-32"></div>
          <div className="w-8 h-8 bg-white/20 rounded"></div>
        </div>
        <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
        <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
        <div className="h-3 bg-white/20 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-red-500/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{city.name}</h3>
          <span className="text-2xl">{getCountryFlag(city.country)}</span>
        </div>
        <p className="text-white/60 text-sm mb-4">{city.description}</p>
        <div className="text-red-400 text-sm">
          Data temporarily unavailable
        </div>
        <div className="text-xs text-white/40 mt-2">
          {city.region}, {city.country}
        </div>
      </div>
    );
  }

  if (!auroraData) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{city.name}</h3>
          <span className="text-2xl">{getCountryFlag(city.country)}</span>
        </div>
        <p className="text-white/60 text-sm mb-4">{city.description}</p>
        <div className="text-white/40 text-sm">
          No data available
        </div>
        <div className="text-xs text-white/40 mt-2">
          {city.region}, {city.country}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{city.name}</h3>
        <span className="text-2xl">{getCountryFlag(city.country)}</span>
      </div>
      
      <p className="text-white/60 text-sm mb-4">{city.description}</p>
      
      {/* Aurora Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/70">Aurora Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(auroraData.score)}`}>
            {auroraData.score}
          </span>
        </div>
        <div className="text-xs text-white/50">
          {getScoreBadge(auroraData.score)} • Updated {formatTime(auroraData.updatedAt)}
        </div>
      </div>

      {/* Data Details */}
      <div className="space-y-2 text-xs text-white/60">
        {auroraData.kp !== undefined && (
          <div className="flex justify-between">
            <span>Kp Index:</span>
            <span>{auroraData.kp}</span>
          </div>
        )}
        {auroraData.prob !== undefined && (
          <div className="flex justify-between">
            <span>Aurora Probability:</span>
            <span>{auroraData.prob}%</span>
          </div>
        )}
        {auroraData.cloudPct !== undefined && (
          <div className="flex justify-between">
            <span>Cloud Cover:</span>
            <span>{auroraData.cloudPct}%</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Darkness:</span>
          <span>{auroraData.dark >= 0.5 ? 'Dark' : 'Twilight/Day'}</span>
        </div>
        <div className="flex justify-between">
          <span>Moon Conditions:</span>
          <span>{Math.round(auroraData.moon * 100)}%</span>
        </div>
      </div>

      <div className="text-xs text-white/40 mt-4">
        {city.region}, {city.country}
      </div>
    </div>
  );
}
