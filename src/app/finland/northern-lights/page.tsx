import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import SSRCityCard from '@/components/SSRCityCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Finland - Finnish Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Finnish Lapland. Live conditions, viewing spots, and expert tips for Rovaniemi, Ivalo, and Kilpisjärvi.',
  keywords: 'northern lights Finland, Finnish Lapland aurora, Rovaniemi northern lights, Ivalo aurora, Kilpisjärvi northern lights',
  openGraph: {
    title: 'Northern Lights in Finland - Finnish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Finnish Lapland with live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Finland - Finnish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Finnish Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/finland/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Northern Lights in Finland - Finnish Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Finnish Lapland with live conditions and expert tips.',
  url: 'https://northernlightsradar.com/finland/northern-lights',
  mainEntity: {
    '@type': 'Place',
    name: 'Finnish Lapland',
    description: 'Northern region of Finland known for excellent aurora viewing',
    containedInPlace: {
      '@type': 'Country',
      name: 'Finland'
    }
  }
};

const cities = [
  { 
    slug: 'rovaniemi', 
    name: 'Rovaniemi', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 66.5039,
    longitude: 25.7294,
    timezone: 'Europe/Helsinki',
    description: 'Capital of Lapland and gateway to the Arctic Circle',
    viewingSpots: ['Arktikum Science Centre', 'Santa Claus Village', 'Ounasvaara Hill', 'Rovaniemi City Center']
  },
  { 
    slug: 'ivalo', 
    name: 'Ivalo', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 68.6592,
    longitude: 27.5389,
    timezone: 'Europe/Helsinki',
    description: 'Northernmost airport in Finland, excellent for aurora viewing',
    viewingSpots: ['Ivalo Airport area', 'Lake Inari shores', 'Saariselkä village', 'Urho Kekkonen National Park']
  },
  { 
    slug: 'inari', 
    name: 'Inari', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 68.9056,
    longitude: 27.0281,
    timezone: 'Europe/Helsinki',
    description: 'Cultural heart of Sámi land with pristine wilderness',
    viewingSpots: ['Lake Inari shores', 'Siida Museum area', 'Inari village center', 'Pielpajärvi Wilderness Church']
  },
  { 
    slug: 'levi', 
    name: 'Levi', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 67.8044,
    longitude: 24.8089,
    timezone: 'Europe/Helsinki',
    description: 'Popular ski resort with excellent aurora viewing opportunities',
    viewingSpots: ['Levi Fell summit', 'Levi Ski Resort', 'Kittilä village', 'Pallas-Yllästunturi National Park']
  },
  { 
    slug: 'saariselka', 
    name: 'Saariselkä', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 68.4167,
    longitude: 27.4167,
    timezone: 'Europe/Helsinki',
    description: 'Mountain village with clear skies and minimal light pollution',
    viewingSpots: ['Saariselkä village', 'Kaunispää fell', 'Iisakkipää fell', 'Urho Kekkonen National Park']
  },
  { 
    slug: 'yllas', 
    name: 'Ylläs', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 67.5667,
    longitude: 24.2333,
    timezone: 'Europe/Helsinki',
    description: 'Seven fells offering panoramic views of the northern sky',
    viewingSpots: ['Ylläs fell', 'Äkäslompolo village', 'Pallas-Yllästunturi National Park', 'Kittilä area']
  },
  { 
    slug: 'kilpisjarvi', 
    name: 'Kilpisjärvi', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 69.0500,
    longitude: 20.8000,
    timezone: 'Europe/Helsinki',
    description: 'Northernmost village in Finland, closest to the auroral oval',
    viewingSpots: ['Kilpisjärvi village', 'Saana fell', 'Malla Strict Nature Reserve', 'Three-country border area']
  },
  { 
    slug: 'kemi', 
    name: 'Kemi', 
    region: 'Lapland',
    country: 'Finland',
    latitude: 65.7361,
    longitude: 24.5639,
    timezone: 'Europe/Helsinki',
    description: 'Coastal city with icebreaker port and gateway to Lapland',
    viewingSpots: ['Kemi city center', 'Bothnian Bay shoreline', 'Kemi SnowCastle area', 'Kemi railway station']
  }
];

