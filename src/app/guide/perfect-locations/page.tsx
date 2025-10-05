import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
  description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots with detailed location guides, accessibility information, and viewing tips.',
  keywords: 'aurora locations, northern lights spots, Lapland viewing locations, aurora hunting spots, Finland aurora, Sweden aurora, Norway aurora, best aurora locations, aurora viewing spots',
  openGraph: {
    title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
    description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots.',
    type: 'website',
    url: 'https://northernlightsradar.com/guide/perfect-locations',
    images: [
      {
        url: 'https://northernlightsradar.com/og-perfect-locations.jpg',
        width: 1200,
        height: 630,
        alt: 'Perfect Aurora Locations in Lapland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
    description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots.',
    images: ['https://northernlightsradar.com/og-perfect-locations.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/perfect-locations',
  },
};

export default function PerfectLocationsPage() {
  return (
    <div>
      <RegionalNavigation />
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Top Spots</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Perfect Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Locations
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots.
              </p>
            </div>
          </div>
        </div>

        {/* Top Locations Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Top Aurora Locations</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                These locations offer the best combination of accessibility, dark skies, and aurora visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-red-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Levi Summit</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  At 531 meters above sea level, Levi Summit offers panoramic views with minimal light pollution. 
                  Accessible by gondola or hiking trails.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Levi, Finland</div>
                  <div>⏰ Best: 9 PM - 2 AM</div>
                  <div>🌡️ -15°C to -25°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Abisko National Park</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Famous for its clear skies and minimal light pollution. The Aurora Sky Station offers 
                  world-class viewing facilities and expert guidance.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Abisko, Sweden</div>
                  <div>⏰ Best: 8 PM - 3 AM</div>
                  <div>🌡️ -10°C to -20°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Ready to Explore Perfect Locations?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the best locations, learn how to see the aurora and start planning your adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/how-to-see-the-northern-lights"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Complete Aurora Guide
              </Link>
              <Link 
                href="/guide/photography-tips"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Photography Tips
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