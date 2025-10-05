import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
  description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots with detailed location guides, accessibility information, and viewing tips.',
  keywords: 'aurora locations, northern lights spots, Lapland viewing locations, aurora hunting spots, Finland aurora, Sweden aurora, Norway aurora, best aurora locations, aurora viewing spots',
  openGraph: {
    title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
    description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland.',
    type: 'article',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/perfect-locations',
    siteName: 'Northern Lights Radar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Aurora Locations in Lapland - Top Viewing Spots',
    description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/perfect-locations',
  },
};

export default function PerfectLocationsPage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Top Spots</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Perfect Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Locations
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Top viewing spots in Lapland for optimal aurora hunting experiences
              </p>
            </div>
          </div>
        </div>

        {/* Finland Locations */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Finnish Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Finland offers some of the most accessible and reliable aurora viewing locations in the Arctic Circle.
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
                  <span className="text-blue-300 text-xl">🌲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Saariselkä Wilderness</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Remote wilderness area with pristine dark skies. Perfect for serious aurora photographers 
                  seeking uninterrupted views.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Saariselkä, Finland</div>
                  <div>⏰ Best: 8 PM - 3 AM</div>
                  <div>🌡️ -20°C to -35°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">🏘️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Rovaniemi Arctic Circle</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  The gateway to Lapland with excellent infrastructure. Multiple viewing spots including 
                  the Arctic Circle marker and Ounasvaara Hill.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Rovaniemi, Finland</div>
                  <div>⏰ Best: 7 PM - 1 AM</div>
                  <div>🌡️ -10°C to -25°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sweden Locations */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Swedish Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Sweden's northern regions offer dramatic landscapes and excellent aurora viewing opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Abisko National Park</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Famous for its clear skies and Aurora Sky Station. The microclimate creates 
                  unusually clear conditions perfect for aurora viewing.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Abisko, Sweden</div>
                  <div>⏰ Best: 8 PM - 2 AM</div>
                  <div>🌡️ -15°C to -30°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🏭</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Kiruna Iron Ore Mine</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Unique industrial setting with excellent aurora views. The mine area provides 
                  elevated positions and clear sightlines to the north.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Kiruna, Sweden</div>
                  <div>⏰ Best: 7 PM - 1 AM</div>
                  <div>🌡️ -12°C to -28°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-indigo-300 text-xl">🏞️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Luleå Archipelago</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Coastal location with stunning aurora reflections on frozen waters. 
                  Accessible by snowmobile or guided tours.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Luleå, Sweden</div>
                  <div>⏰ Best: 6 PM - 12 AM</div>
                  <div>🌡️ -8°C to -20°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Norway Locations */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Norwegian Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Norway's Arctic regions offer some of the most dramatic aurora viewing experiences in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-cyan-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Tromsø Fjords</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  The "Gateway to the Arctic" offers fjord views with aurora dancing over 
                  dramatic mountain silhouettes. Multiple accessible viewing spots.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Tromsø, Norway</div>
                  <div>⏰ Best: 7 PM - 2 AM</div>
                  <div>🌡️ -5°C to -20°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-emerald-300 text-xl">🌊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Alta Northern Lights Cathedral</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Dedicated aurora viewing platform with panoramic views. The cathedral's 
                  architecture creates stunning aurora photography opportunities.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Alta, Norway</div>
                  <div>⏰ Best: 8 PM - 3 AM</div>
                  <div>🌡️ -10°C to -25°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-violet-300 text-xl">❄️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Svalbard Archipelago</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  The northernmost inhabited place on Earth. Experience polar night aurora 
                  viewing in complete darkness for months.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Svalbard, Norway</div>
                  <div>⏰ Best: 24/7 (Polar Night)</div>
                  <div>🌡️ -15°C to -40°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Location Selection Tips</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Choose the perfect aurora viewing location based on your preferences and experience level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Accessibility vs. Wilderness
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Choose accessible locations like Rovaniemi or Tromsø for convenience, 
                      or remote wilderness areas like Saariselkä for pristine dark skies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Weather Considerations
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Coastal areas like Tromsø have milder temperatures but more cloud cover. 
                      Inland locations offer clearer skies but colder conditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Photography Opportunities
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Look for locations with interesting foreground elements like mountains, 
                      lakes, or architectural features to enhance your aurora photos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Light Pollution
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Avoid locations near cities or major roads. Use light pollution maps 
                      to find the darkest skies for optimal aurora visibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Safety & Comfort
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Consider your comfort level with extreme cold and remote locations. 
                      Some spots require experienced guides or specialized equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Seasonal Timing
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Different locations offer varying advantages throughout the season. 
                      Early winter has longer nights, while late winter offers milder weather.
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

