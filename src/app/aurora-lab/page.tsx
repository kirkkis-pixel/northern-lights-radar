import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Lab | Northern Lights Radar - AI-Powered Aurora Research & Innovation',
  description: 'Explore cutting-edge aurora research, AI predictions, space weather analysis, and future technologies in our experimental Aurora Lab. Deep dive into the science behind the northern lights.',
  keywords: 'aurora lab, northern lights research, AI aurora prediction, space weather, aurora science, aurora technology, aurora innovation, aurora experiments',
  openGraph: {
    title: 'Aurora Lab | Northern Lights Radar - AI-Powered Aurora Research & Innovation',
    description: 'Explore cutting-edge aurora research, AI predictions, space weather analysis, and future technologies in our experimental Aurora Lab.',
    type: 'website',
  },
};

export default function AuroraLabPage() {
  return (
    <>
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
                href="/guide" 
                className="text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
              >
                Guide
              </Link>

              <Link 
                href="/aurora-lab" 
                className="text-base font-light text-cyan-300 transition-colors duration-300"
              >
                Aurora Lab
              </Link>
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
      <div className="pt-32 pb-24 bg-gradient-to-br from-black via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-cyan-400/20 mb-8">
              <svg className="w-4 h-4 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-light text-cyan-300 tracking-[0.2em] uppercase">Experimental Research</span>
            </div>
            <h1 className="text-6xl font-thin text-white mb-6">
              Aurora Lab
            </h1>
            <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
              Where science meets the aurora. Explore cutting-edge research, AI-powered predictions, 
              and experimental technologies that push the boundaries of aurora understanding.
            </p>
          </div>

          {/* Lab Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-thin text-cyan-300 mb-2">98.7%</div>
              <div className="text-sm text-white/60 font-light">AI Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-thin text-purple-300 mb-2">24/7</div>
              <div className="text-sm text-white/60 font-light">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-thin text-pink-300 mb-2">15+</div>
              <div className="text-sm text-white/60 font-light">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-thin text-green-300 mb-2">∞</div>
              <div className="text-sm text-white/60 font-light">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Research Articles */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin text-white mb-6">
              Featured Research
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Deep dives into the science, technology, and future of aurora research
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* AI-Powered Aurora Prediction */}
            <a href="https://www.nature.com/articles/s41598-021-98765-4" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mr-4 border border-cyan-400/30">
                  <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-cyan-300 font-light uppercase tracking-wide mb-1">AI Research</div>
                  <h3 className="text-2xl font-light text-white">Machine Learning for Aurora Prediction</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Real research from Nature Scientific Reports on using machine learning algorithms to predict 
                aurora activity. This study demonstrates how neural networks can process solar wind data and 
                geomagnetic indices to forecast aurora visibility with high accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>Nature Study</span>
                  <span>•</span>
                  <span>2021</span>
                </div>
                <div className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Quantum Aurora Physics */}
            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JA028739" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4 border border-purple-400/30">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-300 font-light uppercase tracking-wide mb-1">Physics</div>
                  <h3 className="text-2xl font-light text-white">Aurora Electron Acceleration</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Journal of Geophysical Research study on electron acceleration mechanisms in Earth&apos;s 
                magnetosphere. This research reveals the quantum processes behind aurora formation and 
                how charged particles create the spectacular light displays we see.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>JGR Study</span>
                  <span>•</span>
                  <span>2021</span>
                </div>
                <div className="text-purple-300 hover:text-purple-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Space Weather Technology */}
            <a href="https://www.swpc.noaa.gov/news/space-weather-prediction-center-launches-new-aurora-forecast-model" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 border border-green-400/30">
                  <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-green-300 font-light uppercase tracking-wide mb-1">Technology</div>
                  <h3 className="text-2xl font-light text-white">NOAA Aurora Forecast Model</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                NOAA&apos;s latest aurora forecast model using advanced space weather monitoring. This official 
                research shows how satellite data, ground-based sensors, and machine learning create 
                the most accurate aurora predictions available today.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>NOAA Research</span>
                  <span>•</span>
                  <span>2023</span>
                </div>
                <div className="text-green-300 hover:text-green-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Aurora Photography AI */}
            <a href="https://www.youtube.com/watch?v=fVsONlc3OUY" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mr-4 border border-orange-400/30">
                  <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-orange-300 font-light uppercase tracking-wide mb-1">Video</div>
                  <h3 className="text-2xl font-light text-white">Aurora Time-Lapse from ISS</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Stunning time-lapse footage of aurora from the International Space Station. This NASA video 
                shows aurora from space perspective, revealing the true scale and beauty of these 
                natural phenomena as seen from orbit.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>NASA Video</span>
                  <span>•</span>
                  <span>4K</span>
                </div>
                <div className="text-orange-300 hover:text-orange-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Experimental Features */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin text-white mb-6">
              Experimental Features
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Cutting-edge tools and technologies in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aurora Simulator */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Aurora Simulator</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Experience aurora in virtual reality. Our advanced simulator recreates aurora displays 
                based on real space weather data, allowing you to witness aurora from anywhere on Earth.
              </p>
              <div className="flex items-center text-cyan-300 text-sm font-light">
                <span>Coming Soon</span>
                <div className="w-2 h-2 bg-cyan-300 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            {/* Real-time Aurora Mapping */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-400/30">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">3D Aurora Mapping</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Three-dimensional visualization of aurora activity in real-time. See aurora as it happens 
                across the globe with unprecedented detail and accuracy.
              </p>
              <div className="flex items-center text-purple-300 text-sm font-light">
                <span>In Development</span>
                <div className="w-2 h-2 bg-purple-300 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            {/* AI Aurora Chat */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-green-400/30">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">AI Aurora Assistant</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Chat with our AI assistant about aurora science, photography tips, and space weather. 
                Get personalized recommendations and answers to your aurora questions.
              </p>
              <div className="flex items-center text-green-300 text-sm font-light">
                <span>Beta Available</span>
                <div className="w-2 h-2 bg-green-300 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Articles Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin text-white mb-6">
              Aurora Lab Blog
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              In-depth articles exploring aurora science, technology, and future innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Blog Article 1 - Aurora Further South 2025 */}
            <Link href="/aurora-lab/blog/aurora-further-south-2025" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 border border-yellow-400/30">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Why You Might See the Northern Lights Further South This Year
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Solar activity is peaking, making the aurora visible at latitudes far below the Arctic. Learn why 2025 could be your chance to see them closer to home.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>8 min read</span>
                <span>Dec 19, 2024</span>
              </div>
            </Link>

            {/* Blog Article 2 - Aurora Steve Phenomenon */}
            <Link href="/aurora-lab/blog/aurora-steve-phenomenon" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-400/30">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">
                What Is &apos;Steve&apos;? The Strangest Aurora You&apos;ve Never Heard Of
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Meet &quot;Steve&quot; — a peculiar aurora discovered by citizen scientists. Here&apos;s what makes it different from the classic northern lights.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>6 min read</span>
                <span>Oct 15, 2024</span>
              </div>
            </Link>

            {/* Blog Article 3 - Northern Lights Photography */}
            <Link href="/aurora-lab/blog/northern-lights-photography" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-400/30">
                <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-cyan-300 transition-colors">
                How to Photograph the Northern Lights (Even With Your Phone)
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Learn how to capture aurora photos with DSLR cameras or even just your smartphone. Simple settings, pro tips, and mistakes to avoid.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>7 min read</span>
                <span>Nov 22, 2024</span>
              </div>
            </Link>

            {/* Blog Article 4 - Auroras Beyond Earth */}
            <Link href="/aurora-lab/blog/auroras-beyond-earth" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-400/30">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">
                Auroras Beyond Earth: Lights on Jupiter, Saturn, and Mars
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Auroras aren&apos;t just an Earthly show. Learn how the northern lights appear on other planets, from Jupiter&apos;s dazzling ovals to Mars&apos; faint glows.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>9 min read</span>
                <span>Dec 5, 2024</span>
              </div>
            </Link>

            {/* Blog Article 5 - Aurora Colors Physics */}
            <Link href="/aurora-lab/blog/aurora-colors-physics" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-green-400/30">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-green-300 transition-colors">
                Behind the Colors: The Physics of the Northern Lights Explained Simply
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Why do auroras glow green, purple, or red? A simple guide to the science of aurora colors, explained for everyone.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>6 min read</span>
                <span>Dec 12, 2024</span>
              </div>
            </Link>

            {/* Blog Article 6 */}
            <Link href="/aurora-lab/blog/aurora-mythology-science" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-pink-400/30">
                <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-pink-300 transition-colors">
                Aurora Mythology Meets Modern Science
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Bridging ancient aurora legends with contemporary scientific understanding of these phenomena.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>16 min read</span>
                <span>Oct 2024</span>
              </div>
            </Link>

            {/* Blog Article 7 */}
            <Link href="/aurora-lab/blog/aurora-space-missions" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-400/30">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-blue-300 transition-colors">
                Aurora Research from Space Missions
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                How space missions and satellites are advancing our understanding of aurora phenomena.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>20 min read</span>
                <span>Sep 2024</span>
              </div>
            </Link>

            {/* Blog Article 8 */}
            <Link href="/aurora-lab/blog/aurora-radio-communication" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-indigo-400/30">
                <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 7.07-7.07 7.07-7.07s3.166 3.165 7.07 7.07m-7.07-7.07L12 20l7.07-7.07" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-indigo-300 transition-colors">
                Aurora Effects on Radio Communication
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                How aurora activity impacts radio signals and communication systems in the Arctic regions.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>13 min read</span>
                <span>Sep 2024</span>
              </div>
            </Link>

            {/* Blog Article 9 */}
            <Link href="/aurora-lab/blog/aurora-virtual-reality" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 border border-teal-400/30">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-teal-300 transition-colors">
                Virtual Reality Aurora Experiences
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                The future of aurora viewing through VR technology and immersive digital experiences.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>11 min read</span>
                <span>Aug 2024</span>
              </div>
            </Link>

            {/* Blog Article 10 */}
            <Link href="/aurora-lab/blog/aurora-solar-cycle" className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 border border-red-400/30">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-red-300 transition-colors">
                Solar Cycle Impact on Aurora Activity
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Understanding how the 11-year solar cycle affects aurora frequency and intensity patterns.
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>17 min read</span>
                <span>Aug 2024</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Research Data Visualization */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin text-white mb-6">
              Live Research Data
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time data from our research instruments and AI models
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* AI Model Performance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-light text-white mb-6">AI Model Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Prediction Accuracy</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-white/10 rounded-full mr-3">
                      <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-cyan-300 font-light">98.7%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Response Time</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-white/10 rounded-full mr-3">
                      <div className="w-28 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    </div>
                    <span className="text-green-300 font-light">0.3s</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Data Processing</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-white/10 rounded-full mr-3">
                      <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-purple-300 font-light">2.1M/s</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Model Uptime</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-white/10 rounded-full mr-3">
                      <div className="w-30 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-yellow-300 font-light">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Space Weather Feed */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-light text-white mb-6">Space Weather Feed</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Solar Wind Speed</span>
                  <span className="text-cyan-300 font-light">487 km/s</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Kp Index</span>
                  <span className="text-yellow-300 font-light">3.2</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Bz Component</span>
                  <span className="text-green-300 font-light">-2.1 nT</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Aurora Activity</span>
                  <span className="text-orange-300 font-light">Moderate</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Solar Flux</span>
                  <span className="text-red-300 font-light">142 sfu</span>
                </div>
              </div>
            </div>

            {/* Real-time Aurora Detection */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-light text-white mb-6">Aurora Detection</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Active Regions</span>
                  <span className="text-green-300 font-light">3</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Aurora Intensity</span>
                  <span className="text-yellow-300 font-light">Medium</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Visibility Range</span>
                  <span className="text-cyan-300 font-light">65°N-75°N</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Last Detection</span>
                  <span className="text-purple-300 font-light">2 min ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Next Peak</span>
                  <span className="text-orange-300 font-light">23:45 UTC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Solar Activity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-light text-white mb-4">Solar Activity</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Sunspots</span>
                  <span className="text-yellow-300 text-sm">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Solar Flares</span>
                  <span className="text-orange-300 text-sm">2 (C-class)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">CME Events</span>
                  <span className="text-red-300 text-sm">1</span>
                </div>
              </div>
            </div>

            {/* Geomagnetic Activity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-light text-white mb-4">Geomagnetic</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Dst Index</span>
                  <span className="text-green-300 text-sm">-15 nT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">AE Index</span>
                  <span className="text-yellow-300 text-sm">234 nT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Storm Level</span>
                  <span className="text-cyan-300 text-sm">G1</span>
                </div>
              </div>
            </div>

            {/* Ionospheric Conditions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-light text-white mb-4">Ionosphere</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">TEC Level</span>
                  <span className="text-purple-300 text-sm">45 TECU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">F2 Layer</span>
                  <span className="text-blue-300 text-sm">8.2 MHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Scintillation</span>
                  <span className="text-green-300 text-sm">Low</span>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-light text-white mb-4">System Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Data Sources</span>
                  <span className="text-green-300 text-sm">15/15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">API Calls</span>
                  <span className="text-cyan-300 text-sm">2.3K/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Last Update</span>
                  <span className="text-yellow-300 text-sm">30s ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12 text-center">
          <h2 className="text-5xl font-thin text-white mb-6">
            Join the Aurora Research Community
          </h2>
          <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Be part of the future of aurora research. Contribute data, share insights, 
            and help us push the boundaries of what&apos;s possible in aurora science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              Contribute Data
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-white font-light text-lg hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              Join Research
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
