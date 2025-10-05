import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'How to See the Northern Lights - Complete Beginner Guide',
  description: 'Learn how to see the northern lights with our comprehensive beginner guide. Essential tips for first-time aurora viewers, including optimal timing, locations, weather conditions, and what to expect during your aurora hunting adventure.',
  keywords: 'how to see northern lights, aurora viewing guide, northern lights tips, aurora borealis guide, beginner aurora guide, northern lights for beginners',
  openGraph: {
    title: 'How to See the Northern Lights - Complete Beginner Guide',
    description: 'Learn how to see the northern lights with our comprehensive beginner guide.',
    type: 'article',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights',
    siteName: 'Northern Lights Radar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to See the Northern Lights - Complete Beginner Guide',
    description: 'Learn how to see the northern lights with our comprehensive beginner guide.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/how-to-see-the-northern-lights',
  },
};

export default function HowToSeeNorthernLightsPage() {
  return (
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
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Complete Guide</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              <div className="text-white mb-2">How to See the</div>
              <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Northern Lights
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Your complete beginner guide to experiencing the magical aurora borealis
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Your First Aurora Experience
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Seeing the northern lights for the first time is a magical experience. This guide will help you maximize your chances of witnessing this natural phenomenon and make the most of your aurora adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Step-by-Step Guide
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Follow these steps to increase your chances of seeing the northern lights.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-cyan-300">1</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Choose the Right Time</h3>
                  </div>
                  <div className="space-y-4 text-white/70">
                    <p>• <strong>Best Season:</strong> September to April, with peak viewing from December to February</p>
                    <p>• <strong>Peak Hours:</strong> 10 PM to 2 AM local time</p>
                    <p>• <strong>Polar Night:</strong> December to January offers 24-hour darkness</p>
                    <p>• <strong>Moon Phase:</strong> Avoid full moon periods for best visibility</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Monthly Aurora Activity</h4>
                  <div className="space-y-3">
                    {[
                      { month: 'Sep', activity: 25, color: 'bg-yellow-500/20' },
                      { month: 'Oct', activity: 45, color: 'bg-orange-500/20' },
                      { month: 'Nov', activity: 70, color: 'bg-red-500/20' },
                      { month: 'Dec', activity: 90, color: 'bg-red-600/20' },
                      { month: 'Jan', activity: 95, color: 'bg-red-700/20' },
                      { month: 'Feb', activity: 85, color: 'bg-red-600/20' },
                      { month: 'Mar', activity: 70, color: 'bg-orange-500/20' },
                      { month: 'Apr', activity: 40, color: 'bg-yellow-500/20' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 text-white/80 font-medium">{item.month}</div>
                        <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${item.activity}%` }}
                          ></div>
                        </div>
                        <div className="w-12 text-white/60 text-sm">{item.activity}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-green-300">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Pick the Right Location</h3>
                  </div>
                  <div className="space-y-4 text-white/70">
                    <p>• <strong>Above Arctic Circle:</strong> Most Lapland cities/regions are located above the Arctic Circle, providing optimal positioning for aurora viewing. Northern destinations offer the best conditions.</p>
                    <p>• <strong>Dark Skies:</strong> Get away from city lights and light pollution</p>
                    <p>• <strong>Clear Horizons:</strong> Find locations with unobstructed views to the north</p>
                    <p>• <strong>Weather:</strong> Choose areas with typically clear skies</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Top Lapland Destinations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">🇫🇮 Rovaniemi, Finland</span>
                      <span className="text-green-400 text-sm">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">🇸🇪 Abisko, Sweden</span>
                      <span className="text-green-400 text-sm">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">🇳🇴 Tromsø, Norway</span>
                      <span className="text-green-400 text-sm">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">🇫🇮 Ivalo, Finland</span>
                      <span className="text-blue-400 text-sm">Very Good</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">🇳🇴 Svalbard, Norway</span>
                      <span className="text-blue-400 text-sm">Very Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-purple-300">3</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Check Conditions</h3>
                  </div>
                  <div className="space-y-4 text-white/70">
                    <p>• <strong>Aurora Forecast:</strong> Check Kp index and aurora probability</p>
                    <p>• <strong>Weather:</strong> Look for clear skies and low cloud cover</p>
                    <p>• <strong>Solar Activity:</strong> Monitor space weather conditions</p>
                    <p>• <strong>Moon Phase:</strong> New moon or crescent moon is ideal</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Ideal Viewing Conditions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Kp Index</span>
                      <span className="text-green-400 text-sm">3+ (Moderate)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Cloud Cover</span>
                      <span className="text-green-400 text-sm">0-30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Visibility</span>
                      <span className="text-green-400 text-sm">10+ km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Moon Phase</span>
                      <span className="text-green-400 text-sm">New/Crescent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-yellow-300">4</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Be Patient and Prepared</h3>
                  </div>
                  <div className="space-y-4 text-white/70">
                    <p>• <strong>Dress Warmly:</strong> Layer up for extreme cold temperatures</p>
                    <p>• <strong>Bring Supplies:</strong> Hot drinks, snacks, and extra batteries</p>
                    <p>• <strong>Be Patient:</strong> Aurora can appear and disappear quickly</p>
                    <p>• <strong>Stay Alert:</strong> Aurora can start as a faint glow and intensify</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Essential Gear</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">🧥</span>
                      <span className="text-white/70">Warm, layered clothing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">🥾</span>
                      <span className="text-white/70">Insulated boots</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">🧤</span>
                      <span className="text-white/70">Gloves and hat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">📱</span>
                      <span className="text-white/70">Aurora forecast app</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80">🔦</span>
                      <span className="text-white/70">Red flashlight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Understanding what you'll see and experience during your first aurora encounter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visual Appearance</h3>
              <p className="text-white/70 leading-relaxed flex-grow">
                Aurora can appear as faint green glows, dancing curtains, or bright colorful displays. They often start as a subtle light in the northern sky.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Duration</h3>
              <p className="text-white/70 leading-relaxed flex-grow">
                Aurora displays can last from a few minutes to several hours. They often come in waves, appearing and disappearing throughout the night.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Colors</h3>
              <p className="text-white/70 leading-relaxed flex-grow">
                Most common colors are green and white, but you might also see red, blue, purple, or yellow depending on atmospheric conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips for Success */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Tips for Success
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Expert tips to maximize your chances of seeing the northern lights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Before You Go</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Check aurora forecasts and weather conditions</li>
                  <li>• Download aurora alert apps</li>
                  <li>• Plan multiple nights for better chances</li>
                  <li>• Book accommodations in advance</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">During Your Stay</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Stay up late or wake up early</li>
                  <li>• Check conditions every hour</li>
                  <li>• Be patient and persistent</li>
                  <li>• Join guided tours for better chances</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Photography Tips</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Use a tripod for stable shots</li>
                  <li>• Set camera to manual mode</li>
                  <li>• Use wide-angle lens</li>
                  <li>• Long exposure settings (10-30 seconds)</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Safety Reminders</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Dress for extreme cold weather</li>
                  <li>• Tell someone where you're going</li>
                  <li>• Bring emergency supplies</li>
                  <li>• Stay on marked paths and roads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
          </div>
          <h2 className="text-5xl font-thin text-white mb-8">
            Ready to See the Aurora?
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Check live conditions and start planning your northern lights adventure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              Check Live Conditions
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
  );
}