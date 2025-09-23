import { Metadata } from 'next';
import Link from 'next/link';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import TonightCard from '@/components/TonightCard';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';

export const metadata: Metadata = {
  title: 'How to See the Northern Lights - Complete Beginner\'s Guide',
  description: 'Step-by-step guide to seeing the aurora borealis in Finland. Learn when to go, what to wear, where to look, and how to photograph the northern lights.',
  keywords: 'how to see northern lights, aurora guide, northern lights tips, aurora photography, Finland aurora',
  openGraph: {
    title: 'How to See the Northern Lights - Complete Beginner\'s Guide',
    description: 'Step-by-step guide to seeing the aurora borealis in Finland.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to See the Northern Lights - Complete Beginner\'s Guide',
    description: 'Step-by-step guide to seeing the aurora borealis in Finland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to See the Northern Lights - Complete Beginner\'s Guide',
  description: 'Step-by-step guide to seeing the aurora borealis in Finland. Learn when to go, what to wear, where to look, and how to photograph the northern lights.',
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

export default function HowToSeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Luxury Navigation */}
        <LuxuryNavigation />
        
        {/* Breadcrumbs */}
        <div className="bg-black/50 py-4">
          <div className="max-w-6xl mx-auto px-12">
            <nav className="text-sm text-white/60">
              <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/finland/northern-lights" className="hover:text-cyan-300 transition-colors">Finland</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">How to See the Northern Lights</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
            <div className="mb-20">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Complete Guide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">How to See the</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  Northern Lights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Your complete beginner&apos;s guide to aurora hunting in Finland. 
                Learn the essentials for successful northern lights viewing.
              </p>
            </div>
          </div>
        </div>

        {/* Live Conditions Widget */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Check Current Aurora Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Before heading out, check the real-time aurora conditions for your chosen location
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TonightCard 
                  latitude={66.5039} 
                  longitude={25.7294} 
                  cityName="Rovaniemi" 
                  description="Gateway to Lapland - Check conditions before your aurora hunt"
                />
                <SpaceWeatherWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mr-6 border border-cyan-400/30">
                    <span className="text-cyan-300 font-light text-2xl">1</span>
                  </div>
                  <h2 className="text-3xl font-thin text-white">Choose the Right Time</h2>
                </div>
                
                <div className="space-y-8">
                  <h3 className="text-xl font-light text-white/80 mb-6">Best Months for Aurora Viewing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-light text-cyan-300/80 mb-4">Peak Season (November - March)</h4>
                      <ul className="text-white/70 space-y-3 font-light">
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Longest nights (up to 24 hours of darkness)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Highest aurora activity and reliability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Coldest temperatures (-20°C to -40°C)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Most reliable viewing conditions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-light text-cyan-300/80 mb-4">Shoulder Season (September - October, April - May)</h4>
                      <ul className="text-white/70 space-y-3 font-light">
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Milder temperatures (-5°C to -15°C)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Good aurora activity with equinox peaks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Shorter nights but still dark enough</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-300 mr-3">•</span>
                          <span>Less crowded, better accommodation prices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pick the Right Location</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Location Factors</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Above the Arctic Circle (66.5°N)</li>
                        <li>• Away from city lights</li>
                        <li>• Clear northern horizon</li>
                        <li>• Minimal light pollution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best Lapland Cities</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• <Link href="/finland/lapland/rovaniemi/aurora" className="text-blue-600 hover:underline">Rovaniemi</Link> - Gateway to Lapland</li>
                        <li>• <Link href="/finland/lapland/ivalo/aurora" className="text-blue-600 hover:underline">Ivalo</Link> - Northernmost airport</li>
                        <li>• <Link href="/finland/lapland/kilpisjarvi/aurora" className="text-blue-600 hover:underline">Kilpisjärvi</Link> - Closest to auroral oval</li>
                        <li>• <Link href="/finland/lapland/levi/aurora" className="text-blue-600 hover:underline">Levi</Link> - Mountain views</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Check the Conditions</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Look For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Weather Conditions</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Clear or mostly clear skies</li>
                        <li>• Low cloud cover (under 30%)</li>
                        <li>• Minimal precipitation</li>
                        <li>• Good visibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Space Weather</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Kp index of 3 or higher</li>
                        <li>• Active geomagnetic conditions</li>
                        <li>• Solar wind activity</li>
                        <li>• Aurora probability above 30%</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-blue-800 font-medium">
                      💡 Use our live aurora conditions to check real-time scores for your chosen location!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Dress for Success</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Clothing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Base Layers</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Merino wool or synthetic base layers</li>
                        <li>• Thermal underwear (top and bottom)</li>
                        <li>• Moisture-wicking materials</li>
                        <li>• Avoid cotton (retains moisture)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Outer Layers</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Insulated winter jacket</li>
                        <li>• Waterproof and windproof shell</li>
                        <li>• Thick winter pants</li>
                        <li>• Down or synthetic insulation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Extremities</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Warm gloves or mittens</li>
                        <li>• Thick wool socks</li>
                        <li>• Insulated winter boots</li>
                        <li>• Warm hat or balaclava</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Accessories</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Hand warmers</li>
                        <li>• Hot drinks in thermos</li>
                        <li>• Headlamp with red light</li>
                        <li>• Emergency blanket</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">5</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Know Where to Look</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aurora Viewing Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Direction</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Look north (magnetic north)</li>
                        <li>• Check compass or phone app</li>
                        <li>• Aurora often appears as an arc</li>
                        <li>• Can extend overhead during strong activity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Best between 10 PM - 2 AM</li>
                        <li>• Can appear anytime after sunset</li>
                        <li>• Often most active around midnight</li>
                        <li>• Can last minutes to hours</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• May start as faint green glow</li>
                        <li>• Can intensify and move rapidly</li>
                        <li>• Colors: green, white, pink, purple</li>
                        <li>• Sometimes visible to naked eye</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Patience Required</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Can take 30+ minutes to appear</li>
                        <li>• Activity comes in waves</li>
                        <li>• Stay warm and patient</li>
                        <li>• Check conditions regularly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photography Tips */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Photography Tips</h2>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Camera Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Settings</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Manual mode (M)</li>
                        <li>• Wide aperture (f/2.8 or wider)</li>
                        <li>• High ISO (1600-6400)</li>
                        <li>• Long exposure (5-30 seconds)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Equipment</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Tripod (essential!)</li>
                        <li>• Wide-angle lens (14-24mm)</li>
                        <li>• Extra batteries (cold drains them)</li>
                        <li>• Remote shutter release</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                    <p className="text-yellow-800">
                      📸 <Link href="/guide/camera-settings" className="text-blue-600 hover:underline font-medium">Read our detailed camera settings guide</Link> for step-by-step photography instructions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <h2 className="text-3xl font-thin text-white mb-8">Common Mistakes to Avoid</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-red-400 font-bold text-xl">✗</span>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Not checking conditions</h4>
                      <p className="text-white/70 font-light">Always check aurora probability and weather before heading out. Use our live conditions above.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-red-400 font-bold text-xl">✗</span>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Giving up too early</h4>
                      <p className="text-white/70 font-light">Aurora can take time to appear. Stay patient and warm - activity often peaks around midnight.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-red-400 font-bold text-xl">✗</span>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Poor clothing choices</h4>
                      <p className="text-white/70 font-light">Dress in layers and avoid cotton. Cold weather is dangerous - hypothermia can set in quickly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-red-400 font-bold text-xl">✗</span>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Looking in wrong direction</h4>
                      <p className="text-white/70 font-light">Always look north. Use a compass or phone app to orient yourself - aurora appears as an arc in the northern sky.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">FAQ</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about aurora hunting in Finland
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-light text-white mb-4">What is the Kp index and why does it matter?</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  The Kp index measures geomagnetic activity on a scale of 0-9. Higher Kp values indicate stronger aurora activity that can be seen further south. For Finland, Kp values of 3-4 are often sufficient for good aurora viewing in Lapland, while Kp 5+ can bring aurora to southern Finland.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-light text-white mb-4">Can I see the aurora in Helsinki?</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  While it's possible to see the northern lights in Helsinki during strong geomagnetic storms (Kp 6+), the best viewing is in Lapland, particularly above the Arctic Circle. Cities like Rovaniemi, Ivalo, and Kilpisjärvi offer much better chances due to their northern location and darker skies.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-light text-white mb-4">How long should I wait for the aurora to appear?</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Aurora activity comes in waves and can take 30+ minutes to appear after you arrive at your viewing spot. Peak activity typically occurs between 10 PM and 2 AM, with the strongest displays often around midnight. Stay patient and warm - the wait is usually worth it.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-xl font-light text-white mb-4">What should I do if the aurora doesn't appear?</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Aurora hunting requires patience and flexibility. If conditions aren't favorable, consider staying multiple nights, checking our live conditions regularly, and having backup plans like visiting local attractions or trying different viewing spots. Sometimes the aurora appears when you least expect it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Related Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/guide/best-time-in-finland"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Time in Finland
                </h3>
                <p className="text-gray-600">
                  Detailed seasonal guide to aurora viewing in Finland with month-by-month breakdowns.
                </p>
              </Link>
              
              <Link
                href="/guide/camera-settings"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Camera Settings
                </h3>
                <p className="text-gray-600">
                  Complete photography guide with exact camera settings for aurora photography.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Attribution Footer */}
        <div className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-gray-500 text-center">
              Data from NOAA SWPC (OVATION), Open-Meteo, OpenWeather. Times in local timezone. 
              Scores are indicative and depend on weather & darkness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
