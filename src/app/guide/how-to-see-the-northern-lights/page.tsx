import { Metadata } from 'next';
import Link from 'next/link';

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
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/finland/northern-lights" className="hover:text-blue-600">Finland</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">How to See the Northern Lights</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to See the Northern Lights
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your complete beginner&apos;s guide to aurora hunting in Finland. 
                Learn the essentials for successful northern lights viewing.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              
              {/* Step 1 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Choose the Right Time</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Months</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Peak Season (November - March)</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Longest nights (up to 24 hours of darkness)</li>
                        <li>• Highest aurora activity</li>
                        <li>• Coldest temperatures (-20°C to -40°C)</li>
                        <li>• Most reliable viewing conditions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Shoulder Season (September - October, April - May)</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Milder temperatures (-5°C to -15°C)</li>
                        <li>• Good aurora activity</li>
                        <li>• Shorter nights but still dark enough</li>
                        <li>• Less crowded, better prices</li>
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
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Not checking conditions</h4>
                        <p className="text-gray-600">Always check aurora probability and weather before heading out.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Giving up too early</h4>
                        <p className="text-gray-600">Aurora can take time to appear. Stay patient and warm.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Poor clothing choices</h4>
                        <p className="text-gray-600">Dress in layers and avoid cotton. Cold weather is dangerous.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Looking in wrong direction</h4>
                        <p className="text-gray-600">Always look north. Use a compass or phone app to orient yourself.</p>
                      </div>
                    </div>
                  </div>
                </div>
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
