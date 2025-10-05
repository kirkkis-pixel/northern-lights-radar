import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aurora Lab - Advanced Northern Lights Research & Forecasting',
  description: 'Explore cutting-edge aurora research, advanced forecasting models, and real-time space weather data. Discover the science behind the northern lights with our experimental prediction system.',
  keywords: 'aurora lab, northern lights research, aurora forecasting, space weather, solar activity, geomagnetic storms',
  openGraph: {
    title: 'Aurora Lab - Advanced Northern Lights Research & Forecasting',
    description: 'Explore cutting-edge aurora research and advanced forecasting models.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/aurora-lab',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Aurora Lab - Advanced Northern Lights Research & Forecasting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Lab - Advanced Northern Lights Research & Forecasting',
    description: 'Explore cutting-edge aurora research and advanced forecasting models.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/aurora-lab',
  },
};

export default function AuroraLabPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Regional Navigation */}
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-20 md:pt-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16">
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Research & Demo Data</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              <div className="text-white mb-2">Aurora</div>
              <div className="text-blue-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Lab
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Advanced aurora research, experimental forecasting models, and real-time space weather data
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Research Overview</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Advanced Aurora Research
            </h2>
            <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
              Our Aurora Lab combines real-time space weather data with advanced machine learning models to provide experimental aurora predictions. While our system is still in development, it offers valuable insights into aurora behavior and solar activity patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Research */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Featured Research</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Experimental Forecasting Models
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Explore our latest research projects and experimental forecasting models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/30">
                <span className="text-cyan-300 text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">AI Aurora Prediction</h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Machine learning models trained on historical aurora data to predict visibility and intensity patterns.
              </p>
              <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                SIMULATED DATA
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 border border-green-400/30">
                <span className="text-green-300 text-2xl">🌡️</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Weather Integration</h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Advanced algorithms combining space weather data with local meteorological conditions for accurate predictions.
              </p>
              <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                SIMULATED DATA
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-400/30">
                <span className="text-purple-300 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Real-time Analytics</h3>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                Live monitoring of solar wind parameters, geomagnetic activity, and aurora probability calculations.
              </p>
              <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                SIMULATED DATA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Data Dashboard */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Research Data</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              Simulated Research Data
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Experimental data visualization and simulated research metrics from our aurora research systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2.1M/s</div>
                <div className="text-sm text-white/60 mb-2">Processing Speed</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">47</div>
                <div className="text-sm text-white/60 mb-2">Solar Sunspots</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">2</div>
                <div className="text-sm text-white/60 mb-2">Solar Flares (C-class)</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">1</div>
                <div className="text-sm text-white/60 mb-2">CME Events</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">-15 nT</div>
                <div className="text-sm text-white/60 mb-2">Geomagnetic Dst Index</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">234 nT</div>
                <div className="text-sm text-white/60 mb-2">AE Index</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">G1</div>
                <div className="text-sm text-white/60 mb-2">Storm Level</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">45 TECU</div>
                <div className="text-sm text-white/60 mb-2">Ionosphere TEC Level</div>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full inline-block font-medium">
                  SIMULATED DATA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">System Status</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Research System Status
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Current status of our research systems and data sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-light text-white mb-6">Data Sources</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">NOAA Space Weather</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">NASA Solar Dynamics</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">ESA Space Weather</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">FMI Weather Data</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-light text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">API Calls</span>
                  <span className="text-white/60">2.3K/min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Response Time</span>
                  <span className="text-white/60">0.3s avg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Data Freshness</span>
                  <span className="text-white/60">30s ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Uptime</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Blog */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Research Blog</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Research Blog
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Latest insights, research findings, and technical developments from our aurora research team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/aurora-lab/blog/ai-aurora-forecasting" className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  AI-Powered Aurora Forecasting
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  How machine learning is revolutionizing aurora prediction accuracy and reliability.
                </p>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full inline-block">
                  EXTERNAL RESEARCH
                </div>
              </div>
            </Link>

            <Link href="/aurora-lab/blog/solar-storms-aurora" className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                  Solar Storms & Aurora Intensity
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Understanding the relationship between solar activity and aurora visibility patterns.
                </p>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full inline-block">
                  EXTERNAL RESEARCH
                </div>
              </div>
            </Link>

            <Link href="/aurora-lab/blog/aurora-photography" className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Aurora Photography Guide
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Technical tips and techniques for capturing stunning aurora photographs.
                </p>
                <div className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full inline-block">
                  EXTERNAL RESEARCH
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Space Weather Widget */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
            </div>
            <h2 className="text-4xl font-thin text-white mb-6">
              Current Space Weather
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time space weather data from NOAA and other sources
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SpaceWeatherWidget />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-xl font-light text-yellow-300 mb-4">Research Disclaimer</h3>
            <p className="text-white/80 font-light leading-relaxed">
              The Aurora Lab is an experimental research platform. All predictions, forecasts, and data presented here are for research purposes only and should not be used as the sole basis for travel or viewing decisions. Our models are still in development and may not accurately predict aurora activity. Always consult official meteorological services and aurora forecast centers for reliable information.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center text-white/40 text-sm font-light">
            <p>Data from NOAA SWPC (OVATION), Open-Meteo. Times in local timezone.</p>
            <p className="mt-2">Research data is simulated for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


