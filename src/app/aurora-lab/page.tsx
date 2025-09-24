import { Metadata } from 'next';

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
            <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mr-4 border border-cyan-400/30">
                  <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-cyan-300 font-light uppercase tracking-wide mb-1">AI Research</div>
                  <h3 className="text-2xl font-light text-white">Neural Networks & Aurora Prediction</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                How we&apos;re using deep learning algorithms to predict aurora activity with unprecedented accuracy. 
                Our neural networks process real-time solar wind data, geomagnetic indices, and historical 
                patterns to forecast aurora visibility up to 72 hours in advance.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>15 min read</span>
                  <span>•</span>
                  <span>Advanced</span>
                </div>
                <button className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quantum Aurora Physics */}
            <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4 border border-purple-400/30">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-300 font-light uppercase tracking-wide mb-1">Physics</div>
                  <h3 className="text-2xl font-light text-white">Quantum Mechanics of Aurora</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Exploring the quantum nature of aurora formation. From electron acceleration in Earth&apos;s 
                magnetosphere to the quantum transitions that create those mesmerizing colors, we dive deep 
                into the subatomic world of aurora physics.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>22 min read</span>
                  <span>•</span>
                  <span>Expert</span>
                </div>
                <button className="text-purple-300 hover:text-purple-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Space Weather Technology */}
            <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mr-4 border border-green-400/30">
                  <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-green-300 font-light uppercase tracking-wide mb-1">Technology</div>
                  <h3 className="text-2xl font-light text-white">Next-Gen Space Weather Monitoring</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                The future of space weather prediction is here. Discover how we&apos;re integrating satellite 
                constellations, ground-based sensors, and machine learning to create the most comprehensive 
                aurora monitoring network ever built.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>18 min read</span>
                  <span>•</span>
                  <span>Innovation</span>
                </div>
                <button className="text-green-300 hover:text-green-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Aurora Photography AI */}
            <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mr-4 border border-orange-400/30">
                  <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-orange-300 font-light uppercase tracking-wide mb-1">Photography</div>
                  <h3 className="text-2xl font-light text-white">AI-Enhanced Aurora Photography</h3>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                How artificial intelligence is revolutionizing aurora photography. From real-time composition 
                suggestions to automated exposure settings, discover how AI is helping photographers capture 
                the perfect aurora shot every time.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>Creative</span>
                </div>
                <button className="text-orange-300 hover:text-orange-200 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Aurora Activity</span>
                  <span className="text-orange-300 font-light">Moderate</span>
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
