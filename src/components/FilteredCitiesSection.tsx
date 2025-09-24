'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import citiesData from '@/data/cities.json';

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

const countries = ['Finland', 'Sweden', 'Norway'];

export default function FilteredCitiesSection() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['Finland']);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    const filtered = citiesData.cities.filter(city => 
      selectedCountries.includes(city.country)
    );
    setFilteredCities(filtered);
  }, [selectedCountries]);

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => {
      if (prev.includes(country)) {
        // Don't allow deselecting all countries
        if (prev.length === 1) return prev;
        return prev.filter(c => c !== country);
      } else {
        return [...prev, country];
      }
    });
  };

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

  return (
    <div className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-8xl mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Explore Cities</span>
          </div>
          <h2 className="text-5xl font-thin text-white mb-8">
            Aurora Viewing Locations
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Discover the best aurora viewing spots across Finnish, Swedish, and Norwegian Lapland
          </p>
        </div>

        {/* Country Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => toggleCountry(country)}
              className={`group relative px-8 py-4 rounded-full font-light text-lg transition-all duration-300 ${
                selectedCountries.includes(country)
                  ? `bg-gradient-to-r ${getCountryColor(country)} border-2 ${getCountryTextColor(country)} shadow-lg shadow-current/20 scale-105`
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80 hover:scale-105'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="text-2xl">{getCountryFlag(country)}</span>
                <span>{country}</span>
                {selectedCountries.includes(country) && (
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.country.toLowerCase()}/lapland/${city.slug}/aurora`}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Country Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCountryColor(city.country)} ${getCountryTextColor(city.country)}`}>
                {getCountryFlag(city.country)} {city.country}
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

              {/* Coordinates */}
              <div className="text-xs text-white/40 font-light mb-4">
                {city.latitude.toFixed(4)}°N, {city.longitude.toFixed(4)}°E
              </div>

              {/* Hover Arrow */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60 group-hover:text-cyan-300 transition-colors duration-300">
                  View Aurora Forecast
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
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-white/60 font-light">
            Showing {filteredCities.length} cities across {selectedCountries.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
