import { Metadata } from 'next';
import Link from 'next/link';
import CityScoreCard from '@/components/CityScoreCard';
import LuxuryNavigation from '@/components/LuxuryNavigation';

export const metadata: Metadata = {
  title: 'Northern Lights in Lapland - Live Aurora Conditions',
  description: 'Real-time aurora viewing conditions for Lapland cities. Rovaniemi, Ivalo, Inari, Levi, and more with live scoring and viewing tips.',
  keywords: 'northern lights Lapland, aurora Lapland, Rovaniemi aurora, Ivalo aurora, Lapland aurora forecast',
  openGraph: {
    title: 'Northern Lights in Lapland - Live Aurora Conditions',
    description: 'Real-time aurora viewing conditions for Lapland cities with live scoring.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Lapland - Live Aurora Conditions',
    description: 'Real-time aurora viewing conditions for Lapland cities.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/lapland/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which Lapland city is best for seeing the northern lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Lapland cities offer excellent aurora viewing opportunities. Kilpisjärvi is the northernmost and closest to the auroral oval, while Rovaniemi offers the best infrastructure and accessibility. Ivalo and Inari provide pristine wilderness settings with minimal light pollution.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I see the northern lights in Rovaniemi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Rovaniemi offers excellent aurora viewing opportunities. As the capital of Lapland and located on the Arctic Circle, it provides good infrastructure while still being far enough north for reliable aurora sightings during the winter months.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Lapland special for aurora viewing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lapland\'s location above the Arctic Circle, minimal light pollution, and long winter nights create ideal conditions for aurora viewing. The region experiences polar night in winter, providing extended darkness for aurora observation.'
      }
    }
  ]
};

const cities = [
  { slug: 'rovaniemi', name: 'Rovaniemi', description: 'Capital of Lapland' },
  { slug: 'ivalo', name: 'Ivalo', description: 'Northernmost airport' },
  { slug: 'inari', name: 'Inari', description: 'Sámi cultural heart' },
  { slug: 'levi', name: 'Levi', description: 'Mountain resort' },
  { slug: 'saariselka', name: 'Saariselkä', description: 'Mountain village' },
  { slug: 'yllas', name: 'Ylläs', description: 'Seven fells' },
  { slug: 'kilpisjarvi', name: 'Kilpisjärvi', description: 'Northernmost village' }
];

export default function LaplandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Luxury Navigation */}
        <LuxuryNavigation />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          
          <div className="relative z-10 max-w-8xl mx-auto px-12 text-center">
            <div className="mb-20">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Aurora Conditions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Northern Lights</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  in Lapland
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Experience the magic of Finnish Lapland with real-time aurora predictions and live conditions for all major destinations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Live City Scores */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-8xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Lapland Cities
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Real-time aurora conditions across Finnish Lapland&apos;s most beautiful destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {cities.map((city) => (
                <CityScoreCard
                  key={city.slug}
                  citySlug={city.slug}
                  cityName={city.name}
                  description={city.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Lapland Facts */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-thin text-white mb-6">
                Why Lapland is Perfect for Aurora Viewing
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Discover what makes Finnish Lapland the ultimate destination for aurora hunting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Arctic Circle Location
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      All Lapland cities are located above the Arctic Circle, 
                      providing optimal positioning for aurora viewing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Minimal Light Pollution
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Sparse population and wilderness areas provide dark skies 
                      essential for clear aurora observation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Long Winter Nights
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Polar night provides extended darkness from November to January, 
                      maximizing aurora viewing opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Clear Mountain Air
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      High altitude locations like Levi and Saariselkä offer 
                      clearer skies and better visibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Aurora Infrastructure
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Well-developed tourism infrastructure with aurora tours, 
                      photography workshops, and viewing platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Cultural Experience
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Combine aurora viewing with Sámi culture, reindeer experiences, 
                      and authentic Arctic lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-thin text-white mb-6">
                Explore Lapland Cities
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Discover detailed aurora conditions for each Lapland destination
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/finland/lapland/${city.slug}/aurora`}
                  className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-white/70 mb-6 font-light">
                    {city.description}
                  </p>
                  <div className="text-cyan-300 font-light flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    View live conditions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12 text-center">
            <Link
              href="/guide/how-to-see-the-northern-lights"
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              Start Your Aurora Journey
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Attribution Footer */}
        <div className="py-12 bg-black">
          <div className="max-w-6xl mx-auto px-12">
            <p className="text-sm text-white/40 text-center font-light">
              Data from NOAA SWPC (OVATION), FMI, Open-Meteo. Times in local timezone. 
              Scores are indicative and depend on weather & darkness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

