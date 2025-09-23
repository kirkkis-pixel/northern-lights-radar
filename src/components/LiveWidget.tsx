'use client';

import { useEffect, useState } from 'react';
import { getBadgeColorClass } from '@/lib/score';

interface CityScore {
  name: string;
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
}

export default function LiveWidget() {
  const [scores, setScores] = useState<CityScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const cities = [
          { name: 'Helsinki', lat: 60.1699, lon: 24.9384 },
          { name: 'Rovaniemi', lat: 66.5039, lon: 25.7294 },
          { name: 'Ivalo', lat: 68.6592, lon: 27.5389 }
        ];

        const promises = cities.map(async (city) => {
          const response = await fetch(`/api/score?lat=${city.lat}&lon=${city.lon}`);
          const data = await response.json();
          return {
            name: city.name,
            score: data.score,
            badge: data.badge,
            components: data.components
          };
        });

        const results = await Promise.all(promises);
        setScores(results);
      } catch (error) {
        console.error('Failed to fetch scores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">
        Live Aurora Conditions
      </h3>
      
      <div className="space-y-4">
        {scores.map((city) => {
          const badgeColorClass = getBadgeColorClass(city.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');
          return (
            <div key={city.name} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-900">{city.name}</span>
                <span className="text-2xl font-bold text-gray-900">{city.score}</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColorClass}`}>
                {city.badge}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Updated every 5 minutes • Data from NOAA SWPC
        </p>
      </div>
    </div>
  );
}
