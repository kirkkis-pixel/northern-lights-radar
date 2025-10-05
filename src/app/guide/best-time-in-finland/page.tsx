import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Best Time to See Northern Lights in Finland - Complete Seasonal Guide 2024',
  description: 'Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity for optimal northern lights hunting in Finnish Lapland.',
  keywords: 'best time northern lights Finland, Finland aurora season, when to see aurora Finland, Finland aurora calendar, Finnish Lapland aurora, Finland northern lights timing',
  openGraph: {
    title: 'Best Time to See Northern Lights in Finland - Complete Seasonal Guide 2024',
    description: 'Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity for optimal northern lights hunting.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/best-time-in-finland',
    images: [
      {
        url: 'https://northernlightsradar.com/og-finland-aurora-timing.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Time to See Northern Lights in Finland - Seasonal Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to See Northern Lights in Finland - Complete Seasonal Guide 2024',
    description: 'Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity for optimal northern lights hunting.',
    images: ['https://northernlightsradar.com/og-finland-aurora-timing.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/best-time-in-finland',
  },
};

export default function BestTimeInFinlandPage() {
  return (
    <div>
      <RegionalNavigation />
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Finland Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Best Time in</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Finland
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity for optimal northern lights hunting in Finnish Lapland.
              </p>
            </div>
          </div>
        </div>

        {/* Seasonal Overview Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Finnish Aurora Seasons</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Each season offers unique advantages for aurora viewing in Finland
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-orange-300 text-xl">🍂</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Autumn (September-November)</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Excellent aurora viewing with comfortable temperatures and often clear skies. 
                      Finnish Lapland offers pristine wilderness and minimal light pollution.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Temperature: -5°C to +10°C</li>
                      <li>• Daylight: 8-12 hours</li>
                      <li>• Aurora activity: Very high</li>
                      <li>• Weather: Generally stable</li>
                      <li>• Best locations: Rovaniemi, Levi, Saariselkä</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-300 text-xl">❄️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Winter (December-February)</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Peak aurora season with the longest dark nights. Coldest temperatures but 
                      often the most dramatic aurora displays and authentic Arctic winter experience.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Temperature: -15°C to -35°C</li>
                      <li>• Daylight: 0-6 hours</li>
                      <li>• Aurora activity: Extremely high</li>
                      <li>• Weather: Can be challenging</li>
                      <li>• Best locations: Ivalo, Inari, Kilpisjärvi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl">🌸</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Spring (March-May)</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Another excellent season with improving weather and high aurora activity. 
                      The March equinox often brings spectacular displays in Finnish skies.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Temperature: -10°C to +5°C</li>
                      <li>• Daylight: 8-16 hours</li>
                      <li>• Aurora activity: Very high</li>
                      <li>• Weather: Improving stability</li>
                      <li>• Best locations: Kittilä, Sodankylä, Muonio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Monthly Aurora Calendar</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Detailed monthly guide for aurora viewing in Finland
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">📅</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Peak Months</h3>
                <div className="space-y-4 flex-grow">
                  <div className="border-l-2 border-green-400 pl-4">
                    <h4 className="text-green-300 font-medium">September</h4>
                    <p className="text-white/70 text-sm">Equinox activity, comfortable weather, excellent visibility</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="text-blue-300 font-medium">October</h4>
                    <p className="text-white/70 text-sm">Dark nights, stable conditions, high activity</p>
                  </div>
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="text-cyan-300 font-medium">March</h4>
                    <p className="text-white/70 text-sm">Spring equinox, high activity, improving weather</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Excellent Months</h3>
                <div className="space-y-4 flex-grow">
                  <div className="border-l-2 border-orange-400 pl-4">
                    <h4 className="text-orange-300 font-medium">November</h4>
                    <p className="text-white/70 text-sm">Long nights, good activity, winter begins</p>
                  </div>
                  <div className="border-l-2 border-red-400 pl-4">
                    <h4 className="text-red-300 font-medium">December</h4>
                    <p className="text-white/70 text-sm">Darkest month, peak season, Christmas magic</p>
                  </div>
                  <div className="border-l-2 border-pink-400 pl-4">
                    <h4 className="text-pink-300 font-medium">April</h4>
                    <p className="text-white/70 text-sm">Spring conditions, good weather, moderate activity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Finnish Locations Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Top Finnish Aurora Locations</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Best places to see northern lights in Finland
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Rovaniemi</h3>
                  <span className="text-blue-300 text-sm font-medium">Arctic Circle</span>
                </div>
                <p className="text-white/70 font-light">
                  The official home of Santa Claus offers excellent aurora viewing with good infrastructure, 
                  clear skies, and minimal light pollution. Perfect for first-time visitors.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Levi</h3>
                  <span className="text-green-300 text-sm font-medium">Ski Resort</span>
                </div>
                <p className="text-white/70 font-light">
                  Levi Summit provides panoramic views with minimal light pollution. Accessible by gondola 
                  or hiking trails, offering both comfort and wilderness aurora experiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Ivalo</h3>
                  <span className="text-purple-300 text-sm font-medium">Wilderness</span>
                </div>
                <p className="text-white/70 font-light">
                  Located in the heart of Finnish Lapland, Ivalo offers pristine wilderness with 
                  minimal light pollution and excellent aurora viewing opportunities year-round.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Ready to Visit Finland?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the best time to visit Finland, explore Finnish aurora destinations and start planning your Lapland adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/finland/northern-lights"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Finland Aurora Guide
              </Link>
              <Link 
                href="/guide/perfect-locations"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Perfect Locations
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center text-white/40 text-sm font-light">
              <p>Data from NOAA SWPC (OVATION), Open-Meteo. Times in local timezone.</p>
              <p className="mt-2">Real-time aurora forecasts for Lapland destinations.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}