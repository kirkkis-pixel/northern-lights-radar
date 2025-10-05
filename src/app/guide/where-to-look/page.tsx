import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Where to Look for Northern Lights - Best Viewing Directions & Locations 2024',
  description: 'Discover the best locations and directions to look for northern lights in Lapland. Learn about optimal viewing spots, timing, positioning, and directional tips for successful aurora hunting.',
  keywords: 'where to look northern lights, aurora viewing locations, best spots aurora, northern lights direction, aurora hunting spots, aurora viewing directions, Lapland aurora spots',
  openGraph: {
    title: 'Where to Look for Northern Lights - Best Viewing Directions & Locations 2024',
    description: 'Discover the best locations and directions to look for northern lights in Lapland. Learn about optimal viewing spots and positioning.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/where-to-look',
    images: [
      {
        url: 'https://northernlightsradar.com/og-where-to-look-aurora.jpg',
        width: 1200,
        height: 630,
        alt: 'Where to Look for Northern Lights - Best Viewing Directions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to Look for Northern Lights - Best Viewing Directions & Locations 2024',
    description: 'Discover the best locations and directions to look for northern lights in Lapland. Learn about optimal viewing spots and positioning.',
    images: ['https://northernlightsradar.com/og-where-to-look-aurora.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/where-to-look',
  },
};

export default function WhereToLookPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Viewing Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Where to Look</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  for Aurora
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Discover the best locations and directions to look for northern lights in Lapland. Learn about optimal viewing spots, timing, positioning, and directional tips for successful aurora hunting.
              </p>
            </div>
          </div>
        </div>

        {/* Direction to Look Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Direction to Look</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Understanding where to look in the sky is crucial for spotting aurora
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-300 text-xl">🧭</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Northern Horizon</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Aurora typically appears in the northern sky, but the exact direction depends on your location 
                      and the current geomagnetic conditions. Start by looking north and scan the horizon.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Primary direction: North horizon</li>
                      <li>• Scan from northeast to northwest</li>
                      <li>• Look for faint green glows first</li>
                      <li>• Aurora can appear overhead during strong activity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl">👁️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Scanning Technique</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Use systematic scanning to avoid missing aurora displays. Start low on the horizon 
                      and work your way up, covering the entire northern sky.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Start at horizon level</li>
                      <li>• Move eyes slowly upward</li>
                      <li>• Cover 180° of northern sky</li>
                      <li>• Take breaks to rest your eyes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Viewing Locations Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Best Viewing Locations</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Choose locations with clear northern horizons and minimal light pollution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Elevated Spots</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Hills, mountains, and elevated areas provide unobstructed views of the northern horizon. 
                  Higher elevation also reduces atmospheric interference.
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li>• Mountain viewpoints</li>
                  <li>• Hilltops and ridges</li>
                  <li>• Elevated observation decks</li>
                  <li>• Ski resort summits</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">🌊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Water Bodies</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Lakes, rivers, and coastlines offer excellent aurora viewing opportunities. 
                  Water reflects aurora light, creating stunning double displays.
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li>• Lake shores</li>
                  <li>• River banks</li>
                  <li>• Coastal areas</li>
                  <li>• Frozen lake surfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timing Tips Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Optimal Timing</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                When to look for the best aurora viewing experience
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Peak Viewing Hours</h3>
                  <span className="text-blue-300 text-sm font-medium">9 PM - 2 AM</span>
                </div>
                <p className="text-white/70 font-light">
                  Aurora activity typically peaks between 9 PM and 2 AM local time, when the sky is darkest and geomagnetic activity is often highest.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Seasonal Patterns</h3>
                  <span className="text-green-300 text-sm font-medium">Sep - Mar</span>
                </div>
                <p className="text-white/70 font-light">
                  Best viewing seasons are autumn (September-November) and spring (March-April) when nights are dark but weather is often clearer than mid-winter.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Weather Windows</h3>
                  <span className="text-purple-300 text-sm font-medium">Clear Skies</span>
                </div>
                <p className="text-white/70 font-light">
                  Monitor weather forecasts for clear or partly cloudy conditions. Even thin clouds can obscure aurora displays.
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
              Ready to Find Aurora?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know where to look, learn about ideal conditions and start planning your aurora viewing adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/ideal-conditions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Ideal Conditions
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