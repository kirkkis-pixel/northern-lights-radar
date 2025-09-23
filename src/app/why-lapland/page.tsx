import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';

export const metadata: Metadata = {
  title: 'Why Lapland is Perfect for Northern Lights Viewing',
  description: 'Discover why Lapland is the ultimate destination for aurora borealis viewing. Learn about optimal conditions, geographic advantages, and unique features that make Lapland the world\'s premier aurora destination.',
  keywords: 'why Lapland northern lights, Lapland aurora advantages, best aurora viewing destination, Lapland geography, Arctic Circle aurora',
  openGraph: {
    title: 'Why Lapland is Perfect for Northern Lights Viewing',
    description: 'Discover why Lapland is the ultimate destination for aurora borealis viewing with optimal conditions and geographic advantages.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Lapland is Perfect for Northern Lights Viewing',
    description: 'Discover why Lapland is the ultimate destination for aurora borealis viewing.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/why-lapland',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Lapland is Perfect for Northern Lights Viewing',
  description: 'Discover why Lapland is the ultimate destination for aurora borealis viewing with optimal conditions and geographic advantages.',
  url: 'https://northernlightsradar.com/why-lapland',
  mainEntity: {
    '@type': 'Place',
    name: 'Lapland',
    description: 'Northern region spanning Finland, Sweden, and Norway, known for optimal aurora viewing conditions',
    containedInPlace: [
      { '@type': 'Country', name: 'Finland' },
      { '@type': 'Country', name: 'Sweden' },
      { '@type': 'Country', name: 'Norway' }
    ]
  }
};

export default function WhyLaplandPage() {
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
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
            <div className="mb-20">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Why Lapland</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Why Lapland is the</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  Ultimate Aurora Destination
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Discover the unique geographic, climatic, and cultural advantages that make Lapland the world&apos;s premier destination for northern lights viewing
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Advantages */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Geographic Advantages</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Perfect Geographic Position
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Lapland&apos;s unique location provides optimal conditions for aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Arctic Circle Location</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  All Lapland regions are located above the Arctic Circle (66.5°N), providing optimal positioning within the auroral oval where northern lights are most frequent and intense.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Polar Night Advantage</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  During winter months, Lapland experiences polar night with up to 24 hours of darkness, maximizing aurora viewing opportunities when the sun doesn&apos;t rise above the horizon.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Mountain & Coastal Variety</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  From Norwegian fjords to Swedish mountains and Finnish fells, Lapland offers diverse landscapes that provide multiple perspectives and unique backdrops for aurora photography.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Advantages */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Climate Benefits</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Optimal Weather Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Lapland&apos;s climate creates ideal conditions for clear aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">Clear Winter Skies</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Lapland&apos;s cold, dry winter climate results in exceptionally clear skies with minimal atmospheric interference, providing optimal visibility for aurora displays.
                  </p>
                  <ul className="text-white/60 font-light space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Low humidity reduces atmospheric haze</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Cold air holds less moisture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Stable high-pressure systems common</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">Minimal Light Pollution</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Sparse population and vast wilderness areas ensure dark skies essential for clear aurora observation, with many locations offering near-pristine viewing conditions.
                  </p>
                  <ul className="text-white/60 font-light space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Remote wilderness locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Low population density</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <span>Protected dark sky areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural & Infrastructure Advantages */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Culture & Infrastructure</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Aurora-Ready Infrastructure
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Lapland has developed world-class infrastructure specifically for aurora tourism
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Hotels & Lodges</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Specialized accommodations with glass ceilings, aurora wake-up services, and optimal viewing locations designed specifically for northern lights enthusiasts.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Photography Expertise</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Professional aurora photography tours, workshops, and guides who understand optimal camera settings, timing, and locations for capturing stunning northern lights images.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Weather Monitoring</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Advanced weather forecasting and aurora prediction services specifically tailored for Lapland conditions, helping visitors plan optimal viewing times.
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
                Monitor real-time space weather data that affects aurora visibility across Lapland
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
            <h2 className="text-4xl font-thin text-white mb-8">
              Ready to Experience Lapland&apos;s Aurora Magic?
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-3xl mx-auto">
              Choose your Lapland destination and start planning your northern lights adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/finland/northern-lights"
                className="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl text-white font-light text-lg hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
              >
                Explore Finland
              </Link>
              <Link
                href="/sweden/northern-lights"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-400/30 rounded-2xl text-white font-light text-lg hover:from-yellow-500/30 hover:to-red-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
              >
                Explore Sweden
              </Link>
              <Link
                href="/norway/northern-lights"
                className="px-8 py-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-400/30 rounded-2xl text-white font-light text-lg hover:from-red-500/30 hover:to-blue-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-105"
              >
                Explore Norway
              </Link>
            </div>
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
