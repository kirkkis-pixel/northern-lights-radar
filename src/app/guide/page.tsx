import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Northern Lights Guide - Complete Aurora Viewing Guide 2024',
  description: 'Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips, photography advice, safety information, and equipment recommendations.',
  keywords: 'northern lights guide, aurora guide, how to see northern lights, aurora photography, aurora viewing tips, aurora equipment, aurora safety, Lapland aurora guide',
  openGraph: {
    title: 'Northern Lights Guide - Complete Aurora Viewing Guide 2024',
    description: 'Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips and advice.',
    type: 'website',
    url: 'https://northernlightsradar.com/guide',
    images: [
      {
        url: 'https://northernlightsradar.com/og-northern-lights-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights Guide - Complete Aurora Viewing Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Guide - Complete Aurora Viewing Guide 2024',
    description: 'Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips and advice.',
    images: ['https://northernlightsradar.com/og-northern-lights-guide.jpg'],
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
        title: 'Ideal Conditions',
        description: 'Perfect weather and space weather conditions',
        href: '/guide/ideal-conditions',
        icon: '🌤️'
      },
      {
        title: 'Where to Look',
        description: 'Best directions and locations for aurora viewing',
        href: '/guide/where-to-look',
        icon: '🧭'
      }
    ]
  },
  {
    title: 'Preparation',
    guides: [
      {
        title: 'What to Wear',
        description: 'Essential clothing for Arctic conditions',
        href: '/guide/what-to-wear',
        icon: '🧥'
      },
      {
        title: 'Equipment Checklist',
        description: 'Essential gear for aurora hunting',
        href: '/guide/equipment-checklist',
        icon: '🎒'
      },
      {
        title: 'Safety Tips',
        description: 'Stay safe while chasing the northern lights',
        href: '/guide/safety-tips',
        icon: '⚠️'
      },
      {
        title: 'Perfect Locations',
        description: 'Top aurora viewing spots in Lapland',
        href: '/guide/perfect-locations',
        icon: '📍'
      }
    ]
  },
  {
    title: 'Photography',
    guides: [
      {
        title: 'Photography Tips',
        description: 'Master aurora photography techniques',
        href: '/guide/photography-tips',
        icon: '📸'
      },
      {
        title: 'Camera Settings',
        description: 'Complete camera setup guide for aurora',
        href: '/guide/camera-settings',
        icon: '⚙️'
      }
    ]
  },
  {
    title: 'Specialized Guides',
    guides: [
      {
        title: 'Best Time in Finland',
        description: 'Finland-specific aurora timing guide',
        href: '/guide/best-time-in-finland',
        icon: '🇫🇮'
      },
      {
        title: 'Aurora Myths',
        description: 'Debunking common aurora misconceptions',
        href: '/guide/aurora-myths',
        icon: '❌'
      }
    ]
  }
];

export default function GuidePage() {
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
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Complete Guide</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights</div>
                <div className="text-cyan-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Guide
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete guide to seeing the northern lights. Learn when, where, and how to view the aurora borealis with expert tips, photography advice, safety information, and equipment recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Guide Categories Section */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Complete Aurora Guide</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Everything you need to know about seeing and photographing the northern lights
              </p>
            </div>

            <div className="space-y-16">
              {guideCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-light text-white mb-8 text-center">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.guides.map((guide, guideIndex) => (
                      <Link
                        key={guideIndex}
                        href={guide.href}
                        className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
                      >
                        <div className="text-3xl mb-4">{guide.icon}</div>
                        <h4 className="text-lg font-medium text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-white/70 font-light text-sm leading-relaxed flex-grow">
                          {guide.description}
                        </p>
                        <div className="mt-4 flex items-center text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors">
                          <span>Read Guide</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-6">Quick Aurora Tips</h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
                Essential tips for successful aurora viewing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-300 text-xl">⏰</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Timing</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Best months: September-March</li>
                  <li>• Peak hours: 9 PM - 2 AM</li>
                  <li>• Equinoxes: Higher activity</li>
                  <li>• Plan 5-7 day trips</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-300 text-xl">🌤️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Conditions</h3>
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>• Clear or partly cloudy skies</li>
                  <li>• Minimal light pollution</li>
                  <li>• Kp index 3+ for good activity</li>
                  <li>• Check space weather forecasts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Ready to Hunt</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Ready to See Aurora?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Start with our beginner guide and work your way through all the essential information for successful aurora viewing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/guide/how-to-see-the-northern-lights"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Start with Beginner Guide
              </Link>
              <Link 
                href="/guide/best-time-to-visit"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Best Time to Visit
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