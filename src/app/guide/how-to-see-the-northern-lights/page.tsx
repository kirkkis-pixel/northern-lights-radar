import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to See the Northern Lights - Complete Beginner Guide 2024',
  description: 'Learn how to see the northern lights with our comprehensive beginner guide. Essential tips for first-time aurora viewers, including optimal timing, locations, weather conditions, and what to expect during your aurora hunting adventure in Lapland.',
  keywords: 'how to see northern lights, aurora viewing guide, northern lights tips, aurora borealis guide, beginner aurora guide, northern lights for beginners, Lapland aurora guide, aurora hunting tips',
  openGraph: {
    title: 'How to See the Northern Lights - Complete Beginner Guide 2024',
    description: 'Learn how to see the northern lights with our comprehensive beginner guide. Essential tips for first-time aurora viewers, including optimal timing, locations, and weather conditions.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights',
    images: [
      {
        url: 'https://northernlightsradar.com/og-how-to-see-aurora.jpg',
        width: 1200,
        height: 630,
        alt: 'How to See the Northern Lights - Complete Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to See the Northern Lights - Complete Beginner Guide 2024',
    description: 'Learn how to see the northern lights with our comprehensive beginner guide. Essential tips for first-time aurora viewers.',
    images: ['https://northernlightsradar.com/og-how-to-see-aurora.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights',
  },
};

export default function HowToSeeNorthernLightsPage() {
  return (
    <div>
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Complete Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">How to See the</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Northern Lights
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Learn how to see the northern lights with our comprehensive beginner guide. Essential tips for first-time aurora viewers, including optimal timing, locations, weather conditions, and what to expect during your aurora hunting adventure in Lapland.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Steps Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Steps to See Aurora</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Follow these proven steps to maximize your chances of witnessing the northern lights
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-cyan-300 text-xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Choose the Right Time</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      The best time to see aurora is during the dark months from September to March. 
                      Peak viewing hours are typically between 9 PM and 2 AM local time, when the sky is darkest.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• September-March: Dark nights available</li>
                      <li>• December-February: Longest dark periods</li>
                      <li>• Equinoxes (March/September): Higher activity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Find Dark Skies</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Light pollution is the enemy of aurora viewing. Escape city lights and find locations 
                      with minimal artificial lighting for the best visibility.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Drive 30+ minutes from city centers</li>
                      <li>• Use light pollution maps to find dark spots</li>
                      <li>• Avoid areas with street lights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-purple-300 text-xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Check Weather Conditions</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Clear skies are essential for aurora viewing. Cloud cover can completely obscure 
                      the northern lights, even during high activity periods.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Look for clear or partly cloudy skies</li>
                      <li>• Avoid overcast conditions</li>
                      <li>• Check local weather forecasts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-yellow-300 text-xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Monitor Aurora Activity</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Use aurora forecasts and space weather data to plan your viewing sessions. 
                      Higher Kp index values indicate better chances of seeing aurora.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Kp 3-4: Good aurora activity</li>
                      <li>• Kp 5+: Strong aurora storms</li>
                      <li>• Check NOAA space weather forecasts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">What to Expect</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Understanding what you&apos;ll experience helps set realistic expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">✨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Appearance</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Aurora can appear as faint green glows, dancing curtains, or bright colorful displays. 
                  They often start as subtle movements before intensifying into spectacular shows.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">⏰</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Duration & Timing</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Aurora displays can last from minutes to hours. They often appear in waves, 
                  with periods of activity followed by quiet intervals. Patience is key.
                </p>
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
              Ready to Start Your Aurora Adventure?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know how to see the northern lights, learn what to wear and start planning your perfect aurora viewing experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/what-to-wear"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                What to Wear
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