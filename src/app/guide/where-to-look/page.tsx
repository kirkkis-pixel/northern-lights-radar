import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Where to Look for Northern Lights - Best Viewing Locations',
  description: 'Discover the best locations and directions to look for northern lights in Lapland. Learn about optimal viewing spots, timing, and positioning for aurora hunting.',
  keywords: 'where to look northern lights, aurora viewing locations, best spots aurora, northern lights direction, aurora hunting spots',
  openGraph: {
    title: 'Where to Look for Northern Lights - Best Viewing Locations',
    description: 'Discover the best locations and directions to look for northern lights in Lapland.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to Look for Northern Lights - Best Viewing Locations',
    description: 'Discover the best locations and directions to look for northern lights in Lapland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/where-to-look',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Where to Look for Northern Lights - Best Viewing Locations',
  description: 'Discover the best locations and directions to look for northern lights in Lapland with optimal viewing spots and positioning tips.',
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

export default function WhereToLookPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Viewing Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Where to Look for</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Northern Lights
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Discover the best locations, directions, and positioning for successful aurora hunting
              </p>
            </div>
          </div>
        </div>

        {/* Direction to Look */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Direction</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Which Direction to Look
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Understanding where and how to position yourself for optimal aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🧭</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">North is Key</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6 flex-grow">
                  Always look toward the northern horizon - this is where aurora appears most frequently
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Use a compass or phone app</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Look 10-30° above horizon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Scan the entire northern sky</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🌅</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Time of Night</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6 flex-grow">
                  Aurora activity varies throughout the night with peak times
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Peak: 10 PM - 2 AM local time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Earlier in winter months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Can appear anytime after sunset</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Eye Adaptation</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6 flex-grow">
                  Give your eyes time to adjust to darkness for better aurora detection
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>20-30 minutes for full adaptation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Avoid bright lights and phones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Use red light for navigation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Best Viewing Locations */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Locations</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Best Viewing Locations
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Choose locations with clear northern horizons and minimal light pollution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <h3 className="text-2xl font-light text-white mb-6">Elevated Spots</h3>
                <div className="flex-grow">
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Fell Tops</span>
                        <p className="text-white/60 text-sm mt-1">Higher elevation provides better visibility and less atmospheric interference</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Mountain Peaks</span>
                        <p className="text-white/60 text-sm mt-1">Clear sightlines to northern horizon without obstructions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Observation Towers</span>
                        <p className="text-white/60 text-sm mt-1">Purpose-built platforms for aurora viewing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <h3 className="text-2xl font-light text-white mb-6">Water Locations</h3>
                <div className="flex-grow">
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Frozen Lakes</span>
                        <p className="text-white/60 text-sm mt-1">Reflections can double the aurora effect</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Rivers & Streams</span>
                        <p className="text-white/60 text-sm mt-1">Open water areas with clear northern views</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Coastal Areas</span>
                        <p className="text-white/60 text-sm mt-1">Unobstructed horizon over water</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <h3 className="text-2xl font-light text-white mb-6">Wilderness Areas</h3>
                <div className="flex-grow">
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">National Parks</span>
                        <p className="text-white/60 text-sm mt-1">Protected areas with minimal light pollution</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Forest Clearings</span>
                        <p className="text-white/60 text-sm mt-1">Open areas within forested regions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Tundra Areas</span>
                        <p className="text-white/60 text-sm mt-1">Open landscapes with 360° visibility</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <h3 className="text-2xl font-light text-white mb-6">Urban Considerations</h3>
                <div className="flex-grow">
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">City Parks</span>
                        <p className="text-white/60 text-sm mt-1">Larger parks on city outskirts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Aurora Hotels</span>
                        <p className="text-white/60 text-sm mt-1">Specialized accommodations with viewing platforms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Observation Points</span>
                        <p className="text-white/60 text-sm mt-1">Designated viewing areas near cities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Avoid */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Avoid</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                What to Avoid
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Common mistakes that can ruin your aurora viewing experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🚫</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Light Pollution</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Avoid areas with street lights, buildings, or other sources of artificial light that can wash out the aurora
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🌲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Obstructed Views</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Don&apos;t choose spots with trees, mountains, or buildings blocking your northern horizon
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Bright Moon</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Full moon can significantly reduce aurora visibility - check moon phases before planning
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Cloudy Skies</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Check weather forecasts - clouds will completely block aurora visibility
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">🌅</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Wrong Timing</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Avoid viewing during twilight hours when the sky is still too bright
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                  <span className="text-red-300 text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Phone Screens</h3>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  Avoid checking your phone frequently as bright screens ruin night vision adaptation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Start Your Aurora Adventure
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know where to look, explore our comprehensive guides and real-time forecasts to maximize your northern lights experience.
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
    </>
  );
}
