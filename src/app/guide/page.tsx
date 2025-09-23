import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import TonightCard from '@/components/TonightCard';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';

export const metadata: Metadata = {
  title: 'Northern Lights Guide - Complete Aurora Hunting Resource',
  description: 'Complete guide to seeing the northern lights in Lapland. Expert tips, photography advice, best locations, and everything you need for successful aurora hunting.',
  keywords: 'northern lights guide, aurora hunting guide, northern lights tips, aurora photography, best time northern lights, aurora viewing guide',
  openGraph: {
    title: 'Northern Lights Guide - Complete Aurora Hunting Resource',
    description: 'Complete guide to seeing the northern lights in Lapland with expert tips and advice.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Guide - Complete Aurora Hunting Resource',
    description: 'Complete guide to seeing the northern lights in Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Northern Lights Guide - Complete Aurora Hunting Resource',
  description: 'Complete guide to seeing the northern lights in Lapland with expert tips, photography advice, and best locations.',
  url: 'https://northernlightsradar.com/guide',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Northern Lights Guide Topics',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'How to See the Northern Lights',
        url: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'What to Wear for Aurora Viewing',
        url: 'https://northernlightsradar.com/guide/what-to-wear'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Photography Tips for Northern Lights',
        url: 'https://northernlightsradar.com/guide/photography-tips'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Where to Look for Northern Lights',
        url: 'https://northernlightsradar.com/guide/where-to-look'
      }
    ]
  }
};

export default function GuidePage() {
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
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Complete Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Complete Guide
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Everything you need to know about seeing the aurora borealis in Lapland
              </p>
            </div>
          </div>
        </div>

        {/* Live Conditions Widget */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Check Current Aurora Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Before heading out, check the real-time aurora conditions for your chosen location
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TonightCard 
                  latitude={66.5039} 
                  longitude={25.7294} 
                  cityName="Rovaniemi" 
                  description="Gateway to Lapland - Check conditions before your aurora hunt"
                />
                <SpaceWeatherWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Guide Topics */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Guide Topics</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Complete Aurora Hunting Guide
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides covering every aspect of northern lights viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/guide/how-to-see-the-northern-lights" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">How to See the Northern Lights</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Complete beginner&apos;s guide covering the fundamentals of aurora hunting, timing, and what to expect.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Complete Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/what-to-wear" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🧥</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">What to Wear</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Essential clothing guide with layering techniques and gear recommendations for Arctic conditions.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Clothing Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/photography-tips" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">📸</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Photography Tips</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Master aurora photography with camera settings, equipment recommendations, and composition techniques.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Photography Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/where-to-look" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Where to Look</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Best viewing locations, directions, and positioning tips for optimal aurora visibility.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Location Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/ideal-conditions" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Ideal Conditions</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Perfect weather, timing, and space weather conditions for the best aurora viewing experience.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Conditions Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/perfect-locations" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🏔️</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Perfect Locations</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Top aurora viewing spots across Finnish, Swedish, and Norwegian Lapland with detailed descriptions.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Locations Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/best-time-to-visit" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">📅</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Best Time to Visit</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Seasonal timing guide covering the best months, weeks, and times for aurora viewing in Lapland.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Timing Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/equipment-checklist" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Equipment Checklist</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Essential gear and equipment checklist for comfortable and successful aurora hunting adventures.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Equipment Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/safety-tips" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Safety Tips</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Important safety considerations and tips for staying safe while aurora hunting in Arctic conditions.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Safety Guide →
                  </div>
                </div>
              </Link>
              
              <Link href="/guide/aurora-myths" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <span className="text-cyan-300 text-2xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-300 transition-colors">Aurora Myths</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    Debunking common myths and misconceptions about the northern lights with scientific facts.
                  </p>
                  <div className="text-cyan-300 text-sm font-light group-hover:text-cyan-200 transition-colors">
                    Read Myths Guide →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Tips Summary */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Quick Tips</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Essential Quick Tips
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Key points to remember for successful aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Dark Skies</h3>
                <p className="text-white/70 font-light text-sm">
                  Find locations away from city lights for the best visibility
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🧭</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Look North</h3>
                <p className="text-white/70 font-light text-sm">
                  Always face the northern horizon where aurora appears most frequently
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Peak Hours</h3>
                <p className="text-white/70 font-light text-sm">
                  Best viewing is typically between 10 PM and 2 AM local time
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Be Patient</h3>
                <p className="text-white/70 font-light text-sm">
                  Give your eyes 20-30 minutes to adapt to darkness for better detection
                </p>
              </div>
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
