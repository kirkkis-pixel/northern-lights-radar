import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Travel Guide: Top Destinations in Finland, Norway, and Sweden | Aurora Lab',
  description: 'Planning a northern lights trip? Here are the best destinations in Lapland, Tromsø, and Abisko to maximize your chances.',
  keywords: 'aurora travel guide, best place see northern lights, lapland aurora, norway aurora, sweden aurora, tromso aurora, abisko aurora',
  openGraph: {
    title: 'Aurora Travel Guide: Top Destinations in Finland, Norway, and Sweden | Aurora Lab',
    description: 'Planning a northern lights trip? Here are the best destinations in Lapland, Tromsø, and Abisko to maximize your chances.',
    type: 'article',
    publishedTime: '2024-12-18T00:00:00Z',
    authors: ['Aurora Lab Research Team'],
  },
};

export default function AuroraTravelGuidePage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-purple-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-20">
            <Link href="/aurora-lab" className="hover:text-cyan-300 transition-colors">Aurora Lab</Link>
            <span>•</span>
            <span className="text-white/40">Aurora Travel Guide</span>
          </div>

          {/* Article Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-full border border-blue-400/20 mb-12">
              <svg className="w-4 h-4 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-light text-blue-300 tracking-[0.2em] uppercase">Travel Guide</span>
            </div>
            
            <h1 className="text-5xl font-thin text-white mb-6 leading-tight">
              Aurora Travel Guide: Top Destinations in Finland, Norway, and Sweden
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Planning a northern lights trip? Here are the best destinations in Lapland, Tromsø, and Abisko to maximize your chances.
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
                <span>Dec 18, 2024</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Travel</span>
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
                Want to see the northern lights in person? Scandinavia offers some of the world&apos;s best spots. 
                Here&apos;s where to go — and when — for your best chance.
              </p>
            </div>

            {/* Finland: Lapland's Magic */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Finland: Lapland&apos;s Magic</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Rovaniemi</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Aurora + Santa Claus hometown. Perfect for families with aurora viewing and Christmas magic combined.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Ivalo & Inari</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Remote, dark-sky areas with less light pollution. Ideal for serious aurora photographers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Saariselkä & Levi</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Resorts with both skiing and aurora. Perfect for winter sports enthusiasts who want to see the lights.
                  </p>
                </div>
              </div>
            </section>

            {/* Norway: Fjords & Arctic Wonders */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Norway: Fjords & Arctic Wonders</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Tromsø</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    The &quot;Gateway to the Arctic&quot; with excellent infrastructure and aurora viewing opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Alta</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Known for its stable, dry climate with excellent aurora viewing conditions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Lofoten Islands</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Stunning fjord scenery + aurora. One of the most photogenic aurora destinations.
                  </p>
                </div>
              </div>
            </section>

            {/* Sweden: Arctic Silence */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Sweden: Arctic Silence</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                    <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Abisko National Park</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Famous &quot;blue hole&quot; of clear skies. One of the world&apos;s best aurora viewing locations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Kiruna</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Sweden&apos;s northernmost town, with easy access to wilderness and aurora viewing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Jukkasjärvi</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Home to the famous Icehotel, offering unique aurora viewing experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Travel Tips */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Travel Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Best Season</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Visit September–March for the best aurora viewing opportunities. Peak viewing from December to February when nights are longest.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Stay Duration</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Stay at least 3–4 nights for better odds of seeing the aurora. The more nights, the higher your chances.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">Forecast Tools</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Use Aurora forecast tools to plan each night&apos;s viewing activities. Check space weather and Kp index.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-light text-white mb-3">Climate Considerations</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-cyan-300">Finland:</strong> Cold but dry climate. <strong className="text-cyan-300">Norway:</strong> Coastal areas can be cloudy, inland areas like Alta are more stable. <strong className="text-cyan-300">Sweden:</strong> Abisko&apos;s &quot;blue hole&quot; offers the clearest skies.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                  <h3 className="text-xl font-light text-white mb-3">Experience Levels</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    <strong className="text-green-300">Beginners:</strong> Rovaniemi, Tromsø. <strong className="text-green-300">Photographers:</strong> Ivalo, Inari, Lofoten. <strong className="text-green-300">Adventure seekers:</strong> Abisko, remote Lapland areas.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-400/20">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white/70 font-light leading-relaxed">
                      <strong className="text-blue-300">Pro Tip:</strong> Book accommodations with aurora wake-up services and guided tours. 
                      Many hotels offer specialized aurora viewing packages that include transportation to prime viewing spots. 
                      Consider staying in multiple locations to maximize your chances across different weather patterns.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="mb-16">
              <h2 className="text-4xl font-normal text-white mb-10">Takeaway</h2>
              
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                The aurora is unpredictable, but these destinations stack the odds in your favor.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-blue-300 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">Key Takeaway</h3>
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      Scandinavia offers the world&apos;s best aurora viewing destinations, each with unique advantages. 
                      Whether you choose Finland&apos;s Lapland magic, Norway&apos;s fjord wonders, or Sweden&apos;s Arctic silence, 
                      you&apos;re positioning yourself for the best possible chance to witness nature&apos;s most spectacular light show.
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
              
              <Link href="/aurora-lab/blog/aurora-colors-physics" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-light text-white mb-3 group-hover:text-green-300 transition-colors">
                  Behind the Colors: The Physics of the Northern Lights Explained Simply
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  Why do auroras glow green, purple, or red? A simple guide to the science of aurora colors.
                </p>
              </Link>
            </div>
          </div>

          {/* Back to Aurora Lab */}
          <div className="mt-12 text-center">
            <Link
              href="/aurora-lab"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30 rounded-2xl text-white font-light text-lg hover:from-blue-500/30 hover:to-green-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
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
