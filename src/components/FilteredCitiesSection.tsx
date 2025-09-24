'use client';

import { useState, useEffect } from 'react';
import citiesData from '@/data/cities.json';
import DynamicCityCard from './DynamicCityCard';

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
          <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
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
            <DynamicCityCard key={city.slug} city={city} />
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
