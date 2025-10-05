import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing Weather 2024',
  description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland. Complete guide to ideal aurora viewing conditions.',
  keywords: 'ideal conditions northern lights, perfect aurora weather, best aurora conditions, northern lights timing, aurora viewing conditions, space weather aurora, aurora forecast conditions',
  openGraph: {
    title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing Weather 2024',
    description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/ideal-conditions',
    images: [
      {
        url: 'https://northernlightsradar.com/og-ideal-aurora-conditions.jpg',
        width: 1200,
        height: 630,
        alt: 'Ideal Conditions for Northern Lights - Perfect Aurora Weather',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Conditions for Northern Lights - Perfect Aurora Viewing Weather 2024',
    description: 'Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland.',
    images: ['https://northernlightsradar.com/og-ideal-aurora-conditions.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/ideal-conditions',
  },
};

export default function IdealConditionsPage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Perfect Conditions</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Ideal Conditions</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  for Aurora
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Learn about the perfect weather, timing, and space weather conditions for optimal northern lights viewing in Lapland. Complete guide to ideal aurora viewing conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Weather Conditions Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Weather Conditions</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Perfect weather is essential for successful aurora viewing
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-300 text-xl">☁️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Clear Skies</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Clear or mostly clear skies are essential for aurora viewing. Even thin clouds 
                      can obscure the northern lights, so monitor cloud cover forecasts carefully.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Cloud cover: 0-30% ideal</li>
                      <li>• Avoid overcast conditions</li>
                      <li>• Check hourly weather updates</li>
                      <li>• Look for weather windows</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl">🌡️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Temperature & Wind</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      While aurora itself isn&apos;t affected by temperature, comfortable conditions 
                      make for better viewing experiences. Wind can affect visibility and comfort.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Wind speed: Under 15 km/h ideal</li>
                      <li>• Temperature: Dress appropriately</li>
                      <li>• Wind chill: Factor into clothing</li>
                      <li>• Visibility: Check air quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Weather Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Space Weather</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Solar activity and geomagnetic conditions determine aurora intensity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">☀️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Solar Activity</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  Solar wind and coronal mass ejections create the charged particles that cause aurora. 
                  Higher solar activity means stronger aurora displays.
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li>• Solar wind speed: 400+ km/s</li>
                  <li>• IMF Bz: Negative values</li>
                  <li>• Solar flares: M-class or higher</li>
                  <li>• CMEs: Coronal mass ejections</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">🧲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Kp Index</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4 flex-grow">
                  The Kp index measures geomagnetic activity. Higher values indicate stronger 
                  aurora activity and better viewing chances at lower latitudes.
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li>• Kp 3-4: Good aurora activity</li>
                  <li>• Kp 5+: Strong aurora storms</li>
                  <li>• Kp 6+: Aurora visible further south</li>
                  <li>• Kp 7+: Major geomagnetic storm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timing Conditions Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Optimal Timing</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                When conditions align for the best aurora viewing
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Daily Timing</h3>
                  <span className="text-blue-300 text-sm font-medium">9 PM - 2 AM</span>
                </div>
                <p className="text-white/70 font-light">
                  Peak aurora activity typically occurs between 9 PM and 2 AM local time, when the sky is darkest and geomagnetic activity is often highest.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Seasonal Timing</h3>
                  <span className="text-green-300 text-sm font-medium">Sep - Mar</span>
                </div>
                <p className="text-white/70 font-light">
                  Best viewing seasons are autumn and spring when nights are dark but weather is often clearer than mid-winter. Equinoxes (March/September) often show higher activity.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Moon Phase</h3>
                  <span className="text-purple-300 text-sm font-medium">New Moon</span>
                </div>
                <p className="text-white/70 font-light">
                  New moon periods provide the darkest skies for aurora viewing. Full moon can wash out faint aurora displays but can create beautiful landscape lighting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Ready to Check Conditions?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the ideal conditions, learn the best time to visit and start planning your aurora adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/best-time-to-visit"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Best Time to Visit
              </Link>
              <Link 
                href="/guide/where-to-look"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Where to Look
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