import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Safety Tips - Stay Safe in Arctic Conditions',
  description: 'Essential safety tips for aurora hunting in Lapland. Stay safe while enjoying the northern lights in extreme Arctic conditions. Includes cold weather safety, emergency preparedness, and wilderness safety guidelines.',
  keywords: 'aurora safety, northern lights safety, Lapland safety, Arctic safety, winter safety tips, aurora hunting safety, cold weather safety, emergency preparedness',
  openGraph: {
    title: 'Aurora Safety Tips - Stay Safe in Arctic Conditions',
    description: 'Essential safety tips for aurora hunting in Lapland.',
    type: 'article',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/safety-tips',
    siteName: 'Northern Lights Radar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Safety Tips - Stay Safe in Arctic Conditions',
    description: 'Essential safety tips for aurora hunting in Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/safety-tips',
  },
};

export default function SafetyTipsPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Safety Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Safety Tips
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Stay safe while enjoying the northern lights in extreme Arctic conditions
              </p>
            </div>
          </div>
        </div>

        {/* Cold Weather Safety */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Cold Weather Safety</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Protect yourself from hypothermia, frostbite, and other cold-related dangers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-red-300 text-xl">❄️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Hypothermia Prevention</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Dress in layers with moisture-wicking base layers</li>
                  <li>• Stay dry - avoid sweating</li>
                  <li>• Eat high-energy foods regularly</li>
                  <li>• Stay hydrated with warm drinks</li>
                  <li>• Take breaks in warm shelters</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">🧤</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Frostbite Protection</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Keep extremities warm and dry</li>
                  <li>• Use hand and foot warmers</li>
                  <li>• Avoid tight clothing that restricts circulation</li>
                  <li>• Check fingers and toes regularly</li>
                  <li>• Seek shelter if numbness occurs</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">🌡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Temperature Monitoring</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Monitor weather conditions continuously</li>
                  <li>• Know the wind chill factor</li>
                  <li>• Dress for the coldest expected temperature</li>
                  <li>• Have emergency warming supplies</li>
                  <li>• Know when to call it quits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Location Safety */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Navigation & Location Safety</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Stay oriented and safe in remote Arctic locations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-purple-300 text-xl">🧭</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Navigation Tools</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• GPS device with extra batteries</li>
                    <li>• Physical map and compass</li>
                    <li>• Mobile phone with offline maps</li>
                    <li>• Emergency beacon or satellite communicator</li>
                    <li>• Whistle for signaling</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-yellow-300 text-xl">📍</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Location Planning</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Inform others of your planned route</li>
                    <li>• Check in regularly with contacts</li>
                    <li>• Know emergency contact numbers</li>
                    <li>• Identify nearby shelters or buildings</li>
                    <li>• Plan escape routes from viewing locations</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-indigo-300 text-xl">🌙</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Darkness Safety</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Use headlamps with red light mode</li>
                    <li>• Carry backup lighting sources</li>
                    <li>• Mark your viewing spot clearly</li>
                    <li>• Avoid walking on frozen water</li>
                    <li>• Stay on marked trails when possible</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-emerald-300 text-xl">🚨</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Emergency Preparedness</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Carry first aid kit</li>
                    <li>• Know local emergency numbers</li>
                    <li>• Have emergency shelter options</li>
                    <li>• Carry emergency food and water</li>
                    <li>• Know basic survival techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife & Environmental Safety */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Wildlife & Environmental Safety</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Respect Arctic wildlife and environmental conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-amber-300 text-xl">🦌</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Wildlife Encounters</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Keep safe distance from reindeer</li>
                  <li>• Avoid approaching wild animals</li>
                  <li>• Store food securely</li>
                  <li>• Make noise to avoid surprising animals</li>
                  <li>• Know what to do if you encounter predators</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-teal-300 text-xl">🌊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Water Safety</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Never walk on frozen water alone</li>
                  <li>• Check ice thickness before venturing</li>
                  <li>• Avoid areas with moving water</li>
                  <li>• Carry ice picks for self-rescue</li>
                  <li>• Know how to recognize thin ice</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-rose-300 text-xl">🌬️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Weather Hazards</h3>
                <ul className="text-white/70 font-light space-y-2 flex-grow">
                  <li>• Monitor wind conditions</li>
                  <li>• Avoid exposed ridges in storms</li>
                  <li>• Watch for whiteout conditions</li>
                  <li>• Know signs of approaching storms</li>
                  <li>• Have emergency shelter plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Safety */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Photography Safety</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Stay safe while capturing stunning aurora photos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-violet-300 text-xl">📷</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Camera Safety</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Protect camera from extreme cold</li>
                    <li>• Use camera straps to prevent drops</li>
                    <li>• Keep spare batteries warm</li>
                    <li>• Use weather-sealed equipment</li>
                    <li>• Have backup camera if possible</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-lime-300 text-xl">🔦</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Lighting Safety</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Use red light to preserve night vision</li>
                    <li>• Avoid bright white lights</li>
                    <li>• Carry multiple light sources</li>
                    <li>• Use headlamps for hands-free operation</li>
                    <li>• Have emergency lighting backup</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-sky-300 text-xl">⏰</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Time Management</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Set time limits for outdoor sessions</li>
                    <li>• Take regular breaks to warm up</li>
                    <li>• Monitor battery levels continuously</li>
                    <li>• Plan return route before dark</li>
                    <li>• Don't get lost in photography</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-orange-300 text-xl">👥</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Group Safety</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Never go alone to remote locations</li>
                    <li>• Stay within sight of companions</li>
                    <li>• Establish meeting points</li>
                    <li>• Share emergency contact information</li>
                    <li>• Look out for each other</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Procedures */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Emergency Procedures</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Know what to do in emergency situations.
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
                      Hypothermia Response
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      If someone shows signs of hypothermia (shivering, confusion, slurred speech), 
                      get them to shelter immediately, remove wet clothing, and warm them gradually 
                      with blankets and warm drinks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Getting Lost
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      If you become lost, stay calm and stay put. Use your whistle to signal for help, 
                      conserve energy, and try to stay warm. Use your phone to call emergency services 
                      if you have signal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Equipment Failure
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      If critical equipment fails (GPS, phone, flashlight), prioritize getting to safety. 
                      Use natural landmarks for navigation and conserve remaining resources. 
                      Don't continue without essential safety gear.
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
                      Weather Emergency
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      If weather conditions deteriorate rapidly, seek immediate shelter. 
                      Avoid exposed areas and find protection from wind and precipitation. 
                      Use emergency shelter or natural windbreaks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Injury Response
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      For injuries, apply first aid immediately and call for help. 
                      Keep the injured person warm and comfortable. If movement is necessary, 
                      do so carefully to avoid further injury.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Communication Failure
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      If communication devices fail, use visual signals (flashlight, bright clothing) 
                      and audible signals (whistle, shouting). Try to reach higher ground for better 
                      signal reception or visibility to rescuers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contacts */}
            <div className="mt-16 bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/20">
              <h3 className="text-2xl font-light text-white mb-6 text-center">Emergency Contacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-red-300 text-lg font-light mb-2">Finland</div>
                  <div className="text-white/70 font-light">Emergency: 112</div>
                  <div className="text-white/70 font-light">Police: 112</div>
                </div>
                <div>
                  <div className="text-red-300 text-lg font-light mb-2">Sweden</div>
                  <div className="text-white/70 font-light">Emergency: 112</div>
                  <div className="text-white/70 font-light">Police: 112</div>
                </div>
                <div>
                  <div className="text-red-300 text-lg font-light mb-2">Norway</div>
                  <div className="text-white/70 font-light">Emergency: 112</div>
                  <div className="text-white/70 font-light">Police: 112</div>
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
              Ready to Hunt Safely?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the safety tips, learn how to see the aurora and start planning your safe adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/how-to-see-the-northern-lights"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Complete Aurora Guide
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





