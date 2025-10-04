import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Photograph the Northern Lights (Even With Your Phone) | Aurora Lab',
  description: 'Learn how to capture aurora photos with DSLR cameras or even just your smartphone. Simple settings, pro tips, and mistakes to avoid.',
  keywords: 'northern lights photography, aurora camera settings, how to photograph aurora, aurora photography tips, smartphone aurora photography',
  openGraph: {
    title: 'How to Photograph the Northern Lights (Even With Your Phone) | Aurora Lab',
    description: 'Learn how to capture aurora photos with DSLR cameras or even just your smartphone. Simple settings, pro tips, and mistakes to avoid.',
    type: 'article',
    publishedTime: '2024-11-22T00:00:00Z',
    authors: ['Aurora Lab Research Team'],
  },
};

export default function NorthernLightsPhotographyPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-20">
            <Link href="/aurora-lab" className="hover:text-cyan-300 transition-colors">Aurora Lab</Link>
            <span>•</span>
            <span className="text-white/40">Northern Lights Photography</span>
          </div>

          {/* Article Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-400/20 mb-12">
              <svg className="w-4 h-4 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-light text-cyan-300 tracking-[0.2em] uppercase">Photography Guide</span>
            </div>
            
            <h1 className="text-5xl font-thin text-white mb-6 leading-tight">
              How to Photograph the Northern Lights (Even With Your Phone)
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Learn how to capture aurora photos with DSLR cameras or even just your smartphone. Simple settings, pro tips, and mistakes to avoid.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/50">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Nov 22, 2024</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Photography</span>
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
                Seeing the northern lights is unforgettable. But capturing them on camera — and making the memory last forever — is even better. 
                The good news: you don&apos;t need a pro camera. With a few tricks, even your phone can do justice to the aurora.
              </p>
            </div>

            {/* DSLR / Mirrorless Settings */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">DSLR / Mirrorless Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Lens</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Wide-angle, fast (f/2.8 or lower) for maximum light capture and dramatic sky coverage.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                    <h3 className="text-xl font-light text-white mb-3">ISO</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      800–3200. Start lower and increase if the aurora is faint.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Shutter</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      5–20 seconds, depending on aurora brightness. Longer for faint aurora.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Focus</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Manual, set to infinity. Test in daylight if possible.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-blue-300">Pro Tip:</strong> Use a tripod, and turn off image stabilization. 
                      The aurora moves, but your camera shouldn&apos;t.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Smartphone Tips */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Smartphone Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Night Mode</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Use Night mode or a dedicated astrophotography mode (many newer phones have it).
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Stabilization</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Stabilize with a tripod or even a rock. Every bit of stability helps.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Exposure Control</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Lower exposure times if aurora is bright to avoid overexposure.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-400/20">
                    <h3 className="text-xl font-light text-white mb-3">Apps</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Apps like NightCap Camera (iOS) can extend capability significantly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bonus Tricks */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Bonus Tricks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Foregrounds Matter</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Frame a cabin, trees, or lake for scale and visual interest.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-400/30">
                    <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Dress Warm</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Fingers freeze quickly while fiddling with buttons!
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Shoot in RAW</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Gives more room for editing and better final results.
                  </p>
                </div>
              </div>
            </section>

            {/* Why It's Worth It */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Why It&apos;s Worth It</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Aurora is fleeting, but photos keep the magic alive. With these tips, you can return home with both memories and Instagram-worthy shots.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-cyan-300 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">Key Takeaway</h3>
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      The aurora is one of nature&apos;s most spectacular displays, and capturing it doesn&apos;t require expensive equipment. 
                      With the right techniques and a bit of patience, anyone can create stunning aurora photographs that will last a lifetime.
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
              <Link href="/aurora-lab/blog/aurora-further-south-2025" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  Why You Might See the Northern Lights Further South This Year
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Solar activity is peaking, making the aurora visible at latitudes far below the Arctic.
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
