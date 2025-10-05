import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Photography Tips - Complete Northern Lights Photography Guide 2024',
  description: 'Master aurora photography with our comprehensive guide. Learn camera settings, equipment, composition techniques, and post-processing tips for capturing stunning northern lights photos in Lapland.',
  keywords: 'aurora photography, northern lights photography, aurora camera settings, northern lights camera, aurora photography tips, Lapland photography, aurora photography guide, night photography',
  openGraph: {
    title: 'Aurora Photography Tips - Complete Northern Lights Photography Guide 2024',
    description: 'Master aurora photography with our comprehensive guide. Learn camera settings, equipment, and composition techniques for stunning northern lights photos.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/photography-tips',
    images: [
      {
        url: 'https://northernlightsradar.com/og-aurora-photography.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Photography Tips - Northern Lights Photography Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Photography Tips - Complete Northern Lights Photography Guide 2024',
    description: 'Master aurora photography with our comprehensive guide. Learn camera settings, equipment, and composition techniques for stunning northern lights photos.',
    images: ['https://northernlightsradar.com/og-aurora-photography.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/photography-tips',
  },
};

export default function PhotographyTipsPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Photography Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Aurora</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Photography
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Master aurora photography with our comprehensive guide. Learn camera settings, equipment, composition techniques, and post-processing tips for capturing stunning northern lights photos in Lapland.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Camera Settings Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Camera Settings</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Master these fundamental settings for successful aurora photography
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-blue-300 text-xl">📸</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Manual Mode Settings</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Switch to manual mode for complete control over your camera settings. 
                      Aurora photography requires precise adjustments that automatic modes can&apos;t handle.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• Aperture: f/2.8 or wider (f/1.4-f/2.8)</li>
                      <li>• Shutter Speed: 5-30 seconds</li>
                      <li>• ISO: 800-3200 (adjust based on noise tolerance)</li>
                      <li>• Focus: Manual focus to infinity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <span className="text-green-300 text-xl">⚙️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">Advanced Settings</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-4">
                      Fine-tune these settings for optimal aurora capture and image quality.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• White Balance: Daylight or Auto</li>
                      <li>• Image Format: RAW for maximum flexibility</li>
                      <li>• Long Exposure Noise Reduction: On</li>
                      <li>• Image Stabilization: Off (when using tripod)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Essentials Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Essential Equipment</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                The right gear makes all the difference in aurora photography
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-300 text-xl">📷</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Camera & Lens</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• DSLR or mirrorless camera</li>
                  <li>• Wide-angle lens (14-24mm)</li>
                  <li>• Fast aperture (f/2.8 or wider)</li>
                  <li>• Manual focus capability</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-yellow-300 text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Support & Accessories</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Sturdy tripod</li>
                  <li>• Remote shutter release</li>
                  <li>• Extra batteries</li>
                  <li>• Lens cleaning kit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Composition Techniques Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Composition Techniques</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Create compelling aurora photographs with these composition tips
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Rule of Thirds</h3>
                  <span className="text-blue-300 text-sm font-medium">Basic Composition</span>
                </div>
                <p className="text-white/70 font-light">
                  Place the horizon line on the upper or lower third of the frame. Position aurora features at intersection points for dynamic composition.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Foreground Interest</h3>
                  <span className="text-green-300 text-sm font-medium">Depth & Scale</span>
                </div>
                <p className="text-white/70 font-light">
                  Include interesting foreground elements like trees, mountains, or buildings to add depth and provide scale to the aurora display.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Leading Lines</h3>
                  <span className="text-purple-300 text-sm font-medium">Visual Flow</span>
                </div>
                <p className="text-white/70 font-light">
                  Use natural lines like shorelines, roads, or mountain ridges to guide the viewer&apos;s eye toward the aurora.
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
              Ready to Capture Aurora?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Now that you know the photography basics, learn about camera settings and start planning your aurora photography adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/camera-settings"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Camera Settings
              </Link>
              <Link 
                href="/guide/perfect-locations"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Perfect Locations
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