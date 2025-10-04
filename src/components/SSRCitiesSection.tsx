import citiesData from '@/data/cities.json';
import HydratedCityCard from './HydratedCityCard';

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

export default function SSRCitiesSection() {
  // For SSR, we'll show all cities initially with static data
  const allCities = citiesData.cities as City[];
  
  // Show all cities for better SEO and visibility
  const defaultCities = allCities;

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

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {defaultCities.map((city) => (
            <HydratedCityCard key={city.slug} city={city} />
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-white/60 font-light">
            Showing {defaultCities.length} cities across Finland, Sweden, and Norway
          </p>
        </div>
      </div>
    </div>
  );
}
