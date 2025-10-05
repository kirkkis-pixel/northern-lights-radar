import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Aurora Safety Tips - Essential Safety Guide for Northern Lights Hunting',
  description: 'Essential safety tips for aurora hunting in Lapland. Learn how to stay safe while chasing the northern lights, including winter safety, emergency preparedness, and responsible aurora viewing practices.',
  keywords: 'aurora safety, northern lights safety, Lapland safety tips, winter safety, aurora hunting safety, emergency preparedness, aurora viewing safety, cold weather safety',
  openGraph: {
    title: 'Aurora Safety Tips - Essential Safety Guide for Northern Lights Hunting',
    description: 'Essential safety tips for aurora hunting in Lapland. Learn how to stay safe while chasing the northern lights, including winter safety and emergency preparedness.',
    type: 'website',
    url: 'https://northernlightsradar.com/guide/safety-tips',
    images: [
      {
        url: 'https://northernlightsradar.com/og-safety-tips.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Safety Tips - Essential Safety Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Safety Tips - Essential Safety Guide for Northern Lights Hunting',
    description: 'Essential safety tips for aurora hunting in Lapland. Learn how to stay safe while chasing the northern lights, including winter safety and emergency preparedness.',
    images: ['https://northernlightsradar.com/og-safety-tips.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/safety-tips',
  },
};

export default function SafetyTipsPage() {
  return (
    <div>
      <RegionalNavigation />
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Safety Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora Safety</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Tips
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Essential safety tips for aurora hunting in Lapland. Learn how to stay safe while chasing the northern lights, including winter safety and emergency preparedness.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Essentials Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Safety Essentials</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                These safety measures are crucial for a successful and safe aurora viewing experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-red-300 text-xl">🧥</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Dress for Success</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Layer clothing for warmth</li>
                  <li>• Wear waterproof outer layer</li>
                  <li>• Protect extremities</li>
                  <li>• Bring extra layers</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">📱</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Stay Connected</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Fully charged phone</li>
                  <li>• Portable charger</li>
                  <li>• Emergency contacts</li>
                  <li>• Share your location</li>
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
              Ready to Hunt Safely?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the safety essentials, learn what to wear and start planning your aurora adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/what-to-wear"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                What to Wear
              </Link>
              <Link 
                href="/guide/equipment-checklist"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Equipment Checklist
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