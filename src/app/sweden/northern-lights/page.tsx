import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import MultiCityWidget from '@/components/MultiCityWidget';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import DynamicCityCard from '@/components/DynamicCityCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Swedish Lapland. Live conditions, viewing spots, and expert tips for Kiruna, Abisko, and Jokkmokk.',
  keywords: 'northern lights Sweden, Swedish Lapland aurora, Kiruna northern lights, Abisko aurora, Jokkmokk northern lights',
  openGraph: {
    title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Swedish Lapland with live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Swedish Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/sweden/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Swedish Lapland with live conditions and expert tips.',
  url: 'https://northernlightsradar.com/sweden/northern-lights',
  mainEntity: {
    '@type': 'Place',
    name: 'Swedish Lapland',
    description: 'Northern region of Sweden known for excellent aurora viewing',
    containedInPlace: {
      '@type': 'Country',
      name: 'Sweden'
    }
  }
};

const swedishCities = [
  {
    slug: 'kiruna',
    name: 'Kiruna',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.8558,
    longitude: 20.2253,
    timezone: 'Europe/Stockholm',
    description: "Sweden's northernmost city and gateway to Swedish Lapland",
    viewingSpots: ["Kiruna city center", "Luossavaara mountain", "Esrange Space Center", "Jukkasjärvi Ice Hotel"]
  },
  {
    slug: 'abisko',
    name: 'Abisko',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 68.3500,
    longitude: 18.8333,
    timezone: 'Europe/Stockholm',
    description: "World-famous aurora viewing destination with clear skies",
    viewingSpots: ["Abisko National Park", "Aurora Sky Station", "Lake Torneträsk", "Nuolja mountain"]
  },
  {
    slug: 'jokkmokk',
    name: 'Jokkmokk',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 66.6000,
    longitude: 19.8333,
    timezone: 'Europe/Stockholm',
    description: "Sámi cultural center with excellent aurora viewing",
    viewingSpots: ["Jokkmokk town center", "Ájtte Museum area", "Lule River banks", "Sarek National Park"]
  },
  {
    slug: 'lulea',
    name: 'Luleå',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 65.5842,
    longitude: 22.1547,
    timezone: 'Europe/Stockholm',
    description: "Coastal city with archipelago views and aurora opportunities",
    viewingSpots: ["Luleå city center", "Gammelstad Church Town", "Luleå archipelago", "Rödkallen island"]
  },
  {
    slug: 'gallivare',
    name: 'Gällivare',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.1333,
    longitude: 20.6500,
    timezone: 'Europe/Stockholm',
    description: "Mining town with mountain views and clear aurora skies",
    viewingSpots: ["Gällivare town center", "Dundret mountain", "Malmberget area", "Lappland mountains"]
  },
  {
    slug: 'arvidsjaur',
    name: 'Arvidsjaur',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 65.5833,
    longitude: 19.1667,
    timezone: 'Europe/Stockholm',
    description: "Sámi cultural town with pristine wilderness aurora viewing",
    viewingSpots: ["Arvidsjaur town center", "Silvermuseet area", "Lappland wilderness", "Pite River valley"]
  },
  {
    slug: 'pajala',
    name: 'Pajala',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.2000,
    longitude: 23.3667,
    timezone: 'Europe/Stockholm',
    description: "Border town with excellent aurora viewing conditions",
    viewingSpots: ["Pajala town center", "Torne River banks", "Kangos village", "Muonio River area"]
  }
];

export default function SwedenNorthernLightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Regional Navigation */}
        <RegionalNavigation />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Swedish Lapland</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights in</div>
                <div className="text-yellow-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sweden
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Discover the magic of Swedish Lapland with world-class aurora viewing destinations
              </p>
            </div>
          </div>
        </div>

        {/* Live Conditions */}
        <MultiCityWidget 
          cities={swedishCities}
          title="Live Aurora Conditions in Swedish Lapland"
          description="Real-time aurora scores and conditions for Sweden's premier northern lights destinations"
        />

        {/* Swedish Cities Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Swedish Cities</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-6">
                Live Aurora Conditions in Swedish Cities
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Real-time aurora data, weather conditions, and viewing information for all major Swedish Lapland destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {swedishCities.map((city, index) => (
                <div
                  key={city.slug}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <DynamicCityCard city={city} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Swedish Lapland */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Sweden</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Why Swedish Lapland is Perfect for Aurora Viewing
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Sweden offers some of the world&apos;s best aurora viewing conditions with unique advantages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/30">
                  <span className="text-yellow-300 text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Mountain Clear Skies</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Abisko National Park offers some of the clearest skies in Europe, with a unique microclimate that creates optimal aurora viewing conditions.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/30">
                  <span className="text-yellow-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Polar Night</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Experience the polar night in Kiruna with 24 hours of darkness, providing maximum aurora viewing opportunities during winter months.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/30">
                  <span className="text-yellow-300 text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Infrastructure</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  World-class facilities including the Ice Hotel, Aurora Sky Station, and specialized aurora tours make Sweden a premier destination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Space Weather */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Current Space Weather Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Monitor real-time space weather data that affects aurora visibility across Swedish Lapland
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SpaceWeatherWidget />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12 text-center">
            <Link
              href="/guide/how-to-see-the-northern-lights"
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-400/30 rounded-2xl text-white font-light text-lg hover:from-yellow-500/30 hover:to-red-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              Start Your Swedish Aurora Journey
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center text-white/40 text-sm font-light">
              <p>Data from NOAA SWPC (OVATION), SMHI, MET Norway. Times in local timezone.</p>
              <p className="mt-2">Scores are indicative and depend on weather & darkness conditions.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
