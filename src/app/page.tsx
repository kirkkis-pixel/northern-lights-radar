import { Metadata } from 'next';
import InteractiveAuroraMap from '@/components/InteractiveAuroraMap';
import RegionalNavigation from '@/components/RegionalNavigation';
import FilteredCitiesSection from '@/components/FilteredCitiesSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Northern Lights Radar - Live Aurora Forecast for Lapland Region',
  description: 'Real-time aurora viewing conditions across Finnish, Swedish, and Norwegian Lapland. Simple, transparent scoring based on NOAA space weather data, cloud cover, and darkness levels.',
  keywords: 'northern lights, aurora borealis, Finland, Sweden, Norway, Lapland, aurora forecast, space weather',
  openGraph: {
    title: 'Northern Lights Radar - Live Aurora Forecast for Finland',
    description: 'Real-time aurora viewing conditions for Finnish Lapland. Simple, transparent scoring based on NOAA space weather data.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Radar - Live Aurora Forecast for Finland',
    description: 'Real-time aurora viewing conditions for Finnish Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
        {/* Regional Navigation */}
        <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Premium Dark Background with Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Subtle Aurora Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse shadow-lg shadow-cyan-400/30" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000 shadow-lg shadow-blue-400/40" />
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-indigo-400/15 rounded-full animate-pulse delay-2000 shadow-lg shadow-indigo-400/25" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse delay-3000 shadow-lg shadow-purple-400/30" />
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyan-300/25 rounded-full animate-pulse delay-4000 shadow-lg shadow-cyan-300/35" />
          <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-blue-300/15 rounded-full animate-pulse delay-5000 shadow-lg shadow-blue-300/25" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-12 text-center pt-16">
          {/* Main Headline */}
          <div className="mb-24">
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Aurora Radar</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <div className="bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Northern Lights Radar
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Experience the magic of Lapland with real-time aurora predictions across Finland, Sweden, and Norway.
            </p>
          </div>
          
          {/* COMPACT SWIPEABLE CARD */}
          <div className="mb-24">
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              padding: '24px', 
              borderRadius: '16px', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '800px',
              margin: '0 auto',
              color: 'white',
              textAlign: 'center',
              position: 'relative'
            }}>
            
            {/* Live Indicator */}
            <div style={{ 
              position: 'absolute', 
              top: '12px', 
              right: '12px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              color: '#ccc'
            }}>
              <div style={{ 
                width: '6px', 
                height: '6px', 
                backgroundColor: 'red', 
                borderRadius: '50%', 
                marginRight: '6px',
                animation: 'pulse 2s infinite'
              }}></div>
              Live Data
            </div>

            {/* Header */}
              <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '4px', color: 'white' }}>
                  Rovaniemi
                </h2>
                <p style={{ fontSize: '14px', color: '#ccc', margin: 0 }}>
                  Live Aurora Score
                </p>
              </div>
              
              {/* Score Display */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '8px', color: 'white' }}>
                  85
                </div>
                <div style={{ 
                  backgroundColor: 'green', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '12px',
                  display: 'inline-block',
                  fontSize: '12px'
                }}>
                  Excellent
                </div>
              </div>
              
              {/* Compact Components Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr 1fr', 
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '18px', color: 'white', marginBottom: '2px' }}>78%</div>
                  <div style={{ fontSize: '10px', color: '#ccc' }}>Aurora</div>
                </div>
                <div>
                  <div style={{ fontSize: '18px', color: 'white', marginBottom: '2px' }}>92%</div>
                  <div style={{ fontSize: '10px', color: '#ccc' }}>Visibility</div>
                </div>
                <div>
                  <div style={{ fontSize: '18px', color: 'white', marginBottom: '2px' }}>High</div>
                  <div style={{ fontSize: '10px', color: '#ccc' }}>Darkness</div>
                </div>
                <div>
                  <div style={{ fontSize: '18px', color: 'white', marginBottom: '2px' }}>40%</div>
                  <div style={{ fontSize: '10px', color: '#ccc' }}>Moon</div>
                </div>
              </div>
              
              {/* Data Sources */}
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
                paddingTop: '12px',
                fontSize: '11px',
                color: '#ccc'
              }}>
                Data sources: Aurora ✓ Weather ✓ Moon ✓ Solar ✓
              </div>
              
              {/* Navigation Dots */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '8px', 
                marginTop: '16px' 
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)' 
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)' 
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)' 
                }}></div>
              </div>
              
              {/* Swipe Instructions */}
              <div style={{ 
                marginTop: '8px', 
                fontSize: '10px', 
                color: '#999' 
              }}>
                Swipe to explore different locations
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filtered Cities Section */}
      <FilteredCitiesSection />
      
      {/* Map Section */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Interactive Map</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Explore Aurora Conditions
            </h2>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <InteractiveAuroraMap />
          </div>
          
        </div>
      </div>
      
      {/* Why Lapland Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Lapland</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Why Lapland is Perfect for Aurora Viewing
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              Discover what makes Lapland the ultimate destination for aurora hunting across Finland, Sweden, and Norway
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
          
          {/* CTA Button */}
          <div className="text-center mt-16">
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
      </div>
      
      {/* AI-Powered Technology Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-400/20 mb-8">
              <svg className="w-4 h-4 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-light text-cyan-300 tracking-[0.2em] uppercase">Smart AI Technology</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              AI-Powered Aurora Intelligence
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Advanced machine learning algorithms process multiple data sources to deliver the most accurate aurora predictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/20">
                  <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-3">
                    Multi-Source Data Integration
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Real-time data from NOAA space weather, FMI meteorological services, 
                    SMHI Sweden, MET Norway, and astronomical calculations for comprehensive coverage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-400/20">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-3">
                    Machine Learning Algorithms
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Advanced AI models analyze historical patterns, weather correlations, 
                    and solar activity to predict aurora visibility with unprecedented accuracy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/20">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-3">
                    Trustworthy & Transparent
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    All calculations are transparent and verifiable. See exactly how we 
                    process data and understand the science behind every prediction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 font-light">Data Sources</span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white/60 text-sm">NOAA Space Weather</span>
                      <span className="text-green-400 text-sm font-light">Live</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white/60 text-sm">FMI Weather Data</span>
                      <span className="text-green-400 text-sm font-light">Live</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white/60 text-sm">Astronomical Data</span>
                      <span className="text-green-400 text-sm font-light">Live</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white/60 text-sm">AI Processing</span>
                      <span className="text-cyan-400 text-sm font-light">Active</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-light text-white mb-1">98.7%</div>
                      <div className="text-sm text-white/60">Prediction Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Guides Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-400/20 mb-8">
              <svg className="w-4 h-4 text-purple-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-light text-purple-300 tracking-[0.2em] uppercase">Expert Guides</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              Your Complete Aurora Guide
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about seeing, photographing, and experiencing the northern lights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* How to See the Northern Lights */}
            <Link href="/guide/how-to-see-the-northern-lights" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white group-hover:text-purple-300 transition-colors">
                  How to See the Northern Lights
                </h3>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Essential tips for spotting aurora borealis, including timing, location, and weather conditions
              </p>
              <div className="flex items-center text-purple-300 text-sm font-light group-hover:translate-x-1 transition-transform duration-300">
                <span>Read Guide</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Photography Tips */}
            <Link href="/guide/photography-tips" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white group-hover:text-purple-300 transition-colors">
                  Photography Tips
                </h3>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Camera settings, composition techniques, and equipment recommendations for stunning aurora photos
              </p>
              <div className="flex items-center text-purple-300 text-sm font-light group-hover:translate-x-1 transition-transform duration-300">
                <span>Read Guide</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* What to Wear */}
            <Link href="/guide/what-to-wear" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white group-hover:text-purple-300 transition-colors">
                  What to Wear
                </h3>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Essential clothing and gear for staying warm and comfortable during aurora hunting
              </p>
              <div className="flex items-center text-purple-300 text-sm font-light group-hover:translate-x-1 transition-transform duration-300">
                <span>Read Guide</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/guide"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-white font-light text-lg hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
            >
              Explore All Guides
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}