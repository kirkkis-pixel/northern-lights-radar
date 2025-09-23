import { Metadata } from 'next';
import HomeMap from '@/components/HomeMap';
import LocalCitiesSection from '@/components/LocalCitiesSection';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Northern Lights Radar - Live Aurora Forecast for Finland',
  description: 'Real-time aurora viewing conditions for Finnish Lapland. Simple, transparent scoring based on NOAA space weather data, cloud cover, and darkness levels.',
  keywords: 'northern lights, aurora borealis, Finland, Lapland, aurora forecast, space weather',
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
      {/* Luxury Navigation */}
      <LuxuryNavigation />
      
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
        <div className="relative z-10 max-w-8xl mx-auto px-12 text-center">
          {/* Main Headline */}
          <div className="mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Aurora Forecast</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
              <span className="text-white">Northern Lights</span>
              <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                Radar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Experience the magic of Finnish Lapland with real-time aurora predictions.
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
          
          {/* Lapland Cities Grid */}
          <div className="mb-24">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Rovaniemi</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">85</div>
                  <div className="text-sm text-green-400 font-light uppercase tracking-wider">Excellent</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Good</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Capital of Lapland • Arctic Circle • Best infrastructure</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Ivalo</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">78</div>
                  <div className="text-sm text-blue-400 font-light uppercase tracking-wider">Great</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Fair</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Northernmost airport • Wilderness access • Sámi culture</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Inari</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">82</div>
                  <div className="text-sm text-blue-400 font-light uppercase tracking-wider">Great</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">88%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Good</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Sámi cultural heart • Lake Inari • Authentic Arctic</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Levi</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">76</div>
                  <div className="text-sm text-yellow-400 font-light uppercase tracking-wider">Good</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Fair</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Mountain resort • Ski slopes • Elevated viewing</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Saariselkä</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">79</div>
                  <div className="text-sm text-blue-400 font-light uppercase tracking-wider">Great</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">71%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">86%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Good</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Mountain village • Fell landscapes • Remote wilderness</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Ylläs</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">74</div>
                  <div className="text-sm text-yellow-400 font-light uppercase tracking-wider">Good</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">66%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Fair</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Seven fells • Ski resort • Panoramic views</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Kilpisjärvi</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">88</div>
                  <div className="text-sm text-green-400 font-light uppercase tracking-wider">Excellent</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">Very High</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Excellent</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Northernmost village • Arctic Circle • Prime location</p>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-light text-white mb-2">Kemi</h3>
                  <div className="text-4xl font-thin text-cyan-300/80 mb-2">71</div>
                  <div className="text-sm text-blue-400 font-light uppercase tracking-wider">Good</div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Aurora Probability:</span>
                    <span className="text-cyan-300">65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky Visibility:</span>
                    <span className="text-cyan-300">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness Level:</span>
                    <span className="text-cyan-300">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon Conditions:</span>
                    <span className="text-cyan-300">Fair</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-white/50">Coastal city • Icebreaker port • Gateway to Lapland</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      {/* Local Cities Section */}
      <LocalCitiesSection />
      
      {/* Map Section */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Interactive Map</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Explore Aurora Conditions
            </h2>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <HomeMap />
          </div>
        </div>
      </div>
      
      {/* Why Lapland Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
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
      
      {/* Features */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.01'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Premium Features</span>
            </div>
            <h2 className="text-4xl font-thin text-white mb-6">
              Why Choose Northern Lights Radar?
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the future of aurora forecasting with cutting-edge technology and timeless design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-cyan-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Real-time Data</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Live updates from NOAA space weather data, FMI weather observations, and precise astronomical calculations.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-green-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">100% Transparent</h3>
              <p className="text-white/70 font-light leading-relaxed">
                See exactly how we calculate scores. No black boxes, no hidden algorithms, complete transparency.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">No API Keys</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Completely free to use. No registration, no payment details, no rate limits, no barriers.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-orange-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Mobile-First</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Designed for aurora hunters on the go. Perfect for checking conditions in the field with gloves on.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-red-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Local Expertise</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Built specifically for Finnish Lapland with local viewing spots and authentic conditions.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Nordic Design</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Clean, minimal interface inspired by Nordic design principles and aurora aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}