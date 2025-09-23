'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBadgeColorClass } from '@/lib/score';

interface CityData {
  city: {
    name: string;
    description: string;
  };
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
  raw: {
    weather: {
      hourly: {
        temperature_2m: number[];
        cloudcover: number[];
        visibility: number[];
        precipitation: number[];
      };
    } | null;
    moon: {
      moonPhase: string;
      moonBrightness: number;
    } | null;
    solar: {
      elevation: number;
      darkness: string;
    } | null;
  };
  dataAvailability: {
    aurora: boolean;
    weather: boolean;
    moon: boolean;
    solar: boolean;
  };
}

interface CityScoreCardProps {
  citySlug: string;
  cityName: string;
  description: string;
}

export default function CityScoreCard({ citySlug, cityName, description }: CityScoreCardProps) {
  const [cityData, setCityData] = useState<CityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`/api/city/${citySlug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch city data');
        }
        const data = await response.json();
        setCityData(data);
      } catch {
        setError('Unable to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchCityData();
  }, [citySlug]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !cityData) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {cityName}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <p className="text-red-600 text-sm">
          Unable to load data
        </p>
      </div>
    );
  }

  const badgeColorClass = getBadgeColorClass(cityData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');

  return (
    <Link
      href={`/finland/lapland/${citySlug}/aurora`}
      className="block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {cityData.city.name}
          </h3>
          <p className="text-gray-600 text-sm">
            {cityData.city.description}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColorClass}`}>
          {cityData.badge}
        </div>
      </div>
      
      <div className="text-3xl font-bold text-gray-900 mb-4">
        {cityData.score}
      </div>
      
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Aurora P:</span>
          <span className="font-medium">{Math.round(cityData.components.P * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Sky Visibility:</span>
          <span className="font-medium">{Math.round(cityData.components.Visibility * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Darkness Level:</span>
          <span className="font-medium">
            {cityData.components.Dark > 0.8 ? 'High' : cityData.components.Dark > 0.5 ? 'Medium' : 'Low'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Moon Conditions:</span>
          <span className="font-medium">
            {cityData.raw.moon?.moonPhase || 'Unknown'}
          </span>
        </div>
        {cityData.raw.weather?.hourly.temperature_2m && (
          <div className="flex justify-between">
            <span>Temperature:</span>
            <span className="font-medium">
              {Math.round(cityData.raw.weather.hourly.temperature_2m[0])}°C
            </span>
          </div>
        )}
        {cityData.raw.weather?.hourly.precipitation && (
          <div className="flex justify-between">
            <span>Precipitation:</span>
            <span className="font-medium">
              {cityData.raw.weather.hourly.precipitation[0] > 0 ? 'Yes' : 'No'}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Data sources:</span>
          <div className="flex space-x-1">
            <span className={cityData.dataAvailability.aurora ? 'text-green-600' : 'text-red-600'}>
              A
            </span>
            <span className={cityData.dataAvailability.weather ? 'text-green-600' : 'text-red-600'}>
              W
            </span>
            <span className={cityData.dataAvailability.moon ? 'text-green-600' : 'text-red-600'}>
              M
            </span>
            <span className={cityData.dataAvailability.solar ? 'text-green-600' : 'text-red-600'}>
              S
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
