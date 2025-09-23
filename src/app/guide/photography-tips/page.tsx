import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Northern Lights Photography Tips - Complete Camera Guide',
  description: 'Master northern lights photography with expert tips, camera settings, and techniques. Learn how to capture stunning aurora photos in Lapland with professional guidance.',
  keywords: 'northern lights photography, aurora photography tips, camera settings aurora, night photography, aurora camera guide',
  openGraph: {
    title: 'Northern Lights Photography Tips - Complete Camera Guide',
    description: 'Master northern lights photography with expert tips, camera settings, and techniques.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Photography Tips - Complete Camera Guide',
    description: 'Master northern lights photography with expert tips and techniques.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/photography-tips',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Northern Lights Photography Tips - Complete Camera Guide',
  description: 'Master northern lights photography with expert tips, camera settings, and techniques for capturing stunning aurora photos.',
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

export default function PhotographyTipsPage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Photography Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Photography Tips
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Master the art of capturing stunning aurora photos with expert techniques and camera settings
              </p>
            </div>
          </div>
        </div>

        {/* Essential Camera Settings */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Camera Settings</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Essential Camera Settings
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Master these fundamental settings for successful aurora photography
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">📸</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Aperture (f-stop)</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Use the widest aperture your lens allows for maximum light capture
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>f/1.4 - f/2.8 ideal for aurora</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>f/4 maximum for acceptable results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Wider aperture = more light</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">⏱️</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Shutter Speed</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Balance between capturing light and preventing star trails
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>5-30 seconds for aurora</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>500 rule: 500/focal length</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Faster for bright aurora</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">ISO Settings</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Higher ISO for low light, but watch for noise
                </p>
                <ul className="text-white/60 font-light space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>ISO 800-3200 typical range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Test your camera&apos;s noise levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Higher ISO = more noise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Techniques */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Focus Techniques</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Achieving Sharp Focus
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Critical techniques for sharp aurora photos in complete darkness
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Manual Focus Methods</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Infinity Focus</span>
                        <p className="text-white/60 text-sm mt-1">Set lens to infinity mark, then back off slightly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Live View Zoom</span>
                        <p className="text-white/60 text-sm mt-1">Use 10x zoom on bright stars to focus</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Hyperfocal Distance</span>
                        <p className="text-white/60 text-sm mt-1">Focus at hyperfocal distance for maximum depth</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Focus Tips</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Use a Bright Star</span>
                        <p className="text-white/60 text-sm mt-1">Focus on the brightest star in the sky</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Tape Focus Ring</span>
                        <p className="text-white/60 text-sm mt-1">Tape focus ring once set to prevent movement</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Check Focus Regularly</span>
                        <p className="text-white/60 text-sm mt-1">Review images and adjust if needed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Recommendations */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Equipment</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Essential Photography Equipment
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Must-have gear for successful aurora photography
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">📷</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Camera Body</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Full-frame DSLR or mirrorless with excellent low-light performance
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Manual mode capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Good high ISO performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Live view with zoom</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Lenses</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Wide-angle lenses with fast apertures for maximum light capture
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>14-24mm f/2.8 or faster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>24-70mm f/2.8 for details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Prime lenses f/1.4-f/2.8</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Tripod</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Sturdy, stable tripod essential for long exposures
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Carbon fiber or aluminum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Ball head for easy adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Spiked feet for snow/ice</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">🔋</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Batteries & Memory</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Cold weather drains batteries faster - bring extras
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>3-4 spare batteries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Fast memory cards (64GB+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Keep batteries warm</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Remote Shutter</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Prevent camera shake during long exposures
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Wired or wireless remote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Intervalometer for timelapse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>2-second timer as backup</span>
                  </li>
                </ul>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span className="text-cyan-300 text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Lighting & Accessories</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Additional tools for better aurora photography
                </p>
                <ul className="text-white/60 font-light space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Red headlamp for night vision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Lens cleaning kit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3">•</span>
                    <span>Hand warmers for equipment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Composition Tips */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Composition</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Composition Techniques
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Create compelling aurora photos with strong composition
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Foreground Elements</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Trees and Mountains</span>
                        <p className="text-white/60 text-sm mt-1">Add depth and scale to your aurora photos</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Reflections</span>
                        <p className="text-white/60 text-sm mt-1">Water or ice can create stunning reflections</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Buildings</span>
                        <p className="text-white/60 text-sm mt-1">Include cabins or structures for context</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white mb-6">Rule of Thirds</h3>
                  <ul className="text-white/70 font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Aurora Placement</span>
                        <p className="text-white/60 text-sm mt-1">Position aurora along the upper third line</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Foreground Balance</span>
                        <p className="text-white/60 text-sm mt-1">Place interesting elements at intersection points</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3">•</span>
                      <div>
                        <span className="font-medium">Leading Lines</span>
                        <p className="text-white/60 text-sm mt-1">Use natural lines to guide the eye</p>
                      </div>
                    </li>
                  </ul>
                </div>
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
