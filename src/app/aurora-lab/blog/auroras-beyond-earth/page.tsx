import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auroras Beyond Earth: Lights on Jupiter, Saturn, and Mars | Aurora Lab',
  description: 'Auroras aren\'t just an Earthly show. Learn how the northern lights appear on other planets, from Jupiter\'s dazzling ovals to Mars\' faint glows.',
  keywords: 'aurora on Jupiter, aurora on Mars, planetary auroras, aurora borealis science, space aurora, solar system auroras',
  openGraph: {
    title: 'Auroras Beyond Earth: Lights on Jupiter, Saturn, and Mars | Aurora Lab',
    description: 'Auroras aren\'t just an Earthly show. Learn how the northern lights appear on other planets, from Jupiter\'s dazzling ovals to Mars\' faint glows.',
    type: 'article',
    publishedTime: '2024-12-05T00:00:00Z',
    authors: ['Aurora Lab Research Team'],
  },
};

export default function AurorasBeyondEarthPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-20">
            <Link href="/aurora-lab" className="hover:text-cyan-300 transition-colors">Aurora Lab</Link>
            <span>•</span>
            <span className="text-white/40">Auroras Beyond Earth</span>
          </div>

          {/* Article Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-400/20 mb-12">
              <svg className="w-4 h-4 text-purple-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm font-light text-purple-300 tracking-[0.2em] uppercase">Planetary Science</span>
            </div>
            
            <h1 className="text-5xl font-thin text-white mb-6 leading-tight">
              Auroras Beyond Earth: Lights on Jupiter, Saturn, and Mars
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Auroras aren&apos;t just an Earthly show. Learn how the northern lights appear on other planets, from Jupiter&apos;s dazzling ovals to Mars&apos; faint glows.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/50">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>9 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Dec 5, 2024</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Space Science</span>
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
                When we talk about auroras, we usually imagine green curtains shimmering over Lapland or Alaska. But Earth isn&apos;t the only world with dancing skies. 
                From the gas giants to dusty Mars, auroras are a solar system-wide phenomenon.
              </p>
            </div>

            {/* Auroras on Jupiter */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Auroras on Jupiter</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Jupiter has the most powerful auroras in the solar system. Thanks to its enormous magnetic field and volcanic moon Io, which spits charged particles into space, 
                Jupiter&apos;s auroras are permanent and incredibly bright. NASA&apos;s Juno spacecraft has captured stunning ultraviolet views.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-400/20">
                  <h3 className="text-xl font-light text-white mb-3">Magnetic Field</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Jupiter&apos;s magnetic field is 20,000 times stronger than Earth&apos;s, creating the most intense auroral displays in our solar system.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <h3 className="text-xl font-light text-white mb-3">Io&apos;s Influence</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    The volcanic moon Io continuously supplies charged particles, making Jupiter&apos;s auroras permanent rather than sporadic.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-orange-300">NASA&apos;s Juno Mission:</strong> The spacecraft has provided unprecedented views of Jupiter&apos;s auroras, 
                      revealing complex structures and helping scientists understand the planet&apos;s magnetic environment.
                      <a href="https://www.nasa.gov/mission_pages/juno/main/index.html" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-orange-200 transition-colors ml-1">
                        Learn more about Juno →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Saturn's Shimmering Lights */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Saturn&apos;s Shimmering Lights</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Saturn also shows oval auroras, visible in ultraviolet. Like Earth&apos;s, they respond to solar wind, but Saturn&apos;s rings and moons add complexity to the magnetic environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                    <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Solar Wind Response</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Saturn&apos;s auroras respond to solar wind changes, similar to Earth&apos;s northern lights.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Ring Interactions</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Saturn&apos;s iconic rings create unique magnetic field interactions affecting auroral patterns.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Moon Complexity</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Multiple moons create complex magnetic field interactions, making Saturn&apos;s auroras unique.
                  </p>
                </div>
              </div>
            </section>

            {/* Auroras on Mars */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Auroras on Mars</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Mars lacks a global magnetic field, but local crustal fields and interactions with solar wind still create patchy auroras. 
                In 2025, NASA&apos;s MAVEN spacecraft detected a global aurora during a major solar storm.
              </p>
              
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-red-300">MAVEN Discovery:</strong> NASA&apos;s Mars Atmosphere and Volatile Evolution mission has revealed that Mars experiences 
                      both localized and global auroras, providing insights into the planet&apos;s atmospheric processes.
                      <a href="https://www.nasa.gov/mission_pages/maven/main/index.html" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-red-200 transition-colors ml-1">
                        Learn more about MAVEN →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Study Them? */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Why Study Them?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Magnetic Fields</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Reveal information about planetary magnetic fields and their evolution over time.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Solar Wind</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Help us understand solar wind interactions across the entire solar system.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Visual Insights</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Offer stunning visual insights into alien worlds and their atmospheric processes.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Takeaway</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                The next time you see an aurora on Earth, remember — the same cosmic light show is happening on worlds millions of kilometers away.
              </p>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-purple-300 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">Key Takeaway</h3>
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      Auroras are a universal phenomenon that connects Earth to the broader solar system. By studying these cosmic light shows on other planets, 
                      we gain deeper insights into the fundamental processes that shape our universe and our own planet&apos;s magnetic environment.
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
              <Link href="/aurora-lab/blog/northern-lights-photography" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  How to Photograph the Northern Lights (Even With Your Phone)
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Learn how to capture aurora photos with DSLR cameras or even just your smartphone.
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-white font-light text-lg hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
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

