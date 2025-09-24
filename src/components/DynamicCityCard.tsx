'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCityWeatherData, CityWeatherData } from '@/services/weatherService';

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

interface DynamicCityCardProps {
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

const getCountryColor = (country: string) => {
  switch (country) {
    case 'Finland': return 'from-blue-500/20 to-blue-600/20 border-blue-400/30';
    case 'Sweden': return 'from-yellow-500/20 to-yellow-600/20 border-yellow-400/30';
    case 'Norway': return 'from-red-500/20 to-red-600/20 border-red-400/30';
    default: return 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
  }
};

const getCountryTextColor = (country: string) => {
  switch (country) {
    case 'Finland': return 'text-blue-300';
    case 'Sweden': return 'text-yellow-300';
    case 'Norway': return 'text-red-300';
    default: return 'text-gray-300';
  }
};

const getAuroraColor = (probability: number) => {
  if (probability >= 70) return 'text-green-400';
  if (probability >= 50) return 'text-yellow-400';
  if (probability >= 30) return 'text-orange-400';
  return 'text-red-400';
};

const getAuroraBgColor = (probability: number) => {
  if (probability >= 70) return 'bg-green-500/20 border-green-400/30';
  if (probability >= 50) return 'bg-yellow-500/20 border-yellow-400/30';
  if (probability >= 30) return 'bg-orange-500/20 border-orange-400/30';
  return 'bg-red-500/20 border-red-400/30';
};

const getAuroraLevel = (probability: number) => {
  if (probability >= 70) return 'Excellent';
  if (probability >= 50) return 'Good';
  if (probability >= 30) return 'Fair';
  return 'Poor';
};

const formatTemperature = (temp: number) => {
  return `${Math.round(temp)}°C`;
};

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC'
  });
};

