'use client';

import { useEffect, useState } from 'react';
import { AuroraNow } from '@/lib/aurora-now';

interface TonightCardProps {
  latitude?: number;
  longitude?: number;
  cityName?: string;
  description?: string;
}

export default function TonightCard({ 
  latitude = 66.5039, 
  longitude = 25.7294, 
  cityName = 'Rovaniemi',
  description = 'Gateway to Lapland'
}: TonightCardProps) {
  const [auroraData, setAuroraData] = useState<AuroraNow | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAuroraData();
  }, [latitude, longitude]);

  const fetchAuroraData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch aurora data
      const auroraResponse = await fetch(`/api/aurora-now?lat=${latitude}&lon=${longitude}`);
      if (!auroraResponse.ok) throw new Error('Failed to fetch aurora data');
      const aurora = await auroraResponse.json();
      setAuroraData(aurora);
      
      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,visibility&timezone=auto`
      );
      if (weatherResponse.ok) {
        const weather = await weatherResponse.json();
        setWeatherData({
          temperature: Math.round(weather.current?.temperature_2m || 0),
          humidity: Math.round(weather.current?.relative_humidity_2m || 0),
          windSpeed: Math.round(weather.current?.wind_speed_10m || 0),
          visibility: Math.round((weather.current?.visibility || 0) / 1000)
        });
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Unable to load aurora data');
    } finally {
      setLoading(false);
    }
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Great';
    if (score >= 40) return 'Good';
    if (score >= 20) return 'Fair';
    return 'Poor';
  };

  const getBadgeColorClass = (badge: string) => {
    switch (badge) {
      case 'Excellent': return 'bg-green-500 text-white';
      case 'Great': return 'bg-blue-500 text-white';
      case 'Good': return 'bg-yellow-500 text-white';
      case 'Fair': return 'bg-orange-500 text-white';
      case 'Poor': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getDarknessLevel = (dark: number) => {
    if (dark > 0.8) return 'Deep Darkness';
    if (dark > 0.5) return 'Dark';
    if (dark > 0.2) return 'Twilight';
    return 'Daylight';
  };

  const getMoonPhase = (moon: number) => {
    if (moon > 0.8) return 'New Moon';
    if (moon > 0.6) return 'Crescent';
    if (moon > 0.4) return 'Half Moon';
    if (moon > 0.2) return 'Gibbous';
    return 'Full Moon';
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

  if (error || !auroraData) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto text-center">
        <h3 className="text-xl font-light text-gray-900 mb-4">
          Tonight&apos;s Aurora Conditions
        </h3>
        <p className="text-gray-500 font-light">Unable to load aurora data</p>
      </div>
    );
  }

  const score = auroraData.score;
  const badge = getScoreBadge(score);
  const badgeColorClass = getBadgeColorClass(badge);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-light text-gray-900 mb-2">
          Tonight&apos;s Aurora Conditions
        </h3>
        <p className="text-sm text-gray-500 font-light">{cityName}</p>
      </div>
      
      <div className="text-center mb-8">
        <div className="text-6xl font-extralight text-gray-900 mb-2">
          {score}
        </div>
        <div className={`inline-block px-6 py-2 rounded-full text-sm font-medium ${badgeColorClass}`}>
          {badge}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 text-center">
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {auroraData.prob || 0}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Aurora Probability</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {100 - (auroraData.cloudPct || 100)}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Sky Visibility</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {getDarknessLevel(auroraData.dark)}
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Darkness Level</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {getMoonPhase(auroraData.moon)}
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Moon Phase</div>
        </div>
      </div>
      
      {weatherData && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-lg font-light text-gray-700">
                {weatherData.temperature}°C
              </div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Temperature</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-light text-gray-700">
                {weatherData.visibility}km
              </div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Visibility</div>
            </div>
          </div>
        </div>
      )}
      
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