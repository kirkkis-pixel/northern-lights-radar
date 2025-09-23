import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing',
  description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland.',
  keywords: 'ideal conditions northern lights, perfect aurora weather, best aurora conditions, northern lights timing, aurora viewing conditions',
  openGraph: {
    title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing',
    description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing',
    description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/ideal-conditions',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing',
  description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland.',
  author: {
    '@type': 'Organization',
    name: 'Northern Lights Radar'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Northern Lights Radar'
  },
  datePublished: '2024-01-01',
  dateModified: '2024-01-01'
};

export default function IdealConditionsPage() {
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
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16">
            <div className="mb-24">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Ideal Conditions</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Ideal Conditions for</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Northern Lights
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Perfect weather, timing, and space weather conditions for optimal aurora viewing
              </p>
            </div>
          </div>
        </div>

        {/* Weather Conditions */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Weather</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Perfect Weather Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Optimal weather patterns for clear aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">☁️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Clear Skies</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Cloud cover is the most critical factor - you need completely clear skies
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>0-20% cloud cover ideal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>High pressure systems preferred</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Check weather forecasts hourly</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌡️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Temperature</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Cold, stable temperatures often indicate clear atmospheric conditions
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Below -10°C often clearer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Stable temperature patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Avoid temperature inversions</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">💨</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Wind Conditions</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Calm winds help maintain clear skies and comfortable viewing
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Light winds (0-15 km/h) ideal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Strong winds can bring clouds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Check wind direction forecasts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timing Conditions */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Timing</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Perfect Timing
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Optimal timing for aurora viewing throughout the year and night
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Time of Night</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Peak Hours: 10 PM - 2 AM</span>
                        <p className="text-white/60 text-sm mt-1">Most active aurora periods during the night</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Earlier in Winter</span>
                        <p className="text-white/60 text-sm mt-1">Aurora can appear as early as 6 PM in deep winter</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Later in Spring/Fall</span>
                        <p className="text-white/60 text-sm mt-1">May not appear until 11 PM or later</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Seasonal Timing</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">September - March</span>
                        <p className="text-white/60 text-sm mt-1">Best months for aurora viewing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Equinoxes (Sep/Mar)</span>
                        <p className="text-white/60 text-sm mt-1">Higher geomagnetic activity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Winter Solstice (Dec)</span>
                        <p className="text-white/60 text-sm mt-1">Longest nights, most viewing time</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Weather */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Space Weather Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Solar activity and geomagnetic conditions that affect aurora visibility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Kp Index</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Geomagnetic activity level that determines aurora visibility
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Kp 3-4: Good visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Kp 5+: Excellent visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Kp 0-2: Limited visibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌪️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Solar Wind</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  High-speed solar wind increases aurora activity
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>400+ km/s: Good activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>600+ km/s: Excellent activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Check solar wind speed</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🧲</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Bz Component</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Magnetic field orientation affects aurora intensity
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Negative Bz: Favorable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Strong negative: Best</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Positive Bz: Less favorable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Moon Phase */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Moon Phase</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Moon Phase Impact
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                How the moon affects aurora visibility and viewing conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌑</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">New Moon</h3>
                <p className="text-white/70 font-light text-sm mb-4">
                  Perfect conditions - no moonlight interference
                </p>
                <div className="text-cyan-300 text-xs font-light">
                  Best Visibility
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌗</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Crescent Moon</h3>
                <p className="text-white/70 font-light text-sm mb-4">
                  Minimal interference - good viewing conditions
                </p>
                <div className="text-cyan-300 text-xs font-light">
                  Very Good
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌓</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Half Moon</h3>
                <p className="text-white/70 font-light text-sm mb-4">
                  Moderate interference - still viewable
                </p>
                <div className="text-cyan-300 text-xs font-light">
                  Good
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌕</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Full Moon</h3>
                <p className="text-white/70 font-light text-sm mb-4">
                  Significant interference - reduces visibility
                </p>
                <div className="text-cyan-300 text-xs font-light">
                  Challenging
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center text-white/40 text-sm font-light">
              <p>Data from NOAA SWPC (OVATION), SMHI, MET Norway. Times in local timezone.</p>
              <p className="mt-2">Scores are indicative and depend on weather & darkness conditions.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
