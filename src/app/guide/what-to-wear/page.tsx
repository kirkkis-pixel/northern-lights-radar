import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'What to Wear for Northern Lights - Essential Arctic Clothing Guide 2024',
  description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions. Learn essential layering techniques, thermal gear, and winter clothing tips to stay warm and comfortable while chasing the aurora in Lapland.',
  keywords: 'what to wear northern lights, aurora clothing, cold weather gear, Lapland clothing, winter clothing, Arctic clothing, thermal layers, winter gear, aurora hunting clothes',
  openGraph: {
    title: 'What to Wear for Northern Lights - Essential Arctic Clothing Guide 2024',
    description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions. Learn essential layering techniques and thermal gear.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/what-to-wear',
    images: [
      {
        url: 'https://northernlightsradar.com/og-what-to-wear-aurora.jpg',
        width: 1200,
        height: 630,
        alt: 'What to Wear for Northern Lights - Arctic Clothing Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Wear for Northern Lights - Essential Arctic Clothing Guide 2024',
    description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions. Learn essential layering techniques and thermal gear.',
    images: ['https://northernlightsradar.com/og-what-to-wear-aurora.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/what-to-wear',
  },
};

export default function WhatToWearPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Essential Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">What to</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Wear
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete clothing guide for northern lights viewing in extreme Arctic conditions. Learn essential layering techniques, thermal gear, and winter clothing tips to stay warm and comfortable while chasing the aurora in Lapland.
              </p>
            </div>
          </div>
        </div>

        {/* Layering System Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">The Layering System</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Master the art of layering to stay warm and comfortable in Arctic conditions
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">🔥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Base Layer (Thermal)</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Your foundation layer that wicks moisture away from your skin. Choose merino wool 
                      or synthetic materials that keep you dry and warm.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Merino wool long underwear (top & bottom)</li>
                      <li>• Moisture-wicking synthetic alternatives</li>
                      <li>• Avoid cotton - it retains moisture</li>
                      <li>• Choose snug but not tight fit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-300 text-xl">🧥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Insulation Layer</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      The middle layer provides warmth by trapping air. Fleece, down, or synthetic 
                      insulation work best for retaining body heat.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Fleece jacket or pullover</li>
                      <li>• Down or synthetic insulated jacket</li>
                      <li>• Wool sweater as alternative</li>
                      <li>• Adjust thickness based on temperature</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl">🛡️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Outer Shell</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Your protective layer against wind, snow, and moisture. A good shell keeps 
                      you dry and blocks wind chill effectively.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Waterproof and windproof jacket</li>
                      <li>• Breathable materials (Gore-Tex, etc.)</li>
                      <li>• Hood for extra protection</li>
                      <li>• Adjustable cuffs and hem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Accessories Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Accessories</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Don&apos;t forget these crucial accessories for complete protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">🧤</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Hands & Head</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Insulated gloves or mittens</li>
                  <li>• Liner gloves for dexterity</li>
                  <li>• Warm hat or balaclava</li>
                  <li>• Neck gaiter or scarf</li>
                  <li>• Hand warmers for extreme cold</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🥾</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Feet</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Insulated winter boots</li>
                  <li>• Thick wool socks</li>
                  <li>• Liner socks for extra warmth</li>
                  <li>• Toe warmers if needed</li>
                  <li>• Waterproof protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Guide Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Temperature-Specific Recommendations</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Adjust your clothing based on expected temperatures
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">-10°C to -20°C (14°F to -4°F)</h3>
                  <span className="text-blue-300 text-sm font-medium">Moderate Cold</span>
                </div>
                <p className="text-white/70 font-light">
                  Standard layering system with medium-weight insulation. Add extra base layers if needed.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">-20°C to -30°C (-4°F to -22°F)</h3>
                  <span className="text-orange-300 text-sm font-medium">Severe Cold</span>
                </div>
                <p className="text-white/70 font-light">
                  Heavy insulation layers, extra base layers, and hand/toe warmers recommended.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Below -30°C (Below -22°F)</h3>
                  <span className="text-red-300 text-sm font-medium">Extreme Cold</span>
                </div>
                <p className="text-white/70 font-light">
                  Maximum insulation, multiple layers, chemical warmers, and limit exposure time.
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
              Ready to Stay Warm?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know what to wear, check out our equipment checklist and start planning your aurora adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/equipment-checklist"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Equipment Checklist
              </Link>
              <Link 
                href="/guide/safety-tips"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Safety Tips
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