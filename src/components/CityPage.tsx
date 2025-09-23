'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBadgeColorClass, formatComponentValue, getComponentDescription } from '@/lib/score';

interface CityData {
  city: {
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
    viewingSpots: string[];
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
  raw: Record<string, unknown>;
  dataAvailability: {
    aurora: boolean;
    weather: boolean;
    moon: boolean;
    solar: boolean;
  };
}

interface CityPageProps {
  citySlug: string;
}

export default function CityPage({ citySlug }: CityPageProps) {
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
        setError('Unable to load city data');
      } finally {
        setLoading(false);
      }
    };

    fetchCityData();
  }, [citySlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-32 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !cityData) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Unable to Load Data
          </h1>
            <p className="text-gray-600 mb-8">
              We&apos;re having trouble loading the aurora data for this city. Please try again later.
            </p>
          <Link
            href="/lapland/northern-lights"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Lapland Cities
          </Link>
        </div>
      </div>
    );
  }

  const badgeColorClass = getBadgeColorClass(cityData.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/finland/northern-lights" className="hover:text-blue-600">Finland</Link>
            <span className="mx-2">/</span>
            <Link href="/lapland/northern-lights" className="hover:text-blue-600">Lapland</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{cityData.city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aurora in {cityData.city.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {cityData.city.description}
            </p>
            
            {/* Score Display */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-5xl font-bold text-gray-900">
                    {cityData.score}
                  </div>
                  <div className="text-sm text-gray-500">out of 100</div>
                </div>
                <div className={`px-6 py-3 rounded-full border text-lg font-medium ${badgeColorClass}`}>
                  {cityData.badge}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 text-center">
                Tonight&apos;s Aurora Conditions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Components */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How We Calculate the Score
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(cityData.components).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {getComponentDescription(key as keyof typeof cityData.components)}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatComponentValue(key as keyof typeof cityData.components, value)}
                </div>
                <div className="text-sm text-gray-600">
                  {key === 'P' && 'Aurora probability from NOAA SWPC'}
                  {key === 'Visibility' && 'Sky visibility (1 - cloud cover)'}
                  {key === 'Dark' && 'Darkness level based on solar elevation'}
                  {key === 'MoonOK' && 'Moon conditions (1 - 0.6 × moon brightness)'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Simple Formula
            </h3>
            <p className="text-gray-700">
              Score = 100 × Aurora Probability × Visibility × Darkness × Moon Conditions
            </p>
            <p className="text-sm text-gray-600 mt-2">
              No complex algorithms, just transparent multiplication of the key factors.
            </p>
          </div>
        </div>
      </div>

      {/* Viewing Spots */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Best Viewing Spots in {cityData.city.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityData.city.viewingSpots.map((spot, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {spot}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Safe, open area with clear northern sky views and minimal light pollution.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Data Sources & Reliability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  cityData.dataAvailability.aurora ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className={`text-xs font-bold ${
                    cityData.dataAvailability.aurora ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {cityData.dataAvailability.aurora ? '✓' : '✗'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Aurora Probability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    NOAA SWPC OVATION Prime model. Updates every 5 minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  cityData.dataAvailability.weather ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className={`text-xs font-bold ${
                    cityData.dataAvailability.weather ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {cityData.dataAvailability.weather ? '✓' : '✗'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Weather Data
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Open-Meteo cloud cover and visibility. Updates every 30 minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  cityData.dataAvailability.moon ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className={`text-xs font-bold ${
                    cityData.dataAvailability.moon ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {cityData.dataAvailability.moon ? '✓' : '✗'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Moon Phase
                  </h3>
                  <p className="text-gray-600 text-sm">
                    OpenWeather moon data. Updates every 30 minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  cityData.dataAvailability.solar ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className={`text-xs font-bold ${
                    cityData.dataAvailability.solar ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {cityData.dataAvailability.solar ? '✓' : '✗'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Solar Position
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Calculated solar elevation for darkness factor. Always available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lapland/northern-lights"
              className="inline-block bg-blue-600 text-white text-center py-3 px-8 rounded-2xl font-medium hover:bg-blue-700 transition-colors"
            >
              All Lapland Cities
            </Link>
            <Link
              href="/finland/northern-lights"
              className="inline-block border border-gray-300 text-gray-700 text-center py-3 px-8 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
            >
              Finland Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Attribution Footer */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-gray-500 text-center">
            Data from NOAA SWPC (OVATION), Open-Meteo, OpenWeather. Times in local timezone. 
            Scores are indicative and depend on weather & darkness.
          </p>
        </div>
      </div>
    </div>
  );
}
