import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perfect Aurora Locations in Lapland - Northern Lights Radar',
  description: 'Discover the best aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. Expert recommendations for optimal aurora hunting spots.',
  keywords: 'aurora locations, northern lights spots, Lapland viewing locations, aurora hunting spots, Finland aurora, Sweden aurora, Norway aurora',
};

export default function PerfectLocationsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        <RegionalNavigation />
        
        {/* Hero Section */}
        <div className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Perfect Locations</span>
              </div>
              <h1 className="text-5xl font-thin text-white mb-8">
                Perfect Aurora Locations in Lapland
              </h1>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Discover the most spectacular aurora viewing locations across Finnish, Swedish, and Norwegian Lapland. 
                From remote wilderness areas to accessible viewing platforms, find your perfect aurora hunting spot.
              </p>
            </div>
          </div>
        </div>

        {/* Finland Locations */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Finnish Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Finland offers some of the most accessible and reliable aurora viewing locations in the Arctic Circle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-red-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Levi Summit</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  At 531 meters above sea level, Levi Summit offers panoramic views with minimal light pollution. 
                  Accessible by gondola or hiking trails.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Levi, Finland</div>
                  <div>⏰ Best: 9 PM - 2 AM</div>
                  <div>🌡️ -15°C to -25°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">🌲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Saariselkä Wilderness</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Remote wilderness area with pristine dark skies. Perfect for serious aurora photographers 
                  seeking uninterrupted views.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Saariselkä, Finland</div>
                  <div>⏰ Best: 8 PM - 3 AM</div>
                  <div>🌡️ -20°C to -35°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">🏘️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Rovaniemi Arctic Circle</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
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
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Swedish Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Sweden's northern regions offer dramatic landscapes and excellent aurora viewing opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Abisko National Park</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Famous for its clear skies and Aurora Sky Station. The microclimate creates 
                  unusually clear conditions perfect for aurora viewing.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Abisko, Sweden</div>
                  <div>⏰ Best: 8 PM - 2 AM</div>
                  <div>🌡️ -15°C to -30°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🏭</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Kiruna Iron Ore Mine</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Unique industrial setting with excellent aurora views. The mine area provides 
                  elevated positions and clear sightlines to the north.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Kiruna, Sweden</div>
                  <div>⏰ Best: 7 PM - 1 AM</div>
                  <div>🌡️ -12°C to -28°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-indigo-300 text-xl">🏞️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Luleå Archipelago</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
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
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Norwegian Lapland</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Norway's Arctic regions offer some of the most dramatic aurora viewing experiences in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-cyan-300 text-xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Tromsø Fjords</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  The "Gateway to the Arctic" offers fjord views with aurora dancing over 
                  dramatic mountain silhouettes. Multiple accessible viewing spots.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Tromsø, Norway</div>
                  <div>⏰ Best: 7 PM - 2 AM</div>
                  <div>🌡️ -5°C to -20°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-emerald-300 text-xl">🌊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Alta Northern Lights Cathedral</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Dedicated aurora viewing platform with panoramic views. The cathedral's 
                  architecture creates stunning aurora photography opportunities.
                </p>
                <div className="text-sm text-white/50">
                  <div>📍 Alta, Norway</div>
                  <div>⏰ Best: 8 PM - 3 AM</div>
                  <div>🌡️ -10°C to -25°C</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-violet-300 text-xl">❄️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Svalbard Archipelago</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
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
          <div className="max-w-6xl mx-auto px-12">
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
            <div className="text-center mt-16">
              <Link
                href="/guide/how-to-see-the-northern-lights"
                className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
              >
                Learn How to See the Aurora
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





