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

export default function TonightCard() {
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [location, setLocation] = useState<string>('Rovaniemi');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to get user's location, fallback to Rovaniemi
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `/api/score?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            setScoreData(data);
            setLocation('Your location');
      } catch {
        // Fallback to Rovaniemi
        fetchRovaniemiData();
          }
        },
        () => {
          // Fallback to Rovaniemi
          fetchRovaniemiData();
        }
      );
    } else {
      // Fallback to Rovaniemi
      fetchRovaniemiData();
    }
  }, []);

  const fetchRovaniemiData = async () => {
    try {
      const response = await fetch('/api/score?lat=66.5039&lon=25.7294');
      const data = await response.json();
      setScoreData(data);
      setLocation('Rovaniemi');
    } catch {
      setError('Unable to load aurora data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !scoreData) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Tonight in {location}
        </h3>
        <p className="text-gray-600">Unable to load aurora data</p>
      </div>
    );
  }

  const badgeColorClass = getBadgeColorClass(scoreData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Tonight in {location}
      </h3>
      
      {/* Score Display */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-4xl font-bold text-gray-900">
            {scoreData.score}
          </div>
          <div className="text-sm text-gray-500">out of 100</div>
        </div>
        <div className={`px-4 py-2 rounded-full border text-sm font-medium ${badgeColorClass}`}>
          {scoreData.badge}
        </div>
      </div>
      
      {/* Components */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Aurora P:</span>
          <span className="font-medium">{Math.round(scoreData.components.P * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Visibility:</span>
          <span className="font-medium">{Math.round(scoreData.components.Visibility * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Darkness:</span>
          <span className="font-medium">
            {scoreData.components.Dark > 0.8 ? 'High' : scoreData.components.Dark > 0.5 ? 'Medium' : 'Low'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Moon:</span>
          <span className="font-medium">{Math.round(scoreData.components.MoonOK * 100)}%</span>
        </div>
      </div>
      
      {/* Data Availability */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Data sources:</span>
          <div className="flex space-x-2">
            <span className={scoreData.dataAvailability.aurora ? 'text-green-600' : 'text-red-600'}>
              Aurora
            </span>
            <span className={scoreData.dataAvailability.weather ? 'text-green-600' : 'text-red-600'}>
              Weather
            </span>
            <span className={scoreData.dataAvailability.moon ? 'text-green-600' : 'text-red-600'}>
              Moon
            </span>
            <span className={scoreData.dataAvailability.solar ? 'text-green-600' : 'text-red-600'}>
              Solar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
