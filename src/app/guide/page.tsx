import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Northern Lights Guide - Complete Aurora Viewing Guide',
  description: 'Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips, photography advice, and safety information.',
  keywords: 'northern lights guide, aurora guide, how to see northern lights, aurora photography, aurora viewing tips',
  openGraph: {
    title: 'Northern Lights Guide - Complete Aurora Viewing Guide',
    description: 'Complete guide to seeing the northern lights with expert tips and advice.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/guide',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights Guide - Complete Aurora Viewing Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Guide - Complete Aurora Viewing Guide',
    description: 'Complete guide to seeing the northern lights with expert tips and advice.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide',
  },
};

const guideCategories = [
  {
    title: 'Getting Started',
    guides: [
      {
        title: 'How to See the Northern Lights',
        description: 'Essential tips for first-time aurora viewers',
        href: '/guide/how-to-see-the-northern-lights',
        icon: '🌌'
      },
      {
        title: 'Best Time to Visit',
        description: 'When to plan your aurora adventure',
        href: '/guide/best-time-to-visit',
        icon: '📅'
      },
      {
        title: 'Perfect Locations',
        description: 'Where to find the best viewing spots',
        href: '/guide/perfect-locations',
        icon: '📍'
      }
    ]
  },
  {
    title: 'Preparation',
    guides: [
      {
        title: 'What to Wear',
        description: 'Essential clothing for cold weather viewing',
        href: '/guide/what-to-wear',
        icon: '🧥'
      },
      {
        title: 'Equipment Checklist',
        description: 'What to bring for aurora viewing',
        href: '/guide/equipment-checklist',
        icon: '🎒'
      },
      {
        title: 'Safety Tips',
        description: 'Stay safe while chasing the aurora',
        href: '/guide/safety-tips',
        icon: '⚠️'
      }
    ]
  },
  {
    title: 'Photography',
    guides: [
      {
        title: 'Photography Tips',
        description: 'Capture stunning aurora photographs',
        href: '/guide/photography-tips',
        icon: '📸'
      },
      {
        title: 'Camera Settings',
        description: 'Technical settings for aurora photography',
        href: '/guide/camera-settings',
        icon: '⚙️'
      }
    ]
  },
  {
    title: 'Understanding Aurora',
    guides: [
      {
        title: 'Where to Look',
        description: 'How to spot aurora in the night sky',
        href: '/guide/where-to-look',
        icon: '👀'
      },
      {
        title: 'Ideal Conditions',
        description: 'Weather and space conditions for aurora',
        href: '/guide/ideal-conditions',
        icon: '🌤️'
      },
      {
        title: 'Aurora Myths',
        description: 'Common misconceptions about the northern lights',
        href: '/guide/aurora-myths',
        icon: '❓'
      }
    ]
  }
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Regional Navigation */}
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-20 md:pt-40 overflow-hidden">
        {/* Subtle Aurora Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse shadow-lg shadow-cyan-400/30" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse shadow-lg shadow-blue-400/40" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-pulse shadow-lg shadow-purple-400/35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Northern Lights
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips, photography advice, and safety information.
            </p>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Complete Aurora Guide
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about seeing the northern lights, from planning your trip to capturing perfect photographs.
            </p>
          </div>

          <div className="space-y-16">
            {guideCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide, guideIndex) => (
                    <Link key={guideIndex} href={guide.href} className="group">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                          <span className="text-2xl">{guide.icon}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-white/70 leading-relaxed">
                          {guide.description}
                        </p>
                        <div className="mt-6 flex items-center text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          <span className="text-sm font-medium">Read Guide</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Quick Tips
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Essential tips for successful aurora viewing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dark Skies</h3>
                <p className="text-white/70 text-sm">Get away from city lights for the best visibility</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Clear Weather</h3>
                <p className="text-white/70 text-sm">Check weather forecasts for clear skies</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Peak Hours</h3>
                <p className="text-white/70 text-sm">Best viewing is typically 10 PM to 2 AM</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Aurora Apps</h3>
                <p className="text-white/70 text-sm">Use aurora forecast apps for real-time alerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to See the Aurora?
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
            Check live conditions and start planning your northern lights adventure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Check Live Conditions
            </Link>
            <Link 
              href="/why-lapland"
              className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Why Choose Lapland?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}