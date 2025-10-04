import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Northern Lights Photography Tips - Complete Guide',
  description: 'Learn how to photograph the northern lights with expert tips, camera settings, and techniques. Capture stunning aurora photographs in Lapland.',
  keywords: 'northern lights photography, aurora photography, camera settings, aurora tips, photography guide',
  openGraph: {
    title: 'Northern Lights Photography Tips - Complete Guide',
    description: 'Learn how to photograph the northern lights with expert tips and techniques.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide/photography-tips',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights Photography Tips - Complete Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Photography Tips - Complete Guide',
    description: 'Learn how to photograph the northern lights with expert tips and techniques.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/photography-tips',
  },
};

export default function PhotographyTipsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Regional Navigation */}
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-20 md:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Aurora
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Photography
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
              Learn how to photograph the northern lights with expert tips, camera settings, and techniques. Capture stunning aurora photographs in Lapland.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Capture the Magic
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Photographing the northern lights can be challenging but incredibly rewarding. With the right equipment, settings, and techniques, you can capture stunning images of this natural phenomenon.
            </p>
          </div>
        </div>
      </div>

      {/* Essential Equipment */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Essential Equipment
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              The right gear is crucial for successful aurora photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Camera</h3>
              <ul className="space-y-2 text-white/70">
                <li>• DSLR or mirrorless camera</li>
                <li>• Manual mode capability</li>
                <li>• Good low-light performance</li>
                <li>• Raw format support</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lens</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Wide-angle lens (14-24mm)</li>
                <li>• Fast aperture (f/2.8 or wider)</li>
                <li>• Manual focus capability</li>
                <li>• Good sharpness wide open</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Tripod</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Sturdy, stable tripod</li>
                <li>• Ball head or pan-tilt head</li>
                <li>• Quick release plate</li>
                <li>• Wind resistance</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Batteries</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Extra camera batteries</li>
                <li>• Battery grip (optional)</li>
                <li>• Keep batteries warm</li>
                <li>• Battery charger</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💾</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Memory Cards</h3>
              <ul className="space-y-2 text-white/70">
                <li>• High-speed memory cards</li>
                <li>• Large capacity (64GB+)</li>
                <li>• Multiple cards</li>
                <li>• Card reader</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Accessories</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Remote shutter release</li>
                <li>• Headlamp with red light</li>
                <li>• Lens cleaning kit</li>
                <li>• Camera rain cover</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Settings */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Camera Settings
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              The right camera settings are crucial for capturing the aurora. These are starting points - adjust based on conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Basic Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Mode</span>
                    <span className="text-cyan-400 font-medium">Manual (M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Aperture</span>
                    <span className="text-cyan-400 font-medium">f/2.8 or wider</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Shutter Speed</span>
                    <span className="text-cyan-400 font-medium">10-30 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">ISO</span>
                    <span className="text-cyan-400 font-medium">800-3200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Focus</span>
                    <span className="text-cyan-400 font-medium">Manual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Format</span>
                    <span className="text-cyan-400 font-medium">RAW</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Advanced Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">White Balance</span>
                    <span className="text-cyan-400 font-medium">Daylight (5500K)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Image Stabilization</span>
                    <span className="text-cyan-400 font-medium">Off (tripod)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Long Exposure NR</span>
                    <span className="text-cyan-400 font-medium">Off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Mirror Lock-up</span>
                    <span className="text-cyan-400 font-medium">On</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Focusing Tips</h3>
                <div className="space-y-4 text-white/70">
                  <p>• Set lens to manual focus</p>
                  <p>• Focus on a distant light or star</p>
                  <p>• Use live view with magnification</p>
                  <p>• Focus at infinity for wide shots</p>
                  <p>• Check focus with test shots</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Composition Tips</h3>
                <div className="space-y-4 text-white/70">
                  <p>• Include foreground elements</p>
                  <p>• Use rule of thirds</p>
                  <p>• Look for reflections</p>
                  <p>• Include people for scale</p>
                  <p>• Frame with trees or mountains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Techniques */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Photography Techniques
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Master these techniques to capture stunning aurora photographs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Timing</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Arrive early to set up</li>
                <li>• Take test shots before aurora</li>
                <li>• Be ready for quick changes</li>
                <li>• Shoot during peak activity</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Scout locations during day</li>
                <li>• Find interesting foregrounds</li>
                <li>• Avoid light pollution</li>
                <li>• Consider safety factors</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Composition</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Use leading lines</li>
                <li>• Include scale references</li>
                <li>• Balance sky and ground</li>
                <li>• Try different angles</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Use remote shutter release</li>
                <li>• Minimize camera shake</li>
                <li>• Check histogram regularly</li>
                <li>• Take multiple exposures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Processing */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Post-Processing
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Enhance your aurora photographs with these post-processing tips.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Basic Adjustments</h3>
                <div className="space-y-4 text-white/70">
                  <p>• <strong>Exposure:</strong> Adjust brightness and contrast</p>
                  <p>• <strong>White Balance:</strong> Correct color temperature</p>
                  <p>• <strong>Highlights/Shadows:</strong> Recover detail</p>
                  <p>• <strong>Clarity:</strong> Enhance aurora definition</p>
                  <p>• <strong>Vibrance:</strong> Boost aurora colors</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Advanced Techniques</h3>
                <div className="space-y-4 text-white/70">
                  <p>• <strong>Noise Reduction:</strong> Clean up high ISO noise</p>
                  <p>• <strong>Sharpening:</strong> Enhance aurora details</p>
                  <p>• <strong>Color Grading:</strong> Enhance aurora colors</p>
                  <p>• <strong>Local Adjustments:</strong> Target specific areas</p>
                  <p>• <strong>Blending:</strong> Combine multiple exposures</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Software Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Adobe Lightroom</span>
                    <span className="text-green-400 text-sm">Recommended</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Adobe Photoshop</span>
                    <span className="text-green-400 text-sm">Advanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Capture One</span>
                    <span className="text-blue-400 text-sm">Professional</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Luminar</span>
                    <span className="text-blue-400 text-sm">AI-Powered</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Common Mistakes</h3>
                <div className="space-y-4 text-white/70">
                  <p>• Over-processing aurora colors</p>
                  <p>• Excessive noise reduction</p>
                  <p>• Poor white balance</p>
                  <p>• Over-sharpening</p>
                  <p>• Ignoring foreground elements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Capture the Aurora?
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
            Check live conditions and start planning your northern lights photography adventure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Check Live Conditions
            </Link>
            <Link 
              href="/guide"
              className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              More Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}