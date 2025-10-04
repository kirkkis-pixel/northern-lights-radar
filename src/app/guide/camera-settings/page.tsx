import { Metadata } from 'next';
import Link from 'next/link';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import TonightCard from '@/components/TonightCard';

export const metadata: Metadata = {
  title: 'Northern Lights Camera Settings - Complete Photography Guide',
  description: 'Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions for stunning aurora photos.',
  keywords: 'northern lights photography, aurora camera settings, aurora photography guide, Finland aurora photos',
  openGraph: {
    title: 'Northern Lights Camera Settings - Complete Photography Guide',
    description: 'Complete guide to photographing the aurora borealis with camera settings and equipment.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Camera Settings - Complete Photography Guide',
    description: 'Complete guide to photographing the aurora borealis.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/camera-settings',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Northern Lights Camera Settings - Complete Photography Guide',
  description: 'Complete guide to photographing the aurora borealis. Camera settings, equipment recommendations, and step-by-step instructions.',
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

export default function CameraSettingsPage() {
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
              <span className="text-white/80">Camera Settings</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-40 overflow-hidden">
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
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Northern Lights</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  Camera Settings
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete photography guide with exact camera settings, equipment recommendations, 
                and step-by-step instructions for stunning aurora photos.
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
                Check Tonight's Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Perfect conditions make for perfect photos - check the current aurora activity
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TonightCard 
                latitude={66.5039} 
                longitude={25.7294} 
                cityName="Rovaniemi" 
                description="Current conditions for aurora photography in Lapland"
              />
            </div>
          </div>
        </div>

        {/* Essential Equipment */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Essential Equipment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Must-Have Items</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">📷</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Camera with Manual Mode</h4>
                        <p className="text-gray-600 text-sm">DSLR, mirrorless, or advanced compact camera</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">🔭</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Wide-Angle Lens</h4>
                        <p className="text-gray-600 text-sm">14-24mm for full-frame, 10-16mm for crop sensor</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">📐</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sturdy Tripod</h4>
                        <p className="text-gray-600 text-sm">Essential for long exposures in cold weather</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">🔋</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Extra Batteries</h4>
                        <p className="text-gray-600 text-sm">Cold weather drains batteries quickly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Accessories</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">📱</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Remote Shutter Release</h4>
                        <p className="text-gray-600 text-sm">Prevents camera shake during exposure</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">🔦</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Headlamp with Red Light</h4>
                        <p className="text-gray-600 text-sm">Preserves night vision while setting up</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">💾</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fast Memory Cards</h4>
                        <p className="text-gray-600 text-sm">High-speed cards for continuous shooting</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">🧤</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Camera Gloves</h4>
                        <p className="text-gray-600 text-sm">Thin gloves that allow camera operation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Settings */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Camera Settings Guide
            </h2>
            
            <div className="space-y-8">
              {/* Basic Settings */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Starting Point Settings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Mode:</span>
                        <span className="font-mono text-gray-900">Manual (M)</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Aperture:</span>
                        <span className="font-mono text-gray-900">f/2.8</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Shutter Speed:</span>
                        <span className="font-mono text-gray-900">15 seconds</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">ISO:</span>
                        <span className="font-mono text-gray-900">1600</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Focus:</span>
                        <span className="font-mono text-gray-900">Manual</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">White Balance:</span>
                        <span className="font-mono text-gray-900">Daylight</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Adjustment Guidelines</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Aperture (f-stop)</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• f/1.4 - f/2.8: Maximum light, shallow depth</li>
                          <li>• f/2.8 - f/4: Good balance, sharp images</li>
                          <li>• f/4 - f/5.6: More depth, less light</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Shutter Speed</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 5-10s: Fast-moving aurora</li>
                          <li>• 15-25s: Slow-moving aurora</li>
                          <li>• 30s+: Static aurora, star trails</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">ISO</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 800-1600: Clean images</li>
                          <li>• 1600-3200: Good balance</li>
                          <li>• 3200-6400: More noise, more light</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Advanced Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Focus Settings</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h5 className="font-medium text-blue-900 mb-2">Manual Focus Method</h5>
                        <ol className="text-sm text-blue-800 space-y-1">
                          <li>1. Set lens to manual focus</li>
                          <li>2. Focus on distant stars or mountains</li>
                          <li>3. Use live view with magnification</li>
                          <li>4. Set to infinity (∞) mark</li>
                        </ol>
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl">
                        <h5 className="font-medium text-green-900 mb-2">Auto Focus Method</h5>
                        <ol className="text-sm text-green-800 space-y-1">
                          <li>1. Focus on bright star or distant light</li>
                          <li>2. Switch to manual focus</li>
                          <li>3. Don't touch focus ring</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Exposure Settings</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-yellow-50 rounded-xl">
                        <h5 className="font-medium text-yellow-900 mb-2">Exposure Compensation</h5>
                        <p className="text-sm text-yellow-800">
                          Start at 0, adjust +1/3 to +1 stop if aurora is too dark
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl">
                        <h5 className="font-medium text-purple-900 mb-2">Metering Mode</h5>
                        <p className="text-sm text-purple-800">
                          Use spot metering on the aurora itself, not the sky
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl">
                        <h5 className="font-medium text-red-900 mb-2">Image Stabilization</h5>
                        <p className="text-sm text-red-800">
                          Turn OFF when using tripod to prevent blur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Step-by-Step Photography Process
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Setup and Preparation",
                  content: [
                    "Arrive at location 30 minutes before sunset",
                    "Set up tripod on stable ground",
                    "Attach camera and level it",
                    "Check all settings before it gets dark",
                    "Test focus on distant objects"
                  ]
                },
                {
                  step: 2,
                  title: "Initial Settings",
                  content: [
                    "Set camera to Manual mode (M)",
                    "Aperture: f/2.8",
                    "Shutter speed: 15 seconds",
                    "ISO: 1600",
                    "Focus: Manual, set to infinity",
                    "White balance: Daylight"
                  ]
                },
                {
                  step: 3,
                  title: "Test Shots",
                  content: [
                    "Take test shot with current settings",
                    "Check histogram for proper exposure",
                    "Adjust ISO if too dark/bright",
                    "Fine-tune focus if needed",
                    "Check for camera shake or blur"
                  ]
                },
                {
                  step: 4,
                  title: "Aurora Photography",
                  content: [
                    "Wait for aurora activity",
                    "Take multiple shots as aurora changes",
                    "Vary shutter speed (5-30 seconds)",
                    "Adjust ISO based on aurora brightness",
                    "Keep aperture wide open (f/2.8 or wider)"
                  ]
                },
                {
                  step: 5,
                  title: "Post-Processing",
                  content: [
                    "Import photos to computer",
                    "Adjust exposure and contrast",
                    "Enhance aurora colors carefully",
                    "Reduce noise if needed",
                    "Crop and straighten if necessary"
                  ]
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.content.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Common Problems & Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Blurry Images</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Check tripod stability</li>
                    <li>• Use remote shutter release</li>
                    <li>• Turn off image stabilization</li>
                    <li>• Check focus settings</li>
                    <li>• Avoid touching camera during exposure</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Too Dark</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Increase ISO (1600-6400)</li>
                    <li>• Use wider aperture (f/1.4-f/2.8)</li>
                    <li>• Increase shutter speed (up to 30s)</li>
                    <li>• Check if lens cap is off</li>
                    <li>• Use exposure compensation</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Too Bright</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Decrease ISO (800-1600)</li>
                    <li>• Use smaller aperture (f/4-f/5.6)</li>
                    <li>• Decrease shutter speed (5-10s)</li>
                    <li>• Use exposure compensation (-1/3 to -1)</li>
                    <li>• Check for light pollution</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Battery Issues</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Keep batteries warm in pocket</li>
                    <li>• Bring 2-3 extra batteries</li>
                    <li>• Use battery grip if available</li>
                    <li>• Turn off LCD when not needed</li>
                    <li>• Use external power source</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Related Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/guide/how-to-see-the-northern-lights"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How to See the Northern Lights
                </h3>
                <p className="text-gray-600">
                  Complete beginner's guide to aurora hunting in Finland.
                </p>
              </Link>
              
              <Link
                href="/guide/best-time-in-finland"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Time in Finland
                </h3>
                <p className="text-gray-600">
                  Seasonal guide to aurora viewing with month-by-month breakdowns.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Attribution Footer */}
        <div className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Northern Lights Radar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
