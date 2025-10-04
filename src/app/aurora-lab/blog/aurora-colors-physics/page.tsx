import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Behind the Colors: The Physics of the Northern Lights Explained Simply | Aurora Lab',
  description: 'Why do auroras glow green, purple, or red? A simple guide to the science of aurora colors, explained for everyone.',
  keywords: 'aurora colors explained, why aurora is green, aurora science simple, aurora physics, northern lights colors, aurora chemistry',
  openGraph: {
    title: 'Behind the Colors: The Physics of the Northern Lights Explained Simply | Aurora Lab',
    description: 'Why do auroras glow green, purple, or red? A simple guide to the science of aurora colors, explained for everyone.',
    type: 'article',
    publishedTime: '2024-12-12T00:00:00Z',
    authors: ['Aurora Lab Research Team'],
  },
};

export default function AuroraColorsPhysicsPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-purple-500/5 to-red-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-20">
            <Link href="/aurora-lab" className="hover:text-cyan-300 transition-colors">Aurora Lab</Link>
            <span>•</span>
            <span className="text-white/40">Aurora Colors Physics</span>
          </div>

          {/* Article Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-green-400/20 mb-12">
              <svg className="w-4 h-4 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-light text-green-300 tracking-[0.2em] uppercase">Physics & Chemistry</span>
            </div>
            
            <h1 className="text-5xl font-thin text-white mb-6 leading-tight">
              Behind the Colors: The Physics of the Northern Lights Explained Simply
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Why do auroras glow green, purple, or red? A simple guide to the science of aurora colors, explained for everyone.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/50">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Dec 12, 2024</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Physics</span>
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
                The northern lights look magical, but their colors are pure physics. From greens to purples, aurora hues tell a story about Earth&apos;s atmosphere and space weather — 
                and you don&apos;t need a PhD to understand it.
              </p>
            </div>

            {/* Why Green Dominates */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Why Green Dominates</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Most auroras shine green because oxygen molecules at ~100 km altitude release photons at 557.7 nm — in the green spectrum. 
                That&apos;s why green is the &quot;default&quot; aurora color. NASA has great visuals on this.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                  <h3 className="text-xl font-light text-white mb-3">Oxygen at 100km</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    The most common aurora altitude where oxygen molecules emit green light at 557.7 nanometers wavelength.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-light text-white mb-3">557.7 nm Wavelength</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    This specific wavelength falls perfectly in the green spectrum visible to human eyes, making it the most common aurora color.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-green-300">NASA Resources:</strong> The space agency provides excellent visual explanations of aurora physics and color formation. 
                      <a href="https://www.nasa.gov/aurora" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 transition-colors ml-1">
                        Explore NASA&apos;s aurora science →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Auroras */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Red Auroras</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                At higher altitudes (~200 km), oxygen can also emit deep red light. Rare but stunning, red auroras often appear at the top of green curtains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-400/30">
                    <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Higher Altitude</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Red auroras occur at ~200 km altitude, much higher than green auroras.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-400/30">
                    <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Rare & Stunning</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Red auroras are less common but create the most dramatic displays.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-pink-400/30">
                    <svg className="w-8 h-8 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Top of Curtains</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Often appear at the top of green aurora curtains, creating layered effects.
                  </p>
                </div>
              </div>
            </section>

            {/* Purple & Blue Hues */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Purple & Blue Hues</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Nitrogen molecules add blues and purples, especially in faster-moving auroras. When green and purple mix, the result is a surreal pink edge.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Nitrogen Molecules</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Nitrogen creates blue and purple hues, especially in fast-moving aurora displays.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Faster Auroras</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      High-speed charged particles create more nitrogen interactions, producing purple colors.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-6 border border-pink-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Color Mixing</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      When green and purple mix, they create surreal pink edges on aurora curtains.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Surreal Effects</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      The combination of different gases creates the most otherworldly aurora displays.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why They Dance */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Why They Dance</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Charged particles from the solar wind funnel down magnetic field lines, colliding with atmospheric gases. Different altitudes = different colors.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-cyan-300">The Process:</strong> Solar wind particles follow Earth&apos;s magnetic field lines to the poles, 
                      where they collide with atmospheric gases at different altitudes, creating the characteristic aurora colors and movements we see.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Takeaway</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Aurora colors are a chemistry lesson in the sky — every shade tells us what&apos;s happening above Earth&apos;s atmosphere.
              </p>
              
              <div className="bg-gradient-to-r from-green-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-green-300 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">Key Takeaway</h3>
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      Every aurora color is a window into the physics of our upper atmosphere. By understanding these colors, 
                      we can read the story of solar wind interactions, atmospheric composition, and the incredible dance of charged particles 
                      that creates one of nature&apos;s most beautiful phenomena.
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
              <Link href="/aurora-lab/blog/auroras-beyond-earth" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Auroras Beyond Earth: Lights on Jupiter, Saturn, and Mars
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Learn how the northern lights appear on other planets across the solar system.
                </p>
              </Link>
              
              <Link href="/aurora-lab/blog/aurora-steve-phenomenon" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">
                  What Is &apos;Steve&apos;? The Strangest Aurora You&apos;ve Never Heard Of
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Meet &quot;Steve&quot; — a peculiar aurora discovered by citizen scientists.
                </p>
              </Link>
            </div>
          </div>

          {/* Back to Aurora Lab */}
          <div className="mt-12 text-center">
            <Link
              href="/aurora-lab"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-400/30 rounded-2xl text-white font-light text-lg hover:from-green-500/30 hover:to-purple-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105"
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
