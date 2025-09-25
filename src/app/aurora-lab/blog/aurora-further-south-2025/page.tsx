import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why You Might See the Northern Lights Further South This Year | Aurora Lab',
  description: 'Solar activity is peaking, making the aurora visible at latitudes far below the Arctic. Learn why 2025 could be your chance to see them closer to home.',
  keywords: 'northern lights, aurora borealis 2025, solar maximum, see aurora south, aurora further south, solar cycle 2025',
  openGraph: {
    title: 'Why You Might See the Northern Lights Further South This Year | Aurora Lab',
    description: 'Solar activity is peaking, making the aurora visible at latitudes far below the Arctic. Learn why 2025 could be your chance to see them closer to home.',
    type: 'article',
    publishedTime: '2024-12-19T00:00:00Z',
    authors: ['Aurora Lab Research Team'],
  },
};

export default function AuroraFurtherSouth2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-8xl mx-auto px-16 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-7 h-7 bg-white rounded-full"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                  Northern Lights
                </h1>
                <p className="text-sm text-gray-400 font-light uppercase tracking-wide">Radar</p>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link 
                href="/why-lapland" 
                className="text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
              >
                Why Lapland
              </Link>
              
              <Link 
                href="/finland/northern-lights" 
                className="text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
              >
                Finland
              </Link>
              
              <Link 
                href="/sweden/northern-lights" 
                className="text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
              >
                Sweden
              </Link>
              
              <Link 
                href="/norway/northern-lights" 
                className="text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
              >
                Norway
              </Link>

              <Link 
                href="/aurora-lab" 
                className="text-base font-light text-cyan-300 transition-colors duration-300"
              >
                Aurora Lab
              </Link>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-base font-light text-white hover:text-cyan-300 transition-colors duration-300">
                  <span>Guide</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/finland/northern-lights"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-base transition-colors duration-300"
            >
              Explore
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-white/60 mb-20">
            <Link href="/aurora-lab" className="hover:text-cyan-300 transition-colors">Aurora Lab</Link>
            <span>•</span>
            <Link href="/aurora-lab/blog" className="hover:text-cyan-300 transition-colors">Blog</Link>
            <span>•</span>
            <span className="text-white/40">Aurora Further South 2025</span>
          </div>

          {/* Article Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-12">
              <svg className="w-4 h-4 text-yellow-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm font-light text-yellow-300 tracking-[0.2em] uppercase">Solar Maximum 2025</span>
            </div>
            <h1 className="text-5xl font-thin text-white mb-6 leading-tight">
              Why You Might See the Northern Lights Further South This Year
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Solar activity is peaking, making the aurora visible at latitudes far below the Arctic. 
              Learn why 2025 could be your chance to see them closer to home.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/50">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Solar Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-12">
          <article className="prose prose-lg prose-invert max-w-none">
            {/* Lead Paragraph */}
            <div className="mb-12">
              <p className="text-2xl text-white/90 font-light leading-relaxed mb-6">
                If you&apos;ve noticed more friends posting aurora photos from places like Germany, the UK, or even parts of the U.S., 
                you&apos;re not imagining things. Thanks to a powerful upswing in solar activity, the northern lights are making rare 
                appearances far from their usual Arctic haunts.
              </p>
            </div>

            {/* The Solar Maximum Effect */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">The Solar Maximum Effect</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                Every ~11 years, the sun goes through a cycle of activity. During what scientists call the solar maximum, 
                eruptions of plasma and magnetic fields — coronal mass ejections (CMEs) — are more frequent. These streams 
                of charged particles hit Earth&apos;s magnetic field, generating auroras that extend further south.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-blue-300">NASA explains the solar cycle</strong> in detail, showing how these 
                      11-year cycles affect everything from satellite communications to aurora visibility. 
                      <a href="https://www.nasa.gov/mission_pages/sunearth/science/solar-cycle.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors ml-1">
                        Learn more about solar cycles →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why 2025 Is Special */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Why 2025 Is Special</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                The current solar cycle is expected to peak in 2025, with some predictions suggesting it may be one of the 
                most active in decades. That means the auroral oval, normally confined to high latitudes, expands southward.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20 text-center">
                  <div className="text-2xl font-light text-green-300 mb-2">Edinburgh</div>
                  <div className="text-sm text-white/60">Scotland, UK</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20 text-center">
                  <div className="text-2xl font-light text-blue-300 mb-2">Minneapolis</div>
                  <div className="text-sm text-white/60">Minnesota, USA</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20 text-center">
                  <div className="text-2xl font-light text-purple-300 mb-2">Hamburg</div>
                  <div className="text-sm text-white/60">Germany</div>
                </div>
              </div>
              
              <p className="text-lg text-white/80 font-light leading-relaxed">
                Cities like these may all get unexpected light shows during the 2025 solar maximum, bringing the aurora 
                to millions who have never seen it before.
              </p>
            </section>

            {/* How to Track Your Chances */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">How to Track Your Chances</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-400/30">
                    <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">NOAA Forecasts</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Follow NOAA&apos;s Space Weather Prediction Center for daily Kp index forecasts and real-time aurora predictions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Aurora Apps</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Use aurora apps or check sites like AuroraWatch UK for real-time alerts and notifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Dark Skies</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Remember: dark skies, low light pollution, and clear weather are essential for aurora viewing.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-yellow-300 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">Key Takeaway</h3>
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      You don&apos;t need to live in Lapland to see the aurora in 2025. Keep an eye on forecasts, 
                      and you might just catch them dancing above your own backyard.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-light text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/aurora-lab/blog/aurora-solar-cycle" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Solar Cycle Impact on Aurora Activity
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Understanding how the 11-year solar cycle affects aurora frequency and intensity patterns.
                </p>
              </Link>
              
              <Link href="/aurora-lab/blog/space-weather-monitoring" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Next-Generation Space Weather Monitoring
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Exploring the latest satellite constellations and ground-based sensors revolutionizing space weather prediction.
                </p>
              </Link>
            </div>
          </div>

          {/* Back to Aurora Lab */}
          <div className="mt-12 text-center">
            <Link
              href="/aurora-lab"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Aurora Lab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
