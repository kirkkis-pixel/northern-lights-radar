import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'What to Wear for Northern Lights - Essential Clothing Guide',
  description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions. Learn essential layering techniques, thermal gear, and winter clothing tips to stay warm and comfortable while chasing the aurora in Lapland.',
  keywords: 'what to wear northern lights, aurora clothing, cold weather gear, Lapland clothing, winter clothing, Arctic clothing, thermal layers, winter gear',
  openGraph: {
    title: 'What to Wear for Northern Lights - Essential Clothing Guide',
    description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions.',
    type: 'article',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/what-to-wear',
    siteName: 'Northern Lights Radar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Wear for Northern Lights - Essential Clothing Guide',
    description: 'Complete clothing guide for northern lights viewing in extreme Arctic conditions.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/what-to-wear',
  },
};

export default function WhatToWearPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Regional Navigation */}
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
        {/* Background Elements */}
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
              Essential clothing guide for northern lights viewing in extreme Arctic conditions
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Dressing for Extreme Cold
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Proper clothing is essential for aurora viewing in Lapland. Temperatures can drop to -30°C (-22°F) or lower, and you'll be standing still for extended periods. The right gear will make the difference between a magical experience and a miserable night.
            </p>
          </div>
        </div>
      </div>

      {/* Layering System */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              The Layering System
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Layering is the key to staying warm in extreme cold. Each layer serves a specific purpose in keeping you comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Base Layer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👕</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Base Layer</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Moisture-wicking thermal underwear that keeps you dry and warm.
              </p>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Merino wool or synthetic thermal tops</li>
                <li>• Thermal leggings or long johns</li>
                <li>• Moisture-wicking socks</li>
                <li>• Avoid cotton (retains moisture)</li>
              </ul>
            </div>

            {/* Mid Layer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧥</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Mid Layer</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Insulating layers that trap body heat and provide warmth.
              </p>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Fleece jacket or sweater</li>
                <li>• Down or synthetic vest</li>
                <li>• Fleece pants or insulated trousers</li>
                <li>• Thick wool socks</li>
              </ul>
            </div>

            {/* Outer Layer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧥</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Outer Layer</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Windproof and waterproof shell that protects from the elements.
              </p>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Windproof jacket</li>
                <li>• Waterproof pants</li>
                <li>• Insulated winter coat</li>
                <li>• Breathable materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Essential Items */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Essential Items
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Don't forget these crucial items for your aurora viewing adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🥾</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Footwear</h3>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Insulated winter boots</li>
                <li>• Thick wool socks</li>
                <li>• Toe warmers</li>
                <li>• Waterproof protection</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Hands & Head</h3>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Insulated gloves or mittens</li>
                <li>• Warm hat or balaclava</li>
                <li>• Hand warmers</li>
                <li>• Face mask or scarf</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Accessories</h3>
              <ul className="space-y-2 text-white/70 flex-grow">
                <li>• Sunglasses (snow blindness)</li>
                <li>• Headlamp with red light</li>
                <li>• Extra batteries</li>
                <li>• Camera protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Guide */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Temperature Guide
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              What to wear based on different temperature ranges in Lapland.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">-10°C to 0°C (14°F to 32°F)</h3>
                <div className="text-2xl font-bold text-blue-400">Mild Cold</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Clothing</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Thermal base layer</li>
                    <li>• Fleece jacket</li>
                    <li>• Windproof outer shell</li>
                    <li>• Insulated boots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Accessories</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Warm hat</li>
                    <li>• Gloves</li>
                    <li>• Thick socks</li>
                    <li>• Scarf</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">-20°C to -10°C (-4°F to 14°F)</h3>
                <div className="text-2xl font-bold text-orange-400">Cold</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Clothing</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Heavy thermal base layer</li>
                    <li>• Down jacket</li>
                    <li>• Insulated pants</li>
                    <li>• Winter boots with insulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Accessories</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Balaclava or face mask</li>
                    <li>• Insulated mittens</li>
                    <li>• Extra thick socks</li>
                    <li>• Hand warmers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Below -20°C (Below -4°F)</h3>
                <div className="text-2xl font-bold text-red-400">Extreme Cold</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Clothing</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Multiple thermal layers</li>
                    <li>• Heavy down parka</li>
                    <li>• Insulated overalls</li>
                    <li>• Extreme cold boots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Accessories</h4>
                  <ul className="space-y-2 text-white/70 flex-grow">
                    <li>• Full face protection</li>
                    <li>• Heavy mittens</li>
                    <li>• Multiple sock layers</li>
                    <li>• Chemical hand warmers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Pro Tips
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Expert advice for staying warm and comfortable during aurora viewing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Before You Go</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Test your gear in cold conditions</li>
                  <li>• Pack extra layers</li>
                  <li>• Bring backup clothing</li>
                  <li>• Check weather forecasts</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">During Viewing</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Keep moving to stay warm</li>
                  <li>• Take breaks in warm places</li>
                  <li>• Stay hydrated</li>
                  <li>• Monitor for frostbite signs</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">What to Avoid</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Cotton clothing (retains moisture)</li>
                  <li>• Tight clothing (reduces circulation)</li>
                  <li>• Alcohol (increases heat loss)</li>
                  <li>• Sweating (leads to hypothermia)</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Emergency Items</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Emergency blanket</li>
                  <li>• Hot water bottle</li>
                  <li>• Extra dry clothing</li>
                  <li>• First aid kit</li>
                </ul>
              </div>
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
            Ready for Your Aurora Adventure?
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Now that you know what to wear, check live conditions and start planning your northern lights adventure.
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
  );
}