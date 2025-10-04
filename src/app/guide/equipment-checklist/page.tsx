import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Equipment Checklist - Northern Lights Radar',
  description: 'Complete equipment checklist for aurora hunting in Lapland. Essential gear for staying warm, comfortable, and capturing stunning northern lights photos.',
  keywords: 'aurora equipment, northern lights gear, Lapland equipment, aurora photography gear, winter gear checklist, aurora hunting equipment',
};

export default function EquipmentChecklistPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Equipment Checklist</span>
              </div>
              <h1 className="text-5xl font-thin text-white mb-8">
                Aurora Equipment Checklist
              </h1>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Essential equipment for successful aurora hunting in Lapland. From clothing to photography gear, 
                ensure you're prepared for extreme Arctic conditions and unforgettable aurora experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Clothing Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Clothing</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Layering is key for staying warm in Arctic temperatures. Here's your complete clothing checklist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">👕</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Base Layers</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• Merino wool thermal underwear (top & bottom)</li>
                  <li>• Moisture-wicking long-sleeve shirt</li>
                  <li>• Thermal socks (2-3 pairs)</li>
                  <li>• Liner gloves</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">🧥</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Insulation Layers</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• Fleece jacket or wool sweater</li>
                  <li>• Down or synthetic insulated jacket</li>
                  <li>• Insulated pants or snow pants</li>
                  <li>• Thick wool socks</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Outer Shell</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• Waterproof/windproof jacket</li>
                  <li>• Waterproof/windproof pants</li>
                  <li>• Insulated winter boots</li>
                  <li>• Warm hat and neck gaiter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Equipment */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Photography Equipment</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Capture stunning aurora photos with the right camera gear and accessories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-red-300 text-xl">📷</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Camera Essentials</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• DSLR or mirrorless camera with manual controls</li>
                    <li>• Wide-angle lens (14-24mm recommended)</li>
                    <li>• Extra camera batteries (cold drains them quickly)</li>
                    <li>• Memory cards (64GB+ recommended)</li>
                    <li>• Camera rain cover or plastic bag</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-yellow-300 text-xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Support & Accessories</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Sturdy tripod (carbon fiber recommended)</li>
                    <li>• Remote shutter release or intervalometer</li>
                    <li>• Headlamp with red light mode</li>
                    <li>• Lens cleaning cloths</li>
                    <li>• Hand warmers for camera grip</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-indigo-300 text-xl">⚙️</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Camera Settings</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Manual mode (M)</li>
                    <li>• Aperture: f/2.8 or wider</li>
                    <li>• ISO: 1600-6400 (depending on camera)</li>
                    <li>• Shutter speed: 5-30 seconds</li>
                    <li>• Focus: Manual infinity focus</li>
                    <li>• Image format: RAW for post-processing</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-emerald-300 text-xl">📱</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Smartphone Photography</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Smartphone with manual camera app</li>
                    <li>• Portable tripod or phone mount</li>
                    <li>• External battery pack</li>
                    <li>• Lens attachments (optional)</li>
                    <li>• Photo editing apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comfort & Safety Items */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Comfort & Safety Items</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Stay comfortable and safe during extended aurora viewing sessions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-orange-300 text-xl">🔥</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Warmth Items</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• Hand warmers (disposable or reusable)</li>
                  <li>• Foot warmers</li>
                  <li>• Insulated water bottle</li>
                  <li>• Hot drinks (thermos)</li>
                  <li>• Emergency blanket</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-cyan-300 text-xl">🪑</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Comfort Items</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• Portable chair or sitting pad</li>
                  <li>• Blanket or sleeping bag</li>
                  <li>• Snacks and energy bars</li>
                  <li>• Water and hydration</li>
                  <li>• Small backpack</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-violet-300 text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Safety Items</h3>
                <ul className="text-white/70 font-light space-y-2">
                  <li>• First aid kit</li>
                  <li>• Emergency whistle</li>
                  <li>• GPS device or compass</li>
                  <li>• Emergency contact information</li>
                  <li>• Weather-appropriate gear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Equipment */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Optional Equipment</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Additional items that can enhance your aurora viewing experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-pink-300 text-xl">🎒</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Advanced Photography</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Star tracker for long exposures</li>
                    <li>• Neutral density filters</li>
                    <li>• Multiple lenses (telephoto, fisheye)</li>
                    <li>• External flash or LED panel</li>
                    <li>• Laptop for immediate editing</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-teal-300 text-xl">🌡️</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Weather Monitoring</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Weather station or app</li>
                    <li>• Aurora forecast apps</li>
                    <li>• Compass for direction</li>
                    <li>• Altimeter for elevation</li>
                    <li>• Barometer for pressure changes</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-amber-300 text-xl">🚗</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Transportation</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Snowmobile or ATV rental</li>
                    <li>• Guided tour services</li>
                    <li>• Aurora hunting apps</li>
                    <li>• Local guide services</li>
                    <li>• Transportation to remote locations</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-lime-300 text-xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Specialized Gear</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Aurora viewing glasses</li>
                    <li>• Time-lapse intervalometer</li>
                    <li>• Light pollution filters</li>
                    <li>• Aurora alert services</li>
                    <li>• Professional guide services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packing Tips */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Packing Tips</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Smart packing strategies for your aurora hunting adventure.
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
                      Layering Strategy
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Pack multiple thin layers rather than one thick layer. This allows you to 
                      adjust your warmth level as temperatures change throughout the night.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Battery Management
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Keep spare batteries warm in inner pockets. Cold temperatures can reduce 
                      battery life by up to 50%, so always carry extras.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Weight Distribution
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Pack heavier items like camera gear close to your body for better balance. 
                      Use compression sacks to minimize bulk.
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
                      Quick Access Items
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Keep frequently used items like hand warmers, snacks, and extra batteries 
                      in easily accessible pockets or outer compartments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Protection from Elements
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Use waterproof bags for electronics and sensitive gear. Consider 
                      bringing a small tarp or ground sheet for sitting areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Backup Plans
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Always have backup options for critical items. Pack extra gloves, 
                      socks, and consider renting specialized gear locally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <Link
                href="/guide/what-to-wear"
                className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
              >
                Learn What to Wear
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
