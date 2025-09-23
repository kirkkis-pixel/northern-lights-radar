import { Metadata } from 'next';
import HomeMap from '@/components/HomeMap';
import TonightCard from '@/components/TonightCard';
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
      {/* Hero Section with Map */}
      <div className="relative h-screen">
        <HomeMap />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Aurora Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Bottom Sheet */}
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-t-3xl shadow-2xl">
            <div className="p-6">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Northern Lights Radar
              </h1>
              <p className="text-gray-600 mb-6">
                Live aurora viewing conditions for Finnish Lapland
              </p>
              
              <TonightCard />
              
              <div className="mt-6 space-y-3">
                <Link
                  href="/finland/northern-lights"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-2xl font-medium hover:bg-blue-700 transition-colors"
                >
                  View Finland Guide
                </Link>
                
                <Link
                  href="/lapland/northern-lights"
                  className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-6 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Explore Lapland Cities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Lapland Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Live Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Transparent Data</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why Trust Our Aurora Forecast?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Transparent Scoring
              </h3>
              <p className="text-gray-600">
                Our simple formula multiplies aurora probability, sky visibility, 
                darkness level, and moon conditions. No black box algorithms.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Public Data Sources
              </h3>
              <p className="text-gray-600">
                We use NOAA space weather data, Open-Meteo weather, and OpenWeather 
                moon data. All sources are publicly available and cited.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Real-Time Updates
              </h3>
              <p className="text-gray-600">
                Data refreshes every 5-30 minutes depending on the source. 
                Always see the most current conditions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Built for aurora hunters on the go. Fast loading, clear information, 
                and easy to use in cold conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}