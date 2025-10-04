import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Best Time to Visit Lapland for Northern Lights - Seasonal Guide',
  description: 'Discover the best months, weeks, and times to visit Lapland for northern lights viewing. Complete seasonal guide with optimal timing recommendations.',
  keywords: 'best time visit Lapland, northern lights season, aurora timing, Lapland travel season, northern lights calendar',
  openGraph: {
    title: 'Best Time to Visit Lapland for Northern Lights - Seasonal Guide',
    description: 'Discover the best months, weeks, and times to visit Lapland for northern lights viewing.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Visit Lapland for Northern Lights - Seasonal Guide',
    description: 'Discover the best months, weeks, and times to visit Lapland for northern lights viewing.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/best-time-to-visit',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Time to Visit Lapland for Northern Lights - Seasonal Guide',
  description: 'Discover the best months, weeks, and times to visit Lapland for northern lights viewing with complete seasonal guide.',
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

export default function BestTimeToVisitPage() {
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
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Seasonal Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Best Time to Visit</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Lapland
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete seasonal guide for optimal northern lights viewing in Lapland
              </p>
            </div>
          </div>
        </div>

        {/* Peak Season */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Peak Season</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Peak Aurora Season
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                The best months for northern lights viewing in Lapland
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">❄️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">December - February</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Peak winter months with the longest nights and highest aurora activity
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Up to 24 hours of darkness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Highest aurora probability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Coldest temperatures</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">March - April</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Spring equinox period with excellent aurora activity and milder weather
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Equinox geomagnetic activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Warmer temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Longer daylight hours</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🍂</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">September - November</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Autumn equinox with good aurora activity and comfortable conditions
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Autumn equinox activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Milder weather</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Less crowded</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Monthly Guide</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Month-by-Month Guide
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Detailed breakdown of each month for aurora viewing
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">September</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Good</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Autumn equinox brings increased geomagnetic activity. Nights are getting longer, temperatures are mild.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 12-14 hours of darkness</li>
                    <li>• Temperature: -5°C to +10°C</li>
                    <li>• Good for photography</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">October</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Very Good</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Excellent month with long nights and good aurora activity. Snow starts appearing in higher areas.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 14-16 hours of darkness</li>
                    <li>• Temperature: -10°C to +5°C</li>
                    <li>• Snow-covered landscapes</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">November</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Excellent</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Peak season begins. Long nights, snow-covered landscapes, and excellent aurora viewing conditions.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 16-18 hours of darkness</li>
                    <li>• Temperature: -15°C to 0°C</li>
                    <li>• Winter wonderland scenery</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">December</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Excellent</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Winter solstice month with maximum darkness. Perfect for aurora viewing but coldest temperatures.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 18-24 hours of darkness</li>
                    <li>• Temperature: -20°C to -5°C</li>
                    <li>• Polar night in northern areas</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">January</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Excellent</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Peak winter month with excellent aurora activity. Coldest month but best for aurora photography.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 18-24 hours of darkness</li>
                    <li>• Temperature: -25°C to -10°C</li>
                    <li>• Crisp, clear conditions</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">February</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Very Good</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Still excellent aurora viewing with slightly longer days. Great for winter activities combined with aurora hunting.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 16-20 hours of darkness</li>
                    <li>• Temperature: -20°C to -5°C</li>
                    <li>• Perfect for winter sports</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">March</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Excellent</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Spring equinox brings peak geomagnetic activity. Longer days but still excellent aurora viewing.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 14-18 hours of darkness</li>
                    <li>• Temperature: -15°C to 0°C</li>
                    <li>• Equinox geomagnetic activity</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">April</h3>
                  <div className="text-cyan-300 text-sm font-light mb-4">Aurora Activity: Good</div>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    Last good month for aurora viewing. Days are getting longer but aurora activity is still good.
                  </p>
                  <ul className="text-white/60 font-light space-y-2 text-sm">
                    <li>• 12-16 hours of darkness</li>
                    <li>• Temperature: -10°C to +5°C</li>
                    <li>• Spring thaw begins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Weeks */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Best Weeks</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Best Weeks to Visit
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Specific weeks with the highest aurora activity and best viewing conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🎄</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Christmas Week</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  December 20-27: Peak winter darkness with excellent aurora activity
                </p>
                <div className="text-cyan-300 text-sm font-light">
                  Highest Activity
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">New Moon Weeks</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Any week with new moon for darkest skies and best aurora visibility
                </p>
                <div className="text-cyan-300 text-sm font-light">
                  Best Visibility
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Equinox Weeks</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  March 15-25 and September 15-25: Peak geomagnetic activity periods
                </p>
                <div className="text-cyan-300 text-sm font-light">
                  Peak Activity
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
