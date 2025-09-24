import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import MultiCityWidget from '@/components/MultiCityWidget';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import DynamicCityCard from '@/components/DynamicCityCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Norway - Arctic Norway Aurora Guide',
  description: 'Discover the best places to see the northern lights in Arctic Norway. Live conditions, viewing spots, and expert tips for Tromsø, Alta, Narvik, and Bodø.',
  keywords: 'northern lights Norway, Arctic Norway aurora, Tromsø northern lights, Alta aurora, Narvik northern lights, Bodø aurora',
  openGraph: {
    title: 'Northern Lights in Norway - Arctic Norway Aurora Guide',
    description: 'Discover the best places to see the northern lights in Arctic Norway with live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Norway - Arctic Norway Aurora Guide',
    description: 'Discover the best places to see the northern lights in Arctic Norway.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/norway/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Northern Lights in Norway - Arctic Norway Aurora Guide',
  description: 'Discover the best places to see the northern lights in Arctic Norway with live conditions and expert tips.',
  url: 'https://northernlightsradar.com/norway/northern-lights',
  mainEntity: {
    '@type': 'Place',
    name: 'Arctic Norway',
    description: 'Northern region of Norway known for excellent aurora viewing',
    containedInPlace: {
      '@type': 'Country',
      name: 'Norway'
    }
  }
};

const norwegianCities = [
  {
    slug: 'tromso',
    name: 'Tromsø',
    region: 'Lapland',
    country: 'Norway',
    latitude: 69.6492,
    longitude: 18.9553,
    timezone: 'Europe/Oslo',
    description: "Arctic capital of Norway and premier aurora destination",
    viewingSpots: ["Tromsø city center", "Fjellheisen cable car", "Tromsø Bridge", "Prestvannet lake"]
  },
  {
    slug: 'alta',
    name: 'Alta',
    region: 'Lapland',
    country: 'Norway',
    latitude: 69.9689,
    longitude: 23.2717,
    timezone: 'Europe/Oslo',
    description: "Northern Norway's largest city with rich aurora history",
    viewingSpots: ["Alta city center", "Alta Museum area", "Alta River valley", "Haldde mountain"]
  },
  {
    slug: 'narvik',
    name: 'Narvik',
    region: 'Lapland',
    country: 'Norway',
    latitude: 68.4381,
    longitude: 17.4278,
    timezone: 'Europe/Oslo',
    description: "Coastal city with dramatic fjord views and aurora opportunities",
    viewingSpots: ["Narvik city center", "Narvikfjellet mountain", "Ofotfjord shoreline", "Narvik War Museum area"]
  },
  {
    slug: 'bodo',
    name: 'Bodø',
    region: 'Lapland',
    country: 'Norway',
    latitude: 67.2800,
    longitude: 14.4050,
    timezone: 'Europe/Oslo',
    description: "Gateway to northern Norway with good aurora viewing potential",
    viewingSpots: ["Bodø city center", "Saltstraumen area", "Bodø Airport vicinity", "Rønvikfjellet mountain"]
  },
  {
    slug: 'harstad',
    name: 'Harstad',
    region: 'Lapland',
    country: 'Norway',
    latitude: 68.7986,
    longitude: 16.5406,
    timezone: 'Europe/Oslo',
    description: "Coastal city with fjord views and aurora opportunities",
    viewingSpots: ["Harstad city center", "Trondenes peninsula", "Hinnøya island", "Vågsfjord shoreline"]
  },
  {
    slug: 'hammerfest',
    name: 'Hammerfest',
    region: 'Lapland',
    country: 'Norway',
    latitude: 70.6611,
    longitude: 23.6728,
    timezone: 'Europe/Oslo',
    description: "World's northernmost city with excellent aurora viewing",
    viewingSpots: ["Hammerfest city center", "Salen mountain", "Hammerfest harbor", "Melkøya island"]
  },
  {
    slug: 'vadso',
    name: 'Vadsø',
    region: 'Lapland',
    country: 'Norway',
    latitude: 70.0731,
    longitude: 29.7494,
    timezone: 'Europe/Oslo',
    description: "Eastern Finnmark city with coastal aurora viewing",
    viewingSpots: ["Vadsø city center", "Varanger Peninsula", "Vadsø Airport area", "Varangerfjord shoreline"]
  }
];

export default function NorwayNorthernLightsPage() {
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Arctic Norway</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights in</div>
                <div className="text-red-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Norway
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Experience the Arctic capital of aurora viewing with world-renowned destinations
              </p>
            </div>
          </div>
        </div>

        {/* Live Conditions */}
        <MultiCityWidget 
          cities={norwegianCities}
          title="Live Aurora Conditions in Arctic Norway"
          description="Real-time aurora scores and conditions for Norway's premier northern lights destinations"
        />

        {/* Norwegian Cities Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-8xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Norwegian Cities</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-6">
                Live Aurora Conditions in Norwegian Cities
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Real-time aurora data, weather conditions, and viewing information for all major Arctic Norway destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {norwegianCities.map((city, index) => (
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

        {/* Why Arctic Norway */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Norway</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Why Arctic Norway is Perfect for Aurora Viewing
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Norway offers the ultimate Arctic aurora experience with unique geographical advantages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Gulf Stream Benefits</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  The Gulf Stream keeps Norwegian Arctic waters ice-free, creating unique weather patterns that often result in clearer skies for aurora viewing.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Mountain & Fjord Views</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Dramatic fjord landscapes and mountain backdrops provide stunning settings for aurora photography and viewing experiences.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🌌</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Capital</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Tromsø is known as the &quot;Aurora Capital of the World&quot; with the highest probability of seeing the northern lights anywhere on Earth.
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
                Monitor real-time space weather data that affects aurora visibility across Arctic Norway
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
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-400/30 rounded-2xl text-white font-light text-lg hover:from-red-500/30 hover:to-blue-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-105"
            >
              Start Your Norwegian Aurora Journey
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
