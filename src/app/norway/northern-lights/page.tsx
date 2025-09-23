import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import MultiCityWidget from '@/components/MultiCityWidget';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';

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
    latitude: 69.6492,
    longitude: 18.9553
  },
  {
    slug: 'alta',
    name: 'Alta',
    latitude: 69.9689,
    longitude: 23.2717
  },
  {
    slug: 'narvik',
    name: 'Narvik',
    latitude: 68.4381,
    longitude: 17.4278
  },
  {
    slug: 'bodo',
    name: 'Bodø',
    latitude: 67.2800,
    longitude: 14.4050
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
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
            <div className="mb-20">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Arctic Norway</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Northern Lights in</span>
                <span className="text-red-300/80 bg-gradient-to-r from-red-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  Norway
                </span>
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
