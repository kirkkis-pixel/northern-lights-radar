import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Myths Debunked - Separating Fact from Fiction',
  description: 'Separate fact from fiction about the northern lights. Learn the truth behind common aurora myths and misconceptions with scientific explanations and expert insights.',
  keywords: 'aurora myths, northern lights myths, aurora facts, northern lights facts, aurora misconceptions, aurora science, aurora debunked, northern lights truth',
  openGraph: {
    title: 'Aurora Myths Debunked - Separating Fact from Fiction',
    description: 'Separate fact from fiction about the northern lights. Learn the truth behind common aurora myths and misconceptions with scientific explanations and expert insights.',
    type: 'website',
    url: 'https://northernlightsradar.com/guide/aurora-myths',
    images: [
      {
        url: 'https://northernlightsradar.com/og-aurora-myths.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Myths Debunked - Northern Lights Facts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Myths Debunked - Separating Fact from Fiction',
    description: 'Separate fact from fiction about the northern lights. Learn the truth behind common aurora myths and misconceptions with scientific explanations and expert insights.',
    images: ['https://northernlightsradar.com/og-aurora-myths.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/aurora-myths',
  },
};

export default function AuroraMythsPage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Myths Debunked</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Myths
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Separate fact from fiction about the northern lights. Learn the truth behind common aurora myths and misconceptions with scientific explanations and expert insights.
              </p>
            </div>
          </div>
        </div>

        {/* Common Myths Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Common Aurora Myths</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Let&apos;s debunk the most common misconceptions about the northern lights
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">❌</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-light text-white mb-4">Myth: You can hear the aurora</h3>
                    <div className="bg-red-500/10 rounded-xl p-6 mb-6 border border-red-400/20">
                      <p className="text-red-300 font-light leading-relaxed">
                        <strong>Reality:</strong> The aurora occurs at altitudes of 80-400 kilometers above Earth&apos;s surface, 
                        far beyond the range of human hearing. Any sounds you might hear are likely from other sources.
                      </p>
                    </div>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      While some people claim to hear crackling or hissing sounds during aurora displays, 
                      these are typically caused by nearby electrical equipment, wind, or other environmental factors. 
                      The aurora itself is completely silent.
                    </p>
                  </div>
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
              Ready to See the Real Aurora?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the facts, learn how to see the real aurora and start planning your adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/how-to-see-the-northern-lights"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Complete Aurora Guide
              </Link>
              <Link 
                href="/guide/ideal-conditions"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Ideal Conditions
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