export default function FinlandPage() {
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
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-20 md:pt-40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16">
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Finnish Lapland</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights in</div>
                <div className="text-blue-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Finland
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Experience the magic of Finnish Lapland with world-class aurora viewing destinations
              </p>
            </div>
          </div>
        </div>

        {/* Welcome to Finnish Lapland - Full Width Image */}
        <div className="py-12 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-8xl mx-auto px-12">
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Aurora Borealis dancing over Finnish Lapland&apos;s pristine winter landscape with snow-covered fells and frozen lakes"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-2xl px-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                              Welcome to Finnish Lapland
                            </h2>
                  <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                    The northernmost region of Finland, spanning across the Arctic Circle and offering some of the world&apos;s most spectacular aurora viewing opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* When to See Aurora */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-6">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Seasonal Guide</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                When to See the Aurora
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Complete seasonal breakdown of the best times to visit Finnish Lapland for aurora viewing
              </p>
            </div>
            
            {/* Monthly Visibility Chart */}
            <div className="mb-16 max-w-2xl mx-auto">
              {/* Chart Container */}
              <div className="relative h-80 mb-6">
                {/* Chart Bars */}
                <div className="h-full flex items-end justify-between gap-1">
                  {/* January */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                    <span className="text-xs text-white/70">Jan</span>
                  </div>
                  
                  {/* February */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-36 mb-2"></div>
                    <span className="text-xs text-white/70">Feb</span>
                  </div>
                  
                  {/* March - Peak */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                    <span className="text-xs text-white/70">Mar</span>
                  </div>
                  
                  {/* April */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-44 mb-2"></div>
                    <span className="text-xs text-white/70">Apr</span>
                  </div>
                  
                  {/* May - Not Visible */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gray-600 rounded-t h-12 mb-2"></div>
                    <span className="text-xs text-white/70">May</span>
                  </div>
                  
                  {/* June - Not Visible */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gray-600 rounded-t h-8 mb-2"></div>
                    <span className="text-xs text-white/70">Jun</span>
                  </div>
                  
                  {/* July - Not Visible */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gray-600 rounded-t h-8 mb-2"></div>
                    <span className="text-xs text-white/70">Jul</span>
                  </div>
                  
                  {/* August - Not Visible */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gray-600 rounded-t h-10 mb-2"></div>
                    <span className="text-xs text-white/70">Aug</span>
                  </div>
                  
                  {/* September - Peak */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                    <span className="text-xs text-white/70">Sep</span>
                  </div>
                  
                  {/* October - Peak */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                    <span className="text-xs text-white/70">Oct</span>
                  </div>
                  
                  {/* November */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                    <span className="text-xs text-white/70">Nov</span>
                  </div>
                  
                  {/* December */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                    <span className="text-xs text-white/70">Dec</span>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-t from-green-600 to-green-400 rounded"></div>
                  <span className="text-sm text-white/70">Peak</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded"></div>
                  <span className="text-sm text-white/70">Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600 rounded"></div>
                  <span className="text-sm text-white/70">Not Visible</span>
                </div>
              </div>
            </div>
            
            {/* Peak Times - Compact */}
            <div className="text-center">
              <div className="inline-flex items-center gap-8 text-sm text-white/60">
                <span><span className="text-cyan-300 font-medium">Peak Hours:</span> 10 PM - 2 AM</span>
                <span><span className="text-green-300 font-medium">Good Window:</span> 8 PM - 4 AM</span>
                <span><span className="text-purple-300 font-medium">Polar Night:</span> Dec - Feb</span>
              </div>
            </div>
          </div>
        </div>

        {/* City Cards */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-8xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Finnish Cities</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-6">
                Live Aurora Conditions in Finnish Cities
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Real-time aurora data, weather conditions, and viewing information for all major Finnish Lapland destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               {cities.map((city) => (
                 <SSRCityCard key={city.slug} city={city} />
               ))}
            </div>
          </div>
        </div>

        {/* Why Finland */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Finland</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Why Finnish Lapland is Perfect for Aurora Viewing
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Finland offers unique advantages that make it one of the world&apos;s premier aurora destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Pristine Wilderness</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland is home to vast wilderness areas with minimal light pollution, offering some of the darkest skies in Europe for optimal aurora viewing.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Fell Landscapes</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  The unique fell landscapes of Finnish Lapland provide elevated viewing points and dramatic backdrops for aurora photography, with clear sightlines to the northern horizon.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Stable Climate</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finland&apos;s continental climate provides more stable weather patterns compared to coastal areas, resulting in clearer skies and better aurora viewing conditions.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Infrastructure</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  World-class aurora tourism infrastructure including glass igloos, aurora hotels, and specialized viewing platforms designed specifically for northern lights enthusiasts.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Optimal Latitude</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland cities are positioned at the ideal latitude (66-69°N) within the auroral oval, providing the highest probability of seeing the northern lights.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Polar Night</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  During winter months, Finnish Lapland experiences polar night with up to 24 hours of darkness, maximizing aurora viewing opportunities when the sun doesn't rise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Space Weather */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Current Space Weather in Finnish Lapland
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Monitor real-time space weather data that affects aurora visibility across Finnish Lapland
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SpaceWeatherWidget />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Frequently Asked Questions</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-6">
                Finland Northern Lights FAQ
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about seeing the aurora borealis in Finnish Lapland
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-4">
                  When is the best time to see the northern lights in Finland?
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  The optimal time for aurora viewing in Finland is from late September to early April, 
                  with peak season from December to March. Finnish Lapland offers some of the world&apos;s 
                  best aurora viewing conditions, particularly in Rovaniemi and Ivalo. The best viewing 
                  hours are typically between 9 PM and 1 AM, when the sky is darkest and aurora activity 
                  is most likely to occur.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-4">
                  Why is Finnish Lapland considered one of the best places for aurora viewing?
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland is renowned for its pristine wilderness with minimal light pollution, 
                  stable continental climate that provides clearer skies, and optimal latitude positioning 
                  within the auroral oval. The region&apos;s unique fell landscapes provide elevated viewing 
                  points and dramatic backdrops for aurora photography. Additionally, Finland offers 
                  world-class aurora tourism infrastructure including glass igloos and specialized viewing platforms.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-4">
                  What makes Finnish Lapland special for aurora photography?
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland offers diverse landscapes perfect for aurora photography, including 
                  frozen lakes, snow-covered forests, and dramatic fell backdrops. The region&apos;s 
                  minimal light pollution and clear atmospheric conditions create ideal conditions for 
                  capturing vibrant aurora colors. Popular photography locations include Lake Inari, 
                  the fells around Rovaniemi, and the wilderness areas around Ivalo. The long winter 
                  nights provide extended shooting opportunities.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-4">
                  How do I get to the best aurora viewing locations in Finland?
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Most aurora viewing locations in Finnish Lapland are accessible by car or organized tours. 
                  Rovaniemi serves as the main gateway with an international airport and connections to 
                  Helsinki. From Rovaniemi, you can drive to Ivalo (4 hours) or take domestic flights. 
                  Many hotels offer aurora packages with transportation to prime viewing spots. 
                  For remote locations like the fells, guided tours are recommended, especially during 
                  winter months when road conditions can be challenging.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-4">
                  What should I pack for aurora viewing in Finnish Lapland?
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Essential items for Finnish Lapland aurora viewing include: 1) Thermal base layers and 
                  insulated outerwear for temperatures as low as -30°C (-22°F), 2) Warm, waterproof boots 
                  with good traction for icy conditions, 3) Hand and foot warmers for extended outdoor stays, 
                  4) A headlamp with red light mode to preserve night vision, 5) Camera equipment with 
                  extra batteries (they drain faster in cold), 6) A thermos with hot drinks, and 7) 
                  A portable chair or mat for comfortable waiting. Many tour operators provide warm 
                  overalls and boots for rent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 py-16">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center text-white/40 text-sm font-light">
              <p>Data from NOAA SWPC (OVATION), FMI, Open-Meteo. Times in local timezone.</p>
              <p className="mt-2">Scores are indicative and depend on weather & darkness.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}