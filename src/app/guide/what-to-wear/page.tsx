import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'What to Wear for Northern Lights Viewing - Complete Clothing Guide',
  description: 'Essential clothing guide for northern lights viewing in Lapland. Learn what to wear in Arctic conditions, layering techniques, and gear recommendations for comfortable aurora hunting.',
  keywords: 'what to wear northern lights, Arctic clothing, winter gear Lapland, aurora viewing clothes, cold weather clothing',
  openGraph: {
    title: 'What to Wear for Northern Lights Viewing - Complete Clothing Guide',
    description: 'Essential clothing guide for northern lights viewing in Lapland with layering techniques and gear recommendations.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Wear for Northern Lights Viewing - Complete Clothing Guide',
    description: 'Essential clothing guide for northern lights viewing in Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/what-to-wear',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What to Wear for Northern Lights Viewing - Complete Clothing Guide',
  description: 'Essential clothing guide for northern lights viewing in Lapland with layering techniques and gear recommendations.',
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

export default function WhatToWearPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Clothing Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">What to Wear for</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Northern Lights Viewing
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Essential clothing guide for comfortable aurora hunting in Arctic conditions
              </p>
            </div>
          </div>
        </div>

        {/* Layering System */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Layering System</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                The 3-Layer System
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Master the art of layering for maximum warmth and comfort in Arctic conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Base Layer</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Moisture-wicking foundation that keeps you dry and warm
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Merino wool or synthetic thermal underwear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Long-sleeve thermal tops and bottoms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Wool or synthetic socks (bring extras)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Avoid cotton - it retains moisture</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Insulation Layer</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Traps body heat and provides warmth in cold conditions
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Fleece jacket or down/synthetic vest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Fleece pants or insulated trousers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Wool or fleece hat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Insulated gloves or mittens</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Outer Shell</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Windproof and waterproof protection from the elements
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Waterproof and windproof jacket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Insulated winter pants or overalls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Waterproof gloves or mittens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Insulated winter boots</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Items */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Essential Items</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Must-Have Items
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Don&apos;t leave home without these essential items for aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Head & Face Protection</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Wool or fleece hat</span>
                        <p className="text-white/60 text-sm mt-1">Covers ears and provides warmth</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Balaclava or face mask</span>
                        <p className="text-white/60 text-sm mt-1">Protects face from wind and cold</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Neck gaiter or scarf</span>
                        <p className="text-white/60 text-sm mt-1">Extra protection for neck area</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Hand & Foot Protection</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Insulated gloves or mittens</span>
                        <p className="text-white/60 text-sm mt-1">Mittens are warmer than gloves</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Hand warmers</span>
                        <p className="text-white/60 text-sm mt-1">Disposable or reusable heat packs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Insulated winter boots</span>
                        <p className="text-white/60 text-sm mt-1">Waterproof with good traction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Extra socks</span>
                        <p className="text-white/60 text-sm mt-1">Bring multiple pairs for long nights</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Body Protection</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Insulated winter jacket</span>
                        <p className="text-white/60 text-sm mt-1">Down or synthetic insulation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Thermal underwear</span>
                        <p className="text-white/60 text-sm mt-1">Merino wool or synthetic base layer</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Insulated pants</span>
                        <p className="text-white/60 text-sm mt-1">Waterproof outer layer recommended</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Fleece mid-layer</span>
                        <p className="text-white/60 text-sm mt-1">Adjustable warmth layer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Additional Items</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Headlamp with red light</span>
                        <p className="text-white/60 text-sm mt-1">Preserves night vision</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Hot drinks thermos</span>
                        <p className="text-white/60 text-sm mt-1">Stay warm from the inside</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Emergency blanket</span>
                        <p className="text-white/60 text-sm mt-1">Safety backup for extreme cold</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Extra batteries</span>
                        <p className="text-white/60 text-sm mt-1">Cold drains battery life faster</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Guide */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Temperature Guide</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Dressing for Different Temperatures
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Adjust your layers based on the temperature and conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="text-4xl font-thin text-cyan-300 mb-2">-5°C to -15°C</div>
                  <div className="text-white/60 font-light">Mild Arctic Conditions</div>
                </div>
                <ul className="text-white/70 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Base layer + fleece + light jacket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Regular winter gloves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Wool hat and scarf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Insulated boots</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="text-4xl font-thin text-cyan-300 mb-2">-15°C to -25°C</div>
                  <div className="text-white/60 font-light">Cold Arctic Conditions</div>
                </div>
                <ul className="text-white/70 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Base layer + fleece + insulated jacket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Mittens with hand warmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Balaclava or face mask</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Heavy insulated boots</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="text-4xl font-thin text-cyan-300 mb-2">-25°C and below</div>
                  <div className="text-white/60 font-light">Extreme Arctic Conditions</div>
                </div>
                <ul className="text-white/70 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>All layers + expedition parka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Heavy mittens + hand warmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Full face protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Expedition-grade boots</span>
                  </li>
                </ul>
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