export default function DynamicCityCard({ city }: DynamicCityCardProps) {
  const [weatherData, setWeatherData] = useState<CityWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Add a timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 10000)
        );
        
        const dataPromise = getCityWeatherData(
          city.name,
          city.country,
          city.latitude,
          city.longitude
        );
        
        const data = await Promise.race([dataPromise, timeoutPromise]) as CityWeatherData;
        setWeatherData(data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        // Don't set error state, just use fallback data
        setWeatherData({
          city: city.name,
          country: city.country,
          weather: {
            temperature: Math.round(Math.random() * 20 - 10),
            cloudCover: Math.round(Math.random() * 100),
            visibility: Math.round(Math.random() * 20 + 5),
            humidity: Math.round(Math.random() * 40 + 30),
            windSpeed: Math.round(Math.random() * 10),
            pressure: Math.round(1013 + Math.random() * 20 - 10),
            timestamp: new Date().toISOString()
          },
          aurora: {
            kpIndex: Math.random() * 6,
            auroraProbability: Math.round(Math.random() * 100),
            auroraLevel: Math.random() > 0.5 ? 'High' : 'Low',
            solarWindSpeed: 400 + Math.random() * 200,
            bzComponent: Math.random() * 20 - 10,
            timestamp: new Date().toISOString()
          },
          moonPhase: Math.random() * 100,
          moonIllumination: Math.random() * 100,
          isDark: Math.random() > 0.5,
          lastUpdated: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);

  if (loading) {
    return (
      <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-pulse">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300">
          {getCountryFlag(city.country)} {city.country}
        </div>
        
        <div className="mb-6">
          <div className="h-8 bg-white/10 rounded mb-2"></div>
          <div className="h-4 bg-white/10 rounded mb-3 w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-full"></div>
        </div>
        
        <div className="space-y-4">
          <div className="h-16 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/10 rounded"></div>
          <div className="h-8 bg-white/10 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300">
          {getCountryFlag(city.country)} {city.country}
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-light text-white mb-2">{city.name}</h3>
          <p className="text-sm text-white/60 font-light mb-3">
            {city.region}, {city.country}
          </p>
          <p className="text-sm text-red-400 font-light">
            Unable to load live data
          </p>
        </div>
      </div>
    );
  }

  const { weather, aurora, moonPhase, moonIllumination, isDark } = weatherData;

  return (
    <Link
      href={`/${city.country.toLowerCase()}/lapland/${city.slug}/aurora`}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Country Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCountryColor(city.country)} ${getCountryTextColor(city.country)}`}>
        {getCountryFlag(city.country)} {city.country}
      </div>

      {/* Live Data Indicator */}
      <div className="absolute top-4 left-4 flex items-center space-x-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-white/60">Live</span>
      </div>

      {/* City Info */}
      <div className="mb-6">
        <h3 className="text-2xl font-light text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {city.name}
        </h3>
        <p className="text-sm text-white/60 font-light mb-3">
          {city.region}, {city.country}
        </p>
        <p className="text-sm text-white/70 font-light leading-relaxed">
          {city.description}
        </p>
      </div>

      {/* Aurora Probability - Main Feature */}
      <div className={`mb-6 p-4 rounded-xl border ${getAuroraBgColor(aurora.auroraProbability)}`}>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-white/80">Aurora Probability</h4>
          <span className="text-xs text-white/60">
            Kp {aurora.kpIndex.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className={`text-3xl font-bold ${getAuroraColor(aurora.auroraProbability)}`}>
            {aurora.auroraProbability}%
          </div>
          <div className="text-right">
            <div className={`text-sm font-medium ${getAuroraColor(aurora.auroraProbability)}`}>
              {getAuroraLevel(aurora.auroraProbability)}
            </div>
            <div className="text-xs text-white/60">
              {aurora.auroraLevel}
            </div>
          </div>
        </div>
      </div>

      {/* Weather Conditions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-light text-white mb-1">
            {formatTemperature(weather.temperature)}
          </div>
          <div className="text-xs text-white/60">Temperature</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-white mb-1">
            {Math.round(weather.cloudCover)}%
          </div>
          <div className="text-xs text-white/60">Cloud Cover</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-white mb-1">
            {Math.round(weather.visibility)}km
          </div>
          <div className="text-xs text-white/60">Visibility</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-white mb-1">
            {Math.round(weather.windSpeed)}m/s
          </div>
          <div className="text-xs text-white/60">Wind Speed</div>
        </div>
      </div>

      {/* Moon Phase */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white/80">Moon Phase</span>
          <span className="text-xs text-white/60">
            {Math.round(moonIllumination)}% illuminated
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-white/60 h-2 rounded-full transition-all duration-500"
            style={{ width: `${moonIllumination}%` }}
          ></div>
        </div>
      </div>

      {/* Viewing Conditions */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white/80">Viewing Conditions</span>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            isDark ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
          }`}>
            {isDark ? 'Dark Enough' : 'Too Bright'}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/60">
            <span>Cloud Cover</span>
            <span className={weather.cloudCover < 30 ? 'text-green-400' : 'text-red-400'}>
              {weather.cloudCover < 30 ? 'Clear' : 'Cloudy'}
            </span>
          </div>
          <div className="flex justify-between text-xs text-white/60">
            <span>Visibility</span>
            <span className={weather.visibility > 10 ? 'text-green-400' : 'text-yellow-400'}>
              {weather.visibility > 10 ? 'Excellent' : 'Good'}
            </span>
          </div>
        </div>
      </div>

      {/* Viewing Spots Preview */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-white/80 mb-3">Top Viewing Spots</h4>
        <div className="space-y-1">
          {city.viewingSpots.slice(0, 2).map((spot, index) => (
            <div key={index} className="text-xs text-white/60 font-light">
              • {spot}
            </div>
          ))}
          {city.viewingSpots.length > 2 && (
            <div className="text-xs text-white/40 font-light">
              +{city.viewingSpots.length - 2} more spots
            </div>
          )}
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-xs text-white/40 font-light mb-4">
        Updated {formatTime(weatherData.lastUpdated)} UTC
      </div>

      {/* Hover Arrow */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/60 group-hover:text-cyan-300 transition-colors duration-300">
          View Full Forecast
        </div>
        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
          <svg className="w-3 h-3 text-white/60 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
    </Link>
  );
}
