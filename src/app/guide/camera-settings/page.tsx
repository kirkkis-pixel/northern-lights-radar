import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Northern Lights Camera Settings - Complete Aurora Photography Guide 2024',
  description: 'Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions for stunning aurora photos in Lapland.',
  keywords: 'northern lights photography, aurora camera settings, aurora photography guide, Finland aurora photos, aurora camera guide, northern lights camera settings, aurora photography tips',
  openGraph: {
    title: 'Northern Lights Camera Settings - Complete Aurora Photography Guide 2024',
    description: 'Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions for stunning aurora photos.',
    type: 'article',
    url: 'https://northernlightsradar.com/guide/camera-settings',
    images: [
      {
        url: 'https://northernlightsradar.com/og-aurora-camera-settings.jpg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights Camera Settings - Aurora Photography Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Camera Settings - Complete Aurora Photography Guide 2024',
    description: 'Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions for stunning aurora photos.',
    images: ['https://northernlightsradar.com/og-aurora-camera-settings.jpg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/camera-settings',
  },
};

export default function CameraSettingsPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Camera Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Camera Settings</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  for Aurora
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions for stunning aurora photos in Lapland.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Settings Section */}
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
                      Switch to manual mode for complete control. Aurora photography requires precise 
                      adjustments that automatic modes cannot handle effectively.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60 font-light">
                      <div>
                        <strong className="text-white">Aperture:</strong> f/2.8 or wider<br/>
                        <strong className="text-white">Shutter Speed:</strong> 5-30 seconds<br/>
                      </div>
                      <div>
                        <strong className="text-white">ISO:</strong> 800-3200<br/>
                        <strong className="text-white">Focus:</strong> Manual to infinity<br/>
                      </div>
                    </div>
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
                      Fine-tune these settings for optimal image quality and aurora capture.
                    </p>
                    <ul className="text-white/60 font-light space-y-2">
                      <li>• White Balance: Daylight or Auto</li>
                      <li>• Image Format: RAW for maximum flexibility</li>
                      <li>• Long Exposure Noise Reduction: On</li>
                      <li>• Image Stabilization: Off (when using tripod)</li>
                      <li>• Live View: Use for focusing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Step-by-Step Guide</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Follow these steps for perfect aurora photography
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Step 1: Setup</h3>
                  <span className="text-blue-300 text-sm font-medium">Preparation</span>
                </div>
                <p className="text-white/70 font-light">
                  Mount camera on tripod, attach remote shutter release, and ensure battery is fully charged. Set camera to manual mode and RAW format.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Step 2: Focus</h3>
                  <span className="text-green-300 text-sm font-medium">Critical Step</span>
                </div>
                <p className="text-white/70 font-light">
                  Switch to manual focus and set to infinity. Use live view to zoom in on a distant light or star to fine-tune focus. Test focus with a few shots.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Step 3: Exposure</h3>
                  <span className="text-purple-300 text-sm font-medium">Key Settings</span>
                </div>
                <p className="text-white/70 font-light">
                  Start with f/2.8, ISO 1600, and 15-second exposure. Adjust based on aurora brightness and movement. Brighter aurora needs shorter exposures.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Step 4: Composition</h3>
                  <span className="text-yellow-300 text-sm font-medium">Artistic Touch</span>
                </div>
                <p className="text-white/70 font-light">
                  Include interesting foreground elements like trees, mountains, or buildings. Use rule of thirds and leading lines to create compelling compositions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Recommendations Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Equipment Recommendations</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Essential gear for aurora photography success
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
                  <li>• Good low-light performance</li>
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
                  <li>• Extra batteries (cold drains them)</li>
                  <li>• Lens cleaning kit</li>
                  <li>• Headlamp with red light</li>
                </ul>
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
              Now that you know the camera settings, learn photography tips and start planning your aurora photography adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/photography-tips"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Photography Tips
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