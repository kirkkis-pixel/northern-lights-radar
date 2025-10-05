import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Equipment Checklist - Essential Gear List',
  description: 'Complete equipment checklist for aurora hunting in Lapland. Essential gear for staying warm, comfortable, and capturing stunning northern lights photos. Includes clothing, photography equipment, and safety gear recommendations.',
  keywords: 'aurora equipment, northern lights gear, Lapland equipment, aurora photography gear, winter gear checklist, aurora hunting equipment, essential aurora gear, aurora gear list',
  openGraph: {
    title: 'Aurora Equipment Checklist - Essential Gear List',
    description: 'Complete equipment checklist for aurora hunting in Lapland. Essential gear for staying warm, comfortable, and capturing stunning northern lights photos.',
    type: 'website',
    url: 'https://northernlightsradar.com/guide/equipment-checklist',
    images: [
      {
        url: 'https://northernlightsradar.com/og-equipment-checklist.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Equipment Checklist - Essential Gear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Equipment Checklist - Essential Gear List',
    description: 'Complete equipment checklist for aurora hunting in Lapland. Essential gear for staying warm, comfortable, and capturing stunning northern lights photos.',
    images: ['https://northernlightsradar.com/og-equipment-checklist.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/equipment-checklist',
  },
};

export default function EquipmentChecklistPage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Essential Gear</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora Equipment</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Checklist
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete equipment checklist for aurora hunting in Lapland. Essential gear for staying warm, comfortable, and capturing stunning northern lights photos.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Gear Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Gear</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Don&apos;t forget these crucial items for your aurora viewing adventure.
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
                  <li>• Insulated gloves</li>
                  <li>• Warm hat</li>
                  <li>• Neck gaiter</li>
                  <li>• Hand warmers</li>
                </ul>
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
              Ready with Your Equipment?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you have your equipment checklist, learn what to wear and start planning your aurora adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/what-to-wear"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                What to Wear
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