import { Metadata } from 'next';
import HomeMap from '@/components/HomeMap';
import TonightCard from '@/components/TonightCard';
import LocalCitiesSection from '@/components/LocalCitiesSection';
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
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        
        {/* Floating Aurora Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-3000" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Northern Lights
              <span className="block text-4xl md:text-5xl font-extralight text-blue-600 mt-2">
                Radar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time aurora viewing conditions for Finnish Lapland.
              <br />
              <span className="text-lg text-gray-500">Simple, transparent, honest.</span>
            </p>
          </div>
          
          {/* Live Conditions Card */}
          <div className="mb-12">
            <TonightCard />
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
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
          
          {/* CTA Buttons */}
          <div className="space-y-4">
            <Link
              href="/lapland/northern-lights"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg"
            >
              Explore Lapland Cities
            </Link>
            <div className="text-center">
              <Link
                href="/finland/northern-lights"
                className="inline-block text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                View Finland Guide →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
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
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Why Choose Northern Lights Radar?
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Simple, transparent, and honest aurora forecasting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Real-time Data</h3>
              <p className="text-gray-600 font-light">
                Live updates from NOAA space weather data, FMI weather observations, and astronomical calculations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">100% Transparent</h3>
              <p className="text-gray-600 font-light">
                See exactly how we calculate scores. No black boxes, no hidden algorithms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">No API Keys</h3>
              <p className="text-gray-600 font-light">
                Completely free to use. No registration, no payment details, no rate limits.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600 font-light">
                Designed for aurora hunters on the go. Perfect for checking conditions in the field.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600 font-light">
                Built specifically for Finnish Lapland with local viewing spots and conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nordic Design</h3>
              <p className="text-gray-600 font-light">
                Clean, minimal interface inspired by Nordic design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}