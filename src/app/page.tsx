import { Metadata } from 'next';
import HomeMap from '@/components/HomeMap';
import LocalCitiesSection from '@/components/LocalCitiesSection';
import SwipeableCards from '@/components/SwipeableCards';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Luxury Aurora Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Animated Aurora Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse delay-1000 shadow-lg shadow-blue-400/50" />
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-indigo-400/30 rounded-full animate-pulse delay-2000 shadow-lg shadow-indigo-400/50" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse delay-3000 shadow-lg shadow-purple-400/50" />
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse delay-4000 shadow-lg shadow-cyan-300/50" />
          <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-blue-300/30 rounded-full animate-pulse delay-5000 shadow-lg shadow-blue-300/50" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Main Headline */}
          <div className="mb-16">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-sm font-medium text-white/90 tracking-wider uppercase">Live Aurora Forecast</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-tight leading-none">
              Northern Lights
              <span className="block text-5xl md:text-6xl font-extralight text-cyan-300 mt-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Radar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              Experience the magic of Finnish Lapland with real-time aurora predictions.
              <br />
              <span className="text-lg text-white/60 font-extralight">Where science meets wonder.</span>
            </p>
          </div>
          
          {/* Swipeable Cards Container */}
          <div className="mb-16">
            <SwipeableCards />
          </div>
          
          {/* Luxury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-thin text-cyan-300">7</span>
              </div>
              <div className="text-white/90 font-light text-lg">Lapland Cities</div>
              <div className="text-white/60 text-sm font-extralight">Premium Locations</div>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-thin text-green-300">24/7</span>
              </div>
              <div className="text-white/90 font-light text-lg">Live Updates</div>
              <div className="text-white/60 text-sm font-extralight">Real-time Data</div>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-thin text-purple-300">100%</span>
              </div>
              <div className="text-white/90 font-light text-lg">Transparent</div>
              <div className="text-white/60 text-sm font-extralight">Open Source</div>
            </div>
          </div>
          
          {/* Luxury CTA Buttons */}
          <div className="space-y-6">
            <Link
              href="/lapland/northern-lights"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <span>Explore Lapland Cities</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
            </Link>
            <div className="text-center">
              <Link
                href="/finland/northern-lights"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 font-light text-lg"
              >
                <span>View Finland Guide</span>
                <div className="w-1 h-1 bg-white/70 rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Luxury Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-4 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Local Cities Section */}
      <LocalCitiesSection />
      
      {/* Map Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Interactive Aurora Map
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Explore real-time aurora conditions across Finnish Lapland
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <HomeMap />
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">7</div>
              <div className="text-gray-600 font-light">Lapland Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-light">Live Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-light">Transparent Data</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-sm font-medium text-white/90 tracking-wider uppercase">Premium Features</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              Why Choose Northern Lights Radar?
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the future of aurora forecasting with cutting-edge technology and timeless design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Real-time Data</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Live updates from NOAA space weather data, FMI weather observations, and precise astronomical calculations.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">100% Transparent</h3>
              <p className="text-white/70 font-light leading-relaxed">
                See exactly how we calculate scores. No black boxes, no hidden algorithms, complete transparency.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">No API Keys</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Completely free to use. No registration, no payment details, no rate limits, no barriers.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Mobile-First</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Designed for aurora hunters on the go. Perfect for checking conditions in the field with gloves on.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Local Expertise</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Built specifically for Finnish Lapland with local viewing spots and authentic conditions.
              </p>
            </div>
            
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Nordic Design</h3>
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