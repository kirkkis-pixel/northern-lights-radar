import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Myths Debunked - Separating Fact from Fiction',
  description: 'Separate fact from fiction about the northern lights. Learn the truth behind common aurora myths and misconceptions with scientific explanations and expert insights.',
  keywords: 'aurora myths, northern lights myths, aurora facts, northern lights facts, aurora misconceptions, aurora science, aurora debunked, northern lights truth',
  openGraph: {
    title: 'Aurora Myths Debunked - Separating Fact from Fiction',
    description: 'Separate fact from fiction about the northern lights.',
    type: 'article',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/aurora-myths',
    siteName: 'Northern Lights Radar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Myths Debunked - Separating Fact from Fiction',
    description: 'Separate fact from fiction about the northern lights.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/aurora-myths',
  },
};

export default function AuroraMythsPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Myths Debunked</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Myths
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Separating fact from fiction about the northern lights
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
                Let's debunk the most persistent myths about the northern lights.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Myth 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">❌</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-light text-white mb-4">Myth: You can hear the aurora</h3>
                    <div className="bg-red-500/10 rounded-xl p-6 mb-6 border border-red-400/20">
                      <p className="text-red-300 font-light leading-relaxed">
                        <strong>Reality:</strong> The aurora occurs at altitudes of 80-400 kilometers above Earth's surface, 
                        far beyond the reach of sound waves. Any "aurora sounds" you might hear are actually 
                        atmospheric phenomena like crackling ice or wind, not the aurora itself.
                      </p>
                    </div>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      While some people report hearing sounds during aurora displays, scientific studies have 
                      confirmed that the aurora itself is silent. The sounds are likely caused by nearby 
                      environmental factors like ice cracking, wind, or even psychological effects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">❌</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-light text-white mb-4">Myth: Aurora only appears in winter</h3>
                    <div className="bg-red-500/10 rounded-xl p-6 mb-6 border border-red-400/20">
                      <p className="text-red-300 font-light leading-relaxed">
                        <strong>Reality:</strong> Aurora occurs year-round, but it&apos;s only visible during dark hours. 
                        In summer, the Arctic experiences the midnight sun, making aurora invisible. 
                        Aurora activity peaks around the equinoxes (March and September).
                      </p>
                    </div>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      The aurora is always happening, but you need darkness to see it. During Arctic summer, 
                      the sun never sets, so aurora remains invisible. The best viewing seasons are autumn 
                      and spring when nights are dark but weather is often clearer than mid-winter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">❌</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-light text-white mb-4">Myth: Aurora is caused by ice crystals</h3>
                    <div className="bg-red-500/10 rounded-xl p-6 mb-6 border border-red-400/20">
                      <p className="text-red-300 font-light leading-relaxed">
                        <strong>Reality:</strong> Aurora is caused by charged particles from the sun colliding with 
                        Earth's atmosphere. Ice crystals create halos and other atmospheric phenomena, 
                        but not aurora. The colors come from different gases in the atmosphere.
                      </p>
                    </div>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Aurora is a space weather phenomenon caused by solar wind particles interacting with 
                      Earth's magnetic field and atmosphere. Green aurora comes from oxygen at high altitudes, 
                      red from oxygen at lower altitudes, and blue/purple from nitrogen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-red-300 text-xl">❌</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-light text-white mb-4">Myth: Aurora only appears in the north</h3>
                    <div className="bg-red-500/10 rounded-xl p-6 mb-6 border border-red-400/20">
                      <p className="text-red-300 font-light leading-relaxed">
                        <strong>Reality:</strong> Aurora appears in both northern and southern hemispheres. 
                        The southern version is called "aurora australis" and occurs around Antarctica. 
                        During strong solar storms, aurora can be visible much further from the poles.
                      </p>
                    </div>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Aurora occurs in oval-shaped regions around both magnetic poles. The northern lights 
                      (aurora borealis) are more famous because more people live in northern regions. 
                      The southern lights (aurora australis) are equally spectacular but less accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Facts Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Aurora Science Facts</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                The real science behind the northern lights phenomenon.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">☀️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Solar Wind Source</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Aurora is powered by charged particles from the sun's corona, accelerated by solar wind 
                  and guided by Earth's magnetic field to the polar regions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">🧲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Magnetic Field Interaction</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Earth's magnetic field channels solar particles toward the poles, creating the 
                  characteristic oval-shaped aurora zones around the Arctic and Antarctic.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Color Chemistry</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Colors depend on altitude and gas type: green (oxygen at 100-200km), red (oxygen at 200-400km), 
                  blue/purple (nitrogen), and pink (nitrogen with oxygen).
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Predictable Patterns</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Aurora follows 11-year solar cycles, with peak activity during solar maximum. 
                  The Kp index measures geomagnetic activity and predicts aurora visibility.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-indigo-300 text-xl">🌍</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Global Phenomenon</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Aurora occurs on other planets too! Jupiter, Saturn, Uranus, and Neptune all have 
                  aurora displays, some even more powerful than Earth's.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-teal-300 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Energy Release</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  When solar particles collide with atmospheric gases, they excite electrons, 
                  which then release energy as light when returning to their ground state.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Misconceptions */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Historical Misconceptions</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                How different cultures interpreted the aurora before modern science.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-amber-300 text-xl">🔥</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Ancient Interpretations</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Vikings: Bridge to Valhalla (Bifröst)</li>
                    <li>• Inuit: Spirits playing ball with walrus skull</li>
                    <li>• Finnish: Foxes running across the sky</li>
                    <li>• Chinese: Dragons fighting in the sky</li>
                    <li>• Medieval Europe: Divine warnings or omens</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-rose-300 text-xl">🔬</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Scientific Discovery</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• 1619: Galileo coins term "aurora borealis"</li>
                    <li>• 1741: First scientific observations</li>
                    <li>• 1896: Kristian Birkeland's experiments</li>
                    <li>• 1950s: Space age confirms solar wind theory</li>
                    <li>• 1970s: Satellite observations reveal global patterns</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-violet-300 text-xl">🌌</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Modern Understanding</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• Solar wind interaction with magnetosphere</li>
                    <li>• Charged particle acceleration</li>
                    <li>• Atmospheric gas excitation and emission</li>
                    <li>• Real-time monitoring and prediction</li>
                    <li>• Space weather impact on technology</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-lime-300 text-xl">📡</span>
                    </div>
                    <h3 className="text-xl font-light text-white">Technology Impact</h3>
                  </div>
                  <ul className="text-white/70 font-light space-y-3">
                    <li>• GPS signal disruption</li>
                    <li>• Power grid interference</li>
                    <li>• Satellite communication effects</li>
                    <li>• Radio wave propagation changes</li>
                    <li>• Aviation route adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Debunking Tips */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">How to Spot Aurora Myths</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Learn to identify and debunk aurora misinformation.
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
                      Check Scientific Sources
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Always verify aurora information with reputable scientific sources like NASA, 
                      NOAA, or university research. Avoid social media claims without citations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Understand Basic Physics
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Aurora is fundamentally about charged particles and electromagnetic fields. 
                      Any explanation that doesn't involve these concepts is likely incorrect.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Question Extraordinary Claims
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      If someone claims aurora can be heard, affects weather, or has supernatural 
                      properties, ask for scientific evidence. Extraordinary claims require extraordinary proof.
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
                      Look for Patterns
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Aurora follows predictable patterns based on solar activity, season, and location. 
                      Claims that contradict these patterns are usually myths.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Consult Multiple Sources
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      Cross-reference aurora information across multiple scientific sources. 
                      If only one source makes a claim, be skeptical until you find corroboration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-cyan-300 font-light text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">
                      Embrace the Real Magic
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed flex-grow">
                      The real aurora is magical enough! Understanding the science behind it 
                      doesn't diminish its beauty - it enhances our appreciation of this incredible phenomenon.
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

