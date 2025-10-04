'use client';

import { useEffect, useState } from 'react';
import { getBadgeColorClass } from '@/lib/score';

interface ScoreData {
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
  dataAvailability: {
    aurora: boolean;
    weather: boolean;
    moon: boolean;
    solar: boolean;
  };
}

interface TonightCardProps {
  latitude?: number;
  longitude?: number;
  cityName?: string;
  description?: string;
}

export default function TonightCard({ 
  latitude = 66.5039, 
  longitude = 25.7294, 
  cityName = 'Rovaniemi'
}: TonightCardProps) {
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [location, setLocation] = useState<string>(cityName);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use the passed coordinates
    fetchScoreData(latitude, longitude);
  }, [latitude, longitude, fetchScoreData]);

  const fetchScoreData = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`/api/score?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      setScoreData(data);
      setLocation(cityName);
    } catch {
      setError('Unable to load aurora data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto">
        <div className="animate-pulse text-center">
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-16 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !scoreData) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto text-center">
        <h3 className="text-xl font-light text-gray-900 mb-4">
          Tonight&apos;s Aurora Conditions
        </h3>
        <p className="text-gray-500 font-light">Unable to load aurora data</p>
      </div>
    );
  }

  const badgeColorClass = getBadgeColorClass(scoreData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-light text-gray-900 mb-2">
          Tonight&apos;s Aurora Conditions
        </h3>
        <p className="text-sm text-gray-500 font-light">{location}</p>
      </div>
      
      <div className="text-center mb-8">
        <div className="text-6xl font-extralight text-gray-900 mb-2">
          {scoreData.score}
        </div>
        <div className={`inline-block px-6 py-2 rounded-full text-sm font-medium ${badgeColorClass}`}>
          {scoreData.badge}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 text-center">
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {Math.round(scoreData.components.P * 100)}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Aurora Probability</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {Math.round(scoreData.components.Visibility * 100)}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Sky Visibility</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {scoreData.components.Dark > 0.8 ? 'High' : scoreData.components.Dark > 0.5 ? 'Medium' : 'Low'}
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Darkness Level</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {Math.round(scoreData.components.MoonOK * 100)}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Moon Conditions</div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center font-light">
          Data updates every 5 minutes • Last updated: {new Date().toLocaleTimeString('fi-FI', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
}
